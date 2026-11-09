# Formspree setup

## Media kit (partnership inquiries)

**Status:** Connected — `https://formspree.io/f/xqejjdpv` on the media kit contact form.

## Newsletter signup

**Status:** Connected — `https://formspree.io/f/mjgzzjgz` on the join page (`index.html`).

Both forms use **Basic HTML POST** (correct for static GitHub Pages at join.omegagreed.com).

---

## Forms at a glance

| Page | Formspree ID | Purpose |
|------|--------------|---------|
| `/media-kit/` | `xqejjdpv` | Brand partnerships |
| `/` (join) | `mjgzzjgz` | Newsletter email signups |

---

## Optional (recommended in Formspree settings)

For **newsletter** form (`mjgzzjgz`):

- Turn **off** email notifications if you don't want an alert per signup
- Export CSV from the Formspree dashboard when you need the list
- Enable spam filtering / reCAPTCHA if you get junk

For **media kit** form (`xqejjdpv`):

- Keep email notifications on (fewer, higher-value inquiries)

---

## Purpose Over Comfort (`/purpose-over-comfort/`)

**Status:** Not connected. The page ships with “Applications opening soon.”

Do not reuse `mjgzzjgz` or `xqejjdpv`. Those forms are the newsletter and partnership inbox.

To open applications:

1. Create a new Formspree form used only for this pilot.
2. Send notifications to the inbox that should receive applications.
3. Put that form URL in `APPLICATION_ENDPOINT` in `purpose-over-comfort/index.html`.
4. Leave `PLAUSIBLE_DOMAIN` empty until a Plausible site exists. Then set it to the site domain Plausible is tracking.

The page confirms success only when that endpoint returns a success response.

## Free plan limits

- **50 submissions / month** per account (shared across forms on free tier — enough to start)
