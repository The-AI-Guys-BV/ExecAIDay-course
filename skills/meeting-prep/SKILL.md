---
name: meeting-prep
description: Prepares for an upcoming meeting. Pulls calendar event details, attendee history, prior meeting notes, vault projects, and recent emails with attendees. Produces a one-page brief. Use /meeting-prep <meeting title or "next meeting">.
---

# /meeting-prep — Pre-Meeting Brief

When invoked, produce a one-page brief for an upcoming meeting.

## Trigger

- `/meeting-prep <meeting title>` — prep for a specific meeting by title fragment.
- `/meeting-prep next` or `/meeting-prep` (alone) — prep for the next meeting on the calendar.
- `/meeting-prep <date> <time>` — prep for a specific time slot.

## Step 1 — locate the meeting

Use the Calendar connector to find the meeting:
- Match by title fragment (case-insensitive).
- If multiple matches, list up to 5 candidates with date/time, ask which.
- If "next," return the chronologically next event on the user's primary calendar.
- If zero matches, say so. Don't fabricate a meeting.

## Step 2 — pull context

For the located meeting:

1. **Attendees** — list from the calendar invite. Distinguish organizer from attendees from optional.
2. **Prior meetings** — search for previous meetings with the same attendees in the last 6 months. List up to 5 by date + title.
3. **Meeting notes** — check Daily Notes in `<vault>/Daily Notes/` for prior notes on these attendees or meeting series.
4. **Email thread** — search Gmail / M365 for recent emails (last 30 days) involving the attendees. Pull subjects + 1-line previews of the last 5.
5. **Related vault projects** in `<vault>/gtd/projects/` — match by attendee name or topic keyword.
6. **Documents** — if the meeting invite has attachments or linked docs, list them. Don't read them in full unless the user asks.

## Step 3 — produce the brief

One page. Fixed structure:

```
# Meeting Prep: <Title>
<Date> · <Time> · <Duration> · <Location/Link>

## Attendees
- <Name> (<role/company if known>) — <1-line context: "Last met 2 weeks ago re Q3 deck">

## What this meeting is about
<2–3 sentences from the invite description + your inferred context>

## Prior context
- **Last meeting:** <date>, <topic, what was decided>
- **Recent emails:** <2–3 most relevant subjects + 1-line of each>
- **Related vault projects in `<vault>/gtd/projects/`:** <names + status>

## Likely agenda items
- <inferred from prior context + invite description>
- <max 4–5 items>

## Open commitments / what's outstanding from last time
- <pulled from prior notes — what was decided last time and is still pending>

## Pre-meeting questions to think about
- <2–3 questions the user should have considered before this meeting>

## Documents to review
- <links to attached docs or relevant vault files>
```

## Don't

- Don't make up history. If you can't find prior context, say so.
- Don't pull every email in the last 6 months — surface the relevant 5.
- Don't write the meeting agenda. Surface what's likely; the user runs the meeting.
- Don't recommend talking points or strategy. Just the facts.
- Don't include sensitive personal info from emails (compensation discussions, personnel issues) unless directly relevant to this meeting.

## Failure modes

1. **No calendar connector** → ask user to provide meeting title + key attendees manually; produce a brief from email + vault only.
2. **Attendees match multiple people** (e.g., common first name) → ask user to disambiguate.
3. **Meeting in <30 min** → still produce the brief; flag at top: "Meeting starts in N minutes."
4. **Prior notes folder location unknown** → check the user's Obsidian vault path from `claude.md` context; if not specified, ask.
