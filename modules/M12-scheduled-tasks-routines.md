# M12 — Scheduled Tasks + Routines

## Why this module matters

Claude works while you sleep. The morning brief that lands on your phone before you open your laptop — that's the proof. Scheduled tasks and Routines are how Cowork becomes a team member with their own working hours.

## What you'll do

- Review the morning-brief scheduled task set up Day 1 closing (now firing tomorrow morning).
- Add a second scheduled task or Routine relevant to your workflow.
- Learn the difference: Desktop tasks (local, 1-min granularity, awake+open required) vs Routines (cloud, 1-hour min, always-on).

---

## Introduction

A scheduled task is a Claude prompt that runs on a schedule. You set it once; it fires at the cadence you specify.

Two flavors:
- **Desktop scheduled tasks** — run on your laptop, when Cowork is open. Fine-grained scheduling. Can read local files (your work folder, your vault).
- **Routines** — run on Anthropic's cloud infrastructure regardless of laptop state. 1-hour minimum interval. Cannot access local files.

Which to use depends on the task. Most workshop tasks are Desktop (need local file access). Always-on monitoring or daily summaries that don't need local files → Routines.

## Beginner / Getting Started

### Review the morning brief

If your workshop is on Day 2, you should have received a morning brief this morning via:
- A Slack post on your phone.
- An `.md` file in your Cowork folder.
- A live artifact dashboard inside Cowork.

The Day 1 closing set up this scheduled task. Open the artifact now — you'll see today's calendar, urgent emails, draft replies pending, Slack mentions overnight.

Walk through the task itself: Settings → Scheduled tasks. The morning-brief task is there with its prompt, schedule, and last-run status.

Look at the prompt. It's a multi-step instruction: read calendar, read email triage, read Slack mentions, format as artifact + Slack post + saved file. Notice the guardrail line at the top: "If running > late, summarize what was missed instead of executing the original brief."

### How scheduled task mechanics work

- Desktop task at 7am with laptop closed: SKIPPED.
- Laptop wakes at 11am: Desktop checks last 7 days for missed runs.
- One catch-up runs for the most recently missed time. Older misses discarded.
- Notification when catch-up starts.

So: a 9am task whose laptop slept all day may run at 11pm on wake. The guardrail prompt pattern is what prevents this from being a problem.

Full reference: `references/scheduled-task-patterns.md`.

## Intermediate

### Add a second scheduled task

Pick a real recurring task. Examples:
- End-of-day reflection prompt that posts to your Daily Note.
- Weekly status email draft, generated Friday morning, lands in your drafts inbox.
- Monthly report compiled from connector data on the 1st of each month.
- Project status pings (one project at a time, weekly cadence).

In Cowork → Settings → Scheduled tasks → New task.

Fill in:
- **Name** — descriptive.
- **Schedule** — cadence (e.g., "Every Monday at 8am").
- **Prompt** — the task instruction. Include guardrails.
- **Output destination** — file in vault, Slack post, email draft, artifact.

Example prompt for a weekly status email:

```
You're drafting my weekly status email to my board chair. Pull from:
- GTD next-actions from <vault>/gtd/next-actions.md (top 5 active).
- Calendar for the past week (key meetings).
- Drafts inbox (anything I sent recently to investors).

Write a 200-word update in my voice (per chief-of-staff brief). Save as a draft to
Outlook Drafts.

Guardrail: if it's not Friday morning anymore (running late catch-up Monday or later),
SKIP — return only "Skipped weekly status — too late to be useful."
```

Save. The task is set.

### Routines — cloud-based always-on

Routines run regardless of laptop state. 1-hour minimum interval.

Use Routines for:
- A morning brief that MUST land even when laptop is off all night.
- Hourly Slack channel monitoring (specific channel scoped).
- Daily report from cloud connectors only.

Don't use Routines for:
- Anything that needs local file access (your work folder, vault).
- Anything that needs to read project `claude.md`s.

Routines are configured separately in Cowork → Settings → Routines.



### Mobile capture via Dispatch

Dispatch (Anthropic, March 2026) lets you talk to your Claude mobile app, which routes the request to your desktop Cowork — which then runs the skill against your local files.

Combined with vault GTD: phone → voice → Dispatch → desktop runs `/capture` → bullet appended to `<vault>/gtd/inbox.md`. Confirmation back to your phone in seconds. Same for `/whats-next`, `/waiting-for`, `/today`.

Caveats:
- Desktop must be on (or wake-on-Dispatch enabled) for the request to land.
- Max plan required (Pro is rolling out).
- A few seconds of latency is normal.

This closes the mobile-capture gap. Voice-driven, hands-free, GTD from your phone.

## Advanced

### Guardrail prompt patterns

Every scheduled task should have a guardrail. The pattern:

```
This task is scheduled to run at <time>. If you're running this catch-up later than
<time + N hours>, do one of:
- Skip the task entirely (return: "Skipped — too late to be useful").
- Summarize what was missed instead of executing the original task.
- Run the original task with a note flagging the lateness.

Choose based on task type:
- Time-sensitive (morning brief, daily plan): SKIP if late.
- Summary-able (weekly report, project status): SUMMARIZE if late.
- Catch-up-ready (process-inbox, review-stale): RUN with lateness note.
```

Full patterns + examples: `references/scheduled-task-patterns.md`.

### Combining scheduled tasks with skills

A scheduled task can invoke a skill. Example:

```
Run /weekly-review and post the result to <Slack channel>. If today is not Monday or
Tuesday, skip — the weekly review only makes sense early in the week.
```

The skill does the work; the task automates the trigger.

### Things to avoid

- Don't schedule tasks at very tight intervals during work hours unless you really need that frequency.
- Don't post to Slack from a scheduled task without a "skip if stale" check — your team doesn't want Friday's brief on Tuesday.
- Don't use absolute language ("today's events") without resolving "today" — use ISO dates in the prompt.
- Don't set up 20 scheduled tasks at once. Pick 2-3 high-leverage ones; iterate.

---

## Try this

You added a second scheduled task or Routine relevant to your workflow. Confirmed it's set up correctly. Anticipation: it'll fire on its schedule and the next morning (or week) you'll have a new automated artifact in your stack.

## Verification checkpoint

```
List my active scheduled tasks. For each, what's the schedule and what's the output destination?
```

Expected: Claude lists at least 2 tasks (the Day 1 morning brief + the one you just added). If anything is off, edit in Settings.

## Common issues

- **Task didn't fire** — laptop was closed at the scheduled time, or Cowork wasn't open. Check the next-run time; expect catch-up on next wake.
- **Catch-up fired but produced stale output** — guardrail wasn't strong enough. Edit the prompt to skip if stale.
- **Routine timing is off** — Routines run on Anthropic's clock, not your local time. Specify timezone in the prompt.
- **Output went to wrong destination** — task config issue; check the destination field.

## References

- `references/scheduled-task-patterns.md` — guardrail patterns + examples.
- M14 — Daily Command Center (the artifact destination for the morning brief).
- `skills/weekly-review/SKILL.md` — the skill that pairs naturally with a Monday morning task.
