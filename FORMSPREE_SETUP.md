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
| `/purpose-over-comfort/` | `xgakwvvo` | Private mentorship applications |

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

**Status:** Connected — `https://formspree.io/f/xgakwvvo` (“Private mentorship”) in `APPLICATION_ENDPOINT`.

Do not reuse `mjgzzjgz` or `xqejjdpv`. Those forms are the newsletter and partnership inbox.

The page confirms success only when that endpoint returns a success response. `PLAUSIBLE_DOMAIN` stays empty until a Plausible site exists. The notification inbox is set in the Formspree dashboard for this form.

## Free plan limits

- **50 submissions / month** per account (shared across forms on free tier — enough to start)
