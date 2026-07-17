'use strict';

const fs = require('fs');
const path = require('path');
const { importaClienti } = require('./importer');
const { normalizzaNumero, numeroPlausibile } = require('./phone');

const ROOT = path.resolve(__dirname, '..');

function leggiJson(percorso) {
  const contenuto = fs.readFileSync(percorso, 'utf8');
  return JSON.parse(contenuto);
}

function caricaConfig() {
  const percorsoConfig = path.join(ROOT, 'config.json');
  if (!fs.existsSync(percorsoConfig)) {
    throw new Error(
      "config.json non trovato. Copia config.example.json in config.json e personalizzalo."
    );
  }
  const cfg = leggiJson(percorsoConfig);

  // Risolve i percorsi dei file relativi alla root del progetto.
  cfg.file = cfg.file || {};
  cfg.file.clientiPath = path.join(ROOT, cfg.file.clienti || 'clients.json');
  cfg.file.messaggiPath = path.join(ROOT, cfg.file.messaggi || 'messages.json');
  cfg.file.statoPath = path.join(ROOT, cfg.file.stato || 'state.json');
  cfg.file.reportPath = path.join(ROOT, cfg.file.report || 'report.csv');
  cfg.file.pausaPath = path.join(ROOT, cfg.file.pausa || 'pausa');
  cfg.file.blocklistPath = cfg.file.blocklist
    ? path.join(ROOT, cfg.file.blocklist)
    : null;

  return cfg;
}

/**
 * Carica ed estrae automaticamente nome e numero dal file clienti,
 * qualunque sia il formato (.json, .csv, .txt, .vcf), normalizzando i numeri.
 *
 * @param {string} percorso percorso del file clienti
 * @param {string} prefissoDefault prefisso internazionale da aggiungere se manca
 * @param {Set<string>} blocklist numeri (normalizzati) da escludere
 */
function caricaClienti(percorso, prefissoDefault = '', blocklist = new Set()) {
  if (!fs.existsSync(percorso)) {
    throw new Error(`File clienti non trovato: ${percorso}`);
  }
  const grezzi = importaClienti(percorso);
  if (!Array.isArray(grezzi)) {
    throw new Error('Impossibile leggere la lista clienti dal file.');
  }

  const visti = new Set();
  const clienti = [];
  let esclusiBlocklist = 0;
  for (const c of grezzi) {
    if (!c || c.attivo === false || !c.numero) continue;
    const numero = normalizzaNumero(c.numero, prefissoDefault);
    if (!numeroPlausibile(numero)) continue;
    if (visti.has(numero)) continue; // niente doppioni
    if (blocklist.has(numero)) {
      esclusiBlocklist += 1;
      continue; // nella lista "non ricontattare"
    }
    visti.add(numero);
    clienti.push({
      nome: (c.nome || 'cliente').toString().trim() || 'cliente',
      numero,
    });
  }
  clienti._esclusiBlocklist = esclusiBlocklist;
  return clienti;
}

function caricaMessaggi(percorso) {
  if (!fs.existsSync(percorso)) {
    throw new Error(`File messaggi non trovato: ${percorso}`);
  }
  const lista = leggiJson(percorso);
  if (!Array.isArray(lista) || lista.length === 0) {
    throw new Error('Il file messaggi deve contenere un array JSON non vuoto.');
  }
  return lista.map((m) => m.toString());
}

module.exports = { caricaConfig, caricaClienti, caricaMessaggi, ROOT };
