import SmoothScroll from './lib/SmoothScroll.jsx'
import Footer from './components/Footer.jsx'
import Hero from './sections/Hero.jsx'
import Intro from './sections/Intro.jsx'
import Menus from './sections/Menus.jsx'
import Story from './sections/Story.jsx'
import MediaCentered from './sections/MediaCentered.jsx'
import Booking from './sections/Booking.jsx'

/*
  RADICI — sito clonato dal blueprint #01 (BEC), Fase B.
  Sezioni nell'ordine reale del reference: hero → intro → menù →
  story (medias-text sticky) → media centrata → booking → footer.
  GUARDRAIL FATALE: nessun overflow-hidden su questo root o su <main>.
  Identità (nome/copy/foto) sostituibile; struttura e animazioni = BEC.
*/
export default function App() {
  return (
    <SmoothScroll>
      <main className="relative w-full">
        <Hero />
        <Intro />
        <Menus />
        <Story />
        <MediaCentered />
        <Booking />
        <Footer>
          <p className="font-display text-[clamp(40px,8vw,120px)] font-light leading-none">
            Radici
          </p>
        </Footer>
      </main>
    </SmoothScroll>
  )
}
