# Guida: collegare Supabase (Fase 2)

Obiettivo: gestire **clienti, messaggi, blocklist e report** da un database web
(Supabase) invece che dai file sul server. Il motore su AWS continua a girare;
legge/scrive su Supabase.

> Non è obbligatorio: il bot funziona già con i file. Questo serve solo se vuoi
> gestire tutto da un'interfaccia comoda (e poi collegarci Lovable).

---

## 1) Crea il progetto Supabase
1. Vai su **supabase.com** → **New project** (piano free).
2. Scegli una password per il database e la **region** (Europe).
3. Aspetta che il progetto sia pronto.

## 2) Crea le tabelle
1. Menu **SQL Editor** → **New query**.
2. Incolla il contenuto di **`supabase/schema.sql`** (in questo repo) → **Run**.
3. Vai su **Table Editor**: dovresti vedere `clienti`, `messaggi`, `blocklist`,
   `report`.

## 3) Prendi le chiavi
Menu **Project Settings → API**:
- **Project URL** (es. `https://xxxx.supabase.co`)
- **service_role key** (⚠️ segreta, solo lato server — NON metterla in Lovable)

## 4) Configura il bot (sul server AWS)
In `config.json` aggiungi:
```json
"supabase": {
  "abilitato": true,
  "url": "https://xxxx.supabase.co",
  "serviceKey": "LA_TUA_SERVICE_ROLE_KEY"
}
```
Quando `abilitato` è `true`, il bot legge **clienti/messaggi/blocklist** da
Supabase (invece dei file) e scrive il **report** nella tabella `report`.
Con `abilitato: false` torna ai file locali.

## 5) Inserisci i dati
Dal **Table Editor** di Supabase:
- `clienti`: aggiungi righe con `nome` e `numero` (metti `attivo` = true).
- `messaggi`: aggiungi i testi (usa `{nome}` dove vuoi il nome del cliente).
- `blocklist`: i numeri da non ricontattare.

## 6) Riavvia il bot
```bash
pm2 restart bot-clienti
pm2 logs bot-clienti
```
Nei log vedrai che carica i clienti da Supabase.

---

## Cosa resta sul server (non su Supabase)
Lo **stato interno** (conteggi giornalieri, warm-up, rotazione) resta in
`state.json` sul server: è roba tecnica che non gestisci a mano. Su Supabase va
solo ciò che ti serve **vedere/modificare**: clienti, messaggi, blocklist, report.

## Prossimo passo (Fase 3 - Lovable)
Una volta che i dati sono su Supabase, si costruisce un'app **Lovable** collegata
allo stesso progetto Supabase: pagine per aggiungere clienti, modificare messaggi
e vedere i grafici del report. Il motore su AWS raccoglie le modifiche in
automatico.
