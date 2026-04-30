# Connector Quirks (April 2026)

Connectors mostly just work. These are the edges your assistant should already know about; documenting here so you do too.

## Gmail

- Connector authenticates via OAuth client routed through the Google Drive flow (legacy infrastructure). If the OAuth dance feels weird — pasting a Drive token into the Gmail connector — that's expected.
- The default scope often missing is `gmail.modify` (needed for creating drafts and labeling). Check Settings → Connectors → Gmail → Permissions if drafts aren't being created.
- `/drafts-inbox` advanced mode requires `gmail.modify`. Beginner mode (drafts as files in your work folder) doesn't.

## Microsoft 365 (Outlook)

- Native M365 connector is **read-only** for Outlook mail in the most conservative reading of Anthropic's docs. Some 2026 sources describe `Mail.ReadWrite`. Empirical results vary by tenant.
- For draft creation reliably across tenants, the workshop architecture uses **Zapier MCP** as a bridge. Set up during IT onboarding for M365 execs. Cost: paid Zapier plan (~$20–50/mo per exec).
- You will never see Zapier UI during the workshop. Drafts just appear in your Outlook Drafts folder.
- Outlook calendar, OneDrive, SharePoint, Teams chat — read-only via native M365 connector.

## Google Calendar

- Full write scope (`calendar.events`) confirmed in 2026. Create, modify, delete events natively.
- No Zapier needed for calendar.

## Slack (native)

- Read + send messages, draft + post, search, meeting prep.
- DMs are scoped to your account. Public channel content is broader.
- Available on Pro/Max plans (Free plan has limited Slack scope).

## Drive (Google)

- Read + write at the file level you authorize. Reads PDFs, Docs, Sheets, Slides natively.
- Sharing model on Drive can confuse the connector — files shared TO you may or may not show depending on the share state.

## Microsoft Teams chat

- Read-only via the M365 connector. No native send-message capability.
- For sending messages programmatically, would need a separate Teams app integration — not in workshop scope.

## Live artifact bug #28161 (sidebar conflation)

Not a connector issue but lives near these in the troubleshooting universe. Sometimes the live-artifact sidebar shows two artifacts' outputs interleaved. Workaround: close the sidebar, reopen the specific artifact you want. Anthropic is tracking; expect a fix in a future Cowork release.

## Microsoft Teams bot detection (May–June 2026)

Teams is rolling out third-party bot detection in May–June 2026. Default behavior: organizer approval required for any third-party bot to join a meeting. **Affects** bot-based recording tools (Fireflies, Otter default mode). **Does NOT affect** the workshop's locked stack (Granola / Bluedot / Fellow's bot-less mode) — these capture system audio locally without joining the meeting.

If your meeting-note tool is bot-based and stops working in late spring 2026, that's why. Switch to bot-less.
