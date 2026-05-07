#!/usr/bin/env python3
"""Build docs/ from sections/ — v2 5-section structure."""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent
SECTIONS_DIR = ROOT / "sections"
OUT_DIR = ROOT / "docs"

SECTIONS = [
    ("S1-basics.md", "s1-basics.html", "1", "s1"),
    ("S2-leverage.md", "s2-leverage.html", "2", "s2"),
    ("S3-knowledge.md", "s3-knowledge.html", "3", "s3"),
    ("S4-cockpit.md", "s4-cockpit.html", "4", "s4"),
    ("S5-aftercare.md", "s5-aftercare.html", "5", "s5"),
]

GLOSSARY = ("glossary.md", "glossary.html")


def parse_frontmatter(text):
    m = re.match(r"^---\n(.*?)\n---\n+(.*)$", text, re.DOTALL)
    if not m:
        return {}, text
    front_block = m.group(1)
    body = m.group(2)
    front = {}
    for line in front_block.split("\n"):
        if ":" in line:
            k, v = line.split(":", 1)
            front[k.strip()] = v.strip()
    return front, body


def inline(text):
    def _esc_code(m):
        body = m.group(1).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
        return f"<code>{body}</code>"
    text = re.sub(r"`([^`]+)`", _esc_code, text)
    text = re.sub(r"\*\*([^*]+)\*\*", r"<strong>\1</strong>", text)
    text = re.sub(r"(?<![\w*])\*([^*\n]+)\*(?![\w*])", r"<em>\1</em>", text)
    text = re.sub(r"\[([^\]]+)\]\(([^)]+)\)", r'<a href="\2">\1</a>', text)
    return text


def slugify(text):
    text = re.sub(r"<[^>]+>", "", text)
    text = text.lower()
    text = re.sub(r"[^a-z0-9\s-]", "", text)
    text = re.sub(r"\s+", "-", text.strip())
    return text


def md_to_html(md_text, collect_h2=False):
    """Minimal markdown to HTML. Returns (html, h2_anchors)."""
    lines = md_text.split("\n")
    html = []
    h2_anchors = []
    in_list = False
    in_code = False
    in_blockquote = False
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

    def esc(s):
        return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")

    for line in lines:
        if in_code:
            if line.strip().startswith("```"):
                html.append("</code></pre>")
                in_code = False
                continue
            html.append(esc(line))
            continue

        stripped = line.strip()

        if stripped.startswith("```"):
            close_list()
            close_quote()
            html.append("<pre><code>")
            in_code = True
            continue

        if stripped.startswith("# "):
            continue

        if stripped == "---":
            close_list()
            close_quote()
            continue

        if stripped.startswith("## "):
            close_list()
            close_quote()
            content = stripped[3:]
            anchor = slugify(content)
            if collect_h2:
                h2_anchors.append((anchor, content))
            html.append(f'<h2 id="{anchor}">{inline(content)}</h2>')
            continue

        if stripped.startswith("### "):
            close_list()
            close_quote()
            content = stripped[4:]
            anchor = slugify(content)
            html.append(f'<h3 id="{anchor}">{inline(content)}</h3>')
            continue

        if stripped.startswith("> "):
            close_list()
            if not in_blockquote:
                html.append("<blockquote>")
                in_blockquote = True
            html.append(f"<p>{inline(stripped[2:])}</p>")
            continue
        else:
            close_quote()

        if stripped.startswith("- "):
            if not in_list or list_type != "ul":
                close_list()
                html.append("<ul>")
                in_list = True
                list_type = "ul"
            html.append(f"<li>{inline(stripped[2:])}</li>")
            continue

        m = re.match(r"^(\d+)\. (.+)$", stripped)
        if m:
            if not in_list or list_type != "ol":
                close_list()
                html.append("<ol>")
                in_list = True
                list_type = "ol"
            html.append(f"<li>{inline(m.group(2))}</li>")
            continue

        if stripped == "":
            close_list()
            continue

        close_list()
        html.append(f"<p>{inline(stripped)}</p>")

    close_list()
    close_quote()
    if in_code:
        html.append("</code></pre>")
    return "\n".join(html), h2_anchors


SECTION_TEMPLATE = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Section {num} — {title} — ExecAIDay</title>
<meta name="description" content="{theme}">
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
      <a href="index.html">All sections</a>
      <a href="glossary.html">Glossary</a>
    </div>
  </div>
</nav>

<header class="section-hero {sclass}">
  <div class="container">
    <div class="eyebrow eyebrow-row">
      <span><a href="index.html">All sections</a> &nbsp;/&nbsp; Section {num}</span>
      <a class="hero-slides-link" href="slides/{slide_path}">▶ View slide deck</a>
    </div>
    <h1>{title}</h1>
    <p class="theme">{theme}</p>
    <div class="walkout"><strong>Walk-out</strong>{walkout}</div>
  </div>
</header>

<div class="section-page">
  <main class="content">
    {body}
    <nav class="section-nav">
      {prev_link}
      {next_link}
    </nav>
  </main>
  <aside class="section-toc">
    <h3>In this section</h3>
    <ol>
      {toc}
    </ol>
  </aside>
</div>

<footer class="site-footer">
  <div class="container site-footer-inner">
    <div>ExecAIDay — Claude Cowork training for executives.</div>
    <div>Tijn van der Zant, PhD · The AI Guys BV</div>
  </div>
</footer>

</body>
</html>
"""

GLOSSARY_TEMPLATE = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Glossary — ExecAIDay</title>
<meta name="description" content="Glossary for the ExecAIDay course. Alphabetical, with section pointers.">
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
      <a href="index.html">All sections</a>
    </div>
  </div>
</nav>

<header class="section-hero">
  <div class="container">
    <div class="eyebrow">
      <span><a href="index.html">All sections</a> &nbsp;/&nbsp; Glossary</span>
    </div>
    <h1>Glossary</h1>
    <p class="theme">{theme}</p>
  </div>
</header>

<main class="content container">
  {body}
</main>

<footer class="site-footer">
  <div class="container site-footer-inner">
    <div>ExecAIDay — Claude Cowork training for executives.</div>
    <div>Tijn van der Zant, PhD · The AI Guys BV</div>
  </div>
</footer>

</body>
</html>
"""


def build_section(idx, src, out, num, sclass):
    md_text = (SECTIONS_DIR / src).read_text()
    front, body = parse_frontmatter(md_text)

    body_html, h2s = md_to_html(body, collect_h2=True)

    toc = "\n      ".join(
        f'<li><a href="#{anchor}">{inline(label)}</a></li>'
        for anchor, label in h2s
    )

    prev_link = ""
    next_link = ""
    if idx > 0:
        prev_src, prev_out, prev_num, _ = SECTIONS[idx - 1]
        prev_front, _ = parse_frontmatter((SECTIONS_DIR / prev_src).read_text())
        prev_link = f'''<a href="{prev_out}" class="prev">
        <div class="label">Previous</div>
        <div class="title">Section {prev_num} — {prev_front.get("title", "").split("—")[0].strip()}</div>
      </a>'''
    else:
        prev_link = '<a href="index.html" class="prev"><div class="label">←</div><div class="title">All sections</div></a>'

    if idx < len(SECTIONS) - 1:
        next_src, next_out, next_num, _ = SECTIONS[idx + 1]
        next_front, _ = parse_frontmatter((SECTIONS_DIR / next_src).read_text())
        next_link = f'''<a href="{next_out}" class="next">
        <div class="label">Next</div>
        <div class="title">Section {next_num} — {next_front.get("title", "").split("—")[0].strip()}</div>
      </a>'''
    else:
        next_link = '<a href="glossary.html" class="next"><div class="label">→</div><div class="title">Glossary</div></a>'

    slide_filename = f"s{num}-{Path(out).stem.split('-',1)[1]}.html"
    rendered = SECTION_TEMPLATE.format(
        num=num,
        sclass=sclass,
        title=front.get("title", "").split("—")[-1].strip() if "—" in front.get("title", "") else front.get("title", ""),
        theme=front.get("theme", ""),
        walkout=front.get("walkout", ""),
        body=body_html,
        toc=toc,
        prev_link=prev_link,
        next_link=next_link,
        slide_path=slide_filename,
    )
    (OUT_DIR / out).write_text(rendered)
    print(f"Wrote {out}")


SLIDE_DECK_TEMPLATE = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Section {num} — {title} — Slides — ExecAIDay</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../slides.css">
</head>
<body>

<div class="deck" data-deck>
{slides}
</div>

<div class="deck-chrome">
  <a href="../{section_html}" class="deck-back">← Back to Section {num}</a>
  <div class="deck-counter"><span data-current>1</span> / <span data-total>1</span></div>
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
    if (history.replaceState) history.replaceState(null, '', '#' + (idx + 1));
  }}
  const initial = parseInt((location.hash || '#1').slice(1), 10) - 1;
  show(isNaN(initial) ? 0 : initial);
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


def split_into_slide_chunks(body):
    """Walk the markdown body, split into chunks bounded by h2 and h3.
    Each chunk = (level, heading_text, body_lines)
    level is 'h2' or 'h3'. Body_lines is the markdown lines between this heading and the next h2/h3.
    """
    chunks = []
    current_h2_text = None
    current_level = None
    current_heading = None
    current_lines = []

    for line in body.split("\n"):
        stripped = line.strip()
        if stripped.startswith("## "):
            if current_heading is not None:
                chunks.append((current_level, current_h2_text, current_heading, current_lines))
            current_h2_text = stripped[3:]
            current_level = "h2"
            current_heading = stripped[3:]
            current_lines = []
            continue
        if stripped.startswith("### "):
            if current_heading is not None:
                chunks.append((current_level, current_h2_text, current_heading, current_lines))
            current_level = "h3"
            current_heading = stripped[4:]
            current_lines = []
            continue
        current_lines.append(line)

    if current_heading is not None:
        chunks.append((current_level, current_h2_text, current_heading, current_lines))
    return chunks


def slide_html_from_chunk(chunk, sclass):
    """Render one chunk as one slide section.
    h2 with body → topic-intro slide.
    h2 without body → topic divider slide (announcement of the topic before its h3 sub-steps).
    h3 → step slide.
    """
    level, h2_parent, heading, lines = chunk
    body_md = "\n".join(lines).strip()
    body_html, _ = md_to_html(body_md) if body_md else ("", [])

    if level == "h2":
        if body_md:
            return f'''  <section class="slide slide-section">
    <div class="slide-inner">
      <div class="slide-eyebrow">Topic</div>
      <h3 class="slide-section-subtitle">{inline(heading)}</h3>
      <div class="slide-section-body">
        {body_html}
      </div>
    </div>
  </section>'''
        else:
            return f'''  <section class="slide slide-divider">
    <div class="slide-inner">
      <div class="slide-eyebrow">Topic</div>
      <h2 class="slide-divider-title">{inline(heading)}</h2>
    </div>
  </section>'''
    else:
        eyebrow = inline(h2_parent) if h2_parent else "Step"
        return f'''  <section class="slide slide-section">
    <div class="slide-inner">
      <div class="slide-eyebrow">{eyebrow}</div>
      <h3 class="slide-section-subtitle">{inline(heading)}</h3>
      <div class="slide-section-body">
        {body_html}
      </div>
    </div>
  </section>'''


def build_slide_deck(idx, src, section_html, num, sclass):
    md_text = (SECTIONS_DIR / src).read_text()
    front, body = parse_frontmatter(md_text)

    title_full = front.get("title", "")
    title_only = title_full.split("—", 1)[-1].strip() if "—" in title_full else title_full
    theme = front.get("theme", "")
    walkout = front.get("walkout", "")

    slides = []

    # Title slide
    slides.append(f'''  <section class="slide slide-title">
    <div class="slide-inner">
      <div class="title-icon" style="background: var(--{sclass}-soft); color: var(--{sclass});">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/></svg>
      </div>
      <div class="title-eyebrow">Section {num}</div>
      <h1 class="title-num">S{num}</h1>
      <h2 class="title-name">{inline(title_only)}</h2>
      <p class="title-outcome">{inline(theme)}</p>
    </div>
  </section>''')

    # Walk-out slide
    slides.append(f'''  <section class="slide slide-bigidea">
    <div class="slide-inner">
      <div class="slide-eyebrow">Walk-out</div>
      <p class="slide-bigidea-p">{inline(walkout)}</p>
    </div>
  </section>''')

    # Body chunks
    chunks = split_into_slide_chunks(body)
    for chunk in chunks:
        slides.append(slide_html_from_chunk(chunk, sclass))

    # Next-section pointer
    if idx < len(SECTIONS) - 1:
        next_src = SECTIONS[idx + 1][0]
        next_html = SECTIONS[idx + 1][1]
        next_num = SECTIONS[idx + 1][2]
        next_front, _ = parse_frontmatter((SECTIONS_DIR / next_src).read_text())
        next_title = next_front.get("title", "").split("—", 1)[-1].strip()
        slides.append(f'''  <section class="slide slide-next">
    <div class="slide-inner">
      <div class="slide-eyebrow">What's next</div>
      <h3 class="slide-next-subtitle">Section {next_num} — {inline(next_title)}</h3>
      <p class="slide-next-meta">Open the <a href="../{next_html}">Section {next_num} page</a> or its <a href="s{next_num}-{Path(next_html).stem.split("-",1)[1]}.html">slide deck</a>.</p>
    </div>
  </section>''')
    else:
        slides.append('''  <section class="slide slide-next">
    <div class="slide-inner">
      <div class="slide-eyebrow">End of section 5</div>
      <h3 class="slide-next-subtitle">That's the course.</h3>
      <p class="slide-next-meta">Browse the <a href="../glossary.html">glossary</a> or revisit any section from the <a href="../index.html">cover page</a>.</p>
    </div>
  </section>''')

    rendered = SLIDE_DECK_TEMPLATE.format(
        num=num,
        title=inline(title_only),
        section_html=section_html,
        slides="\n".join(slides),
    )

    slides_dir = OUT_DIR / "slides"
    slides_dir.mkdir(exist_ok=True)
    out_path = slides_dir / f"s{num}-{Path(section_html).stem.split('-',1)[1]}.html"
    out_path.write_text(rendered)
    print(f"Wrote {out_path.relative_to(OUT_DIR)}")


def build_glossary():
    md_text = (SECTIONS_DIR / GLOSSARY[0]).read_text()
    front, body = parse_frontmatter(md_text)
    body_html, _ = md_to_html(body)

    body_html = re.sub(
        r'<h2 id="([a-z])">[^<]*</h2>',
        lambda m: f'<h2 class="glossary-letter" id="{m.group(1)}">{m.group(1).upper()}</h2>',
        body_html,
    )

    rendered = GLOSSARY_TEMPLATE.format(
        theme=front.get("theme", ""),
        body=body_html,
    )
    (OUT_DIR / GLOSSARY[1]).write_text(rendered)
    print(f"Wrote {GLOSSARY[1]}")


def main():
    OUT_DIR.mkdir(exist_ok=True)
    for idx, (src, out, num, sclass) in enumerate(SECTIONS):
        build_section(idx, src, out, num, sclass)
        build_slide_deck(idx, src, out, num, sclass)
    build_glossary()


if __name__ == "__main__":
    main()
