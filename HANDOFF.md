# Handoff — ExecAIDay course v2 restructure

## What this is

A handoff for a Claude Code session picking up the ExecAIDay course rebuild. The course is being restructured from **17 small modules → 5 themed sections** ("slow down a lot"). The 17-module version is fully built in `docs/`; nearly all of it will be replaced. This document captures every decision locked in the restructure pass so the next agent doesn't reopen them.

## Hard constraints — do not violate

- **HTML + CSS only.** No JS framework, no build pipeline, no test harness. Static site.
- **The plugin architecture is retired** (decided 2026-04-24). Course content lives at execaiday.com as HTML pages. No `/teach M0X` flow, no marketplace, no `.plugin` package.
- **Build nothing until Tijn explicitly says go on each step.** Present options + trade-offs; let Tijn decide.
- **No "Doc Tony" in public/official content.** Use "Tijn van der Zant, PhD" or "Dr. van der Zant." Private nickname only.
- **No "markdown files" / ".md files" / "MD" in user-facing course prose.** Use "files" or "vault files."
- **No homework, no final exam, no graduation deliverable, no opening/closing rituals.** Tijn has rejected these repeatedly.
- **No comments on workshop pacing or exec psychology.** Tijn has run hundreds of workshops for C-level execs; he knows the room.
- **No invented behavioral narratives** about participants or assistants.
- **Tone:** tight, real trade-offs, no padded prose. C-level execs.
- **Sandbox can't push.** After every commit, give Tijn a one-line `cd ~/Code/ExecAIDay-course && git push` he can paste.

See repo `CLAUDE.md` and the workspace `CLAUDE.md` for the full standing directives.

---

## The 5-section structure (locked)

### Section 1 — Basics: Claude Cowork in daily work
*Just Claude installed. No plugins, no connectors, no Office add-ins.*

Topics, in teaching order:
1. Frame: Cowork vs ChatGPT.
2. Surface tour (Customize, Personal plugins, Cowork Projects, chat box).
3. First prompts; concepts land naturally (models, session memory, context, tokens).
4. Trust calibration — hallucination demo. Concepts: hallucination, knowledge cutoff, overconfidence.
5. Folders + document ops via Cowork file access (PDF / Word / Excel / PPT).
6. Prompt engineering crash course — R-C-T-F-C, 2–3 worked examples, 2–3 worst anti-patterns. Full anti-pattern catalogue lives in Section 2.
7. Browser + Chrome extension as a second basic surface.
8. **Capstone (aha-win moment):** combine spreadsheet + Word file(s) + a prompt + a brand book (scraped from a website OR one the participant has). Interactively build a branded PowerPoint applying that brand. All via Cowork file ops + browser; **no Office add-ins involved.**

Walk-out: comfortable in Cowork, produced a real branded deliverable, calibrated on trust.

### Section 2 — Leveraging Claude in your work
*Personalize Claude. Connect to live data. Extend into daily surfaces. Heavier setup happens here, done by the workshop tech team.*

Topics, in teaching order:
1. Chief of staff brief — short interview. Lives in Cowork's native project instructions for now (relocates to vault file in Section 3). Recognition-shock moment.
2. Roles — when to use, when overdoing.
3. Anti-patterns deep dive — full catalogue.
4. Voice tools (Wispr / Superwhisper / Voibe / FloWstay). Pick one.
5. Connectors / MCP — Gmail or M365, Calendar, Drive, Slack, plus custom apps.
6. Email drafts (with connectors live).
7. Skills + slash commands — install workshop plugin, demo built-ins, run `/skill-creator`.
8. Office add-ins — installed by tech team. Sidebar basics in Word/Excel/PowerPoint, **branded-deck workflow inside the sidebars** (different shape from Section 1's Cowork-only branded-deck), cross-app shared context (Excel → PowerPoint → Word).

Walk-out: Cowork knows them; live data access; skills running; Office sidebars wired.

### Section 3 — Knowledge base & GTD system, productivity with Claude
*Vault is formally set up here. Full persistent file architecture goes online.*

Topics, in teaching order:
1. Vault setup — Obsidian opens on the vault folder.
2. Obsidian basics — viewer; Cowork is the active layer; same files.
3. Connect Cowork to vault — first Cowork Project ("Vault") that mounts the vault.
4. Re-home the brief — move from Cowork project instructions to `<vault>/About Me.md`; set up `<vault>/claude.md` as a one-line pointer; add `about-me/long-form.md` and `about-me/writing-rules.md`; set up `References/` (brand, people, tools, products).
5. GTD layer — capture, process-inbox, projects, waiting-for, weekly review. Skills installed in Section 2.
6. Mobile capture / Dispatch — phone app writing to vault Inbox.
7. Work folder + `/new-project` — second Cowork Project ("Workshop") mounting work folder + vault. Run `/new-project`; scaffold (Source Materials / Working Files / Deliverables); tailored `claude.md`; matching GTD project entry in vault.
8. Layered `claude.md` — closer-to-the-file wins. Vault root → work folder → project folder.
9. Complete data link — vault + work folder + connectors + skills, all connected.

Walk-out: full architecture in place.

### Section 4 — Meetings + Artifacts & dashboards (cockpit)
*Output and automation. Where the system pays off.*

Topics, in teaching order:
1. Meeting capture — Granola / Bluedot / Fellow → Claude → structured notes in vault → commitments in Inbox → follow-up email drafts.
2. Meeting prep — `/meeting-prep` for a real upcoming meeting.
3. Artifacts — live, refresh-on-open. Small example, then useful one.
4. Personalized CEO cockpit / dashboard — flagship artifact. Calendar, urgent emails, drafts waiting, Slack mentions, yesterday's reflection, this week's GTD next-actions. Refreshes every open.
5. Scheduled tasks + routines — Cowork Settings → Scheduled tasks. Mondays-at-8:30 brief, daily 8am priorities, etc. Routes to Slack DM / email draft / vault file.
6. Collaboration & shared work — shared Cowork folders, multi-connector team queries, handoff patterns. Team-leverage move.

Walk-out: cockpit opens every morning; meetings captured; routines automated; team patterns understood.

### Section 5 — Aftercare & follow-up
*Recurring, not a sequence.*

Topics:
1. Quarterly check-in (every 3 months) — review what's working, what's stale; refresh brief; prune References; retire skills nobody uses.
2. Update existing setup — hands-on tweaks with a workshop assistant or self-service.
3. Build new connectors when new tools enter the stack.
4. On-demand support — between quarterly reviews, when something breaks or a new use case lands.

Walk-out: a system that survives and evolves.

### Glossary (cross-cutting)
- One page, alphabetical, one-line definitions, pointer to the section that introduces each term.
- Available during and after the workshop.
- Definitions, not lectures.

---

## Decisions log (with reasoning)

Every placement decision Tijn made, so future agents don't reopen them:

| Item | Placement | Reasoning |
|---|---|---|
| Vault setup | Section 3 | Vault belongs where the knowledge architecture is taught; Section 1 stays "just Claude installed." |
| Chief of staff brief | Section 2 (Cowork native project instructions, then re-homed in Section 3) | Brief is leverage; vault is knowledge architecture. |
| Office add-ins | Section 2 (entirely) | Add-ins are extra surface area like connectors. Section 1's PPT work happens via Cowork file ops alone — no add-ins required. |
| Skills + slash commands | Section 2 | Skills are leverage moves. |
| Browser + Chrome | Section 1 | Second basic Claude surface, low setup. |
| Scheduled tasks + routines | Section 4 | Output theme — Claude works while you sleep. |
| Mobile capture / Dispatch | Section 3 | GTD capture flow; demoed live in workshop. |
| Collaboration & shared work | Section 4 | Tijn's pick — alongside meetings + cockpit, not aftercare. |
| Work folder + `/new-project` | Section 3 | Same architecture as vault; teach together. |
| Hallucination demo | Section 1 | Trust calibration is foundational. |
| 18 basic concepts | Distributed in-context + glossary | Don't lecture an 18-item list; introduce each where it lands. |
| "Plans" concept | Dropped | Tijn never wanted it; lifted from old course by mistake. |

---

## Current repo state (what to expect when picking up)

- `docs/index.html` — cover with 17 module cards. **Replace.**
- `docs/essentials.html` — fast track, 14 numbered moves aligned to 17-module ordering. **Rework for 5 sections.**
- `docs/m01.html` … `docs/m17.html` — 17 module pages. **Retire** (replace with 5 section pages or redirects).
- `docs/slides/m01.html` … `docs/slides/m17.html` — 17 slide decks. **Retire** (rebuild for 5 sections, or drop slides entirely if Tijn decides not to keep them).
- `docs/_generate.py` — Python generator expecting 17 modules. **Rewrite for 5 sections.** Currently 600+ lines; uses extractors over module markdown files.
- `docs/styles.css` — main site CSS. Reusable; phase color vars (`--foundation`, `--personalize`, `--sharpen`, `--connect`, `--system`) tied to old 5-phase model — review whether the new 5 sections use the same vars or new ones.
- `docs/slides.css` — slide-deck CSS. Reusable if slides survive.
- `modules/M01-…md` … `modules/M17-…md` — 17 source files. **Most content can be reused** but redistributed into 5 section files. Some pieces drop (e.g., the standalone "M07 Skills" module merges into Section 2's broader narrative).
- `references/*.md` — 9 reference files. Mostly carries forward.
  - `references/18-basic-concepts.md` — file the glossary page will be built from.
- `templates/vault-starter/`, `templates/work-folder-starter/`, `templates/project-folder-template/` — carry forward; may need section-reference updates.
- `skills/` — 26 skills under the (now retired) plugin model. **Don't touch without Tijn's go.** Plugin is dead but skills may have a future role under the Notion+Skills architecture per CLAUDE.md.

---

## What needs to happen next (suggested order)

1. **Confirm 5 section titles with Tijn.** Working titles in the structure above are draft. Lock final wording before any HTML.
2. **Decide section-page shape.** One long page per section? Multiple sub-pages per section? Inline navigation? Tabs? Get Tijn's call.
3. **Confirm slide-deck fate.** Keep the per-section slide concept, drop slides entirely, or replace with something else? Tijn decides.
4. **Confirm cover shape.** 5 large section cards instead of 17 module cards? What goes in each card (title, blurb, walk-out)?
5. **Confirm essentials/fast-track fate.** Keep as a separate page? Drop? Restructure to 5 section summaries?
6. **Rewrite `docs/_generate.py`** for 5 sections (after #2 is decided).
7. **Author 5 section source files** (e.g., `sections/S1-basics.md` … `sections/S5-aftercare.md`) using the elaboration above as the starting point. Tijn will edit.
8. **Rebuild `docs/index.html`** for 5 sections.
9. **Rebuild `docs/essentials.html`** if kept.
10. **Build the glossary page** from `references/18-basic-concepts.md`.
11. **Retire 17 module pages.** Either delete or replace with one-line redirects.
12. **Final pass:** sweep for stale "17 modules" / "M0X" / "/teach" references.

---

## Working principles for the next session

- Open by reading this file, the repo `CLAUDE.md`, and the workspace `CLAUDE.md`.
- Ask Tijn before each substantive step. Don't infer scope.
- Surface real trade-offs. Don't sandbag.
- Keep responses tight. C-level audience downstream.
- Commit after each material change with a clear message; remind Tijn to push.
