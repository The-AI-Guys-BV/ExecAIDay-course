# M01 — Welcome + Foundations

## Why this module matters

You start the workshop with a working Cowork Project, a tutor (`/teach`) that walks any module on demand, and the vocabulary to follow everything that comes next. Without this hour, the rest of the workshop would be cargo-cult button-pressing. With it, every later module slots into a structure you understand.

## What you'll do

- Verify your install.
- Create your workshop Cowork Project and mount your two folders (vault + work folder).
- Install `/teach` and use it for the first time.
- Walk through 18 foundational concepts inside the workspace you just built.
- See the hallucination demo and learn to calibrate trust.

---

## Introduction

Tools and accounts you need installed before the workshop starts. Each item below has the exact link to the installer or signup page. If anything is missing, tell your assistant — they install it now and you keep moving.

- **Claude Desktop with Cowork.** This is the workspace you'll spend the workshop in. Download from [claude.com/download](https://claude.com/download) for Mac or Windows. Sign in with your Anthropic Max account.
- **Obsidian.** Free, local-first knowledge tool. Reads the same vault files Cowork sees. Download from [obsidian.md/download](https://obsidian.md/download).
- **The ExecAIDay course plugin.** Provides `/teach` and the 19 GTD skills you'll use throughout the workshop. Marketplace URL: [github.com/The-AI-Guys-BV/ExecAIDay-course](https://github.com/The-AI-Guys-BV/ExecAIDay-course). To install inside Cowork: open the **Customize** sidebar → **Personal plugins** → click **+**, paste the marketplace URL above, then install the `execaiday` plugin from the list that appears.
- **Your connectors.** Gmail or M365, Calendar, Drive, Slack, plus your custom apps (Asana / Jira / Linear / SFDC / etc., depending on what you use). Authenticated and scoped to your account inside Cowork's **Customize → Connectors** panel.
- **A starter vault and a starter work folder.** Already placed on your filesystem at the path your assistant gave you. You'll mount both in your Cowork Project below.

This module's job is to confirm all that has given you a usable workspace, and to give you the words for the next 15 modules. Most of what we cover here is vocabulary — concepts you'll hear used the whole workshop. We're not building anything yet; we're orienting.

The single most important thing in this module: by the end, you'll have a Cowork Project (a workspace) with both your folders mounted, and `/teach` will walk you through any future module on command. That's your safety net. If you ever miss something or want to revisit, `/teach M06` or `/teach Skills` is permanent office hours.

## Beginner / Getting Started

### Step 1 — Verify install

In your Claude Desktop, switch to the **Cowork** tab. You should see a sidebar on the left with sections including Customize, Plugins, your Cowork Projects.

If you don't see the Cowork tab at all: tell your assistant.

### Step 2 — Create the workshop Cowork Project

In the Cowork sidebar, click **+ New Project** (or your equivalent UI element — your assistant will point it out).

Name it whatever feels natural. "Workshop" is fine. "Cowork Course." Whatever.

Mount both folders:
- Your **Obsidian vault** (knowledge folder).
- Your **work folder** (projects parent).

Both mounted in the same Cowork Project. This is load-bearing — the architecture relies on Cowork seeing both folders together.

### Step 3 — Install `/teach`

This is the first skill install. Your assistant will give you the install prompt. Paste it into Cowork. Claude writes the skill file. Confirm it worked by typing `/teach` (no arguments). You should see a list of modules.

### Step 4 — First teach demo

Type `/teach M02`. Claude reads the M02 module file and starts walking it. Don't actually do M02 now (you'll do it next anyway), but see how `/teach` opens, lists the section, and waits for you. Type "exit" to close out.

## Intermediate

The 18 basic concepts. We'll go through them inside the Cowork Project you just built — every concept becomes concrete because the workspace they describe is the one you're sitting in.

Don't try to memorize. Recognize. You'll re-encounter every concept in later modules with use cases.

1. **Context** — what Claude considers when generating a response. Has limits.
2. **Tokens** — Claude's unit of measurement. ~4 chars per token.
3. **Models** — Opus 4.7 (slow, deep), Sonnet 4.6 (balanced, default), Haiku 4.5 (fast).
4. **Chat vs Cowork modes** — single conversation vs persistent workspace.
5. **Plans** — Free / Pro / Max / Team / Enterprise. You're on Max minimum (plugins).
6. **Skills** — slash commands installed on your machine.
7. **Connectors** — bridges to your services (Gmail, Calendar, Slack, etc.).
8. **MCP** — the wire format under connectors. You don't deal with it directly.
9. **Artifacts** — generated outputs. Live artifacts auto-refresh on reopen.
10. **Session memory** — what Claude remembers within a Cowork Project.
11. **Hallucination** — making up plausible-sounding facts. Verify, don't blindly trust.
12. **Knowledge cutoff** — Claude's training data ends at a date. After that, it doesn't know.
13. **"More context can hurt"** — stuffing huge amounts of context degrades quality. Curate.
14. **Overconfidence** — Claude defaults to confident phrasing even when uncertain. Push back.
15. **Cowork Project** — the app's workspace concept. The thing you just made.
16. **Project folder** — the file-system shape inside your work folder. Different from Cowork Project.
17. **`claude.md`** — the file Claude reads first in any folder. Per-folder context. Closer-to-the-file wins.
18. **Context rot** — quality degrades as a session's context grows. Open a new chat per task. The single most important habit you'll build this workshop.

For full definitions, see the References section of this plugin (`references/17-basic-concepts.md` and `references/context-and-context-rot.md`). `/teach` will walk either reference.

## Advanced

### Data privacy + company policy

When you type into Cowork, your prompt + relevant context goes to Anthropic's infrastructure. On Max plan, Anthropic doesn't train on your data. Connector data flows through when needed for a response — your inbox isn't continuously streaming. Local files in mounted folders go through when Claude reads them.

Your company has its own AI policy. Your IT contact is who to ask if unsure.

For details: `references/data-privacy.md`.

### What NOT to use Claude for

- **High-stakes decisions without verification** — hires, fires, deals, board recommendations.
- **Math at scale** — use Excel for numbers that go in a board pack.
- **Regulated content without policy** — healthcare, legal opinions, investment advice.
- **In front of clients without disclosure** — check your industry rules.
- **"What should I do" life decisions** — Claude can think through options; the decision is yours.

For details: `references/what-not-to-use-claude-for.md`.

---

## Try this

Type `/teach` (no arguments). Claude lists the 16 modules. You pick one. Claude walks it patiently, one section at a time. The hallucination demo follows immediately as a trust-calibration moment — your instructor demonstrates Claude making something up confidently, then you watch it self-correct when given evidence.

## Verification checkpoint

After the in-room work, a one-minute check: type the prompt below into your Cowork Project.

```
What folders am I currently mounting in this Cowork Project?
```

Expected: Claude lists both your vault and your work folder by name (the names you chose). If either is missing, the mount didn't take — flag your assistant.

## Common issues

- **Cowork Project doesn't see one of the folders.** Re-mount it; confirm the path. Some MDM-managed laptops require explicit folder permission.
- **`/teach` not auto-discovered after install.** Restart Cowork. If still not visible, check `~/.claude/skills/teach/SKILL.md` exists.

## References

- `references/17-basic-concepts.md` — full definitions of the 18 concepts.
- `references/context-and-context-rot.md` — deep dive on concepts #1, #13, #18.
- `references/data-privacy.md` — data handling policy.
- `references/what-not-to-use-claude-for.md` — boundaries.
- `references/connector-quirks.md` — connector-specific issues.
- `templates/vault-starter/` — the vault you just mounted.
- `templates/work-folder-starter/` — the work folder you just mounted.
