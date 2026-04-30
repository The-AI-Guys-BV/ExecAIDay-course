# M15 — Meeting Notes

## Why this module matters

Meeting transcripts → Obsidian daily note → Claude processes → follow-up emails drafted, commitments tracked, gaps surfaced. The pipeline turns hours of meetings per week into a tracked, actioned, never-forgotten stream.

## What you'll do

- Verify your meeting-note tool (Granola / Bluedot / Fellow — picked in questionnaire).
- Run a full pipeline: meeting captured → transcript in Obsidian daily note → Claude processes into a structured note in your vault.
- Try gap analysis: Claude cross-references the transcript vs your existing vault notes, surfaces commitments you missed.
- Push commitments into your GTD inbox at <vault>/gtd/inbox.md.
- Generate follow-up emails routed to `drafts-inbox`.

---

## Introduction

Most execs already have a meeting-note tool. Granola, Bluedot, and Fellow's bot-less mode are the ones the workshop locks on (Fireflies retired — bot-based, poor fit for sensitive exec meetings).

Bot-less means the tool captures system audio locally during the meeting, transcribes locally or via cloud, lands the transcript on your machine. No bot joins the meeting. No "this meeting is being recorded" dialogue prompts. No invitee list updated.

This matters in 2026 because Microsoft Teams is rolling out third-party bot detection (May–June 2026). Bot-based tools (Fireflies default, Otter default) get flagged. Bot-less tools (Granola, Bluedot, Fellow's bot-less mode) keep working unchanged.

This module: the pipeline from meeting → notes → action.

## Beginner / Getting Started

### Verify your meeting-note tool

Whichever you picked (Granola / Bluedot / Fellow), confirm it's running. Quick test: start a fake meeting (just open Zoom / Google Meet / Teams to yourself, talk briefly, stop). Verify the tool captured + transcribed.

If it didn't, your assistant fixes now.

### The pipeline

When a real meeting happens:

1. **Meeting starts.** Tool auto-captures (or you tap to start).
2. **Tool transcribes.** Some tools transcribe in real-time; some after the meeting.
3. **Transcript lands.** Where? Configurable — most tools have:
   - A native dashboard (their app).
   - Sync to a cloud folder (Drive, Dropbox, etc.).
   - Local file output.
4. **You point Cowork at the transcript.**
5. **Claude processes** into a structured note in your vault, and pushes commitments into your GTD next-actions.

Workshop default: tool dumps transcripts to a folder in your vault, e.g., `<vault>/Meeting Transcripts/`. Or directly into your Daily Note for the meeting's day.

## Intermediate

### Run a full pipeline on a real meeting

Pick a recent real meeting (in your tool's history). Or use today's most recent.

In Cowork:

```
Read the transcript at <path-to-transcript>. Process it:
- List commitments (who promised what, by when).
- List decisions made.
- List open questions / things requiring follow-up.
Save the structured note to my vault under Meeting Notes/<date>-<title>.md.
Then for each commitment that's mine, /capture it into my GTD inbox.
```

Claude reads the transcript, structures the output, writes the meeting note into your vault, and captures each of your commitments into your GTD inbox.

Verify in your vault: the new meeting note is there with structured commitments, decisions, follow-ups. Verify in your GTD inbox: the commitments showed up at <vault>/gtd/inbox.md.

### Gap analysis

This is where the pipeline pays off uniquely. Claude can cross-reference what was said in the meeting vs what's in your existing notes:

```
Cross-reference today's meeting transcript with the project's claude.md and Working
Files in <work-folder>/<project>/. What was committed in the meeting that isn't
yet in the project? What was decided that contradicts the project's current state?
```

Claude surfaces gaps. Example outputs:
- "You committed to deliver X by Friday; the project's claude.md says next Wednesday. Mismatch."
- "John raised a risk about [thing] in the meeting; not in the project's Working Files."
- "Decision was made to deprecate Y; project still lists Y as active."

You decide what to update.

### Follow-up email generation

Most meetings need a follow-up email. The skill chain:

```
Based on today's meeting transcript, draft a follow-up email to [attendee]. Include:
- 1-2 sentence summary.
- The commitments made.
- Specific next steps with owners.
Save to drafts-inbox for me to review.
```

Claude drafts. Lands in your drafts inbox. You review, edit, send.

## Advanced

### Recurring meeting context-stitching

For recurring meetings (weekly 1:1s, monthly business reviews), Claude can read the LAST N meetings' transcripts and surface continuity:

```
Read the last 4 weekly 1:1 transcripts with [direct report]. What's been recurring
across them? What did I commit to at one meeting that should have shown up in the
next but didn't?
```

This is meta-analysis across meetings. Useful for catching slow-burn issues — items that get re-raised meeting after meeting because nothing's happening on them.

### Sensitive meeting handling

Some meetings should NOT be processed via Cowork:
- Personnel reviews, performance issues.
- M&A discussions.
- Board executive sessions.
- Anything privileged.

For these:
- Don't auto-pipe transcripts to Cowork-readable folders.
- Configure your meeting-note tool to skip recording these meetings entirely.
- If transcript exists, store it outside your vault and don't reference it in Cowork.

The architecture supports privacy boundaries; it's on you to enforce them.

### Compliance recording considerations

Some industries (financial services, healthcare, certain client work) require recording disclosure or prohibit recording entirely. Your meeting-note tool is a recording tool. Check with your compliance team before workshop runs.

The Teams bot ban (May–June 2026) is a separate issue — about which TOOLS can join, not whether recording is permitted.

---

## Try these

**Gap analysis.** Claude cross-references meeting transcript vs your project's claude.md, surfaces missed commitments. The realization: Claude caught something you would have missed.

**Follow-up email generation.** Routes to drafts-inbox, ready for your review. End-to-end pipeline working.

## Verification checkpoint

```
What was decided in the most recent meeting I have a transcript for? Pull from the transcript.
```

Expected: Claude reads the most recent transcript file and lists decisions. If it can't find any transcripts, the tool's output location isn't where Claude expects — check vault path or your tool's settings.

## Common issues

- **Tool isn't capturing** — system audio permission missing on Mac (System Settings → Privacy → Screen Recording / Microphone). On Windows, similar permission flow.
- **Transcript location mismatch** — your tool dumps to a different location than your vault expects. Configure either side to match.
- **Claude reads the wrong transcript** — be specific in your prompt about which meeting / which date.
- **Sensitive meeting accidentally captured** — delete the transcript and any vault note Claude wrote from it. The architecture depends on your discipline; it doesn't auto-protect.

## References

- M07 — Obsidian (vault is where transcripts often land).
- M13 — GTD in your vault (commitments → next-actions, follow-ups → waiting-for).
- M16 — collaboration (shared meeting notes for team meetings).
- `references/connector-quirks.md` — Teams bot ban context.
- `skills/drafts-inbox/SKILL.md` — where follow-up emails route.
