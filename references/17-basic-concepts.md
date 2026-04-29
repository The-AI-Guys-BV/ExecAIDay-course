# The 18 Basic Concepts

Vocabulary every workshop participant needs. Taught in M01 as quick definitions; this is the reference for re-checking later. Concepts #13 (more context can hurt) and #18 (context rot) are the same phenomenon at different framings — both important enough to teach by name.

## 1. Context

Everything Claude considers when generating a response: your prompt, prior messages in the chat, mounted folder contents, connector data, skill instructions. Context has a finite size (the model's context window — Sonnet 4.6 fits ~200K tokens). Once it's full, older content gets summarized or truncated. More context isn't always better — see #13 and #18, and the dedicated reference at `references/context-and-context-rot.md`.

## 2. Tokens

The unit Claude counts in. Roughly: 1 token ≈ 4 characters of English. A 200-word email is ~250 tokens. A 100-page PDF is ~30,000 tokens. Plans have token limits per message and per session.

## 3. Models

The three Claude models, each tuned for a use case:
- **Opus 4.7** — slowest, most thorough. Use for complex reasoning, strategic writing, multi-step analysis.
- **Sonnet 4.6** — balanced. Default for most workshop work.
- **Haiku 4.5** — fastest, lightest. Use for quick triage, classification, lookups.

Cowork lets you switch per Project or per chat.

## 4. Chat vs Cowork modes

- **Chat mode** — single conversation, ephemeral, no folder context.
- **Cowork mode** — workspace mode with mounted folders, skills, scheduled tasks, persistent context. The workshop runs in Cowork.

## 5. Plans

Free / Pro / Max / Team / Enterprise. Plans differ in: token limits, model access, plugin access, scheduled task limits, guest counts (for Notion-like sharing). Workshop assumes Max minimum for plugin support.

## 6. Skills

Slash commands installed on your machine that extend Claude's behavior. In 2026 Cowork, **a skill IS a slash command** — same thing, two names. `/capture` and "the capture skill" are the same thing. Skills live in `~/.claude/skills/` (manual install) or in plugins.

## 7. Connectors

Authenticated bridges between Claude and your services — Gmail, M365, Calendar, Drive, Slack, Notion, custom CRMs. Read or read+write depending on the connector. Set up in onboarding.

## 8. MCP

Model Context Protocol. The wire format for connectors and external tool access. You don't usually deal with it directly — it's the plumbing connectors and plugins use under the hood.

## 9. Artifacts

Generated outputs Claude renders inline: documents, dashboards, charts, code. **Live artifacts** (April 2026 headline) auto-refresh on reopen — they pull fresh data each time. Use for trackers, daily dashboards, status views.

## 10. Session memory

Within a chat or Cowork Project, Claude remembers previous turns. Across Cowork Projects or after restarts, it doesn't (except via mounted `claude.md` and `memory.md` files, which persist).

## 11. Hallucination

Claude making up facts that look plausible but aren't true. Less common in 2026 than in 2023, still real. Mitigation: ask Claude to cite sources, ask it to verify, give it the source material directly via context or connectors. Trust-but-verify is the workshop default.

## 12. Knowledge cutoff

Claude's training data ends at a specific date (varies by model release). Anything that happened after the cutoff, Claude doesn't know unless you provide it via context or web search. Ask Claude its cutoff if unsure.

## 13. "More context can hurt"

Counterintuitive but real. Stuffing huge amounts of context — entire Drive folders, every email — can DEGRADE response quality because Claude has to wade through irrelevant material. Curate. Use connectors to fetch what's needed, not everything.

## 14. Overconfidence

Claude defaults to confident phrasing even when uncertain. Ask "how confident are you?" or "what could be wrong here?" to surface uncertainty. The workshop teaches you to push back.

## 15. Cowork Project (the app workspace)

The UI-level workspace concept. A Cowork Project mounts one or more local folders, has its own memory, has its own instructions, and is what you switch between in the Cowork sidebar. Every workshop participant has at least one Cowork Project mounting both the vault and the work folder.

## 16. Project folder (the file-system shape)

A subfolder of your work folder that holds bounded work — `Source Materials/` + `Working Files/` + `Deliverables/` + `claude.md` + `memory.md`. Different from a Cowork Project (#15). A Cowork Project mounts the parent folder; project folders live inside.

## 17. `claude.md`

The file Claude reads first in any folder. Contains context for that folder: voice, tone, defaults, project-specific overrides. Per-folder. Closer-to-the-file `claude.md` wins (subfolder briefs override parent briefs). The vault root `claude.md` is your chief-of-staff brief — the highest-priority context Cowork has about you.

## 18. Context rot

The 2026 term for response-quality degradation as a session's context grows. Multiple effects: lost-in-the-middle (facts in mid-thread get retrieved worse than facts at the start or end), instruction drift (your `claude.md` rules get diluted), hallucination probability rises, response time and cost climb, identity gets fuzzy.

The fix is a habit, not a feature: **open a new chat per task.** Don't pile a strategy discussion, an email draft, a calendar query, and a research synthesis into one thread. Skills bound their own context and resist rot — invoke them in fresh chats. For long projects, use `claude.md` and `memory.md` for persistent context, not in-chat history.

Symptoms you're rotting: responses feel generic after they were sharp earlier; Claude "forgets" something you said; outputs include details not in your sources; each response is slower than the last.

Full reference: `references/context-and-context-rot.md`.
