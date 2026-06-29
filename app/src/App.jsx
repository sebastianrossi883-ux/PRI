import SmoothScroll from './lib/SmoothScroll.jsx'
import Footer from './components/Footer.jsx'
import Hero from './sections/Hero.jsx'
import Manifesto from './sections/Manifesto.jsx'
import Menus from './sections/Menus.jsx'
import Story from './sections/Story.jsx'
import HorizontalGallery from './sections/HorizontalGallery.jsx'
import Booking from './sections/Booking.jsx'

/*
  RADICI — versione cinematografica (iterazione 2).
  Direzione: WOW, tutto animato, scuro/drammatico; struttura editoriale ispirata
  ai siti scaricati ma spinta all'impatto. Va vista IN MOVIMENTO (npm run dev).
  GUARDRAIL: nessun overflow-hidden su <main>/root.
*/
export default function App() {
  return (
    <SmoothScroll>
      <main className="relative w-full">
        <Hero />
        <Manifesto />
        <Menus />
        <Story />
        <HorizontalGallery />
        <Booking />
        <Footer>
          <p className="font-display text-[clamp(56px,14vw,200px)] font-light leading-none">
            Radici
          </p>
        </Footer>
      </main>
    </SmoothScroll>
  )
}
