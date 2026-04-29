# Context and Context Rot

The single biggest 2026 prompting skill that nobody learns by accident. Two terms; one practical lesson.

## What "context" means

Context is everything Claude considers when generating its next response. Inside a Cowork session, context is the running pool of:

- The system prompt (Cowork's own + your active skills' frontmatter).
- Your `claude.md` files at the relevant levels (root vault, work folder, project folder — closer-to-the-file wins).
- Mounted folder contents Claude has read this session.
- Connector data Claude has fetched (inbox snapshots, calendar pulls, Notion queries).
- Every prior message in the current chat — yours and Claude's.
- Files Claude has produced (artifacts, drafts, generated content).

Context has a **finite size**. Each model has a context window — Sonnet 4.6 fits ~200K tokens, Opus 4.7 more. When the window fills, older content gets summarized or truncated.

You don't see this directly. Cowork hides the bookkeeping. But you'll feel its effects.

## What "context rot" means

"Context rot" is the 2026 term for the **degradation of response quality as a session's context grows.** It's not one bug; it's a cluster of related effects:

**1. Lost in the middle.** When context is long, models systematically retrieve facts from the start and end better than the middle. Something you told Claude an hour ago, in the middle of a long thread, may be effectively forgotten — even though it's technically still in the context.

**2. Instruction drift.** Long contexts dilute attention to your `claude.md`-level rules. The chief-of-staff brief that produced perfect tone in message 1 starts producing generic tone by message 30.

**3. Hallucination probability rises.** With more material to weave together, the model is more likely to fabricate plausible-sounding bridges between sources. A long session that pulls from many connectors is, paradoxically, more prone to hallucinated cross-references than a focused session with one source.

**4. Response time and cost climb.** Each prompt re-processes the full context. A 50-message thread at 150K tokens is paying for 50 × 150K = 7.5M tokens of processing for the next response, even if you're asking a simple follow-up.

**5. Confused identity.** When a chat has multiple skills invoked, multiple connector pulls, multiple file reads, Claude's internal "what am I doing here" gets fuzzy. Responses lose focus.

## The practical lesson

**Open a fresh chat for each distinct task.** That's the single most important habit to build.

Don't:
- Use one chat all day.
- Pile a strategy discussion, an email draft, a calendar query, a Notion update, and a research synthesis into the same conversation.
- Try to "warm up" Claude with backstory and then ask the real question 20 messages later.

Do:
- New chat per task. Cheap. Clean.
- For multi-turn tasks (an iterative writing project), keep the chat focused on that one task.
- Use skills for repeatable workflows — they bound their own context.
- For long projects, lean on `claude.md` and `memory.md` for persistent context instead of in-chat history.

## Why "more context can hurt" (concept #13 from M01)

The naive intuition: "I'll give Claude everything, then it'll have all the context it needs."

The reality: stuffing huge amounts of context — entire Drive folders, all your emails, every Notion page — DEGRADES output quality. The model has to wade through irrelevant material to find what matters. Context rot kicks in faster.

The fix: **curate**. Use connectors to fetch what's needed for the current task, not everything. Use focused `claude.md` instead of dumping all context into prompts. Trust that Cowork's hierarchical loading will surface the right context when it matters.

## Architectural implications for the workshop

Why this affects the architecture you're using:

- **Cowork Projects mount folders, not files.** The system fetches what's needed when needed. Don't manually paste folder contents into chat.
- **Skills bound their own context.** A skill like `/capture` is a tiny invocation with focused context, not a long conversation.
- **Per-folder `claude.md` keeps context relevant.** When Claude works in a project folder, the project's `claude.md` is what loads — not every claude.md in your tree.
- **Live artifacts pull fresh data each time they reopen.** They don't carry stale context across days.

The whole architecture is designed to keep contexts focused. Your job is to honor it: open a new chat per task; trust the skills; don't paste the world.

## When you suspect context rot is hitting you

Symptoms:
- Responses feel generic or off-tone after they were sharp earlier.
- Claude "forgets" something you told it earlier in the session.
- Outputs start including details that aren't in your sources.
- Each response is noticeably slower than the last.

What to do:
- Open a new chat. Start over. Re-state the task cleanly.
- If state needs to carry, capture it explicitly: have Claude write a 5-line summary into your project's `memory.md`, then start the new chat where Claude reads that summary.
- Don't try to push through. Quality won't recover within a rotting session.

## Reference

This reference and the M01 vocabulary list both treat context rot as one of the foundational concepts. Skills that produce long-form output (`/teach`, `/new-project`, `/weekly-review`, `/horizons-review`) are designed to be invoked in focused chats — don't run them inside a thread that's already 30 messages deep.
