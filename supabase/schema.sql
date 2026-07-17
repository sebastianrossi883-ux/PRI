-- Schema database per il bot (Fase 2 - Supabase)
-- Incolla questo nel SQL Editor di Supabase ed esegui.
-- Crea le tabelle per gestire clienti, messaggi, blocklist e report dal web.

-- Clienti a cui scrivere
create table if not exists clienti (
  id         bigint generated always as identity primary key,
  nome       text not null default 'cliente',
  numero     text not null,
  attivo     boolean not null default true,
  creato_il  timestamptz not null default now()
);

-- Template dei messaggi (il bot ne sceglie uno a caso)
create table if not exists messaggi (
  id     bigint generated always as identity primary key,
  testo  text not null,
  attivo boolean not null default true
);

-- Lista "non ricontattare" (gestita a mano)
create table if not exists blocklist (
  id        bigint generated always as identity primary key,
  numero    text not null,
  nota      text,
  creato_il timestamptz not null default now()
);

-- Report giornaliero (una riga per giorno)
create table if not exists report (
  data      date primary key,
  inviati   int not null default 0,
  saltati   int not null default 0,
  errori    int not null default 0,
  obiettivo int
);

-- Indici utili
create index if not exists idx_clienti_attivo on clienti (attivo);
create unique index if not exists idx_blocklist_numero on blocklist (numero);

-- ============================================================
-- FASE 4: messaggistica a due vie (ricevere + rispondere)
-- ============================================================

-- Una riga per conversazione (cliente <-> uno specifico TUO numero).
-- account_id identifica il numero che gestisce la conversazione: le risposte
-- devono uscire SEMPRE da quello, mai da un altro.
create table if not exists conversazioni (
  id            bigint generated always as identity primary key,
  account_id    text not null,
  numero_cliente text not null,
  nome          text,
  ultimo_testo  text,
  ultimo_il     timestamptz not null default now(),
  non_letti     int not null default 0,
  unique (account_id, numero_cliente)
);

-- Messaggi in ARRIVO dai clienti (il tuo inbox).
create table if not exists messaggi_ricevuti (
  id            bigint generated always as identity primary key,
  account_id    text not null,
  numero_cliente text not null,
  testo         text,
  ricevuto_il   timestamptz not null default now(),
  letto         boolean not null default false
);

-- Coda delle TUE risposte da inviare (le scrivi dalla UI, il motore le manda).
create table if not exists risposte_da_inviare (
  id            bigint generated always as identity primary key,
  account_id    text not null,
  numero_cliente text not null,
  testo         text not null,
  stato         text not null default 'pending',  -- pending | inviato | errore
  creato_il     timestamptz not null default now(),
  inviato_il    timestamptz
);

create index if not exists idx_ricevuti_conv on messaggi_ricevuti (account_id, numero_cliente);
create index if not exists idx_outbox_pending on risposte_da_inviare (account_id, stato);

-- NOTA sicurezza: il bot userà la "service role key" (lato server, segreta).
-- Se poi colleghi Lovable/Vercel, valuta di attivare Row Level Security (RLS) e
-- policy adeguate per l'accesso dal browser.
