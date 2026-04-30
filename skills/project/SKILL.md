---
name: project
description: Drills into a specific GTD project — outcome, next action, history, related items, related emails. Use /project <name>.
---

# /project — Single Project Drill-Down

When invoked, surface everything about one project.

## Trigger

- `/project <name>` — drill into the named project.
- `/project` (alone) — list active projects, ask which to drill into.

## Step 1 — locate the project

Fuzzy-match by project name in files in `<vault>/gtd/projects/`. If multiple matches, ask. If zero, ask user to retype or list active projects.

## Step 2 — pull related context

For the located project:
1. **Project record:** read from `<vault>/gtd/projects/<slug>.md`, extract outcome, status, stakeholders, deadline.
2. **Active next action(s):** search `<vault>/gtd/next-actions.md` for bullets tagged `@project:<slug>`.
3. **Waiting-for items:** search `<vault>/gtd/waiting-for.md` for bullets tagged `@project:<slug>`.
4. **Project folder:** check work folder for matching project subfolder. List file count in `Source Materials/`, `Working Files/`, `Deliverables/`.
5. **Recent emails:** search inbox for emails tagged with the project (if email connector supports tagging) or with project name in subject. Last 5.
6. **Slack threads:** search Slack for project name. Last 5 threads.
7. **Related files:** any other files in the project folder or vault.

## Step 3 — present

```
# Project: <Display Name>

## State
- Status: <Active / On Hold / Completed>
- Outcome: <sentence>
- Stakeholders: <names>
- Deadline: <date or —>

## Next action(s)
- <action> — <est time> — <updated N days ago>

## Waiting on (N)
- <item> — <person> — waiting <N days>

## Folder (`<work-folder>/<project-slug>/`)
- Source Materials: <N files>
- Working Files: <N files>
- Deliverables: <N files>

## Recent communications
### Email (last 5)
- <sender> — <subject> — <date>

### Slack (last 5 threads)
- <channel> — <thread starter> — <date>

## Related vault files
- <title> — <url>
```

## Step 4 — offer actions

After the drill-down, offer:
- Update next action (`/whats-next` for this project, or direct edit).
- Add a waiting-for.
- Mark project complete.
- Open the project folder.
- Schedule a status check (Cowork scheduled task).

## Don't

- Don't summarize "the project is going well/poorly" — surface the data, let the user judge.
- Don't auto-update fields without explicit user request.
- Don't fabricate emails or threads — only list what's actually findable.

## Failure modes

1. **Project not found** → list active projects, ask user to pick.
2. **No project folder on disk** → list everything else, flag the missing folder; offer `/new-project` to scaffold (with same name) if appropriate.
3. **Email/Slack connectors not connected** → skip those sections, flag.
