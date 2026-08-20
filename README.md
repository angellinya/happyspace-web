# happyspace

Marketing site for happyspace — psikoloji, nörobilim ve farkındalık temelli danışmanlık, mindfulness ve inziva alanı. Built with Vite + React, styled to match the happyspace brand (Libre Baskerville / Almarai, navy + pink palette), with a live Calendly integration for booking.

## Pages

- `/` — Home
- `/hakkimizda` — About (founder bios)
- `/hizmetler` — Services
- `/club` — Club (coming soon)
- `/iletisim` — Contact (with inline Calendly booking)
- `/workshop` — Yaz Öncesi Reset workshop

Routing uses `HashRouter` (URLs look like `/#/hakkimizda`) so the site works unmodified on GitHub Pages without any server-side rewrite rules.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
npm run preview # serve the production build locally
```

`vite.config.js` uses `base: './'` (relative asset paths), so the build works from any subpath — a GitHub Pages project URL, a custom domain, or a Docker container root.

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. In the repo settings, go to **Pages** and set the source to **GitHub Actions**.
3. Push to `main` — `.github/workflows/deploy.yml` builds and deploys automatically.

No further config is needed (no `base` path to hardcode, thanks to the relative build).

## Run with Docker

```bash
docker build -t happyspace-web .
docker run -p 8080:80 happyspace-web
```

Then open http://localhost:8080.

## Calendly

The booking link lives in `src/siteConfig.js` (`CALENDLY_URL`). The nav "Randevu al" button and service page buttons open it as a popup; the Contact page embeds it inline.

## Content notes

- Home, Hakkımızda, İletişim, and Workshop content is copied verbatim from the live site.
- The Hizmetler page's three categories (Bireysel Yolculuklar / Grup Deneyimleri / İnziva ve Retreatler) reuse the real service descriptions from the homepage — the live site's `/bireysel`, `/grup`, `/inziva` sub-pages still had unpublished Squarespace placeholder text at the time this was built.
- The Club page is a lightweight "coming soon" page for the same reason — the live Club page currently shows unfinished template content (a placeholder retreat).

Update `src/siteConfig.js`, the page components in `src/pages/`, and the images in `public/images/` as the real content is finalized.
