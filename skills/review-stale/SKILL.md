---
name: review-stale
description: Surfaces stale items across GTD — old next actions, old waiting-fors, old projects without recent activity. Walks them with the user to decide: keep / push / drop. Use /review-stale weekly.
---

# /review-stale — GTD Stale Item Review

When invoked, surface and action stale items across the GTD system.

## Trigger

- `/review-stale` — full sweep.
- `/review-stale projects` — only stale projects.
- `/review-stale actions` — only stale next actions.
- `/review-stale waiting` — only stale waiting-fors.

## Pre-flight

Notion connected. GTD master in Notion.

## Step 1 — pull stale items

Stale thresholds (all configurable in user's `claude.md`; defaults below):
- **Next actions:** not updated in >14 days.
- **Waiting-fors:** waiting >7 days.
- **Projects:** no next-action updated in >14 days, OR project page itself not edited in >30 days.

## Step 2 — present grouped

```
# Stale review — <date>

## Stale next actions (N)
- <action> — <project> — <last updated N days ago>

## Stale waiting-fors (N)
- <item> — <person> — waiting <N days>

## Stale projects (N)
- <project> — <outcome> — <last activity N days ago>
```

## Step 3 — walk one at a time

Per item, offer actions:

**For stale next actions:**
- Still relevant? (yes / no)
- If no → archive.
- If yes → do now / defer (move date) / delegate (`/delegate`).

**For stale waiting-fors:**
- Follow up (`/drafts-inbox` to draft) / push deadline / cancel waiting / wait longer.

**For stale projects:**
- Still active? (yes / no / on hold)
- If on hold → set status, optionally add a tickler date.
- If not active → archive.
- If active but stale → ask: what's the next concrete action?

Apply user's choice per item. Don't batch.

## Step 4 — close

Summarize:
```
Stale review complete.
- Next actions: <N reviewed, N archived, N deferred, N delegated>
- Waiting-fors: <N actioned>
- Projects: <N updated, N on hold, N archived>
```

## Don't

- Don't auto-decide for the user. Surface, ask, apply.
- Don't apologize for the volume of stale items. Stale is normal; reviewing is the point.
- Don't pre-suggest "this looks abandoned" — let the user judge.

## Failure modes

1. **Notion not connected** → tell user.
2. **No stale items** → say so, exit cheerfully.
3. **User abandons mid-review** → save state, allow resume.
