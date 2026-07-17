'use strict';

/**
 * Decide se una certa data va saltata in base alla configurazione:
 * - weekend (sabato/domenica) se saltaWeekend = true
 * - date festive elencate in 'festivi' (formato "AAAA-MM-GG" per una data
 *   specifica, oppure "MM-GG" per una ricorrenza annuale, es. "12-25").
 *
 * @param {Date} data
 * @param {object} cfgGiorni sezione config 'giorni' (puo' essere undefined)
 * @returns {null|string} motivo dello skip, oppure null se e' un giorno valido
 */
function motivoSkipGiorno(data, cfgGiorni) {
  const c = cfgGiorni || {};

  if (c.saltaWeekend) {
    const g = data.getDay(); // 0 = domenica, 6 = sabato
    if (g === 0 || g === 6) return 'weekend';
  }

  const festivi = Array.isArray(c.festivi) ? c.festivi : [];
  if (festivi.length) {
    const aaaa = data.getFullYear();
    const mm = String(data.getMonth() + 1).padStart(2, '0');
    const gg = String(data.getDate()).padStart(2, '0');
    const completa = `${aaaa}-${mm}-${gg}`;
    const ricorrente = `${mm}-${gg}`;
    if (festivi.includes(completa) || festivi.includes(ricorrente)) {
      return 'festivo';
    }
  }

  return null;
}

module.exports = { motivoSkipGiorno };
