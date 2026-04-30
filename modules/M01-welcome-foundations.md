# M01 — Welcome + Foundations

## Why this module matters

You start the workshop with a verified install, a tutor (`/teach` — type that into Cowork and it walks any module of this course with you, on demand), and the vocabulary to follow everything that comes next. Without this hour, the rest of the workshop is button-pressing without understanding why each step matters. With it, every later module slots into a structure you understand.

## What you'll do

- Verify your install — Cowork, Obsidian, the ExecAIDay plugin, your connectors, and the Office add-ins are all in place.
- Confirm `/teach` is available and try it for the first time.
- Walk through 18 foundational concepts so the vocabulary in later modules lands.
- See the hallucination demo and learn to calibrate trust.

---

## Introduction

**The software below should already be pre-installed on your machine before the workshop starts.** This list is here for reference, not as a live install task. The links are useful if you want to verify, reinstall, or find the official sources later. If any item is missing when you sit down, tell your assistant — they install it now and you keep moving.

- **Claude Desktop with Cowork.** This is the workspace you'll spend the workshop in. Download from [claude.com/download](https://claude.com/download) for Mac or Windows. Sign in with your Anthropic Max account.
- **Obsidian.** Free, local-first knowledge tool. Reads the same vault files Cowork sees. Download from [obsidian.md/download](https://obsidian.md/download).
- **Google Chrome (or a Chromium-based browser).** The Claude browser extension only runs in Chrome, Brave, or Microsoft Edge. If you don't already have one installed:
    1. Download Chrome from [google.com/chrome](https://www.google.com/chrome/) for Mac or Windows.
    2. Run the installer.
    3. Open Chrome and sign in with your work Google account (so bookmarks, passwords, and your work-tab session sync).
    Brave ([brave.com/download](https://brave.com/download/)) and Edge ([microsoft.com/edge](https://www.microsoft.com/edge)) both work too — the Claude extension installs the same way on any Chromium browser.
- **Claude in Chrome (browser extension).** Lets Claude operate on websites, portals, and dashboards directly from your browser. To install:
    1. Open the Chrome Web Store: [chromewebstore.google.com](https://chromewebstore.google.com/).
    2. Search for **Claude**. The official extension is published by Anthropic.
    3. Click **Add to Chrome** (or "Add to Brave / Edge" — same flow).
    4. Pin the extension to your toolbar (puzzle-piece icon → pin Claude).
    5. Click the Claude icon, sign in with the same Anthropic account you use for Cowork.
- **The ExecAIDay course plugin.** Provides `/teach` and the 19 GTD skills you'll use throughout the workshop. Marketplace URL: [github.com/The-AI-Guys-BV/ExecAIDay-course](https://github.com/The-AI-Guys-BV/ExecAIDay-course). To install inside Cowork:
    1. Open the **Customize** sidebar.
    2. **Add the marketplace first.** Click **+** to add a new personal marketplace, paste the URL above, confirm. Cowork syncs.
    3. **Then install the plugin.** Go to **Personal plugins** (not the Anthropic plugins section). The `execaiday` plugin is now in the list — click **Install**.
- **Your connectors.** Gmail or M365, Calendar, Drive, Slack, plus your custom apps (Asana / Jira / Linear / SFDC / etc., depending on what you use). Authenticated and scoped to your account inside Cowork's **Customize → Connectors** panel.
- **Claude for Word, Excel, PowerPoint (Office add-ins).** Adds a Claude sidebar inside each Office app. Conversation context is shared across all three — Excel analysis flows into a PowerPoint deck flows into a Word memo without copy/paste. Requires a paid Claude plan (Pro / Max / Team / Enterprise). To install:
    1. Open Word.
    2. Go to **Insert** tab → **Get Add-ins** (or **Office Add-ins** depending on version).
    3. AppSource opens. Search for **Claude by Anthropic**. The official add-in is published by Anthropic.
    4. Click **Add**. Approve the prompts. The Claude sidebar appears.
    5. Sign in with the same Anthropic account you use for Cowork.
    6. **Repeat for Excel and PowerPoint** — open each app, same Insert → Get Add-ins → search "Claude by Anthropic" → Add → sign in. The Claude icon should appear in the ribbon of all three apps.
- **A starter vault and a starter work folder, in a cloud-synced location.** Both folders sit inside a cloud sync app — Dropbox, OneDrive, Google Drive, or iCloud Drive (whichever your org uses). This is required, not optional: cloud sync is how the vault stays backed up, accessible from your phone for Dispatch (M13), and durable across machines. Your assistant has placed them at the right path. M03 mounts the vault in your first Cowork Project; M12 mounts the work folder in a second one.

This module's job is to confirm all that has given you a usable workspace, and to give you the words for the next 16 modules. Most of what we cover here is vocabulary — concepts you'll hear used the whole workshop. We're not building anything yet; we're orienting.

The single most important thing in this module: by the end, your install is verified and `/teach` works — your safety net for the rest of the workshop. M02 then opens Obsidian on your vault. M03 creates your first Cowork Project mounted to that vault. From there, every module slots in.

## Beginner / Getting Started

### Step 1 — Verify Cowork

In Claude Desktop, switch to the **Cowork** tab. You should see a sidebar on the left with sections including **Customize**, **Personal plugins**, and **Cowork Projects** (likely empty for now).

If you don't see the Cowork tab at all: tell your assistant — they update or reinstall Claude Desktop now.

### Step 2 — Verify the rest of the install

Quick checks, in this order:

- **Obsidian** — open Obsidian. It should already be opened on your vault folder, or be ready to open via "Open existing vault." Don't navigate around yet — that's M02.
- **Chrome / Brave / Edge** — open your Chromium browser. Look for the **Claude** icon in your toolbar (top-right area). If pinned, clicking it opens the Claude side panel.
- **The ExecAIDay plugin** — back in Cowork, open **Customize → Personal plugins**. The `execaiday` plugin should be listed and marked **Installed**.
- **Connectors** — in **Customize → Connectors**, every service you use (Gmail or M365, Calendar, Drive, Slack, plus custom apps) should show **Connected** with a green check.
- **Office add-ins** — open Word, Excel, and PowerPoint. In each app's ribbon, the Claude icon should be visible. Clicking it opens the Claude sidebar inside the app.

Anything missing or red: flag your assistant. They install or repair it now and you keep moving. We don't proceed until every check is green.

### Step 3 — Confirm `/teach` is available

The plugin install put `/teach` plus 25 other skills onto your machine. Confirm by typing `/teach` (no arguments) in any Cowork chat.

You should see a list of 17 modules ("M01 — Welcome + Foundations," "M02 — Open Obsidian, see your vault," etc.).

If you get "Unknown command": the plugin install didn't complete. Tell your assistant — they reinstall it now from the marketplace.

### Step 4 — First teach demo

Type `/teach M06`. Claude reads the M06 module file and starts walking it. Don't actually do M06 now (you'll do it later in the workshop), but see how `/teach` opens the module, announces a section, and waits for you. Type `exit` to close out.

That's your safety net. From now on, anytime you want to revisit any module — during the workshop or months after — `/teach <module>` is permanent office hours.

## Intermediate

The 18 basic concepts. We walk them in the room, with Cowork open. Every concept becomes concrete in later modules — for now, the goal is recognition, not mastery.

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

For full definitions, see the References section at the end of this module. `/teach` will walk either reference.

## Advanced

### What NOT to use Claude for

- **High-stakes decisions without verification** — hires, fires, deals, board recommendations.
- **Math at scale** — use Excel for numbers that go in a board pack.
- **Regulated content without policy** — healthcare, legal opinions, investment advice.
- **In front of clients without disclosure** — check your industry rules.
- **"What should I do" life decisions** — Claude can think through options; the decision is yours.


---

## Try this

Type `/teach` (no arguments). Claude lists the 17 modules. You pick one. Claude walks it patiently, one section at a time. The hallucination demo follows immediately as a trust-calibration moment — your instructor demonstrates Claude making something up confidently, then you watch it self-correct when given evidence.

## Verification checkpoint

A one-minute check at the end of the module:

```
/teach
```

Expected: Claude lists the 17 modules of this course. If you get "Unknown command" or only a partial list, the plugin install didn't complete — flag your assistant.

## Common issues

- **`/teach` doesn't appear when you type it.** The plugin didn't install or didn't load. Restart Cowork. If still missing, your assistant will reinstall the plugin from the marketplace.
- **A connector shows "Connected" but Claude can't query it.** Re-authenticate from Customize → Connectors. The token may have expired between pre-install and the workshop.
- **Office add-in is installed but the Claude icon doesn't appear in the ribbon.** Close and reopen the Office app. If still missing, the add-in needs to be re-pinned — Insert → My Add-ins → pin Claude.

## References

- `references/17-basic-concepts.md` — full definitions of the 18 concepts.
- `references/context-and-context-rot.md` — deep dive on concepts #1, #13, #18.
- `references/data-privacy.md` — data handling policy.
- `references/what-not-to-use-claude-for.md` — boundaries.
- `references/connector-quirks.md` — connector-specific issues.
- `templates/vault-starter/` — the vault you just mounted.
- `templates/work-folder-starter/` — the work folder you just mounted.
