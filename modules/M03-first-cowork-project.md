# M03 — First Cowork Project: the Vault

## Why this module matters

Until now the vault is just a folder of notes and Claude is just a chat. This module connects them. By the end you'll have your first Cowork Project (a workspace), it'll mount your vault, and Claude will read and write every note in there. Watch Obsidian re-render live as Claude edits. That's the moment the workshop pays off in a felt way — Claude is no longer a tool you visit; it's a collaborator working in the same files you do.

## What you'll do

- Create your first Cowork Project, named "Vault." Mount only the vault folder.
- Confirm Claude can see the vault by listing what's mounted.
- Write a first note from Claude — watch Obsidian render it live.
- Understand what a Cowork Project is, what mounting does, and the boundary between Cowork and Obsidian.

---

## Introduction

A Cowork Project is the workspace concept inside Cowork. It holds mounted folders, its own conversation history, and its own session memory. You can have several Cowork Projects — one per major scope of work. Today you're creating exactly one, named "Vault," and it'll mount only the vault folder you saw in M02.

Why narrow scope first? Because the vault is one self-contained thing — knowledge in, knowledge out. No work folders, no project deliverables, no other distractions. Just the vault. You'll learn what mounting does, what scope means, and how Claude reads and writes files in the mounted folder. M12 will introduce a second Cowork Project ("Workshop") for project work, but that's later.

Mounting is the load-bearing concept. Mounting doesn't copy or move your files. It tells the Cowork Project "include this folder in your context." Claude can read every file in a mounted folder, and write to any file when you ask. Remove the mount, and the files stay on disk untouched — Cowork just stops seeing them.

## Beginner / Getting Started

### Step 1 — Create the Cowork Project

In Cowork:

1. Look at the left sidebar. Find the **Cowork Projects** section (it's where your projects will be listed; right now it's probably empty or contains only a default project).
2. Click **+ New Project** (or the **+** icon next to the section header).
3. In the dialog, name it: **Vault**.
4. Click **Create**.

The new project opens. The chat area is empty — you've never had a conversation in this scope before.

### Step 2 — Mount your vault

The new project starts with no folders mounted. Mount the vault:

1. In the project's sidebar (or the project settings panel), find **Mounted folders**.
2. Click **+ Add folder**.
3. Browse to your vault folder — the same folder you opened in Obsidian in M02. It's inside your cloud-sync app (Dropbox / OneDrive / Google Drive / iCloud Drive).
4. Select the vault folder. Confirm.
5. The vault appears in the Mounted folders list with a green / checked status.

Only mount the vault. Do **not** mount your work folder yet — that comes in M12.

### Step 3 — Confirm Claude can see the vault

In a chat in this Cowork Project, paste:

```
What folders are mounted in this Cowork Project, and what's at the root of each?
```

Claude lists your vault by name and the top-level folders inside (about-me/, Daily Notes/, References/, Inbox/, claude.md). If Claude says it can't see anything mounted, the mount didn't take — go back to step 2.

### Step 4 — Write a first note from Claude

Now have Claude write to the vault. Paste:

```
Write a 5-line journal entry about what brought me to this workshop and what
I'm hoping to walk out with. Use journal voice — first person, direct, brief.
Save to today's daily note in my vault: Daily Notes/<YYYY-MM-DD>.md
(use today's actual date). Create the file if it doesn't exist.
```

Watch Obsidian. The file appears in the Daily Notes/ folder. Open it. The text Claude wrote is there.

That's the moment. From now on, anything you can describe in a prompt, Claude can do to your vault. Read across notes. Synthesize. Edit. Write new notes. Search.

## Intermediate

### What a Cowork Project actually holds

A Cowork Project is a scoped workspace. Inside the scope:

- **Mounted folders** — which folders Claude reads and writes. (You just mounted one.)
- **Conversation history** — every chat you have inside this project is remembered. Switch to another project, switch back, your history is still here.
- **Session memory** — Cowork builds up `memory.md` files over time, capturing patterns it learns. Each project keeps its own memory.
- **Connectors** — the connectors you authenticated (Gmail, Calendar, etc.) are global across projects, but how Claude uses them can vary by project.

Your "Vault" Cowork Project is now scoped to your vault. Nothing in your work folder is visible from inside this project. That's the point — tighter scope, tighter focus.

### Mount semantics, in detail

- Mounting doesn't copy or move files. Claude just gets read and write access.
- If you remove a mount, the files stay on disk untouched. The project just stops seeing them.
- A folder can be mounted in multiple Cowork Projects. Your vault will end up mounted in both "Vault" (today) and "Workshop" (M12).
- A project can mount multiple folders. M12 mounts both the work folder and the vault.
- Mounts persist across sessions. You won't have to remount when you reopen Cowork tomorrow.

### Why "Vault" is the first project, not a "Workshop everything" project

The mental model on Day 1 is: vault = knowledge. Claude is the active layer. Obsidian is the viewer. Same files, two interfaces.

If we mounted the work folder too, you'd start blurring "where do I write what?" That blur is real and it confuses people. Keep the layers separate at first. M12 introduces the work folder + the second Cowork Project once you've internalized the vault scope.

## Advanced

### Switching between Cowork Projects

By the end of the workshop you'll have at least two projects ("Vault" and "Workshop"). Switch between them via the project switcher at the top of the Cowork sidebar.

When you switch, the chat history, mounted folders, and memory all switch. The project you left is paused; the new project picks up where you last left it. Nothing from the previous project leaks into the new one.

### Memory per project

Each project has its own `memory.md` file (Cowork stores it internally; you don't need to manage it). Claude builds up patterns from your work in that project. The "Vault" project's memory will be about your vault habits — how you like daily notes structured, what tone you use in journals, what folders you actually use vs ignore.

The Workshop project will have its own memory about your project work patterns — how you scope deliverables, what stakeholders you mention most, what kinds of source material you pull in. Memory doesn't cross-pollinate.

### When you'd add another mount to the Vault project

Most of the workshop you keep "Vault" as vault-only. Reasons you might add a second mount:

- A shared team folder (M17) you want vault-side access to.
- A research folder for a temporary deep-dive that you want pulled into vault context.
- A subfolder of something else (a specific project's Deliverables/) you want indexed alongside vault knowledge.

Add the mount in the project settings. Remove it when done. Mounts are cheap.

---

## Try this

Two prompts to feel out what the Vault project can do:

```
Read every file at the root of my vault and in about-me/. Summarize back
to me what you can tell about my vault in 4 sentences.
```

Claude walks the vault root and the about-me/ folder, gives you a high-level read. On Day 1 the vault is mostly empty — that's fine, the summary will reflect that.

Then:

```
Create a file at <vault>/Inbox/workshop-thoughts.md. Write three things I've
noticed so far in the workshop, in my voice as best you can guess it. We'll
revise it once you've read my About Me brief in M04.
```

Claude creates the file. Open it in Obsidian. Read what Claude wrote. The voice will be generic — that's expected. M04 fixes that by giving Claude your chief-of-staff brief.

## Verification checkpoint

In your "Vault" Cowork Project, paste:

```
List every file at the root of my vault and inside about-me/.
For each, tell me whether it's empty, has placeholder content, or has real content.
```

Expected: Claude lists files (e.g., `claude.md`, `About Me.md` if it exists, plus whatever's in about-me/). Each file gets a status. If Claude says it can't find anything, the vault mount didn't take — revisit Step 2.

## Common issues

- **Cowork shows the folder is mounted but Claude can't read files.** Cowork sometimes needs a moment to scan after mounting. Wait 30 seconds and re-prompt. If still nothing, unmount and re-mount.
- **The mount path looks wrong.** Make sure you pointed Cowork at the vault folder itself (the one with about-me/ inside it), not the cloud-sync parent folder (Dropbox/, OneDrive/, etc.).
- **"Permission denied" errors on read or write.** Your vault is in a folder Claude isn't allowed to access — likely a system folder or a locked iCloud path. Move the vault to a normal user folder (e.g., `~/Dropbox/Workshop` instead of `~/Library/Mobile Documents/...`).
- **Claude wrote a file but Obsidian doesn't show it.** Right-click the Obsidian file browser → Refresh. Or close and reopen Obsidian. File watching is usually instant but sometimes blips.
- **You see two Cowork Projects in the switcher and forgot which is which.** In each project, paste: "What folders are mounted here?" Claude tells you. The Vault project mounts the vault only.

## References

- M02 — Obsidian on the same vault (the viewer side).
- M04 — first thing you'll write into the vault: your chief-of-staff brief.
- M05 — companion knowledge files that extend the brief.
- M12 — when the second Cowork Project ("Workshop") gets created.
- `templates/vault-starter/` — what was scaffolded into your vault.
