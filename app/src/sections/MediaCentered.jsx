import KineticImage from '../components/KineticImage.jsx'

/*
  MEDIA CENTERED — clone della m-media -centered: immagine dominante LANDSCAPE
  (aspect 1.323), larga 6/14, centrata, min-height schermo. Contrasto di
  proporzioni con le portrait sticky della sezione Story.
*/
export default function MediaCentered() {
  return (
    <section className="flex min-h-screen items-center justify-center px-[8vw] py-[var(--section-padding)]">
      <div className="w-full md:w-[55%]">
        <KineticImage src="/images/hero.jpg" alt="La tavola" aspect={1.323} />
        <p className="mt-5 font-sans text-[11px] uppercase tracking-[0.2em] opacity-50">
          La sala — un'antica corte di pietra
        </p>
      </div>
    </section>
  )
}
