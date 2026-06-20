import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

/*
  REVEAL TEXT — tecnica-firma del Reference #01 (BEC, modulo Story).
  Il testo viene splittato in parole e rivelato parola-per-parola in scrub
  sullo scroll (opacity 0->1, stagger 0.1). NON un semplice fade del blocco.
  `as` = tag (h1/h2/p...). Passa la tipografia via className.
*/
export default function RevealText({ as: Tag = 'p', children, className = '' }) {
  const ref = useRef(null)

  const words = String(children).split(/(\s+)/)

  useGSAP(
    () => {
      gsap.fromTo(
        ref.current.querySelectorAll('.word'),
        { opacity: 0.12 },
        {
          opacity: 1,
          ease: 'none',
          stagger: 0.1,
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 80%',
            end: 'bottom 55%',
            scrub: true,
          },
        },
      )
    },
    { scope: ref },
  )

  return (
    <Tag ref={ref} className={className}>
      {words.map((w, i) =>
        /\s+/.test(w) ? (
          w
        ) : (
          <span key={i} className="word inline-block">
            {w}
          </span>
        ),
      )}
    </Tag>
  )
}
