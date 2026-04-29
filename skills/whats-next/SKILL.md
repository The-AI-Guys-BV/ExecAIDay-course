---
name: whats-next
description: Surfaces the user's GTD next actions. Filters by context, energy, time, project. Use /whats-next or /whats-next <context>.
---

# /whats-next — GTD Next Actions Query

When invoked, surface the user's next actions from `<vault>/gtd/next-actions.md`.

## Trigger

- `/whats-next` — list all active next actions, grouped by context (calls / errands / desk / etc.).
- `/whats-next <context>` — filter to one context (e.g., `/whats-next calls`).
- `/whats-next quick` — only items estimated <15 min.
- `/whats-next <project>` — filter to actions for a specific project.

## Step 1 — read vault

Read `<vault>/gtd/next-actions.md`. Filter:
- Bullets not marked done (no `#status/done` tag).
- Apply trigger-specific filters.

## Step 2 — present

Default format (no filter):
```
# Next actions

## Calls (N)
- <action> — <project, if any> — <est time>

## Desk (N)
- <action> — <project, if any> — <est time>

## Errands (N)
- ...

## Anywhere (N)
- ...
```

If filtered (e.g., `/whats-next quick`):
```
# Next actions — quick wins (under 15 min)
- <action> — <context> — <est time>
- ...
```

## Don't

- Don't pull more than 30 items in one view. If list is longer, offer to paginate or filter.
- Don't fabricate next actions; only list what's in `<vault>/gtd/next-actions.md`.
- Don't suggest what to work on. Just surface the list.
- Read-only skill; don't modify vault in this skill.

## Failure modes

1. **Vault not set up** → tell user.
2. **No active next actions** → tell user the list is empty; suggest `/process-inbox` if Inbox has items.
3. **Filter matches zero items** → tell user the filter is empty; show full list as fallback.
