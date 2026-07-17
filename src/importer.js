'use strict';

const fs = require('fs');
const path = require('path');
const { sembraTelefono } = require('./phone');

/* ------------------------------------------------------------------ *
 * CSV
 * ------------------------------------------------------------------ */

/** Rileva il separatore piu' probabile guardando la prima riga. */
function rilevaSeparatore(primaRiga) {
  const candidati = [';', ',', '\t', '|'];
  let migliore = ',';
  let max = -1;
  for (const sep of candidati) {
    const n = primaRiga.split(sep).length;
    if (n > max) {
      max = n;
      migliore = sep;
    }
  }
  return migliore;
}

/** Parser CSV minimale che gestisce virgolette e campi con separatori dentro. */
function parseCsv(testo, sep) {
  const righe = [];
  let campo = '';
  let riga = [];
  let dentroVirgolette = false;

  for (let i = 0; i < testo.length; i++) {
    const c = testo[i];
    if (dentroVirgolette) {
      if (c === '"') {
        if (testo[i + 1] === '"') {
          campo += '"';
          i++;
        } else {
          dentroVirgolette = false;
        }
      } else {
        campo += c;
      }
    } else if (c === '"') {
      dentroVirgolette = true;
    } else if (c === sep) {
      riga.push(campo);
      campo = '';
    } else if (c === '\n') {
      riga.push(campo);
      righe.push(riga);
      riga = [];
      campo = '';
    } else if (c === '\r') {
      // ignora
    } else {
      campo += c;
    }
  }
  if (campo.length > 0 || riga.length > 0) {
    riga.push(campo);
    righe.push(riga);
  }
  return righe.filter((r) => r.some((cell) => cell.trim() !== ''));
}

const CHIAVI_NOME = [
  'nome', 'name', 'cliente', 'attivita', 'attività', 'ragione sociale',
  'contatto', 'azienda', 'ditta', 'referente',
];
const CHIAVI_TEL = [
  'numero', 'telefono', 'phone', 'cell', 'cellulare', 'tel', 'mobile',
  'whatsapp', 'recapito',
];
const CHIAVI_ATTIVO = ['attivo', 'active', 'abilitato', 'invia'];

function trovaColonna(header, chiavi) {
  return header.findIndex((h) => chiavi.some((k) => h.includes(k)));
}

function importaCsv(testo) {
  const primaRiga = testo.split(/\r?\n/)[0] || '';
  const sep = rilevaSeparatore(primaRiga);
  const righe = parseCsv(testo, sep);
  if (righe.length === 0) return [];

  const header = righe[0].map((c) => c.toLowerCase().trim());
  let idxNome = trovaColonna(header, CHIAVI_NOME);
  let idxTel = trovaColonna(header, CHIAVI_TEL);
  let idxAttivo = trovaColonna(header, CHIAVI_ATTIVO);
  const haHeader = idxNome !== -1 || idxTel !== -1;

  const datiInizio = haHeader ? 1 : 0;
  const dati = righe.slice(datiInizio);

  // Se l'header non ci ha aiutato, deduco le colonne dai dati.
  if (idxTel === -1) idxTel = colonnaPiuTelefonica(dati);
  if (idxNome === -1) {
    // Prima colonna testuale diversa da quella del telefono.
    const nColonne = Math.max(...dati.map((r) => r.length), 0);
    for (let c = 0; c < nColonne; c++) {
      if (c !== idxTel) {
        idxNome = c;
        break;
      }
    }
  }

  const risultato = [];
  for (const r of dati) {
    const numeroRaw = idxTel >= 0 ? r[idxTel] : '';
    const nome = idxNome >= 0 ? (r[idxNome] || '').trim() : '';
    if (!numeroRaw || !numeroRaw.trim()) continue;
    const voce = { nome: nome || 'cliente', numero: numeroRaw };
    if (idxAttivo >= 0) {
      const v = (r[idxAttivo] || '').toLowerCase().trim();
      voce.attivo = !['0', 'no', 'false', 'n', 'off'].includes(v);
    }
    risultato.push(voce);
  }
  return risultato;
}

/** Indice della colonna che contiene piu' valori "telefono-simili". */
function colonnaPiuTelefonica(dati) {
  const nColonne = Math.max(...dati.map((r) => r.length), 0);
  let migliore = -1;
  let maxPunteggio = 0;
  for (let c = 0; c < nColonne; c++) {
    let punteggio = 0;
    for (const r of dati) {
      if (sembraTelefono(r[c])) punteggio++;
    }
    if (punteggio > maxPunteggio) {
      maxPunteggio = punteggio;
      migliore = c;
    }
  }
  return migliore;
}

/* ------------------------------------------------------------------ *
 * vCard (.vcf)
 * ------------------------------------------------------------------ */

function importaVcard(testo) {
  const risultato = [];
  const blocchi = testo.split(/BEGIN:VCARD/i).slice(1);
  for (const blocco of blocchi) {
    const nomeMatch = blocco.match(/\nFN[^:]*:(.+)/i);
    const telMatch = blocco.match(/\nTEL[^:]*:(.+)/i);
    if (!telMatch) continue;
    const nome = nomeMatch ? nomeMatch[1].trim() : 'cliente';
    const numero = telMatch[1].trim();
    risultato.push({ nome: nome || 'cliente', numero });
  }
  return risultato;
}

/* ------------------------------------------------------------------ *
 * JSON
 * ------------------------------------------------------------------ */

function importaJson(testo) {
  const dati = JSON.parse(testo);
  if (!Array.isArray(dati)) {
    throw new Error('Il file JSON dei clienti deve contenere un array.');
  }
  return dati.map((c) => ({
    nome: (c.nome ?? c.name ?? 'cliente').toString(),
    numero: (c.numero ?? c.telefono ?? c.phone ?? '').toString(),
    attivo: c.attivo,
  }));
}

/* ------------------------------------------------------------------ *
 * Dispatch per estensione
 * ------------------------------------------------------------------ */

function importaClienti(percorso) {
  const testo = fs.readFileSync(percorso, 'utf8');
  const ext = path.extname(percorso).toLowerCase();
  switch (ext) {
    case '.json':
      return importaJson(testo);
    case '.vcf':
      return importaVcard(testo);
    case '.csv':
    case '.txt':
    case '.tsv':
      return importaCsv(testo);
    default:
      // Prova a indovinare: se sembra JSON, altrimenti CSV.
      return testo.trim().startsWith('[') ? importaJson(testo) : importaCsv(testo);
  }
}

module.exports = { importaClienti, importaCsv, importaVcard, importaJson };
