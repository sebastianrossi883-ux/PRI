# STRATEGIA MASTER — Siti ristorante di livello Michelin

> **Regola zero, sopra ogni altra: la qualità è la cosa più importante.**
> Niente siti grezzi. Niente template generici. Pari livello ai Michelin reali.

Documento unico e completo. Per le regole tecniche operative vedi `AGENTS.md`;
per i prompt vedi `prompts/`.

## Indice
1. Il principio che regge tutto
2. Copia o arte? (strato invisibile/visibile, 4 livelli, manopole)
3. Il capitale: i tuoi asset e i loro ruoli
4. Clona intero vs ricombina
5. Cosa si clona fresco e cosa si riusa
6. Il modello a ricombinazione (il lavoro vero)
7. Il workflow completo (fasi + cancelli)
8. Assegnazione degli strumenti
9. Regole come codice (anti-bug)
10. Memoria su file (varietà)
11. Architettura della repo
12. Stato attuale (cosa è già fatto)
13. Priorità e percorso
14. Le frasi chiave

---

## 1. Il principio che regge tutto

**L'IA non disegna MAI.** Ogni volta che inventa un layout regredisce verso la
sua media — e la sua media è il template premium-generico. È matematico: più
invenzione = più grezzo.

Quindi le si toglie il permesso di inventare:
- La qualità **non è generata** dall'IA: è **ereditata** dalle fonti (siti
  Michelin, componenti vetted).
- L'IA è il **braccio** che trascrive/compone pezzi di alto livello, non la testa.
- **Corollario:** dove dovrebbe inventare, l'IA si FERMA e chiede. Non riempie
  mai un vuoto con la sua media — è lì che nasce il grezzo.

---

## 2. Copia o arte? — "saranno copie esatte?" NO

### Strato invisibile vs strato visibile
- **Invisibile (si clona/condivide):** griglia, proporzioni, ritmo, asimmetria,
  *tecniche* di animazione. È il DNA compositivo, l'intelligenza del design.
- **Visibile (si sostituisce al 100%):** foto, testi, colori, font, nome, piatti.
  È l'identità, e diventa quella del ristorante.

→ Il risultato ha lo scheletro geniale ma un **aspetto completamente diverso**.
Si copia il **mestiere** Michelin, non l'aspetto (come un musicista che impara
gli accordi di un capolavoro e scrive una SUA canzone).

### I 4 livelli di originalità
- **L1 — Copia esatta.** Cloni un sito, cambi i testi. Qualità garantita ma copia.
  Il pavimento / la prova.
- **L2 — Copia rivestita.** Reference diverso per ogni cliente + sue foto/colori/font.
  Sweet spot commerciale: per il cliente è su misura.
- **L3 — ARTE: ricombinazione diretta da te.** Backbone da A + sezione da B +
  componente da C + identità del ristorante. Mai esistito, fatto al 100% di
  materiale altissimo. **Il lavoro vero.**
- **L4 — LA TRAPPOLA.** "IA, fai qualcosa di artistico" + libertà → grezzo. Vietato.

**Regola d'oro:** la differenza tra Frankenstein (L4) e arte (L3) non è
*combinare*, è **chi dirige**. IA alla cieca → grezzo. Utente che dirige + IA
che esegue con pezzi blindati → arte. **Il soffitto di qualità è il tuo gusto,
non l'immaginazione dell'IA.**

### Le manopole dell'originalità (le decidi tu)
| Manopola | Effetto |
|---|---|
| Contenuti (sempre) | testi/piatti propri |
| **Fotografia (sempre)** | driver visivo #1: cambia le foto → sembra un altro sito |
| Palette (opz.) | cambio colori → irriconoscibile |
| Font (opz.) | cambio famiglie → altro carattere |
| N. di fonti | 1 = vicino a copia · più fonti = originale (L3) |

---

## 3. Il capitale: i tuoi asset e i loro ruoli

Gli strumenti AI sono **manodopera** (bravi, sostituibili, smemorati). I tuoi
asset sono **capitale**. La strategia ruota attorno a una mossa: trasformare il
capitale grezzo (cartelle locali) in **capitale lavorato** (libreria pulita,
riusabile), una volta sola — non far rilavorare la manodopera da zero ogni volta.

| Classe | Cosa sono | Ruolo | Fedeltà |
|---|---|---|---|
| **37 siti** (codice) | HTML/CSS/JS veri | donatori di **engine, backbone, animazioni** | clone-grade (pixel dal CSS) |
| **300 screenshot** | solo immagini | **libreria della varietà** (300 composizioni) | composition-grade (ricostruiti) |
| **50 componenti + Framer/GSAP** | codice cinetico | **cassetta attrezzi condivisa** (neutra) | vetted 1 volta, riusati sempre |

**Normalizza ogni asset UNA volta sola.** L'errore più costoso è ri-estrarre/
ri-sanitizzare lo stesso pezzo a ogni sito (ri-introduce gli stessi bug =
Frankenstein intermittente). Si lavora una volta → si riusa per sempre.

---

## 4. Clona intero vs ricombina (anti-Frankenstein)

Il vecchio metodo "Roulette" incollava uno scheletro + un'animazione random:
il Frankenstein nasce lì (saldare pezzi di mondi diversi).

- **Clone (L1):** cloni UN sito Michelin **intero** — layout + le SUE animazioni
  native insieme. La coerenza è gratis perché l'hanno progettata gli stessi
  designer. È la prova / il pavimento.
- **Ricombinazione (L3):** componi pezzi da fonti diverse, ma **sotto regia** e
  con **componenti vetted** → coerenza data dalla cassetta attrezzi + dalla
  ricetta approvata, non dal caso.

---

## 5. Cosa si clona fresco e cosa si riusa

| Elemento | Identità del design? | Regola |
|---|---|---|
| Layout, composizione, asimmetria, proporzioni | **SÌ (l'anima)** | clonato/ricostruito fresco dalla fonte, ogni volta. Mai una libreria di layout pre-fatti (sarebbe un template). |
| Motore animazioni (logica GSAP/Framer) sanitizzato | NO (invisibile) | **riusabile.** Riusarlo non rende generici. |
| Guardrail anti-bug (CSS sandbox, z-index, overflow) | NO | **riusabili.** Riusarli alza la qualità. |

Riusare engine + scudo **non è fare un template**: è non ri-rompere ogni volta
lo stesso motore. L'identità sta nel layout, e il layout si fa fresco.

---

## 6. Il modello a ricombinazione (il lavoro vero)

Non si clona un sito: si **compone** da una libreria.
```
Backbone / engine       ← da uno dei 37 siti (codice)
Composizione sezioni    ← da uno o più dei 300 screenshot (misurati)
Componenti cinetici     ← dai 50 componenti / vetted (per nome)
Animazioni              ← dalle librerie Framer / GSAP (per nome)
Palette + font + foto   ← identità del RISTORANTE (diversa dalle fonti)
```
Il risultato **non somiglia a nessuna singola fonte** (viene da molte) →
**stesso livello, zero somiglianza**. Gli screenshot sono il motore della
varietà: 300 composizioni = 300 scheletri → varietà quasi infinita.

---

## 7. Il workflow completo (fasi + cancelli)

```
UNA TANTUM — capitale → capitale lavorato
  • normalizza i 50 componenti + animazioni in componenti VETTED
  • estrai blueprint dai 37 siti (composition-spec + animation-spec)
  • indicizza i 300 screenshot (composition-draft on demand)

PER OGNI SITO

  FASE A — STUDIO FEDELE (no codice del sito)
    • da SITO:       prompts/FASE-A-studio-fedele.md  → numeri esatti dal CSS
    • da SCREENSHOT: prompts/FASE-A-screenshot.md     → composizione dall'immagine
    • RICOMBINAZIONE: prompts/RICOMBINAZIONE-livello3.md → la RICETTA (mix di fonti)

  ── CANCELLO 1 (Codex / utente): si verifica/approva lo spec o la ricetta.
     Da qui non si interpreta più: si esegue. ──

  FASE B — COSTRUZIONE
    • clona/ricostruisce il layout dallo spec/ricetta
    • usa i componenti VETTED per le animazioni (non riscrive motori)
    • applica l'identità del ristorante (token), copy in italiano, asset locali

  ── CANCELLO 2 — QA (Codex): FATAL CHECK + confronto fianco a fianco.
     Clone: deve combaciare con l'originale.
     Ricombinazione: NON deve somigliare a nessuna singola fonte. ──

  • aggiorna USED_LOG.md
```
Il segreto della qualità è la **Fase A isolata**: quando lo studio è il solo
compito, la precisione non evapora nel sovraccarico.

---

## 8. Assegnazione degli strumenti

| Tool | Forza unica | Ruolo | NON fargli fare |
|---|---|---|---|
| **Antigravity** | accede alle cartelle LOCALI del Mac | **costruttore primario** (vede siti+screen+componenti) | inventare regole (sono in AGENTS.md) |
| **Codex** | code review rigorosa | **cancello QA** (approva spec/ricetta, FATAL CHECK) | costruire |
| **Jules** | lavora sulla repo in background | **operaio repo** (normalizza vetted, refinement, deploy) | la build creativa iniziale (non vede il locale) |
| **Stitch / Hula** | bozze statiche veloci | **solo** esplorazione mood/varianti, opzionale | la fedeltà compositiva |

Antigravity (locale) e Jules (repo) vivono in mondi diversi: i blueprint e i
componenti vetted devono stare **in entrambi** (committati + sincronizzati).

---

## 9. Regole come codice (anti-bug)

Ogni regola spostata da "prosa nel prompt" a "codice nella repo" non può più
essere violata e svuota il prompt (da 4000 parole → ~12 righe). Vedi `AGENTS.md`
e `app/`:
- ESLint + `app/scripts/check-guardrails.mjs` → fallisce la build se trova
  `overflow-hidden` su root/main/html/body (bug #1 delle animazioni).
- `<GuestWrapper>` → unico modo isolato per innestare un pack.
- `<WipeStack>` → z-index crescenti automatici.
- `<Footer>` → firma obsidiantech fissa.
- token in `app/src/index.css` (`@theme`) → palette/font, override per fonte.
- pin `start:'bottom bottom'` per sezioni >100vh · `invalidateOnRefresh:true`.

---

## 10. Memoria su file (varietà reale)

L'IA è smemorata tra sessioni: la "Roulette" anti-ripetizione **non può vivere
nel prompt**. La memoria sta in `USED_LOG.md`: l'agente lo legge prima
(sceglie fonti/architetture diverse dalle ultime voci) e lo aggiorna dopo →
varietà deterministica e verificabile.

---

## 11. Architettura della repo

```
STRATEGIA.md           ← questo documento (fonte di verità)
AGENTS.md              ← regole operative per gli agenti
USED_LOG.md            ← memoria anti-ripetizione
prompts/               ← FASE-A (codice), FASE-A (screenshot), FASE-B, RICOMBINAZIONE
references/sites/      ← i 37 siti scaricati (codice) + blueprint (spec)
references/screens/    ← i 300 screenshot + composition-draft + INDICE
components/            ← i 50 componenti (da normalizzare in vetted)
animations/            ← librerie Framer + GSAP
app/                   ← progetto React+Vite+Tailwind: engine + vetted + sito corrente
```

---

## 12. Stato attuale (cosa è già fatto)

- ✅ **Strategia + AGENTS.md + prompt** scritti nella repo.
- ✅ **Reference #01 (BEC)** caricato + **blueprint completo**
  (`composition-spec.md` + `animation-spec.md`): griglia 14 col, palette
  #003250/#fabdb4, font PP Woodland+Manrope, sticky asimmetrico, keyframe hero.
- ✅ **Scaffolding `app/`**: engine GSAP+Lenis, componenti vetted
  (KineticImage, RevealText, GuestWrapper, WipeStack, Footer), guardrail come
  codice **testati**.
- ✅ **Fase B dimostrata**: sito *Radici* clonato dal BEC, **build verificata**
  (`npm run build` OK). Identità placeholder, da sostituire.
- ⏳ Da fare: caricare i 37 siti + 300 screen + 50 componenti; normalizzare i
  vetted; primo sito **ricombinato** (L3); verifica visiva; deploy.

---

## 13. Priorità e percorso

1. **Caricare gli asset** nella repo (siti, screen, componenti, animazioni):
   senza, l'agente vede solo il BEC. È lo sblocco #1.
2. **Normalizzare** 5-10 componenti/animazioni in vetted (una tantum).
3. **Indicizzare** i 300 screen (INDICE) per scegliere le composizioni.
4. **Primo sito ricombinato** (L3) → la prova del "pari livello ma diverso".
5. Verifica visiva fianco a fianco + deploy.

**Il percorso conta:** prima il clone (L1-2) per padroneggiare le fonti, POI la
ricombinazione (L3). Chi salta all'arte senza incassare i mattoni ricade nel
Frankenstein (L4).

---

## 14. Le frasi chiave

**Clone:** non far disegnare l'IA — clona un Michelin intero (layout dal CSS +
animazioni native), riusa solo motore e scudo, studia in fase isolata e bloccata,
verifica fianco a fianco. La qualità si eredita dalla fonte.

**Ricombinazione (il lavoro vero):** non clonare un sito — COMPONI da una
libreria. Backbone da un sito, composizione da uno screen, pezzi dai componenti,
animazioni dalle librerie, identità dal ristorante, sotto la TUA regia con la
ricetta approvata prima del codice. **Stesso livello Michelin, uguale a nessun
originale. La qualità viene dalla cassetta attrezzi; l'originalità dal mix; la
coerenza dalla regia.**
