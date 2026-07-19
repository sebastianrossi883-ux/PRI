"""Automazione del sito Stitch con Playwright (replica il flusso locale).

Flusso per ogni job:
  1) apre Stitch (login salvato una volta con `python -m src.login_stitch`)
  2) seleziona il modello (es. "3.1 pro")
  3) seleziona la versione "web" (non "app")
  4) carica le reference e incolla il PRIMO prompt, poi invia
  5) aspetta che finisca e incolla i PROMPT SUCCESSIVI in sequenza (animazioni)

⚠️ I selettori/etichette dell'interfaccia possono cambiare quando Google
aggiorna Stitch: sono tutti in config.yaml sotto `stitch.browser`, cosi' si
correggono senza toccare il codice. I valori qui sotto sono un punto di
partenza da adattare all'interfaccia reale.
"""
from __future__ import annotations

import logging
from pathlib import Path

from .jobs import Job

log = logging.getLogger("porkot.stitch")

DEFAULTS = {
    "url": "https://stitch.withgoogle.com/",
    "user_data_dir": "./.stitch_profile",
    "headless": True,

    # Selezione modello (es. "3.1 pro"). Se vuoto, salta questo passo.
    "model_label": "3.1 pro",
    "model_open_selector": "",     # es. il bottone che apre il menu modelli
    "model_option_selector": "",   # es. la voce del menu (se vuoto usa il testo)

    # Selezione versione "web" (non "app"). Se vuoto, salta questo passo.
    "web_label": "web",
    "web_open_selector": "",
    "web_option_selector": "",

    # Area prompt e invio.
    "prompt_selector": "textarea",
    "submit_selector": "button[type=submit]",
    "upload_selector": "input[type=file]",
    "ready_selector": "textarea",

    # Come capire che un prompt ha "finito" prima di incollare il successivo.
    # Se "done_selector" e' vuoto, aspetta semplicemente "step_wait_ms".
    "done_selector": "",
    "step_timeout_ms": 120000,
    "step_wait_ms": 5000,
}


class StitchBrowser:
    def __init__(self, cfg: dict) -> None:
        self.cfg = {**DEFAULTS, **(cfg or {})}

    def _launch(self, playwright, headless: bool | None = None):
        user_data_dir = Path(self.cfg["user_data_dir"]).absolute()
        user_data_dir.mkdir(parents=True, exist_ok=True)
        headless = self.cfg["headless"] if headless is None else headless
        return playwright.chromium.launch_persistent_context(
            user_data_dir=str(user_data_dir), headless=headless
        )

    def login(self) -> None:
        """Login manuale una tantum: apre il browser, tu accedi a Google/Stitch."""
        from playwright.sync_api import sync_playwright

        with sync_playwright() as p:
            ctx = self._launch(p, headless=False)
            page = ctx.new_page()
            page.goto(self.cfg["url"])
            print(
                "\n>>> Accedi a Stitch nel browser che si e' aperto.\n"
                ">>> Quando vedi la tua area di lavoro, torna qui e premi INVIO.\n"
            )
            input()
            ctx.close()
            print("Login salvato. Ora il servizio puo' girare da solo.")

    # --- passi dell'interfaccia -------------------------------------------
    def _select_option(self, page, open_sel: str, option_sel: str, label: str):
        """Apre un menu e sceglie una voce (per selettore o per testo)."""
        if open_sel:
            page.click(open_sel)
        if option_sel:
            page.click(option_sel)
        elif label:
            page.get_by_text(label, exact=False).first.click()

    def _wait_done(self, page):
        done_sel = self.cfg["done_selector"]
        if done_sel:
            page.wait_for_selector(done_sel, timeout=int(self.cfg["step_timeout_ms"]))
        else:
            page.wait_for_timeout(int(self.cfg["step_wait_ms"]))

    def _send_prompt(self, page, text: str):
        page.fill(self.cfg["prompt_selector"], text)
        submit = page.query_selector(self.cfg["submit_selector"])
        if submit:
            submit.click()
        else:
            page.press(self.cfg["prompt_selector"], "Enter")

    # --- consegna completa -------------------------------------------------
    def deliver(self, job: Job, steps: list[str]) -> str:
        from playwright.sync_api import sync_playwright

        if not steps:
            return "browser -> nessun prompt da inviare"

        with sync_playwright() as p:
            ctx = self._launch(p)
            page = ctx.new_page()
            try:
                page.goto(self.cfg["url"], wait_until="domcontentloaded")
                page.wait_for_selector(self.cfg["ready_selector"], timeout=30_000)

                # 1) modello "3.1 pro"
                if self.cfg["model_label"] or self.cfg["model_open_selector"]:
                    self._select_option(
                        page, self.cfg["model_open_selector"],
                        self.cfg["model_option_selector"], self.cfg["model_label"]
                    )
                # 2) versione "web"
                if self.cfg["web_label"] or self.cfg["web_open_selector"]:
                    self._select_option(
                        page, self.cfg["web_open_selector"],
                        self.cfg["web_option_selector"], self.cfg["web_label"]
                    )

                # 3) reference (solo al primo passo)
                if job.images:
                    upload = page.query_selector(self.cfg["upload_selector"])
                    if upload:
                        upload.set_input_files([str(i) for i in job.images])

                # 4) primo prompt + 5) prompt successivi in sequenza
                for idx, text in enumerate(steps):
                    log.info("Invio prompt %d/%d per '%s'", idx + 1, len(steps),
                             job.name)
                    self._send_prompt(page, text)
                    self._wait_done(page)

                return f"browser -> inviati {len(steps)} prompt a Stitch"
            finally:
                ctx.close()
