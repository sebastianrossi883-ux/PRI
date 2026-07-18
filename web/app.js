const SUPA_URL = 'https://zqoiudqsqxqatfsmzvze.supabase.co';
const SUPA_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpxb2l1ZHFzcXhxYXRmc216dnplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQzMjQyMjUsImV4cCI6MjA5OTkwMDIyNX0.3T5bKiiciGfd9hIlqHPUC8jqoiMBOMlDeWi7KGPIfNQ';
const sb = window.supabase.createClient(SUPA_URL, SUPA_KEY);

const $ = (id) => document.getElementById(id);
let convAttiva = null, timerLista = null, timerChat = null;

/* ---------- Auth ---------- */
$('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  $('loginErr').textContent = '';
  const { error } = await sb.auth.signInWithPassword({
    email: $('email').value.trim(), password: $('password').value,
  });
  if (error) { $('loginErr').textContent = 'Accesso negato: ' + error.message; return; }
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
  ['inbox', 'clienti', 'messaggi', 'report'].forEach((k) => {
    $('view-' + k).classList.toggle('hidden', k !== v);
  });
  if (timerLista) clearInterval(timerLista);
  if (v === 'inbox') { caricaLista(); timerLista = setInterval(caricaLista, 6000); }
  if (v === 'clienti') caricaClienti();
  if (v === 'messaggi') caricaMessaggi();
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
    sb.from('messaggi_ricevuti').select('testo,ricevuto_il')
      .eq('account_id', c.account_id).eq('numero_cliente', c.numero_cliente)
      .order('ricevuto_il', { ascending: true }).limit(500),
    sb.from('risposte_da_inviare').select('testo,creato_il,stato')
      .eq('account_id', c.account_id).eq('numero_cliente', c.numero_cliente)
      .order('creato_il', { ascending: true }).limit(500),
  ]);
  const items = [];
  (ric.data || []).forEach((m) => items.push({ dir: 'in', testo: m.testo, t: m.ricevuto_il }));
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
