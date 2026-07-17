'use strict';

const log = require('./logger');
const { normalizzaNumero, numeroPlausibile } = require('./phone');

/**
 * Crea il client Supabase se abilitato in config, altrimenti restituisce null
 * (in quel caso il bot usa i file locali).
 */
function creaSupabase(config) {
  const s = config.supabase || {};
  if (!s.abilitato) return null;
  if (!s.url || !s.serviceKey) {
    throw new Error('supabase.abilitato=true ma manca url o serviceKey in config.json.');
  }
  let createClient;
  try {
    ({ createClient } = require('@supabase/supabase-js'));
  } catch (e) {
    throw new Error('Manca @supabase/supabase-js. Esegui: npm install');
  }
  return createClient(s.url, s.serviceKey, { auth: { persistSession: false } });
}

/** Carica i clienti dalla tabella 'clienti', normalizzando ed escludendo la blocklist. */
async function caricaClientiSupabase(sb, prefissoDefault, blocklist = new Set()) {
  const { data, error } = await sb.from('clienti').select('nome,numero,attivo');
  if (error) throw new Error('Supabase (clienti): ' + error.message);

  const visti = new Set();
  const clienti = [];
  let esclusi = 0;
  for (const c of data || []) {
    if (!c || c.attivo === false || !c.numero) continue;
    const numero = normalizzaNumero(c.numero, prefissoDefault);
    if (!numeroPlausibile(numero)) continue;
    if (visti.has(numero)) continue;
    if (blocklist.has(numero)) {
      esclusi += 1;
      continue;
    }
    visti.add(numero);
    clienti.push({
      nome: (c.nome || 'cliente').toString().trim() || 'cliente',
      numero,
    });
  }
  clienti._esclusiBlocklist = esclusi;
  return clienti;
}

/** Carica i testi dalla tabella 'messaggi' (solo quelli attivi). */
async function caricaMessaggiSupabase(sb) {
  const { data, error } = await sb.from('messaggi').select('testo,attivo').order('id');
  if (error) throw new Error('Supabase (messaggi): ' + error.message);
  const msg = (data || []).filter((r) => r.attivo !== false).map((r) => r.testo);
  if (!msg.length) throw new Error('Nessun messaggio attivo nella tabella messaggi.');
  return msg;
}

/** Carica i numeri dalla tabella 'blocklist'. */
async function caricaBlocklistSupabase(sb, prefissoDefault) {
  const set = new Set();
  const { data, error } = await sb.from('blocklist').select('numero');
  if (error) throw new Error('Supabase (blocklist): ' + error.message);
  for (const r of data || []) {
    const n = normalizzaNumero(r.numero, prefissoDefault);
    if (n) set.add(n);
  }
  return set;
}

/** Scrive/aggiorna la riga di report del giorno nella tabella 'report'. */
async function scriviReportSupabase(sb, dataKey, riepilogo) {
  const { error } = await sb.from('report').upsert(
    {
      data: dataKey,
      inviati: riepilogo.inviati,
      saltati: riepilogo.saltati,
      errori: riepilogo.errori,
      obiettivo: riepilogo.limite,
    },
    { onConflict: 'data' }
  );
  if (error) log.warn('Supabase (report): ' + error.message);
}

module.exports = {
  creaSupabase,
  caricaClientiSupabase,
  caricaMessaggiSupabase,
  caricaBlocklistSupabase,
  scriviReportSupabase,
};
