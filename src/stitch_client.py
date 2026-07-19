"""Consegna del prompt a Stitch. Modulare: export / browser / api.

Google Stitch non ha un'API pubblica ufficiale, quindi la modalita' predefinita
e' "export": salva il prompt pronto (piu' l'elenco delle reference) in output/,
cosi' basta incollarlo in Stitch. Le altre modalita' sono predisposte per quando
avrai i dettagli su come consegnare in automatico.
"""
from __future__ import annotations

import datetime as _dt
import re
from pathlib import Path

from .jobs import Job


def _slug(text: str) -> str:
    return re.sub(r"[^a-zA-Z0-9_-]+", "-", text).strip("-").lower() or "job"


class StitchClient:
    def __init__(self, cfg: dict) -> None:
        self.mode = cfg.get("mode", "export")
        self.output_dir = Path(cfg.get("output_dir", "./output"))
        self.cfg = cfg

    def deliver(self, job: Job, prompt: str) -> str:
        if self.mode == "export":
            return self._deliver_export(job, prompt)
        if self.mode == "api":
            return self._deliver_api(job, prompt)
        if self.mode == "browser":
            return self._deliver_browser(job, prompt)
        raise ValueError(f"Modalita' Stitch sconosciuta: {self.mode!r}")

    # --- export: salva su file (predefinito) -------------------------------
    def _deliver_export(self, job: Job, prompt: str) -> str:
        self.output_dir.mkdir(parents=True, exist_ok=True)
        stamp = _dt.datetime.now().strftime("%Y%m%d-%H%M%S")
        out = self.output_dir / f"{stamp}_{_slug(job.name)}.md"
        refs = "\n".join(f"- {p.name}" for p in job.images) or "(nessuna)"
        out.write_text(
            f"# Prompt per Stitch — {job.name}\n\n"
            f"## Reference\n{refs}\n\n"
            f"## Prompt\n\n{prompt}\n",
            encoding="utf-8",
        )
        return f"export -> {out}"

    # --- api: invia a un endpoint HTTP tuo ---------------------------------
    def _deliver_api(self, job: Job, prompt: str) -> str:
        import json
        import urllib.request

        url = self.cfg["api_url"]
        payload = json.dumps(
            {"name": job.name, "prompt": prompt,
             "references": [p.name for p in job.images]}
        ).encode("utf-8")
        req = urllib.request.Request(
            url, data=payload, headers={"Content-Type": "application/json"}
        )
        token = self.cfg.get("api_token")
        if token:
            req.add_header("Authorization", f"Bearer {token}")
        with urllib.request.urlopen(req, timeout=30) as resp:
            return f"api -> HTTP {resp.status}"

    # --- browser: va DAVVERO sul sito di Stitch e incolla il prompt --------
    def _deliver_browser(self, job: Job, prompt: str) -> str:
        from .stitch_browser import StitchBrowser

        return StitchBrowser(self.cfg.get("browser", {})).deliver(job, prompt)
