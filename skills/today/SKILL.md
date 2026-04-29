---
name: today
description: Today's plan — pulls calendar, urgent next actions, drafts waiting, and meetings to prep. Use /today first thing in the morning.
---

# /today — Today's Plan

When invoked, produce a focused snapshot of today.

## Trigger

- `/today` — full snapshot.
- `/today brief` — abbreviated version (top 3 of each category).

## Step 1 — pull data

In parallel:
- Calendar: today's events (Calendar connector).
- Notion GTD: top 5 next actions, by priority + age.
- Notion GTD: stale waiting-fors (>7 days).
- Drafts inbox: drafts pending review.
- Slack mentions overnight (last 16h).
- Email urgent (per `/email-triage` heuristics, today only).

## Step 2 — present

```
# Today — <date>

## Calendar
- <time> — <event> — <attendees>
- ...

## Top 5 next actions
1. <action> — <project, if any> — <est time>
2. ...

## Drafts pending review (N)
- Last edited: <time>. Run `/drafts-inbox` to review.

## Stale waiting-fors (>7 days, N)
- <item> — <person> — waiting <N> days

## Slack overnight (N mentions)
- <channel> — <sender> — <1-line of message>

## Urgent email (N)
- <sender> — <subject>
```

If a section is empty, say "Nothing here" or skip it (skip preferred for cleanliness).

## /today brief

Top 3 per category, no context. Two-paragraph version.

## Don't

- Don't recommend what to start with. Surface the data; the user decides.
- Don't include "have a great day" or other filler.
- Don't include yesterday's leftovers unless explicitly requested (separate skill: `/yesterday`).
- Don't combine into a Daily Command Center artifact — that's M14's separate live artifact.

## Failure modes

1. **Calendar connector down** → skip calendar section, flag.
2. **Notion connector down** → skip GTD sections, flag.
3. **No mentions / drafts / urgent items** → omit those sections.
