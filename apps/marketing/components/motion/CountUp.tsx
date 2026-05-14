"use client";

import {
  animate,
  useInView,
  useMotionValue,
  useTransform,
  motion,
} from "motion/react";
import { useEffect, useRef } from "react";

type CountUpProps = {
  /** Target integer value. */
  to: number;
  /** Display prefix (e.g. "€"). */
  prefix?: string;
  /** Display suffix (e.g. "/year"). */
  suffix?: string;
  /** Animation duration in seconds. */
  duration?: number;
  /** Locale for number formatting (groups + separators). */
  locale?: string;
  /** Extra className on the surrounding span. */
  className?: string;
};

/**
 * Animates a number from 0 → `to` once the element scrolls into view. The
 * prefix and locale-formatted thousands separators are preserved; only the
 * numeric portion ticks up. Editorial easing curve, 1.4s default duration.
 */
export default function CountUp({
  to,
  prefix = "",
  suffix = "",
  duration = 1.4,
  locale = "en-US",
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const value = useMotionValue(0);
  const display = useTransform(value, (v) => {
    const rounded = Math.round(v);
    return `${prefix}${rounded.toLocaleString(locale)}${suffix}`;
  });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(value, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
  }, [inView, to, duration, value]);

  return (
    <span ref={ref} className={className}>
      <motion.span aria-hidden>{display}</motion.span>
      <span className="sr-only">{`${prefix}${to.toLocaleString(locale)}${suffix}`}</span>
    </span>
  );
}
