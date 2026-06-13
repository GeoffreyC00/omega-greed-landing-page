# Motorcycle Content Starter Kit — Assets & Launch Checklist

Use this list before you go live with sales and delivery.

---

## Landing page (done in repo)

- [x] Sales page at `join.omegagreed.com/motorcycle-content-starter-kit/`
- [x] **Checkout URL** — Gumroad `https://omegagreed.gumroad.com/l/rdfrl` (wired in `motorcycle-content-starter-kit/index.html`)
- [x] **Newsletter** — Gumroad `https://omegagreed.gumroad.com/subscribe` (join list CTAs site-wide)
- [ ] Test purchase flow end-to-end
- [ ] Link from omegagreed.com (Squarespace nav or button)

---

## Product mockup / visuals (you create)

- [ ] **Hero product mockup** — PDF stack or tablet showing kit cover (replace emoji placeholder on page)
- [ ] **PDF cover design** — Canva, dark OmegaGreed branding for all 6 PDFs
- [ ] **Optional:** 1-minute Loom walkthrough GIF for sales page
- [ ] **Optional:** Social share image (1200×630) for link previews — add `<meta property="og:image">` to index.html

---

## Canva PDFs (copy ready in repo)

**Fastest path:** Open `products/motorcycle-content-starter-kit/print/*.html` in Chrome → Print → Save as PDF (see **BUILD-GUIDE.md**).

**Canva path:** Copy from `products/motorcycle-content-starter-kit/canva/`:

| File | Deliverable |
|------|-------------|
| `01-motorcycle-content-starter-kit.md` | Main PDF (~14 pages) |
| `02-shot-list-checklist.md` | Shot list checklist |
| `03-road-trip-creator-checklist.md` | Road trip checklist |
| `04-50-motorcycle-content-ideas.md` | 50 ideas |
| `05-gear-setup-guide.md` | Gear guide |
| `06-folder-structure-template.md` | Folder template |

- [ ] Paste each into Canva (US Letter or A4)
- [ ] Export all as **PDF**
- [ ] Optional: also export **print-friendly** versions

---

## Delivery setup (you configure)

- [ ] Choose platform: **Gumroad** (easiest), Lemon Squeezy, Stripe + download, or Payhip
- [ ] Upload all 6 PDFs as one product bundle ($27)
- [ ] Set product name: **OmegaGreed Motorcycle Content Starter Kit**
- [ ] Confirmation email with download link
- [ ] Test download on phone + desktop

---

## Email & marketing

- [x] Newsletter opt-in wired (Formspree `mjgzzjgz`)
- [ ] Optional: automated email sequence after purchase (welcome + link to filming gear page)
- [ ] Announce on YouTube / Instagram when live
- [ ] Pin link in video descriptions

---

## Legal / trust

- [ ] Affiliate disclosure on filming gear page (already on gear page)
- [ ] Simple refund policy on checkout platform (digital products — e.g. 7-day if not downloaded)
- [ ] “Not coaching” positioning — already on sales page; keep in checkout description

---

## Repo files reference

| Path | Purpose |
|------|---------|
| `motorcycle-content-starter-kit/index.html` | Live sales page |
| `products/motorcycle-content-starter-kit/canva/*.md` | Canva copy |
| `products/motorcycle-content-starter-kit/ASSETS-CHECKLIST.md` | This file |

---

## Quick launch order

1. Build 6 PDFs in Canva from markdown copy  
2. Upload bundle to Gumroad (or chosen platform) at $27  
3. Paste checkout URL into landing page  
4. Push to GitHub (if not already)  
5. Test buy + download  
6. Add link on omegagreed.com  
7. Announce

---

**Live URL after deploy:** https://join.omegagreed.com/motorcycle-content-starter-kit/
