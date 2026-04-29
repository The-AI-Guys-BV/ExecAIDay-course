# M16 — Collaboration & Shared Work

## Why this module matters

You + Claude is exec superpower. You + your team + Claude is exec leverage. M16 is how you turn personal Cowork into shared Cowork — shared Cowork folders, multi-connector queries that span your team's surfaces.

## What you'll do

- Set up a shared Cowork folder.
- Pair up (2-3 per group) and collaborate live on a pre-seeded fake project.
- Run multi-connector magic: Claude reads Slack + Gmail + your shared folder in one shot during the collaboration scenario.

---

## Introduction

Three collaboration surfaces you'll touch:

1. **Shared Cowork folder** — a folder you and your team both mount in your respective Cowork Projects. Files in there are visible to all.
2. **Shared scheduled tasks** — less common; usually each person has their own.

Sales reality: workshop targets same-company cohorts when possible (so the collaboration exercise is realistic). Mixed cohorts run the pairs exercise on a pre-seeded fake project.

## Beginner / Getting Started

### Shared Cowork folder

This is more involved. Your IT team set up a shared cloud folder (Dropbox / Google Drive / OneDrive — whichever your org uses). The folder syncs to all team members' machines.

Each team member mounts the same shared folder in their Cowork Project (alongside their personal vault and work folder).

Now anyone on the team can:
- Read what others have written.
- Write into shared deliverables.
- Track joint progress through claude.md / memory.md updates.

Caveat: be careful with `claude.md` files in shared folders. The shared folder root `claude.md` describes the SHARED context, not your personal preferences. Don't drop your chief-of-staff brief into a shared folder.

### Pair exercise

Pair up (2-3 people). Pre-seeded scenario your assistant provides:
- Shared Cowork folder with a fake project (e.g., "Q4 product launch planning") — pre-seeded with placeholder files.
- Shared Cowork folder with placeholder Source Materials.
- A Slack channel you both have access to.
- A few seed emails about the project.

Goal: collaboratively produce a one-page memo summarizing the project state, with Claude reading from all sources.

## Intermediate

### Multi-connector magic

The core capability: Claude reads multiple sources in one query and synthesizes.

```
For [shared project], pull:
- The latest Slack thread about it (channel: #q4-launch).
- The shared Cowork folder for the project.
- Any emails in my inbox tagged with the project name (last 7 days).

Synthesize into a one-page memo: state of play, what's blocking, what's the next decision needed.
```

Claude reads all three, synthesizes. Output is one page — couldn't have produced manually faster.

This is "multi-connector magic." You've been using individual connectors all workshop; M16 is where they compose.

### Collaboration scenarios (live)

Try one or two during the in-room exercise:

**Scenario A — Joint memo.** Both pair members work on the same memo in the shared folder. One drafts a section in their Cowork. The other Reviews from theirs. Claude reads the latest version each time — no manual file-syncing.

**Scenario B — Joint decision.** Use Claude to synthesize different stakeholders' positions (per Slack threads and shared folder content) and propose a path forward. Both pair members feed in their context; Claude produces one synthesis.

**Scenario C — Joint status update.** Generate a team standup brief from all the sources together. Pair refines.

The point isn't the specific scenario — it's that two people doing the same workflow in their respective Cowork instances produce the same answers from the same sources. The team gets consistency.

## Advanced

### Multi-Cowork-Project patterns for sensitive work

Shared work has a confidentiality dimension. If part of your team is working on sensitive content (M&A, legal, personnel), they probably need a separate Cowork Project that:
- Mounts the shared folder for THIS sensitive workstream only.
- Does NOT mount their personal vault (to keep personal context out).
- Has tight connector scope (no Gmail, no Slack — only the shared folder for the workstream).

The architecture supports this. The discipline is the team's.

### Team GTD considerations

Per the workshop's locked decision: team GTD only works if every team member does their personal GTD. One laggard contaminates the system.

If your team is interested in shared GTD: run them through the workshop too. Otherwise, your team uses your personal GTD as their visibility into your work, but not the other way around.

### Cross-org collaboration limits

External collaborators (different company, different Slack workspace): hard to bring into Cowork's shared model. Per the locked workshop decision, external collaboration is OUT — keep team Cowork inside the org.

### Permissions hygiene

Shared Cowork folders: filesystem-level access control. Whoever has the cloud folder mounted sees everything in it. Don't put confidential subprojects in a folder shared widely. Quarterly: audit who has access to what.

---

## Try this — multi-connector magic

Claude reads Slack + Gmail + the shared Cowork folder in one shot during the collaboration scenario. Output combines all three sources into one coherent narrative. The realization: this isn't a feature; it's a different way of working.

## Verification checkpoint

```
For [the shared project], list every source you can pull from right now and what's in each.
```

Expected: Claude lists Slack channel(s), email thread(s), shared folder content. If anything's missing, the connector or share permission is off.

## Common issues

- **Shared folder doesn't sync** — Dropbox / Drive / OneDrive sync issue. Check sync status; restart sync app.
- **Slack channel scoped to specific channels only** — connector permission scope; widen if needed.
- **Multi-connector query slow** — many sources to read; reduce scope or window.
- **Two pair members get different answers** — different connector scopes or different Cowork Project configurations. Verify both are pulling from the same sources.

## References

- M09 — connectors (foundation).
- M13 — GTD considerations for team.
- M14 — Daily Command Center (could include shared sources for team-aware morning briefs).
