# ExecAIDay curriculum — the four afternoons

Internal operational document for the install team. Captures the locked content arc for the workshop component of the €9,500 install + workshop package. Not a public-facing document.

Each afternoon is **three hours on-site, divided into**:

- **Strategic (2 × 45 min)** — framing, concepts, decision discussion with the executive.
- **Background install (parallel, ~90 min)** — install team configures the next layer on the executive's laptop while the strategic block runs.
- **Practical (2 × 45 min)** — hands-on with the executive on their real work, using what was just installed.

Cohorts of one or more executives are supported by scaling the install-team headcount to match the laptop count. Strategic and practical sessions run identically regardless of cohort size; install scope per afternoon below is per laptop.

Design principle: **SELF → CONTEXT → CONNECTION → MASTERY.** Each layer uses the previous one.

---

## Afternoon 1 — Foundation: The Brief

**Walk-out outcome:** a personalized chief-of-staff brief that Claude already understands.

### Strategic (2 × 45 min)

**1. AI as leverage at the C-level.** How to think about personal AI as a leverage layer instead of another app. The decision framework for what to AI-ify vs not (cost/benefit per task type). Where AI multiplies executive hours and where it just adds friction.

**2. The chief-of-staff model.** What an AI cockpit can actually own (briefing, drafting, triage, recall, recurring routines). Where the human has to stay (judgment, relationships, hard calls). The trust calibration — how to verify without micromanaging.

### Background install (parallel, ~90 min)

- Claude Cowork desktop installed and signed in
- Anthropic Console account provisioned with retention configured to executive policy
- Office sidebars active in Word / Excel / Outlook
- Baseline `claude.md` seeded with a starter persona

### Practical (2 × 45 min)

**1. Build YOUR brief.** Walk the executive through composing the chief-of-staff brief on themselves. Tijn drives, executive directs. Brief covers: role, week structure, priorities, team, dossier of running threads.

**2. Test the brief.** Hand the brief to Claude. Have Claude restate priorities, propose next-week schedule, flag tensions. Refine the brief based on what Claude got wrong.

---

## Afternoon 2 — Context: The Vault

**Walk-out outcome:** a working vault Claude can already reason over.

### Strategic (2 × 45 min)

**1. The hidden cost of context loss at the C-level.** The compounding cost of NOT having a personal knowledge base. How decisions get re-litigated because nobody remembers what was settled. The cost of finding-instead-of-deciding. Why the vault is the second-most-leveraged install after the brief.

**2. GTD for executives — the operating model behind the vault.** Capture / clarify / organize / reflect / engage, adapted for executive scale. Why the vault is the missing piece for people who can't out-source their own working memory. Boundaries: what goes in, what stays in email, what stays in head.

### Background install (parallel, ~90 min)

- Vault folder structure on laptop (decisions / notes / context / references / projects / people)
- Vault categories with starter templates (decision template, meeting note template, person profile template, project log template)
- Layered `claude.md` files seeded (root + per-category instructions)
- Obsidian installed and wired over the same folder tree
- Initial vault populated with content harvested from intake (existing priorities, team list, key relationships)

### Practical (2 × 45 min)

**1. Vault YOUR last week.** Executive brings real material from the previous week — at least one decision, three meeting notes, one stalled-thread context dump. Walk through capturing each into the right vault location. Refine the categories live.

**2. Reason over the vault.** Ask Claude a real question that requires reasoning across the just-populated vault. Verify the answers. Catch where Claude is wrong — usually because the vault is missing context. Refine until the executive trusts the recall.

---

## Afternoon 3 — Connection: Cockpit Live

**Walk-out outcome:** a live, connected cockpit running scheduled routines.

### Strategic (2 × 45 min)

**1. The connector philosophy.** What "connected to your systems" actually means: read access, scoped permissions, retention boundaries. Data sovereignty — your CRM, calendar, inbox stay yours. The decision framework for what to connect (high signal, low risk first; sensitive financial systems last).

**2. The scheduled-routine pattern.** When AI runs without you asking. Three routine archetypes: morning brief, leadership-team digest, monthly summary. Cowork Routines (cloud execution, runs even when the laptop is closed). The reliability discipline — start with one, prove it for two weeks, then add the second.

### Background install (parallel, ~90 min)

- Mail connector live (Gmail or M365)
- Calendar connector live (Google or M365)
- Drive connector live (Google Drive, OneDrive, Dropbox)
- ONE of CRM / deal-room / accounting connector live (HubSpot, Salesforce, dealroom.com, Xero, QuickBooks — selected at intake)
- Three scheduled routines wired: Monday morning brief, weekly leadership digest, monthly board summary skeleton (auto-prepared, requires executive review before send)

### Practical (2 × 45 min)

**1. Run the routines on real data.** Trigger the Monday morning brief manually. Watch Claude compose it. Refine. Trigger the weekly leadership digest with the past week's data. Adjust the prompts inside the routine. Run inbox triage on real email from the last 24 hours.

**2. Meeting prep on a real meeting.** Pick a real upcoming meeting (next 48 hours). Have Claude pull attendees from calendar, prior threads from mail, context from the vault. Generate the brief. Refine until it's the brief the executive would actually walk into the meeting with. Lock the meeting-prep workflow.

---

## Afternoon 4 — Mastery: Your Cockpit, Forever

**Walk-out outcome:** a bespoke skill running + 90 days of aftercare access.

### Strategic (2 × 45 min)

**1. Custom skills — when to build them.** What a Cowork custom skill is (a reusable prompt + workflow bundle). Build-vs-default decision framework: build custom only for high-frequency tasks (≥weekly) with a stable shape. Common executive custom-skill archetypes: weekly investor update draft, board-paper outline, candidate-feedback memo, post-meeting decision recap, weekly leadership update.

**2. Long-term cockpit evolution — how aftercare works.** 90-day included aftercare scope: cockpit refreshes when work shifts, ad-hoc Q&A, in-person fallback. What counts as in-scope (vault structure changes, new connector adds, skill refresh, routine retune) vs out-of-scope (enterprise rollout, new vendor integrations beyond the install set). The €6,000/year annual aftercare after day 91 — no auto-renewal, client-controlled. Quarterly check-in cadence by default.

### Background install (parallel, ~90 min)

- One custom skill built for the executive's specific most-recurring task (selected at intake or in afternoon 1)
- Cockpit artifact polished — visual layout settled, tile composition locked
- Aftercare access provisioned (support email, scheduled refresh dates in calendar, in-person fallback contact)
- Final `claude.md` sweep — clean up anything left from earlier afternoons, document the custom skill in the vault for future reference

### Practical (2 × 45 min)

**1. Run the custom skill.** Test the custom skill on real data. Edge cases — incomplete input, stale source data. Refine the skill's prompt until output is trusted. Lock the skill into the vault.

**2. Full cockpit walkthrough + hand-off.** End-to-end walkthrough — open Cowork, drive a typical morning (brief, inbox, meeting prep, routine output). Anything that snags gets fixed live. Walk through aftercare access. Q&A. Confirmation the executive can drive the cockpit unassisted. Hand-off complete.

---

## Operational notes

### Install-team scaling

Per laptop in cohort, scale installer headcount accordingly. One installer per laptop is the simplest model. Strategic time provides ~90 min of parallel install window per afternoon.

### Pre-install dependencies

The intake form must capture before afternoon 1:
- Mail provider (Gmail / M365 / other)
- Calendar provider (Google / M365 / other)
- Drive / file storage (Google Drive / OneDrive / Dropbox / other)
- Preferred 4th-connector category (CRM, deal-room, or accounting) and specific vendor
- The executive's recurring task that will become the custom skill in afternoon 4
- Existing priorities, team list, key relationships (for vault pre-population)
- Privacy / retention policy (for Anthropic Console config)

### Deliverable mapping

| Locked deliverable | Where it lands |
|---|---|
| Drive your week from a single window | Afternoon 1 install (Cowork desktop) |
| Find any prior decision in seconds | Afternoon 2 install (vault) |
| Ask one question across calendar, mail, drive, CRM/deal room/accounting | Afternoon 3 install (connectors) |
| Wake up to your routines already written | Afternoon 3 install (3 routines) |
| Draft, edit, summarize inside Word, Excel, Outlook | Afternoon 1 install (Office sidebars) |
| Walk into meetings with a pressure-tested brief | Afternoon 3 practical (meeting-prep workflow) |
| Clear your inbox in fifteen minutes | Afternoon 3 practical (inbox triage workflow) |
| Hand anyone a brief on yourself, your week, your team | Afternoon 1 practical (chief-of-staff brief) |
| Run one of your most recurring tasks at the press of a button | Afternoon 4 install + practical (custom skill) |
| Reach us for the first ninety days when your cockpit needs to evolve | Afternoon 4 install (aftercare provisioning) |
