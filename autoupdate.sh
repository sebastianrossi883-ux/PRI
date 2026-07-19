#!/bin/bash
# Auto-aggiornamento del bot.
# Se su GitHub c'e' codice nuovo, lo scarica e riavvia il bot da solo.
# Cosi' non devi piu' collegarti al server: gestisci tutto dal pannello.
# Viene eseguito da cron ogni pochi minuti.

cd "$(dirname "$0")" || exit 0

before=$(git rev-parse HEAD 2>/dev/null)
git pull -q 2>/dev/null
after=$(git rev-parse HEAD 2>/dev/null)

if [ "$before" != "$after" ]; then
  npm install --omit=dev >/dev/null 2>&1
  pm2 restart bot-clienti >/dev/null 2>&1
  echo "$(date) aggiornato: $before -> $after"
fi
