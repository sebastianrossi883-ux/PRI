# Mettere il programma su Oracle Cloud (24/7)

Obiettivo: far girare il programma da solo, sempre, su una VM Oracle Cloud.
Il login a Stitch si fa **una volta sul tuo PC** e poi si copia sulla VM.

## 1) Crea la VM
- Oracle Cloud → Compute → Instance → crea una VM (va bene la "Always Free",
  Ubuntu). Salva la chiave SSH per collegarti.

## 2) Accedi alla VM e installa le basi
```bash
ssh ubuntu@IP_DELLA_VM
sudo apt update && sudo apt install -y python3-venv git
```

## 3) Copia il progetto e installa
```bash
git clone <URL_DEL_TUO_REPO> PRI    # oppure copia la cartella con scp
cd PRI
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
python -m playwright install --with-deps chromium
```

## 4) Configura chiavi e opzioni
```bash
cp .env.example .env          # incolla la ANTHROPIC_API_KEY
cp config.example.yaml config.yaml   # scegli sorgente (local/gdrive) e Stitch
```

## 5) Login a Stitch (una volta, dal TUO PC con schermo)
Sul tuo computer, con `headless: false`:
```bash
python -m src.login_stitch
```
Accedi a Stitch nel browser che si apre. Si crea la cartella `.stitch_profile/`.
Copiala sulla VM:
```bash
scp -r .stitch_profile ubuntu@IP_DELLA_VM:/home/ubuntu/PRI/
```
Sulla VM lascia `headless: true` in config.yaml.

> Nota: il login Google puo' scadere. Se un giorno Stitch chiede di riaccedere,
> rifai questo passo e ricopia `.stitch_profile/`.

## 6) Attiva il servizio (parte da solo e si riavvia)
```bash
sudo cp deploy/porkot.service /etc/systemd/system/porkot.service
# controlla i percorsi/utente dentro il file se non usi ubuntu + /home/ubuntu/PRI
sudo systemctl daemon-reload
sudo systemctl enable --now porkot
sudo systemctl status porkot        # deve risultare "active (running)"
journalctl -u porkot -f             # vedi i log in tempo reale
```

Fatto: da qui il programma gira in continuazione, prende il materiale nuovo,
genera il prompt e lo porta su Stitch.
