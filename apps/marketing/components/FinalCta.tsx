import SectionReveal from "./motion/SectionReveal";
import MagneticCta from "./motion/MagneticCta";
import { DISCOVERY_CTA_HREF, PRIMARY_CTA_LABEL } from "@/lib/constants";

export default function FinalCta() {
  return (
    <SectionReveal className="border-t border-[color:var(--color-charcoal)]/10 bg-[color:var(--color-ivory)]">
      <div className="mx-auto max-w-5xl px-6 py-28 md:px-10 md:py-40">
        <h2 className="font-serif text-[40px] font-normal leading-[1.05] tracking-[-0.015em] text-[color:var(--color-charcoal)] md:text-[56px] lg:text-[72px]">
          The cockpit you have been working without.
        </h2>

        <div className="mt-12 max-w-[62ch] space-y-7 text-[18px] leading-[1.7] text-[color:var(--color-charcoal)]/85 md:text-[19px]">
          <p>
            Four afternoons, your real work, a system built around it. The
            install is €9,500 — one decision, one number, one outcome.
            Aftercare is there if you want it after the first 90 days.
          </p>
          <p>
            A discovery call is 30 minutes with someone on our team. We listen
            to how you currently work and tell you, honestly, whether this is
            the right fit. If it isn&apos;t, we&apos;ll say so.
          </p>
        </div>

        <div className="mt-14 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
          <MagneticCta href={DISCOVERY_CTA_HREF} ariaLabel={PRIMARY_CTA_LABEL}>
            {PRIMARY_CTA_LABEL}
          </MagneticCta>
        </div>
      </div>
    </SectionReveal>
  );
}
