---
name: someday
description: Manages the Someday/Maybe list — things you might do but aren't committed to. Use /someday to view, /someday add <thing> to add, /someday review to walk the list.
---

# /someday — Someday/Maybe Management

When invoked, manage the user's Someday/Maybe list in Notion.

## Trigger

- `/someday` — list current Someday items.
- `/someday add <thing>` — add an item directly to Someday (skips Inbox).
- `/someday review` — walk the list interactively, decide per item: keep, activate (move to Projects/Next-Actions), or trash.
- `/someday <topic>` — filter by keyword.

## /someday (default — list)

Query Notion Someday DB. Present grouped by category if categorized, otherwise flat list:
```
# Someday / Maybe

## Career (N)
- <item> — added <date>

## Reading (N)
- <item> — added <date>

## Travel (N)
- <item> — added <date>

(N total)
```

## /someday add

Append directly to Someday DB. Skip Inbox. One-line confirmation.

## /someday review

Walk one at a time:
1. Show item.
2. Ask: keep / activate / trash?
   - **Keep** → no change.
   - **Activate** → move to Projects (multi-step) or Next Actions (single-step). Asks the project/action question if not obvious.
   - **Trash** → archive.
3. Continue or pause.

After review, suggest: "Run /someday review again in 6 months — Someday lists go stale fast."

## Don't

- Don't auto-categorize items unless the user explicitly tags them.
- Don't move items out of Someday without explicit choice.
- Don't suggest activating items based on "this seems doable" — let the user decide.

## Failure modes

1. **Notion not connected** → tell user.
2. **Someday DB empty** → say so; suggest capturing future-maybe items there as they come up.
