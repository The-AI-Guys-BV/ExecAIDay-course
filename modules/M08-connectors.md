# M08 — Connectors

## Why this module matters

The jaw-drop arc. Inbox, drafts, calendar — your real data, in Cowork, working immediately. Up to here, the workshop was setup and orientation. M08 is where the system becomes useful in your actual workflow.

## What you'll do

- Verify connectors: Gmail / M365, Calendar, Drive, Slack, plus your custom apps (Asana / Monday / Jira / Linear / SFDC / HubSpot / etc.).
- Run R-C-T-F-C from M02 on a real email — the callback exercise.
- Walk the 3-step arc: inbox read-back → live draft → calendar + email chain.

---

## Section 1 — Introduction

A connector is an authenticated bridge between Claude and your services, scoped to specific permissions. When Claude needs your inbox, it queries via the connector. When you ask "what's on my calendar today," same.

You don't authenticate per use. The connector is always-on once set up. Claude pulls fresh data per query — your inbox isn't continuously streaming to Anthropic, but Claude can fetch what it needs when relevant.

This module: verify your connectors, run a real R-C-T-F-C prompt on a real email, and experience the 3-step jaw-drop arc.

## Section 2 — Beginner / Getting Started

### Verify connectors

In Cowork → Customize → Connectors. You should see:

- **Gmail or Microsoft 365** (whichever your company uses). Status: Connected.
- **Calendar** (Google Calendar or M365 calendar). Connected.
- **Drive** (Google Drive or OneDrive). Connected.
- **Slack** (if your team uses it). Connected.
- **Custom apps** (Asana / Monday / Jira / Linear / SFDC / HubSpot / ClickUp / etc.) — only the ones you flagged in the questionnaire.

If any are missing or disconnected: your assistant will sort it now. Don't proceed without verification — the rest of the module relies on these.

### Quick inbox read-back

Type:
```
What's in my inbox right now? Top 5, with one-line summaries.
```

Claude queries Gmail / M365, returns 5 emails with brief summaries. This is the first jaw-drop. Real data, real surface, no setup beyond what's already done.

## Section 3 — Intermediate

### R-C-T-F-C callback on a real email

Find an email in your inbox that needs a reply. The kind of email you'd normally spend a while on. Then:

```
R: You're an executive recruiter coaching me on candidate communications. (Or whatever role fits the email.)

C: I'm a [your role]. The email pasted below is from [sender, role]. Background: [what you know
about the relationship and the topic].

T: Draft a reply.

F: 3 short paragraphs. No subject line. [Tone instruction.]

C: Don't include AI-flavored closers. Don't make commitments I haven't already made. Stay
under 200 words.

[paste the email]
```

Send. Compare to what you would have written. Faster + better, when R-C-T-F-C is real-life applied.

This is the M02 callback — the framework on real data.

### The 3-step arc

**Step 1 — Inbox read-back (the jaw-drop).**
```
What's in my inbox right now? Group by sender, last 24h, with one-line summary per email.
Skip newsletters and automated notifications.
```

Claude returns a triaged view. Already useful — that's a lot of mental sorting compressed.

**Step 2 — Live drafts.**
```
For the 3 emails that need a reply, draft replies. Match my voice (per chief-of-staff brief).
Save each as a draft to Outlook / Gmail (whichever connector is in use).
```

Claude drafts. The drafts appear in your Drafts folder — visible on your phone, on Outlook on the web, anywhere you check email.

If you're on M365 and the native draft write isn't working, Zapier MCP handles it. You won't see Zapier UI; the drafts just appear.

**Step 3 — Calendar + email chain.**
```
Today's brief: meetings, urgent emails, drafts pending review, plus anything from Slack
that's directly tagged for my attention. Pull from real data.
```

Claude composes a 1-page narrative brief from calendar + email + Slack. This is what M14 builds into a daily live artifact dashboard. For now, see the data flow working.

## Section 4 — Advanced

### Connector quirks

Worth knowing without dwelling on:

- **Gmail OAuth** routes through the Google Drive flow (legacy infrastructure). If the auth dance felt weird, that's why.
- **Gmail draft creation** needs the `gmail.modify` scope. If drafts aren't being created, check the scope.
- **M365 Outlook** native connector is read-only in the most conservative read of Anthropic's docs. Drafts are created via Zapier MCP for M365 execs.
- **Microsoft Teams chat** is read-only via M365 connector. Sending messages programmatically isn't supported.
- **Google Calendar** has full write scope (create / modify / delete events natively).

Full list: `references/connector-quirks.md`.

### Disabling a connector for a session

Sometimes you're working on something where you don't want connector data to mix in. Settings → Connectors → toggle off for the current Cowork Project.

You'll re-enable when done. Useful for sensitive work (M&A, board prep, exec personnel).

### Microsoft Teams bot ban (May–June 2026)

Teams is rolling out third-party bot detection. By default, organizer approval is required for any third-party bot to join a meeting. This affects bot-based recording tools (Fireflies, Otter default, Fellow's bot mode). It does NOT affect bot-less tools (Granola / Bluedot / Fellow's bot-less mode), which capture system audio locally without joining the meeting.

Workshop's locked meeting-note stack (M15) is bot-less. Unaffected.

---

## Try this — 3-step arc

Walk through all three steps in order:
1. Inbox read-back. Jaw-drop #1.
2. Live drafts that appear in your actual email Drafts folder. Jaw-drop #2.
3. Calendar + email chain narrative. Jaw-drop #3.

By the end, "Cowork as a system" has become real to you.

## Verification checkpoint

```
List the connectors active in this Cowork Project. For each, what scope is granted?
```

Expected: Claude lists Gmail/M365, Calendar, Drive, Slack, plus your custom apps. Scopes vary; key check is that nothing says "not connected." If something is disconnected, fix before continuing.

## Common issues

- **Inbox read-back returns nothing** — connector scope might be wrong. Check Customize → Connectors.
- **Drafts not appearing in Outlook (M365)** — Zapier MCP not set up. Your assistant will fix.
- **Slack returns DMs only when expected to return channels** — connector scope is account-only by default; expand if needed.
- **Custom CRM connector slow** — many CRMs have rate limits. Be patient or query smaller windows.

## References

- `references/connector-quirks.md` — connector-specific issues and workarounds.
- M02 — R-C-T-F-C framework (the callback uses this).
- M14 — Daily Command Center (the artifact version of step 3).
- `skills/email-triage/SKILL.md` — the inbox read-back skill formalized.
- `skills/drafts-inbox/SKILL.md` — the drafts skill formalized.
