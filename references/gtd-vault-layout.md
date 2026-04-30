# GTD Vault Layout

Reference for the file structure and tag conventions backing the workshop's GTD skills. The 19 GTD skills read and write these files; you normally don't edit them by hand, but they're plain markdown so you can.

## File layout

```
<vault>/gtd/
├── inbox.md           — captured items pre-clarification
├── next-actions.md    — single-step items, tagged
├── waiting-for.md     — delegated items, by person
├── someday.md         — might-do, not committed
├── tickler.md         — defer-to-future items, with surface date
├── areas.md           — ongoing responsibility domains
├── goals.md           — 1–2 year outcomes
├── vision.md          — 3–5 year direction
└── projects/
    └── <project-slug>.md   — one MD per active project
```

References (facts, links, durable notes) live in `<vault>/References/<topic>/<note>.md` — separate from GTD.

## Tag conventions

Inline tags only. No YAML frontmatter, ever. Tags appear at the end of a bullet, space-separated.

### Contexts (where you can do the work)
- `#context/calls`
- `#context/desk`
- `#context/errands`
- `#context/anywhere`

### Energy
- `#energy/high`
- `#energy/medium`
- `#energy/low`

### Time
- `#time/quick`
- `#time/medium`
- `#time/long`

### People
- `@person:john`
- `@person:sarah-chen`

### Projects
- `@project:q3-board-deck`
- `@project:trademark-filing`

The slug after `@project:` matches the filename (without `.md`) in `projects/`.

### Dates
- `created:YYYY-MM-DD` — when the item was captured.
- `due:YYYY-MM-DD` — hard deadline.
- `surface:YYYY-MM-DD` — for tickler items, the date to surface.

### Status
- `#status/active` (default — assumed if no status tag).
- `#status/done`
- `#status/cancelled`

## Bullet format

Standard markdown checkbox bullet, then text, then tags:

```
- [ ] Follow up with legal team on trademark filing #context/calls #energy/low #time/quick @project:trademark-filing created:2026-04-29
```

Done items use `[x]` and `#status/done`:

```
- [x] Send Q3 numbers to John #context/desk @person:john created:2026-04-25 #status/done
```

## Project file format

Each `projects/<slug>.md` has a small header followed by free-form notes.

```
# <Project Name>

**Outcome:** <one-sentence description of done>
**Status:** active | on-hold | done | cancelled
**Stakeholders:** <list>
**Deadline:** <date or none>
**Next action:** <link to a bullet in next-actions.md or a single line>

---

(Notes, decisions, working files links, etc.)
```

## Skills that read/write these files

All 19 GTD skills operate on these files. See `skills/<name>/SKILL.md` for each skill's read/write contract. The skills handle tag formatting; you don't.

## Why this layout

- Plain markdown — Obsidian-native, zero lock-in.
- One file per list (fast to scan, easy to edit by hand if needed).
- One file per project (so daily notes and other vault content can `[[gtd/projects/<slug>]]` backlink).
- Inline tags (Obsidian's tag pane indexes them; skills parse with simple regex).
- No YAML frontmatter (keeps files clean; tag-based rather than schema-based).

## See also

- M14 — GTD in your vault (the module that teaches this).
- M15 — Daily Command Center (the live artifact that reads these files).
- M13 — Scheduled tasks (and Dispatch for mobile capture).
