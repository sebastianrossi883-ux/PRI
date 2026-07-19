"""Login una tantum a Stitch: salva la sessione nel profilo del browser.

Uso:  python -m src.login_stitch
Da eseguire su un computer con schermo (il tuo PC), poi copiare la cartella
del profilo (.stitch_profile) sulla VM Oracle.
"""
from __future__ import annotations

from .config import Config
from .stitch_browser import StitchBrowser


def main() -> None:
    cfg = Config.load()
    browser_cfg = cfg.stitch.get("browser", {})
    StitchBrowser(browser_cfg).login()


if __name__ == "__main__":
    main()
