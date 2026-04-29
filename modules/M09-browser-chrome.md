# M09 — Browser + Chrome

## Why this module matters

Claude in Chrome means Claude can navigate, record, replay, and coordinate across tabs. Connectors give Claude your data; Chrome gives Claude your screen. The deepest live exercise of the workshop.

## What you'll do

- Open the Claude in Chrome side panel.
- Record a 3-step workflow on a real site (CRM / dashboard / portal).
- Replay the workflow on demand.
- Run a multi-tab task (competitive intel across 6 sites → one comparison).

---

## Section 1 — Introduction

A connector handles structured data — your inbox, your calendar, your Notion. A browser handles everything else: portals without APIs, dashboards behind logins, sites with no MCP integration. Claude in Chrome is for those.

Three killer capabilities:
- **Record-and-replay:** Claude watches you do a task once, then repeats it on command.
- **Multi-tab:** Claude opens N tabs, pulls data from each, synthesizes.
- **Scheduled Chrome tasks:** the same record-and-replay, but on a schedule.

Plus side capabilities: console log reading (debugging), real-site navigation (pull a fact from a portal you can't get to via connector).

## Section 2 — Beginner / Getting Started

### Open the side panel

In Chrome (or Brave), click the Claude extension icon. Side panel opens on the right. You'll see chat-like interface, like Cowork but operating on the active browser tab.

If the extension isn't installed: your IT onboarding should have done this. Your assistant will install now.

### One-fact navigation

Pick a portal you actually use — your CRM, a dashboard, a vendor portal. Open it in a tab. In the side panel:

```
Pull the [specific fact] from this page. Just the value, no commentary.
```

Examples:
- "Pull total active accounts from the dashboard."
- "Pull the next renewal date from the customer profile open in this tab."
- "Pull the Q3 revenue from the report on this page."

Claude reads the page and returns the value. First proof Chrome works.

## Section 3 — Intermediate

### Record-and-replay

Pick a 3-step task you do often. Examples:
- Log into your CRM, navigate to a specific report, screenshot.
- Open a vendor portal, check a status, summarize.
- Open a Notion page, copy a section, paste into another tool.

In the Claude in Chrome side panel:

```
I'm going to do a 3-step task. Watch what I do, then I'll ask you to replay it later.
```

Then perform the 3 steps. Claude records each click and form input.

When done:

```
Save this workflow as "<name>".
```

Then test:

```
Replay the workflow.
```

Claude does the 3 steps without you. The first time you watch this happen, it feels like magic. After a few replays it feels normal.

### Multi-tab task

Pick a task that benefits from cross-site comparison. Example:

```
Open these 6 competitor websites in new tabs. From each, pull pricing info, primary
target customer, and one differentiator they emphasize on the homepage. Compile into
a comparison table.

URLs: [paste 6 URLs]
```

Claude opens each, reads, compiles. The output is a table you couldn't have built faster manually.

### Scheduled Chrome tasks

Once a workflow is recorded, you can schedule it to run automatically. Open Claude in Chrome → Workflows → click your saved workflow → Schedule.

Examples worth scheduling:
- Daily 8am: pull yesterday's CRM dashboard snapshot.
- Weekly Monday: pull updated customer health scores.
- Before each board meeting: pull current ARR from the dashboard.

Output goes to Cowork (you specify destination — file, Slack post, email, etc.).

## Section 4 — Advanced

### Console log reading

Claude in Chrome can read browser console logs. Useful when something is broken on a page you control:

```
Read the console logs on this page. What errors are there? What might be causing the
form submission to fail?
```

Claude reads, identifies errors, suggests fixes. Engineering-flavored move; useful even for non-engineers when a page misbehaves.

### Multi-tab coordination at scale

The 6-site competitive intel demo is the simple version. Bigger:
- Pull data from 30 customer portals to verify renewal dates.
- Cross-reference 10 vendor sites against your contracts.
- Compile a daily snapshot of 15 industry-relevant news sites.

The pattern: list the URLs, specify what to pull from each, specify the output format. Claude does the work serially or in parallel depending on the task.

Watch out: rate limits. Some sites flag unusual traffic. Don't run a 50-tab job hourly.

### Combining Chrome with skills

A skill can call into Chrome. Custom skill example:
- `/customer-snapshot <name>` opens the customer's record in your CRM, pulls health scores, opens their public website, summarizes recent news, returns a one-page brief.

You'll build skills in M11 with `/skill-creator`. Chrome integration is a natural extension.

---

## Micro-win

Tijn picks default. Three options, all staged:
1. Real-site navigation: Claude pulls a specific fact from your actual CRM / dashboard.
2. Record-a-workflow: you perform 3 steps, Claude records, you replay.
3. Multi-tab intel: 6 competitor sites → comparison table.

The default is to do all 3 — they go together. Picking one stages a deeper exploration of that capability.

## Verification checkpoint

```
What workflows have I saved in Claude in Chrome?
```

Expected: Claude lists the workflow(s) you saved during the module. If empty, the save didn't take — re-record.

## Common issues

- **Side panel doesn't open** — extension not installed or blocked by browser policy. Reinstall.
- **Recorded workflow fails on replay** — page state changed (logged out, layout updated). Re-record.
- **Multi-tab job hangs** — site is slow or rate-limiting. Reduce parallelism, retry.
- **Workflow needs auth** — the extension follows your existing browser session. If you weren't logged in, log in and re-record.

## References

- M11 — building custom skills with `/skill-creator` that can incorporate Chrome.
- M12 — scheduled tasks (the scheduling layer for Chrome workflows).
