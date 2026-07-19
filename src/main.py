"""Loop principale: sync -> genera prompt -> consegna a Stitch -> ripeti."""
from __future__ import annotations

import argparse
import logging
import time

from .config import Config
from .prompt_builder import PromptBuilder
from .sources import build_source
from .state import State
from .stitch_client import StitchClient

log = logging.getLogger("porkot")


def run_once(cfg: Config, source, builder: PromptBuilder, stitch: StitchClient,
             state: State) -> int:
    """Esegue un giro: elabora tutti i job nuovi. Ritorna quanti ne ha fatti."""
    done = 0
    for job in source.list_jobs():
        if state.is_done(job.job_id):
            continue
        log.info("Nuovo job: %s (%d reference)", job.name, len(job.images))
        try:
            steps = builder.build_steps(job)
            result = stitch.deliver(job, steps)
            state.mark_done(job.job_id)
            log.info("Job '%s' consegnato: %s", job.name, result)
            done += 1
        except Exception:  # non fermare il servizio per un job rotto
            log.exception("Errore sul job '%s' (riprovo al prossimo giro)", job.name)
    return done


def main() -> None:
    parser = argparse.ArgumentParser(description="Porkot -> Stitch (automatico)")
    parser.add_argument("--config", default="config.yaml")
    parser.add_argument("--once", action="store_true",
                        help="Esegue un solo giro e termina (per provare).")
    args = parser.parse_args()

    logging.basicConfig(
        level=logging.INFO,
        format="%(asctime)s %(levelname)s %(name)s: %(message)s",
    )

    cfg = Config.load(args.config)
    source = build_source(cfg.source)
    builder = PromptBuilder(
        mode=cfg.prompt.get("mode", "ai"),
        model=cfg.prompt.get("model", "claude-opus-4-8"),
        system=cfg.prompt.get("system"),
    )
    stitch = StitchClient(cfg.stitch)
    state = State()

    log.info("Avvio. Sorgente=%s, consegna=%s", cfg.source.get("type"),
             cfg.stitch.get("mode"))

    if args.once:
        run_once(cfg, source, builder, stitch, state)
        return

    while True:
        try:
            run_once(cfg, source, builder, stitch, state)
        except Exception:
            log.exception("Errore nel giro principale")
        time.sleep(cfg.poll_interval_seconds)


if __name__ == "__main__":
    main()
