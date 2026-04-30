# M04 — Artifacts

## Why this module matters

Live artifacts (April 2026 headline) are how Claude becomes a persistent surface in your work, not a one-shot answer. A dashboard you build today reopens tomorrow with fresh data. That's the difference between asking Claude a question and having Claude maintain a view.

## What you'll do

- See the artifact kinds you'll actually use: documents, dashboards, diagrams.
- Build a simple live artifact, close Cowork, reopen — watch it pull fresh data.
- Find the sidebar, restore a previous version.

---

## Introduction

An artifact is a generated output Claude renders inline alongside its text response. For executives, the kinds that matter are documents you can edit, dashboards you can re-open, and diagrams that explain a flow.

The 2026 headline: **live artifacts** auto-refresh on reopen. So the dashboard isn't a snapshot — it's a re-runnable view that pulls fresh data each time you open it. Daily morning brief, weekly status, project tracker — these become living surfaces, not stale screenshots.

This module: see the kinds, build one live artifact, see version history. The big payoff comes in M14 when we build the Daily Command Center artifact.

## Beginner / Getting Started

The artifact kinds you'll actually ask for:

- **Documents** — long-form writing (briefs, memos, reports).
- **Interactive pages** — a self-contained dashboard or mini-tool you can click around in.
- **Diagrams** — flowcharts, org charts, process diagrams (Mermaid does these in plain English: "draw me a flow from A to B to C").

You don't write any code. You describe what you want; Claude builds it.

Try one now. In Cowork:

```
Make me an interactive page showing the days of the week in a 2x4 grid, each in a
different color, with today highlighted.
```

Cowork generates the artifact, opens the artifact sidebar on the right, renders it inline.

## Intermediate

### Live artifacts — the headline

A regular artifact is a snapshot. A LIVE artifact pulls fresh data each time it opens. Same artifact ID, fresh content.

Build one. In Cowork:

```
Build me a live artifact that shows the items currently in my GTD Inbox at <vault>/gtd/inbox.md.
Read fresh from the file each time the artifact opens.
```

Cowork builds the artifact, reads <vault>/gtd/inbox.md, and renders the inbox items. Close the artifact panel. Close Cowork entirely. Reopen tomorrow. Reopen this artifact. It pulls fresh data — your CURRENT inbox, not yesterday's snapshot.

That's live. The full Daily Command Center artifact in M14 — pulling calendar, email, Slack, and your vault GTD all together — only works after the rest of your connectors come online in M09.

### Sidebar access

Right side of Cowork. Opens when an artifact is generated. Shows:
- The current artifact in the main pane.
- A list of recent artifacts in this Cowork Project (left of main pane).
- Version history for the current artifact (top right).

Click an old version to view it. Click "Restore" to bring it back as the current version.

### Bug #28161 — sidebar conflation

Known bug: sometimes the sidebar shows two artifacts' content interleaved. Workaround: close the sidebar entirely, reopen the specific artifact you want. Anthropic is tracking; expect a fix in a future Cowork release.

## Advanced

### Sharing limit (current as of April 2026)

You can't share live artifacts with other users yet — they're own-use only. So your live artifacts are private to you. (Static artifacts can be exported and shared as files, but the live-refresh capability is account-bound.)

### Version history + restore

Every edit to an artifact creates a new version. The artifact sidebar shows the version list with timestamps. You can:
- Click any version to view it (read-only).
- Click "Restore this version" to bring it back as current.

Useful when a Claude edit makes the artifact worse and you want to roll back.

### Building artifacts as part of workflows

Artifacts compose with skills. A skill can produce an artifact as its output. Examples:
- `/today` could output a brief artifact instead of text.
- A skill you build later (M05) could maintain a project tracker artifact.

The pattern: skill = trigger; artifact = persistent visible surface.

---

## Try this

Build the GTD-Inbox live artifact above. With the artifact open, in another Cowork tab type `/capture remind me to test the live artifact`. Watch your new item appear in the artifact when it refreshes. That's "live" — not a screenshot, a surface that updates.

In M14 you'll build the full version that pulls calendar, email, Slack, and your vault GTD together. For now, one live tile is enough to feel the difference.

## Verification checkpoint

After building your first live artifact, type:

```
Show me the artifact I just built. What data source does it query?
```

Expected: Claude lists the artifact and identifies that it reads <vault>/gtd/inbox.md. If Claude says "I don't see an artifact," the artifact didn't save — try building again.

## Common issues

- **Bug #28161** (sidebar conflation) — close + reopen sidebar.
- **Live artifact doesn't refresh** — it might be a static artifact, not live. Ask Claude to "make this artifact live" and rebuild.
- **Artifact disappears on Cowork restart** — check the artifacts list in the sidebar; sometimes the active artifact pointer resets but the artifact is still there.
- **Sharing isn't available** — current limitation, not a bug.

## References

- M14 — Daily Command Center, where you'll build the workshop's flagship live artifact.
- `references/connector-quirks.md` — bug #28161 and other connector / artifact quirks.
