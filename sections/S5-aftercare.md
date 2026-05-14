---
section: 5
slug: aftercare
title: Aftercare & follow-up
theme: Keeping the system healthy. Recurring, not a sequence.
walkout: A system that survives the workshop and evolves with you.
---

<div class="ec-install-ledger">
<div class="ec-il-col">
<div class="ec-il-head">Standard contract</div>

- 90 days of setup support — free, included with install
- Quarterly cockpit review (30 min, video) — 12 months
- On-call for connector breakage — email + Slack
- Skill / artifact tweaks via ticket

</div>
<div class="ec-il-col">
<div class="ec-il-head">Premium contract</div>

- Everything in Standard
- Monthly group office hours (60 min)
- Priority lane for new connector builds
- Annual cockpit refresh (half-day session)
- Alumni community access

</div>
<div class="ec-il-col">
<div class="ec-il-head">Your side</div>

- Read the contract before day 2 wrap
- Decide Standard or Premium before the install team leaves
- Keep the cockpit open every morning — the system maintains itself when used
- Flag breakage early — most things fix in a single message

</div>
</div>

## What this section is

Sections 1–4 built the system. This section is what keeps it alive over time.

The half-life of a personal productivity system is about three months. Without intentional upkeep, your standing brief drifts, your References go stale, your skills accumulate without anyone using half of them, and the cockpit slowly starts showing yesterday's priorities instead of today's. The pattern is preventable.

This section is recurring, not a sequence. You don't do it once. You do it on a rhythm.

## 1. The quarterly check-in

Once every three months. Block 90 minutes on your calendar, alone, no meetings either side. Coffee. Vault open. Cowork open.

### 1.1 The standing prompt

In your Vault Project, send:

```
Quarterly check-in. Walk me through, in this order:

1. ABOUT ME — read About Me.md and about-me/long-form.md. What's gone stale? My role, my company, my team — anything in the brief that no longer reflects reality? Surface concrete sentences I should rewrite.

2. REFERENCES — list every file in References/. For each, when was it last updated and is it still relevant? Flag anything I haven't touched in 90 days. Suggest archive vs. keep.

3. PROJECTS — list every active project in <vault>/gtd/projects/. For each: is the outcome still right? Is the next action accurate? Should this project move to someday or be marked done?

4. SKILLS — list every skill installed via /skills. Which ones have I used in the last 30 days? Which haven't been touched? Suggest retiring the unused ones.

5. ROUTINES — list every scheduled task. For each, am I actually reading the output, or has it become noise?

6. THE COCKPIT — open the cockpit. Is each block still earning its place? Should anything be added or removed?

Don't summarise. Walk me through one at a time. Wait for my decision on each before moving on.
```

Claude walks you through. You decide on each item. The walk-through takes about 60 minutes.

### 1.2 Refresh the brief

The most important update each quarter is the brief.

```
Open About Me.md. Interview me about what's changed in the last three months. Cover:
- New responsibilities or role changes.
- New people on my team or new key relationships.
- New priorities or projects that displaced old ones.
- Anything I've learned about how I work that should be in the brief.
- Anything in the current brief that's just wrong now.

After the interview, update About Me.md. Show me the diff (what changed, what stayed). I'll approve before saving.
```

A 10-minute conversation produces an updated brief. Save. Cowork picks up the change automatically.

### 1.3 Prune References

References that haven't been touched in 90 days are usually one of three things: dead, redundant, or genuinely background. Most are dead.

```
For each reference file flagged as stale:
- Is the person/brand/tool/product still active in my work?
- If yes, what would I update if I touched it now?
- If no, can I archive it?
```

Move archived files to `References/_archive/` so they're out of Claude's day-to-day reading but still searchable if needed.

### 1.4 Retire skills

Skills installed in a burst of optimism that you never used: delete them. They clutter the `/` menu and slow you down. The skills you actually use will be obvious.

## 2. Updating the system — hands-on tweaks

Between quarterly reviews, things change. A connector breaks. A new tool enters your stack. The cockpit's "URGENT" block stops being useful. You want to add a new scheduled task.

These are small, hands-on tweaks — minutes, not hours. Two paths.

### 2.1 With a workshop assistant

The workshop offers ongoing access to the tech team — typically a 30-minute office-hours call once a month, and ad-hoc Slack support. Use it for the things that are faster to pair on than to figure out alone.

Use this when:

- A connector is misbehaving and you don't want to debug it yourself.
- You want to design a new artifact or scheduled task and want a second pair of eyes.
- A new tool entered your stack and you want to wire it up cleanly.
- You're not sure if something is broken or you're using it wrong.

### 2.2 Self-service

The faster path, when you know what you want.

- **Skills.** Run `/skill-creator` and build it. (You did this in Section 2.)
- **References.** Add files. Cowork will pick them up.
- **Cockpit edits.** Open the cockpit chat and ask for the change. The artifact regenerates.
- **Scheduled tasks.** Customize → Scheduled Tasks → edit or add.
- **Connectors.** Customize → Connectors → reauthorise or add.

Most things you'd want to change, you can change yourself in 10 minutes. The workshop team is for the cases where it's faster to pair than to figure it out alone.

## 3. New tools entering your stack

Roughly every six months, a tool you didn't have before becomes important. A new project management system. A new finance tool. A new communications platform. The pattern for integrating it:

### 3.1 Check the connector list

In Cowork, **Customize → Connectors**. Many tools are already there as standard connectors — Linear, Notion, Asana, Salesforce, HubSpot, Jira, Confluence, GitHub, and so on. The list grows over time.

If your new tool is on the list: connect, authorise, done.

### 3.2 Ask your workshop team about a custom MCP

If your new tool isn't in the standard list, it can usually still be wired up. Custom **MCP** connectors (Section 2, point 5.3) are how Cowork talks to bespoke or in-house systems. Your workshop team builds these as needed — typically a half-day of work per connector.

Don't try to build a custom MCP yourself unless you enjoy that kind of thing.

### 3.3 Add a reference for the tool

Whether the tool gets a connector or not, add a reference in `References/tools/`:

```
Open References/tools/[tool-name].md. Write:
- What the tool is.
- Who in our org uses it and for what.
- What it replaced.
- Any company-specific conventions for how we use it.
- Anything Claude should know when working with files or queries from this tool.
```

This way, even without a connector, Claude has context the next time the tool comes up in conversation.

## 4. On-demand support

Between quarterly check-ins, things will break or new use cases will land. The pattern:

### 4.1 Log it instead of fixing it immediately

When something annoys you in your Cowork setup, don't always stop and fix it on the spot. Capture it:

```
/capture cockpit's "ONE FLAG" block hasn't surfaced anything useful in two weeks — rethink it
```

```
/capture want to add a "client of the day" rotation to the morning routine
```

Items accumulate in your inbox. At the next quarterly check-in (or sooner if it gets in your way), you process them.

This prevents the death-by-a-thousand-tweaks pattern, where you spend more time fiddling with the system than using it.

### 4.2 When to call the workshop team

Three triggers:

- Something is broken and the fix isn't obvious in five minutes.
- You're about to make a change that affects multiple parts of the system (cockpit + routines + connectors all touching one new flow).
- A genuinely new use case has emerged — board offsite, M&A workstream, year-end planning — and you want a fresh pattern designed instead of bolting onto the existing setup.

### 4.3 The principle

The system you built in Sections 1–4 is yours. It will outlast this workshop, your current company, and probably this version of Cowork. Treat it like any other long-lived asset: invest a little maintenance regularly, and it pays you back for years.

## The rhythm in practice

The system, used over months, settles into four cadences:

- **Daily**: open the cockpit. Read the morning Slack DM with three priorities. Capture to the inbox throughout the day. Draft emails through Cowork. Use Office sidebars when working in documents.
- **Weekly**: run `/weekly-review` Friday afternoon. Look at the auto-generated review file before doing the manual review.
- **Quarterly**: block 90 minutes. Walk the standing prompt. Refresh the brief. Prune References. Retire unused skills.
- **As needed**: build a new skill when a repeat task emerges. Pair with the workshop team on bigger changes.

Once these four cadences are in place, the system maintains itself.
