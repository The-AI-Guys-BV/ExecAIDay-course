"use client";

import { motion, type Variants } from "motion/react";
import SectionReveal from "./motion/SectionReveal";
import { Stagger, StaggerItem } from "./motion/Stagger";

const duoLineVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.15 },
  },
};

const duoClauseVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const duoPeriodVariants: Variants = {
  hidden: { color: "var(--color-claret)" },
  visible: {
    color: ["var(--color-claret)", "#5C1A1F", "var(--color-claret)"],
    transition: { duration: 0.4, delay: 0.6, times: [0, 0.5, 1] },
  },
};

export default function Founders() {
  return (
    <SectionReveal
      id="founders"
      className="border-t border-[color:var(--color-charcoal)]/10 bg-[color:var(--color-ivory)]"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
        <div className="mb-16 max-w-3xl md:mb-20">
          <p className="mb-6 text-[13px] font-medium uppercase tracking-[0.2em] text-[color:var(--color-claret)]">
            Founders
          </p>
          <h2 className="font-serif text-[36px] font-normal leading-[1.1] tracking-[-0.01em] text-[color:var(--color-charcoal)] md:text-[48px] lg:text-[56px]">
            Who&apos;s in the room.
          </h2>
        </div>

        <Stagger
          stagger={0.15}
          className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-16 lg:gap-20"
        >
          {/* Tijn */}
          <StaggerItem as="article" className="border-t border-[color:var(--color-charcoal)]/15 pt-10">
            <h3 className="font-serif text-[28px] font-normal leading-[1.2] tracking-[-0.005em] text-[color:var(--color-charcoal)] md:text-[32px]">
              Tijn van der Zant, PhD
            </h3>
            <p className="mt-8 max-w-[58ch] text-[17px] leading-[1.75] text-[color:var(--color-charcoal)]/85 md:text-[18px]">
              Tijn is the architect of ExecAIDay and a co-founder of The AI
              Guys. He has spent more than twenty-five years inside AI,
              machine learning, and robotics — including a PhD in generative
              artificial intelligence completed at the University of Groningen
              in 2009, work that anticipated the foundations of the current AI
              moment by more than a decade. His dissertation,{" "}
              <em className="font-serif italic">
                Generative Artificial Intelligence: AI Using AI to Improve on
                Itself
              </em>
              , was supercomputer-scale research years before the term was
              mainstream. Outside the lab, he has served as CTO and Chief AI
              Officer for organizations across the Netherlands, co-founded
              RoboCup@Home (now the world&apos;s largest home-robotics
              research league), and built and led laboratories at the
              University of Groningen and Windesheim. He lives in Wassenaar
              with too many books.
            </p>
          </StaggerItem>

          {/* Dirk */}
          <StaggerItem as="article" className="border-t border-[color:var(--color-charcoal)]/15 pt-10">
            <h3 className="font-serif text-[28px] font-normal leading-[1.2] tracking-[-0.005em] text-[color:var(--color-charcoal)] md:text-[32px]">
              Dirk Meuleman
            </h3>
            <p className="mt-8 max-w-[58ch] text-[17px] leading-[1.75] text-[color:var(--color-charcoal)]/85 md:text-[18px]">
              Dirk is co-founder of The AI Guys and brings the
              institutional-finance side of the partnership. He is Chairman of
              Phenix Capital Group, the impact-investment advisory firm he led
              as CEO for over five years and Co-CEO for nearly five before
              that — eleven years in total at a firm advising pension funds,
              insurers, sovereign wealth funds, and family offices on capital
              allocation toward the Sustainable Development Goals. Earlier in
              his career he was a portfolio manager at Shell&apos;s
              private-equity and infrastructure arm and a fund manager at MN.
              He is a CFA charterholder and a CAIA — credentials that mean
              something to the buyers ExecAIDay was built for. He lives in
              Amsterdam.
            </p>
          </StaggerItem>
        </Stagger>

        <motion.p
          variants={duoLineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-15% 0px" }}
          className="mt-16 max-w-[64ch] font-serif text-[22px] italic leading-[1.4] text-[color:var(--color-claret)] md:mt-20 md:text-[26px]"
        >
          <motion.span variants={duoClauseVariants} className="inline">
            The technical depth of an AI researcher
          </motion.span>
          <motion.span
            variants={duoPeriodVariants}
            className="inline"
            aria-hidden
          >
            .
          </motion.span>{" "}
          <motion.span variants={duoClauseVariants} className="inline">
            The operating credibility of an institutional-finance chairman.
          </motion.span>
        </motion.p>
      </div>
    </SectionReveal>
  );
}
