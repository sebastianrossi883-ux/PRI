import RevealText from '../components/RevealText.jsx'

/*
  MENÙ — lista editoriale cinematografica (mai card). Voci grandi, filetti
  sottili, hover che accende l'accento. Su tema scuro.
*/
const piatti = [
  ['Crudo di gambero rosso, agrumi e finocchietto', 'Antipasti'],
  ['Tortelli di zucca mantovana, salvia e nocciola', 'Primi'],
  ['Risotto alle erbe di campo e midollo', 'Primi'],
  ['Piccione, ciliegie e barbabietola', 'Secondi'],
  ['Agnello, carciofi e menta', 'Secondi'],
  ['Tiramisù scomposto al caffè di montagna', 'Dolci'],
]

export default function Menus() {
  return (
    <section className="px-[6vw] py-[var(--section-padding)]">
      <div className="mb-16 flex items-end justify-between border-b border-[color:var(--color-ink)]/15 pb-6">
        <RevealText
          as="p"
          className="font-display text-[clamp(28px,4vw,56px)] font-light"
        >
          La carta
        </RevealText>
        <p className="font-sans text-sm font-light text-[color:var(--color-ink)]/50">
          Menù degustazione — 7 portate
        </p>
      </div>

      <ul>
        {piatti.map(([nome, cat], i) => (
          <li
            key={i}
            className="group flex items-baseline justify-between gap-8 border-b border-[color:var(--color-ink)]/10 py-8 transition-colors hover:border-[color:var(--color-accent)]"
          >
            <span className="font-display text-[clamp(22px,2.8vw,40px)] font-light leading-tight transition-colors group-hover:text-[color:var(--color-accent)]">
              {nome}
            </span>
            <span className="shrink-0 font-sans text-[11px] uppercase tracking-[0.25em] text-[color:var(--color-ink)]/40">
              {cat}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
