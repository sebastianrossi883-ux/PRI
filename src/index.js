'use strict';

const log = require('./logger');
const { caricaConfig, caricaClienti, caricaMessaggi } = require('./config');
const { caricaBlocklist } = require('./blocklist');
const {
  creaSupabase,
  caricaClientiSupabase,
  caricaMessaggiSupabase,
  caricaBlocklistSupabase,
  scriviReportSupabase,
  caricaAccountSupabase,
  aggiornaStatoAccount,
  leggiImpostazioni,
  prendiComandi,
  segnaComando,
} = require('./supabase');
const fs = require('fs');
const path = require('path');
const { creaGestoreArrivo, avviaOutbox } = require('./inbox');
const { Stato } = require('./state');
const { Sender } = require('./sender');
const { Scheduler } = require('./scheduler');

function parseArgs(argv) {
  return {
    now: argv.includes('--now'),
    dryRun: argv.includes('--dry-run'),
  };
}

async function creaClientOpenWa(config) {
  const { create } = require('@open-wa/wa-automate');
  log.info('Avvio sessione WhatsApp OpenWA (scansiona il QR se richiesto)...');
  const client = await create({
    sessionId: (config.openwa && config.openwa.sessionId) || 'clienti',
    headless: !config.openwa || config.openwa.headless !== false,
    sessionDataPath: (config.openwa && config.openwa.cartellaSessione) || './.wa-session',
    qrTimeout: 0,
    authTimeout: 0,
    restartOnCrash: true,
    killProcessOnBrowserClose: true,
  });
  log.ok('Sessione WhatsApp pronta.');
  return client;
}

async function creaClient(config, account = {}) {
  const motore = (config.motore || 'openwa').toLowerCase();
  if (motore === 'baileys') {
    const { creaClientBaileys } = require('./baileys');
    return creaClientBaileys(config, account);
  }
  // OpenWA: singolo account, nessun proxy/multi-numero.
  return creaClientOpenWa(config);
}

/** Elenco degli account (numeri). Se non configurati, un solo account 'default'. */
function elencaAccount(config) {
  if (Array.isArray(config.account) && config.account.length) return config.account;
  const b = config.baileys || {};
  return [{ id: 'default', proxyUrl: b.proxyUrl, cartellaSessione: b.cartellaSessione }];
}

/**
 * Decide da dove prendere i numeri:
 *  - se Supabase e' attivo e la tabella 'account' ha righe -> usa QUELLI (li
 *    gestisci dal pannello: aggiungi numeri e IP dal telefono, senza PC);
 *  - altrimenti usa la config (singolo numero o lista 'account').
 * Ogni numero porta sempre il SUO proxy/IP e la SUA sessione isolata.
 */
async function elencaAccountEffettivi(config, sb) {
  if (sb) {
    const daDb = await caricaAccountSupabase(sb);
    if (daDb.length) return { account: daDb, dinamico: true };
  }
  return { account: elencaAccount(config), dinamico: false };
}

/** Divide i clienti tra gli account (assegnazione stabile per rotazione). */
function distribuisci(clienti, nAccount) {
  const gruppi = Array.from({ length: nAccount }, () => []);
  clienti.forEach((c, i) => gruppi[i % nAccount].push(c));
  return gruppi;
}

async function caricaDati(config, sb, prefisso) {
  if (sb) {
    log.info('Sorgente dati: Supabase.');
    const blocklist = await caricaBlocklistSupabase(sb, prefisso);
    const clienti = await caricaClientiSupabase(sb, prefisso, blocklist);
    const messaggi = await caricaMessaggiSupabase(sb);
    return { blocklist, clienti, messaggi };
  }
  const blocklist = caricaBlocklist(config.file.blocklistPath, prefisso);
  const clienti = caricaClienti(config.file.clientiPath, prefisso, blocklist);
  const messaggi = caricaMessaggi(config.file.messaggiPath);
  return { blocklist, clienti, messaggi };
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const config = caricaConfig();
  const prefisso = config.prefissoInternazionaleDefault || '';
  const sb = creaSupabase(config);
  const onReport = sb ? (dataKey, r) => scriviReportSupabase(sb, dataKey, r) : null;

  // Impostazioni gestibili dal pannello (es. MODALITA' PROVA on/off + numero).
  // Hanno la precedenza sulla config del server, cosi' le cambi dal telefono.
  let chiaveImpostazioni = '';
  if (sb) {
    const imp = await leggiImpostazioni(sb);
    if (imp.prova_abilitato !== undefined || imp.prova_numero) {
      config.prova = {
        abilitato: imp.prova_abilitato === 'true' || imp.prova_abilitato === true,
        numero: imp.prova_numero || (config.prova && config.prova.numero) || '',
      };
    }
    chiaveImpostazioni = `${config.prova && config.prova.abilitato}|${config.prova && config.prova.numero}`;
    if (config.prova && config.prova.abilitato) {
      log.warn(`MODALITA' PROVA ATTIVA: i messaggi vanno al tuo numero ${config.prova.numero}, non ai clienti.`);
    }
  }

  const { blocklist, clienti, messaggi } = await caricaDati(config, sb, prefisso);

  log.info(
    `Configurazione: ${clienti.length} clienti attivi, ${messaggi.length} template, ` +
      `${config.invii.messaggiAlGiorno} msg/giorno, finestra ${config.finestra.oraInizio}-${config.finestra.oraFine}, ` +
      `intervallo ${config.invii.intervalloMinMinuti}-${config.invii.intervalloMaxMinuti} min.`
  );
  if (blocklist.size > 0) {
    log.info(`Blocklist: ${blocklist.size} numeri esclusi.`);
  }

  // -------- MODALITA' DRY-RUN: un solo flusso, nessun collegamento --------
  if (args.dryRun) {
    log.warn("MODALITA' DRY-RUN: nessun messaggio verra' inviato davvero.");
    const stato = new Stato(config.file.statoPath);
    const sender = new Sender(null, config, true);
    const scheduler = new Scheduler({
      config, sender, stato, clienti, messaggi, avviaSubito: args.now, onReport,
    });
    await scheduler.avvia();
    process.exit(0);
    return;
  }

  // -------- MODALITA' REALE: un runner per ogni account (numero) --------
  const { account, dinamico } = await elencaAccountEffettivi(config, sb);
  const gruppiClienti = distribuisci(clienti, account.length);
  const daChiudere = [];
  const schedulers = [];

  if (dinamico) {
    log.info(`Numeri gestiti dal pannello (Supabase): ${account.map((a) => a.id).join(', ')}.`);
  }

  // Avvia UN numero in modo indipendente. Non blocca gli altri: se questo
  // numero e' nuovo e aspetta la scansione del QR, gli altri partono lo stesso
  // (cosi' colleghi i numeri uno alla volta dal pannello, dal telefono).
  const avviaUnAccount = async (acc, i) => {
    const id = acc.id || `num${i + 1}`;
    log.info(`Avvio account "${id}"${acc.proxyUrl ? ' (IP dedicato)' : ' (nessun IP!)'}...`);
    if (sb) await aggiornaStatoAccount(sb, id, { stato: 'avvio' });

    // Ogni account salva i messaggi in arrivo sul PROPRIO inbox (numero giusto).
    const onMessaggio = creaGestoreArrivo(sb, id);
    // QR e stato di questo numero vanno nel pannello (lo colleghi dal telefono).
    const onQr = sb ? (qr) => aggiornaStatoAccount(sb, id, { qr }) : null;
    const onStato = sb ? (stato) => aggiornaStatoAccount(sb, id, { stato }) : null;
    const client = await creaClient(config, { ...acc, id, onMessaggio, onQr, onStato });
    daChiudere.push(client);

    // Poller delle risposte: escono SEMPRE da questo account.
    const fermaOutbox = avviaOutbox(sb, id, client, config);
    daChiudere.push({ kill: fermaOutbox });

    // Stato separato per account (conteggi, warm-up, rotazione indipendenti).
    const statoPath = config.file.statoPath.replace(/\.json$/, `-${id}.json`);
    const stato = new Stato(statoPath);
    const sender = new Sender(client, config, false);
    // Pausa comandabile dal pannello: legge l'interruttore 'pausa' da Supabase.
    const pausaProvider = sb
      ? async () => {
          const imp = await leggiImpostazioni(sb);
          return imp.pausa === 'true' || imp.pausa === true;
        }
      : null;
    const scheduler = new Scheduler({
      config,
      sender,
      stato,
      clienti: gruppiClienti[i],
      messaggi,
      avviaSubito: args.now,
      onReport,
      pausaProvider,
    });
    schedulers.push(scheduler);
    await scheduler.avvia();
  };

  // -------- SUPERVISORE: nuovi numeri aggiunti dal pannello, senza PC --------
  // Se i numeri arrivano da Supabase, ogni 30s controlla se ne hai aggiunto o
  // tolto uno dal pannello: in quel caso riavvia il bot (pm2 lo rialza subito)
  // cosi' il nuovo numero parte con il SUO IP e la SUA sessione. I numeri gia'
  // collegati non richiedono di riscansionare il QR (la sessione resta salvata).
  if (sb && !args.now) {
    const chiaviIniziali = account.map((a) => a.id).sort().join('|');
    setInterval(async () => {
      try {
        // 1) Numeri aggiunti/tolti dal pannello.
        if (dinamico) {
          const ora = await caricaAccountSupabase(sb);
          const chiavi = ora.map((a) => a.id).sort().join('|');
          if (chiavi !== chiaviIniziali) {
            log.info('Elenco numeri cambiato dal pannello: riavvio per applicare.');
            process.exit(0); // pm2 riavvia in automatico
          }
        }
        // 2) Modalita' prova accesa/spenta o numero cambiato dal pannello.
        const imp = await leggiImpostazioni(sb);
        const chiave = `${imp.prova_abilitato === 'true' || imp.prova_abilitato === true}|${imp.prova_numero || ''}`;
        if (chiaveImpostazioni && chiave !== chiaveImpostazioni) {
          log.info('Impostazioni prova cambiate dal pannello: riavvio per applicare.');
          process.exit(0);
        }
      } catch (_) {
        /* riprova al prossimo giro */
      }
    }, 30000);
  }

  // -------- COMANDI DAL PANNELLO (ponte Vercel -> Supabase -> Oracle) --------
  // Il pannello scrive un comando su Supabase, il bot lo esegue: cosi' comandi
  // il motore dal telefono senza SSH. 'riavvia' = riavvio; 'ricollega' = cancella
  // la sessione di un numero e riparte (nuovo QR nel pannello).
  if (sb && !args.now) {
    setInterval(async () => {
      try {
        const comandi = await prendiComandi(sb);
        for (const c of comandi) {
          await segnaComando(sb, c.id);
          if (c.tipo === 'ricollega') {
            const id = c.account_id || 'default';
            const dir =
              id === 'default'
                ? (config.baileys && config.baileys.cartellaSessione) || './.baileys-auth'
                : `./.baileys-${id}`;
            try {
              fs.rmSync(path.resolve(dir), { recursive: true, force: true });
            } catch (_) {
              /* ignora */
            }
            if (sb) await aggiornaStatoAccount(sb, id, { stato: 'in_attesa', qr: null });
            log.info(`Comando "ricollega ${id}": sessione azzerata, riavvio per nuovo QR.`);
            process.exit(0);
          }
          if (c.tipo === 'riavvia') {
            log.info('Comando "riavvia" dal pannello: riavvio.');
            process.exit(0);
          }
        }
      } catch (_) {
        /* riprova al prossimo giro */
      }
    }, 15000);
  }

  const chiusura = async () => {
    log.info('Arresto in corso...');
    schedulers.forEach((s) => s.ferma());
    for (const c of daChiudere) {
      try {
        if (c && c.kill) await c.kill();
      } catch (_) {
        /* ignora */
      }
    }
    process.exit(0);
  };
  process.on('SIGINT', chiusura);
  process.on('SIGTERM', chiusura);

  // Avvia ogni numero in parallelo e indipendente (un numero che aspetta il QR
  // non blocca gli altri). Un errore su un numero non fa cadere gli altri.
  const esiti = account.map((acc, i) =>
    avviaUnAccount(acc, i).catch((err) =>
      log.error(`Account "${acc.id || i}" fermato: ${err && err.message ? err.message : err}`)
    )
  );
  await Promise.all(esiti);

  if (args.now) await chiusura();
}

main().catch((err) => {
  log.error('Errore fatale:', err && err.message ? err.message : err);
  process.exit(1);
});
