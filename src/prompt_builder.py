"""Genera il prompt per Stitch a partire dal .md e dalle reference, con Claude."""
from __future__ import annotations

import base64
from pathlib import Path

import anthropic

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
    def __init__(self, model: str = "claude-opus-4-8", system: str | None = None) -> None:
        self.model = model
        self.system = system or _DEFAULT_SYSTEM
        self.client = anthropic.Anthropic()  # legge ANTHROPIC_API_KEY dall'ambiente

    def build(self, job: Job) -> str:
        content: list[dict] = [
            {
                "type": "text",
                "text": (
                    "Descrizione dell'animazione (file .md):\n\n"
                    f"{job.md_text}\n\n"
                    "Qui sotto le immagini di reference. Genera il prompt per Stitch."
                ),
            }
        ]
        for img in job.images:
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
