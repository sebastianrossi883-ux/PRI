# Porkot / Reference → Stitch (automatico su Oracle)

Programma che gira **in continuazione** e, per ogni "job" di materiale che gli
arriva (file `.md` con la descrizione dell'animazione + immagini `.jpg` di
reference), **genera automaticamente un prompt** e lo consegna a **Stitch**.

Pensato per essere caricato su una **VM Oracle Cloud** e girare 24/7 come
servizio.

---

## 🟢 È fattibile? Sì — con una precisazione importante su Stitch

- **Leggere il materiale da Google Drive** → fattibile (Google Drive API).
- **Generare il prompt** dai file `.md` + reference `.jpg` → fattibile, usando
  l'AI (Claude legge sia il testo che le immagini).
- **Girare 24/7 su Oracle Cloud** → fattibile (servizio `systemd`).
- **Andare sul sito di Stitch e incollare il prompt** → fattibile con
  **automazione del browser** (Playwright), perché **Google Stitch NON ha
  un'API pubblica ufficiale**. Il programma apre Stitch, carica le reference,
  scrive il prompt e invia. Modalità predefinita: **`browser`**.

⚠️ Due cose importanti sulla modalità browser:
1. **Login una volta a mano.** Stitch richiede l'accesso con Google. Fai il
   login una volta (`python -m src.login_stitch`): la sessione viene salvata e
   riusata, così poi il servizio gira da solo. Se il login scade, si rifà.
2. **I "selettori" dell'interfaccia** (dove scrivere/cliccare) possono cambiare
   quando Google aggiorna Stitch. Sono tutti in `config.yaml` sotto
   `stitch.browser`, così si correggono senza toccare il codice.

Altre modalità disponibili in `src/stitch_client.py`: `export` (salva solo il
prompt in `output/`, utile per provare) e `api` (se un giorno hai un endpoint
tuo).

---

## 📁 DOVE CARICO IL MATERIALE

Un "job" = **una cartella** che contiene:

- **un file `.md`** → la descrizione dell'animazione (il "porkot"/prompt di base)
- **una o più immagini `.jpg`** → le reference

Puoi caricare i job in due modi (si sceglie in `config.yaml`):

### 1) Cartella locale (più semplice per iniziare)
Metti ogni job in una sottocartella dentro `material/`:

```
material/
  intro_logo/
    animazione.md
    reference1.jpg
    reference2.jpg
  scena_finale/
    animazione.md
    reference.jpg
```

### 2) Google Drive (quello che hai chiesto tu)
Crei su Drive una cartella "Materiale Stitch" con dentro **una sottocartella per
ogni job** (stessa struttura: un `.md` + le `.jpg`). Il programma la controlla in
continuazione e scarica i job nuovi da solo.

> Il `.md` e le `.jpg` NON devono avere un formato speciale: scrivi
> nell'`.md` la descrizione dell'animazione con parole tue.

---

## ⚙️ Come funziona (in 4 passi)

1. **Sync** – controlla la sorgente (cartella locale o Google Drive) e trova job nuovi.
2. **Genera prompt** – Claude legge il testo `.md` + guarda le `.jpg` e scrive un
   prompt ottimizzato per Stitch (`src/prompt_builder.py`).
3. **Consegna** – manda il prompt a Stitch nella modalità scelta
   (`export` / `browser` / `api`).
4. **Segna come fatto** – salva lo stato in `state.json` per non rifare lo stesso
   job due volte. Poi aspetta e ricomincia.

---

## 🚀 Avvio rapido (sul tuo PC per provare)

```bash
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
python -m playwright install --with-deps chromium   # browser per Stitch
cp .env.example .env            # metti dentro la ANTHROPIC_API_KEY
cp config.example.yaml config.yaml

# Login a Stitch una volta (si apre il browser, tu accedi con Google):
#   in config.yaml metti stitch.browser.headless: false la prima volta
python -m src.login_stitch

# metti un job di prova dentro material/<nome_job>/ (un .md + una .jpg)
python -m src.main --once       # esegue un giro solo, per provare
python -m src.main              # gira in continuazione
```

Per provare la generazione del prompt SENZA browser, metti `stitch.mode: export`
in `config.yaml`: i prompt finiscono in `output/`.

---

## ☁️ Metterlo su Oracle Cloud (24/7)

Vedi **`deploy/oracle-setup.md`**: crei una VM gratuita Oracle, copi il progetto,
metti le chiavi e attivi il servizio `deploy/porkot.service`. Da lì gira da solo.

---

## 🔐 Chiavi e segreti

- `ANTHROPIC_API_KEY` → per far generare i prompt a Claude.
- (solo se usi Google Drive) un file credenziali del *service account* Google.

Vanno in `.env` / file locali che **non** finiscono su GitHub (vedi `.gitignore`).
Non mettere mai chiavi dentro i file `.md` o nel codice.
