# M06 — Chief of Staff Brief

## Why this module matters

Your chief-of-staff brief is the highest-leverage file in the workshop. Once it exists, every conversation in your Cowork Project inherits your voice, your preferences, your context. Skip this module and Claude works from defaults; do it well and Claude works for YOU specifically.

The brief lives as a regular Obsidian note: `About Me.md` at the root of your vault. Cowork picks it up because the vault root `claude.md` (a one-line system file) points to it.

## What you'll do

- Run the chief-of-staff interview. Claude writes the brief into `About Me.md` in your vault.
- Configure `<vault>/claude.md` as a one-line pointer to `About Me.md`.
- Watch Claude read `About Me.md` and surface 3 non-obvious things — recognition shock.
- Compare an email draft pre-brief (generic) vs post-brief (matches your voice).

---

## Introduction

You have a chief of staff right now. You probably don't think of them that way. They're whoever knows your priorities, your quirks, your stakeholders, the things you do and don't say in writing. They've earned that knowledge over years.

Claude doesn't have any of that yet. This module gives Claude a starter version — captured in writing, in your vault, accessible to every conversation.

**Where the brief lives.** As a normal Obsidian note: `<vault>/About Me.md`. You can open it in Obsidian, edit it like any other note, link to it from daily notes. It's content, not config.

**How Cowork finds it.** A one-line pointer in `<vault>/claude.md` tells Cowork where to find it. Cowork auto-reads this file, follows the pointer, and picks up your brief. You don't touch this system file again — your editing happens in `About Me.md`.

Roughly 30 lines, 4 sections. Written through an interactive interview.

Once it exists: every email Claude drafts sounds more like you. Every analysis takes your priorities into account. Every artifact reflects your taste.

## Beginner / Getting Started

### The interview

In Cowork, paste this prompt:

```
Walk me through writing my chief-of-staff brief. Use the new-vault-claudemd pattern.
Save the result to <vault>/About Me.md (create it if it doesn't exist).
Then make sure <vault>/claude.md contains the one-line pointer:
"Chief-of-staff brief: read About Me.md."
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

Claude synthesizes your answers into `<vault>/About Me.md` and writes the one-line pointer into `<vault>/claude.md`. Watch Obsidian render `About Me.md` live as Claude writes it. Edit any line you don't like.

## Intermediate

### Add the longer-form context

`About Me.md` is the short brief. The vault also has a folder `about-me/` with two companion files for content that's too long for the brief:
- `about-me/long-form.md` — extended personal context (role history, work patterns, things you care about deeply).
- `about-me/writing-rules.md` — specific tone and word rules (dos and don'ts).

Populate them:

```
Based on what I told you for the chief-of-staff brief, expand
about-me/long-form.md with the longer-form context. Include role history,
current stakeholders, work patterns, things-I-care-about-deeply.
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
- Use your tone (warm, direct, etc., per `About Me.md`).
- Avoid words you flagged.
- Match your length preference.
- Reference context from `about-me/long-form.md`.

If it doesn't, the brief isn't doing its job. Edit and retest.

## Advanced

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

- `About Me.md` says "warm, direct, default to brevity."
- Project `claude.md` for `q3-board-deck/` says "Format / tone for this project: more formal than my default; explicitly cite all sources because the board chair has flagged AI-content concerns."
- For files in `q3-board-deck/`, Claude uses the more formal tone. Everywhere else, default warm-direct-brief.

This is the layered architecture in action. Don't pre-write project overrides; let `/new-project` interview each one.

---

## Try these

**a. Recognition shock.** Type:
```
Read my About Me and the about-me/ folder. Surface 3 things you noticed about me that aren't obvious from what I just told you — pattern matches, implications, context I might not have spelled out.
```

Claude responds with 3 specific, non-obvious observations. You feel seen. Most people get a "huh, yeah" reaction at least once. That's the moment the workshop pays off in a felt way.

**b. Before/after email.** Draft an email pre-brief (generic). Save the output. Then draft the SAME email post-brief. Compare. The post version sounds like you. Feels like a different tool.

## Verification checkpoint

```
Summarize back to me what you know about me from About Me.md and the about-me/ folder.
3-5 sentences max.
```

Expected: a concise, accurate summary. If Claude can't summarize or includes wrong details, `About Me.md` or `about-me/` has gaps.

## Common issues

- **Claude defaults still showing through** — your constraints in `writing-rules.md` aren't strong enough; add more "don't" rules.
- **Brief feels generic** — interview was too short; rerun with more specific answers.
- **Claude mixes project-specific and general tone** — check project `claude.md` overrides; make sure they're explicit deviations, not full restatements.
- **Cowork doesn't seem to be reading the brief** — check `<vault>/claude.md` contains the one-line pointer to `About Me.md`. If `claude.md` is empty or missing, Cowork won't follow through.
- **about-me files lost on Cowork restart** — they shouldn't disappear; check vault path is mounted in your Cowork Project.

## References

- `templates/vault-starter/claude.md` — the one-line pointer template.
- `templates/vault-starter/About Me.md` — starter brief structure.
- `templates/vault-starter/about-me/` — long-form + writing-rules companions.
- M02 — R-C-T-F-C framework (the brief is your standing R+C).
- `references/rctfc-framework.md`.
