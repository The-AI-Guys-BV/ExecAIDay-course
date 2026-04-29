---
name: reference-add
description: Adds a reference item — a fact, link, doc, or note — to the Reference store. Goes to vault `References/` folder or vault References folder. Use /reference-add <thing> [topic: <topic>].
---

# /reference-add — Add to Reference

When invoked, capture a piece of reference material to the right destination.

## Trigger

- `/reference-add <thing>` — captures to default Reference store, no topic tag.
- `/reference-add <thing> topic: <topic>` — tagged with topic.
- `/reference-add` — ask "What needs adding?"

## Decision: vault file or vault Markdown?

The user's `claude.md` (work-folder root or chief-of-staff) may specify a default. If not:
- Short factual references (a fact, a quote, a link) → vault `References/` folder.
- Long-form notes (a research summary, a synthesis) → vault `References/<slug>.md` as a Markdown file.

Store as markdown file in `<vault>/References/<topic>/`.

## Step 1 — capture

**For vault Markdown:**
- Create file at `<vault>/References/<slug>.md`.
- Slug: derived from input (lowercase, hyphenated, max 60 chars).
- Frontmatter: minimal (none preferred — keep Obsidian-clean).
- Body: input + a short title heading.
- If file with same slug exists: append-with-divider to the existing file rather than overwriting.

## Step 2 — confirm

```
Reference added.
- Location: `<vault>/References/<topic>/<slug>.md`
- Topic: <topic / —>
```

End. No follow-up.

## Don't

- Don't enrich the reference with your own context unless asked.
- Don't deduplicate against existing References unless the user asks.
- Don't categorize unprompted.
- Don't wikilink-pollute — only add `[[wikilinks]]` if the user's input contained them.

## Failure modes

1. **vault not set up** → fall back to vault Markdown.
2. **Vault not mounted** → tell user; offer to save to temp file and retry later.
3. **Input is empty** → ask "What needs adding?"
4. **Existing file slug collision** → ask: append or new file?
