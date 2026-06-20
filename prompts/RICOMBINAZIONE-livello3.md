# PROMPT — RICOMBINAZIONE (Livello 3): sito originale di pari livello

Il lavoro vero: comporre un sito originale da pezzi di provenienza diversa,
sotto la regia dell'utente. NON clonare un singolo sito. Vedi STRATEGIA.md §12.

## FASE 1 — LA RICETTA (testo, niente codice) → CANCELLO
```
Leggi STRATEGIA.md, AGENTS.md, USED_LOG.md.
Costruisci la RICETTA del sito per: <ristorante, stile>. Scegli i pezzi da
fonti DIVERSE (e diverse dalle ultime voci di USED_LOG):

- BACKBONE / engine     ← da quale dei 37 siti (codice). Es. #01 BEC.
- COMPOSIZIONE sezioni  ← da quali screenshot (references/screens). Mescola:
  almeno 2 topologie diverse tra loro (es. cluster sparsi + colonna sticky).
- COMPONENTI cinetici   ← quali dei 50 / componenti vetted (per nome).
- ANIMAZIONI            ← quali dalle librerie Framer/GSAP (per nome).
- IDENTITÀ              ← palette, font e mood del RISTORANTE (NON quelli di
  una singola fonte: scegli una direzione coerente, anche diversa dalle fonti).

Output: un WIREFRAME testuale a 6+ sezioni che dice, per ognuna, da quale fonte
viene la composizione e quale componente/animazione la anima.
Scrivi anche cosa garantisce che NON somigli a nessuna singola fonte.
STOP. Attendi l'approvazione (Cancello) prima di scrivere codice.
```

## FASE 2 — COSTRUZIONE (dopo approvazione)
```
Costruisci dal wireframe approvato, dentro app/:
- Backbone e proporzioni dalle fonti indicate (codice dal CSS; screen misurati).
- Usa i componenti VETTED esistenti per le tecniche (KineticImage, RevealText,
  GuestWrapper, WipeStack...). Non riscrivere motori a mano.
- Applica l'identità del ristorante (token in index.css), DIVERSA dalle fonti.
- Tutti i testi in italiano. Solo asset locali.
- Rispetta i guardrail FATALI (AGENTS.md). `npm run guardrails` deve passare.
- Ogni sezione ha topologia diversa (anti-zigzag): la varietà è garantita dal
  fatto che le composizioni vengono da screen diversi.
Aggiorna USED_LOG. QA: confronta che NON somigli a nessuna singola fonte.
```

## La regola d'oro
La ricombinazione è ARTE se la dirige l'utente (ricetta approvata), è
FRANKENSTEIN se la fa l'IA alla cieca. Il Cancello dopo la Fase 1 è obbligatorio.
La qualità viene dai pezzi vetted; l'originalità dal mix; la coerenza dalla regia.
