# M05 — Companion knowledge files

## Why this module matters

The chief-of-staff brief from M04 (`About Me.md`, ~30 lines) is the highest-leverage file in the workshop. The companion files in this module are the second-highest. They give Claude the depth that doesn't fit in 30 lines — extended personal context, explicit dos and don'ts, durable reference material. Together they form the knowledge stack Claude works from on every prompt.

## What you'll do

- Expand long-form personal context into `about-me/long-form.md`.
- Capture explicit writing rules into `about-me/writing-rules.md`.
- Set up a `References/` folder structure for durable knowledge Claude can pull from.
- Confirm Claude reads the entire stack and surfaces something non-obvious you didn't explicitly tell it.
- Compare a draft with companions in scope vs without.

---

## Introduction

`About Me.md` is short on purpose — meant to be skimmed first read, used to anchor every conversation. The deeper context lives in companion files in your vault.

There are two flavors of companion:

- **`about-me/` companions are about YOU.** They shape *how* Claude writes — your voice, your preferences, your patterns. Long-form personal context, explicit writing rules, exceptions, things you care about deeply.
- **`References/` companions are about THE WORLD.** They're durable facts Claude pulls *from* — a brand spec, a key stakeholder's bio, a vendor's pricing, a product's positioning. Reference material, not voice.

Both live in the vault. Both are read automatically when your "Vault" Cowork Project is open — you don't have to "tell" Claude where to look. You just create the files; Claude picks them up.

You'll write through Claude in your Vault Cowork Project (the one you created in M03). Each file Claude writes appears in Obsidian instantly — you can edit by hand any time.

## Beginner / Getting Started

### The about-me/ folder

Every vault has an `about-me/` folder. It already exists from the starter content. Inside it:

- `long-form.md` — extended personal context (role history, work patterns, things you care about deeply, things you refuse to do).
- `writing-rules.md` — specific tone and word rules (Always / Never lists).
- `claude.md` (optional) — small file that explains to Claude how to use the about-me/ folder.

### Step 1 — Expand the long-form context

In your "Vault" Cowork Project, paste:

```
Based on my About Me.md and our chief-of-staff interview from M04, expand
about-me/long-form.md with deeper context. Include:
- Role history (current and previous roles, in summary).
- Current key stakeholders by name where appropriate (board members, key
  customers, direct reports).
- Work patterns (how I structure my week, my deep-work blocks, my meeting
  preferences).
- Things I care about deeply (the topics, principles, or stakeholders that
  shape my decisions).
- Things I refuse to do (specific patterns of work or interaction I avoid).

Aim for one to two pages — depth, not exhaustiveness. Save to
<vault>/about-me/long-form.md.
```

Claude expands. Open the file in Obsidian. Read it. Edit anything that doesn't sound like you, or where Claude guessed wrong.

### Step 2 — Capture your writing rules

```
Pull out specific writing rules from our chief-of-staff interview into
<vault>/about-me/writing-rules.md. Format as two sections:

## Always
(rules I follow consistently in writing — e.g., "always use active voice")

## Never
(rules about what to avoid — e.g., "never start an email with 'I hope this
finds you well'")

Each rule one line. Concrete, testable, in my voice.
```

Claude writes a list. Examples of strong rules:

- **Never** start an email with "I hope this finds you well."
- **Never** use "leverage" as a verb.
- **Never** list more than three options without ranking them.
- **Always** lead with the recommendation, not the analysis.
- **Always** keep the email under 200 words unless explicitly going long.

These rules apply globally. Claude reads them on every prompt that produces written output — emails, memos, slide bullets, summaries.

### Step 3 — Set up the References/ structure

```
Help me set up a References/ folder structure inside my vault. I want
subfolders for:
- brand (colors, fonts, logos, brand voice docs)
- people (key stakeholders' bios, relationships, history)
- tools (services and platforms I rely on)
- products (what we sell — positioning, features, FAQs)

For each subfolder, write a short claude.md explaining what goes in there
and how Claude should treat it. Save the structure under <vault>/References/.
```

Claude creates the subfolders and writes a `claude.md` in each. Now you have a place to drop reference material — and Claude knows what each subfolder is for.

You won't fully populate `References/` today. You'll add to it throughout the workshop and over the months that follow. Today you're laying the structure.

## Intermediate

### Test the inheritance

In a fresh Cowork chat in your Vault project, paste:

```
Draft a 3-paragraph email to my board chair updating them on Q3 trajectory.
Use what you know about me. After the draft, list the files in my vault
that you used to write it.
```

Watch Claude:

- Match your tone (from `About Me.md` + `writing-rules.md`).
- Reference deeper context (from `long-form.md`).
- Tell you which files it consulted.

If a file you'd expect Claude to use is missing from the list, it's not getting picked up — confirm vault mount in your "Vault" Cowork Project, then reopen the chat.

### When to write to about-me/ vs References/

A quick test for where new context belongs:

- **About YOU** (your voice, your preferences, your role, your stakeholders) → `about-me/`.
- **About something OUTSIDE you** (a customer, a product, a brand, a vendor) → `References/`.

Both shape what Claude does. They differ in role: `about-me/` shapes *how* Claude writes; `References/` is content Claude *pulls from* when relevant.

### Adding to References/ over time

The pattern is: drop files in, work continues. Examples you'll add this workshop:

- M11 brand spec — extracted from a reference deck — saved to `References/brand/branding.md`.
- M16 stakeholder bios — saved as you take meetings with new people — saved to `References/people/`.

After the workshop, the pattern keeps going:

- A new product launches → drop the spec into `References/products/`.
- A vendor's contract terms changed → drop the new contract into `References/tools/<vendor>/`.

Each file is something Claude can pull from when the topic comes up.

### The companion claude.md hint pattern

Inside any subfolder, a small `claude.md` file changes how Claude treats that folder. Examples:

- `<vault>/References/brand/claude.md` says: "This is the source of truth for brand assets. When generating documents, slides, or anything outward-facing, pull colors, fonts, and logo from here."
- `<vault>/about-me/claude.md` says: "These files describe me — my voice, my context, my rules. Use them on every prompt that produces written output. The brief at `<vault>/About Me.md` is the index."

These hints are short — one or two sentences. They don't restate the chief-of-staff brief; they explain the folder's role.

## Advanced

### Maintenance over time

- `about-me/` is durable. You'll update once a quarter at most. Small fragments drift — a new direct report, a tone you've outgrown, a stakeholder gone.
- `References/` grows actively. You'll add a few files a week if you're using Claude as your collaborator. That's healthy.
- **Don't pre-populate.** Only write what you have a real use for. Empty placeholder files clutter without adding value.

### Quarterly drift check

On the last week of the quarter, paste:

```
Read everything in about-me/. What feels stale or wrong now compared to
how I've been working this quarter? Be specific — name lines or claims.
```

Claude surfaces likely-outdated items. You decide what to update.

### When to split a long file vs keep it monolithic

If `long-form.md` grows past 3 pages, split into smaller files:

- `about-me/role-history.md`
- `about-me/work-patterns.md`
- `about-me/stakeholders.md`

Update `about-me/claude.md` to point at the new structure. Claude still reads everything in the folder — splitting is for your own readability, not for Claude.

### What NOT to put in about-me/ or References/

- **Project deliverables** → those go in the work folder (M12).
- **Confidential customer data** the org rules say must stay in a managed system (e.g., Salesforce, your DMS) → don't sync that into the vault. Reference it by ID instead.
- **One-off captures** → use vault `Inbox/` (M14 GTD) for these. Don't pollute `References/`.
- **Live operational data** (today's pipeline, this week's metrics) → those are query-time data, not durable references. Use connectors (M10) or live artifacts (M08).

---

## Try these

**a. Recognition shock, deeper.** In your Vault Cowork Project:

```
Read everything in about-me/ and References/. Surface 3 things you noticed
about me that I haven't explicitly told you — pattern matches across files,
implications, context I wouldn't think to spell out.
```

Claude responds with three specific, non-obvious observations. M04 had a recognition-shock moment from `About Me.md` alone. This one runs across the full stack and goes deeper.

**b. Voice test, side by side.**

```
Draft a 3-paragraph email to my board chair, updating them on Q3 trajectory.

First, draft it ignoring my About Me, the about-me/ folder, and References/
(default voice — generic AI).

Then, draft it using all of those files (my voice).

Show both versions. Then in 2-3 sentences, tell me what specifically the
second version is doing differently.
```

The two versions should feel like they were written by two different people. Read both. The second should sound recognizably like you. That's what the companion files buy you.

## Verification checkpoint

In your Vault project, paste:

```
Summarize my entire vault knowledge stack — About Me.md, the about-me/
folder, and References/ subfolders — in 5-7 sentences. List the files
you read. If any file is empty or missing real content, flag it.
```

Expected: a concise summary covering who you are, your voice, and what reference material exists. The list of files read should include `About Me.md`, `about-me/long-form.md`, `about-me/writing-rules.md`, and the `References/*/claude.md` files. If `long-form.md` or `writing-rules.md` are missing from the list, those files didn't write correctly — re-run Step 1 or Step 2.

## Common issues

- **`long-form.md` is too long, Claude takes forever to respond.** Trim to 1–2 pages. Long-form doesn't mean exhaustive.
- **Writing rules contradict each other.** Claude defaults to one randomly. Open `writing-rules.md` in Obsidian and resolve the contradiction by hand.
- **Claude isn't reading `References/` subfolders.** The vault mount is correct, but specific reference content needs to be referenced explicitly in the prompt — e.g., "Use the brand spec at `References/brand/branding.md`." Just having the folder mounted isn't always enough; Claude needs a hint that the reference is relevant.
- **`about-me/` files updated but Claude seems unaware.** Open a new Cowork chat in the same project. Old session context can be stale.
- **You wrote rules into `writing-rules.md` and Claude still violates them.** The rules need to be concrete and testable. "Be brief" is not a rule. "Stay under 200 words on emails" is. Rewrite the rule to be specific.

## References

- M04 — the chief-of-staff brief these companion files extend.
- M06 — R-C-T-F-C framework. `writing-rules.md` is your standing C (Constraints).
- M11 — branded PowerPoint pulls from `References/brand/`.
- M16 — meeting notes can pull from `References/people/`.
- `templates/vault-starter/about-me/` — starter content for `long-form.md` + `writing-rules.md`.
- `templates/vault-starter/References/` — starter structure for the References folder.
