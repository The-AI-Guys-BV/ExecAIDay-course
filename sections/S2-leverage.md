---
section: 2
slug: leverage
title: Leveraging Claude in your work
theme: Personalize Claude. Connect to live data. Extend into the surfaces you already use.
walkout: Cowork knows who you are. Live data flows in from Gmail, Calendar, Drive, Slack. Skills are running. Word, Excel, and PowerPoint each have a Claude sidebar wired in.
---

## What this section is

In Section 1 you used Claude with what was already on your laptop — files, the browser, a chat. That's the floor.

This section adds three layers on top of that floor:

- **Personalisation.** Cowork is going to learn who you are — your role, your context, how you write, what you care about. This single move makes most of the rest of the workshop feel like a different product.
- **Live data.** Cowork connects to your Gmail (or Microsoft 365), Calendar, Drive, Slack, and the work apps you already pay for — Asana, Jira, Linear, Salesforce, whichever ones you use. After this section, when you ask Claude *"what's on my plate this week?"* it actually knows.
- **Extension.** Skills (slash commands like `/skill-creator`) and the Claude sidebars inside Word, Excel, and PowerPoint. Claude moves out of just the Cowork chat and into the apps you already work in.

Every step is spelled out. The setup pieces are heavier here than in Section 1 — your workshop tech team handles most of the install plumbing in advance, so you can focus on the actual moves.

## 1. The chief-of-staff brief — Cowork learns who you are

This is the recognition-shock moment of the workshop. Before this exercise, Cowork is generic. After it, Cowork sounds like it's been working with you for years.

### 1.1 What we're doing

You're going to spend ten to fifteen minutes letting Claude interview you, like a chief of staff would on day one. Then Claude will write up a brief — a structured summary of who you are, what you do, who you work with, what you care about — and you'll paste that brief into your Cowork Project's instructions.

From that moment on, every reply Claude gives you inside this Project is shaped by who you are.

### 1.2 Where the brief lives — for now

For this section, the brief lives in your Cowork Project's **Instructions** field — the same field you put a one-line note into in Section 1. You're going to replace that one-liner with a full brief.

(In Section 3 we will move the brief out of the Project instructions and into a file in your Obsidian vault. That's a knowledge-architecture upgrade, not a different brief. For now, Project instructions is where it goes.)

### 1.3 Run the interview

Open your Workshop Day 1 Project from Section 1. Start a fresh chat. Send this prompt:

```
You are a chief of staff who just joined me on day one. You need to understand my role, my company, my team, my priorities, my style — enough to be useful starting tomorrow morning.

Interview me. Ask one question at a time. Wait for my answer before asking the next. Cover:

- My role and what I'm actually accountable for.
- The company — size, stage, sector, what we do.
- My team — direct reports, peers, the people I depend on.
- My boss / board / shareholders.
- Three or four things on my plate right now.
- Areas I want to grow in.
- How I write — formal, plain, dry, warm. Examples.
- What I do not want help with.
- Anything else a great chief of staff would know on day one.

Don't summarise yet. Just interview.
```

Claude asks the first question. Answer it — properly, like you mean it. Do not abbreviate.

Claude asks the next. Answer that one. Continue.

Type fully — the brief is only as good as what you put in. (Once you've installed a voice tool in section 4 below, you'll find dictating these answers is the natural way; for now, type.)

### 1.4 The synthesis

After about ten or fifteen exchanges, when Claude has covered the ground, send:

```
We're done with the interview. Now write the brief. Format:

# About me
A working brief for Claude to read at the start of every conversation in this Project.

## Role
[2-3 sentences]

## Company
[2-3 sentences]

## Team and people
[bullet list]

## What's on my plate
[3-4 bullets, current priorities]

## How I write
[3-4 sentences with concrete examples]

## What I don't want help with
[bullet list]

## Notes
[anything else worth knowing]

Make every line count. No padding. No corporate language. This is for an AI that will read it five hundred times.
```

Claude writes the brief.

### 1.5 Install the brief

Read the brief. Edit anything wrong. Then:

- Open the right panel of your Project.
- Find the **Instructions** field.
- **Replace** the one-line note from Section 1 with the full brief.
- Save.

Now the brief is the standing context for every reply in this Project.

### 1.6 The recognition-shock test

Start yet another fresh chat in the Project. Type:

```
Draft a one-paragraph email to my board chair updating them on the most pressing item on my plate this quarter. Match my voice.
```

**Read the reply.**

It will sound like you. It will reference your actual situation. It will not say "I hope this email finds you well." It will not pad. The voice match will not be perfect — but it will be startlingly close, after a fifteen-minute interview.

After a fifteen-minute interview, you have a brief that shapes every reply you'll get from this Project. That's the move.

## 2. Roles — when to use them, when not to

A **role** is the first letter of R-C-T-F-C from Section 1. *"You are a senior strategy consultant."* It changes what Claude does.

### 2.1 When roles help

Roles help when:

- The default voice would be wrong. Generic helpful-assistant tone is wrong for half the work an executive does.
- The frame matters more than the words. *"You are a sceptical board member"* will produce different feedback than *"You are a supportive coach"* on the same memo.
- You want Claude to bring an expertise you don't want to spell out word-by-word. *"You are a securities lawyer reviewing this for compliance issues"* primes a whole stance you'd otherwise have to write out.

### 2.2 Three useful roles to keep in your back pocket

- *"You are a chief of staff."* — synthesises, prioritises, surfaces what you're missing.
- *"You are a sceptical investor reading this cold."* — pressure-tests claims. Catches puffery.
- *"You are a senior editor at The Economist."* — tightens prose. Ruthless about flabby language.

### 2.3 Where roles fail

Roles are not magic. Two failure modes:

- **Caricature.** *"You are the world's greatest CEO."* doesn't make Claude wiser; it makes Claude more grandiose. Avoid superlatives.
- **Overdose.** Stacking five roles in one prompt — *"You are a CEO, a lawyer, a designer, and a sceptic"* — produces mush. Claude can hold one role well, sometimes two. Three is pushing it.

The rule: one role at a time, specific enough to picture. *"You are a partner at a top-tier strategy firm reviewing a board deck for a Series C SaaS company."* — that picture works. *"You are an expert in everything"* — that picture doesn't.

## 3. Anti-patterns — the full catalogue

In Section 1 you saw three: no role, "make it good," wall of context with no task. Here is the full set. Most weak prompts hit one or more of these.

### 3.1 The ten

1. **No role, no audience.** Claude defaults to a generic helpful-assistant voice. → Add a role. Add an audience.
2. **"Make it good."** Subjective with no anchor. → Replace with concrete criteria. *"Tighten to under 150 words. Cut hedging language. Lead with the finding."*
3. **Wall of context, no task.** Big paragraph of background, then nothing. → State the actual task as a verb. *"Summarise. Critique. Rewrite. Compare."*
4. **Asking Claude to "think about" something.** Vague. → Replace with a concrete deliverable. *"List three angles a board member would press on. For each, give the pushback question they'd ask."*
5. **Negative-only framing.** *"Don't be salesy. Don't pad. Don't waffle."* — Claude doesn't know what you DO want. → Pair every "don't" with a "do." *"Be direct. Lead with the point. Three sentences."*
6. **Asking for opinions on data Claude can't verify.** *"What do you think about Q3's results?"* — Claude will produce a fluent-sounding take that may be unmoored. → Anchor in your data. *"Read q3.xlsx. Tell me what you actually see, supported by the numbers."*
7. **No format specified.** Claude picks a format. You may not like it. → Be explicit. *"Bullets, max 5. Then 2 sentences of context."*
8. **Multi-question prompts that are really five prompts in a trench coat.** *"What's the strategy, who should I hire, and what's the messaging?"* → Split into separate chats. One task, one chat. (Section 1, point 3.4.)
9. **Anchoring to your existing answer.** *"I think X. Don't you agree?"* — Claude will agree. → Ask neutrally. *"Pressure-test X. What's the strongest counter-argument?"*
10. **Forgetting to verify.** Trusting a confident answer because it sounds confident. → Section 1, point 4. **Verify any factual claim that matters.**

These ten cover most of the ways prompts go wrong in real executive work. Re-read this list once a quarter. You'll catch yourself in three of them.

## 4. Voice — speaking instead of typing

Voice tools transcribe what you say into whatever text field you're in. They are a quiet productivity unlock for prompting.

### 4.1 Why voice matters for prompts

Two reasons. First, you say more than you type. A typed prompt is two sentences and a question mark; a spoken prompt is half a paragraph of context, audience, constraint. Better prompts produce better output.

Second, voice removes the friction of starting. The hardest part of using Claude well is opening the chat and writing the first line. Voice removes that friction.

### 4.2 The four

There are four worth knowing.

- **Wispr Flow** — Mac, Windows, iOS, and Android. The only major dictation tool on all four platforms. Polished. Defaults that work out of the box. The default pick.
- **Superwhisper** — Mac (and now iOS). Strong privacy posture; transcription can run fully on-device for sensitive content. Choose this if your work involves regulated material.
- **Voibe** — Mac. Lightweight alternative.
- **FloWstay** — Mac, Apple Silicon only. Free. Choose this if you want to try voice without paying first.

The default recommendation is **Wispr Flow** unless you have a specific reason otherwise (privacy → Superwhisper; budget → FloWstay).

### 4.3 Install Wispr Flow — step by step

This walkthrough uses Wispr Flow because it covers the most platforms. Steps for the others are similar.

1. **Download.** Go to [wisprflow.ai](https://wisprflow.ai). Click **Download**. Pick the right installer (macOS or Windows).
2. **Run the installer.** On Mac, drag Flow into Applications. On Windows, run the installer.
3. **Open Flow.** First launch asks for permissions:
   - **Microphone access.** Required. Grant it.
   - **Accessibility permission** (Mac) or equivalent on Windows. Required so Flow can type into any text field. Grant it.
4. **Sign in.** Create an account or sign in. The free tier covers a lot; Pro is around $15/month if you go heavy.
5. **Pick your hotkey.** Flow asks. Default on Mac is **Function (Fn)**. Default on Windows is similar. Pick one you don't already use for something else. Caps Lock is a popular swap because most people don't use it.
6. **Train (optional).** Flow can learn your custom vocabulary — names of clients, company-specific terms — so it transcribes them right. Add a few you use weekly.

### 4.4 Try it in Cowork

Open your Cowork Project. Click in the chat box. **Hold the hotkey** (Fn or whatever you set). **Speak**. **Release the hotkey**. The spoken text appears in the chat box. Send.

Try a real prompt this way. Hold the hotkey, say:

> *"You are a chief of staff. I need to update my board on a tricky situation in our biggest customer account — we're at risk of losing them, and the renewal is in three weeks. Read the customer file in the Project, write me a five-bullet update for the board, leading with what's actually happening, then what we're doing about it. Don't sugarcoat."*

Release. The whole prompt is in the chat. Send.

Voice prompts are usually richer than typed ones because you naturally include more context.

### 4.5 What to use voice for

- Long prompts with rich context.
- Drafting (not editing) — you'd dictate a memo to a colleague, you can dictate one to Claude.
- Notes between meetings — drop ideas into a vault file the moment they hit you.

What not to use voice for: short corrections, short factual questions. Typing is faster for those.

## 5. Connectors — Claude reads your live data

Connectors are bridges between Cowork and the services you already use — Gmail, Microsoft 365, Calendar, Drive, Slack, and the apps your team runs on (Asana, Jira, Linear, Salesforce, etc.).

After connecting, when you ask Claude *"what did Diana send me yesterday about the Q3 board pack?"* — Claude actually reads your inbox and answers. Not from training data, not from guesses. From the actual email.

### 5.1 Where to set them up

In Cowork, in the left sidebar, click **Customize**. A panel opens. Inside, find **Connectors** (sometimes labelled "Apps" or "Integrations" depending on Cowork version).

You'll see a list of available connectors. The big ones — Gmail, Google Calendar, Google Drive, Microsoft 365 (which covers Outlook, Teams, OneDrive, SharePoint), Slack — are at the top.

### 5.2 Connecting your first one

Pick the most important one. For most people that's email — Gmail or Outlook.

Click **Connect**. A browser tab opens. You're asked to log in to your Google or Microsoft account. You log in. Then you're asked to **grant permissions** — read email, search email, draft email, and so on. Read the list.

(Aside: this is a real authorization. Claude will be able to read every email in your account from the moment you grant this. Your IT / security team has likely vetted this scope already; if not, talk to them before clicking Allow. Cowork respects what your account permits — if your IT has scoped down what apps can access, those scopes apply.)

Click Allow. The tab closes. Back in Cowork, the connector now shows **Connected** with a green check.

Repeat for each connector you use. Your assistant is on hand for any that throw permission errors — those are usually account-policy issues that need an admin.

### 5.3 The MCP word

You'll occasionally see **MCP** (Model Context Protocol). MCP is the technical protocol underneath connectors — it's the wire format Cowork uses to talk to Gmail or Slack. You don't need to deal with it directly. If a connector you want isn't in the standard list, your tech team can build a custom MCP connector. That's normal in larger orgs.

### 5.4 Test the connectors

Start a fresh chat in your Project. Try a few prompts:

```
Search my inbox for emails from [a colleague] in the last two weeks. What are the three threads I most need to respond to? Don't draft replies yet — just tell me what's pending.
```

```
What's on my calendar tomorrow? For each meeting, in one sentence, what's the meeting actually for? Flag any meeting I should reschedule based on the prep I'd need.
```

```
Search my Drive for documents about the Q3 board pack. Show me the three most recent. Read the most recent and summarise it.
```

```
Look at my #leadership Slack channel for the last 48 hours. What's the most-discussed topic? What does the team seem to think?
```

If any of these throw a "no access" error, it's almost always a connector permission issue — re-authenticate from Customize → Connectors.

Cowork is no longer a chat box. It's reading your real data, in real time.

## 6. Email drafts — connectors at work

The most-used connector move in practice: drafting replies.

### 6.1 The basic move

```
Read the latest email from [a colleague]. Draft a reply in my voice. Match the tone of the rest of the thread. Don't send — leave it as a draft in my drafts folder.
```

Claude reads, writes a draft, saves it. You open Gmail or Outlook, find the draft, edit if needed, hit send.

### 6.2 Triaging an inbox

```
Look at my inbox over the last 24 hours. Group the unread mails into three buckets:

1. Reply needed today — for each, draft a short reply in my voice.
2. Reply needed this week — list with one-sentence summary each.
3. FYI / archive — list, one line each.

Save the drafts. Don't send anything.
```

Claude works through your inbox, drafts the urgent replies, tags the rest. You walk through Drafts in Gmail or Outlook, edit each one in 30 seconds, send. The whole inbox processed in 15 minutes.

### 6.3 Boundaries

Two rules. **Never auto-send.** Always leave drafts for you to review. Voice and content matter; Claude gets close, never perfect. **Watch for hallucination in factual claims.** If Claude drafts *"As we discussed last week..."* and you didn't, the draft is wrong. Verify before sending.

## 7. Skills and slash commands

A **skill** is a reusable prompt packaged so you can invoke it with a slash. `/help-me-prompt` is a skill that takes a draft prompt and rewrites it in R-C-T-F-C structure. `/skill-creator` is a skill that helps you build new skills.

In this section you'll demo skills that ship with Cowork, install a small workshop skill pack, and create one of your own.

### 7.1 What ships with Cowork

In any chat, type `/` (just the slash). A menu appears showing the skills available right now. Some of these are Cowork built-ins; some come from any plugins or skills you've installed.

The Cowork built-ins change over time. The pattern is the same: type `/<name>`, optionally add an argument, the skill runs.

### 7.2 Install the workshop skill pack

Your assistant is going to install a small skill pack used in Sections 3 and 4 — the GTD skills (capture, process-inbox, weekly-review, and a few others). The install takes about a minute. Watch them do it once so you know how it's done — the path is **Customize → Personal plugins → Add** — but you don't need to handle the install yourself.

After install, type `/` again. The new skills now appear in the menu.

### 7.3 Build your own skill

The most useful muscle in this whole topic: building your own skill, in five minutes.

In a fresh chat:

```
/skill-creator
```

`/skill-creator` is a skill that interviews you about a skill you want to build, then writes the skill files for you. It asks questions like *"What's the skill for? What inputs does it take? What output should it produce?"*

A good first skill to build for yourself: **`/draft-update`** — takes a project name as an argument, reads the project's files in your Cowork Project, drafts a one-paragraph update for your boss in your voice.

Run `/skill-creator`. Answer its questions. At the end, it produces the skill files. You install the skill (it'll tell you how — usually one click). From now on, `/draft-update [project name]` runs in any chat.

You now know how to extend Cowork yourself.

## 8. Office add-ins — Claude inside Word, Excel, PowerPoint

The third surface, after Cowork and the browser. The **Claude by Anthropic** add-ins put a Claude sidebar inside Word, Excel, and PowerPoint. Sidebar is open, you work in the document, Claude is right there.

### 8.1 The install — what your tech team has done

Your tech team has installed three add-ins on your machine before the workshop. Each comes from Microsoft AppSource, the official Microsoft add-in store, and is published by Anthropic.

If you want to verify the install is in place: open Word, look at the **Insert** tab in the ribbon, find **My Add-ins**. Claude by Anthropic should be listed. Same in Excel and PowerPoint. If it's not, flag your assistant — they install it now.

### 8.2 Open the sidebar — Word first

Open Word. Open any document — last quarter's board memo, a draft you have lying around. Look at the ribbon. There's a Claude icon (orange-and-white logo). **Click it.** A sidebar opens on the right side of the document.

Sign in with the same Anthropic account you use for Cowork.

### 8.3 The sidebar shape

The sidebar in Word, Excel, and PowerPoint all follow the same shape: a chat box at the bottom, conversation history above. You type a prompt, Claude reads what's in the document and replies. Some prompts produce changes directly in the document — Claude inserts a paragraph, edits a slide, formats a table.

**Shared context across the three apps** is what makes this more than three separate sidebars: a conversation you start in Excel continues in PowerPoint and Word. Numbers you analyse in one app become slides or paragraphs in the next without copy-paste.

### 8.4 Try it — Word

In your Word document, type a prompt in the Claude sidebar:

```
Read this whole document. The current opening paragraph buries the lede. Rewrite it so the punchline is the first sentence, and the supporting context follows. Show me the rewrite — don't change the document yet.
```

Claude shows the rewrite in the sidebar. If you like it, click **Insert** — the rewrite replaces the paragraph in the document. If you don't, refine.

### 8.5 Try it — Excel

Open the same `q3.xlsx` from Section 1. Open the Claude sidebar in Excel.

```
Read this sheet. Identify the three most surprising line items. For each, propose one chart that would land the point at a glance. Don't build the charts yet — describe them.
```

Claude reads, replies. Ask Claude to build one of the charts:

```
Build chart 1 in this sheet, on a new chart tab.
```

Claude inserts the chart.

### 8.6 The branded-deck workflow inside the sidebars

In Section 1 you built a branded deck via Cowork file ops + Chrome extension. Here is the same branded-deck shape, done **inside the Office sidebars** — different mechanics, same outcome.

The flow:

1. **Excel sidebar.** *"Look at q3.xlsx. Find the three numbers I should lead with for the board. Save them as a small summary table at the top of a new sheet called 'For Deck'."*
2. **PowerPoint sidebar — open a new deck.** *"I'm building a Q3 board deck. The three lead numbers are in the Excel file we were just on. The brand book is at [paste from Section 1 or new capture]. Apply the brand to titles and accents. Pull the three numbers from Excel into the first three slides."*
3. **Continued in PowerPoint sidebar.** *"Slide 4 — what are we doing about it. Reference the strategic narrative in brief.docx (open in Word). Pull the relevant paragraph and adapt it for slide 4."*
4. **Word sidebar — same conversation.** Once back in Word, the conversation context is shared. *"Take the deck we just built. Write a half-page memo that paraphrases the deck for the one board member who reads memos, not slides."*

The key move: the Claude conversation is persistent across the three Office apps. You don't restart the conversation each time you switch apps. The numbers you analysed in Excel are still in scope when you open PowerPoint. The narrative you built in PowerPoint is still in scope when you open Word.

### 8.7 When to use the sidebars vs. Cowork

A real question, not a settled one. Two practical answers:

- **You're already in the document.** If you're staring at a Word draft and want to edit it, the sidebar is faster than switching to Cowork. Same for Excel and PowerPoint.
- **You want to coordinate across files and folders, not just one document.** Cowork is better — it sees the whole folder, multiple files, your Project context, your connectors.

Both are useful depending on what you're doing. The sidebars are tactical (one document at a time). Cowork is the workspace (the project, the folder, the live data).

## What you take away

- A chief-of-staff brief — installed in your Project's instructions, sounding like you.
- The vocabulary of roles and the ten anti-patterns. You can spot a weak prompt at a glance.
- A voice tool installed and working with Cowork.
- Connectors live — Cowork reads your inbox, calendar, drive, Slack.
- Email-drafts move down to muscle memory.
- Skills running, plus one you built yourself with `/skill-creator`.
- Claude sidebars wired into Word, Excel, PowerPoint, with shared context across the three.

Section 3 takes the personalisation — the brief — and gives it a permanent home in a file you own. That's where the architecture starts.
