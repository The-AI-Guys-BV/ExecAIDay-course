---
name: reference-find
description: Searches the Reference store — Notion Reference DB and vault References/ — for a topic, keyword, or person. Use /reference-find <query>.
---

# /reference-find — Search Reference

When invoked, search across the user's Reference sources and surface matches.

## Trigger

- `/reference-find <query>` — search both Notion Reference DB and vault `References/`.
- `/reference-find topic: <topic>` — filter to a specific topic tag.
- `/reference-find <query> notion` — Notion only.
- `/reference-find <query> vault` — vault only.

## Step 1 — search both stores in parallel

- **Notion Reference DB:** query via Notion MCP search; match title and body.
- **Vault `References/`:** Read all `.md` files; grep for query (case-insensitive).

## Step 2 — present results

```
# Reference results — "<query>"

## From Notion (N matches)
- <title> — <topic, if any> — <date> — <Notion URL>
  > <1-line snippet of match>

## From vault (N matches)
- <filename> — <last modified>
  > <1-line snippet of match>
```

Sort by relevance (title match > body match) then recency.

## Step 3 — offer to open or fetch

After listing, offer:
- "Open #<N>" — opens the page (Notion URL or Read the vault file).
- "Pull #<N> into context" — Read the file/page in full so user can ask follow-ups.

## Don't

- Don't fabricate references not actually in the stores.
- Don't summarize the user's whole reference library — only show matches.
- Don't include AI-paraphrasing of the reference content unless asked.

## Failure modes

1. **Zero matches** → say so; suggest broadening the query or running `/reference-add` if the user expected the reference but doesn't have it.
2. **Many matches (>20)** → show top 10, offer to narrow filter.
3. **Connector / vault unavailable** → search only the available source, flag the missing one.
