"""Automazione del sito Stitch con Playwright.

Stitch (Google) richiede il login con l'account Google e NON ha un'API
pubblica: per questo si usa un browser vero. Il login si fa UNA volta a mano
(`python -m src.login_stitch`), viene salvato in una cartella-profilo, e da li'
in poi il programma riusa quella sessione senza richiedere di nuovo la password.

⚠️ I selettori (i "punti" dell'interfaccia dove scrivere/cliccare) possono
cambiare quando Google aggiorna Stitch. Sono tutti configurabili in config.yaml
sotto `stitch.browser`, cosi' li puoi correggere senza toccare il codice.
"""
from __future__ import annotations

import logging
from pathlib import Path

from .jobs import Job

log = logging.getLogger("porkot.stitch")

# Valori predefiniti: da verificare/adattare all'interfaccia reale di Stitch.
DEFAULTS = {
    "url": "https://stitch.withgoogle.com/",
    "user_data_dir": "./.stitch_profile",  # dove viene salvato il login
    "headless": True,                       # su Oracle gira senza schermo
    # Selettori dell'interfaccia (CSS o testo). Da adattare a Stitch.
    "prompt_selector": "textarea",
    "submit_selector": "button[type=submit]",
    "upload_selector": "input[type=file]",
    "ready_selector": "textarea",           # elemento che conferma pagina pronta
    "post_submit_wait_ms": 4000,
}


class StitchBrowser:
    def __init__(self, cfg: dict) -> None:
        self.cfg = {**DEFAULTS, **(cfg or {})}

    def _launch(self, playwright, headless: bool | None = None):
        user_data_dir = Path(self.cfg["user_data_dir"]).absolute()
        user_data_dir.mkdir(parents=True, exist_ok=True)
        headless = self.cfg["headless"] if headless is None else headless
        return playwright.chromium.launch_persistent_context(
            user_data_dir=str(user_data_dir),
            headless=headless,
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

    def deliver(self, job: Job, prompt: str) -> str:
        from playwright.sync_api import sync_playwright

        with sync_playwright() as p:
            ctx = self._launch(p)
            page = ctx.new_page()
            try:
                page.goto(self.cfg["url"], wait_until="domcontentloaded")
                page.wait_for_selector(self.cfg["ready_selector"], timeout=30_000)

                # 1) Carica le reference, se c'e' un input file nella pagina.
                if job.images:
                    upload = page.query_selector(self.cfg["upload_selector"])
                    if upload:
                        upload.set_input_files([str(p_) for p_ in job.images])

                # 2) Scrivi il prompt.
                page.fill(self.cfg["prompt_selector"], prompt)

                # 3) Invia.
                submit = page.query_selector(self.cfg["submit_selector"])
                if submit:
                    submit.click()
                else:
                    page.press(self.cfg["prompt_selector"], "Enter")

                page.wait_for_timeout(int(self.cfg["post_submit_wait_ms"]))
                return "browser -> inviato a Stitch"
            finally:
                ctx.close()
