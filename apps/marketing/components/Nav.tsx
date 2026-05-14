"use client";

import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import MagneticCta from "./motion/MagneticCta";
import { DISCOVERY_CTA_HREF, NAV_LINKS, PRIMARY_CTA_LABEL } from "@/lib/constants";

/**
 * Sticky nav with a scroll-driven color flip. Above ~80vh it sits transparent
 * over the ivory hero with charcoal text; below that threshold it commits to
 * a charcoal background with ivory text and a hairline bottom border.
 */
export default function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // 80vh threshold; clamp to a sensible minimum so headless contexts still
    // resolve to a real number.
    const threshold = typeof window !== "undefined" ? window.innerHeight * 0.8 : 600;
    setScrolled(latest > threshold);
  });

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: scrolled ? "rgba(26,26,26,0.92)" : "rgba(245,242,236,0)",
        borderBottomColor: scrolled ? "rgba(245,242,236,0.10)" : "rgba(26,26,26,0.00)",
      }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-50 w-full border-b backdrop-blur-md"
      style={{ willChange: "background-color" }}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          aria-label="ExecAIDay home"
          className="font-serif text-xl tracking-tight transition-colors"
          style={{ color: scrolled ? "var(--color-ivory)" : "var(--color-charcoal)" }}
        >
          ExecAIDay
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[15px] font-medium transition-colors hover:text-[color:var(--color-claret)]"
                style={{
                  color: scrolled
                    ? "rgba(245,242,236,0.85)"
                    : "rgba(26,26,26,0.75)",
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <MagneticCta
          href={DISCOVERY_CTA_HREF}
          size="sm"
          ariaLabel={PRIMARY_CTA_LABEL}
        >
          {PRIMARY_CTA_LABEL}
        </MagneticCta>
      </nav>
    </motion.header>
  );
}
