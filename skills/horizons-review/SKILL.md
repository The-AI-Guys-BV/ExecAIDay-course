---
name: horizons-review
description: Walks GTD's higher-altitude review — Areas of Focus, Goals (1–2 yr), Vision (3–5 yr). Use /horizons-review monthly or quarterly.
---

# /horizons-review — Higher Horizons Review

When invoked, walk through the higher altitudes of GTD: Areas, Goals, Vision.

## Trigger

- `/horizons-review` — full walkthrough.
- `/horizons-review areas` — Areas only.
- `/horizons-review goals` — Goals only.
- `/horizons-review vision` — Vision only.

## Cadence guidance

Surface this at start of full review:
- **Areas** — review monthly. Ongoing responsibilities don't change daily, but they drift.
- **Goals (1–2 yr)** — review quarterly.
- **Vision (3–5 yr)** — review semi-annually or annually.

If the last review was recent (per `memory.md` log), suggest skipping or doing a shorter check.

## Step 1 — Areas of Focus

Pull current Areas list from Notion (Areas DB).

Walk one at a time:
1. Show the area + its current description.
2. Ask: "Still active? Anything in this area that needs attention but isn't tracked as a project or next-action?"
3. If yes → walk those items. They may be projects-to-create (`/new-project`) or next-actions-to-capture (`/capture`).
4. Move on.

After all areas: ask if there's a NEW area to add. (e.g., new role, new responsibility.)

## Step 2 — Goals

Pull Goals (1–2 year horizon) from Notion (Goals DB).

For each:
1. Show goal + current target.
2. Ask: "Progress? On track?"
3. Ask: "Any projects driving this that aren't in your Projects list yet?"
4. Update Notion with status.

After all goals: ask if there's a new goal to add.

## Step 3 — Vision

Pull Vision (3–5 year horizon) from Notion (Vision page or DB).

This is rarely changed. Surface it. Ask:
- Does it still feel right?
- Anything you'd update?

If the user wants to revise, capture the revision. Otherwise, leave alone.

## Step 4 — close

Summarize:
- Areas: N reviewed, N items added to GTD as projects/next-actions.
- Goals: N reviewed, N updates.
- Vision: <reviewed/skipped/revised>.

Log the review date in `<vault>/about-me/horizons-log.md`.

## Don't

- Don't probe goals or vision — surface and ask, the user reflects.
- Don't suggest the user add goals if they don't have any. Some people don't operate that way.
- Don't enforce a cadence if the user hasn't asked. Cadence is suggestion only.
- Don't generate inspirational language.

## Failure modes

1. **No Areas / Goals / Vision in Notion** → ask user if they want to set them up; offer template.
2. **Last review was very recent** → ask if they want to do a fresh review or skip.
3. **User wants to skip a section** → honor.
