'use strict';

const log = require('./logger');
const { salvaMessaggioRicevuto, prendiRisposteDaInviare, segnaRisposta } = require('./supabase');

/**
 * Costruisce la callback per i messaggi in arrivo di un account:
 * salva su Supabase senza inviare ricevute di lettura (niente spunte blu).
 */
function creaGestoreArrivo(sb, accountId) {
  return async ({ numero, testo }) => {
    if (!sb) return; // senza Supabase non c'e' inbox dove salvare
    await salvaMessaggioRicevuto(sb, accountId, numero, testo);
    log.info(`[${accountId}] messaggio ricevuto da ${numero}: "${(testo || '').slice(0, 60)}"`);
  };
}

/**
 * Avvia il poller della coda risposte per un account: ogni N secondi invia le
 * risposte in stato 'pending' e le segna come inviate. Le risposte escono
 * SEMPRE dal client (=numero) corretto passato qui.
 *
 * @returns {function} funzione per fermare il poller
 */
function avviaOutbox(sb, accountId, client, config) {
  if (!sb) return () => {};
  const secondi = (config.inbox && config.inbox.pollingSecondi) || 10;

  const tick = async () => {
    try {
      const risposte = await prendiRisposteDaInviare(sb, accountId);
      for (const r of risposte) {
        try {
          await client.sendText(`${r.numero_cliente}@c.us`, r.testo);
          await segnaRisposta(sb, r.id, 'inviato');
          log.ok(`[${accountId}] risposta inviata a ${r.numero_cliente}`);
        } catch (e) {
          await segnaRisposta(sb, r.id, 'errore');
          log.error(`[${accountId}] invio risposta fallito a ${r.numero_cliente}: ${e.message}`);
        }
      }
    } catch (e) {
      log.warn(`[${accountId}] outbox: ${e.message}`);
    }
  };

  const timer = setInterval(tick, secondi * 1000);
  log.info(`[${accountId}] outbox attivo (controllo ogni ${secondi}s).`);
  return () => clearInterval(timer);
}

module.exports = { creaGestoreArrivo, avviaOutbox };
