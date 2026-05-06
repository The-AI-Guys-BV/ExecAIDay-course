# M02 — Open Obsidian, see your vault

## Why this module matters

You have a vault — a folder of plain markdown files. Obsidian is the viewer. This module is your first real look at the knowledge layer you'll spend the rest of the workshop populating. No Cowork yet, no Claude prompts — just open Obsidian, walk the folder structure, get oriented. M03 connects Claude to it.

## What you'll do

- Open Obsidian on the vault folder (placed there by your assistant before the workshop).
- Walk the folder structure — about-me/, Daily Notes/, References/, Inbox/, plus a root claude.md.
- Read three files to get oriented.
- Understand what Obsidian is good for and what it isn't.

---

## Introduction

Your vault is a folder. Inside the folder are `.md` files (markdown — plain text with light formatting). Obsidian renders those files with link previews, a graph view, and a navigable file tree. That's it.

You don't install Obsidian plugins. Anything you'd want a plugin for — a dashboard, a calendar overview, a daily-note workflow — you'll build as a live artifact in Cowork (M08) or as a Claude-driven workflow once Claude is connected to the vault (M03 onward). The vault stays plain markdown that any tool can read. That's the point: durable, portable, future-proof.

The role split, important:

- **Obsidian** is the **viewer**. Browse, read, edit by hand.
- **Cowork** (starting M03) is the **active layer**. Read, write, query, generate.
- **Same files**. Both apps see the same vault folder. Edit on either side; the other re-renders.

You'll keep Obsidian open on a second monitor or alongside Cowork for the rest of the workshop. Most days you'll let Claude do the writing in Cowork; you watch the vault re-render in Obsidian and edit by hand when you want a tactile fix.

## Beginner / Getting Started

### Open Obsidian on your vault

Open Obsidian. First time:

1. Click **Open folder as vault** (or **Open** then **Browse for vault**, depending on Obsidian version).
2. Browse to your vault folder. Your assistant placed it inside your cloud-sync app (Dropbox / OneDrive / Google Drive / iCloud Drive). The path is something like `~/Dropbox/Workshop` or `~/OneDrive - <Company>/Workshop`.
3. Select the vault folder. Click Open.

You'll see Obsidian open onto your vault with:

- **The file browser** on the left, showing the vault's folder structure.
- **The center pane**, currently empty or showing a starter note.
- **The graph view icon** (top-right or in the right sidebar) — click later to see how notes link.

### Walk the folder structure

In the file browser on the left, click each folder once and look at what's inside:

- **about-me/** — your personal knowledge base. Empty placeholders today. M04 populates `About Me.md` at the vault root. M05 fills in the rest of `about-me/`.
- **Daily Notes/** — dated notes (e.g., `2026-04-30.md`). Where reflection and capture lands. Probably empty today.
- **References/** — durable reference material. Brand assets, person bios, tool docs. Likely empty or with placeholder subfolders.
- **Inbox/** — quick captures that haven't been processed. The GTD inbox lives here (covered in M14).
- **claude.md** at the vault root — a one-line system file Cowork reads. M04 sets it up properly.

Most folders are empty on Day 1. They fill up over the workshop.

### Read three files

In the file browser:

1. Open the vault root README (if there's one) or `About Me.md` (if it exists as a placeholder).
2. Open one note in `References/` if anything's there.
3. Try to open today's daily note in `Daily Notes/` — probably doesn't exist yet, that's fine. Note the empty folder.

The point: see that these are plain markdown files. Obsidian is just a renderer.

### Obsidian basics

The four shortcuts that matter on Day 1:

- `Cmd / Ctrl + O` — open quick-switcher to find any note by name.
- `[[note name]]` while typing in any note — creates a wikilink to another note. Click it to navigate.
- `#tag` — for cross-cutting categories. Use sparingly; folders are the primary organizer.
- **Graph view** — visualize how your notes link. Becomes meaningful after weeks of use, not on Day 1.

### What Obsidian is good for

- Browsing the vault visually.
- Reading what Claude wrote.
- Hand-editing notes when you want a tactile fix.
- Quick search across the vault.

### What Obsidian isn't for

- **Generating content** → use Claude in Cowork (M03 onward).
- **Querying across files** → ask Claude ("find every note that mentions X").
- **Daily routines** → build live artifacts (M08, M15).
- **Task management** → use the GTD system (M14).

When you find yourself wanting an Obsidian plugin to do something, the answer is almost always "build it in Cowork instead." Skip the plugin marketplace.

## Intermediate

### The cloud-sync requirement

Your vault sits inside Dropbox / OneDrive / Google Drive / iCloud Drive. That's required, not optional:

- **Backup** — if your laptop dies, your vault is in the cloud.
- **Mobile** — your phone reaches the same files (M13 covers Dispatch for mobile capture into the vault).
- **Multi-machine** — switch laptops, the vault follows.

Verify: open Finder (Mac) or File Explorer (Windows), navigate to your vault. The folder should show your cloud-sync app's status icon (green check, sync arrow, etc.). If it doesn't, the vault is in the wrong location — flag your assistant.

### Wikilinks and the graph view

Wikilinks are Obsidian's killer feature. Type `[[` in any note and Obsidian autocompletes from existing notes. Click the link to navigate to that note. The graph view shows everything connected.

This becomes powerful when Claude builds the links for you. After M03 + M04, you'll be able to ask Claude things like: "link everyone in my About Me to their bio in `References/people/`." Claude inserts wikilinks across multiple files. The graph view lights up.

For now, the graph is mostly empty. That's correct — knowledge structures take weeks of work to emerge.

## Advanced

### Why a vault, not Notion / Roam / Apple Notes

- **Plain text, durable.** Open in any editor. Lives forever. Survives Obsidian going out of business.
- **Local first.** Your data on your disk. Cloud sync is your choice (Dropbox, OneDrive, etc.), not Obsidian's.
- **Cowork-friendly.** Claude reads markdown natively. No API gymnastics, no export step.
- **Linkable.** Wikilinks beat tags for actual knowledge structure.
- **Portable.** Move the folder to another tool any time. Nothing's locked in.

### When you'd open the vault in something other than Obsidian

- A different markdown editor (iA Writer, Typora) — fine, same files.
- VS Code — useful for editing `claude.md` or `about-me/` files with code-style controls.
- The terminal — `cd` into the vault, `ls`, `cat`, `grep`. The vault is just a folder.

You'll keep Obsidian as the primary viewer because the graph + linking is what matters most. But the vault doesn't depend on Obsidian — that's the durability play.

---

## Try this

Open Obsidian. Browse to `Daily Notes/`. Create today's daily note:

- Right-click `Daily Notes/` → **New note** (or use the "Today's daily note" button if your version has one).
- Name it today's date in `YYYY-MM-DD` format (e.g., `2026-04-30.md`).
- Write three lines:
  1. What you walked into the workshop hoping to get out of it.
  2. One thing you're skeptical about.
  3. One thing you're curious about.

Don't make it polished. This is your private notebook. M03 connects Claude to this same file — you'll see Claude read it, summarize it, and add to it.

## Verification checkpoint

In Obsidian's file browser, expand every folder in the vault. You should see:

- `about-me/` — possibly with placeholder files.
- `Daily Notes/` — with today's note if you created one.
- `References/` — empty or with placeholder subfolders.
- `Inbox/` — empty.
- `claude.md` at the vault root.

If any folder is missing, your assistant misplaced the starter content — flag them. They fix it now.

## Common issues

- **Obsidian opens onto a different vault.** File → Open Vault → pick your workshop vault folder. Obsidian remembers vaults; if you previously opened a different one, you might be looking at it.
- **No `claude.md` visible.** Some Obsidian themes hide files starting with "claude" because of dot-file patterns. Check via the file system (Finder / Explorer) — `claude.md` should be there. M04 will rewrite it anyway, so don't worry about its content right now.
- **The vault feels empty.** That's correct on Day 1. Content accumulates over the workshop and the months that follow.
- **Vault path doesn't show a cloud-sync status icon.** The vault is outside the cloud-sync folder. Move it inside — flag your assistant.

## References

- `templates/vault-starter/` — what was scaffolded into your vault.
- M03 — connect Claude to the vault by creating your first Cowork Project.
- M04 — write the chief-of-staff brief into `About Me.md`.
- M05 — companion knowledge files (`about-me/long-form.md`, `about-me/writing-rules.md`, `References/`).
- M14 — the GTD system lives in the vault.
