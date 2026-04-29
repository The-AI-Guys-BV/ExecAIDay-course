# M10 — Office Add-ins

## Why this module matters

2026 killer feature: cross-app shared context. Analyze in Excel → build deck in PowerPoint → draft memo in Word — all remembering the analysis. The Excel → PPT → Word chain is what makes Office add-ins more than three independent assistants.

## What you'll do

- Verify Word, Excel, PowerPoint add-ins.
- Run the cross-app chain: Excel analysis → PowerPoint slides → Word memo, all sharing context.
- Use template magic — your actual company PowerPoint template + Claude → on-brand slides matching your company style.

---

## Section 1 — Introduction

You've used Word, Excel, PowerPoint for years. The Claude add-ins live INSIDE those apps. Open Word, click Claude in the ribbon, sidebar opens, you can ask Claude to help with the document.

What's new in 2026: cross-app shared context. Start an analysis in Excel. Ask PowerPoint Claude to "build slides from the Excel analysis." It does. Ask Word Claude to "draft a memo summarizing the Excel + PPT work." It does. The conversation persists across apps.

This is the workflow you've actually wanted for years.

## Section 2 — Beginner / Getting Started

### Verify add-ins

Open Word. Look for Claude in the ribbon (top of the window).

Same for Excel and PowerPoint.

If any are missing: your assistant fixes now. AppSource → search "Claude" → install.

### Single-app moves

In Word, with the Claude sidebar open:
```
Rewrite this paragraph to be 30% shorter without losing factual content. Preserve formatting.
```

Claude rewrites in place.

In Excel:
```
For column F, write a formula that calculates [whatever]. Apply to rows 2-50.
```

Claude writes the formula and applies it.

In PowerPoint:
```
Make this slide cleaner. Reduce text by 50%. Keep all the data points.
```

Claude rewrites the slide content.

These are the per-app moves. Useful, but not the headline.

## Section 3 — Intermediate

### The cross-app chain

Pick a real piece of work. Example: a board prep deck.

**Step 1 — Excel.** Open the financial model.
```
Analyze the Q3 vs Q2 trajectory in this sheet. Identify the top 3 positive trends and
top 3 risks. Write your findings as comments in the relevant cells.
```

Claude analyzes, drops comments. You review.

**Step 2 — PowerPoint.** Open your company's deck template.
```
Build a 4-slide section for the board deck based on the Excel analysis we just did.
Use my company template. Each trend or risk is one slide with the supporting data point
prominent and a one-line takeaway.
```

Claude generates 4 slides. They're on-brand because they use the template.

**Step 3 — Word.** Open the memo doc.
```
Draft a 1-page memo summarizing the Excel analysis and the slide narrative. Audience: my
board chair, who'll read this before the meeting. Tone: factual, not optimistic, not
defensive.
```

Claude drafts. You review.

The point: the conversation persisted. Claude remembered the Excel analysis when building the PowerPoint slides. Remembered the slide narrative when drafting the Word memo. No re-explaining the context three times.

### Template magic

Your company has a PowerPoint template with specific fonts, colors, masters. Default Claude PPT output uses Claude's bland defaults. Template magic fixes this:

In PowerPoint with your company template open:

```
Build me 5 slides about [topic] using this template. Match the fonts, colors, and slide
masters exactly.
```

Claude reads the template's master slides, fonts, color palette, and produces slides that look like YOUR company's slides — not Claude's defaults.

The output is recognizably yours. That's the felt moment.

## Section 4 — Advanced

### PowerPoint template reading

PowerPoint templates have:
- Slide masters (layout templates).
- Theme fonts.
- Theme colors.
- Reusable elements (logos, footers).

Claude reads all of these. When you ask for slides "using this template," Claude maps content to the appropriate slide master, picks colors from the theme, uses theme fonts.

You don't need to specify "use Calibri 11pt with the company blue." Just "use this template" — Claude infers.

### Excel formulas + financial models

Beyond per-cell formulas, Claude can:
- Audit a financial model (find broken references, inconsistent assumptions).
- Build a sensitivity analysis (run scenarios on input variables).
- Explain a model in plain language.

For high-stakes models that go to a board pack: ALWAYS verify the math externally. Claude is improved at math but is not a calculator. (See `references/what-not-to-use-claude-for.md`.)

### Word with tracked changes

For documents going through revision cycles:
```
Suggest edits to this document as tracked changes. Don't apply them — just propose.
```

Claude reviews, surfaces edits, you accept or reject one by one. Useful for legal docs, contracts, anything where the edit history matters.

### Available on which plans

Pro / Max / Team / Enterprise. Free plan does not include Office add-ins.

The Word add-in launched April 2026, completing the suite. Excel and PowerPoint shipped earlier.

---

## Try this — template magic

Your actual company PowerPoint template + Claude → on-brand slides matching your company's fonts, colors, and masters. The output looks like YOURS, not Claude's default.

5 slides on a topic relevant to you, in your company's actual visual identity, . That's the felt moment.

## Verification checkpoint

After the cross-app chain:
```
[In Word, with the memo open]: What's in the Excel analysis we did earlier in this session?
```

Expected: Claude in Word references the Excel analysis from earlier. If it can't, the cross-app shared context isn't working — restart Office, retry.

## Common issues

- **Add-in doesn't appear in ribbon** — install from AppSource; verify license tier (Pro/Max/Team/Enterprise).
- **Template magic produces wrong colors** — template's theme colors may not be set; check Theme Designer in PowerPoint.
- **Cross-app context lost** — ensure same Claude account is signed in across all three apps. Different accounts = different context.
- **Word tracked changes don't appear** — Word's Track Changes feature must be enabled (Review → Track Changes).

## References

- M11 — skills (the Office workflow can become a custom skill).
- `references/what-not-to-use-claude-for.md` — math at scale caveat.
