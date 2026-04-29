---
name: capture
description: Quick GTD capture — appends to the Notion Inbox database without opening Notion. Use /capture <thing>.
---

# /capture — GTD Inbox Capture

When invoked, append the user's input to the Notion GTD Inbox database. Fast. Single round trip.

## Trigger

- `/capture <text>` — captures `<text>` to Inbox.
- `/capture` (alone) — ask: "What needs capturing?" Wait for input.

## Step 1 — write to Inbox

Use Notion MCP to append a new page to the Inbox database in the user's GTD master:
- **Title:** the captured text (truncate to 100 chars; full text in body if longer).
- **Body:** full text + ISO timestamp on a separate line.
- **Status:** "Inbox" (default).
- **Source:** "Cowork capture" (auto-tag).

## Step 2 — confirm

One-line confirmation. Format:
```
Captured: <first 60 chars of input>...
```

End. Do NOT:
- Ask follow-up questions about the captured item.
- Try to clarify or categorize on the way in.
- Offer to schedule, delegate, or process it.
- Suggest related items.

`/process-inbox` clarifies items later. `/capture` only captures.

## Don't

- Don't write to Next Actions, Projects, or anywhere except Inbox.
- Don't enrich the captured text — store verbatim.
- Don't deduplicate against existing Inbox items unless the user explicitly asks.
- Don't acknowledge with more than one line.

## Failure modes

1. **Notion not connected** → save the capture to `<vault>/Inbox/<timestamp>-<slug>.md` instead. Tell user: "Notion is offline; saved to vault Inbox. Run /capture again later to push to Notion, or run /process-inbox which will move local-Inbox items to Notion."
2. **Notion Inbox database not found** → tell user the GTD master may be incomplete; ask to verify the GTD template is set up.
3. **User input is empty** → ask: "What needs capturing?"
4. **Input is suspiciously long** (>500 chars) → still capture, but suggest: "Captured. This is longer than usual — consider running /process-inbox soon to clarify."
