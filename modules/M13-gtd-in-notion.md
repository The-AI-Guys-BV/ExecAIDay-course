# M13 — GTD in Notion

## Why this module matters

David Allen's GTD, but you never have to open Notion. The 19 GTD skills make it work from Cowork — capture, process, query, review. The Notion database is infrastructure; Claude is the interface. This is the module where your task management gets unified — no more sticky notes, no more inbox-as-todo-list, no more "let me write that down somewhere."

> Methodology credit: **David Allen's Getting Things Done** (2001, revised 2015). The five-step GTD method (capture, clarify, organize, reflect, engage) is what these skills operationalize. We didn't invent the method — we built the interface.

## What you'll do

- Tour the GTD Notion template (Inbox, Next Actions, Projects, Waiting For, Someday/Maybe, Reference, Weekly Review).
- Run `/capture` — watch the item appear in Notion's Inbox without you opening Notion.
- Try `/whats-next`, `/waiting-for`, `/process-inbox`.
- Combine a scheduled task + GTD: weekly review every Monday morning.

---

## Section 1 — Introduction

GTD's core insight: your brain is for having ideas, not holding them. Externalize everything into a trusted system. Then your brain is free to think.

The five steps:
1. **Capture** — get everything out of your head into one inbox.
2. **Clarify** — for each thing, decide: is it actionable? What's the next action? Single step or project?
3. **Organize** — file each thing in the right list (next actions, projects, waiting for, someday, reference).
4. **Reflect** — review weekly. What's stale? What needs my attention?
5. **Engage** — choose what to do based on context, energy, time available.

This module gives you the Cowork-driven version of all five.

## Section 2 — Beginner / Getting Started

### Tour the GTD Notion template

Open the workshop's Notion master. Navigate to the GTD section. You'll see databases:

- **Inbox** — capture surface. Everything new goes here first.
- **Next Actions** — single-step things you can do (with Context, Energy, Time-estimate, Project link).
- **Projects** — multi-step outcomes (with Outcome statement, Stakeholders, Deadline, Next-Action link).
- **Waiting For** — things you've delegated or are waiting on someone else for.
- **Someday/Maybe** — might do later, not committed.
- **Reference** — facts and notes you want findable.
- **Weekly Review** — checklist for your weekly walkthrough.

Plus higher horizons:
- **Areas of Focus** — ongoing responsibility domains.
- **Goals** — 1-2 year outcomes.
- **Vision** — 3-5 year direction.

This is the GTD database structure. Most of the time, you won't open Notion at all. The skills do the work.

### `/capture` — your first GTD move

In Cowork:

```
/capture remind me to follow up with the legal team on the trademark filing
```

Boom. Item appears in your Notion GTD Inbox. You never opened Notion. That's the felt micro-win.

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

Shows only quick items. Useful when you have a small chunk of time.

## Section 3 — Intermediate

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

Walk through 3-5 items. The skill enforces the GTD discipline — you don't just dump items into "later," you actively decide.

### `/waiting-for`

```
/waiting-for
```

Lists what you're waiting on, grouped by person.

```
/waiting-for stale
```

Surfaces items waited >7 days. For each, offers: follow up (drafts via `/drafts-inbox`), push deadline, cancel, wait longer.

### `/delegate`

When a next action is for someone else:
```
/delegate Send me the Q3 numbers to John
```

Skill drafts the delegation email, creates the Waiting-For entry in Notion, marks the original Next-Action as delegated. You confirm before the email sends.

### Combining scheduled task + GTD

Set up a Monday morning weekly review:

In Cowork → Settings → Scheduled tasks → New:
- Name: Weekly review reminder.
- Schedule: Mondays at 8:30am.
- Prompt:
```
Tell me to run /weekly-review now. Surface as a Slack DM to me with the link to today's review.
```

Now every Monday you get the nudge. Skill does the heavy lifting.

## Section 4 — Advanced

### Higher horizons skills

GTD has horizons above next actions. Most workflows live at next-actions and projects (the ground level). The higher horizons matter quarterly+.

- `/areas` — ongoing responsibility domains.
- `/goals` — 1-2 year outcomes.
- `/vision` — 3-5 year direction.
- `/horizons-review` — full walkthrough.

Don't try to set all three on Day 1. Let them accumulate as you reflect.

### `/tickler` — defer to a future date

When you don't want to act now but want to be reminded:
```
/tickler review the Q4 hiring plan in 3 weeks
```

Lands in the Tickler database. Surfaces 3 weeks from now via `/tickler review`.

### `/checkout` — end of day

```
/checkout
```

Walks: what got done today, what's still open, what's tomorrow's #1. Logs to today's Daily Note + creates next-actions in Notion.

End-of-day discipline. The point is the daily review, not the time savings.

### Team GTD considerations

Workshop's locked decision: team GTD only works if EVERY team member does their personal GTD. One laggard contaminates the system. Don't push team GTD on people who haven't done personal first.

External collaborators are out — keep team GTD inside the org. Notion sharing permissions get thorny fast.

If your team is interested, run them through this workshop too. Otherwise, your personal GTD works fine standalone.

---

## Micro-win

`/capture remind me to follow up with the legal team on the trademark filing` in Cowork. Item appears in your Notion GTD Inbox. You never opened Notion. Infrastructure-as-interface proof.

The pattern repeats: capture from Cowork, process from Cowork, query from Cowork, review from Cowork. Notion is the database; Cowork is your interface.

## Verification checkpoint

```
What's in my Notion Inbox right now?
```

Expected: Claude lists Inbox items including the one you just captured. If the count is 0 or doesn't include your capture, the connector or DB schema may be off.

## Common issues

- **`/capture` writes to wrong DB** — Notion connector scope or DB schema mismatch. Your assistant fixes.
- **`/process-inbox` items stay in Inbox after processing** — skill should move items; if it doesn't, check Notion connector has write permission.
- **`/waiting-for` shows zero items** — either no waiting-fors yet (correct) or DB filter mismatch.
- **Higher-horizon skills (/areas, /goals, /vision) fail** — those DBs may not be in your Notion master yet. Suggest setting up before running them.

## References

- `skills/capture/SKILL.md`, `skills/process-inbox/SKILL.md`, `skills/whats-next/SKILL.md`, etc. — all 19 GTD skills.
- M14 — Daily Command Center (which surfaces GTD next-actions in the artifact).
- M12 — scheduled tasks (pair with GTD for weekly review automation).
- David Allen, *Getting Things Done* (revised 2015) — the source.
