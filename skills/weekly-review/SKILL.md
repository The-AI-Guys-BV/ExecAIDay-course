---
name: weekly-review
description: Walks the GTD weekly review — surfaces stale waiting-fors, projects without next actions, accomplishments worth noting, and the upcoming week's calendar. Use /weekly-review on Monday morning or end of Friday.
---

# /weekly-review — GTD Weekly Review

When invoked, walk the user through the weekly review interactively. One section at a time, like `/teach`.

## Pre-flight

- Confirm Notion MCP is connected (the GTD database is in Notion).
- Confirm vault is mounted (Daily Notes are pulled for accomplishments).
- Confirm Calendar connector is active.

## Step 1 — accomplishments from the past week

Read the Daily Notes for the past 7 days from the user's vault. Surface 3–5 things they accomplished. Show them with brief context.

Wait. User confirms or adds. Move on.

## Step 2 — projects without next actions

Query the Notion GTD Projects database. Filter: Status = Active AND no Next-Action assigned (or Next-Action is "TBD"/empty).

Present each one. For each, ask: "What's the next concrete action?" Update Notion with the user's answer.

If no projects are missing next actions: skip the step, say "All active projects have next actions — clean."

## Step 3 — stale waiting-fors

Query Notion Waiting-For database. Filter: items waited-on > 7 days.

Present each. For each, offer:
- Follow up (drafts a follow-up email via `/drafts-inbox`)
- Push deadline (update the date in Notion)
- Cancel (move to Done, mark "no longer relevant")
- Wait longer (no change)

User picks per item. Apply.

## Step 4 — stale next-actions

Query Notion Next-Actions database. Filter: created > 14 days ago AND Status = Active.

Present each. For each, ask:
- Still relevant? (yes / no)
- If no: archive or delete.
- If yes: do you want to do it now, defer, or delegate?

Apply user's choices.

## Step 5 — upcoming week

Pull the user's calendar for the next 7 days. List meetings + significant events.

Ask: "Any prep needed for these?" Surface:
- Meetings without prior notes (suggest `/meeting-prep <title>`).
- Conflicts or back-to-back meetings.
- Travel that affects work patterns.

## Step 6 — horizon check (monthly, optional)

If today is the first weekly-review of the month, prompt the user to skim:
- Areas of focus (`/areas`)
- Goals (`/goals`)
- Vision (`/vision`)

If they want to update any of these, hand off to the relevant skill. If not, skip.

## Step 7 — close the review

Summarize what changed during the review:
- N projects updated with next actions.
- N waiting-fors actioned.
- N stale next-actions cleared.
- N meetings flagged for prep.

End. Offer: "See you next week. Want to schedule the next review now?" If yes, suggest a Cowork scheduled task or Routine for next Monday morning.

## Don't

- Don't try to do everything at once. Walk one step at a time, wait for confirmation.
- Don't make changes to Notion without the user explicitly choosing the action.
- Don't summarize accomplishments in self-congratulatory tone — just list them factually.
- Don't insist on completing every section if the user says "skip" — honor it.
- Don't generate generic motivational closings.

## Failure modes

1. **Notion not connected** → tell user; offer to walk just the calendar + Daily Notes portions.
2. **GTD database fields don't match expected schema** → list what's missing; fall back to read-only review without writes.
3. **No Daily Notes for the week** → skip Step 1, note it.
4. **User wants to abort mid-review** → save state in vault `weekly-review-state.md`, allow resume.
