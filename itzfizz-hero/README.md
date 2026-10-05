# Itzfizz – Scroll-Driven Hero Section

Next.js 14 (App Router) · React 18 · Tailwind CSS · GSAP + ScrollTrigger · Lenis

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build    # static export to /out
```

## How it works
| Concern | Implementation |
|---|---|
| Intro | GSAP timeline: letter stagger, stats one-by-one, count-up |
| Scroll link | One pinned ScrollTrigger timeline, `scrub: 1.2` (progress based, eased) |
| Smooth scroll | Lenis driven by `gsap.ticker`, synced to ScrollTrigger |
| Parallax | Stars, far/near skyline and road move at different speeds |
| Performance | Only `transform`/`opacity`; `will-change`; no layout reads per scroll |
| Accessibility | `prefers-reduced-motion` handled with `gsap.matchMedia` (static layout, no pin); semantic list for stats; aria-label headline |
| SEO / no-JS | Real stat values and headline are server-rendered; `<noscript>` reveals the hero |
| Hydration safety | Seeded RNG for skyline/stars (identical on server and client) |

## Deploy (GitHub Pages)
Push to `main`, then Settings → Pages → Source: **GitHub Actions**. The workflow builds and publishes.
