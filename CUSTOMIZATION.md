# Course customization — profile + components

The course auto-adapts to each participant's situation. A profile (role, industry, stack, plan, etc.) is captured once via a UI on the site, stored in `localStorage`, and used at runtime to show/hide/swap content in every section page.

This file documents the profile schema, the markdown syntax for conditional content, the runtime behaviour, and how to extend.

---

## Profile schema

10 axes. Stored as JSON under localStorage key `execaiday-profile`.

| Field | Type | Values | Default |
|---|---|---|---|
| `role` | string | `founder`, `partner`, `cfo`, `chro`, `cmo`, `cto`, `board-chair`, `gm`, `other` | unset |
| `industry` | string | `saas`, `finance`, `healthcare`, `manufacturing`, `retail`, `services`, `real-estate`, `government`, `other` | unset |
| `org_size` | string | `solo`, `small` (<50), `mid` (50-500), `large` (500-5000), `enterprise` (5000+) | unset |
| `stack` | string | `m365`, `google`, `mixed`, `neither` | unset |
| `existing_systems` | array | any of `notion`, `asana`, `monday`, `clickup`, `slack`, `teams`, `email-only`, `spreadsheets-only` | `[]` |
| `plan` | string | `pro`, `max`, `team`, `enterprise` | `max` |
| `ai_experience` | string | `novice`, `intermediate`, `advanced` | `intermediate` |
| `has_assistant` | boolean | `true`, `false` | `false` |
| `language` | string | `en`, `nl`, `fr`, `de`, `es`, `other` | `en` |
| `mobile_access` | string | `full`, `limited` | `full` |

A participant who skips the profile gets generic content (everything `data-show-when` shows; everything `data-hide-when` hides defaults).

---

## Markdown source syntax

In `sections/*.md`, conditional blocks use a `:::` fence:

### Show only when condition matches

```
:::when role=founder,functional-exec
Content shown only to founders or functional execs.
:::
```

Compiles to `<div data-show-when="role:founder|functional-exec">…</div>`. The runtime hides this `<div>` if the participant's role isn't in the list.

### Hide when condition matches

```
:::unless mobile_access=full
Content hidden if mobile_access is full (i.e., shown when limited).
:::
```

Compiles to `<div data-hide-when="mobile_access:full">…</div>`.

### Variant blocks (one of)

```
:::variant role
:::case founder
Content for founders.
:::case investor
Content for investors.
:::case default
Fallback content for everyone else.
:::endvariant
```

Compiles to a wrapper with `data-variant-by="role"` and child blocks with `data-variant="…"`. The runtime shows the first child whose value matches the participant's role; if no match, shows `default`.

### Inline persona example (within a paragraph)

```
Try a prompt like {{example industry: saas="Read the latest churn report" finance="Read the latest portfolio NAV" default="Read the latest report"}}.
```

Compiles to a `<span data-example-by="industry">` with child spans per value. Inline. Use sparingly — most adaptation should be block-level.

---

## CSS components for the customization UI

| Class | Purpose |
|---|---|
| `.profile-chip` | Tiny indicator in the top nav showing the active profile |
| `.profile-modal` | Modal containing the form |
| `.profile-banner` | First-visit banner inviting the participant to set their profile |
| `.ec-callout` | Highlighted block; useful for "if you're in a regulated industry" type notes |
| `.ec-variant-tag` | Small tag rendered next to variant blocks showing why they're shown |

---

## How the runtime works

`docs/profile.js` runs on every page after DOM ready:

1. Reads `localStorage["execaiday-profile"]`. If absent, profile is `{}`.
2. Walks every element with a `data-show-when`, `data-hide-when`, `data-variant-by`, or `data-example-by` attribute.
3. For each, evaluates against the profile:
   - `data-show-when="role:founder|cfo"` → element kept if `profile.role` is `founder` or `cfo`, else hidden.
   - `data-hide-when="stack:m365"` → element hidden if `profile.stack === "m365"`, else kept.
   - `data-variant-by="role"` → finds the matching child and shows it; falls back to `data-variant="default"`.
   - `data-example-by="industry"` → inline span swap.
4. Renders the profile chip in `.profile-chip` slot of the top nav.
5. Wires up the "Edit" button to open `.profile-modal`.

Re-runs on profile save (no full page reload).

---

## Profile UI flow

**First visit (no profile set):**
- A small banner appears under the top nav: *"This course adapts to your role. Set your profile to see tailored content."* with a "Set profile" button.
- Clicking opens the modal.

**Subsequent visits:**
- Profile chip in top nav shows current profile, e.g., *"👤 SaaS founder · M365"*.
- Clicking the chip opens the modal in edit mode.

**Modal:**
- 10 fields, organised in two columns.
- "Reset" button (clears profile back to generic).
- "Export JSON" (for handing to workshop team).
- "Save" applies and re-renders the page.

---

## Adding new conditional content

1. Decide what axis it varies on (role, industry, plan, etc.).
2. Wrap in `:::when` / `:::variant` in the section markdown.
3. Run `python3 build.py`. The generated HTML carries the data attributes.
4. The runtime picks them up automatically. No code change needed.

If you need a NEW profile field that doesn't exist yet:

1. Add it to the schema in this file (table at top).
2. Add the form field to `docs/profile.js` (in `MODAL_TEMPLATE`).
3. Use it in `:::when` / `:::variant` blocks in section markdown.

---

## What's currently tagged

Demonstration tagging only — the system is in place; bulk tagging is the next pass.

| Spot | Section | Variation axis |
|---|---|---|
| Brief template variants | S2 §1.4 | `role` |
| Connector recommendations | S2 §5 | `stack`, `existing_systems` |
| Office add-ins note | S2 §8 | `stack` |
| Mobile capture path | S3 §7 | `mobile_access`, `has_assistant` |
| Industry-specific example in capstone | S1 §8 | `industry` |

Adding more variants is straightforward — pick a spot, wrap in `:::when` / `:::variant`, regenerate.

---

## Workshop-team workflow

Before the workshop:

1. Participant completes the pre-workshop intake (a short version of the profile form, hosted at the same URL).
2. Participant clicks "Export JSON" — the JSON downloads.
3. Participant emails / Slacks the JSON to the workshop tech team.
4. Tech team uses the profile to pre-tune the participant's starter vault, pre-fill connector recommendations, generate a draft brief.
5. On day 1, participant arrives with their profile already loaded (handed back via a small URL with a profile fragment, or just typed in).

This is the path that turns "premium" from prose into product.
