# ANIMATION-SPEC — Reference #01 BEC Restaurant

> Estratto da `site/js/app.js` (8489 righe, leggibile, non minificato).
> Stack: **GSAP + Lenis + SplitText custom**. Architettura **a moduli**: ogni
> sezione è una classe JS con una `timeline` GSAP in pausa, pilotata dallo
> scroll tramite eventi di progress custom.

## Smooth scroll — Lenis
- `new Lenis({ smoothWheel: true, lerp: 0.1, orientation: "vertical",
  easing: t => Math.min(1, 1.001 - 2^(-10*t)) })` (valori di default reali).
- È la base di tutto lo scroll: va inizializzato per primo.

## Pattern architetturale (importante per la fedeltà)
BEC **non** usa `ScrollTrigger { scrub }` ovunque. Usa un sistema proprio:
ogni modulo crea `gsap.timeline({ paused: true })`, e un listener su eventi
`...Progress` mappa il progresso scroll sulla timeline con `tl.progress(p)`.
→ In rebuild: equivalente usare `ScrollTrigger` con `scrub` che pilota la
stessa timeline. Il risultato visivo è identico; conta riprodurre i keyframe.

## Tecniche per tipo di elemento

### Immagini (modulo Services) — reveal scale + clip-path
```
fromTo(".m-services_backgrounds_item",
  { scale: 1.15, clipPath: "polygon(0 0,100% 0,100% 0,0 0)" },
  { scale: 1,    clipPath: "polygon(0 0,100% 0,100% 100%,0 100%)",
    duration: 0.8, ease: "power2.inOut",
    stagger: { each: 0.6, from: "start" } })
```
- Immagine parte a **scale 1.15** e clip "chiuso" in alto → scende a scale 1
  con clip che si apre verso il basso. Stagger 0.6 tra immagini.
- Maschera aggiuntiva: `.m-services_backgrounds` da `inset(0 0 0 0)` a
  `inset(15% 35% 15% 35%)` (desktop) / `inset(15% 15% 15% 15%)` (mobile),
  `duration 0.6, ease power2.out`.

### Testo a comparsa (moduli Services / Story)
- **Story:** testo splittato in `.word`; reveal parola-per-parola
  `{ opacity: 1, duration: 0.8, ease: "none", stagger: 0.1 }`, pilotato dal
  progress di scroll (`storyContentProgress`).
- **Services:** righe di testo `.m-services_intro_item` da `y: 100%` a `y: 0`,
  `duration 0.4, ease power2.out, stagger 0.35` (reveal a tendina dal basso).
- **Surtitle:** `opacity 0→1, duration 0.2, ease none`, leggermente ritardato.

### SplitText (custom, non il plugin a pagamento)
- Implementazione propria che splitta in **parole / righe / caratteri**
  (gestisce `types.words`, `types.lines`, wrapping per riga). Usata per i
  reveal stagger dei titoli e dei paragrafi.

### Hero (modulo Home)
- Hero **nativo, non scroll-driven**. Sequenza all'avvio (`.-animated`):
  surtitle fade-in (delay 0.2s), H1 reveal, carosello di sfondi con stato
  `-active`. (`DA VERIFICARE` i keyframe esatti dell'H1: leggere
  `.o-home-hero.-animated ... h1` in main.css ~riga 2669.)

## Easing e durate ricorrenti
- Easing: **`power2.inOut`** (immagini), **`power2.out`** (testi a tendina),
  **`none`** (fade lineari di opacità), `expo.inOut` (transizioni di pagina).
- Durate: 0.2s (fade piccoli) · 0.4s (testi y) · 0.6–0.8s (immagini/clip).
- Stagger: 0.1 (parole) · 0.35 (righe) · 0.6 (immagini).

## Regole di rebuild (da AGENTS.md)
- Timeline pilotate da scroll → ScrollTrigger scrub o sistema a progress.
- `invalidateOnRefresh: true` sulle immagini in scrub.
- Niente `overflow-hidden` sui wrapper root; isolare i moduli pinnati.
- Riprodurre i KEYFRAME qui sopra, non reinterpretarli.
