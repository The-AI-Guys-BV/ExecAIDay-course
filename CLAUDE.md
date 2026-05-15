# CLAUDE.md — ExecAIDay course standing directives

## What this repo is

The **ExecAIDay** course — a two-day in-person workshop for C-level executives, taught by Tijn van der Zant, PhD ("Dr. van der Zant"). Course content is published as a static HTML site at execaiday.com from the `docs/` folder.

The course is structured as **5 themed sections** (see `HANDOFF.md` for the full structure decision log). The previous 17-module version is archived at `course_1/`.

## Hard constraints — do not violate

- **HTML + CSS only.** No JS framework, no build pipeline beyond a small Python generator, no test harness. Static site.
- **No plugin architecture.** Course content lives at execaiday.com as HTML pages. No `/teach M0X` flow, no Cowork plugin marketplace install, no `.plugin` package distribution. (The `.claude-plugin/` directory and `skills/` folder remain in the repo for a possible future Notion+Skills role — do not touch without Tijn's explicit go.)
- **Build nothing structural until Tijn explicitly says go on each step.** Present options + trade-offs; let Tijn decide. Content authoring within an already-locked structure can proceed.
- **Naming.** Use "Tijn van der Zant, PhD" or "Dr. van der Zant" in public-facing content. The "Doc Tony" nickname is private only.
- **Vocabulary.** Do not use "markdown files" / ".md files" / "MD" in user-facing prose. Say "files" or "vault files."
- **No homework, no final exam, no graduation deliverable, no opening/closing rituals.** Tijn has rejected these repeatedly.
- **No comments on workshop pacing or exec psychology.** Tijn has run hundreds of workshops for C-level execs; he knows the room.
- **No invented behavioral narratives** about participants or assistants.
- **Tone:** tight, real trade-offs, no padded prose. Adult voice for a sophisticated audience.

## Section structure (locked 2026-04-29)

1. **Basics — Claude Cowork in daily work.** Just Claude installed; no plugins, connectors, or Office add-ins. Capstone: branded PowerPoint via Cowork file ops + browser, no add-ins.
2. **Leveraging Claude in your work.** Personalize (chief-of-staff brief), connect (connectors/MCP), extend (skills, voice, Office add-ins, branded-deck inside sidebars).
3. **Knowledge base & GTD system.** Vault setup (Obsidian over the same files), re-home the brief, GTD layer, mobile capture, work folder + `/new-project`, layered `claude.md`.
4. **Meetings + Artifacts & dashboards (cockpit).** Meeting capture/prep, artifacts, personalized CEO cockpit (flagship), scheduled tasks/routines, collaboration patterns.
5. **Aftercare & follow-up.** Quarterly check-ins, updates, new connectors, on-demand support. Recurring, not a sequence.

Plus a **Glossary** (one page, alphabetical, one-line definitions, pointer to introducing section).

For full topic breakdown and decisions log, see `HANDOFF.md`.

## Repo layout

- `docs/` — static site published to execaiday.com.
- `sections/SX-name.md` — section source files (markdown). Generator turns these into `docs/sX-name.html`.
- `references/` — reference articles (anti-patterns, RCTFC, GTD layout, etc.). Carries forward from v1.
- `templates/` — vault starter, work folder starter, project folder template. Carry forward from v1.
- `skills/` — 26 GTD skills from the retired plugin. **Do not touch without Tijn's go.**
- `course_1/` — frozen archive of the v1 (17-module) course. Reference only; do not modify.
- `HANDOFF.md` — decisions + history.

## Working pattern

- Commit after each material change with a clear message.
- Keep responses tight. End-of-turn summary is one or two sentences.
- When a structural decision needs making, surface trade-offs first; do not infer scope.
