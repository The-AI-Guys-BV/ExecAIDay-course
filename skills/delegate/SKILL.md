---
name: delegate
description: Delegates a next action — drafts the delegation email, creates the waiting-for entry, marks the next action as delegated. Use /delegate <next-action> to <person>.
---

# /delegate — Delegate a Next Action

When invoked, do the four things needed to delegate cleanly:

1. Draft the delegation email.
2. Create a Waiting-For entry in `<vault>/gtd/waiting-for.md`.
3. Mark the original Next Action as Delegated.
4. Confirm with the user before sending.

## Trigger

- `/delegate <action> to <person>` — full form.
- `/delegate <action>` — ask "Who should this go to?"
- `/delegate` — list active next actions, ask which to delegate.

## Step 1 — locate or capture the action

If the action is already in `<vault>/gtd/next-actions.md`, locate it. Otherwise, capture it inline (skill creates a Next-Action, then immediately delegates it).

## Step 2 — draft the email

Pull the user's voice from chief-of-staff `claude.md` and writing-rules. Draft the delegation email:

```
<Person> —

[Context: 1–2 sentences if needed]

Could you handle <action>? [Specific deliverable expected: "Need it by Friday EOD" or "Send me a quick note when done."]

[Optional: any context or links the person needs]

Thanks,
<User's signature per claude.md>
```

Show the draft to the user. Offer:
- **Send as-is** (uses email connector send capability).
- **Edit then send** (user edits inline, then sends).
- **Save as draft** (saves to drafts inbox, doesn't send yet).

## Step 3 — Create the Waiting-For entry

Vault entry:
- To: `<action> — <person>`
- Person: `<person>`
- Linked from: original Next-Action.
- Linked project: same as Next-Action's project, if any.
- Date sent: today.
- Expected: ask the user; default to 7 days.

## Step 4 — Update the original Next Action

Mark Status = "Delegated" (or move to Done if user prefers).

## Step 5 — confirm

```
Delegated to <person>.
- Email: <sent / draft saved / not sent>
- Waiting-for: tracked in `<vault>/gtd/waiting-for.md`
- Append bullet to `<vault>/gtd/waiting-for.md` with `@person:<name>` and `due:<date+7>` tags.
- Follow up if you haven't heard by date+7.
```

## Don't

- Don't send the email without explicit user confirmation.
- Don't delegate items that are clearly the user's own work (sensitive, requires user's authority). If the action looks like that, flag it: "This looks like it should stay with you. Sure you want to delegate?"
- Don't include AI tells ("As an AI, I...") in the delegation email.
- Don't draft compensation, performance, or termination communications via this skill — those need user-direct drafting.

## Failure modes

1. **Email connector can't send** → save as draft, tell user to send manually.
2. **Person not in user's contacts** → ask user for email address.
3. **No vault** → save the waiting-for to vault `Inbox/` as fallback.
4. **Action is unclear** → ask one clarifying question before drafting.
