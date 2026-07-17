'use strict';

const fs = require('fs');
const path = require('path');

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

  return cfg;
}

function caricaClienti(percorso) {
  if (!fs.existsSync(percorso)) {
    throw new Error(`File clienti non trovato: ${percorso}`);
  }
  const lista = leggiJson(percorso);
  if (!Array.isArray(lista)) {
    throw new Error('Il file clienti deve contenere un array JSON.');
  }
  return lista
    .filter((c) => c && c.attivo !== false && c.numero)
    .map((c) => ({
      nome: (c.nome || 'cliente').toString().trim(),
      numero: c.numero.toString().replace(/[^0-9]/g, ''),
    }))
    .filter((c) => c.numero.length >= 8);
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
