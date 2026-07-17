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

-- NOTA sicurezza: il bot userà la "service role key" (lato server, segreta).
-- Se poi colleghi Lovable, valuta di attivare Row Level Security (RLS) e
-- policy adeguate per l'accesso dal browser.
