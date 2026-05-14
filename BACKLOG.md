# ExecAIDay backlog

Open items deferred from the active build. Each item blocks something specific; the build continues without them by using a documented placeholder, then swaps to the real thing when the answer arrives.

---

## Open items

### 1. Google Workspace inline booking embed URL

**What's needed:** The inline-embed URL from your Google Workspace appointment-scheduling page.

**How to get it:** In your Google Calendar appointment-scheduling page → Share → Website embed → "Inline booking page" → copy the iframe `src` URL (looks like `https://calendar.google.com/calendar/appointments/AcZssZ...?gv=true`).

**What it unblocks:** The smashing-2026 modal popup on the primary CTA. Clicking "Book a discovery call" opens a frosted-backdrop modal with the booking page loaded inside an on-brand frame, never leaving the site.

**Current placeholder:** The CTAs use a `mailto:hello@execaiday.com` link for now (real, functional, works on click). When the embed URL arrives, the CTA is rewired to open the modal instead.

**Status:** Awaiting URL from Tijn.

---

### 2. Confirmation of contact email for the temporary CTA mailto

**What's needed:** Confirm `hello@execaiday.com` is the right address for the temporary CTA mailto (and that the email is forwarding to your inbox), OR provide an alternative.

**What it unblocks:** Removes the placeholder feel from item 1's fallback. Once item 1 lands, the mailto is replaced by the modal and this becomes moot.

**Status:** Awaiting confirmation from Tijn.

---

## Closed / parked items

*(none yet)*
