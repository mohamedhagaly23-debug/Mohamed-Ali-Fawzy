# Mohamed Ali Fawzy Ali — Data Analyst Portfolio

Production-ready personal portfolio website. Premium dark theme, fully responsive,
with project case-study modals, services & pricing, and a working contact flow.

## Stack
- Semantic HTML5
- Custom CSS3 (no framework dependency — fast & lightweight)
- Vanilla JavaScript (no build step required)

## Structure
```
mohamed-ali-portfolio/
├── index.html          # Single-page site (all sections)
├── css/style.css       # Design system, layout, animations, responsive rules
├── js/main.js          # Structured SKILLS + PROJECTS data, rendering, modal, nav
└── images/             # Profile photo + dashboard screenshots
```

## Edit content
All projects and skills live in the `PROJECTS` and `SKILLS` arrays at the top of
`js/main.js` — add, remove or edit entries there; the UI updates automatically.

## Run locally
Just open `index.html` in a browser, or serve the folder:
```bash
npx serve .
```

## Deploy to Vercel (recommended)
No build step is needed — Vercel serves this as a static site.

**Option A — Vercel CLI:**
```bash
cd mohamed-ali-portfolio
npx vercel        # preview deployment
npx vercel --prod # production deployment
```

**Option B — Dashboard:**
1. Push this folder to a GitHub repository.
2. Go to https://vercel.com/new and import the repository.
3. Framework preset: **Other** (no build command, output directory = project root).
4. Deploy — you get a URL like `https://portfolio-mohamed-ali.vercel.app`.

## Contact form
The form validates input and opens the visitor's email client pre-filled to
`mohamedhagaly23@gmail.com`. To make it fully backend-driven, point the form's
submit handler in `js/main.js` to any form API (Formspree, EmailJS, or your own endpoint).
