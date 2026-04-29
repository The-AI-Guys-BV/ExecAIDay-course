# Scheduled Task Guardrail Patterns

Scheduled tasks fire when they fire. Sometimes the laptop is closed; sometimes you're in a meeting; sometimes the timing is wrong. These prompt patterns prevent inappropriate output.

## How scheduled task mechanics work in 2026 Cowork

- Desktop scheduled tasks run **only when laptop is awake AND Cowork is open.**
- If those conditions aren't met at the scheduled time: task is **SKIPPED.**
- When the laptop wakes or Cowork reopens: Desktop checks last 7 days for missed runs.
- **One catch-up run** for the MOST RECENTLY missed time. Older misses are discarded.
- Notification when the catch-up starts.
- Daily task that missed 6 days runs ONCE on wake.
- A 9am task whose laptop slept all day may run at 11pm on wake.

**Routines** (April 2026, cloud-based) run on Anthropic's infrastructure regardless of laptop state. 1-hour minimum interval. Can't access local files. Use for always-on reports.

## The guardrail prompt pattern

Build this into every scheduled task prompt:

```
This task is scheduled to run at <time>. If you're running this catch-up later than <time + N hours>, do one of:
- Skip the task entirely (return: "Skipped — too late to be useful").
- Summarize what was missed instead of executing the original task.
- Run the original task with a note flagging the lateness.

Choose based on the task type:
- Time-sensitive (morning brief, daily plan): SKIP if late.
- Summary-able (weekly report, project status): SUMMARIZE if late.
- Catch-up-ready (process-inbox, review-stale): RUN with lateness note.
```

## Examples by task type

### Morning brief (time-sensitive — skip if late)

```
You're producing the morning brief for <date>. If it's after 11am local time, skip — return only "Brief skipped — already past noon, the day is in flight." Otherwise, produce the brief: ... [normal brief instructions]
```

### Weekly report (summary-able — summarize if late)

```
Weekly report task for week ending <Friday>. If it's already Tuesday of the following week or later, produce a SHORT summary instead of the full weekly report — 5 bullets max, the major themes only. If running on time (Friday or weekend), produce the full report.
```

### Process inbox (catch-up-ready — run with lateness note)

```
Daily inbox-process task. Run this regardless of timing — backlog is fine. If you're running >24h after the scheduled time, prepend the output with "[Catch-up — task was scheduled for <original time>]".
```

## Things to avoid in scheduled task prompts

- Don't assume "today" means the calendar date the task fires on. Use absolute dates.
- Don't write prompts that depend on specific times of day without a guardrail.
- Don't have a scheduled task post to Slack without a "skip if stale" check — your team doesn't want Friday's brief on Tuesday.
- Don't schedule tasks faster than 5-minute intervals during work hours unless you really need that frequency. Compute and notification overhead adds up.

## Combining scheduled tasks with skills

Skills and scheduled tasks compose. A scheduled task can invoke a skill:

```
Run /weekly-review and post the result to <Slack channel>. If today is not Monday or Tuesday, skip — the weekly review only makes sense early in the week.
```

## When to use Routines instead

If the task can run without local files (no `claude.md` or `memory.md` access needed) and 1-hour granularity is fine, Routines are the better choice — they always run regardless of laptop state. Use for:

- Always-on morning brief that needs to land even if your laptop is off all night.
- Daily reports that pull from cloud connectors only (Slack, Notion, Calendar).
- Periodic monitoring (every hour) of an inbox or a Slack channel.

Don't use Routines for: anything that needs to read your work folder, project `claude.md`s, or local Obsidian vault content — those require Desktop tasks.
