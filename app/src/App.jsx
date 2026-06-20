import SmoothScroll from './lib/SmoothScroll.jsx'
import Footer from './components/Footer.jsx'
import RevealText from './components/RevealText.jsx'
import KineticImage from './components/KineticImage.jsx'

/*
  APP — scheletro di esempio. NON è il sito finale: le sezioni vere si
  CLONANO dal composition-spec del reference scelto in Fase B.
  GUARDRAIL FATALE: nessun overflow-hidden su questo root o su <main>.
  Questo file dimostra l'engine (SmoothScroll), una hero NATIVA e le due
  tecniche-firma (RevealText, KineticImage).
*/
export default function App() {
  return (
    <SmoothScroll>
      <main className="relative w-full">
        {/* HERO nativo (mai un Golden Pack scroll-driven come hero) */}
        <header className="flex min-h-screen flex-col justify-end px-[8vw] pb-[10vh]">
          <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
            Ristorante — dal 19xx
          </p>
          <h1 className="font-display text-[clamp(64px,12vw,180px)] leading-[0.95]">
            Nome del Ristorante
          </h1>
        </header>

        {/* Sezione editoriale di esempio con reveal parola-per-parola */}
        <section className="px-[8vw] py-[var(--section-padding)]">
          <RevealText
            as="h2"
            className="font-display max-w-[16ch] text-[clamp(28px,4vw,56px)] leading-tight"
          >
            Qui il testo viene rivelato parola per parola sullo scroll, come nel
            reference. Sostituisci con la copy reale in italiano.
          </RevealText>
        </section>

        {/* Blocco asimmetrico: immagine portrait sticky + testo (firma BEC) */}
        <section className="grid grid-cols-1 gap-[1.5vw] px-[8vw] py-[var(--section-padding)] md:grid-cols-[5fr_9fr]">
          <div className="md:sticky md:top-[12vh] md:self-start">
            <KineticImage src="/placeholder-portrait.jpg" alt="" aspect={0.743} />
          </div>
          <div className="flex flex-col gap-6">
            <RevealText as="p" className="max-w-[42ch] text-lg leading-relaxed">
              Colonna di testo che scorre mentre l'immagine resta sticky. Questa
              è la tensione editoriale del reference: striscia portrait stretta
              accanto al testo.
            </RevealText>
          </div>
        </section>

        <Footer />
      </main>
    </SmoothScroll>
  )
}
