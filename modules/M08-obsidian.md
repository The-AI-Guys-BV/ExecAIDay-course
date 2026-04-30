# M08 — Obsidian

## Why this module matters

Obsidian is your knowledge layer — free, local-first, and the same files Cowork reads. Daily notes, references, capture, all linked via `[[wikilinks]]`. Once Obsidian is open on the vault you mounted in M01, Claude can read and write every note in there from Cowork.

## What you'll do

- Open Obsidian on the vault you mounted in M01 — same files Cowork sees.
- Use Claude (from your existing Workshop Cowork Project, where the vault is mounted) to write directly into your vault — journal entries, edits, summaries.
- Optionally: create a second Cowork Project that mounts **only** the vault, or a part of the vault, for focused knowledge work.

---

## Introduction

You have a vault. It's a folder of plain-text notes. Cowork reads and writes them. Obsidian renders them as a knowledge graph with bidirectional links, search, and a navigable file tree.

**Role split, important.** Cowork is the active layer — it creates files, edits files, runs skills, builds artifacts. Obsidian is the viewer — it shows you what's in the vault, in a UI that's pleasant to read in. **You don't install Obsidian plugins.** Anything you'd want a plugin for (a dashboard, a calendar overview, a daily-note workflow), you build as a live artifact in Cowork instead. The vault stays plain markdown that any tool can read.

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

### Your vault IS a Cowork project

The Cowork Project you made in M01 already mounts your vault. That means **Claude can read every note in your vault and write back to any of them.** Your vault isn't a passive archive — it's a workspace Claude operates on directly.

Same files, two interfaces. Edit a file in Obsidian; Cowork sees the edit on next read. Ask Claude in Cowork to write something; Obsidian re-renders the change live (file watching).

Try a few of these in Cowork now:

```
Write a 5-line journal entry about how the workshop is going so far,
in journal voice. Save to today's daily note in my vault.
```

```
Read all my notes in <vault>/References/ and tell me what topics
I have the most material on.
```

```
Open <vault>/About Me.md and tighten the section on stakeholders —
remove repetition, keep my voice.
```

Each of those writes into your vault. Watch Obsidian re-render.

**Optional second Cowork Project — "Vault only".** Some people prefer a dedicated Cowork Project that mounts ONLY the vault (no work folder), used for vault-focused work — knowledge curation, journaling, references. Create it in Cowork → New Project → mount the vault only. Use it when you want Claude focused on knowledge, not project work.

You'll see live editing again in the exercise at the end.

### Obsidian basics

- `Cmd/Ctrl + O` — open quick-switcher to find any note.
- `[[note name]]` while typing — creates a wikilink to another note. Click it to navigate.
- Tags `#tag` for cross-cutting categories.
- Daily notes — your `<vault>/Daily Notes/` folder holds dated notes (e.g., `2026-04-29.md`). Navigate by date in the file browser, or use `Cmd/Ctrl + O` and search the date.
- Graph view — visualize how your notes link. Becomes meaningful after weeks of use.

## Advanced

### Create a new Cowork Project with your vault (or part of it)

The Workshop Cowork Project from M01 mounts your **whole** vault plus your work folder. That's the general-purpose project. Sometimes you want a Cowork Project scoped to your vault only, or to a slice of it.

**How to create one:**

1. In Cowork, top-left of the sidebar, click **+ New Project**.
2. Name it. Examples: "Vault" (whole vault), "Sales strategy" (one Areas subfolder), "Board notes" (References subfolder), "Journaling" (Daily Notes only).
3. Click **Mount folder** (or the equivalent in the New Project dialog).
4. Pick the folder:
   - **Whole vault** — select the vault root folder (the one Obsidian opens onto).
   - **Part of the vault** — drill into the vault and select a subfolder, e.g., `<vault>/Areas/Sales-strategy/` or `<vault>/References/Customers/`.
5. Optionally mount additional folders (a project folder from your work folder, the shared team folder, etc.).
6. Save.

You now have a second Cowork Project. Switch between projects with the project switcher (top-left of the sidebar).

### How vault + Cowork Project work together

A Cowork Project is a **scope**: it tells Claude which folders to consider. Inside that scope, Claude:

- **Reads every file** in the mounted folder(s).
- **Writes to any file** when you ask. (`/capture`, an artifact that saves to a file, "edit this note" prompts — all land in the mounted folders.)
- **Reads `claude.md` at every level.** Closer-to-the-file wins. So if you mount `<vault>/Areas/Sales-strategy/`, Claude reads `<vault>/claude.md` (your About Me pointer), then `<vault>/Areas/claude.md` (if it exists), then `<vault>/Areas/Sales-strategy/claude.md`. You can drop a `claude.md` into a subfolder to give Claude project-specific guidance scoped to that area.
- **Has its own session memory.** Each Cowork Project keeps a separate `memory.md` of patterns Claude has learned. The Workshop project doesn't share memory with your Vault project.

**Picking a scope:**

- **Whole vault mounted** — for general knowledge work, journaling, cross-vault queries ("summarize everything I have on Sales").
- **Subfolder mounted** — for focused work where you don't want Claude pulling unrelated vault content into context. Example: a "Board notes" Cowork Project mounting only `<vault>/Areas/Board/` so Claude doesn't pull from your Sales notes.
- **Vault + work folder** — the M01 Workshop pattern. Most flexible. Claude can pull a meeting note from the vault into a project deliverable in the work folder.
- **Vault + shared team folder** — for collaborative work where you want personal vault context plus shared materials. (Covered in M16.)

### What stays in the vault, what goes in the work folder

Quick test for where to write:
- **Permanent knowledge** (a new fact, a person's bio, a meeting note) → vault.
- **Bounded deliverable** (a memo for the Q3 board, a script for an investor call) → project folder in the work folder.
- **Today's reflection / capture / loose note** → vault Daily Notes or vault Inbox.

Claude reads both folders in the Workshop project. The line between vault and work folder is YOUR discipline, not Cowork's. Mount accordingly.

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
- **Vault feels empty** — that's correct on Day 1. Content accumulates over weeks.

## References

- `templates/vault-starter/` — what was scaffolded into your vault.
- M06 — writing the chief-of-staff brief in Obsidian.
- M15 — meeting notes that land in Daily Notes.
