# ExecAIDay Course

Premium in-person Claude Cowork training workshop for C-level executives, distributed as a Cowork plugin.

## What's in this plugin

- **26 skills** — `/teach`, `/help-me-prompt`, `/new-project`, plus 4 more core skills and 19 GTD skills.
- **17 modules** — full course content readable by `/teach <module>`.
- **Templates** — vault, work-folder, and project-folder starter content.
- **References** — R-C-T-F-C framework, 18 basic concepts (incl. context rot), data privacy, connector quirks, scheduled-task patterns, GTD schema.
- **Docs** — welcome page, how-to-start guide.

Brand: [execaiday.com](https://execaiday.com)

## Installation (for workshop participants)

In Claude Cowork:

1. Open **Customize** in the left sidebar of the Cowork tab.
2. Find the **Marketplaces** section and add this repo as a personal marketplace:
   <https://github.com/The-AI-Guys-BV/ExecAIDay-course>
3. Sync the marketplace, then install the **execaiday** plugin.
4. All 26 skills auto-discover. `/teach` reads modules from the installed plugin.

## Smoke test (after install)

- `/skills` — lists all 26 skills plus Cowork built-ins.
- `/teach` (no args) — lists all 17 modules.
- `/teach M01` — walks the first module.
- `/capture <something>` — appends a bullet to `<vault>/gtd/inbox.md` in your Obsidian vault.

## Companion: GTD vault layout

The GTD skills read and write plain files in your Obsidian vault at `<vault>/gtd/`. The `templates/vault-starter/gtd/` folder in this plugin scaffolds the layout (inbox, next-actions, projects/, etc.). See `references/gtd-vault-layout.md` for the full file structure and tag conventions.

## Repository structure

```
ExecAIDay-course/
├── .claude-plugin/
│   ├── plugin.json          # plugin manifest
│   └── marketplace.json     # marketplace listing this plugin
├── skills/                  # 26 skill folders, each with SKILL.md
├── modules/                 # 17 module Markdown files (M01–M17)
├── templates/               # vault + work-folder + project starter content
├── references/              # frameworks, concepts, policies, GTD schema
├── docs/                    # welcome.md, how-to-start.md
└── README.md
```

## Status

**v0.1.0 — full content authored.** All 26 skills, 17 modules, 9 references, vault and work-folder starter content, welcome/how-to-start docs in place. Skill bodies and module sections will iterate as the workshop runs first cohorts.

## License

Proprietary. Workshop materials and skills are licensed for use by ExecAIDay workshop participants only. Distribution outside the workshop requires written permission.
