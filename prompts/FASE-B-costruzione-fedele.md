# PROMPT — FASE B: Costruzione fedele del sito ristorante

Si usa SOLO dopo che gli spec della Fase A sono stati approvati (Cancello 1).

---

```
Leggi STRATEGIA.md e AGENTS.md. Regola zero: qualità massima, non si inventa.

CONTESTO:
  - Reference scelto: references/<NUMERO-nome>/
  - Spec già approvati: composition-spec.md + animation-spec.md
  - Ristorante: <NOME>, stile <es. trattoria toscana / fine dining milanese>

COMPITO: ricostruire il sito clonando FEDELMENTE il reference, e inserirci i
contenuti del ristorante in italiano.

1. Leggi USED_LOG.md. Conferma che questo reference/architettura non è nelle
   ultime 2-3 voci. A fine build aggiorna il log.

2. LAYOUT — clona ESATTAMENTE dal composition-spec:
   - Stessa griglia, stesse proporzioni, stesso spacing, stessa gerarchia
     tipografica, stessi allineamenti. Al pixel.
   - NON regolarizzare, NON centrare, NON semplificare, NON trasformare in
     card. Mantieni l'asimmetria e il ritmo esatti del reference.

3. ANIMAZIONI — riproduci dall'animation-spec:
   - Stesse tecniche native del reference (clip-path reveal, scale scrub,
     splitText, pin, Lenis). Easing e durate come da spec.
   - Rispetta i guardrail FATALI di AGENTS.md (overflow, z-index, sandbox CSS,
     useGSAP sincrono).

4. CONTENUTI:
   - Tutti i testi in italiano, coerenti col ristorante.
   - Immagini: usa le foto del ristorante AL POSTO di quelle originali,
     mantenendo le stesse proporzioni e posizioni del reference. Solo asset
     locali, mai placeholder remoti.

5. Dove il reference non copre un caso e dovresti inventare → FERMATI e chiedi.
   Non riempire con la tua media.

6. QA finale (Cancello 2): metti il risultato fianco a fianco con il reference
   originale e verifica proporzioni, spacing, animazioni. Riporta cosa combacia
   e cosa no. O combacia o si rifà il pezzo.
```
