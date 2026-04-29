# M14 — Daily Command Center

## Why this module matters

The morning-brief artifact you built Day 1 grows up. By end of M14 it's a full single-pane-of-glass dashboard pulling GTD + Obsidian + calendar + Slack + email. This is the artifact you'll open every morning for years.

## What you'll do

- Expand the Day 1 morning-brief artifact with new sources now that GTD (M13) is live.
- Add tiles: today's calendar, GTD next-actions top 5, Slack mentions overnight, email urgent + drafts waiting, morning brief narrative, stale waiting-fors.
- Add Obsidian daily note integration (yesterday's reflections feed today's view).

---

## Introduction

You built a simple live artifact in Day 1 closing — three panels: calendar, urgent email, Slack mentions. That artifact has been firing every morning since.

Today we expand it. Now that GTD is live (M13), we can add: top 5 next actions, stale waiting-fors, today's GTD-driven priorities. Now that Obsidian is your knowledge layer (M07), we can add: yesterday's reflection bubbling up to today.

The result is one artifact you open in the morning, look at briefly, then know what matters for the day. No app-hopping. No "let me check Slack, then email, then my GTD."

## Beginner / Getting Started

### Reopen the Day 1 artifact

Open Cowork. Find the artifact in the artifacts sidebar (right side). It should be named "Morning Brief" or similar. Click to open.

It's pulling fresh data. Watch.

### Plan the expansion

We're adding tiles. Each tile is one source. The full set:

- Today's **calendar** (already there from Day 1).
- Top 5 **GTD next-actions** (new — needs M13).
- **Slack mentions** overnight (already there).
- **Email** urgent + drafts waiting (already there).
- **Morning brief narrative** (already there).
- **Stale waiting-fors** (new — needs M13).
- **Yesterday's Obsidian daily note** highlights (new — needs M07).

That's 7 tiles. Layout: 2-column grid; calendar + narrative on the left, GTD + email + Slack + waiting-fors on the right.

## Intermediate

### Add the new tiles

In Cowork, with the artifact open:

```
Update this artifact. Add three new tiles:

1. GTD next-actions: top 5 from <vault>/gtd/next-actions.md, sorted by priority and age. Show context badge per item.
2. Stale waiting-fors: list items I've been waiting on >7 days, with person + days waited.
3. Yesterday's Obsidian note: pull yesterday's daily note from my vault, surface the closing paragraphs (what I noted at /checkout) as 2-3 lines.

Layout: 2 columns. Calendar + narrative on left. GTD + email + Slack + waiting-fors + yesterday's-note on right.

Refresh on every artifact open — pull fresh data each time.
```

Claude rewrites the artifact. Watch the layout reflow.

### Tune the tiles

Some tiles will need iteration. Common tweaks:

```
The GTD tile is showing too many items. Limit to top 5 only, not top 10.
```

```
The yesterday's-note tile shows the whole note. Show only the "tomorrow's #1" line and any "loose ends" the user captured.
```

```
The email tile is showing newsletters. Filter newsletters out.
```

Iterate until the tiles feel right.

### Test the live refresh

Close the artifact. Close Cowork entirely. Reopen Cowork, reopen the artifact.

Each tile re-queries. Calendar shows updated events. GTD shows updated next-actions. Slack shows fresh mentions. Yesterday's-note shows yesterday (relative to current open).

## Advanced

### Custom tiles per workflow

Beyond the standard 7, you can add tiles specific to your role:

- **Sales exec:** pipeline updates from CRM.
- **Engineering exec:** open PR count + critical bug count.
- **CFO:** key metric snapshots from a financial dashboard.
- **CMO:** campaign performance from analytics.

Each is a new tile in the artifact. The tile spec is just "pull from <source>, format as <X>."

### Live artifact refresh tuning

Some sources are expensive (a slow CRM query) and some are fast (calendar). For artifacts you open frequently:
- Cache slow sources briefly (specify in the tile prompt).
- Don't cache fast sources — let them refresh fully.

For artifacts you open once a day, no caching needed.

### Sharing limit

You can't share live artifacts with other users yet (April 2026). Static artifacts you can export. The Daily Command Center is private to you.

This will change in coming releases. When it does, "team morning brief" becomes a possibility.

---

## Try this

The artifact built Day 1 has now grown into your actual every-morning view. Open it tomorrow morning — it's richer than today, fully personalized, all sources flowing into one pane.

The realization: this is the workshop's flagship artifact. You'll open it every morning for years.

## Verification checkpoint

```
Show me my Daily Command Center artifact. Walk through what each tile is pulling.
```

Expected: Claude opens the artifact, identifies the 7 (or more) tiles, and says where each pulls from. If a tile is broken or missing, fix now.

## Common issues

- **Tile shows stale data on reopen** — live refresh isn't happening; ensure the tile prompt says "pull fresh on each open."
- **Layout broken on reflow** — too many tiles for the column structure; reduce or move some to a second artifact.
- **Bug #28161** (sidebar conflation) shows two artifacts mixed — close + reopen sidebar.
- **One source returns nothing** — the connector might not be granted access to that source, or the query is off. Have your assistant fix per tile.

## References

- M04 — artifacts (foundational module).
- M12 — scheduled tasks (the morning brief task fires the artifact's data refresh too).
- `references/connector-quirks.md` — bug #28161.
- M13 — GTD (the data source for the GTD tiles).
