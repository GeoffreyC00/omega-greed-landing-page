# OmegaGreed — join.omegagreed.com

Static landing pages for **OmegaGreed** (creator brand by Geoffrey Crawford). Hosted on **GitHub Pages** with a custom subdomain. Main site **omegagreed.com** stays on **Squarespace**.

## Live URLs

| Page | URL |
|------|-----|
| Newsletter signup | https://join.omegagreed.com/ |
| Media kit | https://join.omegagreed.com/media-kit/ |
| CFMOTO 675SS build list | https://join.omegagreed.com/cfmoto-build-list.html |

GitHub Pages default (backup): https://geoffreyc00.github.io/omega-greed-landing-page/

## Repository

- **GitHub:** https://github.com/GeoffreyC00/omega-greed-landing-page
- **Local path:** `/Users/geoffrey_zeromac/omega-greed-landing-page`
- **Branch:** `main` — push to deploy (~1 minute)

## Hosting & DNS

- **Host:** GitHub Pages (repo Settings → Pages → custom domain)
- **CNAME file:** `join.omegagreed.com` (repo root)
- **DNS:** DreamHost — CNAME `join` → `geoffreyc00.github.io` (nameservers on DreamHost, not Squarespace)
- **HTTPS:** Enforce HTTPS in GitHub Pages settings

## Pages & files

| File | Purpose |
|------|---------|
| `index.html` | Email list signup (primary CTA) |
| `media-kit.html` | Brand / partnership media kit |
| `media-kit/index.html` | Clean URL duplicate of media kit |
| `cfmoto-build-list.html` | CFMOTO 675SS affiliate build list |
| `landing-page.html` | Legacy prototype (ignore) |
| `FORMSPREE_SETUP.md` | Form endpoints & notes |
| `assets/` | Images (logo, hero photos, horror, CFMOTO, etc.) |

## Formspree (live forms)

| Page | Form ID | URL |
|------|---------|-----|
| Newsletter (`index.html`) | `mjgzzjgz` | https://formspree.io/f/mjgzzjgz |
| Media kit contact | `xqejjdpv` | https://formspree.io/f/xqejjdpv |

- Integration: **HTML POST** (no backend; works on static Pages)
- Newsletter: optional — disable per-submission email in Formspree; export CSV for campaigns
- Media kit: partnership inquiries → `geoffreyrcrawford@gmail.com`

## Brand & links

- **Brand name:** OmegaGreed (one word)
- **Main site:** https://www.omegagreed.com/ (Squarespace)
- **YouTube:** https://www.youtube.com/@OmegaGreedAK47
- **Instagram:** https://www.instagram.com/omegagreed
- **Contact:** geoffreyrcrawford@gmail.com

## Design

- Dark premium aesthetic: black background, `#c41e1e` red accents
- Fonts: **Bebas Neue** (headlines) + **Inter** (body)
- Media kit also uses purple accent for **Villains of Horror** sub-brand

## Squarespace (main site)

- Signup / build list / media kit are **not** built in Squarespace — link out to `join.omegagreed.com`
- Old **CFMOTO build list** at `/cfmoto-build-list` → redirect to `https://join.omegagreed.com/cfmoto-build-list.html` (URL mapping or page header script)

## Deploy workflow

```bash
cd /Users/geoffrey_zeromac/omega-greed-landing-page
# edit HTML/CSS
git add -A
git commit -m "Describe change"
git push origin main
```

## Clone on a new machine

```bash
git clone https://github.com/GeoffreyC00/omega-greed-landing-page.git
cd omega-greed-landing-page
```

Open this folder in Cursor to load project rules in `.cursor/rules/`.

## What is not in git

Store separately (password manager / notes):

- Formspree login
- DreamHost / DNS login
- Squarespace login
- GitHub account credentials
- Affiliate program dashboards (eBay Partner Network, Amazon Associates)

---

*Last updated: May 2026 — project considered stable; resume by reading this file and `FORMSPREE_SETUP.md`.*
