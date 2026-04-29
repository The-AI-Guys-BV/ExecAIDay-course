---
name: drafts-inbox
description: Generates and manages draft email replies as a consolidated review surface. Two modes — beginner (drafts as files in your Cowork folder) and advanced (drafts written to your email Drafts folder). Use /drafts-inbox to review pending drafts; /drafts-inbox new to draft replies for current inbox.
---

# /drafts-inbox — Email Drafts Triage

When invoked, either generate fresh drafts for emails needing replies, or surface drafts that have been generated but not yet sent/edited.

## Mode selection

Two modes for where drafts live:

**Beginner (default):** drafts live as `.html` files in `<work-folder>/drafts-inbox/`. Reviewed via a live artifact (split-pane: list of drafts on left, content on right). User edits the file, then copies to email when ready. Works without write scope on email connector.

**Advanced:** drafts written directly to the user's email Drafts folder via the email connector. Visible on phone, web, and Outlook/Gmail clients. Requires native draft write scope (Gmail) or Zapier MCP (M365).

The mode is set in the user's `claude.md` (work-folder root): `drafts_inbox_mode: beginner` or `drafts_inbox_mode: advanced`. Default to beginner if not specified.

## Trigger

- `/drafts-inbox` — review existing drafts (open the artifact).
- `/drafts-inbox new` — scan inbox for emails needing replies, draft replies for them.
- `/drafts-inbox <person-name>` — draft a reply specifically to the latest email from that person.

## Step 1 — `/drafts-inbox new` flow

1. Pull last 24-48h of inbox via Gmail/M365 connector.
2. Filter to emails needing a reply:
   - Direct asks ("Can you...", "What do you think...", "Will you be...")
   - Forwarded items with implicit ask
   - Calendar invites needing decline/accept
   - Skip: newsletters, automated notifications, pure FYIs, your own sent items
3. For each (max 5 at a time): generate a draft reply that:
   - Matches the user's voice (per chief-of-staff `claude.md` and writing-rules)
   - Is appropriate length for the email type (short for short, longer for substantive)
   - Has no AI tells (no "I hope this helps," no "Let me know if...")
   - Includes specific commitments only if the user has actually committed to them in prior context
4. Write each draft to the appropriate location based on mode (file or email Drafts).
5. Confirm: "Drafted N replies. Open `/drafts-inbox` to review."

## Step 2 — `/drafts-inbox` review flow

Open the live artifact (or list the drafts if artifact not available).

Each draft entry shows:
- Original email sender + subject + date
- Original email body (collapsed by default)
- Draft reply (editable)
- Actions: **Send** | **Edit** | **Discard**

User reviews each, edits in place, sends or discards.

## Voice + tone defaults

- Pull from `<vault>/claude.md` (chief-of-staff brief) for overall voice.
- Pull from `<vault>/about-me/writing-rules.md` for specific rules.
- Project-specific tone (if email is about a specific project) overrides these — pull from project `claude.md`.
- If conflicting rules: closer-to-the-context wins (project > work-folder > vault root).

## Don't

- Don't draft replies to emails that are confidential (compensation, personnel, legal, M&A) without flagging them — list them for user review separately, don't auto-draft.
- Don't include AI-generated content in drafts that imply you (Claude) attended the meeting / had the conversation. Only reply to what's verifiable from the email thread.
- Don't include calendar holds you haven't actually checked. If proposing a meeting time, query the Calendar connector first.
- Don't draft replies for forwards from the user's executive assistant — those usually need EA-level handling.
- Don't draft commitments. Surface where a commitment seems implied and ask the user.

## Failure modes

1. **No email connector** → tell user; offer to draft for emails the user pastes into the chat.
2. **Native draft write fails (M365 advanced mode)** → fall back to beginner mode for that draft, log the failure.
3. **Live artifact bug #28161** (sidebar conflation) → close artifact, reopen specific entry, advise user.
4. **User wants to discard all drafts** → confirm before bulk-discard, then proceed.
