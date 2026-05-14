# ExecAIDay website plan

A complete site plan for review and feedback. Three connected apps:

- **execaiday.com** — public marketing site
- **portal.execaiday.com** — gated member portal (post-install clients)
- **admin.execaiday.com** — internal admin (sales team + operations)

All copy in this document is DRAFT for review. Open decisions are listed in §8 at the end.

Companion document: [website-research.md](./website-research.md) — competitor + market benchmarks (Concierge Studio, Athena, Notion consultants, fractional CoS, done-for-you AI bands).

---

## 1. Brand and voice

### Brand name
**ExecAIDay** — the product brand throughout the site. **The AI Guys** is the parent company and appears only as a small footer credit and in the legal entity line. The two brands are never given equal billing.

### Voice
- Tight, real trade-offs, no padded prose.
- Adult voice for a sophisticated audience.
- Concrete numbers over abstract claims.
- No marketing-platitude language ("transform your business", "unlock your potential", "AI-powered").
- No "we" boilerplate. Speak directly: *"You walk out with…"* not *"Our clients receive…"*.

### Type
- **Newsreader** (serif) — headlines, section openers.
- **Inter** (sans) — body, UI, navigation.
- Both free; no licensing cost.

### Color
- **Charcoal** `#1A1A1A` — primary text + dark surfaces.
- **Warm ivory** `#F5F2EC` — page background.
- **Claret** `#5C1A1F` — single accent (CTAs, key numbers, link hover).
- Restrained. No gradients, no AI-iconography ("✨", chip-shaped backgrounds, neon glow).

---

## 2. Marketing site — execaiday.com

A single long-scroll home page is the primary sales surface. Anchor links in the top nav scroll to each section. Separate legal pages live under `/privacy`, `/terms`, `/cookies`, `/contact`.

### Sitemap
- `/` — long-scroll home (all sections below)
- `/assessment` — readiness assessment (10-min interactive)
- `/discovery` — discovery-call booking page
- `/privacy`, `/terms`, `/cookies` — legal
- `/contact` — single contact form (low-traffic page; primary contact is the discovery CTA)

### Top navigation
Anchor links on the home page, fixed sticky bar:

> ExecAIDay (logomark, left) — How it works · The cockpit · Pricing · Founders · FAQ — [Book a discovery call] (right, claret button)

---

### Section 1 — Hero

Full-viewport-height section. Headline in Newsreader serif, charcoal; sub-headline in Inter; primary CTA claret, secondary CTA text link beneath.

**Headline (3 candidates for selection — see §8):**

> **A. (action / outcome-led):** Get your week back.
> **B. (identity / artifact-led):** An AI cockpit, built around your actual work.
> **C. (skeptic-led):** You have the AI tools. This is how you get the time back.

**Sub-headline:**
> In four afternoons we build you a personalized cockpit inside Claude Cowork — tailored to your week, your inbox, your meetings, your decisions. You leave with a system you actually use, not another tool.

**CTAs:**
> **[Book a discovery call →]** (primary, claret)
> *Or take the 10-minute readiness assessment first →* (secondary, text link, charcoal 70%)

**Above the hero CTAs, smaller charcoal-60% line:**
> A personal install programme from The AI Guys.

**No hero image yet** — see open decision §8.

---

### Section 2 — The problem we install against

Single section, two short paragraphs in Inter, headline in Newsreader.

> **You bought the tools. The hours haven't come back.**
>
> Most executives in 2026 are running between three and seven AI subscriptions. The promise was time back, sharper decisions, less administrative weight. The reality, for most: a folder of unread newsletters and a vague unease that someone else figured this out.
>
> The problem is not the tools. The problem is that nobody installed them around *your* week. Your meetings, your inbox, your decisions, your team. A generic AI is a generic outcome. A cockpit built around your actual work is a different thing entirely.

---

### Section 3 — How it works

Four-step visual structure (numbered, horizontal on desktop, stacked on mobile). Each step has a one-line header and one paragraph.

> **1. Intake.**
> Before session one, we send a short structured intake. You walk us through how your week actually runs — your meetings, your inbox, your decisions, your team. We use it to pre-build the foundations of your cockpit.
>
> **2. Four afternoons, spaced every two weeks.**
> Each session is on site with you. Your cockpit is built and refined in front of you. You see how it takes shape, you push back on what doesn't fit, we adjust live.
>
> **3. Between sessions: you use it for real.**
> Real meetings, real inbox, real decisions. You notice what works and what doesn't. The next session opens with your feedback. By the fourth afternoon the cockpit has been through two full feedback cycles in your actual week.
>
> **4. 90 days of aftercare included.**
> After the install, we stay close. Cockpit refreshes when your work shifts, ad-hoc questions, in-person fallback when remote isn't enough. From day 91, ongoing aftercare is optional and annual.

---

### Section 4 — The Executive Cockpit

The named deliverable. This section anchors the value proposition.

> **What gets installed**
>
> The Executive Cockpit is a personalized command surface that lives inside your Claude Cowork desktop app. Built around the way you actually work, it gives you:
>
> - **Meeting prep that's already done when you sit down.** Briefs on attendees, prior context, open threads, recommended angles.
> - **Inbox triage that respects your priorities.** Not generic auto-categorization — your priorities, your relationships, your tolerance for which threads matter.
> - **A working vault that gets sharper every week.** Decisions, notes, context, references. Searchable, connected, yours.
> - **Scheduled routines that run before you ask.** The weekly leadership-team digest, the monthly board summary, the quarterly check-in prompt.
> - **Connectors into the systems you already use.** Calendar, mail, drive, CRM, deal room. Pulled into the cockpit on demand, never living somewhere you don't control.
> - **Office sidebars where your team already writes.** Claude inside Word, Excel, Outlook — not a different app to remember to open.
>
> Everything sits inside one Cowork window. Everything works in plain English. You drive it the way you'd direct a chief of staff who already understands your business.

---

### Section 5 — Quantified deliverables (checklist)

Per the competitor research: deliverables should be a verifiable checklist, not prose claims. Scannable. ~15 items.

> **By the end of session four, you have:**
>
> ☐ A personalized cockpit running in your Claude Cowork desktop
> ☐ Your working vault populated with [X categories — TBD per current cohort]
> ☐ At least 4 connectors live (mail, calendar, drive, one of CRM / deal-room / accounting — TBD)
> ☐ At least 3 scheduled routines running on cadence
> ☐ Office sidebars active in Word, Excel, Outlook
> ☐ Meeting-prep workflow tested across at least 2 real meetings
> ☐ Inbox-triage workflow tested on a real week
> ☐ A chief-of-staff brief on yourself, your week, and your team
> ☐ At least 1 custom skill built for your specific recurring task
> ☐ 90 days of aftercare access (email, scheduled cockpit refresh, in-person fallback)
>
> *[Final checklist to be tightened based on current-cohort install reality — see §8]*

---

### Section 6 — Pricing

Headline in Newsreader; numbers in Newsreader, set large; supporting paragraphs in Inter.

> **One number. One decision. One outcome.**
>
> The install is **€9,500** — one-time. That covers your intake, four afternoons spaced every two weeks, your bespoke cockpit built across those sessions, the technical install of every layer (Cowork, plugins, connectors, Office sidebars, your vault, scheduled routines), and your first 90 days of aftercare. There is nothing else to pay until day 91.
>
> From day 91, ongoing aftercare is **€6,000 per year**. It covers cockpit rebuilds when your work shifts, in-person fallback when remote support isn't enough, and refresh-on-demand so the cockpit stays the cockpit you started with. **No auto-renewal. You extend when your work needs it.**

**Disclosure line** (smaller, charcoal-70%):
> Claude Cowork access is a separate subscription with Anthropic — typically €175–€200 / month. We help you set this up during the install. Not included in the install price.

**Primary CTA:** Book a discovery call →
**Secondary:** Or take the 10-minute readiness assessment first →

---

### Section 7 — About the founders

Two-column on desktop, stacked on mobile. Pure prose. No bullet lists. Each bio ~120 words. Both founders given equal billing in this section only (the consumer brand is ExecAIDay throughout, but the buyer wants to know who's actually in the room).

**Tijn van der Zant, PhD**

> Tijn is the architect of ExecAIDay and a co-founder of The AI Guys. He has spent more than twenty-five years inside AI, machine learning, and robotics — including a PhD in generative artificial intelligence completed at the University of Groningen in 2009, work that anticipated the foundations of the current AI moment by more than a decade. His dissertation, *Generative Artificial Intelligence: AI Using AI to Improve on Itself*, was supercomputer-scale research years before the term was mainstream. Outside the lab, he has served as CTO and Chief AI Officer for organizations across the Netherlands, co-founded RoboCup@Home (now the world's largest home-robotics research league), and built and led laboratories at the University of Groningen and Windesheim. He lives in Wassenaar with too many books.

**Dirk Meuleman**

> Dirk is co-founder of The AI Guys and brings the institutional-finance side of the partnership. He is Chairman of Phenix Capital Group, the impact-investment advisory firm he led as CEO for over five years and Co-CEO for nearly five before that — eleven years in total at a firm advising pension funds, insurers, sovereign wealth funds, and family offices on capital allocation toward the Sustainable Development Goals. Earlier in his career he was a portfolio manager at Shell's private-equity and infrastructure arm and a fund manager at MN. He is a CFA charterholder and a CAIA — credentials that mean something to the buyers ExecAIDay was built for. He lives in Amsterdam.

**The duo positioning** (single line under both bios, claret accent):
> The technical depth of an AI researcher. The operating credibility of an institutional-finance chairman.

---

### Section 8 — Frequently asked questions

Five locked answers (in order). Each is two paragraphs in Inter; the question is in Newsreader serif with a small claret accent on the opening character.

**Q1. Will my company data go to Anthropic, or to any AI vendor?**

> No. Your cockpit runs in your own Anthropic Console account on your subscription. Your conversations, your vault, your connectors — they are yours. Anthropic's enterprise terms apply: your inputs are not used for training, and we configure your account so that data retention follows your policy, not a default.
>
> Where we use AI on our side — for the curriculum portal you log into — it is scoped narrowly to generating your update digest and answering portal questions. None of your company data ever touches our servers. The install we build for you talks to your systems directly, not through us.

**Q2. Will I actually see the value, and how soon?**

> You will see the first concrete output in afternoon one — your intake conversation becomes a chief-of-staff brief you'll use that evening. The bespoke cockpit you'll be running comes together over the four afternoons.
>
> The value compounds because the cockpit reshapes around your work, not the other way around. The executives who get the most out of it are the ones who let us see a real week — real meetings, real inbox, real decisions — during the install. We're not training you on a generic tool; we're building the specific tool your week needs.

**Q3. I'm not technical. Can I still benefit?**

> Yes — and you'll come out of it knowing how to actually use Claude Cowork at an executive level. You'll learn how to brief Claude on your work so it reasons like someone who knows your business, how to drive your cockpit from natural-language instructions, how to capture meetings and turn them into decisions, how to keep a working vault that gets sharper every week, and how to pull in connectors when you need data from your other systems.
>
> What you do not do is set anything up. We install every layer (the app, the plugins, the connectors, the Office sidebars, your vault, your scheduled routines) and build your bespoke cockpit for you. The four afternoons are where you learn to wield it — the same way an executive learns a new car by driving it, not by building the engine. By the end you are using Cowork fluently and reaching for it without thinking.

**Q4. How much of my time does this actually take?**

> Four afternoons, spaced every two weeks. That is the entire time commitment. The cockpit is built with you in the room — you see how it takes shape, you push back on what doesn't fit, and we adjust it live. That is part of what makes it yours.
>
> Between sessions, you use the cockpit in your real work — real meetings, real inbox, real decisions. You'll notice what's working and what isn't. The next session opens with your feedback and we improve the cockpit around it. By the fourth afternoon, the cockpit has been through two full feedback cycles in your actual week — that's why it ends up fitting the way it does. After the install, most executives report 4–8 hours saved per week within the first month.

**Q5. Can my leadership team get this too?**

> Yes. The personal install we describe on this page is for one executive. For teams — your CFO, your COO, your full leadership group — we run a different engagement that installs each person's cockpit and connects them where they need to be connected (shared dashboards, joint routines, leadership-team artifacts).
>
> That's a conversation worth having during your own install. By session three, you'll know exactly which of your team members this would unlock — and we can scope from there. Team engagements are quoted separately.

---

### Section 9 — Final CTA

Full-width section, warm ivory background, headline in Newsreader serif, charcoal.

> **The cockpit you have been working without.**
>
> Four afternoons, your real work, a system built around it. The install is €9,500 — one decision, one number, one outcome. Aftercare is there if you want it after the first 90 days.
>
> A discovery call is 30 minutes with someone on our team. We listen to how you currently work and tell you, honestly, whether this is the right fit. If it isn't, we'll say so.

**[Primary CTA — claret button, Inter semibold]**
> Book a discovery call →

*Smaller, beneath, charcoal-70%:*
> Or take the 10-minute readiness assessment first →

---

### Section 10 — Footer

Three-column on charcoal `#1A1A1A` background with ivory text. Newsreader for column headers, Inter for body links.

**Column 1 — ExecAIDay**
> The personal-install programme that gives executives a bespoke Claude Cowork cockpit, built around their actual work over four afternoons.
>
> *Part of The AI Guys.* (ivory-60%)

**Column 2 — The programme**
- Book a discovery call
- Readiness assessment
- How it works
- About the founders
- Frequently asked questions

**Column 3 — Company**
- Privacy policy
- Terms of service
- Cookie policy
- Contact

**Bottom strip** (full width, ivory-50%):
> © 2026 The AI Guys BV · KvK [number] · VAT NL[number]B01 · Wassenaar, the Netherlands

---

## 3. Discovery and lead capture flows

### Primary CTA path: Book a discovery call
- Click → goes to `/discovery`
- `/discovery` embeds a **Google Workspace appointment scheduling page** (the rep's multi-calendar booking page).
- On booking confirmation, a webhook fires → creates a `lead` record in Supabase, attached to the rep's calendar.
- Confirmation page shows: "You're confirmed for [date]. Before the call, take the 10-minute readiness assessment if you haven't yet → [Take assessment]."
- Confirmation email from Google Workspace + a separate plain-text email from The AI Guys with a calendar invite and a Zoom/Meet link.

### Secondary CTA path: Readiness assessment
- Click → goes to `/assessment`
- 10 questions, ~10 minutes, mobile-friendly.
- Question categories (TBD final wording — see §8):
  - **Your role and context** (3 questions)
  - **Your current AI usage** (2 questions)
  - **Your week's pain points** (3 questions)
  - **Your readiness signals** (2 questions: budget posture, decision authority)
- Upon completion → personalized output page with:
  - A short narrative on what they'd likely get out of the install given their answers
  - A scored "fit signal" (e.g., *"Strong fit / Worth a conversation / Probably not yet"*)
  - Email capture in exchange for emailing them the full readiness brief
  - A CTA to book a discovery call if "Strong fit" or "Worth a conversation"
- Email capture creates a `prospect` record in Supabase with the assessment data attached.

---

## 4. Member portal — portal.execaiday.com

Gated. Authenticated via Cloudflare Access (magic link or OTP, no passwords). Only post-install clients have access.

### Sitemap
- `/` — portal home (personalized landing)
- `/curriculum` — tailored curriculum (the version of the course filtered to what's relevant to this client's install)
- `/qa` — Q&A area (ask anything; AI auto-answers, escalation to team queue when low confidence)
- `/digest` — current rolling update digest (single message, continuously updated until opened)
- `/inbox` — archive of read/frozen digests
- `/account` — profile, aftercare status, billing info, support contact

### Portal home
On login the client sees: their name, their cockpit's install date, days remaining on their 90-day aftercare (or annual aftercare status), one prominent unread digest (if any), recent activity, and quick links to Q&A and curriculum.

### Tailored curriculum
The full curriculum exists in `/content/` (Markdown/MDX). Per client, sections are tagged for relevance based on their install. The portal renders only the relevant sections plus a "view full curriculum" override. **Tagging logic and curriculum structure are TBD based on the actual content shape after the current testing cohort completes.**

### Q&A area
- Input box: "Ask anything about your cockpit, Cowork, your install, or your aftercare."
- On submit: question goes through a Claude API call with the client's profile + the curriculum + their cockpit notes as context.
- If the model returns high-confidence answer: shown immediately, marked as AI-answered.
- If the model returns low-confidence (or the client flags the answer as insufficient): question is routed to the team queue (visible in admin) and the client is told "we'll get back to you within 24 hours."

### Digest
- One rolling unread digest per client.
- AI-generated when there's something to push (new curriculum content, new connector relevance, new Cowork capability, scheduled-check-in moment).
- Continuously regenerates as new items accumulate, until the client opens it.
- On open: frozen + archived to inbox. A new digest can start accumulating immediately after.
- One email notification per read-cycle to avoid notification fatigue.

### Inbox
Archive of frozen past digests, chronological, searchable.

### Account
- Name, email, install date, aftercare expiry
- Billing history (Stripe-driven)
- Renewal decision (manual — no auto-renewal)
- Support contact

---

## 5. Admin — admin.execaiday.com

Internal only. Cloudflare Access gated to The AI Guys team emails.

### Sitemap
- `/` — dashboard (today's metrics: bookings, leads, queue depth, recent assessment completions)
- `/leads` — lead inbox (from discovery bookings + assessment captures)
- `/clients` — client list (post-install)
- `/qa-queue` — escalated Q&A items
- `/curriculum` — curriculum management (create/edit content, trigger digest fans, tag for client relevance)
- `/digest` — digest review (manually approve AI-drafted digests before they go out, optional override)
- `/team` — sales team management (calendars, lead assignment, pipeline visibility)
- `/settings` — system settings (rates, aftercare terms, notification preferences)

### Key admin functions
- **Lead management** — incoming discovery bookings + assessment captures. Status workflow: new → contacted → qualified → proposed → won/lost. Lead assignment to the sales rep who took the call. CSV export for the CRM.
- **Sales team management** — each sales rep has a profile, connected calendars (Google Workspace native booking initially; Calendly Teams when reps ≥ 2), pipeline view, lead assignments.
- **Q&A escalation queue** — low-confidence AI answers + client-flagged answers. Team member claims, drafts response, sends. Response time tracked.
- **Curriculum management** — content is in MDX files in the repo, edited via PR or in-app editor. Tag each unit for which client profiles it's relevant to.
- **Digest pipeline** — AI drafts a digest per client when there's material to send. Admin can review and approve before send, or set auto-send for trusted templates.

---

## 6. Technical implementation outline

### Stack
- **Monorepo:** Turborepo
- **Apps:** `apps/marketing`, `apps/portal`, `apps/admin` (three Next.js App Router apps)
- **Shared packages:** `packages/ui` (design system), `packages/db` (Supabase client), `packages/content` (MDX curriculum)
- **Hosting:** Vercel for all three apps (subdomain per app)
- **Database:** Supabase (Postgres + Realtime + auth integration)
- **Auth (gated subdomains):** Cloudflare Access (magic link / OTP) in front of `portal.` and `admin.`
- **AI:** Vercel AI SDK; routing — Haiku for classification/triage, Sonnet for generation
- **Payments:** Stripe (invoice + subscription for aftercare)
- **Booking:** Google Workspace appointment scheduling (embedded on `/discovery`)
- **Email:** Resend or Postmark for transactional; the email-from-the-team for warmth
- **Analytics:** Plausible (privacy-friendly, no consent banner needed for this use)

### Repo layout
```
/apps
  /marketing            Next.js App Router — execaiday.com
  /portal               Next.js App Router — portal.execaiday.com
  /admin                Next.js App Router — admin.execaiday.com
/packages
  /ui                   Shared design system (buttons, typography, layout)
  /db                   Supabase client + types
  /content              MDX curriculum files (single source of truth)
/content
  /curriculum           MDX files, tagged for client relevance
turbo.json              Turborepo config
package.json            Workspaces root
```

### Domains
- `execaiday.com` → `apps/marketing`
- `portal.execaiday.com` → `apps/portal`
- `admin.execaiday.com` → `apps/admin`
- (Optional, future) `execaiday.nl` → redirect or localized site

---

## 7. What gets built first

A pragmatic phasing for the build, optimized for shipping something testable fast:

**Phase 1 — Marketing site (week 1-2)**
- Turborepo scaffold
- `apps/marketing` with the home page (all 10 sections above)
- `/discovery` with embedded booking
- `/assessment` with the 10-question flow + result page
- Legal pages
- Plausible analytics
- Deploy to Vercel; point `execaiday.com` at it

**Phase 2 — Lead capture backend (week 2-3)**
- Supabase project + schema (leads, prospects, assessment_responses)
- Webhook from Google Workspace booking → lead record
- Assessment submission → prospect record
- Email confirmations (Resend)

**Phase 3 — Admin app (week 3-4)**
- `apps/admin` with lead inbox, client list, team management
- Cloudflare Access in front of `admin.`
- Stripe invoicing integration

**Phase 4 — Member portal (week 4-6)**
- `apps/portal` with login, home, curriculum (tailored), Q&A, digest, inbox, account
- Cloudflare Access in front of `portal.`
- Digest pipeline (Claude API + cron)
- Q&A pipeline (Claude API + escalation routing)

Phase 1 alone is launchable. Everything after is sequenced based on when paying clients need it.

---

## 8. Open decisions for Tijn

These are decisions I need from Tijn before final copy / build:

| # | Decision | Options surfaced |
|---|---|---|
| 1 | **Hero headline** | A. *Get your week back.* / B. *An AI cockpit, built around your actual work.* / C. *You have the AI tools. This is how you get the time back.* |
| 2 | **Hero image / asset** | Photo of Tijn? Photo of a cockpit running? No image (text-only hero)? |
| 3 | **Quantified deliverables checklist (Section 5)** | The 10 items above are placeholders. Real items should come from the current testing cohort's actual install reality. |
| 4 | **Pricing tier vs single price** | Currently single (€9,500). Competitor research shows the market tiers (Concierge: $5k/$7.5k/$15k). Stay single or introduce tiers? |
| 5 | **Testimonials** | Are any current cohort participants willing to be named / quoted with quantified outcomes? Or anonymous-with-credible-attribution ("Managing Partner, mid-cap PE fund")? |
| 6 | **Logo / wordmark** | Existing brand assets to use, or design a new wordmark? |
| 7 | **Photography** | Stock vs commissioned vs none? |
| 8 | **Domain primary** | `execaiday.com` only, or also `execaiday.nl` (and which is canonical)? |
| 9 | **Readiness assessment — exact questions** | Need Tijn's input on what 10 questions actually qualify a buyer for him. |
| 10 | **Curriculum tagging** | The portal renders tailored curriculum based on client profile. What axes of tagging? (Role? Industry? Cockpit features used? Current cohort completion will inform this.) |

---

## 9. What this plan deliberately doesn't decide

- **Final pricing positioning.** Current numbers (€9,500 install + €6,000/year aftercare) are locked per Tijn's call on 2026-05-14. Tier structure is open (decision 4 above).
- **Translation / multi-language.** Launch in US English; translation infrastructure designed-in and deferred to phase 2 (per the markets memory).
- **Enterprise consulting offer.** Off the public site by design. Enterprise conversations happen organically during install engagements.
- **Cohort logistics / scheduling tools.** The 4-afternoon delivery is the operator's responsibility; no client-facing scheduling tool needed beyond the discovery-call booking.

---

*Last updated: 2026-05-14. Owner: Tijn van der Zant.*
