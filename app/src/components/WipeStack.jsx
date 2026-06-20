import { Children } from 'react'

/*
  WIPE STACK — sezioni che scorrono una sull'altra (wipe).
  Assegna in automatico z-index crescenti (10, 20, 30...) verso il basso e
  impone background solido: rispetta l'invariante z-index di AGENTS.md senza
  doverlo ricordare a mano. Ogni figlio deve avere il suo bg-* (solido).
*/
export default function WipeStack({ children, step = 10, base = 10 }) {
  return (
    <>
      {Children.toArray(children).map((child, i) => (
        <div key={i} className="relative" style={{ zIndex: base + i * step }}>
          {child}
        </div>
      ))}
    </>
  )
}
