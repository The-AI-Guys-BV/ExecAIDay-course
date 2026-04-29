# M05 — Projects, Folders, and `claude.md`

## Why this module matters

This is the structural module. Two folder shapes, two senses of "project," and one file (`claude.md`) that ties everything to context. Get this right and the rest of the workshop slots in. Get it wrong and you'll be confused about why Claude knows some things and not others.

## What you'll do

- Learn the two folder shapes: project folders (bounded work, three buckets) vs stream folders (recurring, flat).
- Disambiguate the two senses of "project": Cowork Project (the app's workspace) vs project folder (the file-system shape).
- Run `/new-project` for the first time — scaffold the workshop's first project folder (`course/`) and watch the synthesis interview produce a tailored `claude.md`.
- Pull workshop content from Notion into `course/Source Materials/` — your first content move.

## Time

~75 minutes.

---

## Section 1 — Introduction (~5 min)

Cowork has built-in concepts; we have folder conventions; the two interlock. This is how:

- **Cowork Project** = the app's workspace. You made one in M01. It mounts folders.
- **Folders we mount** = your vault (knowledge) and your work folder (projects).
- **Inside the work folder, your "project folders"** = bounded bodies of work, each with a specific shape.
- **Inside the vault, your "stream folders"** = recurring content (Daily Notes, References, Inbox).
- **Every folder has a `claude.md` and a `memory.md`** = per-folder context.

That's the whole architecture. M05 makes it concrete.

## Section 2 — Beginner / Getting Started (~20 min)

### The two folder shapes

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

### The two senses of "project"

**Cowork Project** = the app workspace concept (the thing you made in M01). UI-level. Mounts folders. Has its own memory.

**Project folder** = the file-system shape inside your work folder. Folder with the bucket structure.

These collide on the word "project." Both must be used together: a Cowork Project mounts your work folder, which contains your project folders.

### Why every folder has `claude.md` + `memory.md`

So Cowork has per-folder context. The vault root `claude.md` is your chief-of-staff brief (M07 writes that). The work-folder root `claude.md` is your work-context defaults. Each project folder's `claude.md` adds project-specific overrides.

Closer-to-the-file wins. So when Claude is working in `<work-folder>/q3-deck/Working Files/draft.md`, the priority is:
1. `q3-deck/claude.md` (most specific — project context).
2. `<work-folder>/claude.md` (work-context defaults).
3. `<vault>/claude.md` (chief-of-staff brief).

The project `claude.md` doesn't restate the chief-of-staff brief — it only mentions deviations.

## Section 3 — Intermediate (~30 min)

### Run `/new-project` for the first time

In Cowork:

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
3. Creates a matching GTD project entry in your Notion (Outcome, Status, Stakeholders, Deadline, Next-Action placeholder).
4. Cross-links the folder and the Notion project.
5. Confirms what was created.

You now have your first project folder + a matching GTD entry. Welcome to the workshop's working file structure.

### Pull workshop content into Source Materials

Your first content move:

```
Pull the welcome doc and the how-to-start doc from this plugin into course/Source Materials/.
```

Claude reads `docs/welcome.md` and `docs/how-to-start.md` from the installed plugin and copies them into `<work-folder>/course/Source Materials/`. Now your workshop project has its initial inputs.

This is the pattern: Source Materials gets the raw inputs (from anywhere — plugin, web, email, conversation transcripts). Working Files is where you iterate. Deliverables is what you ship.

## Section 4 — Advanced (~15 min)

### Multi-Cowork-Project patterns

Post-workshop, you'll create more Cowork Projects — one per major body of work. Each new Cowork Project mounts your vault + a relevant subset of your work folder.

The default: one Cowork Project named "Workshop" (the one you have now), mounting everything.

For sensitive work (M&A, exec personnel): a separate Cowork Project that does NOT mount the vault — so the chief-of-staff brief and personal context don't cross-pollinate. Vault-less Cowork Projects are the security pattern.

### Vault-less Cowork Projects

Create a new Cowork Project. Mount only the work folder (or a specific project subfolder). Don't mount the vault. The chief-of-staff brief won't apply. Claude treats the work strictly within the project's context.

Use case: a board-prep project that touches confidential financial data; you don't want personal notes crosslinked.

### Cross-folder workflows

Within one Cowork Project mounting both folders, Claude can read both freely. So a daily note in the vault can reference a project's Working Files; a project's Deliverable can be summarized into a Daily Note for the day's reflection.

This is where the architecture pays off. The two folders are different in shape but unified in scope (within a Cowork Project).

---

## Micro-win

Run `/new-project course` (or whatever name you prefer). Skill interviews you, scaffolds the folder, synthesizes a tailored `claude.md`, creates the GTD project entry in Notion. First content pulled from this plugin into `course/Source Materials/`. You now have your first project folder, your first GTD project entry, and the muscle for `/new-project`.

## Verification checkpoint

After running `/new-project`, type:

```
What's in my course/ project folder right now? Read the claude.md.
```

Expected: Claude reads the project's `claude.md` and reports the synthesized brief — outcome, stakeholders, timeline, format overrides, etc. — along with the bucket subfolders. If `claude.md` is empty or missing, the scaffold didn't complete; rerun `/new-project`.

## Common issues

- **`/new-project` fails on Notion write** — Notion might not be connected; skill will scaffold the folder anyway and prompt to retry the GTD entry.
- **Project folder name conflicts** — skill prompts for a different slug.
- **Synthesized `claude.md` looks generic** — the interview was too short; rerun with more detail in answers.
- **Bucket subfolders empty** — that's correct; they ship empty per the architecture.

## References

- `templates/work-folder-starter/` — the work folder starter content.
- `templates/project-folder-template/` — the project folder template.
- `skills/new-project/SKILL.md` — the skill spec.
- M07 — Chief of Staff `claude.md` (the vault root brief).
- M13 — GTD in Notion (the Notion side of `/new-project`).
