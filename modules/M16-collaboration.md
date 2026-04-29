# M16 — Collaboration & Shared Work

## Why this module matters

You + Claude is exec superpower. You + your team + Claude is exec leverage. M16 is how you turn personal Cowork into shared Cowork — shared Notion pages, shared Cowork folders, multi-connector queries that span your team's surfaces.

## What you'll do

- Set up a shared Notion page + shared Cowork folder.
- Pair up (2-3 per group) and collaborate live on a pre-seeded fake project.
- Run multi-connector magic: Claude reads Slack + Notion + Gmail in one shot during the collaboration scenario.

## Time

~75 minutes.

---

## Section 1 — Introduction (~5 min)

Three collaboration surfaces you'll touch:

1. **Shared Notion page** — your team can read + comment on a Notion page you share.
2. **Shared Cowork folder** — a folder you and your team both mount in your respective Cowork Projects. Files in there are visible to all.
3. **Shared scheduled tasks** — less common; usually each person has their own.

Sales reality: workshop targets same-company cohorts when possible (so the collaboration exercise is realistic). Mixed cohorts run the pairs exercise on a pre-seeded fake project.

## Section 2 — Beginner / Getting Started (~20 min)

### Shared Notion page

In your Notion master, create or pick a page that you'll share. Click Share → invite a teammate → "Can comment" or "Can edit" (your call).

Once shared, your teammate sees the page. Both of you can have Cowork pull from it via the Notion connector.

Try:
```
What's the latest on the [shared project] in Notion? Read the shared page.
```

Both you and your teammate get the same answer. Same source of truth.

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
- Shared Notion page with a fake project (e.g., "Q4 product launch planning").
- Shared Cowork folder with placeholder Source Materials.
- A Slack channel you both have access to.
- A few seed emails about the project.

Goal: collaboratively produce a one-page memo summarizing the project state, with Claude reading from all sources.

## Section 3 — Intermediate (~30 min)

### Multi-connector magic — the micro-win

The core capability: Claude reads multiple sources in one query and synthesizes.

```
For [shared project], pull:
- The latest Slack thread about it (channel: #q4-launch).
- The active Notion project page.
- Any emails in my inbox tagged with the project name (last 7 days).

Synthesize into a one-page memo: state of play, what's blocking, what's the next decision needed.
```

Claude reads all three, synthesizes. Output is one page — couldn't have produced manually faster.

This is "multi-connector magic." You've been using individual connectors all workshop; M16 is where they compose.

### Collaboration scenarios (live)

Try one or two during the in-room exercise:

**Scenario A — Joint memo.** Both pair members work on the same memo in the shared folder. One drafts a section in their Cowork. The other Reviews from theirs. Claude reads the latest version each time — no manual file-syncing.

**Scenario B — Joint decision.** Use Claude to synthesize different stakeholders' positions (per Slack and Notion threads) and propose a path forward. Both pair members feed in their context; Claude produces one synthesis.

**Scenario C — Joint status update.** Generate a 5-minute team standup brief from all the sources together. Pair refines.

The point isn't the specific scenario — it's that two people doing the same workflow in their respective Cowork instances produce the same answers from the same sources. The team gets consistency.

## Section 4 — Advanced (~20 min)

### Multi-Cowork-Project patterns for sensitive work

Shared work has a confidentiality dimension. If part of your team is working on sensitive content (M&A, legal, personnel), they probably need a separate Cowork Project that:
- Mounts the shared folder for THIS sensitive workstream only.
- Does NOT mount their personal vault (to keep personal context out).
- Has tight connector scope (Notion only, no Gmail, no Slack).

The architecture supports this. The discipline is the team's.

### Team GTD considerations

Per the workshop's locked decision: team GTD only works if every team member does their personal GTD. One laggard contaminates the system.

If your team is interested in shared GTD: run them through the workshop too. Otherwise, your team uses your personal GTD as their visibility into your work, but not the other way around.

### Cross-org collaboration limits

External collaborators (different company, different Notion workspace, different Slack workspace): hard to bring into Cowork's shared model. Per the locked workshop decision, external collaboration is OUT — keep team Cowork inside the org.

If you must collaborate cross-org, the shared Notion page works (Notion handles guest access). Shared Cowork folders don't work cross-org cleanly.

### Permissions hygiene

Shared Notion pages: per-page access control. Be deliberate about what's shared.

Shared Cowork folders: filesystem-level access control. Whoever has the cloud folder mounted sees everything in it. Don't put confidential subprojects in a folder shared widely.

These get thorny fast. Quarterly: audit who has access to what.

---

## Micro-win — multi-connector magic

Claude reads Slack + Notion + Gmail in one shot during the collaboration scenario. Output combines all three sources into one coherent narrative. The realization: this isn't a feature; it's a different way of working.

## Verification checkpoint

```
For [the shared project], list every source you can pull from right now and what's in each.
```

Expected: Claude lists Slack channel(s), Notion page(s), email thread(s), shared folder content. If anything's missing, the connector or share permission is off.

## Common issues

- **Shared folder doesn't sync** — Dropbox / Drive / OneDrive sync issue. Check sync status; restart sync app.
- **Notion page shared but not visible** — guest may need to accept the Notion invite (separate email).
- **Slack channel scoped to specific channels only** — connector permission scope; widen if needed.
- **Multi-connector query slow** — many sources to read; reduce scope or window.
- **Two pair members get different answers** — different connector scopes or different Cowork Project configurations. Verify both are pulling from the same sources.

## References

- M08 — connectors (foundation).
- M13 — GTD considerations for team.
- M14 — Daily Command Center (could include shared sources for team-aware morning briefs).
