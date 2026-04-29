---
name: capture
description: Quick GTD capture — appends to `<vault>/gtd/inbox.md` with `created:<today>` tag. Use /capture <thing>.
---

# /capture — GTD Inbox Capture

When invoked, append the user's input to the `<vault>/gtd/inbox.md`. Fast. Single round trip.

## Trigger

- `/capture <text>` — captures `<text>` to Inbox.
- `/capture` (alone) — ask: "What needs capturing?" Wait for input.

## Step 1 — write to Inbox

Append a bullet to `<vault>/gtd/inbox.md` with the captured text. Use tag `created:<today>`.
- **Bullet format:** `- [ ] <text> created:YYYY-MM-DD`
- Keep text verbatim; no enrichment.

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

1. **Vault write fails** → tell user; offer to save draft locally and retry later.
2. **`<vault>/gtd/inbox.md` not found** → tell user the GTD master may be incomplete; ask to verify the GTD template is set up.
3. **User input is empty** → ask: "What needs capturing?"
4. **Input is suspiciously long** (>500 chars) → still capture, but suggest: "Captured. This is longer than usual — consider running /process-inbox soon to clarify."
