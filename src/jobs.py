"""Rappresentazione di un "job" di materiale.

Un job = una cartella con:
- le immagini di reference (.jpg/.png/...)
- uno o piu' file .md = i "passi" di prompt, in ordine di nome file.
  Il primo passo e' il prompt iniziale (con le reference); i successivi sono i
  prompt da incollare in sequenza dopo che il precedente ha finito
  (es. i prompt delle animazioni).
"""
from __future__ import annotations

import hashlib
from dataclasses import dataclass
from pathlib import Path

IMAGE_EXTS = {".jpg", ".jpeg", ".png", ".webp"}


@dataclass
class Job:
    job_id: str          # identificativo stabile (per lo stato "gia' fatto")
    name: str            # nome leggibile (di solito il nome della cartella)
    steps: list[str]     # testi .md in ordine: [prompt_iniziale, animazione_1, ...]
    images: list[Path]   # percorsi delle immagini di reference


def load_job_from_dir(job_dir: Path) -> Job | None:
    """Costruisce un Job da una cartella con .md (uno o piu') e immagini."""
    md_files = sorted(job_dir.glob("*.md"))
    if not md_files:
        return None
    steps = [f.read_text(encoding="utf-8") for f in md_files]
    images = sorted(
        p for p in job_dir.iterdir() if p.suffix.lower() in IMAGE_EXTS
    )
    digest = hashlib.sha256(
        (job_dir.name + "".join(steps) + "".join(i.name for i in images))
        .encode("utf-8")
    ).hexdigest()[:16]
    return Job(
        job_id=f"{job_dir.name}-{digest}",
        name=job_dir.name,
        steps=steps,
        images=images,
    )
