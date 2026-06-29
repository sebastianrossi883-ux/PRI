import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

/*
  MANIFESTO — sezione PINNATA cinematografica: le righe di un grande
  statement salgono da una maschera in scrub mentre la sezione resta ferma.
  Pin con start top top (sezione = 100vh) → niente taglio.
*/
const LINES = ['Cuciniamo', 'ciò che la terra', 'ci concede.']

export default function Manifesto() {
  const scope = useRef(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scope.current,
          start: 'top top',
          end: '+=120%',
          scrub: true,
          pin: true,
          invalidateOnRefresh: true,
        },
      })
      tl.from('.mani-line', { yPercent: 110, stagger: 0.4, ease: 'none' })
        .to('.mani-sub', { opacity: 1, ease: 'none' }, 0.2)
    },
    { scope },
  )

  return (
    <section
      ref={scope}
      className="flex min-h-screen flex-col items-start justify-center bg-[color:var(--color-deep)] px-[6vw]"
    >
      <h2 className="font-display text-[clamp(40px,8vw,140px)] font-light leading-[0.95]">
        {LINES.map((l, i) => (
          <span key={i} className="line-mask">
            <span className="mani-line inline-block">{l}</span>
          </span>
        ))}
      </h2>
      <p className="mani-sub mt-10 max-w-[44ch] font-sans text-lg font-light leading-relaxed text-[color:var(--color-ink)]/60 opacity-0">
        Senza eccessi, senza maschere: solo materia, fuoco e tempo. Una cucina
        di radici, fatta di gesti antichi e di una precisione contemporanea.
      </p>
    </section>
  )
}
