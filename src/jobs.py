"""Rappresentazione di un "job" di materiale (un .md + le reference .jpg)."""
from __future__ import annotations

import hashlib
from dataclasses import dataclass
from pathlib import Path

IMAGE_EXTS = {".jpg", ".jpeg", ".png", ".webp"}


@dataclass
class Job:
    job_id: str          # identificativo stabile (per lo stato "gia' fatto")
    name: str            # nome leggibile (di solito il nome della cartella)
    md_text: str         # contenuto del file .md (descrizione animazione)
    images: list[Path]   # percorsi delle immagini di reference


def load_job_from_dir(job_dir: Path) -> Job | None:
    """Costruisce un Job da una cartella contenente un .md e delle immagini."""
    md_files = sorted(job_dir.glob("*.md"))
    if not md_files:
        return None
    md_text = md_files[0].read_text(encoding="utf-8")
    images = sorted(
        p for p in job_dir.iterdir() if p.suffix.lower() in IMAGE_EXTS
    )
    # job_id basato su nome + contenuto, così se il materiale cambia si rielabora.
    digest = hashlib.sha256(
        (job_dir.name + md_text + "".join(i.name for i in images)).encode("utf-8")
    ).hexdigest()[:16]
    return Job(
        job_id=f"{job_dir.name}-{digest}",
        name=job_dir.name,
        md_text=md_text,
        images=images,
    )
