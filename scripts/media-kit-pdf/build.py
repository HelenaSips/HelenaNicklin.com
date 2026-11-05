"""Rebuild public/media-kit/HelenaSips-Media-Pack-2026.pdf.

Prints pages.html with Chrome, then merges those pages with the pages kept
from the original PDF (original.pdf in this folder).

    python3 scripts/media-kit-pdf/build.py
"""
import pathlib
import subprocess
import fitz  # PyMuPDF

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parent.parent
ORIGINAL = HERE / "original.pdf"
OUT = ROOT / "public/media-kit/HelenaSips-Media-Pack-2026.pdf"
NEW = HERE / "new-pages.pdf"
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

# The kept pages come from the PDF as it was before this rebuild.
ORIGINAL_COMMIT = "4b9f9b8"
if not ORIGINAL.exists():
    data = subprocess.run(
        ["git", "show", f"{ORIGINAL_COMMIT}:public/media-kit/HelenaSips-Media-Pack-2026.pdf"],
        cwd=ROOT, check=True, capture_output=True).stdout
    ORIGINAL.write_bytes(data)

subprocess.run([
    CHROME, "--headless=new", "--disable-gpu", "--no-pdf-header-footer",
    "--virtual-time-budget=15000", "--allow-file-access-from-files",
    f"--print-to-pdf={NEW}", (HERE / "pages.html").as_uri(),
], check=True, capture_output=True)

orig = fitz.open(ORIGINAL)
new = fitz.open(NEW)
# new-pages.pdf: 0=p04 1=p05 2=p06 3=p07 4=p08 5=p10, 6..8 = number patches
# Final order (original pages are 0-based):
#   cover, about, awards, [04 work], [05 audience], [06 rates],
#   [07 B&B], [08 B&B options], podcast, [10 sponsorship], charity, contact
plan = [("o", 0), ("o", 1), ("o", 2), ("n", 0), ("n", 1), ("n", 2),
        ("n", 3), ("n", 4), ("o", 6), ("n", 5), ("o", 9), ("o", 10)]
# Kept pages whose page number changes: (final index, cover rect, bg, patch page)
patches = {
    8: ((712, 570, 736, 584), (0xfb, 0xf5, 0xed), 6),
    10: ((718, 570, 736, 584), (0xfb, 0xf5, 0xed), 7),
    11: ((718, 570, 736, 584), (0x12, 0x2b, 0x20), 8),
}

out = fitz.open()
for idx, (src, n) in enumerate(plan):
    out.insert_pdf(orig if src == "o" else new, from_page=n, to_page=n)
    if idx in patches:
        rect, rgb, patch = patches[idx]
        page = out[idx]
        page.draw_rect(fitz.Rect(*rect), color=None, fill=[c / 255 for c in rgb], overlay=True)
        page.show_pdf_page(page.rect, new, patch, overlay=True)

out.set_metadata(orig.metadata)
out.save(OUT, garbage=4, deflate=True)
NEW.unlink()
print(f"Wrote {OUT} ({len(out)} pages)")
