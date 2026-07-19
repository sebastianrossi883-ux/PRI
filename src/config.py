"""Caricamento della configurazione da config.yaml."""
from __future__ import annotations

import os
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any

import yaml


@dataclass
class Config:
    poll_interval_seconds: int
    source: dict[str, Any]
    prompt: dict[str, Any]
    stitch: dict[str, Any]
    raw: dict[str, Any] = field(default_factory=dict)

    @classmethod
    def load(cls, path: str | os.PathLike = "config.yaml") -> "Config":
        p = Path(path)
        if not p.exists():
            raise FileNotFoundError(
                f"Manca {p}. Copia config.example.yaml in config.yaml e adattalo."
            )
        data = yaml.safe_load(p.read_text(encoding="utf-8")) or {}
        return cls(
            poll_interval_seconds=int(data.get("poll_interval_seconds", 60)),
            source=data.get("source", {"type": "local", "local_dir": "./material"}),
            prompt=data.get("prompt", {}),
            stitch=data.get("stitch", {"mode": "export", "output_dir": "./output"}),
            raw=data,
        )
