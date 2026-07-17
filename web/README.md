# Schermata web (inbox)

`index.html` è una pagina unica che si collega a Supabase e ti permette di:
- vedere l'elenco delle **conversazioni** (con il badge del numero che le gestisce),
- leggere i **messaggi** di ogni chat,
- **rispondere**: la risposta finisce nella coda `risposte_da_inviare` con
  l'`account_id` giusto, e il motore su AWS la invia dal **numero corretto**.

## Uso locale (subito)
Apri `web/index.html` nel browser, incolla **URL Supabase** e **anon key**
(Project Settings → API) e premi **Collega**. I dati restano nel tuo browser.

## Deploy su Vercel
1. Vai su **vercel.com** → **New Project** → importa questo repo.
2. **Root Directory**: `web`. Framework preset: **Other** (è un sito statico).
3. Deploy. Avrai un URL pubblico dove aprire l'inbox.

(In alternativa Netlify, Cloudflare Pages o qualsiasi hosting statico: basta
pubblicare la cartella `web/`.)

## ⚠️ Sicurezza (importante)
L'inbox contiene conversazioni private. La `anon key` è **pubblica** (finisce nel
browser), quindi da sola non protegge nulla. Due strade:

- **Veloce ma debole**: tieni l'URL privato. Chiunque abbia URL + anon key, però,
  può leggere. Va bene solo per prove.
- **Corretta**: attiva **Supabase Auth** (un utente email/password) e metti
  **RLS** con policy "solo autenticati". In quel caso serve aggiungere un piccolo
  login alla pagina (posso farlo su richiesta).

Esempio di policy RLS (SQL Editor), da usare con Supabase Auth attivo:
```sql
alter table conversazioni       enable row level security;
alter table messaggi_ricevuti   enable row level security;
alter table risposte_da_inviare enable row level security;

create policy "auth legge conversazioni" on conversazioni
  for select using (auth.role() = 'authenticated');
create policy "auth legge ricevuti" on messaggi_ricevuti
  for select using (auth.role() = 'authenticated');
create policy "auth gestisce risposte" on risposte_da_inviare
  for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
```
> Il **motore** (su AWS) usa la *service role key* e bypassa RLS: continua a
> funzionare. La pagina web usa la *anon key* + login.
