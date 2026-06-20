import RevealText from '../components/RevealText.jsx'

/*
  BOOKING / NEWSLETTER — clone della m-newsletter / m-booking.
  Invito a prenotare, contatti, niente card: blocco editoriale ampio.
*/
export default function Booking() {
  return (
    <section className="px-[8vw] py-[var(--section-padding)]">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
        <div>
          <p className="font-sans text-[11px] uppercase tracking-[0.25em] text-[color:var(--color-accent)]">
            Prenotazioni
          </p>
          <RevealText
            as="h3"
            className="font-display mt-8 max-w-[14ch] text-[clamp(32px,4.5vw,64px)] font-light leading-[1.05]"
          >
            Sedetevi alla nostra tavola.
          </RevealText>
          <a
            href="#"
            className="mt-12 inline-block border-b border-[#003250] pb-1 font-sans text-sm uppercase tracking-[0.2em] transition-opacity hover:opacity-60"
          >
            Prenota un tavolo
          </a>
        </div>

        <div className="flex flex-col gap-8 md:pt-4">
          <div>
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] opacity-50">
              Orari
            </p>
            <p className="mt-2 font-display text-xl font-light">
              Martedì – Domenica · 19:30 – 23:00
            </p>
          </div>
          <div>
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] opacity-50">
              Dove
            </p>
            <p className="mt-2 font-display text-xl font-light">
              Via delle Colline 12, Borgo Antico
            </p>
          </div>
          <div>
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] opacity-50">
              Contatti
            </p>
            <p className="mt-2 font-display text-xl font-light">
              +39 0123 456789 · ciao@radici.it
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
