# PROMPT — FASE A (da SCREENSHOT): composition-draft

Per le 300 reference che sono solo immagini (niente codice). Una alla volta.

---

```
Leggi STRATEGIA.md e AGENTS.md. Regola zero: qualità massima, non si inventa
l'estetica — si ricostruisce la composizione vista nell'immagine.

COMPITO: dallo screenshot in references/screens/<file> produci un
composition-draft.md. Lo screenshot NON ha codice: leggi la COMPOSIZIONE, non
i pixel esatti. Misura le proporzioni RELATIVE dall'immagine (in %, non in px).

Annota, sezione per sezione (dall'alto in basso):
1. Tipo di sezione e topologia (hero full-bleed / cluster sparsi / colonna
   editoriale / immagine dominante / griglia asimmetrica...).
2. Rapporti relativi: testo vs immagine (es. ~30/70), quante immagini, le loro
   dimensioni relative, allineamenti, sovrapposizioni.
3. Ritmo: alternanza largo/stretto, densità, whitespace.
4. Palette e mood (caldo/freddo, chiaro/scuro, accenti).
5. Gerarchia tipografica APPARENTE (display enorme? sovratitoli piccoli?).
6. Eventuali interazioni intuibili (parallasse, reveal) — da realizzare con
   l'engine esistente, NON copiate.

REGOLE:
- Proporzioni in percentuale/frazioni di colonna, mai px inventati.
- Dove un dettaglio non è leggibile (testo piccolo, micro-spaziatura) scrivi
  "non leggibile a questa risoluzione" — non inventare.
- Output: references/screens/<nome>.draft.md. Niente codice. STOP.
```

---

**Nota:** il composition-draft è meno preciso del composition-spec da codice
(per definizione: è un'immagine). La qualità del sito finale viene dall'**engine
collaudato** + i **componenti vetted**, non dal copiare numeri. Lo screenshot dà
la *composizione*; l'engine dà il *livello*.
