import KineticImage from '../components/KineticImage.jsx'
import RevealText from '../components/RevealText.jsx'

/*
  STORY — clone della m-medias-text -multiple (firma compositiva del BEC):
  colonna immagini PORTRAIT stretta (5/14) e STICKY a top 12vh, accanto al
  testo che scorre. Immagini con aspect 0.743, reveal scale 1.15->1 + clip.
  NB: immagini placeholder (manca il set originale) — sostituire con le foto reali.
*/
export default function Story() {
  return (
    <section className="grid grid-cols-1 gap-[1.5vw] px-[8vw] py-[var(--section-padding)] md:grid-cols-[5fr_9fr]">
      {/* colonna immagini sticky */}
      <div className="hidden flex-col gap-[1.5vw] md:flex md:sticky md:top-[12vh] md:self-start">
        <KineticImage src="/images/hero.jpg" alt="In cucina" aspect={0.743} />
        <KineticImage src="/images/hero.jpg" alt="La sala" aspect={0.743} />
      </div>

      {/* testo che scorre */}
      <div className="flex flex-col gap-10 md:pl-[6vw]">
        <p className="font-sans text-[11px] uppercase tracking-[0.25em] text-[color:var(--color-accent)]">
          La nostra storia
        </p>
        <RevealText
          as="h3"
          className="font-display max-w-[18ch] text-[clamp(28px,3.4vw,52px)] font-light leading-[1.15]"
        >
          Tutto nasce da un orto e da una promessa.
        </RevealText>
        <RevealText as="p" className="max-w-[46ch] text-lg font-light leading-relaxed">
          Da quasi quarant'anni la nostra famiglia coltiva un dialogo tra la
          cucina e la terra che la circonda. Le verdure arrivano dall'orto
          dietro la sala, il pane lievita di notte, e ogni stagione riscrive la
          carta da capo.
        </RevealText>
        <RevealText as="p" className="max-w-[46ch] text-lg font-light leading-relaxed">
          Non inseguiamo le mode: ascoltiamo gli ingredienti e li lasciamo
          parlare. È una cucina di radici, fatta di gesti antichi e di una
          precisione contemporanea.
        </RevealText>
        <p className="font-display text-2xl font-light italic opacity-70">
          — Famiglia Conti, dal 1987
        </p>
      </div>
    </section>
  )
}
