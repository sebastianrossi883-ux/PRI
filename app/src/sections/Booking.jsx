import RevealText from '../components/RevealText.jsx'

/*
  BOOKING — chiusura drammatica a tutto schermo. Grande invito + dettagli.
*/
export default function Booking() {
  return (
    <section className="flex min-h-screen flex-col justify-center bg-[color:var(--color-deep)] px-[6vw] py-[var(--section-padding)]">
      <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-[color:var(--color-accent)]">
        Prenotazioni
      </p>
      <RevealText
        as="h3"
        className="font-display mt-8 max-w-[12ch] text-[clamp(44px,9vw,160px)] font-light leading-[0.95]"
      >
        Sedetevi alla nostra tavola.
      </RevealText>

      <a
        href="#"
        className="mt-12 inline-block w-fit border border-[color:var(--color-ink)]/40 px-10 py-4 font-sans text-sm uppercase tracking-[0.25em] transition-colors hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)]"
      >
        Prenota un tavolo
      </a>

      <div className="mt-20 grid grid-cols-1 gap-10 border-t border-[color:var(--color-ink)]/15 pt-12 md:grid-cols-3">
        {[
          ['Orari', 'Martedì – Domenica\n19:30 – 23:00'],
          ['Dove', 'Via delle Colline 12\nBorgo Antico'],
          ['Contatti', '+39 0123 456789\nciao@radici.it'],
        ].map(([k, v]) => (
          <div key={k}>
            <p className="font-sans text-[11px] uppercase tracking-[0.25em] text-[color:var(--color-ink)]/40">
              {k}
            </p>
            <p className="mt-3 whitespace-pre-line font-display text-xl font-light">{v}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
