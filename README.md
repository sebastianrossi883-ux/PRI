# Bot messaggi clienti (WhatsApp)

Bot che invia messaggi a una lista di clienti su WhatsApp con **tempistiche
casuali** e simulazione dello stato **"sto scrivendo..."**, pensato per ridurre
il rischio di ban rispetto a un invio massivo istantaneo.

Basato sulla libreria [`@open-wa/wa-automate`](https://github.com/open-wa/wa-automate-nodejs)
(stessa famiglia della repo OpenWA che hai indicato).

## Cosa fa

- 📋 Invia a una **lista di clienti** presa da un file JSON.
- ⌨️ Mostra **"sto scrivendo..."** per qualche secondo prima di ogni messaggio
  (tempo proporzionale alla lunghezza del testo), e segna la chat come letta.
- ⏰ Parte **in automatico ogni giorno**, ma **non alla stessa ora**: parte a
  07:00 **+ un ritardo casuale tra 20 e 60 minuti** (quindi tra ~07:20 e ~08:00,
  diverso ogni giorno).
- 🎲 Invia fino a **40 messaggi al giorno** (configurabile) con un **tempo
  casuale tra un messaggio e l'altro** (di default 12–22 min). Se parti più
  tardi, finisci più tardi.
- 🔁 Ruota tra i clienti giorno dopo giorno e **ricorda lo stato** anche se lo
  riavvii (file `state.json`).
- 📝 Sceglie a caso tra più **template di messaggio** (con `{nome}` sostituito
  col nome del cliente) per non mandare sempre lo stesso testo identico.

## Due tempistiche diverse (importante)

Ci sono **due** valori casuali distinti, non confonderli:

1. **Ritardo di PARTENZA** (`avvioGiornaliero.ritardoMinMinuti` /
   `ritardoMaxMinuti`, default **20–60 min**): di quanto slitta l'orario di avvio
   rispetto a `oraInizio`. Con 07:00 + 20–60 min, ogni giorno parte tra le ~07:20
   e le ~08:00, mai alla stessa ora.

2. **Tempo TRA UN MESSAGGIO E L'ALTRO** (`invii.intervalloMinMinuti` /
   `intervalloMaxMinuti`, default **12–22 min**): la pausa casuale tra un invio e
   il successivo.

Con i default (40 messaggi, gap 12–22 min → media ~17 min) una giornata dura
**~8–13 ore**: partendo alle 07:40 finiresti indicativamente tra le 16:00 e le
21:00. **L'orario di fine galleggia**: se parti più tardi, finisci più tardi
(modalità `flexible`, quella di default).

Se preferisci che il bot si fermi comunque a `oraFine` (es. 20:00) anche senza
aver mandato tutti e 40, imposta `modalitaFinestra: "strict"`.

> Nota: se metti gap troppo grandi (es. 40–60 min) i 40 messaggi non entrano in
> una giornata (40 × 50 min ≈ 33 ore). In quel caso riduci `messaggiAlGiorno` o
> gli intervalli.

## Requisiti

- Node.js 18+ (testato su Node 22)
- Un numero WhatsApp da usare per l'invio (scansionerai un QR code al primo avvio)

## Installazione

```bash
npm install
```

## Configurazione

1. Copia i file di esempio e personalizzali:

   ```bash
   cp config.example.json config.json
   cp clients.example.json clients.json
   cp messages.example.json messages.json
   ```

2. **`clients.json`** — la tua lista clienti. Il `numero` va scritto in formato
   internazionale **senza `+` e senza spazi** (es. Italia: `39` + numero):

   ```json
   [
     { "nome": "Mario Rossi", "numero": "393401234567", "attivo": true },
     { "nome": "Giulia Bianchi", "numero": "393337654321", "attivo": true }
   ]
   ```

   Metti `"attivo": false` per saltare un cliente senza cancellarlo.

3. **`messages.json`** — i template dei messaggi. Il bot ne sceglie uno a caso
   a ogni invio, così il testo non è mai identico (più vario = più sicuro).

   Segnaposto disponibili:
   - `{nome}` → sostituito dal bot col nome dell'attività preso da `clients.json`.
   - `[TUO NOME]` e `[MOTIVO]` → **da personalizzare a mano tu**, una volta sola,
     dentro `messages.json` (il bot NON li sostituisce: sono lì perché tu ci
     metta il tuo nome e il motivo del contatto).

   I template di esempio sono in **registro formale** (dando del "Lei"/"voi"),
   pensati per rivolgersi ad **attività**, con apertura tipo *"Salve, parlo con
   {nome}?"*. Alcune varianti ti presentano come **studente**. Tutti hanno lo
   stesso significato, solo formulato in modo diverso. Modificali pure a piacere,
   mantenendo qualche variante per non essere ripetitivo.

4. **`config.json`** — orari, numero di messaggi al giorno, intervalli e opzioni
   anti-ban. Ogni campo è commentato in `config.example.json`.

## Uso

Avvio normale (resta attivo e gestisce ogni giorno da solo):

```bash
npm start
```

Al primo avvio compare un **QR code** nel terminale: aprilo su WhatsApp
(*Dispositivi collegati → Collega un dispositivo*). La sessione viene salvata in
`.wa-session/`, quindi le volte successive non serve riscansionare.

### Test senza inviare (consigliato la prima volta)

```bash
npm run dry-run
```

Simula tutto (scelta clienti, testo, tempi) **senza inviare nulla** e senza
nemmeno collegare WhatsApp. Utile per verificare la configurazione.

### Invio immediato di prova

```bash
npm run send-now
```

Ignora l'orario di avvio casuale e parte subito (accorcia anche le attese lunghe
per il test). Invia davvero, quindi usalo con pochi clienti di prova.

## Come tenerlo sempre attivo

Il processo deve restare in esecuzione perché lavora tutti i giorni. Su un
server puoi usare `pm2`:

```bash
npm install -g pm2
pm2 start src/index.js --name bot-clienti
pm2 save
pm2 startup   # per riavvio automatico al reboot
```

## Struttura del progetto

```
src/
  index.js      Punto di ingresso: carica tutto e avvia lo scheduler
  scheduler.js  Logica di orari casuali, finestra e intervalli tra messaggi
  sender.js     Invio del messaggio con "sto scrivendo..." e segna-come-letto
  state.js      Stato persistente (conteggio giornaliero, rotazione clienti)
  config.js     Caricamento config, clienti e messaggi
  utils.js      Funzioni di supporto (random, orari, ecc.)
  logger.js     Log con timestamp
config.example.json    Configurazione di esempio (commentata)
clients.example.json   Lista clienti di esempio
messages.example.json  Template messaggi di esempio
```

## Accorgimenti anti-ban inclusi

- **Warm-up progressivo** (`warmup` nel config) — *per numeri NUOVI*: non deve
  partire subito a 40 msg/giorno. Di default parte da **5** il primo giorno e
  cresce di **+5** ogni giorno attivo fino al massimo. È la misura più importante:
  disattivala (`"abilitato": false`) solo quando il numero è "caldo".
- **Variazione giornaliera** (`variazioneGiornaliera`) — *per numeri CONSOLIDATI*:
  invece di mandare sempre esattamente `messaggiAlGiorno`, ogni giorno il totale
  varia di un valore casuale in più o in meno (default ±5–10; es. base 40 →
  30–50). Attivala **al posto** del warm-up quando il numero è già rodato.
- **Verifica numero su WhatsApp** (`antiBan.verificaNumeroWhatsapp`): prima di
  inviare controlla che il numero esista su WhatsApp e, se non c'è, lo salta
  (inviare a numeri inesistenti aumenta il sospetto di spam).
- **Stop di sicurezza** (`antiBan.maxErroriConsecutivi`): dopo troppi errori di
  invio di fila il bot si ferma per la giornata (di solito è un problema di
  sessione: meglio fermarsi che insistere).
- **"Sto scrivendo…"**, segna-come-letto, orario di avvio casuale, intervalli
  casuali e 18 varianti di testo (vedi sopra).

> Nessuna di queste tecniche azzera il rischio. Contano ancora di più: usare un
> **numero secondario dedicato**, **WhatsApp Business**, **non inserire link**
> nei primi messaggi, **rispondere** a chi risponde, e scrivere **solo a chi può
> avere interesse** a essere contattato.

## Avvertenze

- Usa questo strumento solo per **contattare persone che hanno acconsentito** a
  ricevere tuoi messaggi. L'invio di messaggi non richiesti (spam) viola i
  Termini di Servizio di WhatsApp e può portare al **ban del numero**, a
  prescindere da questi accorgimenti anti-ban.
- L'automazione di WhatsApp non è ufficialmente supportata da Meta: nessuna
  tecnica azzera del tutto il rischio. Usa un numero secondario, parti con pochi
  clienti e aumenta gradualmente.
