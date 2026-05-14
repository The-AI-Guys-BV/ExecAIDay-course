---
section: 3
slug: knowledge
title: Knowledge base & GTD — your second brain on disk
theme: A vault you own. A GTD system Claude runs from. Layered context that scales.
walkout: You have a working second brain on your hard drive — your knowledge, your projects, your task system, your brief — and Cowork knows where to look for any of it.
---

## What this section is

In Section 1 you used Cowork on a folder. In Section 2 you taught Cowork who you are and connected it to your live data. This section gives Cowork a **persistent place** to keep things — a folder structure on your disk, designed for executive use, that holds:

- Your standing brief (the one you wrote in Section 2 — moved here).
- Your reference material — the people you work with, the brands you care about, the tools you use, the products in your portfolio.
- Your Getting Things Done (GTD) system — inbox, projects, next actions, waiting-for, weekly review.
- Your active work — projects with their own folders and their own context files.

We call the structure your **vault**. It's just a folder on your disk. What makes it a vault is that Cowork knows its shape, and **Obsidian** — a free local-first knowledge tool — gives you a fast viewer/editor for it. Same files, two ways to open them.

By the end of this section, you have a working second brain on your hard drive that survives every workshop, every laptop change, and every job change. It's yours.

## 1. Why a vault — and why Obsidian on top

Two questions you should be able to answer.

### 1.1 Why not just keep things in Cowork?

Cowork stores Project instructions and chat history, but those are tied to one Project, in one app, on one machine. If you change companies tomorrow, your standing brief is gone. If you want the same context in five different Cowork Projects, you copy-paste five times.

A vault sits **on your disk**. Cowork reads it. Cowork writes to it. But the canonical copy is files in a folder you own, backed up by your cloud sync (Dropbox, OneDrive, Google Drive, iCloud — whichever your org uses). When Cowork changes, the vault stays. When the vault grows, every Cowork Project you point at it gets the benefit.

### 1.2 Why Obsidian

The vault is files. You can open them in any text editor. **Obsidian** is the editor you'll actually want to use, because:

- It's free and runs locally — no cloud account, no subscription.
- It opens any folder as a vault and renders the files nicely (headings, links, lists, tables).
- It links files together — any reference to `[[About Me]]` becomes a clickable link to the file `About Me`. You build a connected web of notes without thinking about it.
- It's fast. Search across the whole vault is sub-second.

Important: **Cowork is the active layer.** Cowork is where you ask things, build things, get work done. Obsidian is the **viewer** — where you read, edit, and navigate the same files Cowork is using. They are not two systems. They are two windows onto the same files.

## 2. Vault setup

### 2.1 Where the vault lives

Your assistant has placed a starter vault on your machine, inside a cloud-synced folder (Dropbox, OneDrive, Google Drive, or iCloud — whichever your organisation uses). The path is something like `~/Dropbox/Vault/` or `~/OneDrive/Vault/`. Ask your assistant for the exact path on your laptop.

(If you don't have cloud sync set up, get it set up before continuing. Cloud sync is non-negotiable here — it's how the vault stays backed up, accessible from your phone for mobile capture later in this section, and durable across machines.)

### 2.2 What's inside the starter vault

Open the vault folder in your file manager (Finder on Mac, Explorer on Windows). You'll see a structure like:

```
Vault/
├── claude.md
├── About Me.md
├── about-me/
│   ├── long-form.md
│   └── writing-rules.md
├── References/
│   ├── people/
│   ├── brands/
│   ├── tools/
│   └── products/
├── gtd/
│   ├── inbox.md
│   ├── next-actions.md
│   ├── waiting-for.md
│   ├── projects/
│   ├── someday.md
│   └── tickler.md
├── Daily Notes/
└── Meeting Notes/
```

That's the architecture. Each folder has a purpose; the rest of this section walks you through using each one.

The starter vault has placeholder files in each location with one-line explanations of what goes there.

### 2.3 Open Obsidian on the vault

Open the **Obsidian** application. (If it isn't installed, ask your assistant.)

If this is your first time opening Obsidian, it asks **Open vault**. Click **Open folder as vault** and navigate to your vault path. Obsidian opens.

You see Obsidian's interface: a left sidebar listing every file in the vault, the editor in the middle, and a right sidebar (often empty for now). Click `About Me.md` in the left sidebar. The file opens. It's currently a placeholder.

You'll be back here often. Don't navigate around yet.

## 3. Connect Cowork to the vault

### 3.1 Create a Vault Project in Cowork

In Cowork, create a new Project. Call it **Vault**. (Yes, you'll have multiple Cowork Projects now — one mounted to your work folder from Section 1, this new one mounted to the vault. That's the pattern.)

In the new Vault Project's right panel:

- **Add folder** → select the vault folder. Add it.
- **Instructions** → for now, leave blank. (We're about to fill it differently than the Workshop Project — see step 4 below.)

You now have two Cowork Projects:

- **Workshop Day 1** — mounts the work folder. Used for active work.
- **Vault** — mounts the vault. Used for vault-focused work — knowledge curation, GTD, references.

Some people merge these into one Project that mounts both folders. That works too. We start with two for clarity, and combine in step 7 below.

### 3.2 Test the connection

In your Vault Project, start a chat:

```
List the top-level folders in this vault. For each, in one line, what kind of content goes there?
```

Claude reads the vault's structure (especially the `claude.md` file at the root, which describes the layout) and replies.

```
Open About Me.md. What's in it?
```

Claude reads. Replies. Right now `About Me.md` is a placeholder, so the reply is short. We're about to fix that.

## 4. Re-home the brief

In Section 2 you wrote a chief-of-staff brief and pasted it into your Workshop Project's Instructions field. That worked, but it has a problem: the brief is locked inside one Cowork Project. A new Project doesn't see it. A new chat in a new Project starts cold.

Now we move the brief into the vault, where every Cowork Project mounting the vault picks it up automatically.

### 4.1 The four files

Four files share the load.

- **`<vault>/claude.md`** — a one-line pointer at the vault root. Claude reads this first when mounting the vault. It says *"the standing brief is in About Me.md."*
- **`<vault>/About Me.md`** — the chief-of-staff brief, the same one you wrote in Section 2. The short version Claude reads at the start of every conversation.
- **`<vault>/about-me/long-form.md`** — the longer version, with more detail about your history, your operating philosophy, your team. Claude doesn't read this every conversation — only when you ask it to or when a task warrants it.
- **`<vault>/about-me/writing-rules.md`** — explicit rules about how you write. *"No semicolons. No 'leverage' as a verb. Plain words. Active voice."* Claude reads this when drafting in your voice.

### 4.2 Move the brief

In Cowork's Vault Project, open a chat:

```
Open the About Me.md file at the vault root. Replace its contents with the following brief. Preserve the heading structure if there is one; otherwise format with clear headings.

[paste the brief from your Workshop Project's Instructions field]
```

Claude opens the file and rewrites it. Open `About Me.md` in Obsidian to verify — it should now contain the brief.

### 4.3 Add the writing rules

Same chat, or a new one:

```
Open about-me/writing-rules.md in the vault. Write a list of rules describing how I write. Pull the rules from the brief in About Me.md (especially the "How I write" section). Format as a numbered list. Each rule one line. Be specific.
```

Claude generates the rules. Read them in Obsidian. Add or remove anything that's wrong.

### 4.4 Add the long-form

Same chat:

```
Open about-me/long-form.md. Write a longer-form version of the brief — more detail than About Me.md. Cover my history, how I think, my team in more depth, the kind of decisions I'm wrestling with this year. Use the interview answers from Section 2 as raw material if helpful.
```

Long-form is for situations where you want Claude to know more than the short brief. You can ask Claude to read it explicitly when needed.

### 4.5 Pin the pointer

Open `<vault>/claude.md` in Obsidian. It should already be a placeholder. Make it say:

```
# About this vault

The standing brief is in About Me.md — read it at the start of any conversation that benefits from knowing who I am.

Longer-form context is in about-me/long-form.md — read on request.

Writing rules are in about-me/writing-rules.md — read when drafting in my voice.

References (people, brands, tools, products) are under References/.

GTD lists are under gtd/. Active projects under gtd/projects/.
```

Save. From now on, **any Cowork Project that mounts this vault** picks up your brief automatically. New laptop, new Cowork install, new Project — it all works as long as the vault is mounted.

### 4.6 Update Workshop Project

Go back to your Workshop Day 1 Project. In the right panel:

- **Add folder** → select the vault folder. Add it. (Now Workshop Day 1 mounts both the work folder and the vault.)
- **Instructions** → replace the brief with a one-liner: *"This Project mounts the vault. The standing brief is in vault/About Me.md."*

Test: start a fresh chat in Workshop Day 1 and ask:

```
Who am I and what am I working on?
```

Claude reads `claude.md`, follows the pointer to `About Me.md`, and answers as if you'd installed the brief into this Project's instructions. Same effect, persistent across Projects.

## 5. References — your knowledge base

The `References/` folder is your second brain in the strict sense — facts and context you accumulate, organised so Claude can find them.

### 5.1 The four reference categories

The starter vault gives you four:

- **`References/people/`** — one file per person you work with often. Their role, how you work with them, their preferences, what they're working on. *"Diana — board chair, ex-CFO, sharp on margins, prefers numbers up front, dislikes hedging language."*
- **`References/brands/`** — one file per brand you work with. The brand book — colours, voice, examples — captured the way you captured one in Section 1's capstone.
- **`References/tools/`** — one file per tool, app, or platform you use enough that context matters. *"Asana — we use it for engineering projects only. Sales uses Salesforce. Don't suggest moving sales to Asana."*
- **`References/products/`** — one file per product or product line in your portfolio. Description, status, key contacts, recent decisions.

### 5.2 Add your first three

Don't try to fill every category at once. Pick three things that come up in your work this week.

```
Open References/people/diana-chen.md in the vault. (Create it if it doesn't exist.) Write a one-page reference for Diana — what role she has, how I work with her, her preferences, the recent context. Use the brief in About Me.md as background. If anything's not covered, ask me.
```

Claude generates the reference, asks any gaps. You answer. The file is written.

Same shape for a brand, a tool, a product. Three references in ten minutes.

### 5.3 How Claude finds them

Cowork doesn't read every file in the vault on every reply (that would blow context). It reads `claude.md` at the root, follows pointers, and reads other files **on demand** — when the conversation references something it can find.

Practical pattern: you can ask explicitly:

```
Read References/people/diana-chen.md before drafting this email.
```

Or you can let Claude figure it out:

```
Draft a one-paragraph email to Diana on the Q3 numbers. Use whatever context exists in the vault.
```

Claude reads the relevant references, writes the email.

## 6. GTD — your task system, run from Cowork

David Allen's **Getting Things Done** is the de facto productivity system for executives. Five lists, a weekly review, and a way to keep your head clear. We're not going to teach GTD theory here — there's a book; read it if you haven't. We are going to wire GTD up in your vault so Claude runs it for you.

### 6.1 The vault's GTD layout

```
gtd/
├── inbox.md         — capture everything here, process later
├── next-actions.md  — concrete next physical actions
├── waiting-for.md   — things you're waiting on others for
├── projects/        — one file per active project (multi-step work)
├── someday.md       — maybe-someday list
└── tickler.md       — defer-until-date items
```

### 6.2 The skills

In Section 2 you installed the workshop skill pack. Some of those skills are for GTD:

- `/capture <thing>` — appends a bullet to `gtd/inbox.md`. Used a hundred times a week.
- `/process-inbox` — walks you through inbox items one at a time, asks the GTD clarifying questions, moves each to the right list.
- `/whats-next` — surfaces next actions, optionally filtered by context, energy, or time available.
- `/waiting-for` — lists what you're waiting on.
- `/weekly-review` — walks the weekly review, surfaces stale items, prompts the standard questions.
- `/project <name>` — drills into one project — outcome, next action, history, related items.
- `/projects` — lists active projects.
- `/new-project` — scaffolds a new project (we'll use this in step 7).

### 6.3 Capture — your first habit

`/capture` is the most-used skill in the system. Whenever something comes up — a task, an idea, a worry — capture it. Don't process it. Capture it.

```
/capture call the architect about the office buildout — they were going to send revised drawings
```

The skill appends a bullet to `gtd/inbox.md`. Two seconds. You move on.

Try a few. Capture three things you're thinking about right now. Open `gtd/inbox.md` in Obsidian — they're there.

### 6.4 Process the inbox

End of day, or whenever the inbox feels full:

```
/process-inbox
```

Claude reads the first inbox item. Asks the standard GTD questions: *Is it actionable? If yes, can it be done in under two minutes? If yes, do it now. If no, is it a single action or a project? Who is it waiting on?* — and routes it accordingly.

You walk through five or ten items in a few minutes. Inbox is empty. The items are in their right lists.

### 6.5 What's next

In the morning, or whenever you have a window:

```
/whats-next at the office, 30 minutes
```

Claude surfaces next actions doable at the office in 30 minutes. You pick one. You do it.

### 6.6 Weekly review

Friday afternoon or Monday morning:

```
/weekly-review
```

Claude walks you through: stale waiting-fors, projects without next actions, accomplishments worth noting, the upcoming week's calendar. The whole review takes 30 minutes and clears your head for the week.

GTD is now Cowork-resident. You never open Trello, Notion, or Todoist for it. The lists live in your vault; the skills run them.

## 7. Mobile capture — Dispatch

Capture only works if it's friction-free at the moment something hits you. The hardest moments are between meetings, in cars, at lunch. You don't open your laptop. You should still capture.

:::variant mobile_access
:::case full
**You use your phone a lot:** the mobile capture story below is the right path for you. Install once, use a hundred times a week. This is where most senior operators' inboxes actually get fed.
:::case limited
**You barely use your phone for work:** mobile capture is still useful for the moments where something hits you on the road or between meetings. Set it up lightly (one widget on the home screen) rather than building a habit you won't keep. If you have an executive assistant who handles your phone, also see the variant below.
:::endvariant

:::when has_assistant=true
:::callout
**You have an executive assistant** — the cleanest version of mobile capture for you: give your assistant access to write into your vault's inbox (via shared cloud sync). When you tell them *"capture this for me"*, they append to `gtd/inbox.md` exactly the way the app would. Some workshop alumni run capture mostly through their assistants this way and skip the phone app entirely.
:::
:::

### 7.1 What Dispatch is

**Dispatch** (or whichever tool the workshop is using this season — your assistant will have the current pick) is a small phone app. You hit a button. Speak. The transcribed text gets appended to a file in your cloud sync — specifically, to `<vault>/gtd/inbox.md`.

The chain: phone → cloud sync → your laptop's vault folder → Cowork.

### 7.2 Setup — step by step

Your workshop tech team handles the install on your phone — it takes under five minutes. The walkthrough below is what they do, so you know what's happening:

1. **Install the app** from the App Store (iOS) or Play Store (Android). The workshop currently uses Dispatch — your assistant will tell you the exact app name if it's switched.
2. **Sign in to your cloud account.** Whichever cloud sync your vault lives in (Dropbox, OneDrive, Google Drive, iCloud) — sign in to the same one on your phone. The app needs write access to the folder containing your vault.
3. **Pick the destination file.** In the app's settings, set the destination to your vault's `gtd/inbox.md`. The app shows a file picker; navigate to your vault folder and pick the file.
4. **Set the format.** Tell the app to append (not overwrite) — each capture becomes a new bullet at the end of the file.
5. **Test the trigger.** Most apps offer a home-screen widget, a hotkey, or an iOS Shortcut. Pick whichever fits your phone.

### 7.3 Try it now

Step out of the room. Trigger the app. Speak something into the phone — *"reminder, send the Q4 forecast to the CFO before Wednesday"* or whatever's actually on your mind. Wait a few seconds for the cloud to sync.

Back at your laptop, open `gtd/inbox.md` in Obsidian. The captured item is there as a bullet at the end.

The next time you process the inbox, this item is in scope.

### 7.4 Why this matters

The discipline of GTD is capture-everything-now-process-later. Without mobile, you lose every idea that hits between meetings. With mobile, nothing escapes. After a few weeks of using this, the laptop becomes the place where you *process* the inbox; the phone is where you *feed* it.

## 8. Work folder + `/new-project`

You now have a vault. You also have a work folder (from Section 1). Here we wire up the pattern for active work — each substantive piece of work gets its own folder, its own context, its own GTD entry.

### 8.1 The work folder shape

Open the work folder in your file manager. The starter shape is:

```
Work/
├── claude.md
├── 2026-Q3-board-deck/
│   ├── claude.md
│   ├── Source Materials/
│   ├── Working Files/
│   └── Deliverables/
└── (other projects as you create them)
```

Each project folder has the same three subfolders:

- **Source Materials/** — inputs. Briefs, data, files you didn't create. Read-only in spirit.
- **Working Files/** — drafts. Iteration. Things in progress.
- **Deliverables/** — what goes out. Final or near-final.

### 8.2 Run `/new-project`

Pick a real piece of work you have on right now — a deck, a memo, a hire, a deal. In your Workshop Day 1 Project (or whichever Project mounts the work folder):

```
/new-project
```

The skill interviews you:

- *What is the project's outcome?* — the thing you'll have at the end. *"A board deck Diana approves."*
- *What's the deadline?*
- *Who's involved?*
- *What sources should I scaffold?* — anything to drop into `Source Materials/`.

After the interview, the skill does three things:

1. **Creates the project folder** at `Work/<project-slug>/` with `Source Materials/`, `Working Files/`, `Deliverables/`, and a tailored `claude.md`.
2. **Writes the project's `claude.md`** with the outcome, deadline, key context, and standing instructions specific to this project.
3. **Adds a matching GTD project entry** at `<vault>/gtd/projects/<project-slug>.md` with outcome, next action, and a one-liner for the projects list.

Open the new folder in your file manager. Open the project file in Obsidian (`gtd/projects/<project-slug>.md`). Open `claude.md` in the project folder. Read each. They're tailored to the project you described.

### 8.3 Use the project folder

Drop relevant inputs into `Source Materials/`. In Cowork:

```
Read everything in Source Materials. What's the through-line? What are the gaps?
```

Claude reads, replies. You start drafting.

```
Draft slide 1 for this deck. Save as Working Files/draft-v1.pptx.
```

Claude builds, saves. You iterate. When the draft is final, copy or move it to `Deliverables/`.

This is the project pattern. Every substantive piece of work gets the same shape. Every shape is searchable, reviewable, archivable.

## 9. Layered `claude.md` — the closer-to-the-file rule

There are now multiple `claude.md` files in your system:

- `<vault>/claude.md` — points to the brief, the references, the GTD layout.
- `<work>/claude.md` — describes how the work folder is organised.
- `<work>/<project>/claude.md` — describes this specific project.

When you ask Claude something inside a Cowork Project that mounts both the vault and the work folder, **Claude reads multiple `claude.md` files**. There's a rule for which one wins when they conflict: **closer to the file wins.**

Practical example. The vault's `claude.md` says *"Default to formal tone."* The project folder's `claude.md` says *"This project is for an internal team — informal voice."*. When Claude is working inside that project folder, the project's `claude.md` wins. When Claude is working in the vault outside any project, the vault's wins.

This means you can have a global default (in the vault) and project-specific overrides (in each project) without conflict. Most executives don't use this much — but when you do need it, you'll be glad it works.

## 10. The complete data link

Step back and look at what you have, end of section:

- **Vault** — your standing brief, references, GTD lists, daily notes, meeting notes. Mounted to Cowork.
- **Work folder** — projects, each with Source Materials / Working Files / Deliverables. Mounted to Cowork.
- **Connectors** — Gmail/M365, Calendar, Drive, Slack, your custom apps. Live, in Cowork.
- **Skills** — GTD skills running, plus whatever you build with `/skill-creator`.
- **Office add-ins** — Claude sidebars in Word, Excel, PowerPoint, with shared context.

A single Cowork chat can now: read your inbox, check your calendar, look up the brand book in your References, pull the project file from your work folder, draft a one-page memo in your voice, save it to Deliverables, and capture a follow-up to the GTD inbox.

That's the architecture. Section 4 turns it into automated daily routines and a personalised cockpit.

## What you take away

- A vault on disk, owned by you, mounted to Cowork.
- The chief-of-staff brief moved out of Project instructions into `About Me.md` — picked up by every Project automatically.
- References scaffolded — people, brands, tools, products — with three real entries.
- GTD running from Cowork — capture, process, weekly review.
- Mobile capture wired up.
- A working project folder structure with `/new-project`.
- Layered `claude.md` understood and in use.
- The full architecture in place.
