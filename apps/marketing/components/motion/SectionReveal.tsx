"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";

type SectionRevealProps = HTMLMotionProps<"section"> & {
  children: ReactNode;
  /** Y-offset to translate from on enter. Defaults to 32px. */
  yFrom?: number;
  /** Duration of the reveal in seconds. Defaults to 0.9s. */
  duration?: number;
  /** Optional enter delay in seconds. */
  delay?: number;
};

/**
 * Wraps a section with a one-shot fade + rise reveal when its top crosses
 * roughly 75% of the viewport (uses `margin: "-15% 0px"`). The reveal fires
 * once and uses the editorial easing curve [0.16, 1, 0.3, 1].
 */
export default function SectionReveal({
  children,
  yFrom = 32,
  duration = 0.9,
  delay = 0,
  ...rest
}: SectionRevealProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: yFrom }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      {...rest}
    >
      {children}
    </motion.section>
  );
}
