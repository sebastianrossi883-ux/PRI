const SUPA_URL = 'https://zqoiudqsqxqatfsmzvze.supabase.co';
const SUPA_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpxb2l1ZHFzcXhxYXRmc216dnplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQzMjQyMjUsImV4cCI6MjA5OTkwMDIyNX0.3T5bKiiciGfd9hIlqHPUC8jqoiMBOMlDeWi7KGPIfNQ';
const sb = window.supabase.createClient(SUPA_URL, SUPA_KEY);

const $ = (id) => document.getElementById(id);
let convAttiva = null, timerLista = null, timerChat = null, timerNumeri = null, timerQr = null;

/* ---------- Auth ---------- */
$('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  $('loginErr').textContent = '';
  const { error } = await sb.auth.signInWithPassword({
    email: $('email').value.trim(), password: $('password').value,
  });
  if (error) {
    console.error('Login error:', error);
    $('loginErr').textContent = 'Accesso negato: ' +
      (error.message || error.error_description || 'controlla email e password');
    return;
  }
  mostraApp();
});
$('btnLogout').onclick = async () => { await sb.auth.signOut(); location.reload(); };

function mostraApp() {
  $('loginWrap').classList.add('hidden');
  $('app').classList.remove('hidden');
  apriView('inbox');
}
sb.auth.getSession().then(({ data }) => { if (data.session) mostraApp(); });

/* ---------- Navigazione ---------- */
document.querySelectorAll('#nav .tab').forEach((b) => {
  b.onclick = () => apriView(b.dataset.view);
});
function apriView(v) {
  document.querySelectorAll('#nav .tab').forEach((b) => b.classList.toggle('active', b.dataset.view === v));
  ['inbox', 'clienti', 'messaggi', 'numeri', 'report'].forEach((k) => {
    $('view-' + k).classList.toggle('hidden', k !== v);
  });
  if (timerLista) clearInterval(timerLista);
  if (timerNumeri) clearInterval(timerNumeri);
  if (v === 'inbox') { caricaLista(); timerLista = setInterval(caricaLista, 6000); }
  if (v === 'clienti') caricaClienti();
  if (v === 'messaggi') caricaMessaggi();
  if (v === 'numeri') { caricaNumeri(); caricaProva(); caricaPausa(); timerNumeri = setInterval(caricaNumeri, 5000); }
  if (v === 'report') caricaReport();
}

/* ---------- INBOX ---------- */
$('btnSend').onclick = inviaRisposta;
$('reply').addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) inviaRisposta();
});
async function caricaLista() {
  const { data, error } = await sb.from('conversazioni')
    .select('id,account_id,numero_cliente,nome,ultimo_testo,ultimo_il')
    .order('ultimo_il', { ascending: false }).limit(200);
  if (error) { $('status').textContent = 'errore: ' + error.message; return; }
  $('status').textContent = '';
  const list = $('list');
  if (!data || !data.length) { list.innerHTML = '<div class="empty">Nessuna conversazione ancora.</div>'; return; }
  list.innerHTML = '';
  for (const c of data) {
    const div = document.createElement('div');
    div.className = 'conv' + (convAttiva && convAttiva.id === c.id ? ' active' : '');
    div.innerHTML = '<div class="top"><span class="name">' + esc(c.nome || c.numero_cliente) +
      '</span><span class="badge">' + esc(c.account_id) + '</span></div><div class="last">' +
      esc(c.ultimo_testo || '') + '</div>';
    div.onclick = () => apri(c);
    list.appendChild(div);
  }
}
async function apri(c) {
  convAttiva = c;
  document.body.classList.add('mobile-chat');
  $('chatHead').innerHTML =
    '<button class="ghost" onclick="document.body.classList.remove(\'mobile-chat\')">Indietro</button> <strong>' +
    esc(c.nome || c.numero_cliente) + '</strong> <span class="status">' +
    esc(c.numero_cliente) + '</span>';
  await caricaChat();
  if (timerChat) clearInterval(timerChat);
  timerChat = setInterval(caricaChat, 4000);
}
async function caricaChat() {
  if (!convAttiva) return;
  const c = convAttiva;
  const [ric, risp] = await Promise.all([
    sb.from('messaggi_ricevuti').select('*')
      .eq('account_id', c.account_id).eq('numero_cliente', c.numero_cliente)
      .order('ricevuto_il', { ascending: true }).limit(500),
    sb.from('risposte_da_inviare').select('testo,creato_il,stato')
      .eq('account_id', c.account_id).eq('numero_cliente', c.numero_cliente)
      .order('creato_il', { ascending: true }).limit(500),
  ]);
  const items = [];
  // da_me=true = messaggio scritto da te (anche dall'app WhatsApp) -> lato destro.
  (ric.data || []).forEach((m) => items.push({ dir: m.da_me ? 'out' : 'in', testo: m.testo, t: m.ricevuto_il }));
  (risp.data || []).forEach((m) => items.push({ dir: 'out', testo: m.testo, t: m.creato_il, stato: m.stato }));
  items.sort((a, b) => new Date(a.t) - new Date(b.t));
  const box = $('messages');
  box.innerHTML = '';
  for (const it of items) {
    const d = document.createElement('div');
    d.className = 'bubble ' + it.dir;
    d.innerHTML = esc(it.testo) + '<div class="meta">' + ora(it.t) +
      (it.dir === 'out' ? ' - ' + esc(it.stato || '') : '') + '</div>';
    box.appendChild(d);
  }
  box.scrollTop = box.scrollHeight;
}
async function inviaRisposta() {
  if (!convAttiva) { alert('Seleziona una conversazione.'); return; }
  const testo = $('reply').value.trim();
  if (!testo) return;
  const c = convAttiva;
  const { error } = await sb.from('risposte_da_inviare').insert({
    account_id: c.account_id, numero_cliente: c.numero_cliente, testo, stato: 'pending',
  });
  if (error) { alert('Errore invio: ' + error.message); return; }
  $('reply').value = '';
  caricaChat();
}

/* ---------- CLIENTI ---------- */
$('btnBulk').onclick = aggiungiClienti;
async function caricaClienti() {
  const { data, error } = await sb.from('clienti')
    .select('id,nome,numero,attivo').order('id', { ascending: false }).limit(1000);
  const box = $('clientiList');
  if (error) { box.innerHTML = '<div class="empty">Errore: ' + esc(error.message) + '</div>'; return; }
  $('clientiCount').textContent = (data || []).length;
  if (!data || !data.length) { box.innerHTML = '<div class="empty">Nessun cliente. Aggiungine sopra.</div>'; return; }
  box.innerHTML = '';
  for (const c of data) {
    const row = document.createElement('div');
    row.className = 'row';
    row.innerHTML = '<div class="grow"><b>' + esc(c.nome || 'cliente') + '</b><br><span class="num">' +
      esc(c.numero) + '</span></div>';
    const del = document.createElement('button');
    del.className = 'del'; del.textContent = 'Elimina';
    del.onclick = async () => {
      if (!confirm('Eliminare ' + (c.nome || c.numero) + '?')) return;
      await sb.from('clienti').delete().eq('id', c.id);
      caricaClienti();
    };
    row.appendChild(del);
    box.appendChild(row);
  }
}
async function aggiungiClienti() {
  const righe = $('bulk').value.split('\n').map((r) => r.trim()).filter(Boolean);
  if (!righe.length) return;
  const nuovi = [];
  for (const r of righe) {
    let nome = 'cliente', num = r;
    if (r.includes(',')) { const p = r.split(','); nome = p[0].trim() || 'cliente'; num = p.slice(1).join(',').trim(); }
    else if (r.includes(';')) { const p = r.split(';'); nome = p[0].trim() || 'cliente'; num = p.slice(1).join(';').trim(); }
    const numero = normNum(num);
    if (numero.length >= 8) nuovi.push({ nome, numero, attivo: true });
  }
  if (!nuovi.length) { $('clientiMsg').textContent = 'Nessun numero valido trovato.'; return; }
  const { error } = await sb.from('clienti').insert(nuovi);
  if (error) { $('clientiMsg').textContent = 'Errore: ' + error.message; return; }
  $('clientiMsg').textContent = nuovi.length + ' clienti aggiunti.';
  $('bulk').value = '';
  caricaClienti();
}
function normNum(raw) {
  let s = String(raw || '').trim(); if (!s) return '';
  const intl = s.startsWith('+') || /^00\d/.test(s.replace(/\s/g, ''));
  let d = s.replace(/\D/g, '');
  if (d.startsWith('00')) d = d.slice(2);
  if (!d) return '';
  if (intl) return d;
  if (d.length <= 10) return '39' + d;
  return d;
}

/* ---------- IMPORT DA FILE (Excel / CSV) ---------- */
$('fileClienti').onchange = importaFile;
async function importaFile(e) {
  const f = e.target.files[0];
  if (!f) return;
  $('fileMsg').textContent = 'Leggo il file...';
  try {
    const nome = f.name.toLowerCase();
    let righe;
    if (nome.endsWith('.xlsx') || nome.endsWith('.xls')) {
      const buf = await f.arrayBuffer();
      const wb = XLSX.read(buf, { type: 'array' });
      const ws = wb.Sheets[wb.SheetNames[0]];
      righe = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' });
    } else {
      const txt = await f.text();
      righe = txt.split(/\r?\n/).map((l) => l.split(/[,;\t]/));
    }
    const nuovi = estraiNomeNumero(righe);
    if (!nuovi.length) {
      $('fileMsg').textContent = 'Nessun numero di telefono valido trovato nel file.';
      return;
    }
    const { error } = await sb.from('clienti').insert(nuovi);
    if (error) { $('fileMsg').textContent = 'Errore: ' + error.message; return; }
    $('fileMsg').textContent = nuovi.length + ' clienti importati dal file ✓';
    caricaClienti();
  } catch (err) {
    $('fileMsg').textContent = 'Errore lettura file: ' + (err.message || err);
  } finally {
    e.target.value = '';
  }
}

/* Riconosce nome e numero da righe (array di celle), con o senza intestazione. */
function estraiNomeNumero(righe) {
  const out = [];
  if (!righe || !righe.length) return out;
  const reNome = /nome|name|ragione|cliente|contatto|azienda|attivit/i;
  const reNum = /tel|telefono|phone|cell|numero|mobile|whats/i;

  // Rileva l'intestazione (prima riga con parole chiave note).
  const head = (righe[0] || []).map((c) => String(c == null ? '' : c).trim());
  let idxNome = -1, idxNum = -1, start = 0;
  if (head.some((h) => reNome.test(h)) || head.some((h) => reNum.test(h))) {
    head.forEach((h, i) => {
      if (idxNome < 0 && reNome.test(h)) idxNome = i;
      if (idxNum < 0 && reNum.test(h)) idxNum = i;
    });
    start = 1;
  }

  const visti = new Set();
  for (let r = start; r < righe.length; r++) {
    const cells = (righe[r] || []).map((c) => String(c == null ? '' : c).trim());
    if (!cells.some(Boolean)) continue;

    let numero = idxNum >= 0 ? normNum(cells[idxNum]) : '';
    let nome = idxNome >= 0 ? cells[idxNome] : '';

    // Se non ho la colonna numero, prendo la cella che sembra un telefono.
    if (!numero || numero.length < 8) {
      let best = '';
      for (const c of cells) {
        const d = normNum(c);
        if (d.length >= 8 && d.length >= best.length && (c.match(/\d/g) || []).length >= 6) best = d;
      }
      numero = best;
    }
    // Se non ho la colonna nome, prendo la prima cella con lettere (non il numero).
    if (!nome) {
      for (const c of cells) {
        if (c && /[a-zà-ù]/i.test(c) && normNum(c).length < 8) { nome = c; break; }
      }
    }
    if (numero && numero.length >= 8 && !visti.has(numero)) {
      visti.add(numero);
      out.push({ nome: nome || 'cliente', numero, attivo: true });
    }
  }
  return out;
}

/* ---------- MESSAGGI ---------- */
$('btnAddMsg').onclick = aggiungiMessaggio;
async function caricaMessaggi() {
  const { data, error } = await sb.from('messaggi').select('id,testo,attivo').order('id');
  const box = $('messaggiList');
  if (error) { box.innerHTML = '<div class="empty">Errore: ' + esc(error.message) + '</div>'; return; }
  const att = (data || []).filter((m) => m.attivo !== false);
  $('messaggiCount').textContent = att.length;
  if (!data || !data.length) { box.innerHTML = '<div class="empty">Nessun testo. Aggiungine sopra.</div>'; return; }
  box.innerHTML = '';
  for (const m of data) {
    const row = document.createElement('div');
    row.className = 'row';
    row.innerHTML = '<div class="grow">' + esc(m.testo) + '</div>';
    const del = document.createElement('button');
    del.className = 'del'; del.textContent = 'Elimina';
    del.onclick = async () => {
      if (!confirm('Eliminare questo testo?')) return;
      await sb.from('messaggi').delete().eq('id', m.id);
      caricaMessaggi();
    };
    row.appendChild(del);
    box.appendChild(row);
  }
}
async function aggiungiMessaggio() {
  const testo = $('nuovoTesto').value.trim();
  if (!testo) return;
  const { error } = await sb.from('messaggi').insert({ testo, attivo: true });
  if (error) { $('messaggiMsg').textContent = 'Errore: ' + error.message; return; }
  $('messaggiMsg').textContent = 'Testo aggiunto.';
  $('nuovoTesto').value = '';
  caricaMessaggi();
}

/* ---------- NUMERI (account + IP) ---------- */
$('btnAddAcc').onclick = aggiungiNumero;
$('btnChiudiQr').onclick = chiudiQr;
const etichettaStato = {
  connesso: ['Connesso', 'ok'], qr: ['QR pronto', 'warn'], avvio: ['Avvio...', 'warn'],
  riconnessione: ['Riconnetto...', 'warn'], in_attesa: ['In attesa', 'muted'],
  disconnesso: ['Disconnesso', 'danger'],
};
async function caricaNumeri() {
  const { data, error } = await sb.from('account')
    .select('id,numero,proxy_url,attivo,stato').order('id');
  const box = $('numeriList');
  if (error) {
    box.innerHTML = '<div class="empty">Tabella non trovata. Esegui la migrazione SQL (migrazione-fase5.sql) su Supabase.</div>';
    return;
  }
  if (!data || !data.length) { box.innerHTML = '<div class="empty">Nessun numero. Aggiungine uno sopra.</div>'; return; }
  box.innerHTML = '';
  for (const a of data) {
    const [txt, cls] = etichettaStato[a.stato] || [a.stato || '—', 'muted'];
    const row = document.createElement('div');
    row.className = 'row';
    row.innerHTML = '<div class="grow"><b>' + esc(a.id) + '</b> <span class="badge ' + cls + '">' + esc(txt) +
      '</span><br><span class="num">' + esc(a.numero || '') + '</span>' +
      (a.proxy_url ? '<br><span class="num">IP: ' + esc(mascheraProxy(a.proxy_url)) + '</span>' : '<br><span class="num danger">nessun IP</span>') + '</div>';
    const azioni = document.createElement('div');
    azioni.className = 'azioni';
    const bQr = document.createElement('button');
    bQr.textContent = a.stato === 'connesso' ? 'Ricollega' : 'Collega';
    bQr.onclick = () => apriQr(a);
    const bDel = document.createElement('button');
    bDel.className = 'del'; bDel.textContent = 'Elimina';
    bDel.onclick = async () => {
      if (!confirm('Eliminare il numero ' + a.id + '? Verrà scollegato.')) return;
      await sb.from('account').delete().eq('id', a.id);
      caricaNumeri();
    };
    azioni.appendChild(bQr); azioni.appendChild(bDel);
    row.appendChild(azioni);
    box.appendChild(row);
  }
}
function mascheraProxy(u) {
  return String(u).replace(/\/\/([^:@/]+):([^@/]+)@/, '//$1:****@');
}
async function aggiungiNumero() {
  const id = $('accId').value.trim().replace(/\s+/g, '');
  const numero = normNum($('accNumero').value.trim());
  const proxy = $('accProxy').value.trim();
  if (!id) { $('numeriMsg').textContent = 'Metti un nome breve (es. num1).'; return; }
  const { error } = await sb.from('account').upsert(
    { id, numero, proxy_url: proxy, attivo: true, stato: 'in_attesa' }, { onConflict: 'id' });
  if (error) { $('numeriMsg').textContent = 'Errore: ' + error.message; return; }
  $('numeriMsg').textContent = 'Numero salvato. Premi "Collega" per il QR.';
  $('accId').value = ''; $('accNumero').value = ''; $('accProxy').value = '';
  caricaNumeri();
}
async function apriQr(a) {
  $('qrModal').classList.remove('hidden');
  $('qrTitolo').textContent = 'Collega ' + a.id;
  $('qrArea').innerHTML = '<div class="muted small">Attendo il QR dal server (fino a ~30s)...</div>';
  $('qrStato').textContent = '';
  if (timerQr) clearInterval(timerQr);
  let ultimo = '';
  const tick = async () => {
    const { data } = await sb.from('account').select('stato,qr').eq('id', a.id).single();
    if (!data) return;
    if (data.stato === 'connesso') {
      $('qrArea').innerHTML = '<div class="ok-big">✓ Collegato!</div>';
      $('qrStato').textContent = 'Numero connesso. Puoi chiudere.';
      clearInterval(timerQr); timerQr = null; caricaNumeri(); return;
    }
    if (data.qr && data.qr !== ultimo) {
      ultimo = data.qr;
      $('qrArea').innerHTML = '<canvas id="qrCanvas"></canvas>';
      try { await QRCode.toCanvas($('qrCanvas'), data.qr, { width: 260, margin: 1 }); }
      catch (e) { $('qrArea').innerHTML = '<div class="danger small">Errore QR: ' + esc(e.message) + '</div>'; }
      $('qrStato').textContent = 'Inquadra il QR ora.';
    }
  };
  tick();
  timerQr = setInterval(tick, 3000);
}
function chiudiQr() {
  $('qrModal').classList.add('hidden');
  if (timerQr) { clearInterval(timerQr); timerQr = null; }
}

/* ---------- PAUSA (ferma/riprendi invii) ---------- */
$('pausaOn').onchange = salvaPausa;
async function caricaPausa() {
  const { data } = await sb.from('impostazioni').select('valore').eq('chiave', 'pausa').maybeSingle();
  const on = data && data.valore === 'true';
  $('pausaOn').checked = on;
  aggiornaEtichettaPausa(on);
}
function aggiornaEtichettaPausa(on) {
  $('pausaLbl').textContent = on ? '▶ Invii FERMI — tocca per riprendere' : '⏸ Ferma gli invii automatici';
}
async function salvaPausa() {
  const on = $('pausaOn').checked;
  aggiornaEtichettaPausa(on);
  const { error } = await sb.from('impostazioni').upsert(
    { chiave: 'pausa', valore: on ? 'true' : 'false' }, { onConflict: 'chiave' });
  $('pausaMsg').textContent = error ? 'Errore: ' + error.message
    : (on ? 'Invii fermati (si applica entro ~30s).' : 'Invii ripresi.');
}

/* ---------- PROVA ---------- */
$('btnProva').onclick = salvaProva;
async function caricaProva() {
  const { data } = await sb.from('impostazioni').select('chiave,valore')
    .in('chiave', ['prova_abilitato', 'prova_numero']);
  const m = {};
  (data || []).forEach((r) => { m[r.chiave] = r.valore; });
  $('provaOn').checked = m.prova_abilitato === 'true';
  $('provaNum').value = m.prova_numero || '';
}
async function salvaProva() {
  const on = $('provaOn').checked;
  const num = normNum($('provaNum').value.trim());
  if (on && num.length < 8) { $('provaMsg').textContent = 'Metti un numero valido.'; return; }
  const { error } = await sb.from('impostazioni').upsert([
    { chiave: 'prova_abilitato', valore: on ? 'true' : 'false' },
    { chiave: 'prova_numero', valore: num },
  ], { onConflict: 'chiave' });
  if (error) { $('provaMsg').textContent = 'Errore: ' + error.message; return; }
  $('provaMsg').textContent = on
    ? 'Prova ATTIVA: i messaggi vanno a ' + num + ' (attiva entro ~30s).'
    : 'Prova spenta: i messaggi vanno ai clienti reali.';
}

/* ---------- REPORT ---------- */
async function caricaReport() {
  const { data, error } = await sb.from('report').select('*').order('data', { ascending: false }).limit(60);
  const box = $('reportList');
  if (error) { box.innerHTML = '<div class="empty">Errore: ' + esc(error.message) + '</div>'; return; }
  if (!data || !data.length) { box.innerHTML = '<div class="empty">Ancora nessun dato.</div>'; return; }
  box.innerHTML = '<div class="row rep muted small"><span>Data</span><span>Inviati</span><span>Saltati</span><span>Errori</span></div>';
  for (const r of data) {
    const row = document.createElement('div');
    row.className = 'row rep';
    row.innerHTML = '<span>' + esc(r.data) + '</span><b>' + (r.inviati || 0) + '</b><b>' +
      (r.saltati || 0) + '</b><b>' + (r.errori || 0) + '</b>';
    box.appendChild(row);
  }
}

/* ---------- helpers ---------- */
function esc(s) {
  return (s == null ? '' : String(s)).replace(/[&<>"]/g,
    (x) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[x]));
}
function ora(t) {
  try { return new Date(t).toLocaleString('it-IT', { hour12: false }); } catch (e) { return ''; }
}
