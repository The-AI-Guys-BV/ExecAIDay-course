# Data Privacy + Company Policy

What goes where when you use Claude. Read this once; the gist will stick.

## Where your data goes

When you type into Cowork, the prompt + relevant context goes to Anthropic's infrastructure for processing. Anthropic does not train on your data by default (commercial customers — Pro / Max / Team / Enterprise — are excluded from training; check current terms at the time of cohort).

Connector data flows from the connected service through Anthropic's infrastructure when Claude needs it for a response. Your inbox is not continuously streaming to Anthropic; Claude fetches what it needs per query.

Local files in mounted Cowork folders stay local until Claude reads them for a response. Then they go to Anthropic's infrastructure for that interaction.

## What's appropriate to share with Claude

The honest test: is this something you'd be comfortable having in a vendor's logs?

- **Generally fine:** internal communications, drafts, strategy notes, calendar info, most operational data.
- **Consider carefully:** customer PII at scale, financial details below your reporting threshold, M&A specifics, board-confidential material.
- **Avoid:** regulated content where your industry has explicit data-handling rules (health, legal privilege, classified info, certain financial data) without first checking with your compliance team.

## Company policy

Your company has its own AI policy, possibly more strict than Anthropic's defaults. Your IT or legal team owns this. If you don't know your company's policy:

1. Ask before the workshop. Your IT contact (set up in onboarding) is the person to ask.
2. The workshop assumes Pro/Max/Team/Enterprise plan, where Anthropic doesn't train on your data.
3. Some companies disable connectors selectively (no Slack connector on M365 tenants, for instance). Onboarding handled this for you.

## What Claude knows about you across sessions

- **Within a Cowork Project:** memory persists. Claude remembers what you've worked on within that Project.
- **Across Cowork Projects:** memory does NOT cross. Different Projects are siloed.
- **Across restarts:** mounted `claude.md` and `memory.md` files survive. Session-only memory does not.
- **Across plans / accounts:** zero. Different account = different Claude.

## Asking Claude what it knows about you

"What do you know about me?" — Claude will list what's in your `claude.md`, `about-me/`, mounted folders, and connectors. Useful to verify nothing leaked.

## When to disable a connector temporarily

If you're working on something sensitive (M&A, exec personnel decisions, regulated content), consider:

1. Switching to a vault-less Cowork Project (no chief-of-staff brief in scope).
2. Disconnecting connectors that don't need to be active for this work.
3. Using chat mode (no Cowork Project memory) for one-off sensitive queries.

The architecture supports this. Default to mount-everything; use exceptions when warranted.

## Sources

- Anthropic data handling policy: see Anthropic's privacy and terms pages (linked in onboarding materials, current at time of cohort).
- Your IT contact for company-specific policy.
