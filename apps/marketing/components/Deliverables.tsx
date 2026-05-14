import SectionReveal from "./motion/SectionReveal";
import { Stagger, StaggerItem } from "./motion/Stagger";

const deliverables = [
  "A personalized cockpit running in your Claude Cowork desktop",
  "Your working vault populated with [X categories — TBD per current cohort]",
  "At least 4 connectors live (mail, calendar, drive, one of CRM / deal-room / accounting — TBD)",
  "At least 3 scheduled routines running on cadence",
  "Office sidebars active in Word, Excel, Outlook",
  "Meeting-prep workflow tested across at least 2 real meetings",
  "Inbox-triage workflow tested on a real week",
  "A chief-of-staff brief on yourself, your week, and your team",
  "At least 1 custom skill built for your specific recurring task",
  "90 days of aftercare access (email, scheduled cockpit refresh, in-person fallback)",
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
            By the end of session four, you have:
          </h2>
        </div>

        <Stagger
          as="ul"
          stagger={0.05}
          className="grid grid-cols-1 gap-x-12 gap-y-5 md:grid-cols-2 md:gap-y-6"
        >
          {deliverables.map((item) => (
            <StaggerItem as="li" key={item} className="flex items-start gap-5">
              <span
                aria-hidden
                className="mt-[10px] inline-block h-3.5 w-3.5 flex-shrink-0 border border-[color:var(--color-charcoal)]/40"
              />
              <span className="text-[17px] leading-[1.55] text-[color:var(--color-charcoal)]/85 md:text-[18px]">
                {item}
              </span>
            </StaggerItem>
          ))}
        </Stagger>

        <p className="mt-14 max-w-[68ch] text-[14px] italic leading-[1.6] text-[color:var(--color-charcoal)]/55 md:mt-16 md:text-[15px]">
          Final checklist to be tightened based on current-cohort install
          reality.
        </p>
      </div>
    </SectionReveal>
  );
}
