# START — Collegare tutto dall'inizio alla fine

Segui questi passi **in ordine**. Alla fine avrai: il bot che invia e riceve su
un server AWS (via proxy), i dati su Supabase, e una schermata web per rispondere.

```
Web (Vercel) ──anon key──► Supabase ◄──service key── Bot (AWS + proxy) ──► WhatsApp
```

## Prima di iniziare ti servono
- Account **AWS** (col tuo credito da $100)
- **1 SIM / numero** WhatsApp dedicato (non il tuo principale)
- **1 proxy IPRoyal** ISP static, IP **Italia** (per 1 numero)
- Account **Supabase** (gratis) e **Vercel** (gratis)

---

## STEP 1 — Supabase (database)
1. Vai su **supabase.com** → **New project** (region Europe).
2. Menu **SQL Editor** → **New query** → incolla il contenuto di
   `supabase/schema.sql` (in questo repo) → **Run**.
3. Menu **Project Settings → API** e copia (ti servono dopo):
   - **Project URL** (`https://xxxx.supabase.co`)
   - **service_role key** (segreta → solo per il server)
   - **anon key** (pubblica → per la schermata web)
4. In **Table Editor** apri `clienti` e `messaggi` e inserisci qualche riga di
   prova (clienti: `nome`, `numero`; messaggi: un paio di testi con `{nome}`).

## STEP 2 — Proxy IPRoyal (l'IP)
1. Su **iproyal.com** compra **ISP Static Residential** → **1 IP**, **Italia**.
2. Ti danno `host : porta : utente : password`.
3. Componi l'URL (ti serve al passo 5):
   `http://UTENTE:PASSWORD@HOST:PORTA`

## STEP 3 — Server AWS EC2
1. Console AWS → **EC2** → **Launch instance**.
2. **Ubuntu 24.04**, tipo **t3.small**, crea una **key pair** e scarica il `.pem`.
3. **Network** → Allow **SSH** from **My IP**. Launch.
4. Collegati (dal tuo PC, dove hai il `.pem`):
   ```bash
   chmod 400 bot-key.pem
   ssh -i bot-key.pem ubuntu@IP_PUBBLICO
   ```
   (Dettagli completi in `DEPLOY-AWS.md`.)

## STEP 4 — Installa e scarica il progetto (sul server)
```bash
sudo apt-get update
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs git
git clone https://github.com/sebastianrossi883-ux/PRI.git bot
cd bot
npm install
cp config.example.json config.json
```

## STEP 5 — Configura (collega Supabase + proxy + numero)
Apri il config: `nano config.json` e imposta:
```json
"motore": "baileys",
"supabase": {
  "abilitato": true,
  "url": "https://xxxx.supabase.co",
  "serviceKey": "LA_TUA_SERVICE_ROLE_KEY"
},
"account": [
  {
    "id": "num1",
    "numero": "393401111111",
    "proxyUrl": "http://UTENTE:PASSWORD@HOST:PORTA",
    "cartellaSessione": "./.baileys-num1"
  }
]
```
Salva: `Ctrl+O`, `Invio`, `Ctrl+X`.
> Con Supabase abilitato, clienti/messaggi arrivano dal database (STEP 1), non dai file.

## STEP 6 — Primo avvio e QR
```bash
node src/index.js
```
- Appare il **QR** → sul telefono: WhatsApp → **Dispositivi collegati** →
  **Collega un dispositivo** → inquadra.
- Quando leggi **"Connessione WhatsApp aperta"**, premi **Ctrl+C**.

## STEP 7 — Tienilo acceso 24/7
```bash
sudo npm install -g pm2
pm2 start src/index.js --name bot-clienti
pm2 save
pm2 startup     # esegui il comando che stampa
pm2 logs bot-clienti   # per controllare
```

## STEP 8 — Schermata web (Vercel)
1. **vercel.com** → **New Project** → importa questo repo.
2. **Root Directory**: `web` → Framework: **Other** → **Deploy**.
3. Apri l'URL che ti dà Vercel → incolla **Project URL** + **anon key**
   (STEP 1) → **Collega**.

## STEP 9 — Prova il giro completo
1. Con un tuo secondo telefono, **scrivi** al numero del bot.
2. Sulla **schermata web** deve comparire la conversazione e il messaggio
   (senza che sul telefono del bot risulti "letto" con le spunte blu).
3. Dalla web **rispondi**: dopo pochi secondi il messaggio arriva, inviato **dal
   numero giusto**.

---

## Gestione di tutti i giorni
- **Report**: tabella `report` su Supabase (o `report.csv` sul server).
- **Non ricontattare**: aggiungi righe nella tabella `blocklist`.
- **Pausa al volo**: `touch pausa` mette in pausa, `rm pausa` riprende.
- **Aggiornare il codice**:
  ```bash
  cd ~/bot && git pull && npm install && pm2 restart bot-clienti
  ```

## Se qualcosa non va
- **Non invia / errori**: `pm2 logs bot-clienti` e leggi il messaggio.
- **Ban rapido**: quasi sempre è il **proxy** (assente, datacenter, o IP non
  italiano). Controlla `proxyUrl`.
- **La web non vede nulla**: URL/anon key sbagliati, o le tabelle non create
  (rilancia `supabase/schema.sql`).
- **Più numeri**: ripeti STEP 2 (un proxy per numero) e aggiungi elementi in
  `account` (vedi `DEPLOY-INBOX.md`).

## Costi (promemoria, 1 numero)
- AWS EC2: gratis col credito (~6 mesi) → poi ~$15/mese (o Oracle free)
- Proxy IPRoyal ISP: ~$2,40/mese
- Supabase + Vercel: gratis
- SIM: una tantum
