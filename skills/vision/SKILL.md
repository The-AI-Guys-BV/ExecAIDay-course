---
name: vision
description: Surfaces or updates the 3–5 year Vision — the highest GTD horizon. Use /vision to see, /vision update to revise.
---

# /vision — Vision (3–5 year horizon)

When invoked, work with the user's Vision document — the highest GTD altitude.

## Trigger

- `/vision` — show the current Vision.
- `/vision update` — interactive revision (rare; quarterly to annually).
- `/vision history` — show previous Vision versions if logged.

## /vision (show)

Read the Vision page or document. Present it cleanly.

```
# Vision (3–5 year)
<Last updated: date>

<Vision text as-is from the source>

---

Linked goals (1–2 yr):
- <goal>
- <goal>
```

If no Vision yet, ask: "No Vision document found. Want to draft one? It's optional but useful at the higher altitudes."

## /vision update

Walk the user through revision:

1. Read the current Vision aloud.
2. Ask: "What still feels right?" Capture.
3. Ask: "What's stale or no longer true?" Capture.
4. Ask: "What's missing?" Capture.
5. Synthesize: "Here's a revised draft. Edit or accept?"
6. On accept: save new version with date; archive previous to `<vault>/about-me/vision-history.md`.

## Don't

- Don't generate the Vision yourself. Surface, prompt, capture.
- Don't interpret the Vision back at the user ("This sounds like you really value...").
- Don't push for revision if the user just wanted to read it.
- Don't include AI-flavored "your North Star" or aspirational language.

## Failure modes

1. **No Vision document** → ask if user wants to start one; offer minimal template (a paragraph, no schema).
2. **Vision is in vault not Notion** (or vice versa) → check both, prefer the one specified in user's `claude.md`.
3. **User abandons mid-update** → don't overwrite the existing Vision; save partial draft as `vision-draft.md`.
