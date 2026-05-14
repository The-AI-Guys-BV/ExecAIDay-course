import SectionReveal from "./motion/SectionReveal";
import { Stagger, StaggerItem } from "./motion/Stagger";

const steps = [
  {
    number: "1",
    title: "Intake.",
    body: "Before session one, we send a short structured intake. You walk us through how your week actually runs — your meetings, your inbox, your decisions, your team. We use it to pre-build the foundations of your cockpit.",
  },
  {
    number: "2",
    title: "Four afternoons, spaced every two weeks.",
    body: "Each session is on site with you. Your cockpit is built and refined in front of you. You see how it takes shape, you push back on what doesn't fit, we adjust live.",
  },
  {
    number: "3",
    title: "Between sessions: you use it for real.",
    body: "Real meetings, real inbox, real decisions. You notice what works and what doesn't. The next session opens with your feedback. By the fourth afternoon the cockpit has been through two full feedback cycles in your actual week.",
  },
  {
    number: "4",
    title: "90 days of aftercare included.",
    body: "After the install, we stay close. Cockpit refreshes when your work shifts, ad-hoc questions, in-person fallback when remote isn't enough. From day 91, ongoing aftercare is optional and annual.",
  },
];

export default function HowItWorks() {
  return (
    <SectionReveal
      id="how-it-works"
      className="border-t border-[color:var(--color-charcoal)]/10 bg-[color:var(--color-ivory)]"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
        <div className="mb-16 max-w-3xl md:mb-24">
          <p className="mb-6 text-[13px] font-medium uppercase tracking-[0.2em] text-[color:var(--color-claret)]">
            How it works
          </p>
          <h2 className="font-serif text-[36px] font-normal leading-[1.1] tracking-[-0.01em] text-[color:var(--color-charcoal)] md:text-[48px] lg:text-[56px]">
            Four afternoons. Your real work. A system built around it.
          </h2>
        </div>

        <Stagger
          as="ol"
          stagger={0.12}
          className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-16 md:gap-y-16 lg:grid-cols-4 lg:gap-x-10"
        >
          {steps.map((step) => (
            <StaggerItem key={step.number} as="li" className="flex flex-col">
              <span className="font-serif text-[40px] font-normal leading-none text-[color:var(--color-claret)] md:text-[48px]">
                {step.number}
              </span>
              <span className="mt-6 block h-px w-10 bg-[color:var(--color-charcoal)]/20" aria-hidden />
              <h3 className="mt-6 font-serif text-[22px] font-normal leading-[1.25] text-[color:var(--color-charcoal)] md:text-[24px]">
                {step.title}
              </h3>
              <p className="mt-4 text-[17px] leading-[1.65] text-[color:var(--color-charcoal)]/80">
                {step.body}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </SectionReveal>
  );
}
