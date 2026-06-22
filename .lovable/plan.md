## Heads-up on the stack

Your spec asks for **Next.js 14 (App Router)**, but this project is built on **TanStack Start + Vite + React 19 + Tailwind v4 + shadcn/ui** (Next.js isn't supported here). I'll deliver the exact same site — same design, same animations, same content, same SEO — using the equivalent primitives:

| Spec (Next.js) | What I'll use here |
|---|---|
| App Router `app/page.tsx` | TanStack file routes in `src/routes/` |
| `metadata` export | Route `head()` (title, description, OG) |
| `next/image` | `<img>` with lazy loading + uploaded logo via Lovable Assets |
| Framer Motion | `framer-motion` (works identically) |
| Shadcn/UI | Already installed |
| react-countup, react-type-animation, embla-carousel, tsparticles | Install via bun |

Everything visual/behavioral in your brief is preserved.

## Pages (TanStack routes)

```
src/routes/
  __root.tsx              → Navbar + <Outlet/> + Footer, sitewide meta
  index.tsx               → Home (full spec below)
  about.tsx
  services.tsx
  destinations.tsx
  universities.tsx
  ielts-preparation.tsx
  success-stories.tsx
  contact.tsx
  apply-now.tsx
```
Each route gets its own `head()` with unique title, description, og:title, og:description.

## Design tokens (src/styles.css)

Add semantic tokens (oklch) for the brand palette so no hardcoded colors live in components:
- `--primary` = Deep Navy `#0A1628`
- `--accent` = Gold `#F59E0B`
- `--secondary` = Electric Blue `#3B82F6`
- `--background` light `#F8FAFC`, dark surface `#0F172A`
- `--foreground` `#1E293B`, `--muted-foreground` `#94A3B8`
- gradient + glow shadow tokens for hero orbs and CTA section

## Components

```
src/components/
  navbar/Navbar.tsx              (sticky, blur, mobile slide-down)
  hero/HeroSection.tsx
  hero/FloatingCard.tsx          (student card + visa badge + orbiting flags)
  hero/ParticleBackground.tsx    (tsparticles)
  hero/Typewriter.tsx            (react-type-animation)
  hero/UniversityMarquee.tsx
  stats/StatsSection.tsx         (react-countup + IntersectionObserver)
  services/ServicesGrid.tsx      (6 cards, 3×2, hover lift + gold border)
  destinations/DestinationCard.tsx + DestinationsSection.tsx
  timeline/HowItWorks.tsx        (SVG stroke-dashoffset draw on scroll)
  testimonials/TestimonialsCarousel.tsx (embla, autoplay, pause on hover)
  ielts/IeltsPromo.tsx           (diagonal split + animated band-score bars)
  partners/PartnersMarquee.tsx   (dual-direction infinite scroll)
  cta/FreeConsultationCTA.tsx    (animated gradient + floating emojis)
  footer/Footer.tsx
src/lib/
  animations.ts                  (shared framer-motion variants, fadeUp, stagger, reduced-motion helper)
  data.ts                        (services, destinations, testimonials, partners, stats)
```

## Home page sections (exactly as specified)

1. **Navbar** — sticky, backdrop-blur, border on scroll, gold "Apply Now", animated mobile menu
2. **Hero** — full viewport, navy gradient, tsparticles, animated glowing orbs, staggered left column (badge → H1 + typewriter cycling UK/Australia/Canada/Europe → subheading → 2 CTAs → language badges 🇬🇧/සිංහල/தமிழ்), right column floating student card stack + rotating globe SVG, bouncing scroll indicator, university marquee
3. **Stats** — dark bg, 4 CountUp cards (17+, 10,000+, 98%, 150+), stagger on scroll
4. **Services** — 6-card grid, fade-up stagger, hover lift + gold border + icon animation
5. **Destinations** — UK/AU/CA/DE/FR/NZ/IE/US landmark cards, zoom on hover, wave stagger
6. **How It Works** — 6-step timeline, SVG line draws as you scroll, nodes pop in
7. **Testimonials** — embla autoplay carousel on navy bg, featured video card left
8. **IELTS Promo** — diagonal navy/gold split, animated band-score bars
9. **Partners** — dual-direction infinite marquee, pause on hover
10. **CTA** — animated gradient bg, floating ✈️🎓🌍📚
11. **Footer** — 4 columns, animated socials, "Made with ❤️ for Sri Lankan students"

## Global rules

- All scroll animations via `whileInView` with `viewport: { once: true }`, stagger 0.1, duration 0.6
- `useReducedMotion()` wrapper in `lib/animations.ts` — disables transforms when user prefers reduced motion
- `scroll-behavior: smooth` in styles.css
- Route transitions: `AnimatePresence` fade on `<Outlet/>`
- Mobile-first responsive, sm/md/lg/xl breakpoints
- Logo: uploaded `FMC-LOGO-1-2.png` registered via Lovable Assets, used in navbar + footer

## SEO

- Per-route `head()` with title/description/og:title/og:description/og:url + canonical (leaf only)
- JSON-LD `Organization` in `__root.tsx`; `EducationalOrganization` on home
- Sitewide defaults in `__root.tsx`; no og:image at root (placeholder would hurt previews)

## Packages to install

`framer-motion`, `react-countup`, `react-type-animation`, `embla-carousel-react`, `embla-carousel-autoplay`, `@tsparticles/react`, `@tsparticles/slim`

## Scope for this first pass

I'll build **everything on the Home page in full polish** plus the **Navbar, Footer, design tokens, shared animation lib, and route stubs** for the other 8 pages (with proper `head()` metadata and a styled hero + placeholder content blocks, so navigation works end-to-end and SEO is solid). Full content for /about, /services, /destinations, /universities, /ielts-preparation, /success-stories, /contact, /apply-now can be expanded in a follow-up pass — say the word and I'll flesh each one out to the same depth as Home.

Want me to proceed?