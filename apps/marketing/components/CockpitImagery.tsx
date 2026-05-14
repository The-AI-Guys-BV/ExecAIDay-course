"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

/**
 * Two-image composition that sits beside the cockpit deliverables list. Each
 * image enters with a subtle scale + fade, parallax-translates as the section
 * scrolls, and lifts on hover. Motion is editorial — felt, not announced.
 *
 * Reduced-motion is honored globally via `globals.css` (the
 * `prefers-reduced-motion: reduce` media query overrides Framer Motion's
 * inline opacity / transform styles). That keeps SSR and CSR markup identical
 * and avoids hydration mismatches.
 *
 * Alt text is descriptive of the cockpit deliverable each image suggests.
 */
export default function CockpitImagery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Mild parallax: top image drifts down, bottom image drifts up as user scrolls.
  const topY = useTransform(scrollYProgress, [0, 1], [-12, 12]);
  const bottomY = useTransform(scrollYProgress, [0, 1], [12, -12]);

  return (
    <div ref={containerRef} className="relative flex flex-col gap-6 md:gap-8">
      <ImageCard
        src="/images/cockpit/cockpit-analytics-luke-chesser.jpg"
        alt="A Claude Cowork live artifact showing a personalized executive dashboard — performance signals, calendar, and inbox triage in one window."
        aspect="16/10"
        priority
        y={topY}
      />
      <ImageCard
        src="/images/cockpit/workspace-andrew-neel.jpg"
        alt="An executive's workspace: laptop, coffee, phone — the Cowork cockpit running alongside the actual work."
        aspect="16/10"
        priority
        y={bottomY}
        offsetX={28}
      />
    </div>
  );
}

type ImageCardProps = {
  src: string;
  alt: string;
  aspect: string;
  priority?: boolean;
  y: ReturnType<typeof useTransform<number, number>>;
  /** Optional horizontal offset (px) on desktop — used to overlap-stagger the pair. */
  offsetX?: number;
};

function ImageCard({
  src,
  alt,
  aspect,
  priority,
  y,
  offsetX = 0,
}: ImageCardProps) {
  return (
    <motion.figure
      style={{ y, marginLeft: offsetX ? `${offsetX}px` : undefined }}
      initial={{ opacity: 0, scale: 1.04 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{
        y: -4,
        transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
      }}
      className="relative overflow-hidden rounded-[14px] border border-[color:var(--color-ivory)]/10 bg-[color:var(--color-charcoal)]/40 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.55),0_8px_16px_-8px_rgba(0,0,0,0.45)] transition-shadow duration-300 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.65),0_12px_24px_-8px_rgba(0,0,0,0.55)] will-change-transform"
    >
      <div className="relative w-full" style={{ aspectRatio: aspect }}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 768px) 42vw, 100vw"
          className="object-cover"
        />
        {/* Subtle inner edge to keep the image feeling embedded, not pasted on. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[14px] ring-1 ring-inset ring-[color:var(--color-ivory)]/10"
        />
      </div>
    </motion.figure>
  );
}
