import SectionReveal from "./motion/SectionReveal";
import CountUp from "./motion/CountUp";
import MagneticCta from "./motion/MagneticCta";
import { DISCOVERY_CTA_HREF, PRIMARY_CTA_LABEL } from "@/lib/constants";

export default function Pricing() {
  return (
    <SectionReveal
      id="pricing"
      className="border-t border-[color:var(--color-charcoal)]/10 bg-[color:var(--color-ivory)]"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
        <div className="mb-16 max-w-3xl md:mb-20">
          <p className="mb-6 text-[13px] font-medium uppercase tracking-[0.2em] text-[color:var(--color-claret)]">
            Pricing
          </p>
          <h2 className="font-serif text-[40px] font-normal leading-[1.05] tracking-[-0.015em] text-[color:var(--color-charcoal)] md:text-[56px] lg:text-[72px]">
            One number. One decision. One outcome.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-6">
            <p className="text-[14px] font-medium uppercase tracking-[0.18em] text-[color:var(--color-charcoal)]/55">
              The install
            </p>
            <p className="mt-4 font-serif text-[72px] font-normal leading-none tracking-[-0.02em] text-[color:var(--color-claret)] md:text-[96px] tabular-nums">
              <CountUp to={9500} prefix="€" />
            </p>
            <p className="mt-3 text-[15px] font-medium text-[color:var(--color-charcoal)]/60">
              one-time
            </p>
            <p className="mt-8 max-w-[58ch] text-[18px] leading-[1.7] text-[color:var(--color-charcoal)]/85 md:text-[19px]">
              That covers your intake, four afternoons spaced every two weeks,
              your bespoke cockpit built across those sessions, the technical
              install of every layer (Cowork, plugins, connectors, Office
              sidebars, your vault, scheduled routines), and your first 90
              days of aftercare. There is nothing else to pay until day 91.
            </p>
          </div>

          <div className="md:col-span-6 md:border-l md:border-[color:var(--color-charcoal)]/10 md:pl-16">
            <p className="text-[14px] font-medium uppercase tracking-[0.18em] text-[color:var(--color-charcoal)]/55">
              Ongoing aftercare
            </p>
            <p className="mt-4 font-serif text-[72px] font-normal leading-none tracking-[-0.02em] text-[color:var(--color-charcoal)] md:text-[96px] tabular-nums">
              <CountUp to={6000} prefix="€" />
            </p>
            <p className="mt-3 text-[15px] font-medium text-[color:var(--color-charcoal)]/60">
              per year, from day 91
            </p>
            <p className="mt-8 max-w-[58ch] text-[18px] leading-[1.7] text-[color:var(--color-charcoal)]/85 md:text-[19px]">
              It covers cockpit rebuilds when your work shifts, in-person
              fallback when remote support isn&apos;t enough, and
              refresh-on-demand so the cockpit stays the cockpit you started
              with.{" "}
              <strong className="font-semibold text-[color:var(--color-charcoal)]">
                No auto-renewal. You extend when your work needs it.
              </strong>
            </p>
          </div>
        </div>

        <div className="mt-16 max-w-[72ch] border-t border-[color:var(--color-charcoal)]/10 pt-8 md:mt-20">
          <p className="text-[15px] leading-[1.65] text-[color:var(--color-charcoal)]/70 md:text-[16px]">
            Claude Cowork access is a separate subscription with Anthropic —
            typically €175–€200 / month. We help you set this up during the
            install. Not included in the install price.
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
