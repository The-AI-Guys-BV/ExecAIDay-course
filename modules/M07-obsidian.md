# M07 — Obsidian

## Why this module matters

Obsidian is your knowledge layer — free, local-first, and the same files Cowork reads. Daily notes, references, capture, all linked via `[[wikilinks]]`. Once Obsidian is set up, the vault you mounted in M01 has a proper interface — graph view, a daily-note workflow, and a small set of Obsidian plugins that turn the vault into a working surface (calendar view, templates, weekly/monthly notes, task lists, command palette helper).

## What you'll do

- Open Obsidian on the vault you mounted in M01 — same files Cowork sees.
- Turn on Obsidian's daily-notes workflow (one core toggle + five small plugins: a calendar view, templates, weekly/monthly notes, tasks, and a command palette helper).
- Watch Claude write into today's daily note while Obsidian renders the change live.

---

## Introduction

You have a vault. It's a folder of plain-text notes. Cowork reads them. Obsidian renders them as a knowledge graph with bidirectional links, daily notes, plugins for everything.

The three-layer model from M01:
- **Cowork folders = work files** (project folders, bounded work).
- **Vault GTD = task management** (what you're doing — files in `<vault>/gtd/`).
- **Obsidian = knowledge** (what you know — research, daily reflection, references).

This module sets up the third layer. Obsidian is one tool; you'll have it open on a second monitor or alongside Cowork.

## Beginner / Getting Started

### Open Obsidian on your vault

Open Obsidian. First time: select the vault folder (the same folder you mounted in M01 as your knowledge folder).

You'll see:
- The file browser on the left with the folder structure: `about-me/`, `Daily Notes/`, `References/`, `Inbox/`, plus a root `claude.md`.
- The current open note in the main pane.
- The graph view (icon top-right, shape varies by Obsidian version) showing how notes link.

### How vault + Cowork interact

Same files, two interfaces. Edit a file in Obsidian; Cowork sees the edit on next read. Edit a file from Cowork (Claude writes into it); Obsidian re-renders live (file watching).

You'll see this in the exercise at the end.

### Obsidian basics

- `Cmd/Ctrl + O` — open quick-switcher to find any note.
- `[[note name]]` while typing — creates a wikilink to another note. Click it to navigate.
- Tags `#tag` for cross-cutting categories.
- Daily notes — open today's daily note via the Daily Notes plugin (calendar icon, or `Cmd/Ctrl + Shift + D`).
- Graph view — visualize how your notes link. Becomes meaningful after weeks of use.

## Intermediate

### Set up Obsidian's daily-notes workflow

You'll enable one Obsidian core plugin and install five small community plugins. Together they turn the empty vault into a working daily-note surface — a calendar in the sidebar, templates for new notes, support for weekly/monthly notes, in-note task lists, and a command palette helper. This is the vanilla "starter set" most Obsidian users run.

Obsidian has two plugin types: **Core plugins** (built in) and **Community plugins** (third-party, opt-in).

**Step 1 — Enable Daily Notes (core).**

Open Obsidian Settings (gear icon, bottom-left). Go to **Core plugins**. Find **Daily notes** in the list, toggle it ON.

**Step 2 — Turn on Community plugins.**

In Settings, go to **Community plugins**. The first time you visit this screen, Obsidian shows "Restricted mode" with a button that says **Turn on community plugins**. Click it and confirm the warning dialog (community plugins run third-party code; the five we use below are widely-trusted standards).

**Step 3 — Install the five community plugins.**

Still in **Settings → Community plugins**, click **Browse**. A search dialog opens. For each plugin below, type the name into the search box, click the result, click **Install**, then click **Enable**. Close the dialog and repeat:

1. **Calendar** — visual calendar to navigate daily / weekly / monthly notes.
2. **Templater** — template-driven note creation (date math, headers, etc.).
3. **Periodic Notes** — extends Daily Notes to weekly, monthly, quarterly, yearly.
4. **Tasks** — checkbox-style task tracking inside notes (separate from your GTD; useful for tactical lists).
5. **Commander** — adds buttons / command palette entries for the plugins above.

**Step 4 — Configure Daily Notes.**

Settings → **Daily notes**. Set:
- **New file location:** `Daily Notes/`
- **Date format:** `YYYY-MM-DD` (matches the convention in `Daily Notes/claude.md`).
- **Template file location:** leave blank for now (you can add a Templater-driven template later).

If anything in steps 1–4 doesn't match what you see on screen, your assistant will sort it.

### How Claude reads daily notes

Claude reads your Daily Notes when relevant — for example, the `/weekly-review` skill reads the past 7 days' notes to surface accomplishments. Claude treats them as journal voice (per `Daily Notes/claude.md`).

Don't worry about Claude misreading them. The `claude.md` in the Daily Notes folder tells Claude to expect first-person reflective content.

## Advanced

### Plugins beyond the starter set

Worth exploring later (not in workshop):
- **Dataview** — query your notes as a database.
- **Excalidraw** — draw directly in notes.
- **Outliner** — better bullet management.
- **Note Refactor** — split long notes into linked smaller ones.

Don't install everything at once. Add as you encounter need.

### Obsidian Sync (optional)

If you want your vault on your phone too, Obsidian Sync is the cleanest path. Otherwise, the vault stays on your laptop.

NOT required for the workshop architecture. Sync is a personal-preference layer.

### Templater patterns

Templater can create complex note structures from a template. Useful for:
- Daily note template with sections you always want (today's calendar pulled from Cowork later, intentions, gratitude, etc.).
- Project note template (separate from project folders — these are knowledge-layer notes about projects).
- Meeting note template (we'll see this in M15).

You'll iterate on templates over weeks. Don't optimize on Day 1.

---

## Try this

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
- M06 — writing the chief-of-staff brief in Obsidian.
- M15 — meeting notes that land in Daily Notes.
