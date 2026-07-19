"""Genera i prompt (uno per passo) a partire dai .md e dalle reference.

Due modalita' (config `prompt.mode`):
- "ai"  : Claude legge il .md + le immagini e scrive un prompt ottimizzato.
- "raw" : usa il testo del .md cosi' com'e' (nessuna AI, incolla e basta).

Solo il PRIMO passo riceve le immagini di reference; i passi successivi sono i
prompt in sequenza (es. animazioni).
"""
from __future__ import annotations

import base64
from pathlib import Path

from .jobs import Job

_MEDIA_TYPES = {
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".png": "image/png",
    ".webp": "image/webp",
}

_DEFAULT_SYSTEM = (
    "Sei un assistente che trasforma la descrizione di un'animazione e le sue "
    "immagini di reference in un prompt chiaro e dettagliato, pronto da incollare "
    "in Stitch. Scrivi in italiano. Restituisci SOLO il prompt finale."
)


def _image_block(path: Path) -> dict:
    media_type = _MEDIA_TYPES.get(path.suffix.lower(), "image/jpeg")
    data = base64.standard_b64encode(path.read_bytes()).decode("ascii")
    return {
        "type": "image",
        "source": {"type": "base64", "media_type": media_type, "data": data},
    }


class PromptBuilder:
    def __init__(self, mode: str = "ai", model: str = "claude-opus-4-8",
                 system: str | None = None) -> None:
        self.mode = mode
        self.model = model
        self.system = system or _DEFAULT_SYSTEM
        self._client = None

    @property
    def client(self):
        if self._client is None:
            import anthropic
            self._client = anthropic.Anthropic()  # legge ANTHROPIC_API_KEY
        return self._client

    def build_steps(self, job: Job) -> list[str]:
        """Ritorna la lista dei prompt da incollare, in ordine."""
        if self.mode == "raw":
            return [s.strip() for s in job.steps]
        return [
            self._build_ai(text, job.images if i == 0 else [])
            for i, text in enumerate(job.steps)
        ]

    def _build_ai(self, md_text: str, images: list[Path]) -> str:
        content: list[dict] = [
            {
                "type": "text",
                "text": (
                    "Descrizione (file .md):\n\n"
                    f"{md_text}\n\n"
                    "Genera il prompt per Stitch."
                    + (" Qui sotto le immagini di reference." if images else "")
                ),
            }
        ]
        for img in images:
            content.append(_image_block(img))

        response = self.client.messages.create(
            model=self.model,
            max_tokens=2048,
            thinking={"type": "adaptive"},
            system=self.system,
            messages=[{"role": "user", "content": content}],
        )
        return "".join(
            block.text for block in response.content if block.type == "text"
        ).strip()
