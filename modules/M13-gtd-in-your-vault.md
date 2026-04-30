# M13 — GTD

## Why this module matters

David Allen's GTD, run from Cowork. Capture, process, query, review. This is the module where your task management gets unified — no more sticky notes, no more inbox-as-todo-list, no more "let me write that down somewhere."

You pick where the GTD data lives: in your **Obsidian vault** (default — files at `<vault>/gtd/`) or in **Notion** (databases). Both work. You run **one**, not both.

> Methodology credit: **David Allen's Getting Things Done** (2001, revised 2015). The five-step GTD method (capture, clarify, organize, reflect, engage) is what these skills operationalize. We didn't invent the method — we built the interface.

## What you'll do

- Pick your GTD store: Obsidian (default) or Notion.
- Set up the chosen store.
- Run `/capture` — watch the item land in the right place without you switching apps.
- Run `/whats-next`, `/waiting-for`, `/process-inbox`.
- Combine GTD with a scheduled task: a weekly review every Monday morning.

---

## Introduction

GTD's core insight: your brain is for having ideas, not holding them. Externalize everything into a trusted system. Then your brain is free to think.

The five steps:
1. **Capture** — get everything out of your head into one inbox.
2. **Clarify** — for each thing, decide: is it actionable? What's the next action? Single step or project?
3. **Organize** — file each thing in the right list (next actions, projects, waiting for, someday, reference).
4. **Reflect** — review weekly. What's stale? What needs my attention?
5. **Engage** — choose what to do based on context, energy, time available.

This module gives you the Cowork-driven version of all five.

## Pick your GTD store: Obsidian or Notion

You pick **one**. Running both is overhead, not value — two places to forget about, two places to drift, two places to keep in sync. Pick the one whose UI you'll actually open and stick with it.

**Option A — Obsidian vault.** Your GTD lives as plain files at `<vault>/gtd/` — `inbox.md`, `next-actions.md`, `projects/`, etc. Free, local, private. The 19 GTD skills work out of the box. Mobile capture via Dispatch (M12). Default for the workshop.

**Option B — Notion.** Your GTD lives as Notion databases. Familiar UI for many execs, polished mobile app. Costs a Notion subscription. Skills route to your Notion via a `claude.md` hint pattern that tells Cowork exactly which databases to use (so it doesn't search your whole Notion every time).

Quick guide to the choice:

| Question | Pick Obsidian | Pick Notion |
|---|---|---|
| Already heavy Notion user? | — | yes |
| Want zero subscriptions? | yes | — |
| Want fully local + offline? | yes | — |
| Want polished mobile UI? | (Dispatch is fine) | yes |
| Want it Just To Work with the workshop's skills? | yes | — |

**Pick one now.** Tell your assistant. Walk only the matching section below.

## Beginner / Getting Started

### Option A — Obsidian vault GTD

#### Tour the GTD vault layout

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

References live in `<vault>/References/` as you already use them. The 19 GTD skills read and write these files.

#### Tag conventions (vault GTD)

Inline tags only. No YAML frontmatter. Example bullet:

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

#### Try `/capture`

In Cowork:

```
/capture remind me to follow up with the legal team on the trademark filing
```

A new bullet appears in `<vault>/gtd/inbox.md`. You never opened Obsidian. That's the felt moment.

### Option B — Notion GTD

#### Step 1 — Connect Notion to Cowork

1. In Cowork, open the **Customize** sidebar.
2. Go to **Connectors**, click the **+** icon, pick **Notion** from the list.
3. A browser window opens for OAuth. Sign in to your Notion account, click **Allow access**.
4. Cowork now has the Notion connector active. Verify in Customize → Connectors — Notion shows as Connected.

#### Step 2 — Set up the GTD databases in Notion

Either duplicate the workshop's GTD template (your assistant has the link) or build your own. Standard databases:

- **Inbox** — capture surface. One field: Item.
- **Next Actions** — Item, Context (select), Energy (select), Time (select), Project (relation to Projects), Status, Created.
- **Projects** — Outcome, Status, Stakeholders, Deadline, Next-Action (relation to Next Actions).
- **Waiting For** — Item, Person, Created, Due.
- **Someday/Maybe** — Item, Created.
- **Tickler** — Item, Surface date.
- **Areas / Goals / Vision** (optional, higher horizons).

#### Step 3 — Share each database with Claude

Notion's permission model is **per-page** — sharing your top-level workspace doesn't give Cowork access to nested databases. For each database above:

1. Open the database in Notion.
2. Click the **···** menu (top-right) → **Connections**.
3. Add the **Claude** connection (or whatever the integration is named in your Notion).
4. Repeat for every database.

Without this step, Cowork can authenticate but can't read or write any pages.

#### Step 4 — Tell Cowork the structure (the `claude.md` hint pattern)

This is the key efficiency move. Without it, every GTD operation makes Cowork search your entire Notion. With it, Cowork targets the right database directly.

Open `<vault>/claude.md` (the vault root file M07 set up). Add a Notion-GTD pointer block:

```
GTD lives in Notion. Use the Notion connector for all GTD operations.

Database links:
- Inbox: https://www.notion.so/<your-workspace>/<inbox-page-id>
- Next Actions: https://www.notion.so/<your-workspace>/<next-actions-page-id>
- Projects: https://www.notion.so/<your-workspace>/<projects-page-id>
- Waiting For: https://www.notion.so/<your-workspace>/<waiting-for-page-id>
- Someday: https://www.notion.so/<your-workspace>/<someday-page-id>
- Tickler: https://www.notion.so/<your-workspace>/<tickler-page-id>

Routing rules:
- /capture: append a row to Inbox. Item field = the captured text. Don't search; go straight to the Inbox database.
- /whats-next: query Next Actions where Status = Active, sorted by priority and Created. Don't search; go straight to Next Actions.
- /process-inbox: walk Inbox rows, ask the GTD clarifying questions per item, then move the row to the right destination database.
- /waiting-for: query Waiting For grouped by Person.
- /delegate: append a row to Waiting For. Mark the original Next Action as Cancelled.
- /tickler: append a row to Tickler with the Surface date set.

Don't search Notion globally for any of these. Use the page IDs above.
```

Replace each `https://www.notion.so/...` with the actual URL of your Notion database (right-click the database tab → Copy link).

Why this matters: Cowork reads `claude.md` at the start of every conversation. With the routing rules in place, when you say `/capture`, Cowork knows to write a row to the Inbox database directly — no scanning, no asking which database, no latency.

#### Try `/capture`

In Cowork:

```
/capture remind me to follow up with the legal team on the trademark filing
```

A new row appears in your Notion Inbox database. You never opened Notion. That's the felt moment.

## Intermediate

### `/process-inbox`

Walks each Inbox item with you and asks the GTD questions:

1. Is it actionable? (yes / no)
2. If yes: what's the next concrete action?
3. Single step or part of a project?
4. Quick to do? (yes → do now)
5. Who does it? (me / delegate)

Run `/process-inbox`. The skill adds the right tags / fields and moves the item from Inbox to its destination — `next-actions.md` (vault) or Next Actions database (Notion), and so on.

### `/whats-next` and `/waiting-for`

```
/whats-next
```

Lists your next actions, grouped by context (calls / errands / desk / etc.). Read-only — you decide what to do. `/whats-next quick` shows only short items.

```
/waiting-for
```

Lists items grouped by person. `/waiting-for stale` surfaces items waited >7 days; for each, offers follow-up (drafts via `/drafts-inbox`), push deadline, cancel, or wait longer.

### `/delegate`

```
/delegate Send me the Q3 numbers to John
```

Drafts the delegation email, appends a Waiting For entry tagged with the person, and marks the original Next Action as cancelled. You confirm before the email sends.

### Combining scheduled task + GTD

A Monday morning weekly review:

In Cowork → Settings → Scheduled tasks → New:
- **Name:** Weekly review reminder.
- **Schedule:** Mondays at 8:30am.
- **Prompt:**
```
Tell me to run /weekly-review now. Surface as a Slack DM to me with the link to today's review.
```

Now every Monday you get the nudge. The skill does the heavy lifting.

### Mobile capture via Dispatch

Capture from your phone. The Claude mobile app + Dispatch routes voice/text requests to your desktop Cowork, which runs `/capture`. Same for `/whats-next`, `/waiting-for`, `/today`. See M12.

Works for both Obsidian and Notion GTD — Cowork uses your `claude.md` to know which to target.

## Advanced

### Higher horizons

GTD has horizons above next actions. Most workflows live at next-actions and projects. The higher horizons matter quarterly+.

- `/areas` — ongoing responsibility domains.
- `/goals` — 1–2 yr outcomes.
- `/vision` — 3–5 yr direction.
- `/horizons-review` — full walkthrough.

Don't try to set all three on Day 1. Let them accumulate as you reflect.

### `/tickler` — defer to a future date

```
/tickler review the Q4 hiring plan in 3 weeks
```

Adds a tickler item with a future surface date. `/tickler review` shows what's surfacing today.

### `/checkout` — end of day

```
/checkout
```

Walks: what got done today, what's still open, what's tomorrow's #1. Logs to today's Daily Note. End-of-day discipline. The point is the daily review, not the time savings.

### Why one store, not two

Two GTD stores = two places to forget about, two places to update, two places to drift. The whole point of GTD is a single trusted system. If you're already heavy on Notion, pick Notion. If you want zero subscriptions and full local control, pick Obsidian. Don't try to mirror — that's its own maintenance burden.

### Team GTD considerations

Workshop's locked decision: team GTD only works if EVERY team member does their personal GTD. One laggard contaminates the system. Don't push team GTD on people who haven't done personal first.

External collaborators are out — keep team GTD inside the org.

If your team is interested, run them through this workshop too. Otherwise, your personal GTD works fine standalone.

---

## Try this

`/capture remind me to follow up with the legal team on the trademark filing` in Cowork. Open your store (vault Inbox or Notion Inbox) — the item is there with `created:<today>`. You never opened the store yourself. Infrastructure-as-interface proof.

The pattern repeats: capture from Cowork, process from Cowork, query from Cowork, review from Cowork.

## Verification checkpoint

```
What's in my GTD inbox right now?
```

Expected: Claude lists Inbox items including the one you just captured. If it's empty or wrong, the routing in your `claude.md` may be off — your assistant checks.

## Common issues

- **`/capture` writes to wrong place** — vault path or Notion `claude.md` routing is off. Your assistant fixes.
- **Notion: Cowork can authenticate but can't read pages** — you didn't share each database with the Claude connection. Open each Notion database → ··· → Connections → add Claude. Repeat for every database.
- **Notion: every GTD command takes long** — `claude.md` doesn't have the database URLs. Add them per the Step 4 pattern above.
- **Vault: `/process-inbox` items stay in inbox after processing** — Cowork doesn't have write permission to the vault. Re-mount or check filesystem permissions.
- **Higher-horizon files don't exist** — run `/areas`, `/goals`, or `/vision` once with no args; the skill creates the file or database row with a stub.

## References

- `references/gtd-vault-layout.md` — vault GTD file structure and tag conventions.
- M14 — Daily Command Center (surfaces GTD next-actions in the artifact, works with either store).
- M12 — scheduled tasks (pair with GTD for weekly review automation; also covers Dispatch for mobile capture).
- David Allen, *Getting Things Done* (revised 2015) — the source.
