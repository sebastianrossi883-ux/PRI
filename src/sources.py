"""Sorgenti del materiale: cartella locale oppure Google Drive."""
from __future__ import annotations

from pathlib import Path
from typing import Iterator, Protocol

from .jobs import Job, load_job_from_dir


class Source(Protocol):
    def list_jobs(self) -> Iterator[Job]:
        ...


class LocalSource:
    """Ogni sottocartella di `local_dir` e' un job."""

    def __init__(self, local_dir: str) -> None:
        self.local_dir = Path(local_dir)

    def list_jobs(self) -> Iterator[Job]:
        if not self.local_dir.exists():
            return
        for sub in sorted(self.local_dir.iterdir()):
            if not sub.is_dir():
                continue
            job = load_job_from_dir(sub)
            if job is not None:
                yield job


class GDriveSource:
    """Scarica da una cartella Google Drive, poi delega a LocalSource.

    Struttura attesa su Drive: la cartella indicata contiene una sottocartella
    per ogni job (con dentro un .md e le immagini). Richiede un service account
    Google e le librerie google-api-python-client / google-auth.
    """

    def __init__(self, folder_id: str, download_dir: str = "./material") -> None:
        self.folder_id = folder_id
        self.download_dir = Path(download_dir)
        self._local = LocalSource(download_dir)

    def _service(self):
        from google.oauth2 import service_account  # import lazy
        from googleapiclient.discovery import build

        import os

        creds_path = os.environ.get("GOOGLE_APPLICATION_CREDENTIALS")
        if not creds_path:
            raise RuntimeError(
                "GOOGLE_APPLICATION_CREDENTIALS non impostata: serve il file "
                "JSON del service account Google."
            )
        creds = service_account.Credentials.from_service_account_file(
            creds_path, scopes=["https://www.googleapis.com/auth/drive.readonly"]
        )
        return build("drive", "v3", credentials=creds, cache_discovery=False)

    def _list_children(self, service, parent_id: str) -> list[dict]:
        files: list[dict] = []
        page_token = None
        while True:
            resp = (
                service.files()
                .list(
                    q=f"'{parent_id}' in parents and trashed = false",
                    fields="nextPageToken, files(id, name, mimeType)",
                    pageToken=page_token,
                )
                .execute()
            )
            files.extend(resp.get("files", []))
            page_token = resp.get("nextPageToken")
            if not page_token:
                break
        return files

    def _download_file(self, service, file_id: str, dest: Path) -> None:
        from googleapiclient.http import MediaIoBaseDownload

        dest.parent.mkdir(parents=True, exist_ok=True)
        request = service.files().get_media(fileId=file_id)
        with open(dest, "wb") as fh:
            downloader = MediaIoBaseDownload(fh, request)
            done = False
            while not done:
                _, done = downloader.next_chunk()

    def sync(self) -> None:
        """Scarica i job nuovi da Drive nella cartella locale."""
        service = self._service()
        for job_folder in self._list_children(service, self.folder_id):
            if job_folder["mimeType"] != "application/vnd.google-apps.folder":
                continue
            local_job_dir = self.download_dir / job_folder["name"]
            for f in self._list_children(service, job_folder["id"]):
                if f["mimeType"] == "application/vnd.google-apps.folder":
                    continue
                dest = local_job_dir / f["name"]
                if not dest.exists():
                    self._download_file(service, f["id"], dest)

    def list_jobs(self):
        self.sync()
        yield from self._local.list_jobs()


def build_source(cfg_source: dict) -> Source:
    kind = cfg_source.get("type", "local")
    if kind == "local":
        return LocalSource(cfg_source.get("local_dir", "./material"))
    if kind == "gdrive":
        return GDriveSource(
            folder_id=cfg_source["gdrive_folder_id"],
            download_dir=cfg_source.get("download_dir", "./material"),
        )
    raise ValueError(f"Sorgente sconosciuta: {kind!r}")
