/*
  GUEST WRAPPER — l'UNICO modo consentito per innestare un componente
  scroll-driven importato (Golden Pack) nel corpo della pagina.
  Incassa i guardrail di AGENTS.md:
  - sezione isolata `relative w-full` con z-index esplicito
  - NIENTE h-screen overflow-hidden sul wrapper (romperebbe sticky/scrub)
  - mai pin sul genitore di un componente con scroll interno
  Usalo a metà pagina, mai come hero.
*/
export default function GuestWrapper({ children, z = 20, className = '' }) {
  return (
    <section
      className={`relative w-full ${className}`}
      style={{ zIndex: z }}
    >
      {children}
    </section>
  )
}
