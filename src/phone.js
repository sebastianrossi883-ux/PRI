'use strict';

/**
 * Normalizza un numero di telefono per WhatsApp.
 *
 * Regole (pensate per numeri italiani ma generiche):
 * - se il numero inizia con "+" o "00" viene considerato gia' internazionale;
 * - altrimenti, se lungo <= 10 cifre, viene trattato come numero nazionale e
 *   gli si antepone il prefisso di default (es. "39");
 * - se lungo >= 11 cifre si assume che il prefisso ci sia gia'.
 *
 * @param {string|number} raw il valore grezzo letto dal file
 * @param {string} prefissoDefault es. "39" (stringa vuota = non aggiunge nulla)
 * @returns {string} solo cifre, oppure "" se non valido
 */
function normalizzaNumero(raw, prefissoDefault = '') {
  if (raw === null || raw === undefined) return '';
  let s = String(raw).trim();
  if (!s) return '';

  const internazionale = s.startsWith('+') || /^00\d/.test(s.replace(/\s/g, ''));
  let cifre = s.replace(/\D/g, '');

  // "00" come prefisso di uscita internazionale -> rimuovilo.
  if (cifre.startsWith('00')) cifre = cifre.slice(2);

  if (!cifre) return '';

  if (internazionale) return cifre;

  const prefisso = String(prefissoDefault || '').replace(/\D/g, '');
  if (prefisso && cifre.length <= 10) {
    return prefisso + cifre;
  }
  return cifre;
}

/** Un numero e' plausibile se ha tra 8 e 15 cifre. */
function numeroPlausibile(cifreOnly) {
  return typeof cifreOnly === 'string' && cifreOnly.length >= 8 && cifreOnly.length <= 15;
}

/** True se una cella "sembra" un numero di telefono. */
function sembraTelefono(cella) {
  if (cella === null || cella === undefined) return false;
  const s = String(cella);
  const cifre = s.replace(/\D/g, '');
  if (cifre.length < 8 || cifre.length > 15) return false;
  // La cella dev'essere fatta prevalentemente di cifre/simboli telefonici.
  const nonTelefonici = s.replace(/[\d\s+\-().]/g, '');
  return nonTelefonici.length === 0;
}

module.exports = { normalizzaNumero, numeroPlausibile, sembraTelefono };
