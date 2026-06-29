import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

/*
  GALLERY ORIZZONTALE — il momento cinematografico: la sezione si pinna e i
  pannelli scorrono in orizzontale mentre scrolli in verticale.
  GUARDRAIL: overflow-hidden SOLO su questa sezione isolata, mai sul root.
*/
const PANELS = [
  { t: 'La materia', s: 'Ingredienti dell’orto, raccolti al mattino.' },
  { t: 'Il fuoco', s: 'Brace viva, cotture lente, niente fretta.' },
  { t: 'Il tempo', s: 'Lievitazioni di una notte, fondi di giorni.' },
  { t: 'La sala', s: 'Un’antica corte di pietra, sotto le travi.' },
]

export default function HorizontalGallery() {
  const scope = useRef(null)
  const track = useRef(null)

  useGSAP(
    () => {
      const panels = gsap.utils.toArray('.h-panel')
      gsap.to(track.current, {
        xPercent: -100 * (panels.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: scope.current,
          start: 'top top',
          end: () => '+=' + track.current.scrollWidth,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      })
    },
    { scope },
  )

  return (
    <section ref={scope} className="relative h-screen overflow-hidden bg-[color:var(--color-base)]">
      <div ref={track} className="flex h-full w-max">
        {PANELS.map((p, i) => (
          <article
            key={i}
            className="relative flex h-screen w-screen shrink-0 items-end overflow-hidden p-[6vw]"
          >
            <img src="/images/hero.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0b0a] via-[#0c0b0a]/30 to-transparent" />
            <div className="relative z-10">
              <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-[color:var(--color-accent)]">
                0{i + 1}
              </p>
              <h3 className="font-display mt-3 text-[clamp(40px,6vw,96px)] font-light leading-none">
                {p.t}
              </h3>
              <p className="mt-4 max-w-[32ch] font-sans text-base font-light text-[color:var(--color-ink)]/70">
                {p.s}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
