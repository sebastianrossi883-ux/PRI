# app/ — Scaffolding del sito (Livello 1 della strategia)

Base React + Vite + Tailwind v4 con i guardrail anti-bug **incassati nel
codice**, l'engine GSAP + Lenis già corretto, e le tecniche-firma del
Reference #01 come componenti riusabili. Vedi `../STRATEGIA.md` e `../AGENTS.md`.

## Avvio
```bash
cd app
npm install
npm run dev          # sviluppo
npm run guardrails   # controlla i bug fatali (overflow su root, ecc.)
npm run build        # esegue i guardrail poi builda
```

## Cosa è già pronto (riusabile, NON porta identità di design)
| File | Ruolo |
|---|---|
| `src/lib/SmoothScroll.jsx` | Lenis + GSAP ScrollTrigger sincronizzati (lerp 0.1) |
| `src/components/KineticImage.jsx` | immagine scale 1.15→1 + clip-path in scrub (firma BEC) |
| `src/components/RevealText.jsx` | reveal testo parola-per-parola in scrub (firma BEC) |
| `src/components/GuestWrapper.jsx` | unico modo per innestare un Golden Pack, già isolato |
| `src/components/WipeStack.jsx` | z-index crescenti automatici per i wipe |
| `src/components/Footer.jsx` | footer obsidiantech fisso |
| `scripts/check-guardrails.mjs` | blocca la build se trova `overflow-hidden` su root/main |
| `src/index.css` | design token (`@theme`) — **da sovrascrivere per reference** |

## Cosa NON è qui (porta identità → si clona in Fase B)
- Il layout vero delle sezioni → dal `composition-spec` del reference scelto.
- Palette / font / spacing reali → si sostituiscono i token in `index.css`
  con quelli del reference (per il BEC: `#FFFFFF` / `#003250` / `#fabdb4`,
  PP Woodland + Manrope, section-padding 100px, griglia 14 col).

## Regola
`src/App.jsx` è solo una **demo dell'engine**, non il sito finale. In Fase B si
clonano le sezioni reali dal blueprint, mantenendo questi componenti come motore.
