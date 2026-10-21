# EAK International School – Admissions Landing Page (2027–28)

Frontend-only assignment for EakPustak Pvt. Ltd. All content, dates, fees and testimonials are fictional.

## Run locally
No build step or install. Either:
- Open `index.html` in any modern browser, or
- Serve the folder: `python3 -m http.server 8000` then visit http://localhost:8000

## Files
- `index.html` – semantic page structure and the enquiry modal
- `style.css` – design tokens, layout, responsive breakpoints (960px, 600px)
- `script.js` – section content (hard-coded data), menu, modal form validation, toast, document checklist

## Technologies
HTML5, CSS3 (Grid, Flexbox, custom properties), vanilla JavaScript. No frameworks.
External assets: Google Fonts (Fraunces, Figtree). Icons are emoji; no images are needed.

## Interactions
Sticky nav with smooth-scroll links and mobile menu; Apply / Visit / Talk buttons open an enquiry modal with validation and a confirmation toast; FAQ uses native `<details>` accordions; document checklist tracks progress.

## Accessibility
Skip link, visible focus states, labelled form fields with error messages, `aria-expanded` on the menu, reduced-motion support.

## Deploy
Push to GitHub and enable GitHub Pages (Settings → Pages → main branch / root), or drag the folder into Netlify.
