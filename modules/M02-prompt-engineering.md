# M02 — Prompt Engineering + Metaprompting

## Why this module matters

The single biggest variable in whether Claude is useful or wasteful is the prompt you wrote. R-C-T-F-C — Role, Context, Task, Format, Constraints — is the framework that makes you consistently good at this. Skip any of the five elements and you get mediocre output. Hit all five and Claude responds at a different quality tier.

## What you'll do

- Learn R-C-T-F-C with worked examples.
- Walk through the 10 anti-patterns to recognize and avoid.
- Try metaprompting via `/help-me-prompt` (you'll install this skill in M11; here you'll see the concept).
- Quick voice mention (Wispr / Superwhisper / Voibe — installed in onboarding).

---

## Section 1 — Introduction

Most people prompt Claude by saying what they want. That's not enough.

Better: tell Claude **who it's being**, **what context it needs**, **the specific task**, **the output format**, and **what NOT to do**. Five elements, in any order. Each one shifts the output.

Skip the role, you get generic. Skip the context, Claude guesses. Skip the format, you get walls of prose. Skip the constraints, Claude hedges and pads.

This module gives you the framework explicitly so the moves are conscious. With practice, it becomes habit.

## Section 2 — Beginner / Getting Started

R-C-T-F-C, with one example:

**Bad prompt:**
```
Help me write a follow-up email to a candidate I want to hire.
```

**R-C-T-F-C version:**
```
R: You're an experienced executive recruiter who places C-level talent.

C: I'm a Series B SaaS CEO. We've interviewed Sarah Chen (VP Product) over three rounds.
She's strong, currently at a competitor, risk-averse about leaving. I want to make her an
offer. Comp will be competitive but not the highest she could get.

T: Write a follow-up email making the verbal offer and requesting a call this week to
walk through specifics.

F: 4 short paragraphs. No subject line. Closing requests a call. Tone: warm,
confident, not pushy.

C: Don't mention specific compensation numbers. Don't sound like a form letter. No
"looking forward to hearing from you" or similar generic email closers. Stay under 180 words.
```

The output from the second prompt is dramatically better. Try both yourself in Cowork.

The five elements:
- **R — Role.** Who Claude is being. Specific.
- **C — Context.** What Claude needs to know that isn't obvious.
- **T — Task.** One specific verb-driven ask.
- **F — Format.** Output shape: bullets, JSON, 2-paragraph email, code block.
- **C — Constraints.** What NOT to do. The 2026 edge.

Full reference: `references/rctfc-framework.md`.

## Section 3 — Intermediate

The 10 anti-patterns. Recognize them in your own prompting and you'll catch yourself before sending a sloppy prompt:

1. **"Help me with X"** — vague. Use a specific verb.
2. **The kitchen-sink prompt** — five tasks at once. Split.
3. **"You are a helpful assistant"** — adds nothing. Be specific.
4. **Implicit context assumptions** — Claude guesses, usually wrong.
5. **"Give me a few options"** — returns three generic equal options. Specify ranking criterion.
6. **No format specified** — Claude defaults to walls of prose.
7. **"Make it better"** — what's "better"? Specify direction.
8. **The polite preamble** — "I was wondering if you could possibly..." wastes tokens.
9. **The follow-up "but"** — each "but" is a new task. Split.
10. **No constraints** — Claude hedges and pads. Tell it what NOT to do.

Full reference with examples: `references/10-anti-patterns.md`.

## Section 4 — Advanced

### Metaprompting via `/help-me-prompt`

When you find yourself about to send a sloppy prompt, type:

```
/help-me-prompt help me write a follow-up email to a candidate I want to hire
```

The skill (which you'll install in M11) takes your draft and rewrites it in R-C-T-F-C structure. It catches the anti-patterns automatically.

This is the meta-move: instead of remembering all 5 elements + 10 anti-patterns, use a skill that enforces them. You'll install `/help-me-prompt` for real in M11; for now, see the concept.

### Voice + prompting

Voice tools (Wispr / Superwhisper / Voibe) are installed during onboarding. They transcribe what you say into your active text field. So you can speak prompts instead of typing them.

The trick: even when speaking, structure the prompt as R-C-T-F-C. Voice → text → R-C-T-F-C → Claude. Don't degrade your prompt quality just because you're talking.

Quick practice: speak a prompt out loud, transcribe via your voice tool, send to Claude. Does it work?

### Prompt chains

When a task is too complex for one prompt, chain prompts:

1. First prompt: extract / classify / parse the input.
2. Second prompt: act on the output of the first.
3. Third prompt: format / verify / refine.

Each link is its own R-C-T-F-C. The chain is the workflow. You'll see this pattern in M11 when we look at skills (which are pre-written prompt chains).

---

## Micro-win

Take a prompt you wrote yesterday — a real one, from your inbox or a recent Claude session. Run it through `/help-me-prompt` (in your head, since the skill installs in M11). Identify which of the 5 elements were missing. Rewrite. Send the new version. See the difference.

## Verification checkpoint

In Cowork, type:

```
Rewrite the email below to be 30% shorter without losing factual content. Tone stays the same. No subject line.

[paste any 100-word email here]
```

Expected: a tighter version, same content, no AI-flavored padding ("I hope this finds you well"). If Claude added an apology or a "let me know if you need anything else," the constraints weren't strong enough — try again with a "no closer line" constraint added.

## Common issues

- **Output is still generic** — your role isn't specific enough. "Recruiter" → "executive recruiter who places C-level talent in fintech."
- **Output is too long** — add a length constraint ("Stay under 200 words").
- **Output has AI tells** — add explicit constraints against them ("No 'I hope this helps,' no 'let me know if'").
- **Output ignored a constraint** — Claude sometimes drifts. Repeat the constraint in a new prompt: "Same task, but enforce <constraint>."

## References

- `references/rctfc-framework.md` — full framework with worked examples.
- `references/10-anti-patterns.md` — anti-patterns with before/after.
- `skills/help-me-prompt/SKILL.md` — the metaprompting skill (installed in M11).
