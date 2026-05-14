"use client";

import { motion, type Variants } from "motion/react";
import MagneticCta from "./motion/MagneticCta";
import { DISCOVERY_CTA_HREF, PRIMARY_CTA_LABEL } from "@/lib/constants";

const HEADLINE = "An AI cockpit, built around your actual work.";

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
  // the last word completes; CTA settles last.
  const lastWordStart = 0.2 + (words.length - 1) * 0.08;
  const subHeadlineDelay = lastWordStart + 0.4;
  const ctaDelay = subHeadlineDelay + 0.35;

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center">
      <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.0, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 text-[14px] font-medium uppercase tracking-[0.18em] text-[color:var(--color-charcoal)]/60"
        >
          A personal install programme from The AI Guys.
        </motion.p>

        <motion.h1
          variants={wordContainer}
          initial="hidden"
          animate="visible"
          className="font-serif text-[48px] font-normal leading-[1.05] tracking-[-0.015em] text-[color:var(--color-charcoal)] sm:text-[56px] md:text-[80px] lg:text-[96px]"
        >
          {words.map((word, i) => (
            <span
              key={`${word}-${i}`}
              className="inline-block overflow-hidden align-baseline"
            >
              <motion.span
                variants={wordVariant}
                className="inline-block pr-[0.25em] last:pr-0"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.7,
            delay: subHeadlineDelay,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-10 max-w-[58ch] text-[18px] leading-[1.65] text-[color:var(--color-charcoal)]/85 md:text-[19px]"
        >
          In four afternoons we build you a personalized cockpit inside Claude
          Cowork — tailored to your week, your inbox, your meetings, your
          decisions. You leave with a system you actually use, not another
          tool.
        </motion.p>

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
      </div>
    </section>
  );
}
