import SectionReveal from "./motion/SectionReveal";
import { Stagger, StaggerItem } from "./motion/Stagger";
import CockpitImagery from "./CockpitImagery";

const items = [
  {
    title: "Walk into every meeting already prepared.",
    body: "The brief is on screen when you sit down — attendees, history, open threads, the angle you should push, the questions to land.",
  },
  {
    title: "Clear your inbox in fifteen minutes.",
    body: "Claude reads what landed overnight, surfaces what needs you, suggests what to delegate, archives the noise. The ninety-minute morning is gone.",
  },
  {
    title: "Decide faster, with the receipts.",
    body: "Every prior decision, every note, every conversation — searchable in plain English. The vault gets sharper the more you use it.",
  },
  {
    title: "Get your routines written before you ask.",
    body: "The Monday leadership digest, the monthly board summary, the quarterly check-in prompt — running on a schedule, ready when you are.",
  },
  {
    title: "Ask one question across all your systems.",
    body: "Calendar, mail, drive, CRM, deal room — the cockpit pulls from wherever the answer lives. You stop hunting.",
  },
  {
    title: "Work in the apps you already use.",
    body: "Claude in the sidebar of every doc, every spreadsheet, every email your team writes. Not another app to open — the same Word and Outlook, with your context.",
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
            What changes on Monday morning.
          </h2>
          <p className="mt-8 max-w-[58ch] text-[18px] leading-[1.7] text-[color:var(--color-ivory)]/80 md:text-[19px]">
            The cockpit isn&apos;t a tool you learn. It&apos;s the way your week
            runs once we&apos;ve installed it. Six things you do that you
            don&apos;t do today:
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
            One window. Plain English. You drive it the way you&apos;d direct a
            chief of staff who already knows your business.
          </p>
        </div>
      </div>
    </SectionReveal>
  );
}
