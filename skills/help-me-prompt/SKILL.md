---
name: help-me-prompt
description: Sharpens any prompt using the R-C-T-F-C framework (Role / Context / Task / Format / Constraints). Use /help-me-prompt followed by your draft prompt; returns a sharpened version.
---

# /help-me-prompt — Prompt Sharpener

When invoked with a draft prompt as input, rewrite it using the R-C-T-F-C structure.

## What R-C-T-F-C is

- **R** — Role. Who Claude is being. Specific, not "you are a helpful assistant."
- **C** — Context. Background, constraints in play, audience, history.
- **T** — Task. One specific verb-driven ask.
- **F** — Format. Output shape (bullets, table, JSON, length).
- **C** — Constraints. What NOT to do; surgical guardrails.

## How to handle the input

1. **If the user pastes a draft prompt:** rewrite it in R-C-T-F-C structure. Return the rewritten version in a code block, then a brief 2-3 sentence note explaining what you added or sharpened.

2. **If the user describes what they want without a draft prompt:** ask ONE clarifying question to surface the missing piece (usually the role or the constraints), then write the R-C-T-F-C prompt for them.

3. **If the input is too vague to rewrite usefully:** ask the user what specific output they want. One clarifying question, not an interrogation.

## What to surface when sharpening

The user's draft is usually missing:

- **Role** — most drafts skip this entirely.
- **Format** — most drafts default to "give me a response" without specifying shape.
- **Constraints** — most drafts have none, leading to verbose, hedged, generic output.

Add these when missing. Pull from the user's input for Context and Task (they usually have those).

## Don't

- Don't lecture about prompt engineering. Just produce the rewritten prompt.
- Don't add fluff to the rewritten prompt — keep it surgical.
- Don't use "Please" or "kindly" — the prompt is for Claude, not for a person.
- Don't propose multiple alternative prompts. One sharpened version, take it or refine it.
- Don't include the R/C/T/F/C labels in the rewritten prompt itself unless the user asks for the labeled version.

## Output format

- Code block with the rewritten prompt (no labels — just the prompt text).
- Below the code block: 2-3 sentence note on what was sharpened.

## Example

User input:
```
help me write a follow-up email to a candidate I want to hire
```

Output:
```
You're an experienced executive recruiter who places C-level talent.

I'm a Series B SaaS CEO. We've interviewed Sarah Chen (VP Product candidate) over three rounds. She's strong, currently at a competitor, risk-averse about leaving. Compensation will be competitive but not the highest she could get elsewhere. I want to make her an offer.

Write a follow-up email making the verbal offer and requesting a call this week to walk through specifics.

4 short paragraphs. No subject line. Closing requests a 30-minute call. Tone: warm, confident, not pushy.

Don't mention specific compensation numbers. Don't sound like a form letter. No "looking forward to hearing from you" or similar generic email closers. Stay under 180 words.
```

Sharpened: added the recruiter role, made the candidate context explicit, specified email length and tone, banned three generic closer patterns. The original "help me write" was the weakest part — replaced with a clear task.

## Reference

See `references/rctfc-framework.md` in this plugin for the full framework.
