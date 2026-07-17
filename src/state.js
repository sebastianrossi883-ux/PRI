'use strict';

const fs = require('fs');
const { chiaveGiorno } = require('./utils');

/**
 * Gestisce lo stato persistente su file, cosi' se il bot viene riavviato
 * nello stesso giorno non riparte da zero con il conteggio dei messaggi,
 * e la rotazione tra i clienti prosegue giorno dopo giorno.
 */
class Stato {
  constructor(percorso) {
    this.percorso = percorso;
    this.dati = this._carica();
    if (typeof this.dati.cursoreCliente !== 'number') this.dati.cursoreCliente = 0;
    if (!this.dati.giorni) this.dati.giorni = {};
    if (typeof this.dati.giorniAttivi !== 'number') this.dati.giorniAttivi = 0;
    if (!this.dati.ultimoGiornoContato) this.dati.ultimoGiornoContato = null;
  }

  _carica() {
    try {
      if (fs.existsSync(this.percorso)) {
        return JSON.parse(fs.readFileSync(this.percorso, 'utf8'));
      }
    } catch (e) {
      // stato corrotto: si riparte pulito
    }
    return {};
  }

  _salva() {
    fs.writeFileSync(this.percorso, JSON.stringify(this.dati, null, 2), 'utf8');
  }

  _giorno(data = new Date()) {
    const chiave = chiaveGiorno(data);
    if (!this.dati.giorni[chiave]) {
      this.dati.giorni[chiave] = { inviati: 0, ultimoNumero: null };
    }
    return this.dati.giorni[chiave];
  }

  inviatiOggi(data = new Date()) {
    return this._giorno(data).inviati;
  }

  /** Indice del prossimo cliente da contattare (rotazione globale). */
  cursoreCliente() {
    return this.dati.cursoreCliente;
  }

  /**
   * Registra che oggi e' un giorno "attivo" (di invio) e restituisce il numero
   * progressivo del giorno (1 = primo giorno in assoluto). Serve al warm-up.
   * Idempotente: chiamato piu' volte nello stesso giorno non incrementa.
   */
  numeroGiornoAttivo(data = new Date()) {
    const chiave = chiaveGiorno(data);
    if (this.dati.ultimoGiornoContato !== chiave) {
      this.dati.giorniAttivi += 1;
      this.dati.ultimoGiornoContato = chiave;
      this._salva();
    }
    return this.dati.giorniAttivi;
  }

  /** Avanza il cursore dei clienti senza contare un invio (skip/errore). */
  avanzaCursore(totaleClienti) {
    if (totaleClienti > 0) {
      this.dati.cursoreCliente = (this.dati.cursoreCliente + 1) % totaleClienti;
    }
    this._salva();
  }

  registraInvio(numero, totaleClienti, data = new Date()) {
    const g = this._giorno(data);
    g.inviati += 1;
    g.ultimoNumero = numero;
    this.avanzaCursore(totaleClienti);
  }
}

module.exports = { Stato };
