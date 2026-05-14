/**
 * Site-wide shared constants. Centralizing the CTA target makes it a one-line
 * swap when the Google booking embed URL lands (BACKLOG.md item 1) and the
 * mailto becomes a modal trigger.
 */
export const DISCOVERY_CTA_HREF =
  "mailto:hello@execaiday.com?subject=ExecAIDay%20discovery%20call";

export const PRIMARY_CTA_LABEL = "Book a discovery call";

export const NAV_LINKS = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#cockpit", label: "The cockpit" },
  { href: "#pricing", label: "Pricing" },
  { href: "#founders", label: "Founders" },
  { href: "#faq", label: "FAQ" },
] as const;
