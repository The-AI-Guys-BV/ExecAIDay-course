# 10 Prompting Anti-Patterns

What NOT to do. These are the moves that consistently produce mediocre output.

## 1. "Help me with X"

Vague. "Help" is not a task. Use a specific verb: write, rewrite, summarize, analyze, draft, critique, classify, list, compare.

## 2. The kitchen-sink prompt

Five tasks bundled into one prompt. Claude does all of them poorly. Split into separate prompts; one task per prompt.

## 3. "You are a helpful assistant"

Adds nothing — Claude is helpful by default. Set a SPECIFIC role ("You're a board-level communications advisor") that primes vocabulary and priorities.

## 4. Implicit context assumptions

Asking about "the project" or "the team" without saying which one, what kind, what stage. Claude guesses. The guess is usually wrong. Spell it out.

## 5. Asking for "a few options"

Returns three generic options of equal quality. Better: "Give me three options ranked by [specific criterion]" or "Give me one option and your second-best alternative with the trade-off you'd flag."

## 6. No format specified

Claude defaults to walls of prose. You almost always want something else. Specify format: bullets, table, JSON, 2-paragraph email, 1-page memo, code block.

## 7. "Make it better"

What's "better"? Shorter? More formal? Less defensive? More specific? Tell Claude what dimension to optimize. Without a direction, Claude makes generic edits.

## 8. The polite preamble

"I was wondering if you could possibly help me with..." wastes tokens and leaves Claude unsure if you're asking or just chatting. Direct: "Rewrite this email."

## 9. The follow-up "but"

"Write a short summary. But also explain the methodology. But also list the risks." Each "but" is a new task. See #2.

## 10. No constraints

Claude defaults to including disclaimers, generic closers, hedging language, and over-long responses. Use the C in R-C-T-F-C: tell Claude what NOT to do. "No disclaimers." "No 'I hope this helps'." "Stay under 200 words."

## How to spot these in your own prompting

If you find yourself saying "Claude's answers are mediocre," check whether your prompt has any of the above. Most of the time, the answer is yes.

`/help-me-prompt` rewrites your prompt without these anti-patterns. Use it when you catch yourself reaching for a sloppy prompt.
