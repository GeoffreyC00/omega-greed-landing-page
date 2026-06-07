# How to Build the Starter Kit PDFs

You have **two paths**. Pick the one that fits you.

---

## Path A — Export from browser (fastest · recommended)

Pre-built, OmegaGreed-branded HTML files are in the **`print/`** folder.

### Steps (Mac)

1. Open each file in **Chrome** (double-click or drag into browser):

   | Open this file | Save PDF as |
   |----------------|-------------|
   | `print/01-starter-kit.html` | `01-Motorcycle-Content-Starter-Kit.pdf` |
   | `print/02-shot-list.html` | `02-Shot-List-Checklist.pdf` |
   | `print/03-road-trip-checklist.html` | `03-Road-Trip-Checklist.pdf` |
   | `print/04-50-content-ideas.html` | `04-50-Content-Ideas.pdf` |
   | `print/05-gear-setup-guide.html` | `05-Gear-Setup-Guide.pdf` |
   | `print/06-folder-structure.html` | `06-Folder-Structure-Template.pdf` |

2. Press **Cmd + P** (Print)

3. Destination: **Save as PDF**

4. **Important settings:**
   - Paper size: **Letter**
   - Margins: **Default**
   - ✅ **Background graphics** ON (keeps dark theme + red accents)
   - Scale: **100%**

5. Save all 6 PDFs into one folder.

6. Optional: ZIP them for Gumroad/Squarespace upload.

**Logo note:** Files load `assets/logo.png` from the repo. Open HTML from the repo folder so the logo appears. If logo is missing, print anyway — or add logo in Canva later.

---

## Path B — Build in Canva (more customizable)

Use if you want to add photos, change layouts, or match a specific Canva template.

### Canva setup

1. Go to [canva.com](https://canva.com) → **Create a design** → **Doc** or **US Letter (Presentation)**

2. **Brand kit** (save once):
   - Background: `#070707`
   - Text: `#F7F7F5`
   - Muted text: `#A3A3A3`
   - Accent: `#C41E1E`
   - Headline font: **Bebas Neue** (or Oswald / Anton if unavailable)
   - Body font: **Inter** (or Montserrat)

3. **Page template** (reuse on every page):
   - Dark full-bleed background
   - Small red line or “OMEGAGREED” eyebrow top-left
   - Bebas headline
   - Inter body (gray)
   - Footer: `omegagreed.com · Page X`

4. **Copy source:** Paste text section-by-section from `canva/*.md` files  
   OR open the HTML files in a browser and copy from each “page” as reference.

5. **Cover page:** Logo + title + subtitle + your name (see `01-motorcycle-content-starter-kit.md` PAGE 1)

6. **Checklist PDFs:** Use checkbox elements or ☐ character + list items

7. **Export:** Download → **PDF Print** (best quality)

### Suggested page counts

| PDF | Pages (HTML reference) |
|-----|------------------------|
| Main starter kit | 14 |
| Shot list | 5 |
| Road trip | 4 |
| 50 ideas | 5 |
| Gear guide | 4 |
| Folder template | 4 |

---

## After PDFs are ready

1. Upload all 6 to **Gumroad** or **Squarespace Digital Product**
2. Price: **$27**
3. Paste checkout URL into `motorcycle-content-starter-kit/index.html`
4. Test buy + download on phone and desktop

---

## Optional upgrades (later)

- [ ] Add 2–3 motorcycle/camera photos to main PDF in Canva
- [ ] Professional cover mockup for sales page (replace emoji on landing page)
- [ ] Single ZIP: `OmegaGreed-Starter-Kit.zip` containing all PDFs

---

## File map

```
products/motorcycle-content-starter-kit/
├── BUILD-GUIDE.md          ← this file
├── ASSETS-CHECKLIST.md     ← launch checklist
├── canva/                  ← raw copy (paste into Canva)
└── print/                  ← open in Chrome → Save as PDF
    ├── print.css
    ├── 01-starter-kit.html
    ├── 02-shot-list.html
    ├── 03-road-trip-checklist.html
    ├── 04-50-content-ideas.html
    ├── 05-gear-setup-guide.html
    └── 06-folder-structure.html
```
