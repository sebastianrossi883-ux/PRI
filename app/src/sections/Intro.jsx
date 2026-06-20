import RevealText from '../components/RevealText.jsx'

/*
  INTRO — clone della m-text-center: dichiarazione editoriale centrata,
  c-heading -h3 (~40px). Reveal parola-per-parola sullo scroll.
*/
export default function Intro() {
  return (
    <section className="mx-auto max-w-[58ch] px-[8vw] py-[var(--section-padding)] text-center">
      <p className="font-sans text-[11px] uppercase tracking-[0.25em] text-[color:var(--color-accent)]">
        Il nostro mondo
      </p>
      <RevealText
        as="h2"
        className="font-display mt-8 text-[clamp(28px,3.2vw,44px)] font-light leading-[1.25]"
      >
        Cuciniamo ciò che la terra ci concede, nel momento esatto in cui è
        giusto. Senza eccessi, senza maschere: solo materia, fuoco e tempo.
      </RevealText>
    </section>
  )
}
