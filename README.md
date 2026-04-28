# ExecAIDay Course

Premium in-person Claude Cowork training workshop for C-level executives, distributed as a Cowork plugin.

## What's in this plugin

When complete, the plugin will contain:

- **26 skills** — `/teach`, `/help-me-prompt`, `/new-project`, plus 4 more core skills and 19 GTD skills.
- **16 modules** — full course content readable by `/teach <module>`.
- **Templates** — vault, work-folder, and project-folder starter content.
- **References** — R-C-T-F-C framework, 17 basic concepts, data privacy, connector quirks.
- **Docs** — welcome page, how-to-start guide.

Brand: [execaiday.com](https://execaiday.com)

## Installation (for workshop participants)

In Claude Cowork:

1. **Settings → Customize → Browse plugins → Add personal marketplace.**
2. Add this repo as the marketplace: `The-AI-Guys-BV/ExecAIDay-course`.
3. Install the `execaiday` plugin.
4. All skills auto-discover. `/teach` reads modules from the installed plugin.

## Repository structure

```
ExecAIDay-course/
├── .claude-plugin/
│   ├── plugin.json          # plugin manifest
│   └── marketplace.json     # marketplace listing this plugin
├── skills/                  # 26 skill folders, each with SKILL.md
│   └── teach/SKILL.md       # interactive patient tutor
├── modules/                 # 16 module Markdown files (TBD)
├── templates/               # vault + work-folder + project starter content (TBD)
├── references/              # frameworks, concepts, policies (TBD)
├── docs/                    # welcome.md, how-to-start.md (TBD)
└── README.md
```

## Status

**v0.1.0 — early scaffold.** `/teach` skill present; remaining 25 skills, module bodies, templates, references, and docs pending authoring.

## License

Proprietary. Workshop materials and skills are licensed for use by ExecAIDay workshop participants only. Distribution outside the workshop requires written permission.
