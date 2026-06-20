# AGENTS.md — Regole per gli agenti (Antigravity / Jules / Codex)

> Leggi questo file PRIMA di ogni task. Queste regole valgono SEMPRE, così il
> prompt del singolo sito resta corto. La strategia completa è in `STRATEGIA.md`.

## Regola zero
**La qualità è la cosa più importante. L'IA non disegna mai: clona un
reference Michelin (`references/`).** La qualità si eredita dalla fonte.
Dove dovresti inventare → FERMATI e chiedi. Non riempire i vuoti con la media.

## Principio anti-grezzo
- Niente layout inventati, niente template "premium generico", niente card grid.
- Si clona INTERO un reference: layout + le sue animazioni native insieme.
- Il layout si clona FRESCO dai numeri veri del CSS del reference (al pixel).
- Si riusano solo: motore animazioni sanitizzato + guardrail anti-bug.

## Stack tecnico
```bash
npm install gsap @gsap/react framer-motion lenis tailwindcss @tailwindcss/vite lucide-react
```
- **GSAP** = scene cinematiche scroll-linked. **Framer Motion** = solo
  microinterazioni (bottoni, cursori magnetici). MAI Framer per scroll-linked
  (collide con ScrollTrigger + Lenis).

## Guardrail FATALI (violarli = build fallita)
1. **MAI `overflow-x-hidden`/`overflow-hidden` su `<App>` root, `<main>`,
   `<body>`.** Distrugge `pin: true` e `position: sticky`. È la causa #1 dei
   bug di animazione. Solo su child isolati se strettamente necessario.
2. **CSS quarantine:** mai importare CSS globali (`html`, `body`) dai pack.
   Sandbox con CSS Modules o wrapper class. Converti `rem`→`px` nei CSS estratti.
3. **GSAP pinning isolato:** ogni componente GSAP importato in
   `<section className="relative w-full z-20">`. Non avvolgerlo in
   `h-screen overflow-hidden` se usa sticky + scrub.
4. **Z-index dei wipe crescenti** (z-10, z-20, z-30...) verso il basso pagina,
   con background SOLIDI. La sezione che scorre sopra deve avere z-index più
   alto di quella pinnata.
5. **Anti context-leak (React 18 Strict Mode):** ScrollTrigger/GSAP dentro
   `useGSAP` istanziati SINCRONI. Mai dietro `await`. Preload immagini DOPO
   aver inizializzato GSAP.
6. **Asset pre-flight:** tutti gli `img src` puntano a asset locali esistenti.
7. **Pin di sezioni alte:** se la sezione pinnata è più alta di `100vh`, usa
   `start: 'bottom bottom'` (non `top top`), o il fondo viene tagliato prima
   del wipe.
8. **Anti-stuttering:** immagini in parallasse/scrub con
   `invalidateOnRefresh: true`.

## Micro-interazioni
Ogni elemento cliccabile/hoverable deve reagire (cursore magnetico, magnetic
button, transizione GSAP leggera). **Clona le micro-interazioni del reference**
se le ha (es. BEC ha un cursore custom). Usa Framer Motion solo qui, mai per
scroll-linked.

## Hero e Guest
- **Hero sempre nativo** (full screen + GSAP text reveal). MAI un componente
  scroll-driven (pin/scrub) come hero: rompe il flusso.
- Un eventuale componente "guest" va innestato nel corpo, isolato, mai pinnato
  sul genitore se ha scroll interno.

## Design (default, salvo che il reference dica altro)
- Base editoriale chiara `bg-[#ecebe8]` (alabastro caldo), testo `text-[#1c1b1a]`.
- Tipografia: serif display + sans. Coerenza tipografica rigorosa, Title Case.
- **No gigantismo brutalista:** scale raffinate, `font-light`, tracking
  negativo sui display, `tracking-[0.1em]` sui sovratitoli maiuscoletto.
- Spazi bianchi come architettura: ritmi drastici (`py-32`/`py-48`), padding
  laterale ampio. Allineamento rigoroso ad assi invisibili forti.
- Footer obbligatorio:
  `Sito realizzato da <a href="https://obsidiantech.it/" target="_blank" rel="noopener noreferrer">obsidiantech</a>`

## Lingua
Tutti i testi del sito finale in **italiano**.

## Flusso obbligatorio
1. Leggi `STRATEGIA.md` + questo file.
2. Leggi `USED_LOG.md`: scegli un reference / architettura diversi dalle
   ultime voci. Aggiornalo a fine build.
3. **Fase A** (studio fedele → spec) → STOP → attendi OK Codex.
4. **Fase B** (costruzione fedele dal blueprint).
5. QA fianco a fianco con l'originale.
