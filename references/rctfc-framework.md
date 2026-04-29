# R-C-T-F-C — The Prompt Engineering Framework

Every effective prompt in 2026 has five elements. Skip any of them, you get mediocre output. Hit all five, you get exceptional output consistently.

## R — Role

Tell Claude who it's being. Not "you are a helpful assistant" — that adds nothing. Be specific:

- "You are a board-level communications advisor for a Series B SaaS CEO."
- "You are a deal-desk attorney reviewing a vendor MSA for risk."
- "You are an executive recruiter with 15 years of placement experience in fintech."

Role primes the vocabulary, the assumptions, the priorities. Claude shifts its output style based on who you say it is.

## C — Context

Everything Claude needs to know that isn't obvious from the task itself. Most prompts fail here because the human assumes context they haven't given.

- Background facts.
- Constraints already in play.
- The audience for the output.
- What's been tried.
- Relevant history.

## T — Task

The actual ask. One verb. Specific.

- NOT: "Help me with this email."
- YES: "Rewrite this email to sound less defensive while keeping the same factual points."

If you find yourself listing multiple tasks, split them. One prompt per task gets you better output than one prompt for three tasks.

## F — Format

Tell Claude exactly what shape the output should take.

- "Reply in 3 bullets."
- "Reply as a 2-paragraph email, no subject line."
- "Reply as a JSON array of objects with `name`, `role`, `next_step` fields."
- "Reply as a 1-page markdown memo with H2 sections."

Format is where most people leave money on the table. Claude defaults to its own choice; you almost always have a better one in mind.

## C — Constraints (the 2026 edge)

The fifth C is what separates 2026 prompting from 2024 prompting. Constraints prevent Claude from doing things you didn't ask for.

- "Don't include any disclaimers about what you're not."
- "Never use the word 'leverage'."
- "Don't suggest hiring a consultant."
- "Stay under 200 words."
- "If the answer requires assumptions, ask one clarifying question instead of guessing."

Constraints are not negative. They're surgical. They keep Claude in the lane you want.

## A worked example

Bad prompt:
```
Help me write a follow-up email to a candidate I want to hire.
```

R-C-T-F-C version:
```
R: You're an experienced executive recruiter who places C-level talent.

C: I'm a Series B SaaS CEO. We've been interviewing for a VP of Product. Sarah Chen interviewed yesterday — three rounds, very strong. I want to make her an offer. She's currently at a competitor and risk-averse about leaving. Compensation will be competitive but not the highest she could get elsewhere.

T: Write a follow-up email to Sarah making the verbal offer and requesting a call this week to walk through specifics.

F: 4 short paragraphs. No subject line. Closing should request a 30-minute call. Tone: warm, confident, not pushy.

C: Don't mention specific compensation numbers. Don't make it sound like a form letter. Don't include "looking forward to hearing from you" or other generic email closers. Stay under 180 words.
```

The second prompt's output is dramatically better than the first.

## How `/help-me-prompt` uses this

The `/help-me-prompt` skill takes whatever rough prompt you throw at it and rewrites it in R-C-T-F-C structure. Use it whenever you find yourself about to send a sloppy prompt.
