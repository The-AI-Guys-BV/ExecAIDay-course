---
name: process-inbox
description: Walks the GTD inbox-clarifying step. Goes through Inbox items one at a time, asks the GTD clarifying questions, moves each item to its right destination. Use /process-inbox when you're ready to clarify captured items.
---

# /process-inbox — GTD Inbox Clarifying

When invoked, walk through Inbox items one at a time. For each, ask the GTD clarifying questions and move the item to its correct destination.

## The GTD clarifying flow (per item)

For each Inbox item:

1. **Show the item.** Title + body. Brief context.

2. **Is it actionable?**
   - **No** → three sub-options:
     - **Trash** (no future use)
     - **Reference** (might want later → moves to Notion Reference DB or vault `References/`)
     - **Someday/Maybe** (might do later → moves to Notion Someday DB)
   - **Yes** → continue to step 3.

3. **What's the next concrete physical action?** User answers. Capture it.

4. **Is the next action the only one needed (single-step) or part of a multi-step project?**
   - Single-step → moves to Next Actions DB with that action.
   - Multi-step → ask: project name? Outcome? Move to Projects DB; the action goes to Next Actions DB linked to the project.

5. **Will it take less than 2 minutes?**
   - Yes → tell user "Do it now." Wait for confirmation. Mark Done.
   - No → continue to step 6.

6. **Who does it?**
   - Me (now or scheduled) → keep in Next Actions or schedule via Tickler.
   - Delegate → move to Waiting-For; offer to draft delegation email via `/drafts-inbox`.

7. **Move the item.** Apply the user's choices to Notion.

8. **Continue or pause?** Ask: "N items left. Continue or pause?" Honor either.

## Trigger

- `/process-inbox` — process all Inbox items.
- `/process-inbox <N>` — process N items, then pause.
- `/process-inbox quick` — process items that are likely 2-min jobs (heuristic: short text, action verb in title).

## Pre-flight

- Notion MCP must be connected.
- GTD master must have Inbox, Next Actions, Projects, Waiting-For, Someday, Reference databases. If any are missing, tell user to fix the GTD template.

## Discipline

- One item at a time. Don't batch the questions.
- Wait between questions. Don't pre-answer based on context.
- Honor "skip this one" — move it back to Inbox at the bottom, continue with next.
- Honor "pause" — save state, exit cleanly. User can resume with `/process-inbox`.
- Don't make assumptions about whether something is actionable. Ask.

## Don't

- Don't try to clarify 10 items at once.
- Don't generate the user's next-action for them. Ask them what the action is.
- Don't move items without explicit confirmation.
- Don't skip the 2-minute rule — it's load-bearing for GTD.
- Don't pre-categorize ("This is clearly a delegate") — let the user decide.

## Failure modes

1. **Inbox is empty** → tell user "Inbox is clean," exit.
2. **Notion write fails mid-process** → save state, tell user which items were processed, ask to retry.
3. **User wants to bulk-trash** → confirm count, do it, log to `memory.md`.
4. **Item is so unclear the user can't make a decision** → leave in Inbox, mark with note "needs more context," move to next.
