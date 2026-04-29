---
name: goals
description: Manages 1–2 year Goals. Use /goals to list, /goals add <goal>, /goals <goal-name> to drill into one, /goals review for the walkthrough.
---

# /goals — Goals (1–2 year horizon)

When invoked, manage the user's Goals (GTD horizon: 1–2 year outcomes).

## Trigger

- `/goals` — list current Goals.
- `/goals add <goal>` — add a new Goal.
- `/goals <goal-name>` — drill into one.
- `/goals review` — walkthrough (alias for `/horizons-review goals`).

## /goals (list)

Query Notion Goals DB. Present:
```
# Goals (1–2 year)

- **<Goal>** — target: <date or metric> — status: <on track / at risk / drifting>
- ...
```

## /goals add

Ask:
- Goal title.
- Target (date or measurable outcome).
- Linked Area (optional).

Append to Notion.

## /goals <goal-name>

Drill in:
- Goal record.
- Driving projects (filter Projects by Linked Goal).
- Linked next actions.
- Recent activity (last meeting, last update).

```
# Goal: <Name>

Target: <date or metric>
Status: <on track / at risk / drifting>
Linked area: <Area>

## Driving projects (N)
- <project> — status — next action

## Recent activity
- <date>: <event>
- ...
```

## Don't

- Don't generate goals — only record what the user states.
- Don't push for SMART formatting unless the user wants it.
- Don't auto-flag a goal as "at risk" — the user judges.

## Failure modes

1. **No Goals DB** → suggest setting up.
2. **Goal has no driving projects** → flag: "This goal has nothing pulling it. Want to scope a project (`/new-project`)?"
