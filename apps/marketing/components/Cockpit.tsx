import SectionReveal from "./motion/SectionReveal";
import { Stagger, StaggerItem } from "./motion/Stagger";
import CockpitImagery from "./CockpitImagery";

const items = [
  {
    title: "Meeting prep that's already done when you sit down.",
    body: "Briefs on attendees, prior context, open threads, recommended angles.",
  },
  {
    title: "Inbox triage that respects your priorities.",
    body: "Not generic auto-categorization — your priorities, your relationships, your tolerance for which threads matter.",
  },
  {
    title: "A working vault that gets sharper every week.",
    body: "Decisions, notes, context, references. Searchable, connected, yours.",
  },
  {
    title: "Scheduled routines that run before you ask.",
    body: "The weekly leadership-team digest, the monthly board summary, the quarterly check-in prompt.",
  },
  {
    title: "Connectors into the systems you already use.",
    body: "Calendar, mail, drive, CRM, deal room. Pulled into the cockpit on demand, never living somewhere you don't control.",
  },
  {
    title: "Office sidebars where your team already writes.",
    body: "Claude inside Word, Excel, Outlook — not a different app to remember to open.",
  },
];

export default function Cockpit() {
  return (
    <SectionReveal
      id="cockpit"
      className="relative border-t border-[color:var(--color-claret)] border-b border-b-[color:var(--color-claret)] bg-[color:var(--color-charcoal)] text-[color:var(--color-ivory)]"
    >
      <div className="mx-auto max-w-7xl px-6 pt-32 pb-24 md:px-10 md:pt-48 md:pb-40">
        <div className="mb-14 max-w-3xl md:mb-20">
          <p className="mb-8 text-[13px] font-medium uppercase tracking-[0.2em] text-[color:var(--color-ivory)]/60">
            The Executive Cockpit
          </p>
          <h2 className="font-serif text-[36px] font-normal leading-[1.1] tracking-[-0.01em] md:text-[48px] lg:text-[56px]">
            What gets installed
          </h2>
          <p className="mt-8 max-w-[58ch] text-[18px] leading-[1.7] text-[color:var(--color-ivory)]/80 md:text-[19px]">
            The Executive Cockpit is a personalized command surface that lives
            inside your Claude Cowork desktop app. Built around the way you
            actually work, it gives you:
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-6">
            <Stagger
              as="ul"
              stagger={0.08}
              className="divide-y divide-[color:var(--color-ivory)]/15 border-y border-[color:var(--color-ivory)]/15"
            >
              {items.map((item) => (
                <StaggerItem as="li" key={item.title} className="py-6 md:py-7">
                  <h3 className="font-serif text-[20px] font-normal leading-[1.3] text-[color:var(--color-ivory)] md:text-[22px]">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-[60ch] text-[16px] leading-[1.65] text-[color:var(--color-ivory)]/70 md:text-[17px]">
                    {item.body}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <div className="md:col-span-6">
            <CockpitImagery />
          </div>
        </div>

        <div className="mt-16 max-w-[68ch] md:mt-20">
          <p className="text-[18px] leading-[1.7] text-[color:var(--color-ivory)]/85 md:text-[19px]">
            Everything sits inside one Cowork window. Everything works in plain
            English. You drive it the way you&apos;d direct a chief of staff who
            already understands your business.
          </p>
        </div>
      </div>
    </SectionReveal>
  );
}
