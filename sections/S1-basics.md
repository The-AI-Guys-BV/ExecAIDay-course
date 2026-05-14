---
section: 1
slug: basics
title: Basics — Claude Cowork in daily work
theme: Just Claude installed. No plugins, connectors, or Office add-ins.
walkout: You're comfortable in Cowork, you've produced a real branded deliverable using only Cowork's file access, and you know when to trust Claude and when not to.
---

<div class="ec-install-ledger">
<div class="ec-il-col">
<div class="ec-il-head">We install</div>

- Claude Cowork on your laptop, signed in to your Anthropic Max account
- Starter work folder placed at a known path (spreadsheet, Word brief, `Deliverables/` subfolder)
- Chromium browser with the Claude extension pinned to your toolbar
- Any plan upgrades you'd need to follow Section 2's add-ins later

</div>
<div class="ec-il-col">
<div class="ec-il-head">You provide</div>

- A real document you'd want Claude to read or edit
- A real spreadsheet you'd want analysed
- A brand website to scrape for the capstone (your own, a client's, or one you'd like to mimic)

</div>
<div class="ec-il-col">
<div class="ec-il-head">By the end of this phase</div>

- Your first Cowork Project mounted on the work folder
- Trust calibrated against the hallucination demo
- A real branded PowerPoint shipped end-to-end — your numbers, in another company's voice — without any plugins or add-ins

</div>
</div>

## What this section is

This is day one. You've never used Claude Cowork before. By the end of this section you will have:

- Opened Claude Desktop and found the Cowork tab.
- Created your first Cowork Project, mounted a folder, and started a chat inside it.
- Sent a dozen real prompts and watched Claude read your spreadsheets, your Word documents, and a website.
- Seen Claude be confidently wrong, and learned to push back.
- Built a branded PowerPoint deck end-to-end — your numbers, in someone else's voice — without using any plugins, connectors, or Office add-ins.

Every step is spelled out. If you're reading this and thinking "but where exactly do I click?" — keep reading; the next sentence usually says.

We are deliberately keeping things minimal in this section. No marketplace plugins. No connectors to your Gmail or Drive. No add-ins inside Word or Excel. Those layers come in Section 2 and 3. This section is the part of Claude you'll touch every day no matter what else gets stacked on top: a chat window, your local files, and a browser.

## 1. Cowork is not ChatGPT

Before clicking anything, the frame.

You have probably used **ChatGPT**, or something like it. ChatGPT is a chat box. You type a question, you get an answer, you close the tab. The next time you open it, ChatGPT does not remember you. There is no shared workspace, no folder it can read, no document it has open. Every conversation starts from zero. This is fine for one-off questions. It is exhausting for real work, because you end up copy-pasting context into every new chat.

**Claude Cowork** is different. Cowork is a workspace.

Concretely, that means: you create a thing called a **Cowork Project**, you give that project some standing instructions about your role and what you're working on, you point the project at folders on your computer (a "mounted folder"), and from that point on Claude can read those files, write new files into those folders, and remember the project's context across multiple chats.

The shorthand: **ChatGPT is a question machine. Cowork is a desk.**

For this whole section you'll work inside one Cowork Project. Your spreadsheets sit in a folder Cowork can read. Your brief sits in another file. The deck you build sits in a third. None of that requires plugins, connectors, or add-ins — just Cowork and a folder on your computer.

## 2. Opening Cowork and creating your first Project

### 2.1 Find Cowork

On your laptop, open the **Claude Desktop** application. (If you cannot find it, look in your Applications folder on Mac or Start menu on Windows. If it isn't installed, ask your assistant — they install it now.)

When Claude Desktop opens, you'll see a window with a chat in the middle. Look at the top of the window. There are tabs. One says **Chat**. One says **Cowork**.

**Click the Cowork tab.** You're now in Cowork. The window changes shape:

- A **left sidebar** with sections labelled **Customize**, **Personal plugins**, and **Cowork Projects**.
- A **main area** in the middle, currently empty or showing a "Welcome to Cowork" panel.
- A **right panel** that will fill up later — for now it's mostly empty.

### 2.2 Create a Project

In the left sidebar, find **Cowork Projects**. There's a **+** button or "New Project" link next to it. **Click it.**

A small dialog asks for:

- **Name** — type `Workshop Day 1`. (You can rename it later. Don't overthink it.)
- **Description** (optional) — leave blank.

**Click Create.** The Project appears in the sidebar and is now selected. The middle area shows the Project's chat (empty) and the right panel shows the Project's settings — instructions, mounted folders, files in scope.

### 2.3 Mount your starter work folder

Your assistant has placed a folder on your computer called the **starter work folder** — a small folder with a spreadsheet, a Word brief, and an empty `Deliverables` subfolder. (Ask your assistant where the folder is on your machine if you don't know.)

In the right panel of your Project, find the section labelled **Folders** or **Files in scope**. There's an **Add folder** button. **Click it.** A file picker opens. Navigate to the starter work folder, select it, click **Add**.

The folder now appears in the project. Claude can now read every file in it, and will be able to write new files into it. You'll see something like:

```
Workshop Day 1
└── starter-work-folder/
    ├── q3.xlsx
    ├── brief.docx
    └── Deliverables/  (empty)
```

### 2.4 Set the Project's instructions

Still in the right panel, find the **Instructions** field at the top. This is the standing brief Claude reads before every reply inside this Project. Today, type something simple, like:

```
I'm running a Q3 board update. Be direct. Flag anything you're not sure about.
Don't pad. Don't apologize.
```

Save. (Some versions auto-save; if there's a Save button, click it.)

Your Project is now set up: name, mounted folder, instructions. You're ready to chat.

## 3. Your first prompts

Click in the main chat area. The cursor is in the chat box. You're going to send some real prompts and watch what happens.

### 3.1 Read the brief

Type, exactly:

```
Read brief.docx in the starter folder. Summarize it in five bullets. Then list three things in the brief that are unclear or need more information from me.
```

**Press Enter.** (Or click the Send button.)

Claude pauses. It opens the file. (You may see a small "Reading file…" indicator.) Then it replies — five bullets summarizing the brief, then a "what's unclear" list.

### 3.2 Read the spreadsheet

In the same chat, type:

```
Now look at q3.xlsx. Which line items moved more than 15 percent compared to last quarter? Group them by region.
```

Press Enter. Claude opens the spreadsheet. Computes. Replies with a grouped list.

### 3.3 What just happened — the words

Three things happened that you should be able to name. They will come up over and over.

- Claude has **context**. That is the conversation so far, the project instructions, and any files it has read in this chat. Context has a limit. As context fills up, the quality of replies degrades.
- Claude has **session memory** — within this Project's chat, it remembers what you've been doing. But each new chat is a fresh session. The chat you start tomorrow morning does not automatically know what this chat said today.
- Claude charges itself in **tokens**. A token is roughly four characters of English. You don't track tokens day to day, but you'll notice when context is full because the replies get worse.

There are also **models** behind Claude. Different model means different speed and depth.

- **Opus** is slow and deep — best for hard reasoning.
- **Sonnet** is balanced — the default. Most of your day uses Sonnet without you thinking about it.
- **Haiku** is fast — best for quick lookups.

Cowork picks a model for you most of the time. You can ask explicitly: *"Use Opus for this — it's a hard reasoning task."*

You don't need to memorize any of this. You need to know the words. So if Claude's replies get sluggish or confused, you can think *"context is probably full"* and start a new chat.

### 3.4 The plan-approval pattern

One thing you may notice early: when you ask Claude to do something with files (especially writes — saving a new version of a document, creating a folder, generating a chart), Cowork will sometimes show you a **plan** before doing it. *"I'm going to read brief.docx, write a summary to brief-summary.docx, and create a chart at /Deliverables/q3-revenue.png. Approve?"*

Approve or modify. This is deliberate. Cowork keeps you in the loop on anything with side effects so it doesn't quietly do the wrong thing in your file system. For pure read or single-step replies, the plan step is usually skipped; for multi-step writes it appears.

Trust this pattern — it's how you avoid finding ten unwanted files in your folder later.

### 3.5 Start a new chat — and notice the silence

In the Project's chat area there's usually a **+ New chat** button or a similar control to start a fresh conversation. **Click it.**

Now type:

```
What did we figure out about the Q3 spreadsheet?
```

Claude will tell you, politely, that there is no prior conversation in this chat — it doesn't remember. The Project remembers (through its instructions and mounted folders), but each chat is a clean slate.

This is the most important habit in the whole workshop: **one task, one chat.** Don't accumulate hours of unrelated conversation in one chat. When you switch tasks, switch chats. Keep them tight. Keep them fresh.

The technical name for what goes wrong if you don't is **context rot** — quality drops as the chat gets bloated. New chat fixes it.

## 4. Trust calibration — the hallucination demo

Stay in your new chat. This is the most important moment of the section.

### 4.1 The setup

Ask Claude something it cannot actually know. Pick something obscure, recent, or specific. Examples:

```
What were the headline numbers in [a small private company]'s Q3 2025 earnings call?
```

```
Summarize the article that [a niche industry blog] published on March 14, 2025.
```

```
What did the CEO of [a regional company] say at the analyst day last quarter?
```

Pick something where you actually know the answer (or know that no public answer exists).

### 4.2 What Claude does

Claude will likely produce a fluent, confident paragraph. Names, numbers, quotes. It will sound right.

Some of it might be right. **Most of it, in this kind of question, is invented.**

This is **hallucination** — the model generating plausible-sounding output that is not grounded in fact.

### 4.3 Why it happens

Three things, working together.

- **Knowledge cutoff.** Claude was trained on data up to a certain date. Anything after that date, Claude does not know. But Claude is not always good at saying "I don't know."
- **Overconfidence.** The model's default phrasing is assertive — "the company reported $42M in revenue" — even when the underlying signal is weak or absent.
- **Pattern completion.** The model is mechanically a fluent-text generator. A confident, plausible fabrication is, structurally, the same shape as a confident, accurate recall. The model does both with the same machinery.

### 4.4 The discipline that follows

This shapes how you use Claude for the rest of your career.

- **Verify any factual claim that matters.** Especially names, numbers, and dates. Especially anything you'd put in front of a board, a client, or a regulator.
- **Push back on smooth phrasing.** When a reply sounds too sure, ask: *"How confident are you in the [number]? What's it grounded in?"* Claude usually softens — and the softening tells you something.
- **Anchor in your data.** Claude reading your spreadsheet is far more reliable than Claude recalling a fact from training. Whenever possible, point Claude at the source file rather than asking from memory.
- **The decision is yours.** Claude is leverage, not authority. A confident answer is not a correct answer.

You will be tempted to forget this in three weeks when Claude gets six things right in a row. Don't. The seventh one will be wrong, and it will look just as confident as the first six.

## 5. Files Claude can read and write

You've already had Claude read a Word document and a spreadsheet. The full picture: any file in a mounted folder is fair game. Word, Excel, PowerPoint, PDF, plain text, images.

Try these in a fresh chat (start a new chat — *one task, one chat*).

### 5.1 Edit a Word document

```
Open brief.docx. Rewrite the executive summary in three sentences — same meaning, sharper. Save the new version as brief-v2.docx in the same folder. Don't touch the rest of the document.
```

Claude opens the file, edits, saves. Open `brief-v2.docx` yourself in Word — the change is there.

### 5.2 Build a chart from Excel data

```
Look at q3.xlsx. Build a one-page summary chart of revenue by region. Make it clean and presentation-ready, not Excel default. Save it as q3-revenue-by-region.png in /Deliverables.
```

Claude reads the data, generates a chart, saves a PNG. Open the file from your file system to verify.

### 5.3 Pull commitments from a PDF

Drop any PDF you have lying around (a contract, a meeting transcript, a report) into the starter work folder. Then:

```
Read the PDF I just dropped in. Pull out every commitment that has a date or an owner attached. Output as a list with three columns: who, what, when.
```

Claude reads the PDF and produces the list.

### 5.4 What this means

Each of these is a complete, useful task — the kind of work that takes you ten minutes by hand and thirty seconds by asking. Notice that no plugin, no connector, no add-in was required. Just Cowork, the Project, and a folder on your computer.

This is the floor. Everything later in the workshop adds to this floor; nothing replaces it.

## 6. Prompt engineering — the parts you need today

You will write hundreds of prompts this week. Two ideas, used well, beat memorising twenty rules.

### 6.1 R-C-T-F-C — the five elements of a good prompt

Every prompt has five parts. Drop any one of them, the output suffers.

- **R — Role.** Who is Claude playing for this task? *"You are a senior strategy consultant."* This is not flair. It changes the tone, the structure, and the assumptions.
- **C — Context.** What does Claude need to know? The brief. The audience. The constraint. The goal. **Most weak prompts are weak here.**
- **T — Task.** What exactly are you asking for? *"Draft a 200-word board update."* Use verbs. Use bounds.
- **F — Format.** What shape should the output take? Bullets? Table? Markdown headings? Prose? Be explicit, or you'll get whatever Claude felt like.
- **C — Constraints.** What is out of bounds? *"Don't speculate beyond the data. Flag anything you're unsure about. Don't use the word 'leverage' as a verb."*

### 6.2 Worked example — the same idea, two prompts

**Weak version.** Try sending exactly this:

```
Help me with the board update.
```

Claude will produce something. It will be generic. It will not know what kind of board, what quarter, what tone, what length, or what file to read. You'll have to clarify three or four times to get anything useful.

**Strong version.** Now try:

```
You are a strategy partner reviewing a Q3 board update for a Series C SaaS company.

Context: the deck is at /docs/board-q3.pptx in this Project. The audience is two technical board members and one financial board member who tends to ask sharp questions about margins.

Task: rewrite slide 4 (the Q3 narrative slide) so the through-line is clearer. Lead with the punchline. Specifics second.

Format: 4 sentences. No bullets. Plain language.

Constraints: do not invent numbers; only use figures from /docs/q3.xlsx. Flag anything you'd want me to verify before sending.
```

Send both, in different chats. Compare the outputs. The second one is the same idea, ten times more useful. **You can feel the difference.**

### 6.3 The three worst anti-patterns

(The full anti-pattern catalogue lives in Section 2. These are the three you'll run into first.)

- **No role, no audience.** "Help me draft an email." → Claude defaults to a generic helpful-assistant voice. You'll get generic helpful-assistant output.
- **"Make it good."** "Improve this paragraph." → Subjective with no anchor. Claude will produce *something*; you'll have no idea if it's right.
- **Wall of context, no task.** Big paragraph of background, then "...thoughts?" → Claude will summarise it back at you instead of doing actual work.

When you catch yourself about to send a prompt that hits one of these — pause. Add a role. Add a clear task. Add a format. The 30 seconds you spend doing that saves you three rounds of clarification later.

## 7. Browser + Chrome extension

The browser is the second surface where Claude operates, alongside Cowork. It's especially useful when the thing you care about lives on a website that Claude can't see otherwise.

### 7.1 Pin the extension

Open Chrome (or Brave, or Edge — any Chromium-based browser). Look at the top-right of the window for the puzzle-piece icon (extensions). Click it. Find **Claude** in the list. Click the pin next to it. The Claude icon now lives in your toolbar permanently.

If Claude isn't in the list, the extension isn't installed yet. Ask your assistant.

### 7.2 First use — read a page

Navigate to any website you actually use. Try your own company's homepage, or a SaaS dashboard you log into.

**Click the Claude icon in your toolbar.** A side panel slides in from the right. Claude can now see what the page is showing.

Try, in the side panel:

```
Read this page. What is this company actually selling, in one sentence? No marketing language.
```

Claude reads the page and answers.

### 7.3 Capture testimonials

On a page with customer testimonials or quotes:

```
Pull every customer testimonial off this page. Output as a list with three columns: name, company, the claim being made.
```

Claude extracts and structures.

### 7.4 Capture a brand

This one matters for the capstone in section 8 below. Go to a brand site — your own company's site, a brand you admire, a competitor.

```
This is the brand site for [Company]. Capture the brand. I want:
- Primary and secondary colours, as hex codes if you can read them.
- Typography feel (serif/sans, modern/classical, condensed/wide).
- Tone of voice in five adjectives.
- Three example sentences that sound like the brand.
```

Claude returns a brand book. **You don't need a brand-guidelines PDF. You need a URL.**

Save the brand book to your Project — copy the text into a file called `brand-book.md` (or paste it back to Cowork in the next step).

## 8. Capstone — branded PowerPoint, no add-ins

The point of the section. You're going to build a real artifact end to end.

### 8.1 What you'll have at the end

A 6-slide PowerPoint deck on Q3, drawn from your spreadsheet, written in your brief's voice, styled with the brand colours and tone you scraped from a website. Saved to your Deliverables folder. Opens in PowerPoint. Looks finished.

Built without any plugins, any connectors, or any Office add-ins. Just Cowork's file access and the Chrome extension.

### 8.2 Setup

In your Project you should have, in the mounted starter folder:

- `q3.xlsx` — quarterly numbers.
- `brief.docx` — the strategic context for Q3.
- A `Deliverables/` subfolder, currently empty.

You also need a **brand source** — a website. Either your own company's site, a client's, or one you'd like to mimic. Have the URL ready.

:::variant industry
:::case saas
**SaaS context:** if you're using your own company data, the numbers will be ARR, net retention, gross margin, CAC payback, logo growth. Pick three to lead with. If you're picking a brand source, try the homepage of a company whose voice you respect (Notion, Stripe, Linear all have crisp brand voice you can scrape).
:::case finance
**Finance / PE / VC context:** numbers will be portfolio NAV, IRR, fund-level metrics, deployment pace. Privacy matters more here — use anonymised numbers in the workshop. Brand sources: think of a portfolio company's site, or a fund's own brand if it has one.
:::case healthcare
**Healthcare context:** numbers might be patient throughput, NPS, readmission rate, payor mix. **Don't put any PHI in this exercise.** Use aggregate data only. Brand source: try a company in the regulated-but-marketed space (medical-device or digital-health companies have strong brand voice).
:::case manufacturing
**Manufacturing context:** numbers might be OEE, on-time delivery, gross margin by SKU, working capital days. Brand sources: industrial brands that have invested in voice (some chemicals and equipment companies surprisingly well-branded).
:::case retail
**Retail / consumer context:** numbers will be same-store sales, basket size, conversion, returns rate, inventory turn. Brand sources: there's no shortage of polished retail brand sites — pick one whose visual + voice you admire.
:::case default
**Generic context:** if your industry isn't on this list, pick the three numbers from your last board update or quarterly review and use those. Brand source: any website whose look and voice you'd want to learn from.
:::endvariant

### 8.3 Step-by-step

Start a fresh chat in the Project. (One task, one chat.) Then run these prompts in sequence, one at a time, reading each reply before sending the next:

**Step 1 — find the lead.**

```
Open q3.xlsx. Identify the three numbers I should lead with for a board update. For each one, give me one sentence on why it matters this quarter.
```

**Step 2 — reconcile against the brief.**

```
Now read brief.docx — that's the strategic context for Q3. Reconcile what you saw in the spreadsheet against the brief. What is the through-line for Q3? Two sentences.
```

**Step 3 — capture the brand.** (Switch to your browser. Open the brand site. Click the Claude extension.)

```
Read this page. Capture the brand. Give me:
- Primary and secondary colours, as hex codes.
- Typography feel.
- Tone of voice in five adjectives.
- Three example sentences in that voice.
```

When Claude replies, copy the brand book.

**Step 4 — back in Cowork.**

```
Here is the brand book I just captured from the company website:

[paste the brand book here]

Now build a 6-slide PowerPoint covering the Q3 through-line we just established.

Apply the brand:
- Use the primary brand colour for slide titles and accent lines.
- Use the secondary colour for highlight numbers.
- Match the tone of voice in the prose — not generic board-update language.

Slide structure:
1. Title slide.
2. The Q3 through-line in one sentence.
3. The three lead numbers with one-sentence context each.
4. What's working (one slide).
5. What needs attention (one slide).
6. Q4 priorities, three bullets.

Save as Deliverables/q3-board-update.pptx.
```

Claude builds the deck and saves it.

**Step 5 — open and inspect.**

Open `q3-board-update.pptx` in PowerPoint. Look at it. Read it like a board member would.

Where is the brand right? Where is the prose still too generic? Be honest.

**Step 6 — iterate.**

Back in Cowork, type things like:

```
Slide 3 is too dense. Cut it to three lines max per number. Keep the punch.
```

```
The voice on slide 4 is generic — sounds like an AI wrote it. Rewrite using the brand tone we captured. Punchier. More direct.
```

```
The accent colour on titles isn't quite the hex we captured. Re-check and fix.
```

Each prompt edits the deck. Each iteration tightens it.

By the end, you have a deck you'd actually walk into a board meeting with.

### 8.4 Why this works without any plugins

Three things working together — and none of them required leaving Cowork or installing anything new:

- **Cowork's file access** read the spreadsheet, the brief, and wrote the deck.
- **Claude's native handling of Office formats** parsed Excel and produced PowerPoint.
- **The Chrome extension** read the brand off a live website.

That's the entire stack for this section.

## What you take away

- A working Cowork Project you'll use through the whole workshop.
- A real branded PowerPoint, end-to-end, no plugins or add-ins.
- Trust calibrated — you've seen Claude be wrong, you know how to push back.
- The five-element prompt move (R-C-T-F-C) and the three worst anti-patterns.
- The vocabulary — context, tokens, models, session memory, hallucination, knowledge cutoff, context rot — landed through use, not lecture.

Section 2 starts where Section 1 ends. The same Cowork Project. Now we layer on personalisation, live data, and skills.
