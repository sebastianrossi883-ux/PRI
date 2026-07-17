'use strict';

const log = require('./logger');
const { caricaConfig, caricaClienti, caricaMessaggi } = require('./config');
const { Stato } = require('./state');
const { Sender } = require('./sender');
const { Scheduler } = require('./scheduler');

function parseArgs(argv) {
  return {
    now: argv.includes('--now'),
    dryRun: argv.includes('--dry-run'),
  };
}

async function creaClientWa(config) {
  // Import "lazy": in dry-run non serve nemmeno avere la libreria pronta.
  const { create } = require('@open-wa/wa-automate');
  log.info('Avvio sessione WhatsApp (scansiona il QR se richiesto)...');
  const client = await create({
    sessionId: config.openwa.sessionId || 'clienti',
    headless: config.openwa.headless !== false,
    sessionDataPath: config.openwa.cartellaSessione || './.wa-session',
    qrTimeout: 0,
    authTimeout: 0,
    restartOnCrash: true,
    killProcessOnBrowserClose: true,
  });
  log.ok('Sessione WhatsApp pronta.');
  return client;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));

  const config = caricaConfig();
  const clienti = caricaClienti(config.file.clientiPath);
  const messaggi = caricaMessaggi(config.file.messaggiPath);
  const stato = new Stato(config.file.statoPath);

  log.info(
    `Configurazione: ${clienti.length} clienti attivi, ${messaggi.length} template, ` +
      `${config.invii.messaggiAlGiorno} msg/giorno, finestra ${config.finestra.oraInizio}-${config.finestra.oraFine}, ` +
      `intervallo ${config.invii.intervalloMinMinuti}-${config.invii.intervalloMaxMinuti} min.`
  );

  let client = null;
  if (!args.dryRun) {
    client = await creaClientWa(config);
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
