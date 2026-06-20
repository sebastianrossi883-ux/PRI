# COMPOSITION-SPEC — Reference #01 BEC Restaurant

> Valori VERI letti da `site/css/main.css` e `site/index.html`. Dove un valore
> non è certo è segnato `DA VERIFICARE`. Sistema rem su base **14px**
> (1rem = 14px), quindi i rem sono convertiti in px qui sotto.

## Sistema di griglia (responsive)
| Breakpoint | Colonne | Gutter | Margine laterale | Font base | Section padding |
|---|---|---|---|---|---|
| Mobile | **4** | 10px | 25px | 14px | 4.286rem = **60px** |
| Tablet | **14** | 1.5vw | 0 | 14px | 5.714rem = **80px** |
| Desktop | 14 | 1.5vw | 0 | 16px | 7.143rem = **100px** |

- `--container-width: calc(100vw - 2 * margine)`.
- Griglia desktop: `grid-template-columns: repeat(14, 1fr)`. **Non è una 12 col:
  è 14 colonne** → questo è parte dell'identità compositiva, va rispettato.

## Palette (reale, dal CSS)
| Ruolo | Valore | Note |
|---|---|---|
| Sfondo | `#FFFFFF` | base bianca, non crema |
| Ink / colore dominante | **`#003250`** | blu petrolio profondo (47 occorrenze) |
| Accento | **`#fabdb4`** | salmone caldo (sovratitoli, selezione testo) |
| Selezione testo | bg `#fabdb4`, testo bianco | |

> NB: la palette del reference (#003250 / #fabdb4 su bianco) **prevale** sui
> default generici di `AGENTS.md` (#ecebe8/#1c1b1a). Si clona questa.

## Tipografia
- **Display:** "PP Woodland" (serif). **Testo:** "Manrope" (sans).
- Scala (valori reali ×14px):

| rem | px | uso tipico |
|---|---|---|
| clamp(140px, 7.85svw+7.45svh, 220px) | 140–220 | **Hero H1** (fluido, enorme) |
| clamp(120px, 6.85svw+6.45svh, 200px) | 120–200 | Hero variante |
| 7.143rem | 100 | display grande |
| 6.786rem | 95 | display |
| 5.714rem | 80 | display |
| 4.286rem | 60 | h1/h2 |
| 3.571rem | 50 | h2 |
| 2.857rem | 40 | h3 |
| 2.143rem | 30 | h3/h4 |
| 1.714rem | 24 | sottotitolo |
| 1.429rem | 20 | testo grande |
| 1.286rem | 18 | testo |
| 0.857rem | 12 | caption / surtitle |

- **Sistema heading:** classe `c-heading` con modificatori `-h1 / -h2 / -h3 / -h4`.
- **Sovratitolo (`c-surtitle`):** `text-transform: uppercase`, colore `#fabdb4`,
  dimensione piccola (~12px). Compare con fade (opacity 0→1) ritardato.
- Display fluido in `svw/svh` solo per l'hero; il resto in rem (px).

## Scala di spaziatura (`--spacing-*`)
| token | mobile | desktop |
|---|---|---|
| xs | 10 | 10 |
| sm | 15 | 20 |
| md | 30 | 40 |
| lg | 60 | 80 |
| xl | 80 | 120 |

## Sezioni (ordine reale dall'HTML)
1. **`header.o-home-hero`** — hero a tutto schermo con carosello di sfondi
   (`o-home-hero_backgrounds_item`, stato `-active`), contenuto centrato
   (`o-home-hero_content_inner`: surtitle + H1 enorme + testo + nav).
   H1 in posizione assoluta, top `calc(20lvh + 30px + 12px)`.
2. **`section.o-section.m-text-center`** — intro editoriale centrata,
   `c-heading -h3`.
3. **`section.o-section.m-menus`** — lista menù (`m-menus_list_item_title`),
   trattamento editoriale a lista, non a card.
4. **`section.o-section.m-medias-text -multiple`** — blocco asimmetrico
   testo + immagini (il cuore editoriale). Dettagli reali:
   - `_inner`: flex, `align-items: flex-start`, `justify-content: space-between`,
     gap = gutter. Modificatori `-text-left` / `-text-right` alternano l'ordine
     (asimmetria **decisa dal markup**, non zigzag automatico).
   - Blocco immagini `_medias`: largo **5 colonne su 14** (≈36%) desktop,
     **6/14** sotto i 1199px; **`position: sticky; top: 12vh`** → le immagini
     restano ferme mentre il testo scorre. Immagini **portrait**,
     `aspect-ratio: 0.743`. Il testo occupa lo spazio restante.
   - Mobile (≤699px): blocco sticky nascosto, sostituito da slider orizzontale
     scroll-snap full-bleed (100vw, margini negativi).
5. **`section.o-section.m-media -centered`** — immagine dominante centrata.
   `min-height: 100lvh`, flex centrato. Render largo **6 colonne su 14**
   desktop (**8/14** ≤1199px, 100% mobile), `aspect-ratio: 1.323` (landscape).
   Variante `-full` = immagine assoluta a copertura totale.
6. **`section.o-section.m-newsletter`** + booking (`m-booking_content_title`).
7. **`footer.o-footer`** — con `footerMenu`.

## Note di fedeltà
- Lista (menù) trattata come **lista editoriale**, mai card.
- Hero NON è scroll-driven: è nativo, con reveal del testo (vedi animation-spec).
- Allineamenti su griglia a 14 colonne con margini laterali a 0 su desktop
  (immagini full-bleed possibili fino al bordo).
- **Firma compositiva:** colonna immagini stretta e **sticky** (5/14) accanto
  al testo che scorre, immagini portrait 0.743 → tensione editoriale verticale.
  La media centrata è invece landscape (1.323), 6/14: contrasto di proporzioni.
