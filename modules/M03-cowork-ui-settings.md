# M03 — Cowork UI + Settings

## Why this module matters

Cowork is on. Time to know where things are and what to set so it behaves like YOU want, not like the default. Five UI elements to recognize, four settings to configure deliberately, plus the data-sharing toggles you should set with intention rather than leaving on default.

## What you'll do

- Treasure-hunt the 5 named UI elements.
- Configure 4 exec-relevant settings.
- Set data-sharing / telemetry toggles deliberately.

---

## Section 1 — Introduction

You already turned Cowork on in M01 when you created your Cowork Project. This module isn't about activating Cowork; it's about KNOWING the workspace you're in so the rest of the workshop isn't a treasure hunt mid-demo.

Five UI elements you'll recognize on sight by the end of this module. Four settings you'll set deliberately. That's the whole module.

## Section 2 — Beginner / Getting Started

The 5 named UI elements (treasure hunt — find each in your Cowork window):

1. **Project switcher.** Top-left of the Cowork sidebar. Lists your Cowork Projects; click to switch.
2. **Mounted folders panel.** In the project sidebar — shows which local folders this Cowork Project is reading.
3. **Connectors panel.** Customize → Connectors. Lists connected services (Gmail, Notion, etc.).
4. **Skills / slash commands panel.** Customize → Skills. Lists installed skills (you'll see the 26 from this plugin once you install it).
5. **Artifacts sidebar.** Right side, opens when an artifact is generated. Holds version history.

Find each one in your window. Tell your assistant when you've found all 5.

## Section 3 — Intermediate

The 4 settings to set deliberately. Defaults are reasonable but not yours.

### 1. Default model

In Settings → Models. Three choices: Opus 4.7 / Sonnet 4.6 / Haiku 4.5.

**Recommendation for execs:** Sonnet 4.6 default. Switch to Opus 4.7 for complex reasoning (board-level analysis, strategic writing). Switch to Haiku 4.5 for fast triage / classification.

### 2. Theme

Settings → Appearance. Light / Dark / System. Personal preference. (Yes, this matters — you're going to spend hours in here. Make it comfortable.)

### 3. Connector visibility

Settings → Connectors → Per-Project. By default, all connectors are available in every Cowork Project. For sensitive Cowork Projects (M&A, legal), you may want to disable certain connectors per project. We'll touch this in M16.

### 4. Skill enable/disable

Customize → Skills. By default, all installed skills are enabled. You can disable skills you never use to reduce slash command clutter. (Worth noting; not action-required.)

## Section 4 — Advanced

### Data-sharing / telemetry toggles

This is the underrated section. Settings → Privacy.

Three toggles to consider:
- **Send anonymous usage data to Anthropic.** Default ON. Helps Anthropic improve Claude. Off if you're privacy-strict.
- **Share conversations for training (Free plan only).** Doesn't apply on Max. But check anyway.
- **Allow connectors to read shared workspace data.** Default ON. Off if you're working with sensitive content and want connector data scope tightened.

These toggles don't change Claude's quality dramatically — they're about your privacy posture. Decide once, deliberately.

### Account-level vs project-level settings

Some settings (theme, default model) are account-level. Some (connector visibility) are per-Cowork-Project.

The mental model: account-level settings affect every Cowork Project; per-project settings let you have a "sensitive work" Cowork Project that disables most connectors and a "default work" one that has them all on.

### What you don't need to touch

- Notification settings unless they're annoying. Default is fine.
- Keyboard shortcuts unless you're a power user.
- Plugin update settings — your plugins update through their marketplaces.

---

## Try this

The 4 settings configured to YOUR preference, not the defaults. You made 4 deliberate decisions on how Cowork behaves. Small win, real ownership.

## Verification checkpoint

```
What's my default model right now?
```

Expected: Claude reports the model you set. If it can't answer (says "I don't know"), the setting might not have saved — check Settings.

## Common issues

- **Setting doesn't persist after restart.** Known issue if Cowork v2.1.115 or older. Update to v2.1.116+.
- **Theme doesn't apply.** Restart Cowork; sometimes mid-session theme changes don't take.

## References

- None new — this module is mostly UI. The settings affect every other module.
