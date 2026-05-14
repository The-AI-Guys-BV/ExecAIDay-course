const programmeLinks = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#cockpit", label: "The cockpit" },
  { href: "#pricing", label: "Pricing" },
  { href: "#founders", label: "Founders" },
  { href: "#faq", label: "FAQ" },
];

export default function Footer() {
  return (
    <footer className="bg-[color:var(--color-charcoal)] text-[color:var(--color-ivory)]">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-12">
          {/* Column 1 — ExecAIDay */}
          <div className="md:col-span-7">
            <p className="font-serif text-[22px] font-normal tracking-tight md:text-[24px]">
              ExecAIDay
            </p>
            <p className="mt-6 max-w-[52ch] text-[16px] leading-[1.7] text-[color:var(--color-ivory)]/85">
              The personal-install programme that gives executives a bespoke
              Claude Cowork cockpit, built around their actual work over four
              afternoons.
            </p>
            <p className="mt-6 text-[14px] italic leading-[1.6] text-[color:var(--color-ivory)]/60">
              Part of The AI Guys.
            </p>
          </div>

          {/* Column 2 — The programme */}
          <div className="md:col-span-5 md:pl-8">
            <p className="font-serif text-[15px] font-medium uppercase tracking-[0.2em] text-[color:var(--color-ivory)]/55">
              The programme
            </p>
            <ul className="mt-6 space-y-3">
              {programmeLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[15px] text-[color:var(--color-ivory)]/90 transition hover:text-[color:var(--color-ivory)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 border-t border-[color:var(--color-ivory)]/15 pt-8">
          <p className="text-[13px] leading-[1.6] text-[color:var(--color-ivory)]/50 md:text-[14px]">
            © 2026 The AI Guys BV · KvK [number] · VAT NL[number]B01 · Wassenaar, the Netherlands
          </p>
        </div>
      </div>
    </footer>
  );
}
