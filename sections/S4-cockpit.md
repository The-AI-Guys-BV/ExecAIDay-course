---
section: 4
slug: cockpit
title: Meetings + Artifacts & dashboards — the cockpit
theme: Output and automation. Where the system pays off.
walkout: A personalised cockpit that opens every morning. Meetings captured automatically. Routines running on schedule. Team-collaboration patterns you can deploy this week.
---

## What this section is

Sections 1–3 built the engine. This section is what the engine runs.

After this section, your morning starts the same way every day: you open one Claude artifact, and your priorities for the day are already laid out — calendar, urgent emails, drafts waiting for review, Slack mentions you missed, yesterday's reflection, this week's GTD next actions. You read it for two minutes. You go.

You'll also have meeting capture wired up: every meeting you attend produces structured notes in your vault, captures commitments into your GTD inbox, and drafts follow-up emails for you to review. No bot in the meeting. No copy-paste afterwards.

Plus: scheduled routines that run while you sleep, and the patterns for using Cowork in shared team contexts.

## 1. Meeting capture — bot-less

Most meeting bots (Otter, Fireflies, etc.) join the meeting as a separate participant. Some people object to that. Some companies disallow it. **Bot-less capture** runs on your laptop, listens to the audio of the meeting, transcribes locally or to a vendor, and produces a transcript — without showing up as a participant in the meeting.

Three tools dominate this space. Pick one.

- **Granola** — the most popular. Lives on your laptop, captures audio from any meeting platform (Zoom, Meet, Teams, Webex), produces a transcript and AI-generated notes in real time. Mac only as of writing.
- **Bluedot** — Chrome extension. Records the meeting from your browser tab. Mac and Windows.
- **Fellow** — has a bot mode and a no-bot mode. Bigger product (full meeting management). Use the no-bot mode here.

Your tech team has installed one of these — most likely Granola — on your laptop before the workshop.

### 1.1 The chain

The chain is: meeting tool → transcript → Claude → structured notes in the vault → commitments to GTD inbox → email drafts for follow-up.

You don't run all those steps by hand. You set up a small **post-meeting routine** that takes the transcript and processes it. Once configured, the routine fires automatically (or with one click) after every meeting.

### 1.2 The post-meeting routine

In your Vault Project (from Section 3), in a fresh chat, set up the routine:

```
I just finished a meeting. The transcript is at [path your meeting tool exports to — e.g., ~/Granola/transcripts/2026-05-06-board-prep.md].

Do the following:

1. Read the transcript.
2. Write structured meeting notes. Save to <vault>/Meeting Notes/2026-05-06-board-prep.md. Format:
   - Attendees (extracted from the transcript or ask me).
   - One-paragraph summary of what was discussed.
   - Key decisions, with one line each.
   - Open questions, with one line each.
   - Sentiment notes — anyone visibly disagreeing or hesitating, surface it.

3. Extract every commitment — anything anyone said they'd do, with or without a clear deadline. Append each as a bullet to <vault>/gtd/inbox.md, in the format: "from [meeting]: [person] to [action] by [deadline if mentioned]". I'll process them later via /process-inbox.

4. Identify any follow-up emails I should send (based on the meeting). For each, draft the email in my voice. Save the drafts to my Drafts folder via the email connector.

Don't summarise back at me. Just do the four things and tell me when done.
```

Claude does it.

### 1.3 Streamline with a skill

After running the routine once or twice, ask `/skill-creator` to package it as a skill — `/post-meeting <transcript-path>` — so you don't retype the prompt every meeting. Five-minute build, saves you hours.

### 1.4 Gap analysis — the real value

Beyond capturing what was said, ask Claude what was **missed**. In the same Vault chat, after meeting notes are saved:

```
Read the meeting notes you just wrote. Compare them against:
- The agenda I sent before the meeting (search my email for the meeting subject).
- The standing context for this group (look in References/people/ for the attendees).
- Past meetings with this group (search Meeting Notes/ for similar meetings in the last 6 months).

What did we not cover that we should have? What commitments did we make that contradict commitments from prior meetings? Where did we duck a hard question?
```

This kind of analysis used to take a chief of staff an hour and a coffee. Claude does it in 30 seconds. **This is where the system stops being a productivity tool and starts being a strategic asset.**

## 2. Meeting prep — `/meeting-prep`

The flip side of capture: walking into a meeting prepared.

`/meeting-prep` is one of the GTD skills installed in Section 2. It pulls everything Cowork knows about the meeting and the attendees, and produces a one-page brief.

### 2.1 Run it for a real meeting

Pick a meeting on your calendar tomorrow. Don't pick a routine standup; pick one where prep would actually help — a sales call, a board prep, a hire interview, a difficult conversation.

In Cowork:

```
/meeting-prep
```

The skill asks which meeting (or you can specify: `/meeting-prep "board prep with Diana, Tuesday"`). Then it:

- Reads the calendar event (title, attendees, agenda if any).
- Searches your inbox for related threads with the attendees.
- Searches your Meeting Notes/ for prior meetings with the same group.
- Reads References/people/ for what you have on each attendee.
- Reads the GTD project file if one matches the topic.

It produces a one-page brief. Top: the meeting's purpose and three things you want out of it. Middle: each attendee, what you have on them, recent threads. Bottom: questions worth raising; things to be ready for.

### 2.2 Read it on the way to the meeting

Send it to yourself as an email if you'll be on a phone. Or open it in Obsidian on your laptop two minutes before joining. Either way: you walk into the meeting with the prep done.

## 3. Artifacts — generated, refreshable

An **artifact** in Cowork is something Claude generates that opens in its own panel, separate from the chat. It can be a document, a chart, a small interactive HTML page, a plan, a deck. The crucial property: artifacts are **refreshable** — you can reopen one days later and Claude regenerates it against current data.

### 3.1 First artifact — small and concrete

In any Cowork chat:

```
Build me a one-page artifact showing my calendar for the next 5 working days. Group meetings by day. Colour-code by type (internal, external, 1:1). Show me at a glance where the day is heavy and where I have white space.
```

Claude generates an artifact — a small HTML page rendered inside Cowork. It looks like a calendar dashboard. Click around. Open and close it.

Now reopen the same artifact tomorrow. Claude refreshes against your live calendar data via the connector. The artifact now reflects tomorrow's data.

### 3.2 What artifacts are good for

- **Always-fresh views** — calendar, inbox, GTD lists, project status. The view doesn't go stale because it regenerates on open.
- **One-shot summaries** — a one-page board update built from current data, regeneratable when the data updates.
- **Decision aids** — pros/cons tables that recompute when you change inputs.

What artifacts are not good for: anything that needs to be exactly the same forever (use a saved file). Anything heavily interactive (use a real app).

## 4. The personalised cockpit — your flagship artifact

This is the deliverable that makes most of the rest of the workshop pay off. We build it together, end-to-end.

### 4.1 What the cockpit shows

The cockpit is a single-page artifact you open every morning. It shows:

- **Today's calendar**, with what each meeting is for and any prep status.
- **Urgent emails** from the last 24 hours — top three, with one-line summaries.
- **Drafts waiting** — emails Claude has drafted overnight that you should review and send.
- **Slack mentions** — what people pinged you about that you haven't responded to.
- **Yesterday's reflection** — a one-paragraph "what got done, what didn't" pulled from yesterday's daily note.
- **This week's GTD** — top 5 next actions, by your stated context (office, calls, low-energy, etc.).
- **One thing worth flagging** — a single highlight or risk Claude surfaces from cross-checking everything else.

It refreshes on open. Every morning, fresh.

### 4.2 Build it

In your Vault Project (the cockpit pulls from vault + connectors, so the Vault Project is the right home):

```
Build me a personalised executive cockpit as a single-page HTML artifact. The artifact should refresh against live data every time I open it.

Contents, in this order, in clean visual blocks:

1. TODAY — date, weather (skip if no weather connector), three lines.

2. CALENDAR — today's meetings via the calendar connector. For each: time, title, attendees, one-line "what's it for" (look up in References/people/ if relevant). Flag any meeting where I have no prep.

3. URGENT — top 3 emails from the last 24h via the email connector. One-sentence summary each. Mark which need a reply by EOD.

4. DRAFTS WAITING — list any emails currently in my drafts folder. One line summary each.

5. SLACK — mentions from the last 24h via the Slack connector. Channel + message.

6. YESTERDAY — read yesterday's daily note from <vault>/Daily Notes/. If it doesn't exist, skip. One paragraph: what got done, what didn't.

7. THIS WEEK — top 5 next actions from <vault>/gtd/next-actions.md, prioritised. If a context is implied (e.g., it's morning, I'm at the office), filter accordingly.

8. ONE FLAG — based on cross-checking calendar / inbox / GTD / projects: what's the single most important thing I should know this morning? (Could be a risk, a deadline I'm missing, an attendee I haven't briefed for, anything.) One paragraph.

Style: clean, generous spacing, restrained colours. Each block has a small header. No animations. No emoji. This is for a CEO at 7am, not a marketing site.

Save it as an artifact. I'll open it every morning.
```

Claude builds it. The artifact opens. Look at it.

### 4.3 Iterate

The first version won't be perfect. Iterate:

```
The "Urgent" block pulled some recurring newsletters in. Filter those out — only treat human-sent emails as urgent.
```

```
The "One flag" is being too cautious — it just summarises. Make it spicier — surface a real risk or contradiction, or say "nothing special today" if there isn't one.
```

```
Add a "MOOD" block at the top that's just a plain reading of how loaded my day looks — light, normal, heavy, brutal — based on calendar density.
```

Each round tightens it.

### 4.4 Pin it

In Cowork, artifacts can be pinned. Pin the cockpit so it's one click from your Cowork sidebar. From now on, every morning: click, read, go.

## 5. Scheduled tasks — Claude works while you sleep

The cockpit opens when you open it. Some things should run on a schedule, with no input from you.

### 5.1 Where to set them

In Cowork, go to **Customize → Scheduled Tasks** (sometimes labelled "Routines" depending on Cowork version). Click **+ New scheduled task**.

A scheduled task has:

- A **schedule** — cron-style or a simple "every weekday at 8am" picker.
- A **prompt** — what Cowork should do.
- A **destination** — Slack DM, email draft, vault file, or a combination.

### 5.2 Three useful schedules to set up

**The Monday morning brief** — Mondays at 7:30am.

```
Schedule: Mondays at 7:30am.

Prompt:
Read my calendar for the upcoming week. Read my GTD next-actions and projects. Read any unfinished items in last week's daily notes.

Produce a Monday morning brief covering:
- The week ahead at a glance — heavy days vs light days.
- Top 3 things I have to ship this week.
- Anything stale that should have moved last week.
- One question I should sit with this week.

Destination: write it to <vault>/Daily Notes/[today].md as the first entry of the day.
```

When you open your laptop Monday morning, the brief is already in today's daily note.

**Daily priorities** — every weekday at 8am.

```
Schedule: weekdays at 8am.

Prompt:
Read today's calendar. Read GTD next-actions. Pick the 3 things that, if I do them today, will make today a win.

Destination: send as a Slack DM to me.
```

Every morning, your phone gets a Slack DM with your three things. Two minutes of phone time replaces ten minutes of triage.

**Friday afternoon wrap** — Fridays at 4pm.

```
Schedule: Fridays at 4pm.

Prompt:
Walk the weekly review.

- Read all daily notes from this week.
- Read GTD lists.
- Read meeting notes from this week.
- Surface stale waiting-fors and projects without next actions.
- List accomplishments worth noting.
- Preview the upcoming week's calendar.

Destination: write it to <vault>/Daily Notes/[today]-weekly-review.md.
```

Your weekly review is staged when you sit down to do it. The prep work is already done.

### 5.3 Don't over-schedule

Two or three scheduled tasks is plenty. Beyond that, you stop reading them. Better one scheduled task you actually look at than five you ignore.

## 6. Collaboration & shared work — the team move

Cowork is built for individual leverage first. But teams use it too. The collaboration patterns are smaller in number and bigger in payoff.

### 6.1 Shared Cowork Projects

Cowork supports **shared Projects** (depending on your plan — Team or Enterprise). The pattern: you and your team mount the same shared folder; the Project's instructions and connectors are shared; everyone's edits land in the same place.

Use cases:

- A shared Project for a deal or a board cycle. Every team member updates the same files. Everyone sees the same view.
- A shared Project for a customer account. CSM, AE, support, exec — all working from the same context.

Setup goes through your tech team.

### 6.2 Multi-connector team queries

Where Cowork really shines for teams is **cross-connector queries** — pulling from multiple services in one shot.

```
For the Acme account, give me a snapshot of where things stand:

- Last 5 emails between Acme contacts and our team (email connector).
- Active Slack threads mentioning Acme in the last week (Slack connector).
- The Salesforce account record — current stage, ARR, next steps (Salesforce connector).
- Any open Jira tickets tagged "acme-customer" (Jira connector).
- The last meeting notes with Acme from <vault>/Meeting Notes/.

Produce a one-page brief. Format: top section "current state in 3 sentences," then sections for each source, then "the question to land in our next call."
```

A query like this used to require a junior to spend half a day pulling from five tools. Claude does it in 30 seconds. **This is the team-leverage move** — most executives don't have five-tool fluency, and most senior teams have moved beyond rolling up data by hand. This makes the rollup near-free.

### 6.3 Handoff patterns

When you hand off a task to a team member, give them the Cowork Project. They open it with the same context, same instructions, same connectors. They pick up where you left off without a 30-minute briefing.

Conversely, when you take a handoff, ask Claude:

```
I just inherited this Project. Read everything — the instructions, the mounted folders' claude.md files, the most recent chats, the project's GTD entry. Brief me as if I'm catching up cold. What's the project, what's done, what's next, what's at risk?
```

Five minutes replaces an hour of meetings.

## What you take away

- Meeting capture chain — transcript → notes → commitments → drafts. No bot in the meeting.
- `/meeting-prep` for any real meeting. Walk in prepared.
- Artifacts as a tool — refreshable views you don't have to rebuild.
- A personalised cockpit, pinned. Open it every morning.
- Two or three scheduled tasks running while you sleep.
- Multi-connector queries for team rollups.

Everything you've built — vault, work folder, connectors, skills, cockpit, routines — is now wired together. Section 5 is about keeping it healthy over time.
