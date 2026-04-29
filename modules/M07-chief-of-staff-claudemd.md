# M07 — Chief of Staff `claude.md`

## Why this module matters

The vault root `claude.md` is the highest-priority context Cowork has about you. Once it exists, every conversation in your workspace inherits your voice, your preferences, your context. Skip this module and Claude is working from defaults; do it well and Claude works for YOU specifically. This is the single most personal module of the workshop — and the one with the highest ROI.

## What you'll do

- Use the `new-vault-claudemd` interactive prompt to write your chief-of-staff brief (~30 lines, 4 sections).
- Brief is written in Obsidian (the vault).
- Watch Claude read your `about-me` and surface 3 non-obvious things — recognition shock.
- Compare an email draft pre-`claude.md` (generic) vs post-`claude.md` (matches your voice).

## Time

~75 minutes.

---

## Section 1 — Introduction (~5 min)

You have a chief of staff right now. You probably don't think of them that way. They're whoever knows your priorities, your quirks, your stakeholders, the things you do and don't say in writing. They've earned that knowledge over years.

Claude doesn't have any of that yet. This module gives Claude a starter version — captured in writing, in your vault, accessible to every conversation.

The brief lives at `<vault>/claude.md`. Roughly 30 lines, 4 sections. Written through an interactive interview.

Once it exists: every email Claude drafts sounds more like you. Every analysis takes your priorities into account. Every artifact reflects your taste. The chief-of-staff brief is the highest-leverage file in the workshop.

## Section 2 — Beginner / Getting Started (~25 min)

### The interview

Open Obsidian. Open the file `<vault>/claude.md` (currently a placeholder).

In Cowork, paste this prompt:

```
Walk me through writing my chief-of-staff brief. Use the new-vault-claudemd pattern.
Save the result to my vault claude.md, replacing the placeholder.
```

Claude conducts an interview. Roughly 4 sections, several questions per section:

**Section 1 — Who I am.**
- Role + company stage.
- What you spend most of your time on.
- Your most important stakeholders (board, investors, key customers, direct reports).

**Section 2 — How I communicate.**
- Tone defaults (warm / neutral / direct / blunt).
- Length preferences (brief / measured / detailed).
- Words/phrases you avoid (some execs hate "leverage," "synergy," "circle back," etc.).
- Signature style.

**Section 3 — What I value, what I avoid.**
- Working style preferences.
- Things that frustrate you (over-meetings, over-emailing, generic AI tells).
- What you DON'T want Claude doing on your behalf.

**Section 4 — Context.**
- Industry / domain quirks.
- Confidentiality posture.
- Specific connectors or tools you rely on.

Answer naturally. Don't over-engineer. The brief is meant to be ~30 lines — short and high-signal.

### What gets written

Claude synthesizes your answers into the brief at `<vault>/claude.md`. Watch Obsidian render it as you go. Edit any line if you don't like the synthesis.

## Section 3 — Intermediate (~25 min)

### Populate `about-me/`

The vault has a folder `about-me/` with three files:
- `about-me.md` — long-form personal context (more than fits in claude.md).
- `writing-rules.md` — specific tone and word rules.
- `memory.md` — patterns Cowork learns about you over time.

Now that the chief-of-staff brief is written, populate these:

```
Based on what I told you for the chief-of-staff brief, expand the about-me/about-me.md
with the longer-form context. Include role history, current stakeholders, work patterns,
things-I-care-about-deeply.
```

Claude expands. You edit. Same for `writing-rules.md`:

```
Pull out specific writing rules from our interview into about-me/writing-rules.md.
Format as a list of dos and don'ts.
```

### Test the inheritance

In a new Cowork chat:

```
Draft a 3-paragraph email to my board chair updating them on the Q3 trajectory.
Use what you know about me.
```

Watch the output. It should:
- Use your tone (warm, direct, etc., per claude.md).
- Avoid words you flagged.
- Match your length preference.
- Reference context from your `about-me/`.

If it doesn't, the brief isn't doing its job. Edit and retest.

## Section 4 — Advanced (~15 min)

### Maintaining the brief over time

The chief-of-staff brief drifts. Things change. Your priorities shift. Stakeholders come and go. Quarterly:

```
Read my chief-of-staff brief. What feels stale? What's missing?
```

Claude surfaces likely-outdated lines. You decide what to update.

Don't rewrite from scratch every quarter. The brief is durable.

### When to update vs leave alone

- New role or major scope change → rewrite the role section.
- Tone preferences shifted (you hate a word now you didn't hate before) → update writing rules.
- New stakeholders → add them.
- Style of communication changes (you started running async-default standups) → update.

Most quarters you change 2-3 lines.

### Project-specific overrides

Project `claude.md` (the one `/new-project` writes per project folder) can override the chief-of-staff brief for project-specific tone. Example:

- Vault `claude.md` says "warm, direct, default to brevity."
- Project `claude.md` for `q3-board-deck/` says "Format / tone for this project: more formal than my default; explicitly cite all sources because the board chair has flagged AI-content concerns."
- For files in `q3-board-deck/`, Claude uses the more formal tone. Everywhere else, default warm-direct-brief.

This is the layered architecture in action. Don't pre-write project overrides; let `/new-project` interview each one.

---

## Micro-wins (both)

**a. Recognition shock.** Type:
```
Read my about-me. Surface 3 things you noticed about me that aren't obvious from what I just told you — pattern matches, implications, context I might not have spelled out.
```

Claude responds with 3 specific, non-obvious observations. You feel seen. Most people get a "huh, yeah" reaction at least once. That's the moment the workshop pays off in a felt way.

**b. Before/after email.** Draft an email pre-`claude.md` (generic). Save the output. Then draft the SAME email post-`claude.md`. Compare. The post version sounds like you. Feels like a different tool.

## Verification checkpoint

```
Summarize back to me what you know about me from the chief-of-staff brief and about-me.
3-5 sentences max.
```

Expected: a concise, accurate summary. If Claude can't summarize or includes wrong details, the brief or about-me has gaps.

## Common issues

- **Claude defaults still showing through** — your constraints in `writing-rules.md` aren't strong enough; add more "don't" rules.
- **Brief feels generic** — interview was too short; rerun with more specific answers.
- **Claude mixes project-specific and general tone** — check project `claude.md` overrides; make sure they're explicit deviations, not full restatements.
- **about-me files lost on Cowork restart** — they shouldn't disappear; check vault path is mounted in your Cowork Project.

## References

- `templates/vault-starter/claude.md` — the placeholder you replaced.
- `templates/vault-starter/about-me/` — the about-me trio.
- M02 — R-C-T-F-C framework (the brief is your standing R+C).
- `references/rctfc-framework.md`.
