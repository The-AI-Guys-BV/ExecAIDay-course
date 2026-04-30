# M13 — GTD in your vault

## Why this module matters

David Allen's GTD, but stored as files in your Obsidian vault. The 19 GTD skills make it work from Cowork — capture, process, query, review. Your vault is the database; Cowork is the interface; Obsidian is the read-side. This is the module where your task management gets unified — no more sticky notes, no more inbox-as-todo-list, no more "let me write that down somewhere."

> Methodology credit: **David Allen's Getting Things Done** (2001, revised 2015). The five-step GTD method (capture, clarify, organize, reflect, engage) is what these skills operationalize. We didn't invent the method — we built the interface.

## What you'll do

- Tour the GTD vault layout (`<vault>/gtd/inbox.md`, `next-actions.md`, `projects/`, `waiting-for.md`, `someday.md`, `tickler.md`, plus higher horizons).
- Run `/capture` — watch the item appear as a bullet in `inbox.md` without you opening Obsidian.
- Try `/whats-next`, `/waiting-for`, `/process-inbox`.
- Combine a scheduled task + GTD: weekly review every Monday morning.

---

## Introduction

GTD's core insight: your brain is for having ideas, not holding them. Externalize everything into a trusted system. Then your brain is free to think.

The five steps:
1. **Capture** — get everything out of your head into one inbox.
2. **Clarify** — for each thing, decide: is it actionable? What's the next action? Single step or project?
3. **Organize** — file each thing in the right list (next actions, projects, waiting for, someday, reference).
4. **Reflect** — review weekly. What's stale? What needs my attention?
5. **Engage** — choose what to do based on context, energy, time available.

This module gives you the Cowork-driven version of all five — backed by files in your vault.

## Beginner / Getting Started

### Tour the GTD vault layout

Open Obsidian. Navigate to `<vault>/gtd/`. You'll see:

- `inbox.md` — capture surface. Everything new goes here first as a bullet.
- `next-actions.md` — single-step items. Bullets with `#context/...`, `#energy/...`, `#time/...` tags.
- `projects/` — folder, one file per project. Outcome at top, stakeholders, deadline, current next-action linked.
- `waiting-for.md` — delegated items, bullets with `@person:...`.
- `someday.md` — might do later, not committed.
- `tickler.md` — defer-to-future items, bullets with `surface:YYYY-MM-DD`.
- `areas.md` — ongoing responsibility domains.
- `goals.md` — 1–2 yr outcomes.
- `vision.md` — 3–5 yr direction.

References live in `<vault>/References/` as you already use them.

The 19 GTD skills read and write these files. You normally don't open them by hand, but they're plain-text files viewable in Obsidian or any text editor.

### Tag conventions

Inline tags only. No YAML frontmatter. Examples on a next-action bullet:

```
- [ ] Follow up with legal team on trademark filing #context/calls #energy/low #time/quick @project:trademark-filing created:2026-04-29
```

Tag list:
- Context: `#context/calls`, `#context/desk`, `#context/errands`, `#context/anywhere`.
- Energy: `#energy/high`, `#energy/medium`, `#energy/low`.
- Time: `#time/quick`, `#time/medium`, `#time/long`.
- People: `@person:john`.
- Projects: `@project:q3-board-deck`.
- Dates: `created:`, `due:`, `surface:` followed by `YYYY-MM-DD`.
- Status: `#status/active` (default), `#status/done`, `#status/cancelled`.

The skills filter and sort by these tags. You don't have to memorize them — `/process-inbox` adds them when you clarify items.

### `/capture` — your first GTD move

In Cowork:

```
/capture remind me to follow up with the legal team on the trademark filing
```

Boom. A new bullet appears in `<vault>/gtd/inbox.md`. You never opened Obsidian. That's the felt moment.

Try a few more captures over the day. Build the habit.

### `/whats-next`

```
/whats-next
```

Lists your next actions, grouped by context (calls / errands / desk / etc.). Read-only — you decide what to do.

Try filtered:
```
/whats-next quick
```

Shows only `#time/quick` items. Useful when you have a small chunk of time.

## Intermediate

### `/process-inbox`

The clarifying step. Walks each Inbox item with you and asks the GTD questions:

1. Is it actionable? (yes / no)
2. If yes: what's the next concrete action?
3. Single step or part of a project?
4. Quick to do? (yes → do now)
5. Who does it? (me / delegate)

Run it:
```
/process-inbox
```

Walk through 3–5 items. The skill adds the right tags, moves the bullet from `inbox.md` to the right destination file (`next-actions.md`, `waiting-for.md`, `someday.md`, `projects/<slug>.md`, etc.). You don't dump items into "later" — you actively decide.

### `/waiting-for`

```
/waiting-for
```

Reads `<vault>/gtd/waiting-for.md`, lists items grouped by person.

```
/waiting-for stale
```

Surfaces items waited >7 days (computed from `created:` tag). For each, offers: follow up (drafts via `/drafts-inbox`), push deadline, cancel, wait longer.

### `/delegate`

When a next action is for someone else:
```
/delegate Send me the Q3 numbers to John
```

Skill drafts the delegation email, appends a bullet to `<vault>/gtd/waiting-for.md` with `@person:john created:<today>`, and moves the original next-action bullet (if it was already in `next-actions.md`) — adding `#status/cancelled`. You confirm before the email sends.

### Combining scheduled task + GTD

Set up a Monday morning weekly review:

In Cowork → Settings → Scheduled tasks → New:
- Name: Weekly review reminder.
- Schedule: Mondays at 8:30am.
- Prompt:
```
Tell me to run /weekly-review now. Surface as a Slack DM to me with the link to today's review.
```

Now every Monday you get the nudge. The skill does the heavy lifting.

### Mobile capture via Dispatch

You can capture from your phone. The Claude mobile app + Dispatch (March 2026) routes voice/text requests to your desktop Cowork, which runs `/capture`, which appends the bullet to `<vault>/gtd/inbox.md`. Same for `/whats-next`, `/waiting-for`, `/today`. See M12 for setup.

## Advanced

### Higher horizons skills

GTD has horizons above next actions. Most workflows live at next-actions and projects (the ground level). The higher horizons matter quarterly+.

- `/areas` — ongoing responsibility domains (`<vault>/gtd/areas.md`).
- `/goals` — 1–2 yr outcomes (`<vault>/gtd/goals.md`).
- `/vision` — 3–5 yr direction (`<vault>/gtd/vision.md`).
- `/horizons-review` — full walkthrough.

Don't try to set all three on Day 1. Let them accumulate as you reflect.

### `/tickler` — defer to a future date

When you don't want to act now but want to be reminded:
```
/tickler review the Q4 hiring plan in 3 weeks
```

Appends a bullet to `<vault>/gtd/tickler.md` with `surface:2026-05-20` (3 weeks from today). Surfaces 3 weeks from now via `/tickler review`.

### `/checkout` — end of day

```
/checkout
```

Walks: what got done today, what's still open, what's tomorrow's #1. Appends a closing block to today's daily note in `<vault>/Daily Notes/<today>.md`. Creates next-actions in `next-actions.md` if you mention any.

End-of-day discipline. The point is the daily review, not the time savings.

### Why files instead of a database

Trade-off, plainly. A database tool gives you structured fields, joins, and a polished mobile app. Files give you: zero subscriptions, plain-text portability, version control, native Obsidian integration (backlinks, search, graph), and one home for tasks + knowledge. Plus Dispatch closes the mobile-capture gap.

For an executive working primarily from one laptop with cloud-synced vault, files win.

### Team GTD considerations

Workshop's locked decision: team GTD only works if EVERY team member does their personal GTD. One laggard contaminates the system. Don't push team GTD on people who haven't done personal first.

External collaborators are out — keep team GTD inside the org.

If your team is interested, run them through this workshop too. Otherwise, your personal GTD works fine standalone.

---

## Try this

`/capture remind me to follow up with the legal team on the trademark filing` in Cowork. Open `<vault>/gtd/inbox.md` in Obsidian. The bullet is there with `created:<today>`. You never opened the file by hand. Infrastructure-as-interface proof.

The pattern repeats: capture from Cowork, process from Cowork, query from Cowork, review from Cowork. The vault is the database; Cowork is your interface.

## Verification checkpoint

```
What's in my GTD inbox right now? Read <vault>/gtd/inbox.md.
```

Expected: Claude lists Inbox items including the one you just captured. If the count is 0 or doesn't include your capture, your assistant should check the vault path and `<vault>/gtd/inbox.md` exists.

## Common issues

- **`/capture` writes to wrong place** — `<vault>/gtd/inbox.md` doesn't exist or vault path is off. Your assistant fixes.
- **`/process-inbox` items stay in inbox after processing** — skill should remove the bullet from `inbox.md` and write it to the destination file. If it doesn't, check Cowork has write permission to the vault.
- **`/waiting-for` shows zero items** — either no waiting-fors yet (correct) or `waiting-for.md` is empty.
- **Higher-horizon skills (/areas, /goals, /vision) fail** — those files may not exist yet. Run `/areas`, `/goals`, or `/vision` once with no args; the skill creates the file with a stub.

## References

- `references/gtd-vault-layout.md` — full file structure and tag conventions.
- M14 — Daily Command Center (which surfaces GTD next-actions in the artifact).
- M12 — scheduled tasks (pair with GTD for weekly review automation; also covers Dispatch for mobile capture).
- David Allen, *Getting Things Done* (revised 2015) — the source.
