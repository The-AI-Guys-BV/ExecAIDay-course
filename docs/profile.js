/* ExecAIDay — profile-driven customization runtime.
   Loads on every page. No framework, vanilla JS. */
(function () {
  "use strict";

  const STORAGE_KEY = "execaiday-profile";

  const FIELDS = [
    { key: "role", label: "Your role", kind: "select",
      options: [
        ["", "—"],
        ["founder", "Founder / CEO"],
        ["partner", "Partner / Investor"],
        ["cfo", "CFO"],
        ["chro", "CHRO"],
        ["cmo", "CMO"],
        ["cto", "CTO"],
        ["board-chair", "Board Chair / NED"],
        ["gm", "GM / Country head"],
        ["other", "Other"],
      ],
    },
    { key: "industry", label: "Industry", kind: "select",
      options: [
        ["", "—"],
        ["saas", "SaaS / tech"],
        ["finance", "Finance / PE / VC"],
        ["healthcare", "Healthcare / pharma"],
        ["manufacturing", "Manufacturing"],
        ["retail", "Retail / consumer"],
        ["services", "Professional services"],
        ["real-estate", "Real estate"],
        ["government", "Government / non-profit"],
        ["other", "Other"],
      ],
    },
    { key: "org_size", label: "Org size", kind: "select",
      options: [
        ["", "—"],
        ["solo", "Solo (just me)"],
        ["small", "<50 people"],
        ["mid", "50–500"],
        ["large", "500–5,000"],
        ["enterprise", "5,000+"],
      ],
    },
    { key: "stack", label: "Office stack", kind: "select",
      options: [
        ["", "—"],
        ["m365", "Microsoft 365"],
        ["google", "Google Workspace"],
        ["mixed", "Mixed (both)"],
        ["neither", "Neither / other"],
      ],
    },
    { key: "existing_systems", label: "Existing systems (multi)", kind: "checkboxes",
      options: [
        ["notion", "Notion"],
        ["asana", "Asana"],
        ["monday", "Monday"],
        ["clickup", "ClickUp"],
        ["slack", "Slack"],
        ["teams", "Teams"],
        ["email-only", "Email-only"],
        ["spreadsheets-only", "Spreadsheets-only"],
      ],
    },
    { key: "plan", label: "Anthropic plan", kind: "select",
      options: [
        ["pro", "Pro"],
        ["max", "Max"],
        ["team", "Team"],
        ["enterprise", "Enterprise"],
      ],
    },
    { key: "ai_experience", label: "AI experience", kind: "select",
      options: [
        ["novice", "Novice"],
        ["intermediate", "Intermediate (use ChatGPT/Claude regularly)"],
        ["advanced", "Advanced (build with the API, run skills)"],
      ],
    },
    { key: "has_assistant", label: "Personal assistant?", kind: "select",
      options: [
        ["false", "No"],
        ["true", "Yes — handles email/calendar"],
      ],
    },
    { key: "language", label: "Primary writing language", kind: "select",
      options: [
        ["en", "English"],
        ["nl", "Dutch"],
        ["fr", "French"],
        ["de", "German"],
        ["es", "Spanish"],
        ["other", "Other"],
      ],
    },
    { key: "mobile_access", label: "Mobile use", kind: "select",
      options: [
        ["full", "I use my phone constantly"],
        ["limited", "I rarely use my phone for work"],
      ],
    },
  ];

  function readProfile() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return {};
      const p = JSON.parse(raw);
      return typeof p === "object" && p ? p : {};
    } catch (e) { return {}; }
  }

  function writeProfile(p) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); } catch (e) {}
  }

  function clearProfile() {
    try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
  }

  function getField(profile, key) {
    const v = profile[key];
    if (Array.isArray(v)) return v;
    if (typeof v === "boolean") return String(v);
    return v == null ? "" : String(v);
  }

  // Match a "key:val1|val2" condition against the profile.
  // Returns true if the profile field matches any of the values.
  function matches(profile, condition) {
    const colonIdx = condition.indexOf(":");
    if (colonIdx === -1) return false;
    const key = condition.slice(0, colonIdx).trim();
    const valuesStr = condition.slice(colonIdx + 1).trim();
    const values = valuesStr.split("|").map(s => s.trim()).filter(Boolean);
    const fieldVal = getField(profile, key);
    if (Array.isArray(fieldVal)) {
      return values.some(v => fieldVal.includes(v));
    }
    return values.includes(fieldVal);
  }

  function applyConditionals(root, profile) {
    const profileSet = Object.keys(profile).length > 0;

    // Show-when: hide if not matching, but only if profile is set.
    // If profile is empty, leave defaults visible (generic mode).
    root.querySelectorAll("[data-show-when]").forEach(el => {
      const cond = el.getAttribute("data-show-when");
      const ok = !profileSet || matches(profile, cond);
      el.style.display = ok ? "" : "none";
    });

    // Hide-when: hide if matching.
    root.querySelectorAll("[data-hide-when]").forEach(el => {
      const cond = el.getAttribute("data-hide-when");
      const hide = profileSet && matches(profile, cond);
      el.style.display = hide ? "none" : "";
    });

    // Variant blocks: show the matching child, fall back to data-variant="default".
    root.querySelectorAll("[data-variant-by]").forEach(wrapper => {
      const key = wrapper.getAttribute("data-variant-by");
      const fieldVal = getField(profile, key);
      const children = Array.from(wrapper.querySelectorAll(":scope > [data-variant]"));
      let chosen = null;
      if (profileSet) {
        chosen = children.find(c => {
          const v = c.getAttribute("data-variant").split("|").map(s => s.trim());
          return v.includes(fieldVal);
        });
      }
      if (!chosen) chosen = children.find(c => c.getAttribute("data-variant") === "default");
      children.forEach(c => { c.style.display = (c === chosen) ? "" : "none"; });
    });

    // Inline example spans.
    root.querySelectorAll("[data-example-by]").forEach(wrapper => {
      const key = wrapper.getAttribute("data-example-by");
      const fieldVal = getField(profile, key);
      const children = Array.from(wrapper.querySelectorAll(":scope > [data-example-value]"));
      let chosen = null;
      if (Object.keys(profile).length) {
        chosen = children.find(c => c.getAttribute("data-example-value") === fieldVal);
      }
      if (!chosen) chosen = children.find(c => c.getAttribute("data-example-value") === "default");
      children.forEach(c => { c.style.display = (c === chosen) ? "inline" : "none"; });
    });
  }

  function profileSummary(profile) {
    if (!Object.keys(profile).length) return null;
    const parts = [];
    if (profile.role) {
      const lbl = (FIELDS.find(f => f.key === "role").options.find(o => o[0] === profile.role) || [, "—"])[1];
      parts.push(lbl);
    }
    if (profile.industry) {
      const lbl = (FIELDS.find(f => f.key === "industry").options.find(o => o[0] === profile.industry) || [, "—"])[1];
      parts.push(lbl);
    }
    if (profile.stack && profile.stack !== "neither") {
      const lbl = (FIELDS.find(f => f.key === "stack").options.find(o => o[0] === profile.stack) || [, "—"])[1];
      parts.push(lbl);
    }
    return parts.length ? parts.join(" · ") : null;
  }

  function renderChip(profile) {
    const slot = document.querySelector("[data-profile-chip]");
    if (!slot) return;
    const summary = profileSummary(profile);
    if (summary) {
      slot.innerHTML = `<button type="button" class="profile-chip is-set" data-open-profile>
        <span class="profile-chip-mark">●</span>
        <span class="profile-chip-text">${summary}</span>
        <span class="profile-chip-edit">Edit</span>
      </button>`;
    } else {
      slot.innerHTML = `<button type="button" class="profile-chip" data-open-profile>
        <span class="profile-chip-mark">○</span>
        <span class="profile-chip-text">Set your profile</span>
      </button>`;
    }
  }

  function renderBanner(profile) {
    const existing = document.querySelector(".profile-banner");
    if (existing) existing.remove();
    if (Object.keys(profile).length) return;
    const topnav = document.querySelector(".topnav");
    if (!topnav) return;
    const banner = document.createElement("div");
    banner.className = "profile-banner";
    banner.innerHTML = `<div class="container">
      <span class="profile-banner-text"><strong>Before the workshop:</strong> spend 10 minutes on the intake. Your install team uses it to pre-tune your vault, connectors, brief template, and cockpit before day one.</span>
      <button type="button" class="profile-banner-button" data-open-profile>Start intake</button>
      <button type="button" class="profile-banner-dismiss" data-dismiss-banner aria-label="Dismiss">×</button>
    </div>`;
    topnav.insertAdjacentElement("afterend", banner);
  }

  function buildModalHTML(profile) {
    const fieldsHTML = FIELDS.map(f => {
      if (f.kind === "select") {
        const opts = f.options.map(([v, l]) => {
          const sel = String(profile[f.key] ?? "") === v ? " selected" : "";
          return `<option value="${v}"${sel}>${l}</option>`;
        }).join("");
        return `<label class="profile-field">
          <span class="profile-field-label">${f.label}</span>
          <select name="${f.key}">${opts}</select>
        </label>`;
      }
      if (f.kind === "checkboxes") {
        const current = Array.isArray(profile[f.key]) ? profile[f.key] : [];
        const opts = f.options.map(([v, l]) => {
          const checked = current.includes(v) ? " checked" : "";
          return `<label class="profile-checkbox"><input type="checkbox" name="${f.key}" value="${v}"${checked}> ${l}</label>`;
        }).join("");
        return `<div class="profile-field">
          <span class="profile-field-label">${f.label}</span>
          <div class="profile-checkboxes">${opts}</div>
        </div>`;
      }
      return "";
    }).join("");
    return `<div class="profile-modal-backdrop" data-close-profile></div>
      <div class="profile-modal" role="dialog" aria-modal="true" aria-label="Pre-workshop intake">
        <div class="profile-modal-head">
          <h2>Pre-workshop intake</h2>
          <p><strong>Your install team uses this to pre-tune your setup</strong> — vault structure, connector recommendations, brief template, cockpit blocks — before day one. Filling this in is the single highest-leverage thing you can do before we arrive. Takes about 10 minutes.</p>
        </div>
        <form class="profile-form" data-profile-form>
          ${fieldsHTML}
        </form>
        <div class="profile-modal-foot">
          <button type="button" class="profile-button-secondary" data-reset-profile>Reset</button>
          <div class="profile-modal-foot-spacer"></div>
          <button type="button" class="profile-button-secondary" data-close-profile>Cancel</button>
          <button type="button" class="profile-button-secondary" data-export-profile>Download for install team</button>
          <button type="button" class="profile-button-primary" data-save-profile>Save &amp; apply</button>
        </div>
      </div>`;
  }

  function openModal() {
    const profile = readProfile();
    let host = document.querySelector("[data-profile-modal-host]");
    if (!host) {
      host = document.createElement("div");
      host.setAttribute("data-profile-modal-host", "");
      document.body.appendChild(host);
    }
    host.innerHTML = buildModalHTML(profile);
    document.body.classList.add("profile-modal-open");
  }

  function closeModal() {
    const host = document.querySelector("[data-profile-modal-host]");
    if (host) host.innerHTML = "";
    document.body.classList.remove("profile-modal-open");
  }

  function readForm() {
    const form = document.querySelector("[data-profile-form]");
    if (!form) return {};
    const p = {};
    FIELDS.forEach(f => {
      if (f.kind === "select") {
        const el = form.querySelector(`select[name="${f.key}"]`);
        if (el && el.value !== "") {
          if (f.key === "has_assistant") p[f.key] = el.value === "true";
          else p[f.key] = el.value;
        }
      } else if (f.kind === "checkboxes") {
        const els = form.querySelectorAll(`input[name="${f.key}"]:checked`);
        const arr = Array.from(els).map(e => e.value);
        if (arr.length) p[f.key] = arr;
      }
    });
    return p;
  }

  function exportJSON() {
    const profile = readProfile();
    const blob = new Blob([JSON.stringify(profile, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "execaiday-profile.json";
    document.body.appendChild(a);
    a.click();
    setTimeout(() => { URL.revokeObjectURL(url); a.remove(); }, 0);
  }

  function dismissBanner() {
    const b = document.querySelector(".profile-banner");
    if (b) b.remove();
  }

  function bind(profile) {
    document.addEventListener("click", function (e) {
      const t = e.target.closest("[data-open-profile]");
      if (t) { e.preventDefault(); openModal(); return; }

      const c = e.target.closest("[data-close-profile]");
      if (c) { e.preventDefault(); closeModal(); return; }

      const r = e.target.closest("[data-reset-profile]");
      if (r) {
        e.preventDefault();
        clearProfile();
        closeModal();
        const p = readProfile();
        renderChip(p);
        renderBanner(p);
        applyConditionals(document.body, p);
        return;
      }

      const x = e.target.closest("[data-export-profile]");
      if (x) { e.preventDefault(); exportJSON(); return; }

      const s = e.target.closest("[data-save-profile]");
      if (s) {
        e.preventDefault();
        const p = readForm();
        writeProfile(p);
        closeModal();
        renderChip(p);
        renderBanner(p);
        applyConditionals(document.body, p);
        return;
      }

      const d = e.target.closest("[data-dismiss-banner]");
      if (d) { e.preventDefault(); dismissBanner(); return; }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        const host = document.querySelector("[data-profile-modal-host]");
        if (host && host.innerHTML) closeModal();
      }
    });
  }

  function init() {
    const profile = readProfile();
    renderChip(profile);
    renderBanner(profile);
    applyConditionals(document.body, profile);
    bind(profile);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
