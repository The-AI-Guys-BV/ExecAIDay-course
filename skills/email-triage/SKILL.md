---
name: email-triage
description: Triages the inbox into urgent / reply / read / archive / delete buckets. Use /email-triage to process the last 24h of inbox into a triaged view.
---

# /email-triage — Inbox Triage

When invoked, classify recent inbox items into action buckets. Don't draft replies (that's `/drafts-inbox`); just sort.

## Trigger

- `/email-triage` — last 24h of inbox.
- `/email-triage today` — emails from today only.
- `/email-triage <N>h` — last N hours.

## Triage categories

Five buckets:

1. **Urgent** — needs response in the next few hours. Direct ask from a key stakeholder, time-sensitive deadline mention, fire-fighting.
2. **Reply needed** — needs a response in the next 1–2 days. Substantive, but not urgent.
3. **Read** — informational, worth knowing about, no reply needed. Newsletter from a paid source you actually read, board update, FYI from a stakeholder.
4. **Archive** — keep for searchability but no action. Confirmations, automated receipts, past-event recaps.
5. **Delete** — disposable. Marketing, automated notifications you don't read, daily digests you've outgrown.

## Step 1 — pull and classify

1. Pull inbox for the requested window.
2. Score each email against the categories.
3. Use signals:
   - **Urgent**: explicit deadline today/tomorrow, sender is a key stakeholder per chief-of-staff brief, words like "ASAP", "today", "blocked".
   - **Reply needed**: question marks in last paragraph, explicit ask, response expected.
   - **Read**: long-form from a paid source, no ask, factual content.
   - **Archive**: confirmations, receipts, completed-thing notifications.
   - **Delete**: bulk marketing, feed-style notifications, repeated daily digests.

## Step 2 — present the triage

```
# Inbox Triage — <window>
<Total emails: N>

## 🔴 URGENT (N)
- <sender> — <subject> — <1-line of why urgent>
- ...

## 🟡 REPLY NEEDED (N)
- <sender> — <subject> — <1-line of the ask>
- ...

## 🔵 READ (N)
- <sender> — <subject> — <1-line summary>
- ...

## ⚪ ARCHIVE (N)
- <sender> — <subject>
- ...

## ⚫ DELETE (N)
- <sender> — <subject>
- ...
```

## Step 3 — offer next actions

After the triage, offer:
- "Want me to draft replies for the URGENT and REPLY NEEDED items? (`/drafts-inbox new`)"
- "Want me to bulk-archive the ARCHIVE items?"
- "Want me to bulk-delete the DELETE items?"

User picks. If they want bulk operations, confirm count before executing. Don't auto-delete.

## Don't

- Don't read full email bodies in detail unless needed for classification — be efficient.
- Don't classify based on sender's company alone — context matters.
- Don't archive or delete without explicit user confirmation.
- Don't classify the same email into two buckets — pick the highest-priority match.
- Don't flag everything as urgent. Real urgency is rare; respect that.

## Customization

User's chief-of-staff `claude.md` may specify:
- Senders who are always Urgent (Board members, key clients, direct reports).
- Senders who are always Read (specific paid newsletters, key analysts).
- Senders who are always Delete (specific automated systems).

Honor these overrides. If unsure whether the user wants a sender flagged differently, ask.

## Failure modes

1. **No email connector** → ask user to paste a sample of inbox subjects + senders; classify manually.
2. **Connector returns >100 emails** → window the request (last 6h instead of 24h), ask user.
3. **Classifications are mostly wrong** → ask user to flag 5 examples, learn the user's patterns, save to `<vault>/about-me/email-rules.md` for future runs.
