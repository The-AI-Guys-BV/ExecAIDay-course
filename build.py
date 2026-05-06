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
    <div class="eyebrow">
      <span><a href="index.html">All sections</a> &nbsp;/&nbsp; Section {num}</span>
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
    )
    (OUT_DIR / out).write_text(rendered)
    print(f"Wrote {out}")


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
    build_glossary()


if __name__ == "__main__":
    main()
