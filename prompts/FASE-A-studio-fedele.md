# PROMPT — FASE A: Studio fedele di un reference (NO codice del nuovo sito)

Incolla questo ad Antigravity (o Codex) puntando a UN solo reference per volta.

---

```
Leggi STRATEGIA.md e AGENTS.md. Regola zero: la qualità è la cosa più
importante, non si inventa nulla.

COMPITO: studiare in modo FEDELE il reference Michelin in:
  references/<NUMERO-nome>/site/
Devi SOLO estrarre, NON costruire ancora il nuovo sito. Niente codice React.

1. STRUTTURA
   - Leggi index.html. Elenca le sezioni reali nell'ordine esatto
     (header/hero, sezioni, footer) con le loro classi.

2. COMPOSITION-SPEC (numeri VERI dal CSS, non a occhio)
   - Apri css/main.css (e styles.css). Per ogni sezione estrai i valori reali:
     griglia (colonne), proporzioni testo/immagine, larghezze, margini,
     padding, spacing verticale tra sezioni, allineamenti, max-width dei
     blocchi di testo.
   - Estrai la gerarchia tipografica reale: font-family, dimensioni
     (con le unità reali), font-weight, letter-spacing, line-height,
     uppercase/Title Case dei titoli, sottotitoli, didascalie.
   - Scrivi tutto in references/<...>/composition-spec.md, valore per valore.
     Dove un numero non è leggibile, scrivi "DA VERIFICARE" — non inventarlo.

3. ANIMATION-SPEC (dal JS reale)
   - Apri js/app.js. È leggibile (non minificato). Trova le animazioni
     GSAP/ScrollTrigger/SplitText/Lenis. Per ognuna annota:
     • cosa anima (testo, immagine, sezione)
     • il trigger e quando parte
     • scrub o no, eventuale pin
     • la tecnica esatta (es. clip-path reveal, scale 1.15→1, splitText per
       righe/parole/caratteri), easing e durate
   - Scrivi tutto in references/<...>/animation-spec.md.

4. STOP. Non scrivere altro. Restituisci i due file e attendi l'OK
   (Cancello 1) prima di passare alla Fase B.
```

---

**Nota:** la Fase A va fatta UNA volta per reference. Il risultato (i due spec)
è il blueprint riutilizzabile per sempre. È qui che si cattura la qualità
Michelin senza diluirla.
