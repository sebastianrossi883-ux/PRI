import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/*
  Engine smooth scroll: Lenis sincronizzato con GSAP ScrollTrigger.
  Replica la base del Reference #01 (Lenis lerp 0.1, smoothWheel).
  Integrazione corretta: un solo ticker GSAP guida Lenis, e Lenis aggiorna
  ScrollTrigger. NON mettere overflow-hidden sui wrapper (AGENTS.md).
*/
export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true })

    lenis.on('scroll', ScrollTrigger.update)

    const raf = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(raf)
      lenis.destroy()
    }
  }, [])

  return children
}
