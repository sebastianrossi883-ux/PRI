# STRATEGIA — Siti ristorante di qualità Michelin (clonazione fedele)

> **Regola zero, sopra ogni altra: la qualità è la cosa più importante.**
> Niente siti grezzi. Niente template generici. Solo fedeltà a Michelin reali.

---

## 1. Il principio che regge tutto

**L'IA non disegna MAI. L'IA clona uno dei siti Michelin scaricati.**

Il motivo per cui finora uscivano siti grezzi è uno solo: ogni volta che l'IA
*inventa* un layout, regredisce verso la sua media — e la sua media è il
template premium-generico. Non è un difetto risolvibile col prompt: è
matematico. Più invenzione = più grezzo.

La soluzione è togliere all'IA il permesso di inventare:

- La **qualità non viene generata dall'IA** → viene **ereditata** dal sito
  Michelin che si clona.
- L'IA non è la fonte della qualità. **Il sito reference è la fonte.** L'IA è
  solo il braccio che lo trascrive fedele.
- Finché l'IA *trascrive* invece di *inventare*, è impossibile che il
  risultato sia più grezzo della fonte.

**Corollario operativo:** dove l'IA dovrebbe inventare qualcosa, si FERMA e
chiede. Non riempie mai un vuoto con la sua media. È lì che nasce il grezzo.

---

## 2. Il capitale: 37 siti Michelin animati

I 37 siti scaricati (ristoranti Michelin, interattivi e animati) **sono il
vero valore.** Gli strumenti AI (Stitch, Hula, Jules, Antigravity, Codex)
sono manodopera: bravi ma sostituibili e smemorati. I 37 siti sono capitale:
roba che nessun altro ha.

Errore da non fare più: **tenere il capitale grezzo e far rilavorare la
manodopera da zero ogni volta.** Si trasforma il capitale grezzo (cartelle
disordinate) in **capitale lavorato** (blueprint puliti, riutilizzabili),
una volta sola.

### Cosa contiene un sito scaricato (verificato sul Reference #01, BEC)
- **Layout/composizione** → nel CSS, leggibile → numeri esatti estraibili
  (griglia, margini, proporzioni, tipografia). Fedeltà al pixel: facile.
- **Animazioni/interazioni** → nel JS. Se leggibile (come BEC: GSAP +
  ScrollTrigger + SplitText + Lenis, non minificato) → estraibili. Se
  minificato → si studia il *comportamento* e si riproduce pulito.

---

## 3. Clona INTERO, non mescolare (anti-Frankenstein)

Il vecchio metodo "Roulette" prendeva uno **scheletro** da un sito + una
**animazione random** da un Golden Pack separato e li **incollava**. Il
Frankenstein nasce esattamente lì: saldi un layout fatto da una persona con
un'animazione fatta da un'altra.

Con 37 siti già animati **non serve incollare niente.** Ogni sito è
un'unità coerente: **layout + le SUE animazioni native, progettati insieme**
dagli stessi designer. La coerenza è gratis.

→ **Massima qualità = clonare UN sito Michelin intero** (composizione + le sue
animazioni native), non mescolare pezzi di mondi diversi. La "Roulette" si fa
scegliendo *quale dei 37* clonare, non mescolando animazioni a caso.

### E la cartella ANIMAZIONI / Golden Pack?
I Golden Pack separati passano da protagonisti a **opzione di riserva.** Le
animazioni native del reference sono sempre la prima scelta (coerenti per
costruzione). Un Golden Pack si usa SOLO se vuoi un'interazione che il
reference non ha. In quel caso: si **sanitizza una volta** in un componente
vetted (CSS sandbox, rem→px, guidato da props) salvato in `/packs-vetted/`, e
si riusa da lì. **Mai re-estrarre lo stesso pack a ogni sito** — è la fonte #1
del Frankenstein.

---

## 4. Cosa si clona fresco e cosa si riusa

Distinzione fondamentale per non ricadere nel template:

| Elemento | Porta l'identità del design? | Regola |
|---|---|---|
| **Layout, composizione, asimmetria, proporzioni** | **SÌ — è l'anima** | **Clonato fresco dal reference, ogni volta, al pixel.** Mai una libreria di layout pre-fatti (sarebbe un nuovo template). |
| **Motore animazioni (logica GSAP) sanitizzato** | NO — invisibile come "stile" | Riusabile. Riusarlo NON rende generici, perché due layout diversi col solito scrub restano diversi. |
| **Guardrail anti-bug (CSS sandbox, z-index, overflow)** | NO | Riusabili. Riusarli ALZA la qualità (toglie i bug). |

**Riusare il motore e lo scudo non è "fare un template": è non ri-rompere
ogni volta lo stesso motore.** L'identità del design sta nel layout, e il
layout si clona daccapo.

---

## 5. Il workflow a due fasi con cancelli di qualità

```
══ UNA TANTUM, per ogni reference Michelin ══
  Si trasforma il sito scaricato in un BLUEPRINT fedele (vedi Fase A).
  37 reference → 37 blueprint riproducibili per sempre.

══ PER OGNI SITO NUOVO ══

FASE A — STUDIO FEDELE (un reference alla volta)
  L'agente legge HTML+CSS+JS del sito scaricato e produce, SENZA scrivere
  ancora codice del nuovo sito:
    • composition-spec.md  → numeri VERI letti dal CSS (griglia, proporzioni,
      spacing, tipografia, gerarchia)
    • animation-spec.md    → ogni animazione GSAP estratta dal JS (cosa,
      quando, easing, scrub, pin, clip-path)
  → Output e STOP.

CANCELLO 1 (Codex / utente)
  Si verifica che gli spec siano FEDELI, non un riassunto. Si bloccano.
  Da qui non si interpreta più: si esegue.

FASE B — COSTRUZIONE FEDELE
  L'agente ricostruisce il layout ESATTAMENTE dallo spec (clone fresco di
  QUESTA reference) + innesta le animazioni native + i guardrail.
  Contenuti del ristorante in italiano al posto dei testi originali.

CANCELLO 2 — QA (Codex)
  FATAL CHECK + confronto FIANCO A FIANCO con lo screenshot/originale.
  Proporzioni, spacing, animazioni. O combacia o si rifà il pezzo.
```

Il segreto della qualità è la **Fase A isolata**: quando lo studio è il
*solo* compito, la precisione non evapora nel sovraccarico cognitivo.

---

## 6. Assegnazione degli strumenti (ognuno sul suo punto di forza)

| Tool | Forza unica | Ruolo | NON fargli fare |
|---|---|---|---|
| **Antigravity** | Accede alle cartelle LOCALI del Mac (cartella 6) | **Costruttore primario** — l'unico che vede i siti scaricati dove stanno | inventare regole (sono in AGENTS.md) |
| **Codex** | Code review rigorosa | **Cancello QA** — approva spec, FATAL CHECK finale | costruire |
| **Jules** | Lavora sulla repo in background | **Operaio repo** — refinement incrementale, deploy | la build creativa iniziale (non vede il locale) |
| **Stitch / Hula** | Bozze statiche veloci | **Solo** esplorazione mood/varianti, opzionale | la fedeltà compositiva (la danno i reference) |

**Nota chiave:** Antigravity (locale) e Jules (repo) vivono in mondi diversi.
Per sfruttarli insieme, i blueprint lavorati devono stare **in entrambi**:
committati nella repo *e* sincronizzati nella cartella locale.

---

## 7. Regole come CODICE, non come prosa nel prompt

Ogni regola spostata da "prosa nel prompt" a "codice nella repo" è una regola
che **non potrà più essere violata** e che **svuota il prompt** (che oggi è
da 4000 parole → diventa ~12 righe). Vedi `AGENTS.md`. Esempi:

| Regola-prosa (vecchio prompt) | Guardrail-codice |
|---|---|
| "MAI overflow-hidden sul root" | ESLint rule che fallisce la build |
| "rem→px nei pack" | fatto una volta nel pack vetted + check CI |
| "wrappa il guest in section isolata" | esiste solo `<GuestWrapper>` |
| "z-index crescenti nei wipe" | componente `<WipeStack>` che li assegna da solo |
| palette / font / footer | `tailwind.config` + `globals.css` + `<Footer>` fisso |

---

## 8. Memoria su file (per la varietà reale)

L'IA è smemorata tra sessioni: la "Roulette" anti-ripetizione **non può
funzionare nel prompt**. La memoria sta in `USED_LOG.md`:
il prompt dice *"leggi USED_LOG, scegli un reference + un'architettura non
presenti nelle ultime 2-3 voci, poi aggiorna il log."* → varietà
deterministica e verificabile, non affidata alla finta-memoria dell'IA.

---

## 9. La qualità si MISURA, non si spera

Il sito finito si mette **fianco a fianco con la reference** e si confronta
oggettivamente: proporzioni, spacing, animazioni. Non è un'opinione
("mi sembra bello"): è un match col Michelin originale. **O combacia o non
passa.** Questo è il cancello che impedisce strutturalmente l'output grezzo.

---

## 10. Stato del materiale (aggiornare man mano)

- **Reference #01 — BEC Restaurant** ✅ in repo (`references/01-bec-restaurant/`).
  Stack verificato: GSAP + ScrollTrigger + SplitText + Lenis, **leggibile**.
  Tecniche native: clip-path reveal, immagini scale 1.15→1 in scrub.
  ⚠️ **Immagini:** il download ha preso solo 1 delle 90 immagini (le altre
  erano URL remoti). Da recuperare, o sostituire con le foto del ristorante
  mantenendo proporzioni e posizioni.
- Reference #02–#37 → da caricare e catalogare (vedi `references/INDICE.md`).

---

## 11. Priorità operativa (ROI decrescente)

1. **Blueprint del Reference #01** (composition-spec + animation-spec) → prova
   di fedeltà su materiale vero.
2. **AGENTS.md + guardrail** → toglie il 70% del prompt e i bug fatali.
3. **Catalogare i 37** in `INDICE.md` (indice rapido per scegliere il
   reference giusto per ogni ristorante).
4. **USED_LOG.md** attivo → varietà reale.
5. Costruire il primo sito ristorante clonando il #01.

---

### In una frase
**Non far disegnare l'IA. Clona uno dei 37 Michelin INTERO (layout dal CSS al
pixel + le sue animazioni native), riusa solo motore e scudo anti-bug, studia
in una fase dedicata e bloccata, e verifica fianco a fianco con l'originale.
La qualità si eredita dalla fonte, non si inventa.**
