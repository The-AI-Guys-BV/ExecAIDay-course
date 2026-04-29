---
name: checkout
description: End-of-day GTD checkout — log accomplishments, capture loose ends, set tomorrow's intention. Use /checkout at end of workday.
---

# /checkout — End of Day Checkout

When invoked, walk the user through the day's wrap.

## Trigger

- `/checkout` — full checkout.
- `/checkout brief` — abbreviated (3 questions, fast).

## Step 1 — accomplishments

Ask: "What got done today?"

User lists. You don't generate; you record. Append to today's Daily Note in vault: `<vault>/Daily Notes/<YYYY-MM-DD>.md` under a `## Done` heading.

## Step 2 — loose ends

Ask: "What's still open that I should know about for tomorrow?"

User lists. For each:
- If it's a next-action → append to Notion Next-Actions DB (skill creates it).
- If it's something to remember → append to today's Daily Note under `## Loose ends`.
- If it's a waiting-for → ask who they're waiting on, create Notion Waiting-For.

## Step 3 — tomorrow's intention

Ask: "What's the one thing you want to do tomorrow?"

User says one thing. You record it in Daily Note as `## Tomorrow's #1`.

If the user says multiple things, gently steer: "One. Which one matters most?"

## Step 4 — close

Confirm:
```
Day logged.
- Done: <N items>
- Loose ends: <N items captured>
- Tomorrow's #1: <thing>

Have a good evening.
```

End. Don't ask follow-up questions. Don't suggest more reflection.

## Don't

- Don't generate accomplishments — only record what the user says.
- Don't push for more reflection ("How did it FEEL?"). The skill is for capture, not therapy.
- Don't recommend tomorrow's plan; record only the user's stated intention.
- Don't include positive affirmations ("Great work today!") — patronizing.

## Failure modes

1. **Daily Note for today doesn't exist** → create it, then append.
2. **Notion not connected** → save next-actions and waiting-fors to vault `Inbox/` for `/process-inbox` to pick up later.
3. **User abandons mid-checkout** → save partial state, exit cleanly. They can rerun.
