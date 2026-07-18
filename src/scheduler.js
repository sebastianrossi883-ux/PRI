'use strict';

const fs = require('fs');
const log = require('./logger');
const { motivoSkipGiorno } = require('./calendario');
const {
  randomInt,
  sleep,
  orarioInMinuti,
  dataOggiAMinuti,
  chiaveGiorno,
  mescola,
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
 * Applica una variazione giornaliera casuale al limite (per un numero gia'
 * consolidato): alcuni giorni qualche messaggio in piu', altri in meno, cosi'
 * il totale non e' mai identico. Va deciso una volta al giorno.
 *
 * @param {object} config
 * @param {number} base limite di partenza (es. messaggiAlGiorno)
 * @returns {number} limite variato (minimo 1)
 */
function applicaVariazioneGiornaliera(config, base) {
  const v = config.variazioneGiornaliera || {};
  if (!v.abilitato) return base;
  const min = v.minMessaggi ?? 5;
  const max = v.maxMessaggi ?? 10;
  const entita = randomInt(Math.min(min, max), Math.max(min, max));
  const segno = Math.random() < 0.5 ? -1 : 1;
  return Math.max(1, base + segno * entita);
}

/**
 * Ciclo giornaliero: attende l'orario di avvio casuale, poi invia i messaggi
 * rispettando la finestra oraria e gli intervalli casuali. Al termine
 * pianifica il giorno successivo.
 */
class Scheduler {
  constructor({ config, sender, stato, clienti, messaggi, avviaSubito = false, onReport = null, pausaProvider = null }) {
    this.config = config;
    this.sender = sender;
    this.stato = stato;
    this.clienti = clienti;
    this.messaggi = messaggi;
    this.avviaSubito = avviaSubito;
    this.onReport = onReport; // callback opzionale (es. scrittura su Supabase)
    this.pausaProvider = pausaProvider; // funzione async che dice se sei in pausa (dal pannello)
    this.attivo = true;
    this._mazzo = []; // "mazzo" di messaggi mescolato (per non ripetere l'ordine)
  }

  /**
   * Restituisce il prossimo template pescandolo da un mazzo mescolato: usa tutte
   * le varianti prima di ripetere, e a ogni giro rimescola. Cosi' l'ordine
   * cambia sempre e nessun testo si ripete a ridosso del precedente.
   */
  _prossimoMessaggio() {
    if (this._mazzo.length === 0) {
      this._mazzo = mescola(this.messaggi);
      // Evita che l'ultimo del giro precedente sia anche il primo del nuovo.
      if (this._mazzo.length > 1 && this._mazzo[0] === this._ultimoTesto) {
        this._mazzo.push(this._mazzo.shift());
      }
    }
    const testo = this._mazzo.shift();
    this._ultimoTesto = testo;
    return testo;
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

    // Salto weekend/festivi se configurato (di default e' spento: ristoranti
    // ed esperienze lavorano proprio nei weekend/festivi).
    const motivo = motivoSkipGiorno(adesso, this.config.giorni);
    if (motivo && !this.avviaSubito) {
      log.info(`Oggi e' ${motivo}: salto la giornata (configurazione 'giorni').`);
      return;
    }

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
    this._reportGiornata();
  }

  /** Vero se sei in pausa: via file di pausa OPPURE via pannello (Supabase). */
  async _inPausa() {
    const f = this.config.file && this.config.file.pausaPath;
    if (f && !this.avviaSubito && fs.existsSync(f)) return true;
    if (this.pausaProvider && !this.avviaSubito) {
      try { if (await this.pausaProvider()) return true; } catch (_) { /* ignora */ }
    }
    return false;
  }

  /** Attende (senza inviare) finche' la pausa non viene tolta (file o pannello). */
  async _attendiSePausa() {
    if (this.avviaSubito) return;
    let annunciato = false;
    while (this.attivo && (await this._inPausa())) {
      if (!annunciato) {
        log.info('In PAUSA (dal pannello o dal file di pausa). Riprendo appena la togli.');
        annunciato = true;
      }
      await sleep(30000);
    }
    if (annunciato) log.info('Pausa terminata: riprendo.');
  }

  /** Scrive un riepilogo della giornata a log e in coda al file report CSV. */
  _reportGiornata() {
    const r = this.stato.riepilogoGiorno();
    log.ok(
      `Riepilogo oggi -> inviati: ${r.inviati}, saltati: ${r.saltati}, errori: ${r.errori}` +
        (r.limite != null ? `, obiettivo: ${r.limite}` : '')
    );
    try {
      const percorso = this.config.file && this.config.file.reportPath;
      if (!percorso) return;
      const oggi = chiaveGiorno(new Date());
      const intestazione = 'data,inviati,saltati,errori,obiettivo\n';
      if (!fs.existsSync(percorso)) fs.writeFileSync(percorso, intestazione, 'utf8');
      // Riga sempre aggiornata per la giornata (sovrascrive quella di oggi se c'e').
      const righe = fs
        .readFileSync(percorso, 'utf8')
        .split('\n')
        .filter((l) => l && !l.startsWith(`${oggi},`) && !l.startsWith('data,'));
      righe.unshift(`${oggi},${r.inviati},${r.saltati},${r.errori},${r.limite ?? ''}`);
      fs.writeFileSync(percorso, intestazione + righe.join('\n') + '\n', 'utf8');
    } catch (e) {
      log.warn('Impossibile scrivere il report:', e.message);
    }
    // Report anche su Supabase, se configurato.
    if (this.onReport) {
      Promise.resolve(this.onReport(chiaveGiorno(new Date()), r)).catch((e) =>
        log.warn('Report esterno fallito:', e.message)
      );
    }
  }

  async _cicloInvii(fineFinestra) {
    const cfg = this.config.invii;
    const modalitaStrict = (cfg.modalitaFinestra || 'strict') === 'strict';
    const totaleClienti = this.clienti.length;

    if (totaleClienti === 0) {
      log.warn('Nessun cliente attivo in lista. Niente da inviare.');
      return;
    }

    // Limite odierno: warm-up (numero nuovo) oppure variazione casuale (numero
    // consolidato). Deciso una volta e memorizzato, cosi' resta stabile se
    // il bot viene riavviato durante la giornata.
    const numeroGiorno = this.stato.numeroGiornoAttivo();
    let limiteOggi = this.stato.limiteGiorno();
    if (limiteOggi == null) {
      const base = limiteMessaggiOggi(this.config, numeroGiorno);
      limiteOggi = applicaVariazioneGiornaliera(this.config, base);
      this.stato.impostaLimiteGiorno(limiteOggi);
    }
    if (this.config.warmup && this.config.warmup.abilitato) {
      log.info(`Warm-up: giorno ${numeroGiorno}, limite di oggi ${limiteOggi} messaggi.`);
    } else if (this.config.variazioneGiornaliera && this.config.variazioneGiornaliera.abilitato) {
      log.info(`Limite di oggi (con variazione casuale): ${limiteOggi} messaggi.`);
    }

    const maxErrori = (this.config.antiBan && this.config.antiBan.maxErroriConsecutivi) || 5;
    let erroriConsecutivi = 0;
    let saltatiConsecutivi = 0;

    let inviati = this.stato.inviatiOggi();
    if (inviati > 0) {
      log.info(`Ripresa: gia' inviati ${inviati} messaggi oggi.`);
    }

    while (this.attivo && inviati < limiteOggi) {
      // Pausa manuale (file di pausa) prima di ogni messaggio.
      await this._attendiSePausa();
      if (!this.attivo) return;

      const adesso = new Date();

      if (modalitaStrict && !this.avviaSubito && adesso >= fineFinestra) {
        log.info(
          `Finestra terminata (${this.config.finestra.oraFine}). Inviati ${inviati}/${limiteOggi} oggi. Riprendo domani.`
        );
        return;
      }

      const indice = this.stato.cursoreCliente() % totaleClienti;
      const cliente = this.clienti[indice];
      const template = this._prossimoMessaggio();

      const esito = await this.sender.invia(cliente, template);
      if (esito.ok) {
        this.stato.registraInvio(cliente.numero, totaleClienti);
        inviati += 1;
        erroriConsecutivi = 0;
        saltatiConsecutivi = 0;
      } else if (esito.skip) {
        // Numero non su WhatsApp: salto senza contare e senza allarmarmi.
        this.stato.registraSkip();
        this.stato.avanzaCursore(totaleClienti);
        saltatiConsecutivi += 1;
        // Guardia: se ho girato l'intera lista solo saltando, mi fermo.
        if (saltatiConsecutivi >= totaleClienti) {
          log.warn('Tutti i clienti rimanenti non sono su WhatsApp: stop per oggi.');
          return;
        }
        await sleep(this.avviaSubito ? 200 : randomInt(1000, 3000));
        continue; // passo al prossimo senza l'attesa lunga
      } else {
        // Errore di invio: avanzo il cursore e tengo il conto degli errori.
        this.stato.registraErrore();
        this.stato.avanzaCursore(totaleClienti);
        erroriConsecutivi += 1;
        saltatiConsecutivi = 0;
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
  applicaVariazioneGiornaliera,
};
