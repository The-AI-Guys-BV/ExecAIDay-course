---
name: new-project
description: Scaffolds a new bounded-work project. Three coordinated effects: tailored project folder, vault project file, and work-folder scaffold. Use /new-project <optional name>. Use /new-project <optional name>.
---

# /new-project — New Bounded-Work Project

When invoked, conduct an interactive interview, then produce three coordinated effects:

1. **Tailored project `claude.md`** — synthesized by merging the vault root `claude.md` (chief-of-staff brief) + work-folder root `claude.md` + project-specific overrides from interview.
2. **Project folder scaffolded** under the work folder: `<work-folder>/<project-slug>/` containing `claude.md` + `memory.md` + `Source Materials/` + `Working Files/` + `Deliverables/`.
3. **Vault project file** created at `<vault>/gtd/projects/<slug>.md` Fields: Outcome, Status (Active), Stakeholders, Deadline, Next-Action placeholder, link to file-system project folder.

## Trigger

- `/new-project <project-name>` — name supplied; skip the name question.
- `/new-project` — ask for the name first.

## Interview structure

Ask one question at a time. Conversational, not menus. **Question count is NOT capped.** Ask until you have enough context to write a brief that fits this project specifically. Skip questions whose answers are already obvious from existing `claude.md` context.

### Required interview categories (cover all unless context already provides)

- **Project slug** (lowercase, hyphenated, for filename and cross-references).
- **Outcome** — what does "done" look like? One sentence.
- **Stakeholders** — who's involved? Who needs visibility? Who has approval rights?
- **Timeline** — by when? Hard deadline or soft target? Milestones?
- **Source materials** — what existing docs, links, conversations, transcripts feed this? Offer to pull from Drive / Slack / email if needed.
- **Format / tone overrides** — anything that deviates from chief-of-staff defaults (e.g., "board-facing, more formal" or "regulated industry, no claims without citations").
- **Sensitivity / confidentiality** — anything that should NOT cross-reference from other projects? Restricted access?
- **Skills / connectors needed** — does this project rely on specific connectors or skills the user hasn't enabled?

### Optional follow-ups (when relevant)

- **Related projects** — does this build on existing GTD projects? Cross-link.
- **Risks** — known unknowns, things to flag.
- **Cadence** — daily / weekly check-ins? Drives a scheduled-task suggestion at the end.
- **Success metrics** — leading indicators before "done."

### Interview discipline

- One question at a time. Wait for the answer.
- Don't summarize the previous answer back ("So you said..."). Move to the next question.
- Short clear answers? Accept them. Don't probe unless ambiguity blocks writing the brief.
- "I don't know yet"? Capture as TBD in the brief, move on.
- After 6–8 questions: pause and ask "I have enough to draft the brief. Want me to proceed, or are there more constraints I should know?"

## Synthesis logic — building the project `claude.md`

Produce a project `claude.md` with this structure (omit sections not relevant):

```
# Project: <Display Name>

## What this project is
<2–3 sentence description from interview>

## Outcome
<what done looks like>

## Stakeholders
<list from interview>

## Timeline
<deadline + milestones if any>

## Format / tone for this project
<DEVIATIONS from chief-of-staff brief only — don't restate inherited defaults>

## Constraints / sensitivities
<from interview, if any>

## Source materials
<links to source materials, key external links>

## Notes
<scheduled tasks suggested, related GTD project link, etc.>
```

### Inheritance rules

- **Chief-of-staff brief** sets defaults for voice, tone, communication style. Project `claude.md` mentions only deviations; never restates.
- **Work-folder brief** sets defaults for work-context. Project `claude.md` mentions only deviations.
- **Project `claude.md` is small** (≤30 lines typical). Cowork's hierarchical `claude.md` loading does the merging at read time. The skill does NOT dump parent contents into the project file.

## Side effects beyond the folder

1. **Vault project file** created at `<vault>/gtd/projects/<slug>.md` with the workshop's standard project structure:
   - Outcome (sentence)
   - Status: Active
   - Stakeholders
   - Deadline
   - Next-Action placeholder ("Define first concrete next action — see project folder")
   - Folder path link
2. **Cross-links** between project folder `claude.md` and vault project file — vault path reference in folder structure.
3. **Suggested scheduled task** if cadence implies one (e.g., weekly status check). Skill OFFERS; doesn't auto-create.

## Verification (skill confirms before exiting)

- Folder created at expected path with all subfolders.
- `claude.md` and `memory.md` written. Skill reads the brief back for sanity check.
- Vault project file created and ready for editing.
- Cross-links written.

If any step fails: report which step failed and what state the project is in (partial scaffold, etc.).

## Failure modes

1. **Vault not mounted** → skill warns, scaffolds folder only, prompts to mount vault before retry.
2. **Work folder not mounted in current Cowork Project** → skill prompts user to mount, then resumes.
3. **Vault not mounted** → skill warns chief-of-staff inheritance is reduced; offers to proceed with work-folder brief only or pause.
4. **Project name conflicts with existing folder** → skill prompts for alternative slug.
5. **Interview interrupted** (user types `cancel`, session breaks) → skill saves partial state in the new project's `memory.md`. Next `/new-project` invocation with same name detects partial state and offers resume.
6. **Vault project file schema doesn't match** → skill creates with available fields, flags mismatch.
7. **Synthesized `claude.md` too long** (>50 lines) → skill self-corrects by deferring more content to work-folder root or project `memory.md`. Project `claude.md` stays lean.

## Don't

- Don't dump parent `claude.md` contents into the project file.
- Don't pre-categorize ("This sounds like a board project — let me set..."). Just gather facts and synthesize.
- Don't refuse to scaffold if vault is unavailable. Folder + `claude.md` should still happen.
- Don't ask for compensation, salary, or other personal-financial-personal information unless the user volunteers it.
