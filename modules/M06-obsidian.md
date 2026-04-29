# M06 — Obsidian

## Why this module matters

Obsidian is your knowledge layer — free, local-first, and the same files Cowork reads. Daily notes, references, capture, all linked via `[[wikilinks]]`. Once Obsidian is set up, the vault you mounted in M01 has a proper interface — graph view, daily-note workflow, plugin starter set.

## What you'll do

- Open Obsidian on the vault you mounted in M01 — same files Cowork sees.
- Install the plugin starter set: Daily Notes, Calendar, Templater, Periodic Notes, Tasks, Commander.
- Watch Claude write into today's daily note while Obsidian renders the change live.

## Time

~45 minutes.

---

## Section 1 — Introduction (~5 min)

You have a vault. It's a folder of Markdown files. Cowork reads them as plain text. Obsidian renders them as a knowledge graph with bidirectional links, daily notes, plugins for everything.

The three-layer model from M01:
- **Cowork folders = work files** (project folders, bounded work).
- **Notion GTD = task management** (what you're doing).
- **Obsidian = knowledge** (what you know — research, daily reflection, references).

This module sets up the third layer. Obsidian is one tool; you'll have it open on a second monitor or alongside Cowork.

## Section 2 — Beginner / Getting Started (~15 min)

### Open Obsidian on your vault

Obsidian was installed in IT onboarding. Open it. First time: select the vault folder (the same folder you mounted in M01 as your knowledge folder).

You'll see:
- The file browser on the left with the folder structure: `about-me/`, `Daily Notes/`, `References/`, `Inbox/`, plus a root `claude.md`.
- The current open note in the main pane.
- The graph view (icon top-right, shape varies by Obsidian version) showing how notes link.

### How vault + Cowork interact

Same files, two interfaces. Edit a file in Obsidian; Cowork sees the edit on next read. Edit a file from Cowork (Claude writes into it); Obsidian re-renders live (file watching).

You'll see this in the micro-win at the end.

### Obsidian basics

- `Cmd/Ctrl + O` — open quick-switcher to find any note.
- `[[note name]]` while typing — creates a wikilink to another note. Click it to navigate.
- Tags `#tag` for cross-cutting categories.
- Daily notes — open today's daily note via the Daily Notes plugin (calendar icon, or `Cmd/Ctrl + Shift + D`).
- Graph view — visualize how your notes link. Becomes meaningful after weeks of use.

## Section 3 — Intermediate (~15 min)

### Plugin starter set

In Obsidian: Settings → Community plugins → Browse. Install and enable:

1. **Daily Notes** (core, usually pre-enabled). Creates `Daily Notes/YYYY-MM-DD.md` on demand or daily.
2. **Calendar** — visual calendar to navigate daily / weekly / monthly notes.
3. **Templater** — template-driven note creation (date math, headers, etc.).
4. **Periodic Notes** — extends Daily Notes to weekly, monthly, quarterly, yearly.
5. **Tasks** — checkbox-style task tracking inside notes (separate from your GTD; useful for tactical lists).
6. **Commander** — adds command palette items for the above.

After installing, configure Daily Notes:
- Folder: `Daily Notes/`
- Date format: `YYYY-MM-DD` (matches the convention in `Daily Notes/claude.md`).
- Template: skip for now (you can add a Templater-driven template later).

### How Claude reads daily notes

Claude reads your Daily Notes when relevant — for example, the `/weekly-review` skill reads the past 7 days' notes to surface accomplishments. Claude treats them as journal voice (per `Daily Notes/claude.md`).

Don't worry about Claude misreading them. The `claude.md` in the Daily Notes folder tells Claude to expect first-person reflective content.

## Section 4 — Advanced (~10 min)

### Plugins beyond the starter set

Worth exploring later (not in workshop):
- **Dataview** — query your notes as a database.
- **Excalidraw** — draw directly in notes.
- **Outliner** — better bullet management.
- **Note Refactor** — split long notes into linked smaller ones.

Don't install everything at once. Add as you encounter need.

### Obsidian Sync (optional, $4/month)

If you want your vault on your phone too, Obsidian Sync is the cleanest path. Otherwise, the vault stays on your laptop.

NOT required for the workshop architecture. Sync is a personal-preference layer.

### Templater patterns

Templater can create complex note structures from a template. Useful for:
- Daily note template with sections you always want (today's calendar pulled from Cowork later, intentions, gratitude, etc.).
- Project note template (separate from project folders — these are knowledge-layer notes about projects).
- Meeting note template (we'll see this in M15).

You'll iterate on templates over weeks. Don't optimize on Day 1.

---

## Micro-win

In Cowork:

```
Write a paragraph reflecting on what you've learned in the workshop so far.
Save it to today's daily note in my vault. Use journal voice — first person, reflective, brief.
```

Claude reads `Daily Notes/claude.md` (which says journal voice), writes the paragraph, saves to `<vault>/Daily Notes/<today>.md`.

Watch Obsidian. The note updates live in front of you.

## Verification checkpoint

In Cowork:

```
What's in my Daily Notes folder for the past 7 days?
```

Expected: Claude lists files (probably just today's, plus any pre-existing). If Claude can't find `Daily Notes/`, the vault didn't mount correctly — check M01.

## Common issues

- **Obsidian doesn't see the files Claude wrote** — Obsidian uses file watching; sometimes needs a manual refresh (right-click the file browser → Refresh).
- **Daily note has wrong date** — check Daily Notes plugin settings; default format must match `YYYY-MM-DD`.
- **Plugins fail to install** — usually a network issue; retry. Or use Obsidian's BRAT plugin to install from GitHub directly.
- **Vault feels empty** — that's correct on Day 1. Content accumulates over weeks.

## References

- `templates/vault-starter/` — what was scaffolded into your vault.
- M07 — writing the chief-of-staff brief in Obsidian.
- M15 — meeting notes that land in Daily Notes.
