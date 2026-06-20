import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

/*
  HERO — nativo, a tutto schermo (clone della o-home-hero del BEC).
  Movimento d'ingresso fedele allo spec: H1 sale dal basso e scala,
  transition 1.4s cubic-bezier(0.19,1,0.22,1); surtitle e testo in fade ritardato.
  Mai scroll-driven: è una hero nativa.
*/
export default function Hero() {
  const scope = useRef(null)

  useGSAP(
    () => {
      const ease = 'expo.out' // ~cubic-bezier(0.19,1,0.22,1)
      gsap.from('.hero-h1', {
        yPercent: 60,
        scale: 1.12,
        opacity: 0,
        duration: 1.4,
        ease,
      })
      gsap.from('.hero-fade', {
        opacity: 0,
        y: 16,
        duration: 0.8,
        stagger: 0.15,
        delay: 0.4,
        ease: 'power2.out',
      })
      gsap.fromTo(
        '.hero-bg',
        { scale: 1.15 },
        { scale: 1, duration: 2, ease: 'power2.out' },
      )
    },
    { scope },
  )

  return (
    <header
      ref={scope}
      className="relative flex min-h-screen flex-col justify-end overflow-hidden px-[8vw] pb-[12vh]"
    >
      {/* sfondo (overflow-hidden è SUL figlio, consentito) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpg"
          alt=""
          className="hero-bg h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#003250]/45" />
      </div>

      <div className="relative z-10">
      <p className="hero-fade font-sans text-[11px] uppercase tracking-[0.25em] text-[color:var(--color-accent)]">
        Cucina italiana contemporanea — dal 1987
      </p>
      <h1 className="hero-h1 font-display mt-4 text-[clamp(72px,16vw,220px)] font-light leading-[0.92] text-white">
        Radici
      </h1>
      <p className="hero-fade mt-6 max-w-[34ch] font-sans text-base font-light leading-relaxed text-white/85">
        Una tavola che racconta la terra, le stagioni e la memoria. Nel cuore
        delle colline, dove ogni piatto ha una radice.
      </p>
      </div>
    </header>
  )
}
