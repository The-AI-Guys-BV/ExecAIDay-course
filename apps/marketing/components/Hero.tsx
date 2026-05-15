"use client";

import { motion, type Variants } from "motion/react";
import MagneticCta from "./motion/MagneticCta";
import { DISCOVERY_CTA_HREF, PRIMARY_CTA_LABEL } from "@/lib/constants";

const HEADLINE = "Do more in less time.";

const wordContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      // Caption first, then a brief pause, then words start.
      delayChildren: 0.2,
      staggerChildren: 0.08,
    },
  },
};

const wordVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  const words = HEADLINE.split(" ");
  // Pace the post-headline reveals so the sub-headline arrives ~0.4s after
  // the last word completes, then the trust block, then the CTA, then the
  // fit-honesty sub-trust line.
  const lastWordStart = 0.2 + (words.length - 1) * 0.08;
  const subHeadlineDelay = lastWordStart + 0.4;
  const trustDelay = subHeadlineDelay + 0.3;
  const ctaDelay = trustDelay + 0.3;
  const subTrustDelay = ctaDelay + 0.2;

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center">
      <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32">
        {/* Caption: three phrases, middle one in claret. */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.0, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 text-[13px] font-medium uppercase tracking-[0.18em] text-[color:var(--color-charcoal)]/60 md:text-[14px]"
        >
          <span>For C-level executives</span>
          <span aria-hidden className="mx-2 text-[color:var(--color-charcoal)]/40">·</span>
          <span className="text-[color:var(--color-claret)]">Personal AI-powered cockpits</span>
          <span aria-hidden className="mx-2 text-[color:var(--color-charcoal)]/40">·</span>
          <span>Tailor-made</span>
        </motion.p>

        {/* Headline: word-by-word cascade. Outer wrapper carries the trailing
         * margin so the masked inner span doesn't swallow the inter-word gap.
         * The accessible label on <h1> gives screen readers (and crawlers) one
         * contiguous string — the per-word spans are aria-hidden decoration. */}
        <motion.h1
          variants={wordContainer}
          initial="hidden"
          animate="visible"
          aria-label={HEADLINE}
          className="font-serif text-[56px] font-normal leading-[1.05] tracking-[-0.015em] text-[color:var(--color-charcoal)] sm:text-[64px] md:text-[80px] lg:text-[96px]"
        >
          <span className="sr-only">{HEADLINE}</span>
          <span aria-hidden>
            {words.map((word, i) => (
              <span
                key={`${word}-${i}`}
                className="inline-block overflow-hidden align-baseline mr-[0.25em] last:mr-0"
              >
                <motion.span variants={wordVariant} className="inline-block">
                  {word}
                </motion.span>
              </span>
            ))}
          </span>
        </motion.h1>

        {/* Sub-headline: outcome + artifact, capped at ~60ch for editorial line length. */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.7,
            delay: subHeadlineDelay,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-10 max-w-[60ch] text-[18px] leading-[1.65] text-[color:var(--color-charcoal)]/85 md:text-[19px]"
        >
          We build you a personal AI-powered cockpit in four afternoons —
          tailor-made for the way your week runs. The capabilities of a chief
          of staff who knows your business, and four to eight hours back per
          week.
        </motion.p>

        {/* Trust band: claret eyebrow + italic credentials. Treated as one
         * motion block so the eyebrow and band arrive together. */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: trustDelay,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-10"
        >
          <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.22em] text-[color:var(--color-claret)]">
            Built by
          </p>
          <p className="max-w-[80ch] text-[14px] italic leading-[1.6] text-[color:var(--color-charcoal)]/70 md:text-[15px]">
            An AI researcher (PhD generative AI, Groningen 2009; co-founder
            RoboCup@Home) and the Chairman of an impact-investment advisory
            firm (CFA · CAIA · 11 years in capital allocation).
          </p>
        </motion.div>

        {/* CTA. */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: ctaDelay,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-12 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8"
        >
          <MagneticCta href={DISCOVERY_CTA_HREF} ariaLabel={PRIMARY_CTA_LABEL}>
            {PRIMARY_CTA_LABEL}
          </MagneticCta>
        </motion.div>

        {/* Sub-trust line: fit-honesty. */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: subTrustDelay,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-4 text-[13px] text-[color:var(--color-charcoal)]/60"
        >
          30 minutes. If it&rsquo;s not a fit, we&rsquo;ll say so.
        </motion.p>
      </div>
    </section>
  );
}
