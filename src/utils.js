'use strict';

/** Numero intero casuale tra min e max inclusi. */
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/** Numero casuale (float) tra min e max. */
function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

/** Pausa asincrona in millisecondi. */
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/** Converte "HH:MM" in minuti dopo la mezzanotte. */
function orarioInMinuti(hhmm) {
  const [h, m] = hhmm.split(':').map((x) => parseInt(x, 10));
  return h * 60 + (m || 0);
}

/** Restituisce una Date di oggi all'orario indicato (minuti dopo mezzanotte). */
function dataOggiAMinuti(minutiDaMezzanotte, base = new Date()) {
  const d = new Date(base);
  d.setHours(0, 0, 0, 0);
  d.setMinutes(minutiDaMezzanotte);
  return d;
}

/** Chiave "YYYY-MM-DD" del giorno di una data. */
function chiaveGiorno(d = new Date()) {
  return d.toISOString().slice(0, 10);
}

/** Mescola un array (Fisher-Yates) senza modificarlo. */
function mescola(array) {
  const a = array.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

module.exports = {
  randomInt,
  randomFloat,
  sleep,
  orarioInMinuti,
  dataOggiAMinuti,
  chiaveGiorno,
  mescola,
};
