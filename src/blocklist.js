'use strict';

const fs = require('fs');
const { normalizzaNumero } = require('./phone');

/**
 * Carica la lista "non ricontattare" (gestita a mano dall'utente).
 * Un numero per riga. Sono ammessi commenti (riga che inizia con # o //)
 * ed eventuale testo dopo il numero (es. "393401234567  Mario - gia' cliente").
 *
 * @param {string|null} percorso
 * @param {string} prefissoDefault prefisso da usare per normalizzare
 * @returns {Set<string>} insieme di numeri normalizzati da escludere
 */
function caricaBlocklist(percorso, prefissoDefault = '') {
  const set = new Set();
  if (!percorso || !fs.existsSync(percorso)) return set;

  const testo = fs.readFileSync(percorso, 'utf8');
  for (const rigaRaw of testo.split(/\r?\n/)) {
    const riga = rigaRaw.trim();
    if (!riga || riga.startsWith('#') || riga.startsWith('//')) continue;
    // Prende il primo "token telefonico" della riga.
    const match = riga.match(/\+?\d[\d\s().-]{5,}\d/);
    const token = match ? match[0] : riga;
    const numero = normalizzaNumero(token, prefissoDefault);
    if (numero) set.add(numero);
  }
  return set;
}

module.exports = { caricaBlocklist };
