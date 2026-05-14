"use client";

import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useState } from "react";
import MagneticCta from "./motion/MagneticCta";
import { DISCOVERY_CTA_HREF, NAV_LINKS, PRIMARY_CTA_LABEL } from "@/lib/constants";

/**
 * Sticky nav with a scroll-driven color flip. Above ~80vh it sits transparent
 * over the ivory hero with charcoal text; below that threshold it commits to
 * a charcoal background with ivory text and a hairline bottom border.
 *
 * Below md, the anchor links collapse into a hamburger that opens an ivory
 * sheet from the right with the 5 anchor links + the primary CTA.
 */
export default function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const threshold = typeof window !== "undefined" ? window.innerHeight * 0.8 : 600;
    setScrolled(latest > threshold);
  });

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    if (typeof document === "undefined") return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = menuOpen ? "hidden" : prev;
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  // Close menu on viewport widening to md.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setMenuOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const hamburgerStroke = scrolled ? "var(--color-ivory)" : "var(--color-charcoal)";

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          backgroundColor: scrolled ? "rgba(26,26,26,0.92)" : "rgba(245,242,236,0)",
          borderBottomColor: scrolled ? "rgba(245,242,236,0.25)" : "rgba(26,26,26,0.00)",
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

          {/* Desktop CTA — hidden below md. */}
          <div className="hidden md:block">
            <MagneticCta
              href={DISCOVERY_CTA_HREF}
              size="sm"
              ariaLabel={PRIMARY_CTA_LABEL}
            >
              {PRIMARY_CTA_LABEL}
            </MagneticCta>
          </div>

          {/* Mobile hamburger trigger. */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-sheet"
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center md:hidden"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
              <motion.path
                stroke={hamburgerStroke}
                strokeWidth="1.5"
                strokeLinecap="round"
                initial={{ d: "M3 8 L19 8" }}
                animate={menuOpen ? { d: "M5 5 L17 17" } : { d: "M3 8 L19 8" }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.path
                stroke={hamburgerStroke}
                strokeWidth="1.5"
                strokeLinecap="round"
                initial={{ d: "M3 14 L19 14", opacity: 1 }}
                animate={menuOpen ? { d: "M5 17 L17 5", opacity: 1 } : { d: "M3 14 L19 14", opacity: 1 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />
            </svg>
          </button>
        </nav>
      </motion.header>

      {/* Mobile sheet (md-hidden). */}
      <AnimatePresence>
        {menuOpen ? (
          <>
            {/* Scrim */}
            <motion.div
              key="scrim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 z-[60] bg-[color:var(--color-charcoal)]/40 md:hidden"
              onClick={() => setMenuOpen(false)}
              aria-hidden
            />
            {/* Sheet */}
            <motion.aside
              id="mobile-nav-sheet"
              key="sheet"
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-y-0 right-0 z-[70] flex w-full max-w-[88%] flex-col bg-[color:var(--color-ivory)] px-6 pb-10 pt-6 md:hidden"
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-xl tracking-tight text-[color:var(--color-charcoal)]">
                  ExecAIDay
                </span>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center text-[color:var(--color-claret)]"
                >
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
                    <path d="M5 5 L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M5 17 L17 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              <ul className="mt-14 flex flex-col gap-7">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block font-serif text-[28px] font-normal leading-[1.15] tracking-[-0.005em] text-[color:var(--color-charcoal)] transition-colors hover:text-[color:var(--color-claret)]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-10">
                <MagneticCta
                  href={DISCOVERY_CTA_HREF}
                  ariaLabel={PRIMARY_CTA_LABEL}
                >
                  {PRIMARY_CTA_LABEL}
                </MagneticCta>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
