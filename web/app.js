const SUPA_URL = 'https://zqoiudqsqxqatfsmzvze.supabase.co';
const SUPA_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpxb2l1ZHFzcXhxYXRmc216dnplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQzMjQyMjUsImV4cCI6MjA5OTkwMDIyNX0.3T5bKiiciGfd9hIlqHPUC8jqoiMBOMlDeWi7KGPIfNQ';
const sb = window.supabase.createClient(SUPA_URL, SUPA_KEY);

const $ = (id) => document.getElementById(id);
let convAttiva = null, timerLista = null, timerChat = null;

$('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  $('loginErr').textContent = '';
  const { error } = await sb.auth.signInWithPassword({
    email: $('email').value.trim(), password: $('password').value,
  });
  if (error) { $('loginErr').textContent = 'Accesso negato: ' + error.message; return; }
  mostraApp();
});
$('btnLogout').onclick = async () => { await sb.auth.signOut(); mostraLogin(); };

function mostraApp() {
  $('loginWrap').classList.add('hidden');
  $('app').classList.remove('hidden');
  caricaLista();
  if (timerLista) clearInterval(timerLista);
  timerLista = setInterval(caricaLista, 6000);
}
function mostraLogin() {
  if (timerLista) clearInterval(timerLista);
  if (timerChat) clearInterval(timerChat);
  $('app').classList.add('hidden');
  $('loginWrap').classList.remove('hidden');
}

sb.auth.getSession().then(({ data }) => { if (data.session) mostraApp(); });

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
    esc(c.numero_cliente) + ' - via ' + esc(c.account_id) + '</span>';
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

function esc(s) {
  return (s == null ? '' : String(s)).replace(/[&<>"]/g,
    (x) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[x]));
}
function ora(t) {
  try { return new Date(t).toLocaleString('it-IT', { hour12: false }); } catch (e) { return ''; }
}
