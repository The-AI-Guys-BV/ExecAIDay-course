"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import {
  type MouseEvent,
  type ReactNode,
  useRef,
} from "react";

type MagneticCtaProps = {
  href: string;
  children: ReactNode;
  /** Visual size. "lg" is hero/section CTA; "sm" is nav CTA. */
  size?: "sm" | "lg";
  /** External-link target, optional. */
  target?: string;
  rel?: string;
  className?: string;
  /** Custom aria-label override. */
  ariaLabel?: string;
};

/**
 * Primary claret CTA with a magnetic hover. Translates up to ±8px toward the
 * cursor, scales 1 → 1.02, arrow translates +6px on hover. Springs back on
 * leave. Same component for nav + section CTAs; pass `size="sm"` for nav.
 */
export default function MagneticCta({
  href,
  children,
  size = "lg",
  target,
  rel,
  className,
  ariaLabel,
}: MagneticCtaProps) {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useMotionValue(1);

  const springConfig = { type: "spring" as const, stiffness: 150, damping: 15, mass: 0.6 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  const springScale = useSpring(scale, springConfig);

  // The arrow tracks the same horizontal pull but with a 6px max boost on
  // hover. Multiplying the spring keeps it in sync with the button glide.
  const arrowX = useTransform(springX, (v) => v + (scale.get() > 1 ? 6 : 0));

  const onMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = buttonRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    const max = 8;
    x.set(Math.max(-max, Math.min(max, dx * max)));
    y.set(Math.max(-max, Math.min(max, dy * max)));
  };

  const onMouseEnter = () => {
    scale.set(1.02);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
    scale.set(1);
  };

  const sizeClasses =
    size === "sm"
      ? "px-4 py-2.5 text-[14px] md:px-5 md:text-[15px]"
      : "px-7 py-4 text-[15px]";

  return (
    <motion.a
      ref={buttonRef}
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ x: springX, y: springY, scale: springScale }}
      className={[
        "inline-flex items-center justify-center rounded-sm bg-[color:var(--color-claret)] font-semibold text-[color:var(--color-ivory)] transition-colors duration-200 hover:bg-[#4a1418] will-change-transform",
        sizeClasses,
        className ?? "",
      ].join(" ")}
    >
      <span>{children}</span>
      <motion.span
        aria-hidden
        className="ml-2 inline-block"
        style={{ x: arrowX }}
      >
        →
      </motion.span>
    </motion.a>
  );
}
