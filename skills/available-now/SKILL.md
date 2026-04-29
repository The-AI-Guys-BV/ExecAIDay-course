---
name: available-now
description: Surfaces next actions doable in the user's current context, energy, and time available. Use /available-now <minutes available> in <context>.
---

# /available-now — Context-Filtered Next Actions

When invoked, surface next actions matching the user's current available time, energy, and context.

## Trigger

- `/available-now` — ask about current state, then filter.
- `/available-now <N>min` — filter to actions <= N minutes.
- `/available-now <context>` — filter to a specific context (calls, desk, errands, anywhere).
- `/available-now <N>min <context>` — combined filter.
- `/available-now low-energy` — filter to low-energy items.

## Pre-flight

- Notion connected.
- GTD Next-Actions DB has fields for: Context, Energy (high/medium/low), Time-estimate.

## Step 1 — gather state

If user just typed `/available-now` alone, ask three questions in sequence:

1. "How long do you have?" (e.g., 15 min, 1 hour)
2. "What context?" (calls / desk / errands / anywhere)
3. "Energy level?" (high / medium / low)

If user typed with parameters, skip the questions for the parameters they provided.

## Step 2 — filter and present

Query Next-Actions DB with the filters. Present:
```
# Available now — <context> · <time> · <energy>

- <action> — <est time> — <project, if any>
- <action> — <est time> — <project, if any>
- ...
```

Sort by:
- Pinned/priority items first.
- Then by oldest (oldest stale items surface).

If list is long, show top 5 + "<N more, narrow filter to see fewer>."

## Step 3 — offer to start one

After presenting, offer: "Want me to start one? Type the number or paste the action text."

If user picks one, mark Status = "In Progress" in Notion. Skill exits cleanly. User does the action; runs `/done <action>` (a separate skill or manual Notion update) when finished.

## Don't

- Don't suggest items that don't match the filters.
- Don't auto-start an action without confirmation.
- Don't combine two unrelated suggestions ("Maybe you could also...").

## Failure modes

1. **Notion fields missing** (no Context / Energy / Time) → fall back to all next actions; advise updating GTD template.
2. **Empty filter result** → say so; offer to widen filter.
3. **Energy field empty on most items** → use action text length / type as a heuristic (long writing = high energy, short calls = low).
