import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import RevealText from '../components/RevealText.jsx'

gsap.registerPlugin(useGSAP, ScrollTrigger)

/*
  STORY — immagine FULL-BLEED con parallasse drammatica + testo sovrapposto.
  Sostituisce la colonna sticky minimal con un momento immersivo cinematografico.
*/
export default function Story() {
  const scope = useRef(null)

  useGSAP(
    () => {
      gsap.to('.story-img', {
        yPercent: 18,
        ease: 'none',
        scrollTrigger: { trigger: scope.current, start: 'top bottom', end: 'bottom top', scrub: true },
      })
    },
    { scope },
  )

  return (
    <section ref={scope} className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/images/hero.jpg" alt="" className="story-img h-[120%] w-full object-cover" />
        <div className="absolute inset-0 bg-[#0c0b0a]/65" />
      </div>

      <div className="relative z-10 max-w-[40ch] px-[6vw]">
        <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-[color:var(--color-accent)]">
          La nostra storia
        </p>
        <RevealText
          as="h3"
          className="font-display mt-6 text-[clamp(34px,5vw,80px)] font-light leading-[1.05]"
        >
          Tutto nasce da un orto e da una promessa.
        </RevealText>
        <p className="mt-8 font-sans text-lg font-light leading-relaxed text-[color:var(--color-ink)]/75">
          Da quasi quarant’anni la nostra famiglia coltiva un dialogo tra la
          cucina e la terra che la circonda. Le verdure arrivano dall’orto
          dietro la sala, il pane lievita di notte, e ogni stagione riscrive la
          carta da capo.
        </p>
        <p className="mt-8 font-display text-2xl font-light italic text-[color:var(--color-ink)]/80">
          — Famiglia Conti, dal 1987
        </p>
      </div>
    </section>
  )
}
