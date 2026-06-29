import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

/*
  HERO cinematografico: immagine full-bleed con zoom lento, titolo enorme
  che sale lettera per lettera da una maschera, gradiente drammatico.
  Al scroll l'immagine fa parallasse e il titolo si stacca.
*/
const TITLE = 'Radici'.split('')

export default function Hero() {
  const scope = useRef(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } })
      tl.from('.hero-bg', { scale: 1.2, duration: 2.2, ease: 'power2.out' }, 0)
        .from('.hero-char', { yPercent: 120, duration: 1.3, stagger: 0.07 }, 0.3)
        .from('.hero-fade', { opacity: 0, y: 24, duration: 1, stagger: 0.12 }, 0.9)
        .from('.hero-cue', { opacity: 0, duration: 1 }, 1.4)

      // parallasse + dissolvenza al scroll
      gsap.to('.hero-bg', {
        yPercent: 22,
        ease: 'none',
        scrollTrigger: { trigger: scope.current, start: 'top top', end: 'bottom top', scrub: true },
      })
      gsap.to('.hero-inner', {
        yPercent: -18,
        opacity: 0.2,
        ease: 'none',
        scrollTrigger: { trigger: scope.current, start: 'top top', end: 'bottom top', scrub: true },
      })
    },
    { scope },
  )

  return (
    <header
      ref={scope}
      className="cine-grain relative flex min-h-screen flex-col justify-end overflow-hidden px-[6vw] pb-[10vh]"
    >
      <div className="absolute inset-0 z-0">
        <img src="/images/hero.jpg" alt="" className="hero-bg h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0b0a] via-[#0c0b0a]/40 to-[#0c0b0a]/30" />
      </div>

      <div className="hero-inner relative z-10">
        <p className="hero-fade font-sans text-[11px] uppercase tracking-[0.35em] text-[color:var(--color-accent)]">
          Cucina italiana contemporanea — dal 1987
        </p>
        <h1 className="font-display mt-3 flex font-light leading-[0.85] text-[color:var(--color-ink)] text-[clamp(96px,22vw,300px)]">
          {TITLE.map((c, i) => (
            <span key={i} className="line-mask">
              <span className="hero-char inline-block">{c}</span>
            </span>
          ))}
        </h1>
        <p className="hero-fade mt-8 max-w-[40ch] font-sans text-lg font-light leading-relaxed text-[color:var(--color-ink)]/75">
          Una tavola che racconta la terra, le stagioni e la memoria. Nel cuore
          delle colline, dove ogni piatto ha una radice.
        </p>
      </div>

      <div className="hero-cue absolute bottom-8 left-1/2 z-10 -translate-x-1/2 font-sans text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-ink)]/50">
        Scorri
      </div>
    </header>
  )
}
