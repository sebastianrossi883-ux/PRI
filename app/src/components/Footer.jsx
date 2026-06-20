/*
  FOOTER — obbligatorio per ogni sito (AGENTS.md). La firma obsidiantech
  è fissa: non riscriverla a mano nelle pagine, usa questo componente.
*/
export default function Footer({ children }) {
  return (
    <footer className="w-full px-[8vw] py-24">
      {children}
      <p className="mt-12 text-sm opacity-60">
        Sito realizzato da{' '}
        <a
          href="https://obsidiantech.it/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4"
        >
          obsidiantech
        </a>
      </p>
    </footer>
  )
}
