---
name: waiting-for
description: Lists items the user is waiting on someone else for. Surfaces stale items needing follow-up. Use /waiting-for or /waiting-for stale.
---

# /waiting-for — GTD Waiting-For Query

When invoked, surface items the user is waiting on others to deliver.

## Trigger

- `/waiting-for` — full list, sorted by date waited.
- `/waiting-for stale` — only items waited >7 days.
- `/waiting-for <person>` — items waiting on a specific person.

## Step 1 — read vault

Read `<vault>/gtd/waiting-for.md`. Filter:
- Bullets not marked done (no `#status/done` tag).
- Apply trigger-specific filters.

## Step 2 — present

```
# Waiting for

## <Person 1> (N items)
- <item> — waiting <N days> — <project, if any>
- ...

## <Person 2> (N items)
- ...
```

For `stale` filter, surface "needs follow-up" prominently:
```
# Stale waiting-fors (>7 days)

- <item> — <person> — waiting <N days> — <project>
  → Suggest: follow up via `/drafts-inbox` or push the deadline.
- ...
```

## Step 3 — offer action (if `stale`)

For each stale item, offer:
- Draft follow-up email (`/drafts-inbox`)
- Update expected date in `<vault>/gtd/waiting-for.md`
- Mark as no longer waiting (move to Done or Trash)

User picks per item or batches.

## Don't

- Don't suggest follow-up unprompted on non-stale items.
- Don't draft follow-up emails without explicit user request.
- Don't pull the user's email history to verify whether something has actually been delivered — that's brittle. Trust the vault state.

## Failure modes

1. **Vault not set up** → tell user.
2. **Empty waiting-for list** → tell user; suggest reviewing if anything they're waiting on isn't tracked yet.
3. **Person's name doesn't match exactly** → fuzzy match by first name; if multiple matches, ask.
