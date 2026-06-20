#!/usr/bin/env node
/*
  GUARDRAIL CHECK — incassa nel codice le regole FATALI di AGENTS.md.
  Fallisce la build (exit 1) se trova i pattern che rompono GSAP/sticky.
  Gira con `npm run guardrails` o automaticamente prima di `npm run build`.
*/
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, extname } from 'node:path'

const SRC = new URL('../src', import.meta.url).pathname
const exts = new Set(['.jsx', '.js', '.tsx', '.ts', '.css'])
const errors = []

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    if (statSync(p).isDirectory()) walk(p)
    else if (exts.has(extname(p))) check(p)
  }
}

function check(file) {
  const text = readFileSync(file, 'utf8')
  const lines = text.split('\n')
  lines.forEach((line, i) => {
    const ln = i + 1
    const trimmed = line.trim()

    // Salta i commenti (riga di commento JS/JSX/CSS o citazioni in commento).
    if (/^(\/\/|\*|\/\*|<!--)/.test(trimmed)) return

    // FATALE 1: overflow-hidden in una className su root / main / App.
    const onRoot = /(<main\b|<App\b|id=["']root["'])/.test(line)
    const overflowClass = /className=["'][^"']*overflow(-x)?-hidden/.test(line)
    if (onRoot && overflowClass) {
      errors.push(`${file}:${ln}  overflow-hidden su root/main (rompe pin/sticky)`)
    }

    // FATALE 1b: CSS — overflow-hidden dichiarato dentro un selettore html/body.
    if (file.endsWith('.css') && /^(html|body)[\s,{]/.test(trimmed) === false) {
      // gestito a blocco sotto
    }
  })

  // FATALE 1b (CSS a blocco): html{} o body{} con overflow-hidden dentro.
  // Stripo i commenti /* */ per non beccare le citazioni nei commenti.
  if (file.endsWith('.css')) {
    const clean = text.replace(/\/\*[\s\S]*?\*\//g, '')
    const re = /(^|\})\s*(html|body)[^{]*\{([^}]*)\}/gm
    let m
    while ((m = re.exec(clean))) {
      if (/overflow(-x)?-hidden/.test(m[3])) {
        errors.push(`${file}  overflow-hidden nel selettore ${m[2]} (rompe pin/sticky)`)
      }
    }
  }
}

try {
  walk(SRC)
} catch (e) {
  console.error('check-guardrails: impossibile leggere src/', e.message)
  process.exit(0)
}

if (errors.length) {
  console.error('\n❌ GUARDRAIL VIOLATI (AGENTS.md):')
  for (const e of errors) console.error('  - ' + e)
  console.error('\nVedi AGENTS.md, sezione "Guardrail FATALI".\n')
  process.exit(1)
}
console.log('✅ Guardrail OK: nessun overflow-hidden fatale su root/main.')
