---
name: projects
description: Lists active GTD projects. Use /projects to see active, /projects all for the full list, /projects stalled for projects with stale next actions.
---

# /projects — GTD Projects List

When invoked, surface projects from Notion.

## Trigger

- `/projects` — Active projects only.
- `/projects all` — All projects (Active, On Hold, Completed within 90 days).
- `/projects stalled` — Active projects whose next-action hasn't been touched in >14 days.
- `/projects <keyword>` — filter by name keyword.

## Step 1 — query

Notion GTD Projects DB. Filter by trigger.

## Step 2 — present

Default `/projects` (Active):
```
# Active projects (N)

## <Project name>
- Outcome: <one-line>
- Next action: <action> — <updated N days ago>
- Stakeholders: <names>
- Deadline: <date or "—">

## <Project name>
- ...
```

For `/projects stalled`, lead with the staleness count and offer to run `/review-stale`.

For `/projects <keyword>`, filter inline; if zero matches, list active projects as fallback.

## Don't

- Don't include archived projects unless `all` is specified.
- Don't summarize project status — list the facts in Notion.
- Don't recommend which to focus on.

## Failure modes

1. **Notion not connected** → tell user.
2. **No projects** → suggest `/new-project` to start one.
3. **Project DB schema mismatched** (missing Outcome / Next-Action / Stakeholders fields) → list what's there, flag schema issue.
