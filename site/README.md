# Treehouse 28-Day AI Bootcamp — Landing Page

A production implementation of the `AI Bootcamp Landing` design exported from Claude Design,
rebuilt as a self-contained static site (no build step, deploys anywhere).

## Run it

Open `index.html` directly, or serve the folder:

```bash
cd site
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Files

| File | Purpose |
|------|---------|
| `index.html` | The full long-form page — all 14 sections plus header, sticky bar, and footer. |
| `styles.css` | Treehouse design-system tokens (Quicksand + JetBrains Mono, green/blue/yellow/ink palette), component classes (`.btn`, `.tag`, `.card`), and every section's layout. Fully responsive. |
| `main.js` | Three interactions: the sticky CTA bar (slides in past ~12% scroll), the generated 28-day color strip, and the "Who this is for" expanding photo slider. |
| `assets/logo/` | Treehouse mark + wordmark SVGs. |

## Notes

- **Persona photos** load from the same Unsplash URLs as the prototype, so the slider needs
  network access to show images (the cards degrade to a dark tile offline). Swap the `src`
  values in `main.js` to use local assets instead.
- **Headline** ships variant A ("Go from 'I don't get AI'…"), the prototype's default.
  Variants B and C from the copy doc can be dropped in on the hero `<h1>`.
- The FAQ uses native `<details>` accordions and works without JavaScript.
