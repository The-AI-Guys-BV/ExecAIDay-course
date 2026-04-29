# M11 — Skills + Slash Commands

## Why this module matters

You walk out as an executive with 7 custom Claude skills + a meta-skill (`/skill-creator`) that lets you build new ones forever. Up to here, you've been using Cowork's defaults. M11 is the autonomy moment — you're equipped to extend Cowork on your own.

## What you'll do

- Walk through the 7 core skills (5 pre-installed via this plugin + the in-workshop install of `/help-me-prompt`).
- Install `/help-me-prompt` in-workshop — paste the install prompt, watch Claude write the skill, see it in action.
- Tour Cowork's built-in slash commands.
- Try `/skill-creator` to build a NEW skill from scratch.

---

## Section 1 — Introduction

A skill in 2026 Cowork is a slash command. Same thing, two names. `/teach` and "the teach skill" refer to the same file: `~/.claude/skills/teach/SKILL.md` (or in our case, the version inside this plugin's `skills/teach/`).

Cowork auto-discovers skills from the filesystem. When you install a plugin, all the skills inside it become available. When you write a SKILL.md in `~/.claude/skills/<name>/SKILL.md`, that becomes a slash command too.

The 7 core skills you'll use throughout the workshop and after:
1. `/teach` — patient tutor.
2. `/help-me-prompt` — R-C-T-F-C sharpener.
3. `/new-project` — scaffold a project + GTD entry + tailored claude.md.
4. `/meeting-prep` — pre-meeting brief.
5. `/weekly-review` — Monday morning GTD walkthrough.
6. `/drafts-inbox` — email drafts triage.
7. `/email-triage` — inbox classification.

Plus 19 GTD skills (covered in M13) and Cowork built-ins (covered later in this module).

## Section 2 — Beginner / Getting Started

### The 7 core skills, one demo each

**`/teach <module>`** — already used. Walks any module.

**`/help-me-prompt <draft>`** — sharpens any prompt. You'll install this in Section 3.

**`/new-project <name>`** — already used in M05.

**`/meeting-prep <meeting title or "next">`** — generates a pre-meeting brief. Try:
```
/meeting-prep next
```
Claude pulls the next event on your calendar, attendee context, prior notes, recent emails, related Notion projects. One-page brief.

**`/weekly-review`** — walks the GTD weekly review interactively. Try a quick run; you can exit anytime.

**`/drafts-inbox new`** — scans inbox for emails needing replies, drafts them. Try:
```
/drafts-inbox new
```

**`/email-triage`** — classifies inbox into urgent / reply / read / archive / delete. Try:
```
/email-triage today
```

Each skill has a SKILL.md you can read. They're in the plugin at `skills/<name>/SKILL.md`.

## Section 3 — Intermediate

### The in-workshop install of `/help-me-prompt`

Even though `/help-me-prompt` is already in this plugin, you'll do a manual install too — both for the pedagogy (you experience the install pattern) and as a fallback if the plugin path ever fails.

Your assistant gives you the install prompt. Paste into Cowork:

```
Create a skill at ~/.claude/skills/help-me-prompt/SKILL.md with exactly this content:

[full SKILL.md body — assistant pastes the rest]

Confirm when the file is written and readable.
```

Claude writes the file. You confirm.

Now `/help-me-prompt` is available two ways: from the plugin AND from your manual install. Use either. (If both exist, the most-recently-modified wins by Cowork's default.)

Try it:

```
/help-me-prompt help me write an email to my CFO about the Q3 budget overage
```

Claude returns a sharpened R-C-T-F-C version. Compare to your draft.

### Cowork's built-in slash commands

These ship with Cowork itself, not from any plugin. Available in any Cowork Project:

- **`/skill-creator`** — interviews you about a task, drafts a skill, generates test prompts, iterates. The HEADLINE built-in.
- **`/simplify`** — simplify content (text, code, diagrams).
- **`/review`** — review content (catch issues, suggest improvements).
- **`/batch`** — apply a prompt to many similar items.
- **`/loop`** — repeat a prompt at an interval within the session.
- **`/debug`** — debugging assistance.
- **`/skills`** — list all available skills in this session.

Plus document built-ins:
- **`/pdf`** — generate or process PDFs.
- **`/docx`** — Word documents.
- **`/pptx`** — PowerPoint.
- **`/xlsx`** — Excel.
- **`/canvas-design`** — drawing / illustration.
- **`/algorithmic-art`** — generative visuals.

You don't need to memorize all of these. Type `/skills` to see what's available right now.

## Section 4 — Advanced

### `/skill-creator` — build a new skill

Pick something you do often that's not yet a skill. Examples:
- A weekly customer status report with specific format.
- A specific email template you send often (specific kind of follow-up).
- A pre-1:1 brief you compose for each direct report.
- A specific kind of analysis you run on incoming data.

Run:
```
/skill-creator
```

The skill interviews you:
- What's the trigger? What command name?
- What inputs does it take?
- What does it do? (Walks the steps with you.)
- What's the output format?
- Edge cases / failure modes.
- Test cases (it generates test prompts to verify).

At the end, it writes the SKILL.md to `~/.claude/skills/<your-skill-name>/SKILL.md`. Cowork auto-discovers. You have a new slash command.

This is the autonomy moment. Post-workshop, you don't need to come back to Tijn's team to extend the system. `/skill-creator` is how you keep building.

### Plugin namespacing

If a plugin's skill name collides with another, namespacing applies. E.g., `/teach@execaiday` vs `/teach@another-plugin`. Default: most-recently-modified wins (or use the explicit namespace to disambiguate).

You won't usually hit this. If you do, your assistant flags.

### Disabling skills you don't use

Customize → Skills. Toggle off skills you never call. Reduces clutter when typing `/`.

You can disable plugin skills too — though disabling a workshop skill defeats the purpose.

---

## Micro-win

All 7 core skills work in real demos. The in-workshop install of `/help-me-prompt` succeeded. You can list every available skill via `/skills`. You ran `/skill-creator` and built a new skill from scratch.

"You're an executive with 7 custom Claude skills, plus the ability to build more on demand." Public commitment moment.

## Verification checkpoint

```
/skills
```

Expected: lists all installed skills. Should include the 7 core, the 19 GTD (covered in M13 but already installed via this plugin), the Cowork built-ins, plus any custom skills you built via `/skill-creator`.

If `/skills` returns nothing or partial, the plugin may be incompletely installed.

## Common issues

- **Install fumble: skill SKILL.md has wrong YAML frontmatter** — file written but not auto-discovered. Restart Cowork; if still failing, check the frontmatter syntax matches `name:` and `description:` at minimum.
- **Skill works in plugin but not after manual install** — path mismatch (e.g., `~/.claude/skills/foo.md` instead of `~/.claude/skills/foo/SKILL.md`). Skills must be in their own subfolder.
- **`/skill-creator` doesn't run** — it's a Cowork built-in; if missing, Cowork version may be older. Update.

## References

- `skills/` — every skill in this plugin.
- `references/rctfc-framework.md` — what `/help-me-prompt` enforces.
- M13 — GTD skills (the 19 already installed via this plugin).
