# Lions Motorsport website starter

A responsive, no-build static homepage for **Lions Motorsport — Loyola Marymount University Formula SAE**.

The information hierarchy is inspired by strong collegiate motorsport sites: an immersive vehicle hero, team impact metrics, engineering systems, development process, partner value, and recruitment. The visual design and vector assets are original to this starter and use Lions Motorsport's red, navy, light-blue, and white identity.

## Project structure

```text
lions-motorsport/
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    ├── build-system.svg
    ├── car-blueprint.svg
    ├── fsae-car.svg
    ├── lions-mark.svg
    └── lions-wordmark.svg
```

## Preview locally

No package installation is required.

```bash
cd lions-motorsport
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## GitHub Pages

This starter lives in the `/lions-motorsport/` folder of the existing `jet2sfo/jake.e.torres.github.io` repository. After the feature branch is merged into `main`, GitHub Pages should serve it at:

```text
https://jet2sfo.github.io/lions-motorsport/
```

The root personal website remains untouched.

## First edits to make

1. Replace the starter SVG wordmark with the team's final approved logo.
2. Replace the workshop illustration with optimized team photography.
3. Confirm the team email, social profiles, and direct LEO organization URL.
4. Replace sponsor placeholders only after each partner approves public logo usage.
5. Add verified vehicle specifications when the team is ready to publish them.
6. Add a 1200 × 630 social preview image and an `og:image` tag.

## Where to edit

- Page content and section order: `index.html`
- Colors, layout, animation, and responsive rules: `styles.css`
- Mobile navigation, sticky header, reveal animation, and current year: `script.js`
- Starter illustrations: `assets/*.svg`

The main colors are CSS variables at the top of `styles.css`:

```css
--black: #05070b;
--navy: #0d1b2a;
--red: #df1f2d;
--blue: #80c6ec;
--paper: #f3f2ed;
```

## Accessibility included

- Semantic sections and heading hierarchy
- Keyboard-accessible mobile menu
- Skip-navigation link
- Visible focus states
- Alternative text for images
- Reduced-motion support
- Responsive layout for phones through wide displays

## Recommended next pages

- `team.html` — leadership and subteam profiles
- `car.html` — current and past vehicle development
- `partners.html` — sponsorship levels and benefits
- `news.html` — build updates and competition recaps
- `contact.html` — inquiry form and official links

## Content note

Review team metrics and public claims at the beginning of each season. Avoid publishing performance numbers, sponsor logos, event dates, or member information until they are verified and approved.
