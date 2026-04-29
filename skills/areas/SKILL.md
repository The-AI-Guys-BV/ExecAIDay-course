---
name: areas
description: Manages Areas of Focus — ongoing responsibility domains. Use /areas to list, /areas add <area> to add, /areas <area> to drill into one.
---

# /areas — Areas of Focus

When invoked, manage the user's Areas of Focus (GTD higher-altitude horizon — ongoing responsibility domains).

## Trigger

- `/areas` — list current Areas.
- `/areas add <area>` — add a new Area (with optional 1-line description).
- `/areas <area-name>` — drill into one Area.
- `/areas review` — walk the list interactively (alias for `/horizons-review areas`).

## /areas (list)

Read `<vault>/gtd/areas.md`. Present:
```
# Areas of Focus

- **<Area>** — <1-line description>
- **<Area>** — <1-line description>
- ...
```

## /areas add

Append to `<vault>/gtd/areas.md`. Ask for one-line description if input is just a name.

## /areas <area-name>

Pull related items:
- Active projects in this area.
- Active next-actions in this area (linked or tagged).
- Goals in this area.

Present:
```
# Area: <Name>

<Description>

## Active projects (N)
- <project> — outcome — next action
- ...

## Standalone next actions (N)
- <action>
- ...

## Linked goals (N)
- <goal> — target
- ...

## What might need attention but isn't tracked
<inferred — leave blank if nothing>
```

## Don't

- Don't auto-categorize projects into areas — let the user tag explicitly.
- Don't suggest new areas unsolicited.
- Don't recommend balancing time across areas.

## Failure modes

1. **File not set up** → suggest setting up; offer template.
2. **No projects/actions tagged with this area** → say so; offer to add tags retroactively.
