#!/usr/bin/env node
/*
  SCREENSHOT QA — cattura il sito costruito a più viewport, per il confronto
  fianco-a-fianco con la reference (Leva 1: rendere la qualità MISURABILE).

  Uso (in locale, dove il browser c'è):
    1) npx playwright install chromium   # una volta
    2) npm run dev   (oppure npm run preview)   in un altro terminale
    3) npm run shot               # usa http://localhost:5173
       npm run shot -- http://localhost:4173 1440,768,390

  Output: qa/screenshots/site-<w>.png  → mettili accanto alla reference.
*/
import { chromium } from 'playwright'
import { mkdirSync } from 'node:fs'

const url = process.argv[2] || 'http://localhost:5173'
const widths = (process.argv[3] || '1440,768,390').split(',').map(Number)
const outDir = new URL('../qa/screenshots/', import.meta.url).pathname

mkdirSync(outDir, { recursive: true })

const browser = await chromium.launch()
for (const w of widths) {
  const page = await browser.newPage({ viewport: { width: w, height: 900 } })
  await page.goto(url, { waitUntil: 'networkidle' })
  // lascia partire le animazioni d'ingresso e lo scroll smooth
  await page.waitForTimeout(1500)
  // scorri tutta la pagina per far innescare i reveal in scrub
  await page.evaluate(async () => {
    const step = window.innerHeight
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y)
      await new Promise((r) => setTimeout(r, 200))
    }
    window.scrollTo(0, 0)
  })
  await page.waitForTimeout(600)
  const file = `${outDir}site-${w}.png`
  await page.screenshot({ path: file, fullPage: true })
  console.log('✓', file)
  await page.close()
}
await browser.close()
console.log('\nMetti questi accanto alla reference e usa QA-CHECKLIST.md.')
