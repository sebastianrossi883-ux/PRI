'use strict';

const log = require('./logger');
const { randomInt, randomFloat, sleep } = require('./utils');
const { normalizzaNumero } = require('./phone');

/**
 * Trasforma un numero (solo cifre, con prefisso internazionale) nel chatId
 * richiesto da WhatsApp, es. "393401234567" -> "393401234567@c.us".
 */
function numeroAChatId(numero) {
  return `${numero}@c.us`;
}

/** Sostituisce i segnaposto nel testo del messaggio. */
function componiTesto(template, cliente) {
  return template.replace(/\{nome\}/g, cliente.nome || 'cliente');
}

/**
 * Calcola per quanti millisecondi mostrare "sto scrivendo...",
 * in modo proporzionale alla lunghezza del testo ma con limiti e casualita'.
 */
function tempoScritturaMs(testo, antiBan) {
  const cps = Math.max(1, antiBan.velocitaScritturaCaratteriAlSecondo || 6);
  const stimatoSec = testo.length / cps;
  const minSec = antiBan.tempoScritturaMinSecondi ?? 3;
  const maxSec = antiBan.tempoScritturaMaxSecondi ?? 12;
  const sec = Math.min(maxSec, Math.max(minSec, stimatoSec)) * randomFloat(0.85, 1.15);
  return Math.round(sec * 1000);
}

class Sender {
  /**
   * @param {object} client istanza @open-wa/wa-automate (o null in dry-run)
   * @param {object} config configurazione completa
   * @param {boolean} dryRun se true non invia realmente, logga soltanto
   */
  constructor(client, config, dryRun = false) {
    this.client = client;
    this.config = config;
    this.dryRun = dryRun;
    this.antiBan = config.antiBan || {};
    // MODALITA' PROVA: se attiva, TUTTI i messaggi vanno al TUO numero invece
    // che ai clienti reali. Serve per testare dopo modifiche, senza rischi.
    const prova = config.prova || {};
    this.numeroProva =
      prova.abilitato && prova.numero
        ? normalizzaNumero(prova.numero, config.prefissoInternazionaleDefault || '')
        : null;
  }

  async invia(cliente, template) {
    const testo = componiTesto(template, cliente);
    // In prova il messaggio viene composto col nome del cliente vero (cosi' vedi
    // com'e'), ma spedito al TUO numero.
    const numeroDest = this.numeroProva || cliente.numero;
    const chatId = numeroAChatId(numeroDest);
    const etichetta = this.numeroProva
      ? `[PROVA→${this.numeroProva}] ${cliente.nome} (${cliente.numero})`
      : `${cliente.nome} (${cliente.numero})`;

    if (this.dryRun) {
      log.info(`[DRY-RUN] Invierei a ${etichetta}: "${testo}"`);
      return { ok: true, dryRun: true };
    }

    // Verifica preventiva che il numero sia registrato su WhatsApp: inviare a
    // numeri inesistenti aumenta il sospetto di spam.
    if (this.antiBan.verificaNumeroWhatsapp) {
      try {
        const stato = await this.client.checkNumberStatus(chatId);
        const registrato =
          stato && (stato.numberExists === true || stato.canReceiveMessage === true);
        if (stato && stato.numberExists === false) {
          log.warn(`Salto ${cliente.nome} (${cliente.numero}): non su WhatsApp.`);
          return { ok: false, skip: true, motivo: 'non-su-whatsapp' };
        }
        // Se la verifica e' incerta si prosegue comunque.
        void registrato;
      } catch (e) {
        // Verifica fallita: non blocco l'invio.
      }
    }

    // Piccola pausa casuale prima di iniziare (comportamento umano).
    const pausaPre = randomInt(
      (this.antiBan.pausaCasualePrimaInvioMinSecondi ?? 2) * 1000,
      (this.antiBan.pausaCasualePrimaInvioMaxSecondi ?? 8) * 1000
    );
    await sleep(pausaPre);

    try {
      // 1) Segna la chat come letta.
      if (this.antiBan.segnaComeLetto) {
        await this.client.sendSeen(chatId);
      }

      // 2) Mostra "sto scrivendo..." per un tempo realistico.
      if (this.antiBan.simulaScrittura) {
        await this.client.simulateTyping(chatId, true);
        await sleep(tempoScritturaMs(testo, this.antiBan));
        await this.client.simulateTyping(chatId, false);
      }

      // 3) Invia il messaggio.
      await this.client.sendText(chatId, testo);
      log.ok(`Messaggio inviato a ${etichetta}`);
      return { ok: true };
    } catch (err) {
      // Assicura di spegnere l'indicatore "sto scrivendo" in caso di errore.
      try {
        if (this.antiBan.simulaScrittura) await this.client.simulateTyping(chatId, false);
      } catch (_) {
        /* ignora */
      }
      log.error(`Invio fallito a ${etichetta}:`, err.message || err);
      return { ok: false, error: err };
    }
  }
}

module.exports = { Sender, componiTesto, numeroAChatId };
