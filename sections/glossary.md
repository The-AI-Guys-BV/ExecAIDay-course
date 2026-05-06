---
section: glossary
slug: glossary
title: Glossary
theme: One-line definitions for the terms used across the course. Alphabetical. The introducing section is in parentheses.
walkout: A reference for the words that appear in the course, with a pointer to where each is taught.
---

## About this glossary

Quick definitions, alphabetical. Each entry points to the section that introduces it. Use this during the workshop to look up a word, and after the workshop as a refresh.

## A

**About Me.md** *(Section 3)* — the file at the root of your vault that holds your chief-of-staff brief. Cowork reads it at the start of every conversation in any Project that mounts the vault.

**Anti-pattern** *(Section 1, expanded in Section 2)* — a common way of writing prompts that produces weak output. Section 2 lists the ten worst.

**Artifact** *(Section 4)* — generated output that Cowork renders in its own panel, separate from the chat. **Live artifacts** refresh against current data when reopened.

## B

**Bot-less meeting capture** *(Section 4)* — recording and transcribing a meeting from your laptop's audio, without joining as a participant. Granola, Bluedot, and Fellow are the common tools.

**Brief** *(Section 2)* — short for the chief-of-staff brief — the standing summary of who you are and how you work, that Cowork reads at the start of every conversation. Lives in `About Me.md` from Section 3 onward.

## C

**Capture** *(Section 3)* — the GTD discipline of noting something the moment it occurs to you, without processing it. The `/capture` skill appends a bullet to `gtd/inbox.md`.

**Chief-of-staff brief** — see Brief.

**`claude.md`** *(Section 3)* — the file Claude reads first in any folder. Per-folder context. Closer-to-the-file wins when multiple `claude.md` files apply.

**Cockpit** *(Section 4)* — the personalised executive dashboard built as a refreshable artifact. Opens every morning to a current view of calendar, urgent emails, drafts, GTD priorities, and one flag.

**Connector** *(Section 2)* — an authenticated bridge between Cowork and a service you use — Gmail, Microsoft 365, Calendar, Drive, Slack, Salesforce, etc. Set up under Customize → Connectors.

**Context** *(Section 1)* — what Claude considers when generating a reply: the conversation, the project instructions, mounted folder contents, connector data. Has a finite limit.

**Context rot** *(Section 1)* — quality degradation as a chat's context fills up. Fix: one task, one chat. Open a new chat when you switch tasks.

**Cowork Project** *(Section 1)* — Cowork's workspace concept. Mounts folders, holds standing instructions, has its own chat history. Different from a project folder (the file-system shape).

## D

**Daily note** *(Sections 3, 4)* — one file per day in `<vault>/Daily Notes/`. Holds the day's capture, reflections, and Claude-generated briefs.

**Dispatch** *(Section 3)* — the phone app (or whichever current tool) that lets you capture spoken notes that land in your vault's inbox. Mobile capture.

## F

**FloWstay** *(Section 2)* — voice tool. Mac (Apple Silicon) only. Free.

## G

**Granola** *(Section 4)* — bot-less meeting capture tool. Mac.

**GTD (Getting Things Done)** *(Section 3)* — David Allen's productivity system. The workshop wires GTD into your vault: inbox, next-actions, waiting-for, projects, someday, tickler.

## H

**Hallucination** *(Section 1)* — Claude generating fluent, plausible-sounding output that is not grounded in fact. Verify factual claims, especially names, numbers, and dates.

## I

**Inbox** *(Section 3)* — the GTD inbox file at `<vault>/gtd/inbox.md`. Everything captured lands here for processing later.

**Instructions** *(Section 1)* — the standing brief Cowork reads at the start of every reply in a Project. Set in the Project's right panel. From Section 3 onward, the brief lives in `About Me.md` and the Instructions field is a one-liner pointing to it.

## K

**Knowledge cutoff** *(Section 1)* — the date Claude's training data ends. Anything after that, Claude doesn't know unless you provide it.

## L

**Live artifact** — see Artifact.

**Long-form** *(Section 3)* — the longer version of the brief, at `<vault>/about-me/long-form.md`. Read on request, not every conversation.

## M

**MCP (Model Context Protocol)** *(Section 2)* — the wire format under connectors. You don't usually deal with it; your tech team uses it to build custom connectors for in-house tools.

**Meeting prep** *(Section 4)* — pre-meeting brief produced by `/meeting-prep`, drawing from calendar, inbox, prior meeting notes, and References.

**Mobile capture** — see Dispatch.

**Model** *(Section 1)* — the underlying Claude model. **Opus** (slow, deep), **Sonnet** (balanced default), **Haiku** (fast).

**Mounted folder** *(Section 1)* — a folder on your disk that you've added to a Cowork Project. Cowork can read and write files in mounted folders.

## N

**`/new-project`** *(Section 3)* — the skill that scaffolds a new project — folder structure (Source Materials / Working Files / Deliverables), a tailored `claude.md`, and a matching GTD project entry.

**Next action** *(Section 3)* — GTD term for the concrete physical next thing required to move a project forward. Lives in `<vault>/gtd/next-actions.md`.

## O

**Office add-ins** *(Section 2)* — Claude sidebars inside Word, Excel, and PowerPoint. Conversation context is shared across the three apps.

**One task, one chat** *(Section 1)* — the discipline of starting a new chat when you switch tasks, to avoid context rot.

**Opus** — see Model.

**Overconfidence** *(Section 1)* — Claude's default phrasing is assertive even when the underlying signal is weak. Push back: "how confident are you?"

## P

**Pin** *(Section 1)* — putting an extension or artifact in a permanent visible spot. Pin the Chrome extension to your toolbar; pin the cockpit artifact to your Cowork sidebar.

**Plan** *(Section 1)* — your Anthropic plan: Free, Pro, Max, Team, Enterprise. Workshop assumes Max minimum.

**Post-meeting routine** *(Section 4)* — the chain that takes a meeting transcript, writes structured notes to your vault, captures commitments to GTD inbox, and drafts follow-up emails.

**Process inbox** *(Section 3)* — the GTD discipline of clarifying every captured item into action, project, waiting-for, or trash. The `/process-inbox` skill walks it.

**Project folder** *(Section 3)* — a folder inside your work folder, with the standard shape (Source Materials / Working Files / Deliverables / `claude.md`). Different from a Cowork Project.

**Prompt** *(Section 1)* — what you type to Claude. Good prompts have five elements: see R-C-T-F-C.

## R

**R-C-T-F-C** *(Section 1)* — the five-element prompt structure: **R**ole, **C**ontext, **T**ask, **F**ormat, **C**onstraints.

**References** *(Section 3)* — the folder at `<vault>/References/` holding files about people, brands, tools, and products you work with. Claude reads them on demand.

**Reflection** *(Section 4)* — short evening (or morning-after) write-up in the daily note: what got done, what didn't.

**Role** *(Sections 1, 2)* — the "you are…" line at the start of a prompt that frames Claude's stance. *"You are a sceptical board member"* changes the output.

**Routine** — see Scheduled task.

## S

**Scheduled task** *(Section 4)* — a Cowork prompt that runs on a schedule (Mondays at 7:30am, weekdays at 8am, etc.) and sends output to a destination (Slack DM, email draft, vault file). Set under Customize → Scheduled Tasks.

**Session memory** *(Section 1)* — what Claude remembers within one chat. Across chats, no memory; that's what mounted folders, instructions, and `claude.md` files are for.

**Skill** *(Section 2)* — a reusable, named prompt invoked with a slash. `/capture`, `/process-inbox`, `/meeting-prep`. Build your own with `/skill-creator`.

**`/skill-creator`** *(Section 2)* — the skill that interviews you about a new skill and writes it for you.

**Slash command** — see Skill. They're the same thing.

**Sonnet** — see Model.

**Starter vault** *(Section 3)* — the vault folder pre-installed on your laptop before the workshop, with the standard structure (claude.md, About Me.md, References/, gtd/, Daily Notes/, etc.).

**Starter work folder** *(Section 1)* — the work folder pre-installed on your laptop, with sample files for the Section 1 capstone.

**Superwhisper** *(Section 2)* — voice tool. Mac. Local-first transcription option for sensitive content.

## T

**Tickler** *(Section 3)* — GTD list of things to defer to a future date. `<vault>/gtd/tickler.md`.

**Token** *(Section 1)* — Claude's unit of measurement, roughly four characters of English. You don't track tokens day-to-day, but context limits are measured in them.

## V

**Vault** *(Section 3)* — your personal knowledge base on disk. A folder containing your standing brief, references, GTD lists, daily notes, meeting notes. Mounted to Cowork; viewed/edited in Obsidian.

**Voibe** *(Section 2)* — voice tool. Mac.

**Voice tool** *(Section 2)* — software that transcribes your speech into the active text field. Wispr Flow, Superwhisper, Voibe, or FloWstay.

## W

**Waiting-for** *(Section 3)* — GTD list of things you're waiting on others for. `<vault>/gtd/waiting-for.md`.

**Weekly review** *(Section 3)* — GTD discipline performed once a week: process inbox, review next-actions, projects, waiting-fors, calendar. The `/weekly-review` skill walks it.

**Wispr Flow** *(Section 2)* — voice tool. Mac and Windows. Most common workshop pick.

**Work folder** *(Sections 1, 3)* — the folder on your disk where active project work lives. Mounted to Cowork. Different from the vault — work folder is for outputs and deliverables; vault is for knowledge.

**Workshop tech team** — the team behind the workshop. Handles installs, custom connector builds, and post-workshop support.
