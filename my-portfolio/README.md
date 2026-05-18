# Anthony Olevester Portfolio

A premium single-page React + Vite portfolio positioned for applied AI, robotics, control, embedded, and simulation-heavy roles.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Where to update content

- Main copy and section data live in `src/data/portfolioData.js`.
- Layout and section composition live in `src/App.jsx`.
- Theme and responsive styling live in `src/index.css`.

## Assets

- Research figures and videos live under `public/assets/sim2sim/`.
- Final-year robotics assets live under `public/assets/final-year-project/`.
- Biocon device visuals live under `public/assets/biocon/`.
- Biocon Rising Star Award visuals live under `public/assets/awards/`.
- Resume link points to `public/assets/anthony-olevester-resume.pdf`.

## Notes

- The flagship paper section is wired to the Zenodo publication and related project links.
- Local media paths use Vite's `import.meta.env.BASE_URL`, so GitHub Pages deployment under `/Portfolio/` works.
- This structure is data-driven, so most future updates can be made by editing arrays and strings rather than rewriting JSX.
