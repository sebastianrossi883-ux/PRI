'use strict';

const log = require('./logger');
const {
  randomInt,
  sleep,
  orarioInMinuti,
  dataOggiAMinuti,
} = require('./utils');

/**
 * Calcola l'orario di avvio di oggi: casuale tra l'inizio della finestra
 * e 'ritardoMassimoMinuti' minuti dopo. Cosi' il bot non parte mai alla
 * stessa ora due giorni di fila.
 */
function calcolaOrarioAvvioOggi(config, ora = new Date()) {
  const inizioMin = orarioInMinuti(config.finestra.oraInizio);
  const av = config.avvioGiornaliero || {};
  // Retrocompatibilita': se e' impostato solo il vecchio 'ritardoMassimoMinuti'
  // lo si usa come massimo con minimo 0.
  const ritardoMin = av.ritardoMinMinuti ?? 0;
  const ritardoMax = av.ritardoMaxMinuti ?? av.ritardoMassimoMinuti ?? 60;
  const offset = randomInt(Math.min(ritardoMin, ritardoMax), Math.max(ritardoMin, ritardoMax));
  return dataOggiAMinuti(inizioMin + offset, ora);
}

function fineFinestraOggi(config, ora = new Date()) {
  return dataOggiAMinuti(orarioInMinuti(config.finestra.oraFine), ora);
}

/** Intervallo random (ms) tra un messaggio e il successivo. */
function intervalloTraMessaggiMs(config) {
  const min = config.invii.intervalloMinMinuti ?? 20;
  const max = config.invii.intervalloMaxMinuti ?? 60;
  return randomInt(min, max) * 60 * 1000;
}

/**
 * Limite di messaggi per il giorno indicato, applicando il warm-up progressivo.
 * Il primo giorno parte da 'messaggiIniziali' e cresce di 'incrementoGiornaliero'
 * ogni giorno attivo, senza mai superare 'messaggiAlGiorno'.
 *
 * @param {object} config
 * @param {number} numeroGiorno 1 = primo giorno attivo in assoluto
 */
function limiteMessaggiOggi(config, numeroGiorno) {
  const massimo = config.invii.messaggiAlGiorno ?? 40;
  const w = config.warmup || {};
  if (!w.abilitato) return massimo;
  const iniziali = w.messaggiIniziali ?? 5;
  const incremento = w.incrementoGiornaliero ?? 5;
  const limite = iniziali + incremento * Math.max(0, numeroGiorno - 1);
  return Math.min(massimo, limite);
}

/**
 * Ciclo giornaliero: attende l'orario di avvio casuale, poi invia i messaggi
 * rispettando la finestra oraria e gli intervalli casuali. Al termine
 * pianifica il giorno successivo.
 */
class Scheduler {
  constructor({ config, sender, stato, clienti, messaggi, avviaSubito = false }) {
    this.config = config;
    this.sender = sender;
    this.stato = stato;
    this.clienti = clienti;
    this.messaggi = messaggi;
    this.avviaSubito = avviaSubito;
    this.attivo = true;
  }

  async avvia() {
    while (this.attivo) {
      await this._eseguiGiorno();
      if (!this.attivo) break;
      await this._attendiProssimoGiorno();
    }
  }

  ferma() {
    this.attivo = false;
  }

  async _eseguiGiorno() {
    const adesso = new Date();
    const fineFinestra = fineFinestraOggi(this.config, adesso);

    if (!this.avviaSubito) {
      let orarioAvvio = calcolaOrarioAvvioOggi(this.config, adesso);

      // Se l'orario di avvio calcolato e' gia' passato (bot avviato a meta'
      // giornata) parte subito, purche' si sia ancora dentro la finestra.
      if (orarioAvvio < adesso) {
        if (adesso >= fineFinestra) {
          log.info('Finestra odierna gia' + " terminata. Attendo domani.");
          return;
        }
        orarioAvvio = adesso;
      }

      const attesaMs = orarioAvvio - adesso;
      if (attesaMs > 0) {
        log.info(
          `Avvio programmato oggi alle ${orarioAvvio.toLocaleTimeString('it-IT', {
            hour12: false,
          })} (attesa ${Math.round(attesaMs / 60000)} min).`
        );
        await sleep(attesaMs);
      }
    } else {
      log.info('Modalita\' "avvia subito": ignoro l\'orario di avvio casuale.');
    }

    await this._cicloInvii(fineFinestra);
  }

  async _cicloInvii(fineFinestra) {
    const cfg = this.config.invii;
    const modalitaStrict = (cfg.modalitaFinestra || 'strict') === 'strict';
    const totaleClienti = this.clienti.length;

    if (totaleClienti === 0) {
      log.warn('Nessun cliente attivo in lista. Niente da inviare.');
      return;
    }

    // Limite odierno con warm-up progressivo.
    const numeroGiorno = this.stato.numeroGiornoAttivo();
    const limiteOggi = limiteMessaggiOggi(this.config, numeroGiorno);
    if (this.config.warmup && this.config.warmup.abilitato) {
      log.info(`Warm-up: giorno ${numeroGiorno}, limite di oggi ${limiteOggi} messaggi.`);
    }

    const maxErrori = (this.config.antiBan && this.config.antiBan.maxErroriConsecutivi) || 5;
    let erroriConsecutivi = 0;

    let inviati = this.stato.inviatiOggi();
    if (inviati > 0) {
      log.info(`Ripresa: gia' inviati ${inviati} messaggi oggi.`);
    }

    while (this.attivo && inviati < limiteOggi) {
      const adesso = new Date();

      if (modalitaStrict && !this.avviaSubito && adesso >= fineFinestra) {
        log.info(
          `Finestra terminata (${this.config.finestra.oraFine}). Inviati ${inviati}/${limiteOggi} oggi. Riprendo domani.`
        );
        return;
      }

      const indice = this.stato.cursoreCliente() % totaleClienti;
      const cliente = this.clienti[indice];
      const template = this.messaggi[randomInt(0, this.messaggi.length - 1)];

      const esito = await this.sender.invia(cliente, template);
      if (esito.ok) {
        this.stato.registraInvio(cliente.numero, totaleClienti);
        inviati += 1;
        erroriConsecutivi = 0;
      } else if (esito.skip) {
        // Numero non su WhatsApp: salto senza contare e senza allarmarmi.
        this.stato.avanzaCursore(totaleClienti);
        continue; // passo subito al prossimo, senza attesa lunga
      } else {
        // Errore di invio: avanzo il cursore e tengo il conto degli errori.
        this.stato.avanzaCursore(totaleClienti);
        erroriConsecutivi += 1;
        if (erroriConsecutivi >= maxErrori) {
          log.error(
            `${erroriConsecutivi} errori consecutivi: mi fermo per oggi per sicurezza. ` +
              `Controlla la sessione WhatsApp. Inviati ${inviati}/${limiteOggi}.`
          );
          return;
        }
      }

      if (inviati >= limiteOggi) break;

      const attesaMs = intervalloTraMessaggiMs(this.config);
      const prossimo = new Date(Date.now() + attesaMs);

      if (modalitaStrict && !this.avviaSubito && prossimo >= fineFinestra) {
        log.info(
          `Prossimo invio cadrebbe fuori finestra. Stop per oggi: ${inviati}/${limiteOggi}.`
        );
        return;
      }

      log.info(
        `Prossimo messaggio tra ${Math.round(attesaMs / 60000)} min (${inviati}/${limiteOggi} oggi).`
      );
      // In modalita' "avvia subito" (test) accorcio le attese lunghe.
      await sleep(this.avviaSubito ? Math.min(attesaMs, 5000) : attesaMs);
    }

    log.ok(`Completati ${inviati} messaggi per oggi.`);
  }

  async _attendiProssimoGiorno() {
    if (this.avviaSubito) {
      // In modalita' test non entriamo in loop infinito multi-giorno.
      this.attivo = false;
      return;
    }
    const adesso = new Date();
    const inizioMin = orarioInMinuti(this.config.finestra.oraInizio);

    // Prende il prossimo inizio-finestra ancora nel futuro: se il ciclo
    // precedente e' finito prima dell'orario di oggi (es. dopo mezzanotte),
    // riparte oggi stesso; altrimenti domani.
    let prossimoInizio = dataOggiAMinuti(inizioMin, adesso);
    if (prossimoInizio <= adesso) {
      const domani = new Date(adesso);
      domani.setDate(domani.getDate() + 1);
      prossimoInizio = dataOggiAMinuti(inizioMin, domani);
    }
    const attesaMs = prossimoInizio - adesso;
    log.info(
      `In attesa del prossimo giorno. Ripresa intorno alle ${prossimoInizio.toLocaleString(
        'it-IT',
        { hour12: false }
      )}.`
    );
    await sleep(Math.max(0, attesaMs));
  }
}

module.exports = {
  Scheduler,
  calcolaOrarioAvvioOggi,
  intervalloTraMessaggiMs,
  limiteMessaggiOggi,
};
