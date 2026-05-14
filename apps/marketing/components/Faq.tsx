"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState, type ReactNode } from "react";
import SectionReveal from "./motion/SectionReveal";

type FaqItem = {
  question: string;
  paragraphs: ReactNode[];
};

const faqs: FaqItem[] = [
  {
    question: "Will my company data go to Anthropic, or to any AI vendor?",
    paragraphs: [
      <>
        No. Your cockpit runs in your own Anthropic Console account on your
        subscription. Your conversations, your vault, your connectors — they
        are yours. Anthropic&apos;s enterprise terms apply: your inputs are not
        used for training, and we configure your account so that data
        retention follows your policy, not a default.
      </>,
      <>
        Where we use AI on our side — for the curriculum portal you log into —
        it is scoped narrowly to generating your update digest and answering
        portal questions. None of your company data ever touches our servers.
        The install we build for you talks to your systems directly, not
        through us.
      </>,
    ],
  },
  {
    question: "Will I actually see the value, and how soon?",
    paragraphs: [
      <>
        You will see the first concrete output in afternoon one — your intake
        conversation becomes a chief-of-staff brief you&apos;ll use that
        evening. The bespoke cockpit you&apos;ll be running comes together over
        the four afternoons.
      </>,
      <>
        The value compounds because the cockpit reshapes around your work, not
        the other way around. The executives who get the most out of it are
        the ones who let us see a real week — real meetings, real inbox, real
        decisions — during the install. We&apos;re not training you on a
        generic tool; we&apos;re building the specific tool your week needs.
      </>,
    ],
  },
  {
    question: "I'm not technical. Can I still benefit?",
    paragraphs: [
      <>
        Yes — and you&apos;ll come out of it knowing how to actually use
        Claude Cowork at an executive level. You&apos;ll learn how to brief
        Claude on your work so it reasons like someone who knows your
        business, how to drive your cockpit from natural-language
        instructions, how to capture meetings and turn them into decisions,
        how to keep a working vault that gets sharper every week, and how to
        pull in connectors when you need data from your other systems.
      </>,
      <>
        What you do not do is set anything up. We install every layer (the
        app, the plugins, the connectors, the Office sidebars, your vault,
        your scheduled routines) and build your bespoke cockpit for you. The
        four afternoons are where you learn to wield it — the same way an
        executive learns a new car by driving it, not by building the engine.
        By the end you are using Cowork fluently and reaching for it without
        thinking.
      </>,
    ],
  },
  {
    question: "How much of my time does this actually take?",
    paragraphs: [
      <>
        Four afternoons, spaced every two weeks. That is the entire time
        commitment. The cockpit is built with you in the room — you see how it
        takes shape, you push back on what doesn&apos;t fit, and we adjust it
        live. That is part of what makes it yours.
      </>,
      <>
        Between sessions, you use the cockpit in your real work — real
        meetings, real inbox, real decisions. You&apos;ll notice what&apos;s
        working and what isn&apos;t. The next session opens with your feedback
        and we improve the cockpit around it. By the fourth afternoon, the
        cockpit has been through two full feedback cycles in your actual
        week — that&apos;s why it ends up fitting the way it does. After the
        install, most executives report 4–8 hours saved per week within the
        first month.
      </>,
    ],
  },
  {
    question: "Can my leadership team get this too?",
    paragraphs: [
      <>
        Yes. The personal install we describe on this page is for one
        executive. For teams — your CFO, your COO, your full leadership group
        — we run a different engagement that installs each person&apos;s
        cockpit and connects them where they need to be connected (shared
        dashboards, joint routines, leadership-team artifacts).
      </>,
      <>
        That&apos;s a conversation worth having during your own install. By
        session three, you&apos;ll know exactly which of your team members
        this would unlock — and we can scope from there. Team engagements are
        quoted separately.
      </>,
    ],
  },
];

export default function Faq() {
  // First question expanded by default — gives the section visual weight on
  // first paint and signals the rest are interactive.
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionReveal
      id="faq"
      className="border-t border-[color:var(--color-charcoal)]/10 bg-[color:var(--color-ivory)]"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
        <div className="mb-16 max-w-3xl md:mb-20">
          <p className="mb-6 text-[13px] font-medium uppercase tracking-[0.2em] text-[color:var(--color-claret)]">
            Frequently asked questions
          </p>
          <h2 className="font-serif text-[36px] font-normal leading-[1.1] tracking-[-0.01em] text-[color:var(--color-charcoal)] md:text-[48px] lg:text-[56px]">
            Five questions, answered straight.
          </h2>
        </div>

        <ol className="border-t border-[color:var(--color-charcoal)]/15">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;
            return (
              <li
                key={faq.question}
                className="border-b border-[color:var(--color-charcoal)]/15"
              >
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="group flex w-full items-start justify-between gap-8 py-8 text-left transition md:py-10"
                >
                  <div className="flex-1">
                    <p className="font-serif text-[15px] font-medium text-[color:var(--color-claret)]">
                      Q{index + 1}
                    </p>
                    <h3 className="mt-3 font-serif text-[24px] font-normal leading-[1.25] tracking-[-0.005em] text-[color:var(--color-charcoal)] md:text-[30px]">
                      <span className="text-[color:var(--color-claret)]">
                        {faq.question.charAt(0)}
                      </span>
                      {faq.question.slice(1)}
                    </h3>
                  </div>
                  <motion.span
                    aria-hidden
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-4 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center text-[28px] font-light leading-none text-[color:var(--color-claret)]"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      key="panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                        opacity: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 gap-6 pb-10 pl-0 md:grid-cols-12 md:pb-12">
                        <div className="space-y-6 md:col-span-9 md:col-start-2">
                          {faq.paragraphs.map((p, i) => (
                            <p
                              key={i}
                              className="max-w-[64ch] text-[17px] leading-[1.75] text-[color:var(--color-charcoal)]/85 md:text-[18px]"
                            >
                              {p}
                            </p>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </li>
            );
          })}
        </ol>
      </div>
    </SectionReveal>
  );
}
