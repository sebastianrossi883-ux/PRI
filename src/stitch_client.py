"""Consegna dei prompt a Stitch. Modalita': browser / export / api.

- "browser" : va DAVVERO sul sito di Stitch e incolla modello+web+reference+prompt
              in sequenza (replica il flusso locale).
- "export"  : salva i prompt in output/ (per provare senza browser).
- "api"     : invia a un tuo endpoint HTTP.
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
        self.mode = cfg.get("mode", "browser")
        self.output_dir = Path(cfg.get("output_dir", "./output"))
        self.cfg = cfg

    def deliver(self, job: Job, steps: list[str]) -> str:
        if self.mode == "browser":
            return self._deliver_browser(job, steps)
        if self.mode == "export":
            return self._deliver_export(job, steps)
        if self.mode == "api":
            return self._deliver_api(job, steps)
        raise ValueError(f"Modalita' Stitch sconosciuta: {self.mode!r}")

    # --- browser: va DAVVERO sul sito di Stitch ----------------------------
    def _deliver_browser(self, job: Job, steps: list[str]) -> str:
        from .stitch_browser import StitchBrowser

        return StitchBrowser(self.cfg.get("browser", {})).deliver(job, steps)

    # --- export: salva su file (per provare) -------------------------------
    def _deliver_export(self, job: Job, steps: list[str]) -> str:
        self.output_dir.mkdir(parents=True, exist_ok=True)
        stamp = _dt.datetime.now().strftime("%Y%m%d-%H%M%S")
        out = self.output_dir / f"{stamp}_{_slug(job.name)}.md"
        refs = "\n".join(f"- {p.name}" for p in job.images) or "(nessuna)"
        blocks = "\n\n".join(
            f"### Prompt {i + 1}\n\n{s}" for i, s in enumerate(steps)
        )
        out.write_text(
            f"# Prompt per Stitch — {job.name}\n\n"
            f"## Reference\n{refs}\n\n{blocks}\n",
            encoding="utf-8",
        )
        return f"export -> {out}"

    # --- api: invia a un endpoint HTTP tuo ---------------------------------
    def _deliver_api(self, job: Job, steps: list[str]) -> str:
        import json
        import urllib.request

        url = self.cfg["api_url"]
        payload = json.dumps(
            {"name": job.name, "prompts": steps,
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
