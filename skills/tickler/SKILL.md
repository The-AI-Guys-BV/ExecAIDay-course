---
name: tickler
description: Tickler file — defer something to a future date when it should reappear. Use /tickler <thing> on <date> or /tickler review to see what surfaces today.
---

# /tickler — Tickler File / Future Reminders

When invoked, defer items to future dates or review what's surfaced for today.

## Trigger

- `/tickler <thing> on <date>` — defer to the date.
- `/tickler <thing> in <N> days/weeks/months` — relative defer.
- `/tickler review` — show items surfacing today and overdue ticklers.
- `/tickler list` — show all upcoming ticklers (next 30 days).

## Step 1 — defer

Append to `<vault>/gtd/tickler.md`:
- Item title.
- Surface date (parsed from input).
- Created date.
- Source: which next-action / project / capture this came from, if any.

Confirm one-line: `Tickler set: "<item>" on <date>.`

## Step 2 — review (`/tickler review`)

Read `<vault>/gtd/tickler.md`:
- Surface date <= today, not yet processed.
- Surface date in the next 7 days (heads-up).

Present:
```
# Tickler — <date>

## Surfacing today (N)
- <item> — created <N days ago>
  → Action: capture to Inbox / convert to next-action / defer further / drop

## Heads up (next 7 days, N)
- <date> — <item>
- ...
```

Walk each "Surfacing today" item with the user. For each:
- **Capture to Inbox** — moves to Inbox for `/process-inbox`.
- **Convert to next-action** — moves to `<vault>/gtd/next-actions.md`.
- **Defer further** — set new tickler date.
- **Drop** — archive, no longer relevant.

## Step 3 — list (`/tickler list`)

Show next 30 days of upcoming ticklers, sorted by date. No actions; just visibility.

## Don't

- Don't auto-process surfaced ticklers — let user decide each.
- Don't fabricate ticklers. Only show what's in `<vault>/gtd/tickler.md`.
- Don't recommend default deferral periods unless user asks.

## Failure modes

1. **vault not set up** → save tickler to vault `Tickler/<surface-date>.md`.
2. **Date parsing fails** → ask user for ISO date.
3. **No tickler file** → suggest setting it up.
