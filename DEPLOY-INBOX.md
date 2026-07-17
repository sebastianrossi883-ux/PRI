# Guida: rispondere ai messaggi + multi-numero (Fase 4)

Cosa aggiunge:
- 📥 **Ricezione**: i messaggi in arrivo vengono salvati su Supabase (il tuo inbox).
- 👁️ **Niente spunte blu**: tu leggi i messaggi, il contatto **non** vede che hai
  letto (non inviamo ricevute di lettura).
- ↩️ **Rispondi dal numero giusto**: ogni conversazione è legata al numero che
  l'ha gestita; la tua risposta esce **sempre da quello**.
- 📱 **Multi-numero**: più numeri insieme, ognuno con il **suo proxy** (1 IP
  dedicato per numero).

Richiede **Supabase abilitato** (vedi `DEPLOY-SUPABASE.md`) e lo schema
aggiornato (`supabase/schema.sql` include le tabelle `conversazioni`,
`messaggi_ricevuti`, `risposte_da_inviare`).

---

## 1) Aggiorna le tabelle
Riesegui `supabase/schema.sql` nel SQL Editor di Supabase (crea le tabelle nuove
della Fase 4; non tocca quelle esistenti).

## 2) Configura i numeri
In `config.json`:
```json
"account": [
  { "id": "num1", "numero": "393401111111", "proxyUrl": "http://user:pass@host1:porta", "cartellaSessione": "./.baileys-num1" },
  { "id": "num2", "numero": "393402222222", "proxyUrl": "http://user:pass@host2:porta", "cartellaSessione": "./.baileys-num2" }
]
```
> ⚠️ **1 proxy/IP dedicato per numero.** Mai due numeri sullo stesso IP.
> Con `account` vuoto `[]` il bot resta a numero singolo (sezione `baileys`).

## 3) Avvio e QR
Al primo avvio ogni numero mostra il **suo QR** nel terminale: scansionali con i
rispettivi telefoni. Le sessioni si salvano in `.baileys-num1/`, `.baileys-num2/`.

```bash
node src/index.js         # scansiona i QR, poi Ctrl+C
pm2 start src/index.js --name bot-clienti
```

## 4) Come funziona rispondere
- Un cliente ti scrive → il messaggio finisce nella tabella `messaggi_ricevuti`
  (e la conversazione in `conversazioni`), **senza spunte blu**.
- Tu scrivi la risposta inserendo una riga in `risposte_da_inviare` con
  `account_id` (il numero giusto), `numero_cliente` e `testo`, stato `pending`.
- Il motore la invia entro pochi secondi e la segna `inviato`.

Puoi inserire le risposte a mano dal Table Editor di Supabase, oppure con una UB
web (vedi sotto).

---

## Interfaccia web (Vercel o Lovable) — opzionale
La UI serve solo a rendere comodo leggere/rispondere. Sia **Vercel** che
**Lovable** vanno bene: sono serverless, quindi **non** fanno girare il motore
(che resta su AWS), ma sono perfetti per la faccia:

```
UI (Vercel/Lovable)  →  Supabase  →  motore su AWS  →  WhatsApp
   leggi conversazioni     (dati)      invia/riceve
   scrivi risposta →  riga in risposte_da_inviare → il motore la manda
```

Cosa deve fare la UI:
1. Leggere `conversazioni` (elenco chat) e `messaggi_ricevuti` (i messaggi).
2. Per rispondere: inserire una riga in `risposte_da_inviare` con l'`account_id`
   della conversazione (così esce dal numero giusto).

> Sicurezza: la UI web NON deve usare la *service key*. Attiva **RLS** su Supabase
> e usa la *anon key* con policy adeguate.

---

## Note oneste
- La **ricezione** WhatsApp non è collaudabile a tavolino: verifica sul server
  che i messaggi in arrivo compaiano in `messaggi_ricevuti`.
- Multi-numero = multi-costo: 1 SIM + 1 proxy dedicato per ogni numero.
