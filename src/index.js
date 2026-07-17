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
  // Import "lazy": in dry-run non serve nemmeno avere la libreria pronta.
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

async function creaClient(config) {
  const motore = (config.motore || 'openwa').toLowerCase();
  if (motore === 'baileys') {
    const { creaClientBaileys } = require('./baileys');
    log.info('Motore: Baileys (senza browser).');
    return creaClientBaileys(config);
  }
  log.info('Motore: OpenWA (browser).');
  return creaClientOpenWa(config);
}

async function main() {
  const args = parseArgs(process.argv.slice(2));

  const config = caricaConfig();
  const prefisso = config.prefissoInternazionaleDefault || '';
  const stato = new Stato(config.file.statoPath);

  // Sorgente dati: Supabase se abilitato, altrimenti file locali.
  const sb = creaSupabase(config);
  let blocklist, clienti, messaggi, onReport = null;
  if (sb) {
    log.info('Sorgente dati: Supabase.');
    blocklist = await caricaBlocklistSupabase(sb, prefisso);
    clienti = await caricaClientiSupabase(sb, prefisso, blocklist);
    messaggi = await caricaMessaggiSupabase(sb);
    onReport = (dataKey, r) => scriviReportSupabase(sb, dataKey, r);
  } else {
    blocklist = caricaBlocklist(config.file.blocklistPath, prefisso);
    clienti = caricaClienti(config.file.clientiPath, prefisso, blocklist);
    messaggi = caricaMessaggi(config.file.messaggiPath);
  }

  log.info(
    `Configurazione: ${clienti.length} clienti attivi, ${messaggi.length} template, ` +
      `${config.invii.messaggiAlGiorno} msg/giorno, finestra ${config.finestra.oraInizio}-${config.finestra.oraFine}, ` +
      `intervallo ${config.invii.intervalloMinMinuti}-${config.invii.intervalloMaxMinuti} min.`
  );
  if (blocklist.size > 0) {
    log.info(
      `Blocklist: ${blocklist.size} numeri da non ricontattare` +
        (clienti._esclusiBlocklist
          ? `, ${clienti._esclusiBlocklist} esclusi dalla lista.`
          : '.')
    );
  }

  let client = null;
  if (!args.dryRun) {
    client = await creaClient(config);
  } else {
    log.warn('MODALITA\' DRY-RUN: nessun messaggio verra\' inviato davvero.');
  }

  const sender = new Sender(client, config, args.dryRun);
  const scheduler = new Scheduler({
    config,
    sender,
    stato,
    clienti,
    messaggi,
    avviaSubito: args.now,
    onReport,
  });

  const chiusura = async () => {
    log.info('Arresto in corso...');
    scheduler.ferma();
    try {
      if (client && client.kill) await client.kill();
    } catch (_) {
      /* ignora */
    }
    process.exit(0);
  };
  process.on('SIGINT', chiusura);
  process.on('SIGTERM', chiusura);

  await scheduler.avvia();

  if (args.now) {
    // In modalita' test terminiamo dopo un ciclo.
    await chiusura();
  }
}

main().catch((err) => {
  log.error('Errore fatale:', err && err.message ? err.message : err);
  process.exit(1);
});
