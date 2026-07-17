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
} = require('./supabase');
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
  const account = elencaAccount(config);
  const gruppiClienti = distribuisci(clienti, account.length);
  const daChiudere = [];
  const schedulers = [];

  for (let i = 0; i < account.length; i++) {
    const acc = account[i];
    const id = acc.id || `num${i + 1}`;
    log.info(`Avvio account "${id}"...`);

    // Ogni account salva i messaggi in arrivo sul PROPRIO inbox (numero giusto).
    const onMessaggio = creaGestoreArrivo(sb, id);
    const client = await creaClient(config, { ...acc, id, onMessaggio });
    daChiudere.push(client);

    // Poller delle risposte: escono SEMPRE da questo account.
    const fermaOutbox = avviaOutbox(sb, id, client, config);
    daChiudere.push({ kill: fermaOutbox });

    // Stato separato per account (conteggi, warm-up, rotazione indipendenti).
    const statoPath = config.file.statoPath.replace(/\.json$/, `-${id}.json`);
    const stato = new Stato(statoPath);
    const sender = new Sender(client, config, false);
    const scheduler = new Scheduler({
      config,
      sender,
      stato,
      clienti: gruppiClienti[i],
      messaggi,
      avviaSubito: args.now,
      onReport,
    });
    schedulers.push(scheduler);
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

  // Avvia in parallelo lo scheduler di outreach di ogni account.
  await Promise.all(schedulers.map((s) => s.avvia()));

  if (args.now) await chiusura();
}

main().catch((err) => {
  log.error('Errore fatale:', err && err.message ? err.message : err);
  process.exit(1);
});
