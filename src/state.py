"""Tiene traccia dei job gia' elaborati, così non vengono rifatti."""
from __future__ import annotations

import json
from pathlib import Path


class State:
    def __init__(self, path: str = "state.json") -> None:
        self.path = Path(path)
        self._done: set[str] = set()
        if self.path.exists():
            try:
                self._done = set(json.loads(self.path.read_text(encoding="utf-8")))
            except (ValueError, OSError):
                self._done = set()

    def is_done(self, job_id: str) -> bool:
        return job_id in self._done

    def mark_done(self, job_id: str) -> None:
        self._done.add(job_id)
        self.path.write_text(
            json.dumps(sorted(self._done), ensure_ascii=False, indent=2),
            encoding="utf-8",
        )
