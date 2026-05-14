import SectionReveal from "./motion/SectionReveal";
import { Stagger, StaggerItem } from "./motion/Stagger";

const deliverables: { lead: string; body?: string }[] = [
  {
    lead: "Drive your week from a single window",
    body: "your cockpit, set up around your work.",
  },
  {
    lead: "Find any prior decision in seconds",
    body: "your vault, populated with the context that matters, sharper every week.",
  },
  {
    lead: "Ask one question across your calendar, mail, drive, and one of your CRM / deal room / accounting",
    body: "without leaving the cockpit.",
  },
  {
    lead: "Wake up to your routines already written",
    body: "Monday leadership digest, monthly board summary, quarterly check-in, all on schedule.",
  },
  {
    lead: "Draft, edit, summarize inside Word, Excel, and Outlook",
    body: "without switching apps.",
  },
  {
    lead: "Walk into meetings with a brief that's been pressure-tested in your real week",
    body: "workflow proven on at least two of your real meetings.",
  },
  {
    lead: "Clear your inbox in fifteen minutes",
    body: "triage workflow tuned to your priorities, proven on a real week.",
  },
  {
    lead: "Hand anyone a brief on yourself, your week, and your team in under a minute.",
  },
  {
    lead: "Run one of your most recurring tasks at the press of a button",
    body: "a skill built specifically for your situation.",
  },
  {
    lead: "Reach us for the first ninety days",
    body: "when your cockpit needs to evolve — email, scheduled refresh, in-person fallback.",
  },
];

export default function Deliverables() {
  return (
    <SectionReveal className="border-t border-[color:var(--color-charcoal)]/10 bg-[color:var(--color-ivory)]">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
        <div className="mb-14 max-w-3xl md:mb-20">
          <p className="mb-6 text-[13px] font-medium uppercase tracking-[0.2em] text-[color:var(--color-claret)]">
            Deliverables
          </p>
          <h2 className="font-serif text-[36px] font-normal leading-[1.1] tracking-[-0.01em] text-[color:var(--color-charcoal)] md:text-[48px] lg:text-[56px]">
            By the end of session four, you can:
          </h2>
        </div>

        <Stagger
          as="ul"
          stagger={0.05}
          className="grid grid-cols-1 gap-x-12 gap-y-5 md:grid-cols-2 md:gap-y-6"
        >
          {deliverables.map((item) => (
            <StaggerItem
              as="li"
              key={item.lead}
              className="flex items-start gap-5"
            >
              <span
                aria-hidden
                className="mt-[10px] inline-block h-3.5 w-3.5 flex-shrink-0 border border-[color:var(--color-charcoal)]/40"
              />
              <span className="text-[17px] leading-[1.55] text-[color:var(--color-charcoal)]/85 md:text-[18px]">
                <strong className="font-semibold text-[color:var(--color-charcoal)]">
                  {item.lead}
                </strong>
                {item.body ? <> &mdash; {item.body}</> : null}
              </span>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </SectionReveal>
  );
}
