# Guida: numeri + IP + QR dal telefono, e modalità prova

Tutto si gestisce dal **pannello web** (col telefono, senza PC). Queste sono le
funzioni nuove e come attivarle.

## Cosa fa adesso il sistema
- **Non si disconnette**: se la connessione cade, il bot si **riconnette da solo**.
  Le sessioni restano salvate sul server: i numeri già collegati **non** devono
  riscansionare il QR dopo un riavvio.
- **Ogni numero = il suo IP**: ad ogni numero assegni un IP dedicato. Quel numero
  usa **sempre e solo** quell'IP, in una **sessione isolata**: i numeri non si
  confondono mai tra loro.
- **Aggiungi numeri quando vuoi, dal telefono**: li aggiungi dal pannello, colleghi
  il QR dal pannello, e il bot li avvia da solo (si riavvia in automatico per
  applicare il nuovo numero, ~30 secondi).
- **Modalità prova**: un interruttore che manda **tutti i messaggi al tuo numero**
  invece che ai clienti, per testare dopo ogni modifica.

## Passo 1 — Prepara il database (una volta sola)
Su **Supabase** → progetto → **SQL Editor** → incolla il contenuto del file
`supabase/migrazione-fase5.sql` → **Run**. Crea le tabelle `account` e
`impostazioni` con la sicurezza (RLS) già impostata.

## Passo 2 — Aggiorna il server (una volta sola)
Entra nel server (SSH) e aggiorna il codice:
```bash
cd ~/bot && git pull && pm2 restart bot-clienti
```
Non serve reinstallare niente.

## Passo 3 — Aggiungi un numero (dal telefono)
Nel pannello → scheda **Numeri**:
1. **Nome breve** senza spazi (es. `num1`).
2. **Numero** (solo etichetta, es. `393401234567`).
3. **IP dedicato**: lo compri dal servizio proxy (IPRoyal ISP static, Italia) e lo
   incolli qui in formato `http://utente:password@host:porta`.
4. **Aggiungi numero** → poi **Collega**: appare il **QR nel pannello**.
5. Sul telefono: WhatsApp → **Dispositivi collegati** → **Collega un dispositivo**
   → inquadra il QR. Quando lo stato diventa **Connesso**, è fatto.

Ripeti per ogni numero: ognuno con il **suo** IP.

> Il primo numero che aggiungi dal pannello prende il posto della vecchia sessione
> singola: va scansionato una volta dal pannello. Da lì in poi resta collegato.

## Passo 4 — Modalità prova (per testare)
Nel pannello → scheda **Numeri** → in alto:
1. Attiva **"Invia tutto al mio numero"**.
2. Scrivi il tuo numero.
3. **Salva prova**.

Da quel momento (entro ~30s) ogni messaggio arriva **a te**, così controlli testi
e tempistiche senza scrivere ai clienti. Per tornare all'invio reale: togli la
spunta e **Salva prova**.

## Dove compro gli IP
Servizio consigliato: **IPRoyal → ISP Proxies (static residential)**, posizione
**Italia**, ~2,40 $/mese per IP. Dopo l'acquisto ti danno `host`, `porta`,
`utente`, `password`: li componi come `http://utente:password@host:porta` e li
incolli nel campo **IP dedicato** del pannello.
