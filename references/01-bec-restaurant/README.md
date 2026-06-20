# Reference #01 — BEC Restaurant (Paradou)

Sito Michelin scaricato (via saveweb2zip da www.bec-restaurant.com).
Primo reference vero del sistema. Vedi `STRATEGIA.md`.

## Cosa c'è in `site/`
- `index.html` — struttura completa, sezioni semantiche pulite
  (`o-home-hero`, `m-text-center`, `m-menus`, `m-medias-text -multiple`,
  `m-media -centered`, `m-newsletter`, `o-footer`).
- `css/main.css` (135 KB) + `css/styles.css` — **layout leggibile**, numeri
  veri estraibili (griglia, proporzioni, spacing, tipografia).
- `js/app.js` (8489 righe, **non minificato → leggibile**) — animazioni.
- `fonts/` — webfont del sito.

## Stack animazioni (verificato)
- **GSAP** + **ScrollTrigger** + **SplitText** + **Lenis** (smooth scroll).
- Tecniche native: **clip-path reveal**, immagini **scale 1.15→1 in scrub**,
  SplitText per parole/righe/caratteri, easing `expo.inOut` / `power2.inOut`.

## ⚠️ Limite del download
L'HTML referenzia **90 immagini** ma il download ne ha salvata **solo 1**
(`images/144-hd-...jpg`); le altre erano URL remoti non scaricati.
Per un clone fedele: recuperare le immagini originali, oppure sostituirle con
le foto del ristorante mantenendo proporzioni e posizioni.

## Prossimo passo
Eseguire `prompts/FASE-A-studio-fedele.md` su questo reference per generare
`composition-spec.md` e `animation-spec.md`.
