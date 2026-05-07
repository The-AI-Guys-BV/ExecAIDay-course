# Handoff — ExecAIDay course v2

A handoff for the next Claude Code session to continue work on the ExecAIDay course. Read this file, then `CLAUDE.md` (standing directives), then sample one section under `sections/` to feel the voice. Don't start building until you've done all three.

---

## Current state (as of 2026-05-07)

The v2 rebuild is **committed and live in the repo**. Five recent commits cover the restructure:

| Commit | What |
|---|---|
| `6e19181` | Archive v1 (17-module course) to `course_1/`; add `CLAUDE.md` |
| `aa2649e` | v2 first cut — 5 section sources, build script, cover, generated section pages |
| `a85ecc5` | Critique pass — fact-check vs current state of tools, voice/vocabulary scrubs, detail-gap fills |
| `9e2583c` | Slide decks — one extensive deck per section (189 slides total), generated from the same section sources |

The site is published from `docs/`. GitHub Pages serves whatever's there.

### What exists now

- **`sections/`** — five markdown source files plus glossary. This is where you edit content.
  - `S1-basics.md` — Section 1 (Cowork in daily work, no plugins/connectors/add-ins)
  - `S2-leverage.md` — Section 2 (chief-of-staff brief, voice, connectors, skills, Office add-ins)
  - `S3-knowledge.md` — Section 3 (vault, Obsidian, GTD, mobile capture, work folder, layered claude.md)
  - `S4-cockpit.md` — Section 4 (meeting capture, artifacts, the cockpit, scheduled tasks, collaboration)
  - `S5-aftercare.md` — Section 5 (quarterly check-in, on-demand support)
  - `glossary.md` — alphabetical, one-line definitions, with section pointers
- **`build.py`** — generator. Reads `sections/*.md`, writes `docs/sN-name.html`, `docs/glossary.html`, and `docs/slides/sN-name.html`.
- **`docs/`** — published site.
  - `index.html` — hand-written cover (5 section cards + glossary card). The generator does *not* touch this; edit by hand.
  - `s1-basics.html` … `s5-aftercare.html` — generated section pages with sticky TOC.
  - `glossary.html` — generated alphabetical glossary.
  - `slides/s1-basics.html` … `slides/s5-aftercare.html` — generated slide decks (189 slides total).
  - `styles.css` — main site stylesheet.
  - `slides.css` — slide-deck stylesheet.
- **`references/`** — workshop reference articles (RCTFC framework, anti-patterns catalogue, GTD vault layout, etc.). Carry forward from v1; mostly intact.
- **`templates/`** — vault starter, work-folder starter, project-folder template. Carry forward from v1.
- **`skills/`** — 26 GTD skills from the (retired) v1 plugin. **Do not touch without Tijn's go.** Possible future role under Notion+Skills architecture.
- **`course_1/`** — frozen archive of the v1 17-module course. Reference only; do not modify.
- **`.claude-plugin/`** — retired plugin manifest. Left in place; do not modify without Tijn's go.

### Build pipeline

```
python3 build.py
```

- Parses each section markdown's frontmatter (title, theme, walkout) and body.
- Writes the section HTML page (long-scroll, sticky TOC).
- Writes the matching slide deck (one slide per `## topic` and per `### sub-step`).
- Writes the glossary HTML.
- The cover (`docs/index.html`) is hand-written; the generator skips it.

No JS framework, no test harness, no webpack/vite/anything else. It's static HTML + CSS + a tiny inline script per slide deck for keyboard navigation.

### Slide-deck counts

| Section | Slides |
|---|---|
| S1 Basics | 41 |
| S2 Leverage | 52 |
| S3 Knowledge & GTD | 44 |
| S4 Cockpit | 31 |
| S5 Aftercare | 21 |

Each slide deck is one HTML file with `<section class="slide">` elements, navigated by arrow keys / space / PageUp/Down / Home/End. URL hash tracks current slide.

---

## Hard constraints (pointer)

These live in `CLAUDE.md`. **Read it first.** Summary of the most-violated ones:

- HTML + CSS only. No JS framework. No build pipeline beyond `build.py`.
- No plugin architecture. The course is HTML pages; no `/teach`, no marketplace install.
- Don't say "markdown files" / ".md" / "MD" in user-facing prose. Use "files" or "vault files."
- No homework, no final exam, no graduation deliverable, no opening/closing rituals.
- No comments on workshop pacing or exec psychology. No invented behavioral narratives about participants or assistants.
- Public name: "Tijn van der Zant, PhD" / "Dr. van der Zant." Not "Doc Tony" — that's private.
- Sandbox cannot push. After each commit, give Tijn the one-line `cd ~/Code/ExecAIDay-course && git push`.
- Don't make structural decisions without Tijn's go. Content edits within a locked structure are fine.

The five-section structure is **locked** (see Decision log appendix at the bottom of this file). Don't restructure.

---

## Open follow-ups (priority-ordered)

### 1. Tijn's editing pass on content voice

The five section sources are first-cut content. Voice is generally tight but Tijn will want to read through and make it sound more like him in places. Help with this if asked, but don't edit voice unilaterally — Tijn's voice is specific and the wrong rewrite risks making prose feel AI-flavored again.

### 2. Verify external claims that are likely to drift

Already fact-checked once (commit `a85ecc5`) but worth re-verifying every quarter or before each cohort:

- **Voice tools** (S2 §4): Wispr Flow / Superwhisper / Voibe / FloWstay platforms and pricing. Wispr Flow added Android in early 2026, may keep evolving.
- **Meeting capture tools** (S4 §1): Granola is currently Mac/Windows/iOS — was Mac-only as recently as 2025. Bluedot, Fellow are claimed but less verified than Granola.
- **Office add-ins** (S2 §8): "Claude by Anthropic" in AppSource. Word add-in launched April 2026; whole suite is current.
- **Cowork UI labels** (S1, S2, S3): Customize / Personal plugins / Cowork Projects / Folders. Cowork is a 2026 product evolving fast — labels may move.
- **Connector list** (S2 §5): I name Gmail, M365, Calendar, Drive, Slack, Salesforce, Linear, Notion, Asana, HubSpot, Jira, Confluence, GitHub. The first five are very stable; the rest worth a check before each cohort.
- **`/skill-creator`** (S2 §7): I assume this is a Cowork built-in skill. If Cowork ships skills under different names, swap.

Use WebSearch with "[tool] 2026" queries; the prior pass is in commit `a85ecc5`.

### 3. The Dispatch tool placeholder (S3 §7)

Section 3 names "Dispatch" as the mobile capture app. This was the working name in v1. Verify what the workshop is currently using; it may have changed. The HANDOFF in commit `6e19181`'s era used "Dispatch" but the prose hedges with *"or whichever current tool the workshop is using this season."* If the workshop has settled on a specific app, name it.

### 4. The "workshop tech team" framing

The course assumes a tech team installs everything ahead of the workshop and is on call during it. This framing is implicit throughout. Worth asking Tijn whether he wants:
- A separate `before-the-workshop.html` page listing what gets installed (so the section pages can stop saying "your assistant has placed…" repeatedly).
- Or to keep the current pattern (assistant references inline).

### 5. Slide-deck quality pass

The decks are auto-generated and structurally sound, but worth opening one in a browser to check:
- Long h3 sub-steps (e.g., S1 §8 capstone with 6 numbered steps inside) — does the body fit comfortably on one slide or scroll awkwardly?
- The "topic divider" slides — visually right, or do they feel sparse?
- Code/prompt blocks at presentation distance — readable in a workshop room?

If anything looks off, the fix is in `docs/slides.css` (mostly inherited from v1) plus the slide CSS additions at the bottom of `docs/styles.css`.

### 6. The `course_1/` directory and GitHub Pages

When you push, GitHub Pages will serve `docs/`. The archived v1 site lives at `course_1/docs/` and is **not** published. If anyone wants the v1 site live (e.g., as `execaiday.com/v1/`), it'd need to be moved into `docs/v1/` or published via a separate Pages config. Not done yet; ask Tijn whether this matters.

### 7. Update or remove `.claude-plugin/`

The plugin architecture is retired but `.claude-plugin/plugin.json` and `marketplace.json` are still in the repo (version 0.3.0). They don't break anything. If Tijn wants to formally retire them: delete the directory; if he wants to repurpose for a future Notion+Skills release: update version + scope. Don't decide alone.

---

## Known issues / minor todos

These were noted but not blocking. Fix opportunistically.

- **Anchor slug collisions in slides.** The slide generator slugifies headings; if two h3s have the same text (e.g., "Try this" appearing in multiple sections), anchors collide. Currently no duplicates, but worth knowing if you add content.
- **Multi-paragraph blockquotes.** The markdown converter handles single-line blockquotes well; multi-line `>` blocks get rendered as separate `<blockquote>` opens (each line becomes its own quote). Not used in current content but a gotcha.
- **Image support.** The markdown converter doesn't handle `![alt](url)` image syntax. None used currently. Add to `inline()` in `build.py` if you need them.
- **Section 1 §8 capstone is long.** Six-step capstone produces a long slide. Acceptable as-is; if you want to break it into multiple slides, split each numbered step into its own h3.

---

## Quick-start checklist for the next session

1. **Read `CLAUDE.md`** for hard constraints. Don't skip — many constraints are non-obvious.
2. **Read `sections/S1-basics.md`** to feel the voice. Open `docs/s1-basics.html` and `docs/slides/s1-basics.html` in a browser to see what it produces.
3. **Run `python3 build.py`** to confirm the build works on your machine.
4. **Ask Tijn what's most important right now.** Don't infer scope. Items 1-7 above are options, not a queue.
5. **Edit `sections/*.md` and re-run `build.py`** to make changes. Never hand-edit `docs/sN-name.html` — your edit will be overwritten. The cover (`docs/index.html`) is hand-written, that one is OK to edit directly.
6. **Commit early and often.** After each material change, commit and remind Tijn to push (`cd ~/Code/ExecAIDay-course && git push`).

---

## Working pattern

- Open by reading this file, `CLAUDE.md`, and at least one section source file.
- Ask Tijn before structural changes. Don't infer scope.
- Surface real trade-offs. Don't sandbag.
- Keep responses tight. C-level audience downstream.
- Commit after each material change. Always provide the push command (sandbox can't push).
- When fact-checking, cite sources. WebSearch is the right tool; bundle related queries together.

---

## Appendix — Decision log (v1 → v2 restructure, 2026-04)

The five-section structure was locked on 2026-04-29 after a restructure decision pass. Below is the original handoff content from that pass — preserved here so future agents don't reopen settled questions.

### The 5-section structure (locked)

**Section 1 — Basics: Claude Cowork in daily work.** Just Claude installed. No plugins, no connectors, no Office add-ins.

Topics:
1. Frame: Cowork vs ChatGPT.
2. Surface tour (Customize, Personal plugins, Cowork Projects, chat box).
3. First prompts; concepts land naturally (models, session memory, context, tokens).
4. Trust calibration — hallucination demo. Concepts: hallucination, knowledge cutoff, overconfidence.
5. Folders + document ops via Cowork file access (PDF / Word / Excel / PPT).
6. Prompt engineering crash course — R-C-T-F-C, 2–3 worked examples, 2–3 worst anti-patterns.
7. Browser + Chrome extension.
8. **Capstone:** branded PowerPoint via Cowork file ops + browser, no add-ins.

Walk-out: comfortable in Cowork, branded deliverable shipped, trust calibrated.

**Section 2 — Leveraging Claude in your work.** Personalize. Connect. Extend.

Topics:
1. Chief-of-staff brief — interview, paste into Project instructions. Recognition-shock moment.
2. Roles — when to use, when overdoing.
3. Anti-patterns deep dive — full catalogue.
4. Voice tools (Wispr / Superwhisper / Voibe / FloWstay).
5. Connectors / MCP — Gmail/M365, Calendar, Drive, Slack, custom apps.
6. Email drafts (with connectors live).
7. Skills + slash commands — install workshop skill pack, demo built-ins, run `/skill-creator`.
8. Office add-ins — Word/Excel/PowerPoint sidebars, branded-deck workflow inside the sidebars, shared cross-app context.

Walk-out: Cowork knows them; live data flowing; skills running; Office sidebars wired.

**Section 3 — Knowledge base & GTD system.** Vault formally set up here.

Topics:
1. Vault setup — Obsidian opens on the vault folder.
2. Obsidian basics — viewer; Cowork is the active layer; same files.
3. Connect Cowork to vault — first Cowork Project ("Vault") that mounts the vault.
4. Re-home the brief — `<vault>/About Me.md`, `claude.md` pointer, `about-me/long-form.md`, `about-me/writing-rules.md`, `References/`.
5. GTD layer — capture, process-inbox, projects, waiting-for, weekly review.
6. Mobile capture / Dispatch.
7. Work folder + `/new-project` — second Cowork Project; scaffold; tailored `claude.md`; matching GTD project entry.
8. Layered `claude.md` — closer-to-the-file wins.
9. Complete data link — all wired together.

Walk-out: full architecture in place.

**Section 4 — Meetings + Artifacts & dashboards (cockpit).** Output and automation.

Topics:
1. Meeting capture — Granola/Bluedot/Fellow → Claude → notes in vault → commitments to Inbox → follow-up drafts.
2. Meeting prep — `/meeting-prep` for a real upcoming meeting.
3. Artifacts — refresh-on-open. Small example, then useful one.
4. Personalised CEO cockpit — flagship artifact. Calendar / urgent emails / drafts / Slack mentions / yesterday's reflection / GTD priorities. Refreshes every open.
5. Scheduled tasks + routines — Mondays at 7:30, daily 8am, Fridays at 4pm.
6. Collaboration & shared work — shared Projects, multi-connector team queries, handoff patterns.

Walk-out: cockpit opens every morning; meetings captured; routines running; team patterns understood.

**Section 5 — Aftercare & follow-up.** Recurring, not a sequence.

Topics:
1. Quarterly check-in — review what's working/stale; refresh brief; prune References; retire skills.
2. Update existing setup — hands-on tweaks with the workshop team or self-service.
3. Build new connectors when new tools enter the stack.
4. On-demand support.

Walk-out: a system that survives and evolves.

**Glossary** — alphabetical, one-line definitions, section pointers.

### Locked placement decisions

| Item | Placement | Reasoning |
|---|---|---|
| Vault setup | Section 3 | Vault belongs where the knowledge architecture is taught; Section 1 stays "just Claude installed." |
| Chief of staff brief | Section 2 (Cowork native instructions, then re-homed in Section 3) | Brief is leverage; vault is knowledge architecture. |
| Office add-ins | Section 2 | Add-ins are extra surface area like connectors. Section 1's PPT happens via Cowork file ops alone. |
| Skills + slash commands | Section 2 | Skills are leverage moves. |
| Browser + Chrome | Section 1 | Second basic Claude surface, low setup. |
| Scheduled tasks + routines | Section 4 | Output theme. |
| Mobile capture / Dispatch | Section 3 | GTD capture flow. |
| Collaboration & shared work | Section 4 | Tijn's pick — alongside meetings + cockpit. |
| Work folder + `/new-project` | Section 3 | Same architecture as vault; teach together. |
| Hallucination demo | Section 1 | Trust calibration is foundational. |
| 18 basic concepts | Distributed in-context + glossary | Don't lecture an 18-item list. |
| "Plans" feature concept | Dropped from product surface mention; Anthropic plan tiers (Free/Pro/Max/Team/Enterprise) named where relevant. | Tijn dropped the "Plans" UI concept — never wanted it. |
