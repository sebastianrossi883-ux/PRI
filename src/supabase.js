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

/* ---------------- Fase 5: numeri (account) + IP + QR ---------------- */

/**
 * Carica gli account (numeri) dalla tabella 'account'. Ogni account porta il
 * SUO proxy/IP dedicato e la SUA cartella di sessione isolata (derivata dall'id):
 * cosi' i numeri non si confondono mai tra loro.
 * Se la tabella non esiste ancora o e' vuota, restituisce [] (il bot usa
 * allora il singolo numero della config).
 */
async function caricaAccountSupabase(sb) {
  const { data, error } = await sb
    .from('account')
    .select('id,numero,proxy_url,attivo')
    .order('id');
  if (error) {
    // Tabella non ancora creata: nessun blocco, si torna al singolo numero.
    log.warn('Supabase (account): ' + error.message + ' — uso il numero della config.');
    return [];
  }
  return (data || [])
    .filter((a) => a && a.id && a.attivo !== false)
    .map((a) => ({
      id: String(a.id),
      numero: a.numero || '',
      proxyUrl: a.proxy_url || '',
      // Cartella sessione ISOLATA per numero: non si mescolano mai.
      cartellaSessione: `./.baileys-${String(a.id)}`,
    }));
}

/**
 * Legge le impostazioni gestibili dal pannello (tabella 'impostazioni',
 * chiave/valore). Ritorna una mappa { chiave: valore }. Se la tabella non
 * esiste, ritorna {} senza bloccare.
 */
async function leggiImpostazioni(sb) {
  const { data, error } = await sb.from('impostazioni').select('chiave,valore');
  if (error) return {};
  const map = {};
  for (const r of data || []) map[r.chiave] = r.valore;
  return map;
}

/** Legge i comandi in coda dal pannello (Riavvia / Ricollega). */
async function prendiComandi(sb) {
  const { data, error } = await sb
    .from('comandi')
    .select('id,tipo,account_id')
    .eq('stato', 'pending')
    .order('id')
    .limit(10);
  if (error) return []; // tabella non ancora creata
  return data || [];
}

/** Segna un comando come eseguito. */
async function segnaComando(sb, id) {
  try {
    await sb.from('comandi').update({ stato: 'fatto' }).eq('id', id);
  } catch (_) {
    /* ignora */
  }
}

/** Aggiorna stato e/o QR di un account (per mostrarli nel pannello). */
async function aggiornaStatoAccount(sb, id, patch) {
  const riga = { id: String(id), aggiornato_il: new Date().toISOString() };
  if (Object.prototype.hasOwnProperty.call(patch, 'stato')) riga.stato = patch.stato;
  if (Object.prototype.hasOwnProperty.call(patch, 'qr')) riga.qr = patch.qr;
  const { error } = await sb.from('account').upsert(riga, { onConflict: 'id' });
  if (error) log.warn('Supabase (stato account): ' + error.message);
}

/* ---------------- Fase 4: due vie (inbox + outbox) ---------------- */

/** Salva un messaggio in arrivo e aggiorna la conversazione. */
async function salvaMessaggioRicevuto(sb, accountId, numero, testo, jid) {
  const { error: e1 } = await sb.from('messaggi_ricevuti').insert({
    account_id: accountId,
    numero_cliente: numero,
    testo: testo || '',
  });
  if (e1) throw new Error('Supabase (ricevuti): ' + e1.message);

  // Se il numero è tra i tuoi clienti, mostriamo il NOME invece del numero.
  let nome = null;
  try {
    const { data } = await sb
      .from('clienti')
      .select('nome')
      .eq('numero', numero)
      .limit(1)
      .maybeSingle();
    if (data && data.nome) nome = data.nome;
  } catch (_) {
    /* se non lo troviamo, resta il numero */
  }

  // Aggiorna/crea la conversazione (legata a questo account = numero giusto).
  const riga = {
    account_id: accountId,
    numero_cliente: numero,
    ultimo_testo: testo || '',
    ultimo_il: new Date().toISOString(),
  };
  if (nome) riga.nome = nome; // scriviamo il nome solo se trovato (non lo azzeriamo)
  if (jid) riga.jid = jid; // chat esatta a cui rispondere (gestisce i contatti @lid)
  let { error: e2 } = await sb.from('conversazioni').upsert(riga, {
    onConflict: 'account_id,numero_cliente',
  });
  // Se la colonna 'jid' non esiste ancora, riprova senza (retrocompatibile).
  if (e2 && /jid/i.test(e2.message)) {
    delete riga.jid;
    ({ error: e2 } = await sb.from('conversazioni').upsert(riga, {
      onConflict: 'account_id,numero_cliente',
    }));
  }
  if (e2) throw new Error('Supabase (conversazioni): ' + e2.message);
}

/**
 * Salva un messaggio che HAI SCRITTO TU (dall'app WhatsApp), per sincronizzarlo
 * nel pannello. Due accortezze:
 *  - NON duplica le risposte gia' inviate dal pannello (che tornano come "eco");
 *  - salva solo se la conversazione ESISTE gia' (evita di riempire l'inbox con
 *    gli invii a freddo della campagna).
 */
async function salvaMessaggioMio(sb, accountId, numero, testo, jid) {
  if (!testo) return;
  const dueMinutiFa = new Date(Date.now() - 2 * 60 * 1000).toISOString();

  // 1) E' l'eco di una risposta partita dal pannello? Allora non ri-salvare.
  const { data: giaInPannello } = await sb
    .from('risposte_da_inviare')
    .select('id')
    .eq('account_id', accountId)
    .eq('numero_cliente', numero)
    .eq('testo', testo)
    .gte('creato_il', dueMinutiFa)
    .limit(1);
  if (giaInPannello && giaInPannello.length) return;

  // 2) Sincronizza solo chat gia' esistenti (non gli invii a freddo).
  const { data: conv } = await sb
    .from('conversazioni')
    .select('id')
    .eq('account_id', accountId)
    .eq('numero_cliente', numero)
    .maybeSingle();
  if (!conv) return;

  // 3) Salva come messaggio mio (da_me=true) e aggiorna la conversazione.
  const { error: e1 } = await sb.from('messaggi_ricevuti').insert({
    account_id: accountId,
    numero_cliente: numero,
    testo,
    da_me: true,
  });
  if (e1) {
    // Se la colonna da_me non esiste ancora, non blocchiamo il flusso.
    if (/da_me/i.test(e1.message)) return;
    throw new Error('Supabase (mio): ' + e1.message);
  }
  const riga = {
    account_id: accountId,
    numero_cliente: numero,
    ultimo_testo: testo,
    ultimo_il: new Date().toISOString(),
  };
  if (jid) riga.jid = jid;
  let { error: e2 } = await sb.from('conversazioni').upsert(riga, {
    onConflict: 'account_id,numero_cliente',
  });
  if (e2 && /jid/i.test(e2.message)) {
    delete riga.jid;
    ({ error: e2 } = await sb.from('conversazioni').upsert(riga, {
      onConflict: 'account_id,numero_cliente',
    }));
  }
  if (e2) log.warn('Supabase (conversazioni, mio): ' + e2.message);
}

/** Ritorna il jid esatto a cui rispondere per una conversazione (o null). */
async function jidPerConversazione(sb, accountId, numero) {
  try {
    const { data } = await sb
      .from('conversazioni')
      .select('jid')
      .eq('account_id', accountId)
      .eq('numero_cliente', numero)
      .maybeSingle();
    return data && data.jid ? data.jid : null;
  } catch (_) {
    return null; // colonna assente o errore: si usa il fallback
  }
}

/** Prende le risposte in coda per questo account (da inviare). */
async function prendiRisposteDaInviare(sb, accountId, limite = 20) {
  const { data, error } = await sb
    .from('risposte_da_inviare')
    .select('id,numero_cliente,testo')
    .eq('account_id', accountId)
    .eq('stato', 'pending')
    .order('creato_il', { ascending: true })
    .limit(limite);
  if (error) throw new Error('Supabase (outbox): ' + error.message);
  return data || [];
}

/** Segna una risposta come inviata o in errore. */
async function segnaRisposta(sb, id, stato) {
  const patch = { stato };
  if (stato === 'inviato') patch.inviato_il = new Date().toISOString();
  const { error } = await sb.from('risposte_da_inviare').update(patch).eq('id', id);
  if (error) log.warn('Supabase (segna risposta): ' + error.message);
}

module.exports = {
  creaSupabase,
  caricaClientiSupabase,
  caricaMessaggiSupabase,
  caricaBlocklistSupabase,
  scriviReportSupabase,
  caricaAccountSupabase,
  aggiornaStatoAccount,
  leggiImpostazioni,
  prendiComandi,
  segnaComando,
  salvaMessaggioRicevuto,
  salvaMessaggioMio,
  jidPerConversazione,
  prendiRisposteDaInviare,
  segnaRisposta,
};
