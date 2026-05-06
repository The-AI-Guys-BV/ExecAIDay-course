# ExecAIDay Course

Premium in-person Claude Cowork training workshop for C-level executives, taught by Tijn van der Zant, PhD ([The AI Guys BV](https://theaiguys.eu)).

Course content is published as a static HTML site at [execaiday.com](https://execaiday.com).

## What's here

- **`docs/`** — the static site. Cover (`index.html`), five section pages (`s1-basics.html` … `s5-aftercare.html`), and a `glossary.html`.
- **`sections/`** — section source files in plain markdown. Each section is one file. Edit these; run `python3 build.py` to regenerate the HTML.
- **`build.py`** — the generator. Reads `sections/`, writes `docs/sX-name.html` and `docs/glossary.html`.
- **`references/`** — reference articles used during the workshop (R-C-T-F-C framework, 18 basic concepts, GTD vault layout, anti-patterns, etc.).
- **`templates/`** — starter content distributed at the workshop: a vault, a work folder, and a project folder template.
- **`skills/`** — Cowork skills used during the workshop. Currently held over from v1; future role under review.
- **`course_1/`** — frozen archive of the v1 17-module course. Reference only; do not modify.

## The five sections

1. **Basics** — Claude Cowork in daily work. Just Claude installed. No plugins, connectors, or Office add-ins.
2. **Leverage** — personalise Claude, connect to live data, extend into Word/Excel/PowerPoint.
3. **Knowledge & GTD** — vault on disk, GTD layer, mobile capture, work folder, layered `claude.md`.
4. **Cockpit** — meeting capture, `/meeting-prep`, refreshable artifacts, the personalised CEO cockpit, scheduled routines, team patterns.
5. **Aftercare** — quarterly check-ins, hands-on tweaks, new connectors, on-demand support.

Plus a **glossary** — alphabetical one-line definitions, with section pointers.

## Building the site

```
python3 build.py
```

Outputs `docs/s1-basics.html` … `docs/s5-aftercare.html` and `docs/glossary.html`. The cover page (`docs/index.html`) is hand-written; the generator does not touch it.

## Audience

C-suite, founders, partners, GMs. Heavy email and calendar load. Decision-density work. People with too many meetings, too much email, and a small window to install something that genuinely changes how the day works.

## License

Proprietary. Workshop materials are licensed for use by ExecAIDay workshop participants only. Distribution outside the workshop requires written permission.
