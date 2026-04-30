# What NOT to Use Claude For

Claude is exceptional at a lot of executive work. There are specific things it isn't right for. Knowing the boundary protects you from over-reliance.

## High-stakes decisions without verification

Claude can synthesize, draft, analyze, and recommend. It cannot accept consequences. Any decision where being wrong has material cost — a hire, a fire, a deal, a public statement, a board recommendation — needs human verification. Use Claude to surface options, identify risks, draft language. Verify before acting.

## Math at scale

Claude is improved at math but is not a calculator. For financial models, financial reporting, anything where a wrong digit matters, use Excel (or the Excel add-in with Claude on top — that's M11). Don't ask Claude to "compute the IRR" and trust the number without verification.

For arithmetic in passing ("roughly what's 15% of 4.2M?"), Claude is fine. For numbers that go into a board pack, verify externally.

## Regulated content without policy

If you work in healthcare, legal, financial services, or another regulated field, your industry has specific rules about what AI tools can produce. Claude doesn't know your specific regulator's stance. Examples:
- Drafting clinical decisions: not without medical-legal review.
- Drafting legal opinions: not without attorney review (and usually attorney-client privilege considerations).
- Drafting investment advice: not without compliance review (and usually a registered advisor signature).

The workshop assumes you'll route Claude's output through your normal compliance process. Don't skip that step.

## In front of clients without disclosure

If you're using Claude to draft a client communication, check whether your industry requires disclosure of AI assistance. Some do (legal, certain financial), most don't (general consulting, sales). When in doubt, ask your compliance team before the workshop, not during a client meeting.

## Generating "creative" content where authenticity matters

A LinkedIn post about your personal experience hitting a $100M ARR milestone, written by Claude, is plagiarism of yourself. Use Claude to edit, sharpen, reorganize — not to manufacture the original voice. The chief-of-staff `claude.md` (M04) helps with this: Claude trained on YOUR voice writes more like you. Still, the source ideas should be yours.

## Anything you wouldn't put in writing

Claude conversations get logged on Anthropic's infrastructure. Treat Claude prompts the same way you'd treat email: don't write what you wouldn't be OK seeing on a screen later.

## "What should I do?" — life decisions

Claude will give you an answer. The answer will be plausible. It won't have the context of your full life, your relationships, your gut. Use Claude to think through OPTIONS, not to make decisions for you. Especially career, relationships, health.

## Things Claude is good at (the inverse)

For perspective:

- Drafting and refining communications.
- Synthesizing meeting notes into commitments + decisions.
- Multi-source research synthesis (when sources are connectable).
- Triaging email + drafting replies.
- Generating dashboard / artifact views from connector data.
- Sharpening prompts for itself (`/help-me-prompt`).
- Tutoring (the `/teach` skill).
- GTD operations from Cowork (`/capture`, `/process-inbox`, etc.).
- Pattern recognition across documents.

The boundary is: trust Claude for SYNTHESIS and DRAFTING. Verify Claude for FACTS and DECISIONS.
