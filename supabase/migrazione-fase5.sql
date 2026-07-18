-- ============================================================
-- MIGRAZIONE FASE 5 — numeri (account) + IP + QR + modalità prova
-- Incolla TUTTO questo nel SQL Editor di Supabase e premi "Run".
-- È sicuro rieseguirlo: usa "if not exists" e ricrea le policy.
-- ============================================================

-- Un numero WhatsApp = un account. Ogni numero ha il SUO IP (proxy_url) e la
-- SUA sessione isolata sul server: i numeri non si confondono mai.
create table if not exists account (
  id            text primary key,          -- es. num1, num2 (senza spazi)
  numero        text,                       -- il tuo numero (solo etichetta)
  proxy_url     text,                        -- IP dedicato: http://utente:password@host:porta
  attivo        boolean not null default true,
  stato         text not null default 'in_attesa',
  qr            text,
  aggiornato_il timestamptz not null default now()
);

-- Impostazioni gestibili dal pannello (chiave/valore): usata per la modalità prova.
create table if not exists impostazioni (
  chiave text primary key,
  valore text
);

-- Valori iniziali: modalità prova spenta, invii NON in pausa.
insert into impostazioni (chiave, valore) values
  ('prova_abilitato', 'false'),
  ('prova_numero', ''),
  ('pausa', 'false')
on conflict (chiave) do nothing;

-- ---------- Sicurezza (RLS): solo utenti autenticati dal pannello ----------
alter table account     enable row level security;
alter table impostazioni enable row level security;

drop policy if exists account_auth on account;
create policy account_auth on account
  for all to authenticated using (true) with check (true);

drop policy if exists impostazioni_auth on impostazioni;
create policy impostazioni_auth on impostazioni
  for all to authenticated using (true) with check (true);
