# QA-CHECKLIST — Il cancello che rende la qualità MISURABILE

> Ogni sito passa di qui PRIMA di considerarsi finito. O passa tutti i punti
> applicabili, o si rifà il pezzo. "Michelin" non è un'opinione: è questo check.
> Strumenti: `npm run guardrails`, `npm run build`, `npm run shot` (screenshot).

## A. Tecnica (automatica — deve essere tutto ✅)
- [ ] `npm run guardrails` passa (niente overflow-hidden su root/main/html/body)
- [ ] `npm run build` passa senza errori
- [ ] Nessun errore in console del browser
- [ ] Nessuno scroll orizzontale indesiderato
- [ ] Le animazioni partono: reveal in scrub funzionano, niente vuoti bianchi
      (pin-spacer), niente stuttering
- [ ] Tutte le immagini caricano (asset locali, nessun 404)

## B. Fedeltà visiva — CLONE (confronto fianco-a-fianco con la reference)
Apri `qa/screenshots/site-1440.png` accanto allo screenshot della reference.
- [ ] Griglia / numero di colonne combaciano
- [ ] Proporzioni testo vs immagine combaciano (±5%)
- [ ] Ritmo dello spacing verticale tra sezioni combacia
- [ ] Gerarchia tipografica combacia (display enorme, sovratitoli piccoli)
- [ ] Asimmetria preservata (NON regolarizzato, NON trasformato in card)
- [ ] Blocchi sticky / full-bleed come nell'originale
- [ ] Stesse tecniche di animazione (clip reveal, scale-scrub) e timing simile
- [ ] Hero nativa con l'ingresso corretto (non un componente scroll-driven)
- [ ] Palette e font = quelli del reference (o override voluto e coerente)

## C. Originalità — RICOMBINAZIONE L3 (obiettivo opposto al clone)
- [ ] **NON somiglia a nessuna singola fonte** (viene da più fonti)
- [ ] Ogni sezione ha topologia DIVERSA (anti-zigzag)
- [ ] Palette / font / foto = identità del ristorante, distinta dalle fonti
- [ ] Le tecniche cinetiche vengono da componenti VETTED (non riscritte a mano)
- [ ] Il mix è coerente (regia), non casuale (Frankenstein)

## D. Asset (la metà della qualità Michelin)
- [ ] Foto PROFESSIONALI ad alta risoluzione (no placeholder ripetuti)
- [ ] Font licenziati veri (o sostituti free equivalenti, coerenti)
- [ ] Immagini ottimizzate (peso ragionevole)

## E. Contenuto
- [ ] Tutta la copy in italiano, coerente col ristorante
- [ ] Footer obsidiantech presente
- [ ] Dati reali (orari, indirizzo, contatti, menù)

## F. Cross-device
- [ ] `site-768.png` (tablet) regge
- [ ] `site-390.png` (mobile) regge — sticky → slider, niente rotture

---

### Esito
- **PASS** = tutti i punti applicabili ✅ → il sito è al livello, verificato.
- **FAIL su un punto** = si rifà QUEL pezzo e si ri-controlla. Non si "chiude
  lo stesso". È così che il livello diventa affidabile invece che sperato.
