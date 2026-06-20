/*
  MENUS — clone della m-menus: lista editoriale (MAI card).
  Filetti sottili tra le voci, sovratitolo, prezzi allineati a destra.
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
    <section className="px-[8vw] py-[var(--section-padding)]">
      <div className="mb-16 flex items-end justify-between border-b border-[#003250]/15 pb-6">
        <p className="font-sans text-[11px] uppercase tracking-[0.25em] text-[color:var(--color-accent)]">
          La carta
        </p>
        <p className="font-sans text-sm font-light opacity-60">
          Menù degustazione — 7 portate
        </p>
      </div>

      <ul>
        {piatti.map(([nome, cat], i) => (
          <li
            key={i}
            className="flex items-baseline justify-between gap-8 border-b border-[#003250]/10 py-7"
          >
            <span className="font-display text-[clamp(20px,2.4vw,32px)] font-light leading-tight">
              {nome}
            </span>
            <span className="shrink-0 font-sans text-[11px] uppercase tracking-[0.2em] opacity-50">
              {cat}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
