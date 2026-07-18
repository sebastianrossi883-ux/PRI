# Guida: bot su Oracle Cloud (VM gratis per sempre)

Oracle Cloud ha una VM **Always Free** (gratis per sempre). Qui il bot gira 24/7.
Serve comunque un **proxy** (IPRoyal ISP) perché l'IP di Oracle è da datacenter.

> Fai tutto da **computer** (Mac/PC): browser per la console, Terminale per l'SSH.

---

## FASE 1 — Account
1. Vai su **oracle.com/cloud/free** → **Start for free**.
2. Email + verifica, Paese **Italy**, dati personali.
3. Carta di verifica (Always Free **non addebita**).
4. Region: **Italy (Milan)** o **Germany (Frankfurt)**.
5. Attendi la mail "account pronto" → entra nella **Console** (cloud.oracle.com).

## FASE 2 — Crea la macchina (VM)
1. Menu ☰ in alto a sinistra → **Compute** → **Instances**.
2. **Create instance**.
3. **Name**: `bot-clienti`.
4. **Image and shape** → **Edit**:
   - **Image**: **Canonical Ubuntu 22.04** (o 24.04).
   - **Shape**: **Change shape** → **Specialty and previous generation** →
     **VM.Standard.E2.1.Micro** (Always Free, AMD, 1 GB). *(In alternativa ARM
     "VM.Standard.A1.Flex" se disponibile: più potente, ma a volte "out of capacity".)*
5. **Networking**: lascia i valori di default, ma assicurati che ci sia
   **"Assign a public IPv4 address" = Yes**.
6. **Add SSH keys** → scegli **Generate a key pair for me** → **Save private key**
   (scarica il file, es. `ssh-key-....key`) e anche **Save public key**.
7. **Create**. Aspetta che lo stato diventi **RUNNING** (verde).
8. Nella pagina dell'istanza copia il **Public IP address** (ti serve dopo).

## FASE 3 — Collegati via SSH (dal Terminale)
Sul Mac apri **Terminale** (Cmd+Spazio → "Terminale"). Sposta la chiave e collegati
(cambia il nome file con quello scaricato e IP_PUBBLICO con il tuo):
```bash
chmod 400 ~/Downloads/ssh-key-*.key
ssh -i ~/Downloads/ssh-key-*.key ubuntu@IP_PUBBLICO
```
La prima volta chiede "Are you sure...": scrivi **yes** e Invio. Sei nel server. 🎉

## FASE 4 — Installa il bot
Incolla tutto insieme e premi Invio:
```bash
sudo apt-get update -y
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs git
git clone -b claude/bot-messaggi-clienti-y3kwq0 https://github.com/sebastianrossi883-ux/pri.git bot
cd bot && npm install && cp config.example.json config.json
```

## FASE 5 — Configura
Apri il file: `nano config.json` e imposta (salva con Ctrl+O, Invio, Ctrl+X):
```json
"motore": "baileys",
"supabase": {
  "abilitato": true,
  "url": "https://zqoiudqsqxqatfsmzvze.supabase.co",
  "serviceKey": "SERVICE_ROLE_KEY_DA_SUPABASE"
},
"account": [
  { "id": "num1", "numero": "39IL_TUO_NUMERO", "proxyUrl": "http://utente:password@host:porta", "cartellaSessione": "./.baileys-num1" }
]
```
- **serviceKey**: Supabase → progetto → **Settings → API → service_role → Reveal**.
- **proxyUrl**: da IPRoyal (ISP static, Italia). Formato `http://utente:password@host:porta`.

## FASE 6 — Collega WhatsApp (QR)
```bash
node src/index.js
```
Appare il QR → telefono: WhatsApp → **Dispositivi collegati** → **Collega un
dispositivo** → inquadra. Quando leggi "Connessione aperta", premi **Ctrl+C**.

## FASE 7 — Tienilo acceso per sempre
```bash
sudo npm install -g pm2
pm2 start src/index.js --name bot-clienti && pm2 save
pm2 startup    # esegui il comando che stampa
```

---

## Gestione
- Log: `pm2 logs bot-clienti`
- Aggiornare: `cd ~/bot && git pull && npm install && pm2 restart bot-clienti`
- Rientrare nel server: ripeti il comando `ssh` della Fase 3.

## Costi
- **Oracle VM**: €0 (Always Free)
- **Proxy IPRoyal ISP**: ~$2,40/mese
- **Supabase + web**: €0
