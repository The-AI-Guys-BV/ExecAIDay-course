# M11 — Office Add-ins

## Why this module matters

2026 killer feature: cross-app shared context. Analyze in Excel → build deck in PowerPoint → draft memo in Word — all remembering the analysis. The Excel → PPT → Word chain is what makes Office add-ins more than three independent assistants.

## What you'll do

- Verify Word, Excel, PowerPoint add-ins.
- Run the cross-app chain: Excel analysis → PowerPoint slides → Word memo, all sharing context.
- Have Claude build you a PowerPoint that looks like your company's — by extracting the style from any recent branded deck (or, if you have nothing handy, from your brand colors + logo).

---

## Introduction

You've used Word, Excel, PowerPoint for years. The Claude add-ins live INSIDE those apps. Open Word, click Claude in the ribbon, sidebar opens, you can ask Claude to help with the document.

What's new in 2026: cross-app shared context. Start an analysis in Excel. Ask PowerPoint Claude to "build slides from the Excel analysis." It does. Ask Word Claude to "draft a memo summarizing the Excel + PPT work." It does. The conversation persists across apps.

This is the workflow you've actually wanted for years.

## Beginner / Getting Started

### Verify add-ins

The Claude add-ins for Word, Excel, and PowerPoint were installed in M01. Open each app — the Claude icon should be in the ribbon. Click it; the Claude sidebar opens.

If any of the three apps is missing the icon, the install didn't complete for that one. Re-run the M01 install step for that specific app: Insert → Get Add-ins → search "Claude by Anthropic" → Add → sign in.

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

## Intermediate

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

### Build a PowerPoint that looks like your company's

Default Claude PPT output is generic. To make it look like YOUR company's deck, point Claude at a previous deck and have it extract the style.

**Use a recent branded deck as the style reference (recommended).**

Every exec has a recent deck on their machine — a board update, an investor pitch, a strategy review. It already has your company colors, fonts, logo placement, and slide layouts baked in. Use it.

1. Pick any recent on-brand deck. Doesn't have to be on-topic — only the styling matters.
2. Open both that deck and your new (blank or topic-stub) deck in PowerPoint.
3. With the Claude sidebar open in your new deck:

```
Open <path-to-the-reference-deck>.pptx. Extract the visual style:
fonts, color palette, logo placement, header/footer treatment, slide layouts.
Then build me a 5-slide deck on [topic] using exactly that style.
Don't copy the content from the reference deck — only the look.
```

Claude reads the reference deck's slide masters, theme fonts, theme colors, logo position, and recreates them in the new deck. Output is recognizably yours — that's the felt moment.

**No suitable deck handy? Fall back to brand specs.**

If you genuinely have nothing to extract from, give Claude the brand directly:

1. Get your brand colors as hex codes. Open your company brand guide or ask your assistant. Typical: a primary, a secondary, an accent. Example: `#0A2540`, `#00A86B`, `#F4F4F4`.
2. Save your company logo somewhere Claude can read — PNG with transparent background, e.g., `<vault>/References/brand/logo.png`.
3. In PowerPoint:

```
Build me a 5-slide deck on [topic]. Use my brand:
- Primary color: #0A2540
- Secondary: #00A86B
- Accent: #F4F4F4
- Logo: top-right of every slide. Source: <vault>/References/brand/logo.png.
- Fonts: Inter for headings and body (system default if Inter isn't installed).
- Tone: one bold takeaway per slide, one supporting data point, no clutter.
```

**Make this reusable.** Save the prompt (either path) as a custom skill (M07). Then `/branded-deck <topic>` always uses the right reference deck or brand specs without retyping.

## Advanced

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

For high-stakes models that go to a board pack: ALWAYS verify the math externally. Claude is improved at math but is not a calculator.

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

## Try this — branded deck

Pick a recent branded PowerPoint you have on hand (any topic, any age). Have Claude extract the visual style from it and build a 5-slide deck on a real topic of yours. The output looks like YOURS, not Claude's defaults: company colors, your logo placed correctly, on-brand fonts. That's the felt moment.

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

- M07 — skills (the Office workflow can become a custom skill).
- `references/what-not-to-use-claude-for.md` — math at scale caveat.
