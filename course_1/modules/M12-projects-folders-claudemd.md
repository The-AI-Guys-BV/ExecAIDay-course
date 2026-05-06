# M12 — Work folder, projects, claude.md

## Why this module matters

This is the structural module. You'll create your second Cowork Project ("Workshop"), learn two folder shapes, two senses of "project," and one file (`claude.md`) that ties everything to context. Get this right and the rest of the workshop slots in. Get it wrong and you'll be confused about why Claude knows some things and not others.

## What you'll do

- Create your second Cowork Project, named "Workshop." Mount your work folder and your vault.
- Disambiguate the two senses of "project": Cowork Project (the app's workspace) vs project folder (the file-system shape).
- Learn the two folder shapes: project folders (bounded work, three buckets) vs stream folders (recurring, flat).
- Run `/new-project` for the first time — scaffold the workshop's first project folder (`course/`) and watch the synthesis interview produce a tailored `claude.md`.
- Pull workshop content from the plugin into `course/Source Materials/` — your first content move.

---

## Introduction

Until now you've worked entirely in your "Vault" Cowork Project (created in M03). That project mounts only the vault — knowledge, About Me, References. This module introduces a second Cowork Project for project work.

The architecture has two layers:

- **Cowork Projects** = the app's workspace concept. You'll have two by the end of this module: "Vault" (M03, vault only) and "Workshop" (M12, work folder + vault).
- **Folders mounted in those projects** = the vault (knowledge) and the work folder (project deliverables).
- **Inside the work folder, your "project folders"** = bounded bodies of work, each with a specific shape (Source Materials / Working Files / Deliverables).
- **Inside the vault, your "stream folders"** = recurring content (Daily Notes, References, Inbox).
- **Every folder has a `claude.md` and a `memory.md`** = per-folder context, layered closest-to-the-file wins.

That's the whole architecture. M12 makes it concrete.

## Beginner / Getting Started

### Step 1 — Create your second Cowork Project

In Cowork, click **+ New Project** (the same button you used in M03 to create the Vault project).

- Name it: **Workshop**.
- Click **Create**.

The new project opens. You're in a different scope from your Vault project — empty chat history, no folders mounted yet.

You can switch back to Vault any time via the project switcher at the top of the Cowork sidebar. From now on you'll move between two projects: **Vault** for personal knowledge work, **Workshop** for project deliverables.

### Step 2 — Mount the work folder + the vault

In the new Workshop project, find **Mounted folders**:

1. Click **+ Add folder**. Browse to your work folder (placed there by your assistant before the workshop, inside your cloud-sync app). Confirm.
2. Click **+ Add folder** again. Browse to your vault. Confirm.

The Workshop project now mounts both folders. Why both:

- **Work folder** — bounded project work happens here (Source Materials / Working Files / Deliverables).
- **Vault** — your About Me brief, `about-me/` companions, and `References/` come along for the ride. Cross-folder workflows depend on this — a project Deliverable that pulls a stakeholder bio from `References/people/` only works if the vault is mounted in the same Cowork Project.

The Vault project still mounts only the vault. The Workshop project mounts both. Different scopes, different uses, intentional separation.

### Step 3 — The two folder shapes

**Project folders** (bounded work with deliverables):

```
<work-folder>/<project-name>/
├── claude.md         # project-specific context
├── memory.md         # patterns Cowork learns about this project
├── Source Materials/ # incoming inputs
├── Working Files/    # in-progress
└── Deliverables/     # finished outputs
```

Has an outcome. Ships and ends. Examples: `q3-board-deck/`, `refactor-onboarding/`, `course/`.

**Stream folders** (recurring content, flat):

```
<vault>/<stream-name>/
├── claude.md         # stream-specific context
├── memory.md
└── (flat content — dated files, captured items, linked notes)
```

Unbounded. No end state. Recurring. Examples: `Daily Notes/`, `References/`, `Inbox/`. The `about-me/` folder is the special stream (every vault has it).

### Step 4 — The two senses of "project"

**Cowork Project** = the app workspace concept (the things you made in M03 and just now in Step 1). UI-level. Mounts folders. Has its own memory and conversation history. You have two: Vault and Workshop.

**Project folder** = the file-system shape inside your work folder. A folder with the bucket structure (Source Materials / Working Files / Deliverables) for one bounded body of work. You'll create your first one next, in Intermediate.

These collide on the word "project." Both must be used together: a Cowork Project ("Workshop") mounts your work folder, which contains your project folders.

### Step 5 — Why every folder has `claude.md` + `memory.md`

So Cowork has per-folder context. The vault root `claude.md` is a one-line pointer to your chief-of-staff brief (M04 set this up). The work-folder root `claude.md` is your work-context defaults. Each project folder's `claude.md` adds project-specific overrides.

Closer-to-the-file wins. So when Claude works on a file at `[work-folder]/q3-deck/Working Files/draft.md`, it reads in this order, with later files overriding earlier ones:

1. `[vault]/claude.md` → which points to `[vault]/About Me.md` (chief-of-staff brief).
2. `[work-folder]/claude.md` (work-context defaults).
3. `[work-folder]/q3-deck/claude.md` (project context — most specific).

The project `claude.md` doesn't restate the chief-of-staff brief — it only mentions deviations.

## Intermediate

### Run `/new-project` for the first time

Make sure you're in your **Workshop** Cowork Project (project switcher, top-left). Then in chat:

```
/new-project course
```

The skill conducts an interview. It will ask you things like:
- What's the project outcome?
- Who are the stakeholders?
- What's the timeline?
- Any tone or format overrides for this project?
- What source materials feed this?

Answer naturally. The interview isn't capped — the skill asks until it has enough to write a brief that fits THIS project specifically. A few questions in, it'll pause: "I have enough. Want me to proceed?" Say yes.

Then:
1. The skill creates `<work-folder>/course/` with all the bucket subfolders.
2. Writes a tailored `claude.md` synthesizing your interview answers + the chief-of-staff brief + work-folder defaults.
3. Creates a matching GTD project entry at `<vault>/gtd/projects/<slug>.md` (Outcome, Status, Stakeholders, Deadline, Next-Action placeholder).
4. Cross-links the project folder and the GTD project file.
5. Confirms what was created.

You now have your first project folder + a matching GTD entry. Welcome to the workshop's working file structure.

### Pull workshop content into Source Materials

Your first content move:

```
Pull the welcome doc and the how-to-start doc from this plugin into course/Source Materials/.
```

Claude reads `docs/welcome.md` and `docs/how-to-start.md` from the installed plugin and copies them into `<work-folder>/course/Source Materials/`. Now your workshop project has its initial inputs.

This is the pattern: Source Materials gets the raw inputs (from anywhere — plugin, web, email, conversation transcripts). Working Files is where you iterate. Deliverables is what you ship.

## Advanced

### Multi-Cowork-Project patterns

You now have two Cowork Projects: **Vault** (vault only, M03) and **Workshop** (work folder + vault, this module). Post-workshop, you'll likely add a few more — one per major body of work, each scoped to a relevant subset of your folders.

The three patterns you'll use:

- **Vault** — vault only. Personal knowledge, journaling, chief-of-staff brief, References lookups. Created in M03.
- **Workshop** — work folder + vault. General project work; the one you'll spend most of your week in. Created in this module.
- **Sensitive (vault-less)** — work folder or a specific project subfolder, **without** the vault mounted. For M&A, exec personnel, board confidential, or anything you want explicitly walled off from your About Me / personal context. The chief-of-staff brief doesn't apply here — Claude treats the work strictly within the project's scope.

### Creating the sensitive (vault-less) project

Create a new Cowork Project. Mount only the work folder (or a specific project subfolder). Don't mount the vault. The chief-of-staff brief won't apply. Claude treats the work strictly within the project's context.

Use case: a board-prep project that touches confidential financial data; you don't want personal notes crosslinked.

### Cross-folder workflows in the Workshop project

Within the Workshop project, both folders are mounted, so Claude can read both freely. So a daily note in the vault can reference a project's Working Files; a project's Deliverable can be summarized into a Daily Note for the day's reflection.

This is where the architecture pays off. The two folders are different in shape but unified in scope (within the Workshop Cowork Project).

### When to use Vault vs Workshop

Quick test for which Cowork Project to open:

- Writing a journal entry, reading a reference, updating About Me, querying knowledge → **Vault**.
- Running `/new-project`, building a deck or memo, working in Source Materials → **Workshop**.
- Pulling a vault reference into a deliverable (e.g., brand spec into a deck) → **Workshop** (because both folders are mounted).
- Sensitive work that shouldn't see your About Me → a third, vault-less Cowork Project.

---

## Try this

In your **Workshop** Cowork Project, run `/new-project course` (or whatever name you prefer). The skill interviews you, scaffolds the folder, synthesizes a tailored `claude.md`, and creates the GTD project entry as a vault file. Then pull the first content from this plugin into `course/Source Materials/`. You now have your second Cowork Project, your first project folder, your first GTD project entry, and the muscle for `/new-project`.

## Verification checkpoint

After running `/new-project`, in your Workshop project, type:

```
What's in my course/ project folder right now? Read the claude.md.
```

Expected: Claude reads the project's `claude.md` and reports the synthesized brief — outcome, stakeholders, timeline, format overrides, etc. — along with the bucket subfolders. If `claude.md` is empty or missing, the scaffold didn't complete; rerun `/new-project`.

## Common issues

- **Workshop project doesn't see the vault.** Both mounts must be in place for `/new-project` to write the matching GTD entry. Confirm in Mounted folders that both the work folder and the vault are listed and connected.
- **`/new-project` ran but the GTD entry isn't in `<vault>/gtd/projects/`.** The vault mount didn't take in the Workshop project. Re-mount the vault, then re-run `/new-project` (it'll detect the existing folder and write the missing GTD entry).
- **Project folder name conflicts.** Skill prompts for a different slug. Pick one and retry.
- **Synthesized `claude.md` looks generic.** The interview was too short; rerun with more detail in answers — specific stakeholders, concrete deadlines, explicit tone overrides.
- **Bucket subfolders empty.** That's correct; they ship empty per the architecture. You'll fill Source Materials and Working Files as the project moves.
- **You're in the wrong Cowork Project.** Look at the project switcher (top-left). If you're in Vault, switch to Workshop. `/new-project` won't scaffold correctly without the work folder mounted.

## References

- `templates/work-folder-starter/` — the work folder starter content.
- `templates/project-folder-template/` — the project folder template.
- `skills/new-project/SKILL.md` — the skill spec.
- M03 — your first Cowork Project (Vault).
- M04 — chief-of-staff `claude.md` (the vault root brief).
- M14 — GTD in your vault (the GTD side of `/new-project`).
