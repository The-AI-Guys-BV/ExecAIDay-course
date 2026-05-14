import SectionReveal from "./motion/SectionReveal";

export default function ProblemFrame() {
  return (
    <SectionReveal className="border-t border-[color:var(--color-charcoal)]/10 bg-[color:var(--color-ivory)]">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <h2 className="font-serif text-[36px] font-normal leading-[1.1] tracking-[-0.01em] text-[color:var(--color-charcoal)] md:text-[48px] lg:text-[56px]">
              You bought the tools. The hours haven&apos;t come back.
            </h2>
          </div>

          <div className="md:col-span-7 md:pl-4">
            <div className="max-w-[62ch] space-y-7 text-[18px] leading-[1.7] text-[color:var(--color-charcoal)]/85 md:text-[19px]">
              <p>
                Most executives in 2026 are running between three and seven AI
                subscriptions. The promise was time back, sharper decisions,
                less administrative weight. The reality, for most: a folder of
                unread newsletters and a vague unease that someone else figured
                this out.
              </p>
              <p>
                The problem is not the tools. The problem is that nobody
                installed them around <em className="font-serif italic">your</em> week. Your meetings, your inbox,
                your decisions, your team. A generic AI is a generic outcome.
                A cockpit built around your actual work is a different thing
                entirely.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
