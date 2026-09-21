# Imane Elkssimi — Portfolio Website

A premium, recruiter-facing portfolio for an Industrial Engineering student, built as a fast, dependency-free website (plain HTML, CSS and JavaScript — no build step, no framework to install).

This README assumes no prior experience with web development.

---

## 1. What's in this project

```
portfolio/
├── index.html              → the page structure (sections, layout)
├── styles.css               → all visual design (dark palette, fonts, spacing)
├── main.js                  → renders your content and handles interactions
├── data.js                  → ⭐ YOUR CONTENT LIVES HERE — edit this file (has an "en" and "fr" version of everything)
├── strings.js                → menu labels, buttons, section titles in English and French
├── images/
│   ├── profile/                        → your portrait
│   ├── logos/                          → software/tool logos used in the marquee
│   ├── experience/
│   │   ├── azura/                       → put AZURA internship photos, logo, report here
│   │   ├── sma/                         → put SMA internship photos, logo, report here
│   │   ├── leoni-supply-chain/          → put LEONI Supply Chain photos, logo, report here
│   │   ├── vetcam/                       → VETCAM application screenshots (already filled)
│   │   └── leoni-quality/                → put LEONI Quality (8D) photos, logo, report here
│   └── projects/
│       ├── monte-carlo/                 → Monte Carlo project images (optional)
│       ├── weather-app/                 → Weather app screenshot (already filled)
│       ├── odoo/                        → Odoo apps-page screenshot (already filled)
│       └── srp/                         → reserved for extra SRP photos if you add any later
├── interactive/              → the SRP project's 3 interactive HTML demos (3D viewer, simulation, showcase)
├── code/                     → downloadable project source code (Monte Carlo & Weather App notebooks)
├── cv/                       → your CV PDF
├── certificates/             → your certificate PDFs
└── README.md                 → this file
```

**Adding a photo to any experience or project takes two steps:** drop the image file into its folder above, then add its path to that item's `images` array in `data.js`. Until you add photos, the site shows an elegant "Photos coming soon" placeholder for that gallery — nothing breaks.

**The only file you'll usually need to touch is `data.js`.** It contains your name, bio, experiences, projects, certifications and skills as plain text — no HTML or code knowledge required to edit it.

---

## 2. Running the website on your computer

### The easiest way (no terminal, no typing commands)
In the unzipped folder, double-click **"OUVRIR LE SITE (Windows).bat"** (or **"OUVRIR LE SITE (Mac).command"** on a Mac). It automatically starts a local server *and* opens the site in your browser at the correct address — you never have to type a port number or a command yourself. Keep the black window that appears open while you're browsing the site; closing it stops the server. This is the recommended way to preview the site and avoids the "localhost refused to connect" error entirely.

If double-clicking the `.bat` file shows a Windows security warning ("Windows protected your PC"), click **"More info"** then **"Run anyway"** — this happens because the file was downloaded from the internet, not because anything is wrong with it.

### The manual way, step by step
### Step 1 — Install a code editor
Download and install [Visual Studio Code](https://code.visualstudio.com/) (free).

### Step 2 — Install Node.js
Download and install [Node.js](https://nodejs.org/) (choose the LTS version). This gives you the `npx` command used below to preview the site.

### Step 3 — Open the project
Unzip the project folder, then in VS Code: **File → Open Folder…** and select the `portfolio` folder.

### Step 4 — Open the terminal
In VS Code: **Terminal → New Terminal**.

### Step 5 — Start a local preview
This project has no build step, so you don't need `npm install`. Just run:

```
npx serve .
```

### Step 6 — View it in your browser
The terminal will print a local address, usually:

```
http://localhost:3000
```

Open that link in your browser. Every time you save a change to a file, refresh the page to see it.

> Alternative: if you have Python installed, `python3 -m http.server 3000` works the same way.

### ✅ The PDF issue is now fixed (here's what actually happened)

In an earlier version of this project, the CV and certificate files in `cv/` and `certificates/` were not actually valid PDF files — a data-handling issue meant they were corrupted at the source, before I even started building the site. That's why they never opened, in any version, no matter how the site was hosted. It had nothing to do with your code, your browser, or how you opened the page — I'm sorry for the earlier wrong diagnosis (blaming `file://`).

I've now rebuilt all 5 files (your CV and 4 certificates) as genuine, verified PDF documents from the original page images, and confirmed each one opens correctly. If you ever replace these with your own newer versions, just make sure the file you're uploading is a real PDF — most PDF viewers (or Chrome, via "Print → Save as PDF" from the original document) will confirm this for you.

### If a link ever "does nothing" for a different reason

Now that the files are genuinely valid, the most common cause going forward is simply testing with a very strict local setup. The safest way to preview the site is still: run `npx serve .` (Step 5 above) and open the `http://localhost:3000` link, rather than double-clicking `index.html` directly. This applies to any future PDF or file you add too.

---

## 3. The English / French language switch

Two clear buttons — "EN" and "FR" — sit in the top-right of the menu, with a small "Choose your language" hint next to them so it's obvious what they do. Clicking either one switches the whole page instantly, without reloading. The site always **defaults to English** for a new visitor; if someone switches to French, that choice is remembered on their device (via their browser's local storage) so it stays French if they come back.

This works because your content is written **twice** — once under `SITE_DATA.en` and once under `SITE_DATA.fr` in `data.js`, plus a matching pair in `strings.js` for menu labels, section titles and button text. Company names, dates, photo paths, PDF/code file paths and standard method acronyms (DMAIC, 8D, SIPOC, ISO 50001…) are intentionally the *same* in both — only the descriptive sentences are translated.

**To edit content in one language only:** open `data.js`, find the `en: {` or `fr: {` block, and edit inside it as normal — the other language is untouched.

**If you add a brand-new experience or project:** remember to add it to **both** the `en` and `fr` blocks in `data.js`, using the same `id`, `date`, image paths, and file paths in both — only translate the descriptive fields (`title`, `summary`, `context`, `objective`, `steps[].text`, `contribution`, `learned`, etc.). If you only add it to one language, it will simply be missing when a visitor is browsing in the other language, rather than causing an error.

## 4. How to modify my portfolio

Everything below is a change to **`data.js`** unless stated otherwise. Open the file, find the labelled block, edit the text between the quotation marks, and save.

| I want to change… | Edit this |
|---|---|
| My name, title, email, LinkedIn, location | `profile` block at the top of `data.js` |
| My "About Me" story | `profile.about` (an array of paragraphs) |
| My professional strengths | `profile.strengths` |
| Education | `profile.education` |
| An experience's description, methods, steps or photos | `experiences` array — find the entry by `id` (e.g. `"azura"`, `"vetcam"`, `"leoni-quality"`) |
| An academic project | `academicProjects` array (Monte Carlo, Weather App, Security Robot, Odoo) |
| Certifications | `certifications` array |
| The Activities carousel (FSF, BTP Forum, caravans) | `activities` array in `data.js` (one entry per activity, EN and FR) |
| Core competency tags shown in About | `skills` object |
| The scrolling logo strip below About | `tools` object |
| My photo | Replace the file at `images/profile/imane-portrait-cutout-v5.png` (keep the same filename, or update the path in `profile.photo`) |
| My CV | Replace the files at `cv/CV_Imane_Elkssimi_EN.pdf` and `cv/CV_Imane_Elkssimi_FR.pdf` (each language downloads its own file via `profile.cv`) |
| A certificate file | Replace the matching file in `certificates/`, or update the `file` path in the `certifications` array |
| Colors | Open `styles.css` and edit the values inside `:root { ... }` at the top of the file (e.g. `--accent: #A6402F;`) |
| Fonts | In `index.html`, change the Google Fonts link and the `font-family` in `styles.css` |
| Section order on the homepage | Reorder the `<section>` blocks in `index.html` |

### Adding photos to an experience or a project
1. Put the image file inside the matching folder (see the file map in Section 1), e.g. `images/experience/azura/photo-1.jpg`.
2. Open `data.js`, find that experience or project by its `id`, and add the path to its `images` array — **up to 3 photos**:
   ```js
   images: [
     "images/experience/azura/photo-1.jpg",
     "images/experience/azura/photo-2.jpg"
   ],
   ```
3. For experiences, also add a matching `imageCaptions` array (same order, one caption per photo).

**Exactly where to add each internship's photos in `data.js`:**

| Internship | Find this `id` in the `experiences` array | Folder to drop photos in |
|---|---|---|
| AZURA | `"azura"` | `images/experience/azura/` |
| SMA | `"sma"` | `images/experience/sma/` |
| LEONI Supply Chain | `"leoni-sc"` | `images/experience/leoni-supply-chain/` |
| VETCAM | `"vetcam"` (already has 4 screenshots) | `images/experience/vetcam/` |
| LEONI Quality (8D) | `"leoni-quality"` | `images/experience/leoni-quality/` |

With 2 or more photos, the homepage card automatically shows them as a **single rotating photo** that crossfades to the next one every ~6 seconds (dots below it show which one is active); clicking it opens the full gallery in the detail view. With 0 or 1 photo it just displays normally — nothing breaks either way.

### Adding a company logo to an experience
Put the logo file in the same folder as that experience's photos, then set its `companyLogo` field:
```js
companyLogo: "images/experience/azura/azura-logo.png",
```
It will appear as a small icon next to the company name on that experience's card. Leave it as `""` (the default) to show no logo.

### Adding a downloadable internship report
Put the PDF in the same folder, then set that experience's `report` field:
```js
report: "images/experience/azura/rapport-azura.pdf",
```
A "Download internship report" link will appear automatically inside that experience's detail view. Leave it as `null` to hide the link.

### Adding source code to a project
`Monte Carlo` and `Weather Forecast App` already have your notebooks linked (`code/monte-carlo-simulation.ipynb` and `code/weather-app-source.ipynb` — replace either file to update it, keeping the same filename, or point `sourceCode` in `academicProjects` at a new path). To add source code to another project, put the file in `code/` and add a `sourceCode` field to that project's entry in `data.js`:
```js
sourceCode: "code/your-file.ipynb",
```
A "Download source code" link then appears automatically in that project's detail view.

### Adding a new experience later
1. Open `data.js`, copy one existing object inside the `experiences` array (including the surrounding `{ ... }`), and paste it as a new entry.
2. Update its `id`, `company`, `department`, `date`, `role`, `theme`, `title`, `summary`, `context`, `objective`, `methodology`, `steps`, `contribution`, `learned` and `imageFolder`.
3. It will automatically appear in the Professional Experience timeline in the order you place it in the array. Set `"featured": true` if you want it to appear with the larger, highlighted card style.

### Editing the Activities section
Each activity is **one card** in the carousel. Its photos live in `images/activities/<activity-id>/` and are listed in the entry's `images` array — they cross-fade inside the same card and appear in the gallery of its popup. For each image, `fit: "cover"` fills the card (use `pos` to choose the focus point, e.g. `"50% 40%"`), and `fit: "contain"` shows the whole photo over a soft blurred background (best for landscape photos). The order of the cards is the order of the `activities` array.

### Adding a new academic project
Copy an object inside the `academicProjects` array in `data.js`, fill in `title`, `summary`, `problem`, `approach`, `technologies`, `concepts` and `learned`. Each project shows as a poster-style card (photo background, title and short blurb over it) — control its cover image with the `cover` field:
```js
cover: { type: "image", file: "images/projects/your-project/cover.jpg" },
```
If you don't have a photo for a project, just leave `cover` out — it will automatically show a subtle abstract pattern instead of a broken image (the `style` field, e.g. `"simulation"`, `"data"`, `"erp"`, controls that pattern's color). Add `"noGallery": true` to skip the detailed photo gallery inside the project's popup if you have no additional photos for it.

Clicking any project card opens its full details, and from there **"← Previous" / "Next →" buttons** let visitors browse straight through all your projects without closing the window — you don't need to configure this, it's automatic based on the order of the `academicProjects` array.

### Adding interactive demos to a project (like the SRP project)
The SRP project links out to three interactive HTML files you provided (a live 3D viewer, a logistics simulation, and a product showcase), stored in the `interactive/` folder. Its card cover is even a live, non-interactive preview of the 3D viewer itself (`cover: { type: "iframe", file: "..." }`).

To add the same kind of interactive demo to another project:
1. Put the self-contained HTML file in `interactive/`.
2. Add an `interactiveLinks` array to that project:
   ```js
   interactiveLinks: [
     { label: "Open 3D Viewer", file: "interactive/your-file.html" }
   ],
   ```
   Each one renders as a button that opens the demo in a new tab.
3. Optionally use `cover: { type: "iframe", file: "interactive/your-file.html" }` to show a live preview as the card's cover image instead of a static photo.

### Adding a real logo for a tool
Python, Java, SAP, Odoo, Excel, Power BI, MS Project and CATIA already show their real, official-color logos — these are inlined or referenced directly in `main.js` under the `TOOL_LOGOS` object near the top of the file, no further action needed. Anything else in the `tools` list without an entry there just shows a plain two-letter badge. To add a new one:
```js
"Some Tool": { img: "images/logos/some-tool.png", chip: "light" },
```
Drop the image in `images/logos/`, add the line above, and set `chip: "light"` only if the logo has dark text/lines that would be hard to read directly on the dark background (as with CATIA) — omit it for logos that already have their own colored background (like Excel or Power BI).

---

## 5. Setting up the contact form

The contact form uses [FormSubmit](https://formsubmit.co), a free service that emails you every form submission — no backend server and no account needed. It is already pointed at `imaneelkssimi18@gmail.com` in `main.js`:

```js
const FORM_ENDPOINT = "https://formsubmit.co/ajax/imaneelkssimi18@gmail.com";
```

**One-time activation (required):** once the website is online (Section 6), send yourself a test message through the form. FormSubmit emails an **activation link** to that address (check Spam/Promotions too). Click it once — after that, every message sent through the form arrives in your inbox. Until it is activated, messages are not delivered and the form shows an error message with your email address.

To receive messages at a different address, change the email in `FORM_ENDPOINT`.

---

## 6. Deploying the website (making it public)

### Option A — Vercel (recommended, free)
1. Create a free account at [vercel.com](https://vercel.com).
2. Create a free account at [github.com](https://github.com) if you don't have one.
3. Create a new GitHub repository and upload this project folder to it (GitHub's website has an "Add file → Upload files" option — no command line required).
4. In Vercel: **Add New… → Project**, connect your GitHub account, and select the repository.
5. Leave the default settings (this is a static site, so no build command is needed) and click **Deploy**.
6. Vercel gives you a live URL (e.g. `imane-portfolio.vercel.app`) within a minute.

### Option B — Any static host
Because this site has no build step, you can also deploy it by dragging the whole folder into [Netlify Drop](https://app.netlify.com/drop), or uploading it to any basic web host.

### Connecting a custom domain (e.g. imaneelkssimi.com)
Once deployed on Vercel: **Project → Settings → Domains**, add your domain, then follow Vercel's instructions to update your domain's DNS settings with your domain registrar. You don't need to own a domain to use the free `.vercel.app` URL.

---

## 7. The update workflow, once live

```
Edit data.js (or any file)
        ↓
Preview locally (npx serve .)
        ↓
Upload the changed files to GitHub
        ↓
Vercel redeploys automatically
        ↓
Your live website is updated
```

If your GitHub repository is connected to Vercel, every upload to GitHub triggers a new deployment automatically — you don't need to repeat the Vercel setup steps.

---

## 8. Technology used

- **HTML5** for structure and accessibility (semantic sections, alt text, focus states)
- **CSS3** for styling — a custom design system, no framework dependency
- **Vanilla JavaScript** to render your content from `data.js` and handle navigation, the accordions and the contact form
- **FormSubmit** for the contact form email delivery
- No React, no Next.js, no `npm install`, no build step — every file can be opened and understood on its own, and any static host can serve it as-is.

This was a deliberate choice over a React/Next.js stack: it gives you a site that is just as fast and just as easy to deploy, but that you can fully understand and edit without learning a JavaScript framework first. If you outgrow this later and want to migrate to Next.js, `data.js` is already structured close to what a Next.js `/data` folder would look like.

---

## 9. Notes on content accuracy

- Internship dates use month/year only, taken from the CV, per your instruction. The VETCAM internship's exact month is marked "to confirm" in `data.js` — update it once you have the exact month.
- The LEONI Quality (8D) case study intentionally omits the customer name and internal document numbers, since that report may contain confidential information.
- No performance percentages, invented metrics, or unverified claims were added. The SMA energy figures are the only quantitative results shown, taken directly from that internship report.
- Each internship appears exactly once, inside **Professional Experience**. The **Projects** section only contains academic/personal work (Monte Carlo, Weather App, Security Robot, Odoo) — nothing is duplicated between the two sections.
- The Baccalaureate and a dedicated Languages section were intentionally removed, and Education now lives together with Certifications in one section (titled "Certifications") rather than as two separate sections.
- Location ("Agadir, Morocco") has been removed from Contact per your request.
- Every mention of actively searching for a PFE/internship has been removed from the copy (hero, about, contact).
- The About section text, Areas of Focus list, and the "I don't start with the solution / I start with the process" transition are your latest wording, unchanged in meaning.
- The Skills & Technologies section has been removed entirely per your request; the tools/software logo strip now sits directly under About instead.
- The Bluetooth-Controlled Security Robot project has been replaced with the Smart Rolling Platform (SRP) project, using your provided description and your three interactive HTML files.
- Photo galleries (both the rotating internship photo and the project galleries) use a standardized, cropped frame so every photo has the same clean size regardless of its original dimensions — click any photo to see it uncropped in the full-size lightbox view.
- Project cards now use a fixed-height photo band at the top with the title/description in a solid panel below it (not overlaid on the photo), so the text stays fully legible no matter how bright or busy the underlying image is.
- The About section now includes a large decorative quotation mark, a pulled-out highlight line, and a small icon next to each Area of Focus — purely visual polish, no change to your wording.
- The CV and all 4 certificate PDFs were rebuilt from scratch as valid PDF files (see Section 2) — they were silently corrupted before and are now fully working.
- The Certifications section's on-page heading now reads "Education & Certifications" (it contains your education entry too), while the navigation menu link stays as the shorter "Certifications" — this was swapped from an earlier version per your request.
- The entire site is now bilingual (English default, French available via the toggle in the nav) — see Section 3.
- Fixed a real bug: `sma/1.jpg` and `SMA_logo.jpg` were saved as CMYK-mode JPEGs (a common Photoshop/InDesign export setting), which browsers cannot display — that's why that gallery photo showed up blank. Both were converted to standard RGB and now display correctly.
- The hero portrait's blue background has been removed and replaced with the site's own dark background color, so the photo blends directly into the page instead of sitting in a visible box.
- The About section's left column is now titled "How I Think" (was "About Me") and the right column "What I Bring" (was "Areas of Focus"), reorganized into 5 numbered categories — the paragraph text itself and the pull-quote wording are unchanged, only the presentation.
- The VETCAM internship date is now confirmed as August 2025 (was "month to confirm").
- Added your "15h — Supply Chain Fundamentals" certificate with the real PDF, replacing the earlier placeholder entry.
- Certification cards now each have a distinct icon and accent color rather than a plain text block.
- The language switch is now two explicit "EN" / "FR" buttons with a "Choose your language" hint, rather than a single ambiguous toggle.

---

## 10. Final checklist before sharing the live link

- [ ] Photo, CV and certificates are your latest versions
- [ ] Email and LinkedIn links are correct
- [ ] VETCAM internship month is confirmed and updated
- [ ] Contact form activated with a test message (Section 5)
- [ ] Tested on desktop, tablet and mobile widths
- [ ] Deployed and the live URL opens correctly
