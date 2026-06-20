import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

/*
  KINETIC IMAGE — tecnica-firma del Reference #01 (BEC).
  Immagine che parte a scale 1.15 con clip-path "chiuso" e si apre verso il
  basso scendendo a scale 1, in scrub sullo scroll.
  - overflow-hidden è SUL WRAPPER FIGLIO (consentito), MAI sul root.
  - invalidateOnRefresh: true (anti-stuttering, AGENTS.md).
  - useGSAP istanzia in modo sincrono (no leak in StrictMode).
*/
export default function KineticImage({ src, alt = '', aspect = 0.743, className = '' }) {
  const wrap = useRef(null)
  const img = useRef(null)

  useGSAP(
    () => {
      gsap.fromTo(
        img.current,
        { scale: 1.15, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' },
        {
          scale: 1,
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: wrap.current,
            start: 'top 85%',
            end: 'top 35%',
            scrub: true,
            invalidateOnRefresh: true,
          },
        },
      )
    },
    { scope: wrap },
  )

  return (
    <div
      ref={wrap}
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio: aspect }}
    >
      <img
        ref={img}
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  )
}
