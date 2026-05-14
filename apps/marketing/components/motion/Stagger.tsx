"use client";

import { motion, type HTMLMotionProps, type Variants } from "motion/react";
import type { ReactNode, ElementType } from "react";

type StaggerProps = {
  children: ReactNode;
  /** Delay between children, in seconds. */
  stagger?: number;
  /** Duration of each child's reveal. */
  duration?: number;
  /** Y-offset each child translates from on reveal. */
  yFrom?: number;
  /** Element to render the container as. Defaults to a div. */
  as?: "div" | "ul" | "ol";
  /** Extra className on the container. */
  className?: string;
};

const containerVariants: Variants = {
  hidden: {},
  visible: {},
};

/**
 * Container that staggers the reveal of its direct `StaggerItem` children.
 * Fires once when the container top crosses ~80% of the viewport.
 */
export function Stagger({
  children,
  stagger = 0.08,
  as = "div",
  className,
}: StaggerProps) {
  const variants: Variants = {
    ...containerVariants,
    visible: {
      transition: {
        staggerChildren: stagger,
      },
    },
  };

  const MotionTag = motion[as] as ElementType;

  return (
    <MotionTag
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-15% 0px" }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

type StaggerItemProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  yFrom?: number;
  duration?: number;
  as?: "div" | "li" | "article";
  className?: string;
};

export function StaggerItem({
  children,
  yFrom = 28,
  duration = 0.8,
  as = "div",
  className,
  ...rest
}: StaggerItemProps) {
  const variants: Variants = {
    hidden: { opacity: 0, y: yFrom },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const MotionTag = motion[as] as ElementType;

  return (
    <MotionTag variants={variants} className={className} {...rest}>
      {children}
    </MotionTag>
  );
}
