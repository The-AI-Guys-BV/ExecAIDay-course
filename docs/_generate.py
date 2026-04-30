#!/usr/bin/env python3
"""Generate m01.html...m16.html from the modules/*.md files."""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MOD_DIR = ROOT / "modules"
OUT = ROOT / "docs"

MODULES = [
    ("M01", "Welcome + Foundations", "foundation", "M01-welcome-foundations.md", '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>'),
    ("M02", "Prompt Engineering", "foundation", "M02-prompt-engineering.md", '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>'),
    ("M03", "Cowork UI + Settings", "foundation", "M03-cowork-ui-settings.md", '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>'),
    ("M04", "Artifacts", "foundation", "M04-artifacts.md", '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>'),
    ("M05", "Browser + Chrome", "foundation", "M05-browser-chrome.md", '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="21.17" y1="8" x2="12" y2="8"/><line x1="3.95" y1="6.06" x2="8.54" y2="14"/><line x1="10.88" y1="21.94" x2="15.46" y2="14"/>'),
    ("M06", "Chief of Staff Brief", "personalize", "M06-chief-of-staff-claudemd.md", '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'),
    ("M07", "Skills + Slash Commands", "personalize", "M07-skills-slash-commands.md", '<polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>'),
    ("M08", "Obsidian", "personalize", "M08-obsidian.md", '<circle cx="12" cy="12" r="2"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><line x1="6.5" y1="6.5" x2="10.5" y2="10.5"/><line x1="17.5" y1="6.5" x2="13.5" y2="10.5"/><line x1="6.5" y1="17.5" x2="10.5" y2="13.5"/><line x1="17.5" y1="17.5" x2="13.5" y2="13.5"/>'),
    ("M09", "Projects, Folders, claude.md", "personalize", "M09-projects-folders-claudemd.md", '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>'),
    ("M10", "Connectors", "connect", "M10-connectors.md", '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>'),
    ("M11", "Office Add-ins", "connect", "M11-office-add-ins.md", '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>'),
    ("M12", "Scheduled Tasks + Routines", "automate", "M12-scheduled-tasks-routines.md", '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>'),
    ("M13", "GTD", "system", "M13-gtd-in-your-vault.md", '<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>'),
    ("M14", "Daily Command Center", "system", "M14-daily-command-center.md", '<rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/>'),
    ("M15", "Meeting Notes", "system", "M15-meeting-notes.md", '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>'),
    ("M16", "Collaboration & Shared Work", "system", "M16-collaboration.md", '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'),
]

PHASE_LABELS = {
    "foundation": "Foundation",
    "personalize": "Personalize",
    "connect": "Connect",
    "automate": "Automate",
    "system": "System",
}

def md_to_html(md_text: str) -> str:
    """Minimal markdown-to-HTML for the module bodies (we control the input)."""
    lines = md_text.split("\n")
    html = []
    in_list = False
    in_blockquote = False
    in_code = False
    list_type = None

    def close_list():
        nonlocal in_list, list_type
        if in_list:
            html.append(f"</{list_type}>")
            in_list = False
            list_type = None

    def close_quote():
        nonlocal in_blockquote
        if in_blockquote:
            html.append("</blockquote>")
            in_blockquote = False

    def esc(s: str) -> str:
        return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")

    for line in lines:
        # Inside a fenced code block: closing fence ends it; everything else is verbatim.
        if in_code:
            if line.strip().startswith("```"):
                html.append("</code></pre>")
                in_code = False
                continue
            html.append(esc(line))
            continue

        stripped = line.strip()
        # Open a fenced code block.
        if stripped.startswith("```"):
            close_list()
            close_quote()
            html.append("<pre><code>")
            in_code = True
            continue
        # Skip the first H1 (we have it in the hero)
        if stripped.startswith("# "):
            continue
        if stripped == "---":
            close_list()
            close_quote()
            continue
        # H2
        if stripped.startswith("## "):
            close_list()
            close_quote()
            content = stripped[3:]
            html.append(f"<h2>{inline(content)}</h2>")
            continue
        # H3
        if stripped.startswith("### "):
            close_list()
            close_quote()
            content = stripped[4:]
            html.append(f"<h3>{inline(content)}</h3>")
            continue
        # Blockquote
        if stripped.startswith("> "):
            close_list()
            if not in_blockquote:
                html.append("<blockquote>")
                in_blockquote = True
            html.append(inline(stripped[2:]))
            continue
        else:
            close_quote()
        # Unordered list
        if stripped.startswith("- "):
            if not in_list or list_type != "ul":
                close_list()
                html.append("<ul>")
                in_list = True
                list_type = "ul"
            html.append(f"<li>{inline(stripped[2:])}</li>")
            continue
        # Ordered list
        m = re.match(r"^(\d+)\. (.+)$", stripped)
        if m:
            if not in_list or list_type != "ol":
                close_list()
                html.append("<ol>")
                in_list = True
                list_type = "ol"
            html.append(f"<li>{inline(m.group(2))}</li>")
            continue
        # Empty line ends list
        if stripped == "":
            close_list()
            continue
        # Plain paragraph
        close_list()
        html.append(f"<p>{inline(stripped)}</p>")

    close_list()
    close_quote()
    if in_code:
        html.append("</code></pre>")
    return "\n".join(html)


def inline(text: str) -> str:
    """Inline formatting: bold, italic, code, links."""
    def _esc_code(m):
        body = m.group(1).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
        return f"<code>{body}</code>"
    # Inline code (HTML-escape contents so e.g. <work-folder> renders literally)
    text = re.sub(r"`([^`]+)`", _esc_code, text)
    # Bold
    text = re.sub(r"\*\*([^*]+)\*\*", r"<strong>\1</strong>", text)
    # Italic (single asterisk, careful)
    text = re.sub(r"(?<![\w*])\*([^*\n]+)\*(?![\w*])", r"<em>\1</em>", text)
    # Links
    text = re.sub(r"\[([^\]]+)\]\(([^)]+)\)", r'<a href="\2">\1</a>', text)
    return text


TEMPLATE = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{num} {title} — ExecAIDay</title>
<meta name="description" content="{title} — module {num} of the ExecAIDay Claude Cowork training workshop.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="styles.css">
</head>
<body>

<nav class="topnav">
  <div class="container topnav-inner">
    <div class="brand"><a href="index.html"><span class="brand-mark">●</span> ExecAIDay</a></div>
    <div class="nav-links">
      <a href="index.html">All modules</a>
    </div>
  </div>
</nav>

<header class="module-hero">
  <div class="container">
    <div class="module-hero-icon" style="background: var(--{phase}-soft); color: var(--{phase});">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">{icon}</svg>
    </div>
    <div class="eyebrow eyebrow-row">
      <span class="breadcrumb"><a href="index.html">All modules</a> &nbsp;/&nbsp; {phase_label}</span>
      <a class="hero-slides-link" href="slides/m{num_padded}.html">▶ View slide deck</a>
    </div>
    <h1>{num} — {title}</h1>
    <p class="lede">{lede}</p>
  </div>
</header>

<main class="content container">
{body}

  <div class="slides-cta">
    <a href="slides/m{num_padded}.html" class="slides-cta-link">
      <span class="slides-cta-label">Slide deck</span>
      <span class="slides-cta-title">View the {num} overview slides</span>
      <span class="slides-cta-meta">For presenting · keyboard arrows to navigate</span>
    </a>
  </div>

  <nav class="module-nav">
    {prev_link}
    {next_link}
  </nav>
</main>

<footer class="site-footer">
  <div class="container site-footer-inner">
    <div>ExecAIDay — premium Claude Cowork training for executives.</div>
    <div>The AI Guys BV · <a href="https://github.com/The-AI-Guys-BV/ExecAIDay-course">github</a></div>
  </div>
</footer>

</body>
</html>
"""


def lede_from_md(md: str) -> str:
    """Pull the 'Why this module matters' paragraph as the lede."""
    m = re.search(r"## Why this module matters\s*\n+([^\n#].*?)(?=\n##|\n---|$)", md, re.DOTALL)
    if m:
        text = m.group(1).strip().split("\n\n")[0].strip()
        return inline(text)
    return ""


def body_from_md(md: str) -> str:
    """Skip the Why-this-matters and What-you'll-do parts which we render in hero, render the rest."""
    # Strip the title heading (H1)
    md = re.sub(r"^# .+?\n", "", md, count=1)
    # Strip Why this matters (already in lede)
    md = re.sub(r"## Why this module matters[\s\S]*?(?=\n## )", "", md, count=1)
    # Strip the References section — it points to internal plugin paths, not useful on the web.
    md = re.sub(r"\n## References[\s\S]*$", "\n", md)
    return md_to_html(md)


def what_youll_do_from_md(md: str) -> str:
    """Pull the 'What you'll do' bullets, return as a <ul> string."""
    m = re.search(r"## What you'll do\s*\n+(.*?)(?=\n##|\n---)", md, re.DOTALL)
    if not m:
        return ""
    block = m.group(1).strip()
    items = []
    for line in block.split("\n"):
        line = line.strip()
        if line.startswith("- "):
            items.append(f"<li>{inline(line[2:])}</li>")
    if not items:
        return ""
    return "<ul>\n" + "\n".join(items) + "\n</ul>"


def try_this_from_md(md: str) -> str:
    """Pull the 'Try this' / 'Try these' section content as HTML."""
    m = re.search(r"## Try (?:this|these)[^\n]*\n+(.*?)(?=\n##|\n---|$)", md, re.DOTALL)
    if not m:
        return ""
    block = m.group(1).strip()
    # Render the first paragraph as the slide content; keep simple.
    paragraphs = [p.strip() for p in block.split("\n\n") if p.strip()]
    out = []
    for p in paragraphs[:2]:  # first two paragraphs at most
        if p.startswith("- ") or p.startswith("**"):
            out.append(f"<p>{inline(p)}</p>")
        elif p.startswith("```"):
            continue
        else:
            out.append(f"<p>{inline(p)}</p>")
    return "\n".join(out)


SLIDES_TEMPLATE = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{num} {title} — Slides — ExecAIDay</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../slides.css">
</head>
<body>

<div class="deck" data-deck>

  <section class="slide slide-title">
    <div class="slide-inner">
      <div class="title-icon" style="background: var(--{phase}-soft); color: var(--{phase});">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">{icon}</svg>
      </div>
      <div class="title-eyebrow">{phase_label}</div>
      <h1 class="title-num">{num}</h1>
      <h2 class="title-name">{title}</h2>
    </div>
  </section>

  <section class="slide slide-why">
    <div class="slide-inner">
      <div class="slide-eyebrow">Why this module matters</div>
      <p class="slide-lede">{lede}</p>
    </div>
  </section>

  <section class="slide slide-what">
    <div class="slide-inner">
      <div class="slide-eyebrow">What you'll do</div>
      <div class="slide-list">
        {what}
      </div>
    </div>
  </section>

  <section class="slide slide-try">
    <div class="slide-inner">
      <div class="slide-eyebrow">Try this</div>
      <div class="slide-try-body">
        {try_this}
      </div>
    </div>
  </section>

</div>

<div class="deck-chrome">
  <a href="../m{num_padded}.html" class="deck-back">← Back to {num}</a>
  <div class="deck-counter"><span data-current>1</span> / <span data-total>4</span></div>
  <div class="deck-nav">
    <button data-prev aria-label="Previous slide">←</button>
    <button data-next aria-label="Next slide">→</button>
  </div>
</div>

<script>
(function() {{
  const slides = document.querySelectorAll('.slide');
  const total = slides.length;
  document.querySelector('[data-total]').textContent = total;
  let idx = 0;
  const counter = document.querySelector('[data-current]');
  function show(n) {{
    idx = Math.max(0, Math.min(total - 1, n));
    slides.forEach((s, i) => s.classList.toggle('active', i === idx));
    counter.textContent = idx + 1;
  }}
  show(0);
  document.querySelector('[data-prev]').addEventListener('click', () => show(idx - 1));
  document.querySelector('[data-next]').addEventListener('click', () => show(idx + 1));
  document.addEventListener('keydown', (e) => {{
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {{ e.preventDefault(); show(idx + 1); }}
    if (e.key === 'ArrowLeft' || e.key === 'PageUp') {{ e.preventDefault(); show(idx - 1); }}
    if (e.key === 'Home') {{ show(0); }}
    if (e.key === 'End') {{ show(total - 1); }}
  }});
}})();
</script>

</body>
</html>
"""


def main():
    for i, (num, title, phase, fname, icon) in enumerate(MODULES):
        md_path = MOD_DIR / fname
        md = md_path.read_text(encoding="utf-8")
        lede = lede_from_md(md)
        body = body_from_md(md)

        prev_mod = MODULES[i-1] if i > 0 else None
        next_mod = MODULES[i+1] if i < len(MODULES) - 1 else None

        if prev_mod:
            prev_link = f'<a class="nav-link prev" href="m{int(prev_mod[0][1:]):02d}.html"><div class="nav-link-label">← Previous</div><div class="nav-link-title">{prev_mod[0]} — {prev_mod[1]}</div></a>'
        else:
            prev_link = '<div class="nav-link disabled"><div class="nav-link-label">Start</div><div class="nav-link-title">First module</div></div>'

        if next_mod:
            next_link = f'<a class="nav-link next" href="m{int(next_mod[0][1:]):02d}.html"><div class="nav-link-label">Next →</div><div class="nav-link-title">{next_mod[0]} — {next_mod[1]}</div></a>'
        else:
            next_link = '<a class="nav-link next" href="index.html"><div class="nav-link-label">Course complete</div><div class="nav-link-title">Back to overview</div></a>'

        num_padded = f"{int(num[1:]):02d}"
        html = TEMPLATE.format(
            num=num,
            num_padded=num_padded,
            title=title,
            phase=phase,
            phase_label=PHASE_LABELS[phase],
            icon=icon,
            lede=lede,
            body=body,
            prev_link=prev_link,
            next_link=next_link,
        )

        out_path = OUT / f"m{num_padded}.html"
        out_path.write_text(html, encoding="utf-8")
        print(f"Wrote {out_path.name}")

        # Slide deck for the module.
        md = md_path.read_text(encoding="utf-8")
        what = what_youll_do_from_md(md)
        try_this = try_this_from_md(md)
        slides_html = SLIDES_TEMPLATE.format(
            num=num,
            num_padded=num_padded,
            title=title,
            phase=phase,
            phase_label=PHASE_LABELS[phase],
            icon=icon,
            lede=lede,
            what=what,
            try_this=try_this,
        )
        slides_dir = OUT / "slides"
        slides_dir.mkdir(exist_ok=True)
        slides_path = slides_dir / f"m{num_padded}.html"
        slides_path.write_text(slides_html, encoding="utf-8")
        print(f"Wrote slides/{slides_path.name}")


if __name__ == "__main__":
    main()
