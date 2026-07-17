# Guida: mettere il bot su AWS EC2 (passo-passo)

Obiettivo: far girare il bot **24/7 su un server AWS**, con il traffico WhatsApp
che esce da un **proxy residenziale IPRoyal** (mai dall'IP di AWS).

> ⚠️ Regola d'oro: AWS fa girare il **programma**, ma l'**IP verso WhatsApp** deve
> essere quello del **proxy**. Senza proxy su AWS = ban rapido.

---

## 0) Cosa ti serve prima
- Account **AWS** (con il tuo credito da $100)
- 1 **SIM/numero** WhatsApp dedicato (meglio non il tuo principale)
- 1 **proxy IPRoyal ISP static**, IP **Italia**, dedicato (vedi passo 6)

---

## 1) Crea il server (istanza EC2)
1. Console AWS → cerca **EC2** → **Launch instance**.
2. **Nome**: `bot-clienti`.
3. **OS**: **Ubuntu Server 24.04 LTS**.
4. **Tipo istanza**: **t3.small** (2 GB RAM: sicuro. Baileys è leggero ma non
   tirchiare sulla RAM).
5. **Key pair**: creane una nuova (`bot-key`) e **scarica il file `.pem`**: ti
   serve per collegarti. Conservalo.
6. **Region** (in alto a destra): scegli **Europe (Milan)** o **Frankfurt**.
7. **Network settings** → **Allow SSH traffic from** → **My IP** (così solo tu ti
   colleghi). Niente altre porte aperte.
8. **Launch instance**.

---

## 2) Collegati al server (SSH)
Dal tuo PC, nella cartella dove hai il `.pem`:
```bash
chmod 400 bot-key.pem
ssh -i bot-key.pem ubuntu@IP_PUBBLICO_DELL_ISTANZA
```
(L'IP pubblico lo vedi nella pagina dell'istanza EC2, campo "Public IPv4".)

---

## 3) Installa Node.js
Sul server:
```bash
sudo apt-get update
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs git
node --version   # deve stampare v22.x
```

---

## 4) Scarica il progetto
```bash
git clone https://github.com/sebastianrossi883-ux/PRI.git bot
cd bot
npm install
```
(`npm install` scarica Baileys e le altre dipendenze: può metterci un minuto.)

---

## 5) Prepara i file di configurazione
```bash
cp config.example.json config.json
cp clients.example.csv clients.csv     # poi mettici i tuoi clienti
cp messages.example.json messages.json
```
Per modificare un file sul server: `nano config.json` (salva con Ctrl+O, esci con
Ctrl+X).

In `config.json` assicurati che ci sia:
```json
"motore": "baileys",
```

---

## 6) Configura il proxy IPRoyal
1. Su **iproyal.com** compra **ISP Static Residential** → **1 IP**, località
   **Italia**, dedicato.
2. Ti danno qualcosa tipo: `host : porta : utente : password`.
3. In `config.json`, sezione `baileys`, componi l'URL così:
```json
"baileys": {
  "cartellaSessione": "./.baileys-auth",
  "proxyUrl": "http://UTENTE:PASSWORD@HOST:PORTA"
}
```
   (Se IPRoyal ti dà un proxy SOCKS, usa `socks5://UTENTE:PASSWORD@HOST:PORTA`.)

---

## 7) Primo avvio: collega WhatsApp (QR)
Avvia una volta in primo piano per scansionare il QR:
```bash
node src/index.js
```
- Appare un **QR nel terminale**.
- Sul telefono: **WhatsApp → Impostazioni → Dispositivi collegati → Collega un
  dispositivo** → inquadra il QR.
- Quando leggi **"Connessione WhatsApp aperta"**, premi **Ctrl+C** per fermare.
- La sessione resta salvata in `.baileys-auth/`: non dovrai più riscansionare.

> Prima di partire davvero, fai una prova senza inviare:
> ```bash
> npm run dry-run
> ```

---

## 8) Tienilo acceso per sempre (pm2)
```bash
sudo npm install -g pm2
pm2 start src/index.js --name bot-clienti
pm2 save
pm2 startup     # esegui il comando che ti stampa (riavvio automatico al reboot)
```
Comandi utili:
```bash
pm2 logs bot-clienti     # vedi cosa sta facendo
pm2 restart bot-clienti  # riavvia
pm2 stop bot-clienti     # ferma
```

---

## 9) Gestione quotidiana
- **Report**: il file `report.csv` sul server tiene inviati/saltati/errori per
  giorno.
- **Pausa al volo**: `touch pausa` mette in pausa; `rm pausa` riprende.
- **Non ricontattare**: aggiungi numeri in `blocklist.txt` (uno per riga).
- **Aggiornare il codice**:
  ```bash
  cd ~/bot && git pull && npm install && pm2 restart bot-clienti
  ```

---

## 10) Costi (promemoria)
- **EC2 t3.small**: ~$15/mese → col credito **$100 ≈ 6 mesi gratis**.
- **Proxy IPRoyal ISP**: ~$2,40/mese per 1 IP.
- **SIM**: una tantum.
- Quando il credito AWS finisce, valuta **Oracle Cloud** (VM gratis per sempre).

---

## 11) Più numeri (dopo)
Per ora questa guida è per **1 numero**. Per il multi-numero servirà **1 istanza/
sessione e 1 proxy dedicato per ogni numero** (mai due numeri sullo stesso IP):
lo affrontiamo nella fase successiva.
