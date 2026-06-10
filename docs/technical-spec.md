# Technical Specification — Akash Car Service & Driver Centre

> **Status:** Approved  
> **Last Updated:** 2026-06-09  
> **Maintained by:** Update whenever architecture, dependencies, or technical decisions change.

---

## 1. Tech Stack Recommendation

### Summary

This is a static local business marketing site. The priorities in order are: **local SEO performance**, **mobile load speed**, **lead generation conversion**, and **maintainability**. Every stack choice is made against these priorities.

### Final Stack

| Layer             | Choice                          | Version  | Why                                                                 |
|-------------------|---------------------------------|----------|----------------------------------------------------------------------|
| Language          | TypeScript                      | 5.x      | Type safety catches bugs before runtime; professional standard       |
| Framework         | Next.js (App Router)            | 15.x     | SSG for speed+SEO, file-based routing, built-in image/font opt       |
| Styling           | Tailwind CSS                    | 3.x      | Utility-first, mobile-first, no unused CSS in production             |
| Class utility     | clsx + tailwind-merge           | latest   | Safe conditional class merging without conflicts                     |
| Forms             | React Hook Form + Zod           | latest   | Type-safe form validation with minimal re-renders                    |
| Form resolver     | @hookform/resolvers             | latest   | Connects Zod schemas to React Hook Form                              |
| Email (forms)     | Resend                          | latest   | 3,000 free emails/month, simple API, reliable delivery               |
| Icons             | Lucide React                    | latest   | Tree-shakeable, consistent, lightweight SVG icons                    |
| Fonts             | next/font (Google Fonts)        | built-in | Zero layout shift, self-hosted at build time, no external requests   |
| Images            | next/image                      | built-in | Auto WebP/AVIF conversion, lazy loading, prevents CLS                |
| SEO Metadata      | Next.js Metadata API            | built-in | Type-safe, per-page, handles OG/Twitter cards automatically          |
| Structured Data   | JSON-LD (inline `<script>`)     | —        | Google's preferred format; no library needed                         |
| Sitemap           | Next.js sitemap.ts              | built-in | Auto-generated from route list, zero config                          |
| Robots            | Next.js robots.ts               | built-in | Auto-generated, always in sync with deployment URL                   |
| Deployment        | Vercel                          | —        | Zero-config Next.js, automatic HTTPS, global CDN, free tier          |
| Version Control   | Git                             | —        | Local for now; push to GitHub before Vercel connect                  |
| Package Manager   | npm                             | —        | Ships with Node.js; no tooling complexity                            |

### What Was Considered and Rejected

| Option             | Rejected Because                                                              |
|--------------------|--------------------------------------------------------------------------------|
| ShadCN UI          | Adds Radix + CVA overhead; this site needs 4 simple pages, not a design system library |
| Prisma / Supabase  | No database needed for v1 — all content is static                            |
| Next-Auth          | No user login in v1                                                           |
| Contentful / Sanity| No CMS in v1; content changes are infrequent and can be code deploys          |
| ~~Framer Motion~~  | ~~Animation library adds JS weight~~ — **reversed**: hero requires a choreographed 5-phase animation sequence that CSS transitions cannot orchestrate cleanly. Added in v1 for hero section only (~50 KB gzipped). Net saving vs Three.js geometric prototype: −150 KB. |
| Three.js / R3F     | Installed briefly for a geometric prototype; removed in favour of Framer Motion + SVG approach (−200 KB, better Lighthouse score, no WebGL dependency) |
| Google Maps JS API | Requires API key billing setup; a plain `<iframe>` embed is free and sufficient |
| Formspree / Web3Forms | Third-party dependency; a Route Handler + Resend is clean and keeps us in control |

---

## 2. Architecture Overview

```
┌─────────────────────────────────────────────────────────┐
│                    Browser (Client)                     │
│  Static HTML + CSS + minimal JS (Next.js hydration)     │
└────────────────────┬────────────────────────────────────┘
                     │ HTTP
┌────────────────────▼────────────────────────────────────┐
│                    Vercel CDN Edge                       │
│  Serves pre-built static pages globally                 │
│  No server-side logic — fully static site               │
└─────────────────────────────────────────────────────────┘

All customer contact via tel: and wa.me links — no server-side processing required.
```

**Rendering strategy:** All 5 pages (Home, Services, About, Contact, Privacy) are statically generated at build time (`generateStaticParams` not needed — no dynamic routes). Pages are served as pre-built HTML from the CDN — no server processing per request.

**Exception:** The `/api/contact` route handler runs as a Vercel serverless function only when a form is submitted. It is not a page.

---

## 3. Data Architecture

All business content lives in a single source of truth: `src/lib/constants.ts`. No database, no CMS, no API calls at render time.

### `constants.ts` Shape (planned)

```typescript
// Business identity
export const BUSINESS = {
  name: "Akash Car Service & Driver Centre",
  phone: ["9339865491", "8910068402"],
  whatsapp: "9339865491",
  email: "akashbusinessghosh@gmail.com",
  address: {
    street: "New Barrackpore",
    city: "Kolkata",
    state: "West Bengal",
    pincode: "700133",
    full: "New Barrackpore, Kolkata, West Bengal – 700133",
  },
  hours: "Open 24 Hours, 7 Days a Week",
  serviceArea: "Kolkata & West Bengal",
} as const

// Services list
export const SERVICES: Service[] = [...]

// Navigation links
export const NAV_LINKS: NavLink[] = [...]

// Site metadata
export const SITE = {
  url: "https://[DOMAIN]", // update when domain is confirmed
  ogImage: "/opengraph-image", // generated by src/app/opengraph-image.tsx
} as const
```

### Type definitions (`src/types/`)

```typescript
// src/types/service.ts
export interface Service {
  id: string
  name: string
  description: string
  icon: string        // Lucide icon name
  imageUrl: string    // path under /public/images/services/
}

// src/types/index.ts
export interface NavLink {
  label: string
  href: string
}

export interface ContactFormData {
  name: string
  phone: string
  service: string
  message: string
}
```

---

## 4. Component Architecture

Components are split into four layers. Never import downward (a `ui/` component must not import a `sections/` component).

```
ui/          ← Stateless primitives. No business logic. No direct use of BUSINESS constants.
layout/      ← Header, Footer, FloatingCTA. Imports from ui/ and constants.
sections/    ← Page sections. Imports from ui/, layout/, and constants.
forms/       ← Form components. Imports from ui/ and types/. Calls /api/contact.
```

### Component Inventory

**`src/components/ui/`**
| File            | Purpose                                              |
|-----------------|------------------------------------------------------|
| `Button.tsx`    | Variants: primary (red), secondary (outline), ghost. Sizes: sm, md, lg. |
| `Card.tsx`      | Generic card wrapper with optional hover state       |
| `Badge.tsx`     | Small label pill for service categories              |
| `index.ts`      | Barrel export                                        |

**`src/components/layout/`**
| File              | Purpose                                            |
|-------------------|----------------------------------------------------|
| `Header.tsx`      | Logo, desktop nav, mobile menu trigger             |
| `Footer.tsx`      | 3-column: links, services, contact                 |
| `MobileNav.tsx`   | Slide-in drawer for mobile navigation              |
| `FloatingCTA.tsx` | Sticky bottom bar on mobile — Call + WhatsApp buttons |

**`src/components/sections/`**
| File                 | Page(s)   | Purpose                                      |
|----------------------|-----------|----------------------------------------------|
| `HeroSection.tsx`    | Home      | Full-bleed hero, headline, dual CTAs         |
| `ServicesGrid.tsx`   | Home, Services | Grid of ServiceCard components          |
| `ServiceCard.tsx`    | Home, Services | Individual service card                 |
| `WhyChooseUs.tsx`    | Home      | 3–4 USP points with icons                   |
| `AboutSnippet.tsx`   | Home      | 2–3 sentence intro + link to /about         |
| `CTABanner.tsx`      | All pages | Full-width CTA strip before footer          |
| `ContactSection.tsx` | Contact   | Contact details + Map embed                 |
| `MapEmbed.tsx`       | Contact, Home | Google Maps iframe                      |

**`src/components/forms/`**
| File              | Purpose                                             |
|-------------------|-----------------------------------------------------|
| `ContactForm.tsx` | React Hook Form + Zod, submits to /api/contact      |

---

## 5. Contact Flow

No contact form. All enquiries go through direct channels only.

| Channel   | Implementation                          | Where shown                  |
|-----------|-----------------------------------------|------------------------------|
| Call      | `<a href="tel:+919339865491">`          | Header, hero, contact page, FloatingCTA, footer |
| Call      | `<a href="tel:+918910068402">`          | Contact page, footer         |
| WhatsApp  | `<a href="https://wa.me/919339865491?text=...">`| Header, hero, contact page, FloatingCTA, footer |

This means:
- No API route needed
- No `src/app/api/` directory
- No `src/components/forms/` directory
- No `src/hooks/useContactForm.ts`
- No environment variables required for v1

---

## 6. SEO Implementation

### Metadata (per page)

Defined in each `page.tsx` using the Next.js `Metadata` type:

```typescript
export const metadata: Metadata = {
  title: "...",
  description: "...",
  alternates: { canonical: "https://[domain]/[path]" },
  openGraph: {
    title: "...",
    description: "...",
    url: "...",
    siteName: "Akash Car Service & Driver Centre",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
}
```

### JSON-LD Structured Data

Generated by `src/lib/structured-data.ts` and injected via `<script type="application/ld+json">` in each page.

**Homepage + Contact page:** `LocalBusiness` schema
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Akash Car Service & Driver Centre",
  "telephone": "+919339865491",
  "email": "akashbusinessghosh@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "New Barrackpore",
    "addressLocality": "Kolkata",
    "addressRegion": "West Bengal",
    "postalCode": "700133",
    "addressCountry": "IN"
  },
  "openingHours": "Mo-Su 00:00-23:59",
  "areaServed": "Kolkata, West Bengal"
}
```

**Services page:** `Service` schema per service entry.

### Sitemap & Robots

- `src/app/sitemap.ts` → auto-generates `/sitemap.xml`
- `src/app/robots.ts` → auto-generates `/robots.txt`
- Both update automatically when pages are added.

---

## 7. Performance Strategy

| Concern           | Approach                                                                 |
|-------------------|--------------------------------------------------------------------------|
| Images            | `next/image` — auto WebP/AVIF, lazy load, prevents CLS                  |
| Fonts             | `next/font` — self-hosted at build, no render-blocking external request  |
| JavaScript        | Minimal JS — Next.js only ships what's needed per page                   |
| CSS               | Tailwind purges unused classes at build — CSS bundle < 10KB              |
| Third-party       | No third-party JS in critical path (no chat widget, no heavy analytics)  |
| Maps              | `<iframe>` loaded with `loading="lazy"` — not render-blocking            |
| Static pages      | All pages pre-built — no server wait time per request                    |
| Vercel CDN        | Pages served from edge closest to user                                   |

---

## 8. Configuration Files

### `tsconfig.json` (key settings)
```json
{
  "compilerOptions": {
    "strict": true,
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "paths": { "@/*": ["./src/*"] }
  }
}
```
Path alias `@/` maps to `src/` — use `@/components/...`, `@/lib/...` throughout.

### Tailwind CSS v4 — `globals.css` (replaces `tailwind.config.ts`)

Tailwind v4 uses CSS-based configuration. All theme tokens live in `globals.css` under `@theme {}`. No `tailwind.config.ts` file exists.

```css
@import "tailwindcss";

@theme {
  /* Brand colours */
  --color-brand-red:       #DC2626;
  --color-brand-red-dark:  #B91C1C;
  --color-brand-black:     #0F0F0F;

  /* Font families — CSS variables injected by next/font */
  --font-heading: var(--font-oswald), sans-serif;
  --font-body:    var(--font-inter),  sans-serif;
}
```

Usage in components is identical to v3: `bg-brand-red`, `text-brand-black`, `font-heading`, `font-body`.

### `next.config.ts` (key settings)
```typescript
const config: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
}
```

---

## 9. Dependencies

### Production
```
next
react
react-dom
typescript
tailwindcss   (v4)
clsx
tailwind-merge
lucide-react
framer-motion   (hero animation — ~50 KB gzipped)
```

Note: Tailwind v4 no longer requires `postcss` or `autoprefixer` as separate dependencies — they are bundled.

### Formatting
```
prettier
eslint-config-prettier
```

Added in Phase 0. Prevents formatting noise across all future commits.

> `react-hook-form`, `@hookform/resolvers`, `zod`, and `resend` removed — contact form dropped in favour of WhatsApp and phone only.

### Development Only
```
@types/node
@types/react
@types/react-dom
eslint
eslint-config-next
```

Total production JS budget target: **< 150KB** first load (gzipped). Next.js App Router with SSG typically delivers well under this for a 5-page static site.

---

## 10. Pre-Development Checklist

Before writing a single line of application code, confirm:

- [x] Logo design — **text wordmark placeholder "AKASH" in Oswald Bold, brand-red colour. Real SVG logo to be swapped in post-design (one file change).**
- [x] OG image — **generated via `src/app/opengraph-image.tsx` using Next.js `ImageResponse`. Brand-red background (#DC2626), white business name + "Kolkata, West Bengal" text. No external design tool needed.**
- [x] Favicon — **generated via `src/app/icon.tsx` using Next.js `ImageResponse`. Letter "A" in Oswald Bold, white on brand-red (#DC2626) square background. Covers all sizes automatically. No external tool needed.**
- [x] Service descriptions written (BR-011) — all 8 confirmed.
- [x] Hero headline and subheadline copy confirmed (BR-060) — "Your Trusted Transport Partner — Available 24/7" / subheadline confirmed.
- [x] About page copy confirmed (BR-061) — story paragraph and 5 USP points approved. Full copy in sitemap.md.
- [x] WhatsApp pre-filled message text confirmed (BR-034) — "Hello, I'm interested in your car/driver service. Please share details and pricing."
  - Full URL: `https://wa.me/919339865491?text=Hello%2C%20I%27m%20interested%20in%20your%20car%2Fdriver%20service.%20Please%20share%20details%20and%20pricing.`
  - Store as `BUSINESS.whatsappUrl` in `constants.ts`
- [x] Google Maps embed — **deferred. Placeholder `<div>` with address text used during v1 build. `MapEmbed` component accepts optional `src` prop; when URL is provided later, swap one prop in `constants.ts`.**
- [x] Resend account — **removed. Contact form dropped entirely. WhatsApp and phone call are the only contact methods. Resend, React Hook Form, Zod, and @hookform/resolvers removed from dependencies.**
- [x] GitHub repository created — **https://github.com/AkashGhosh-dot/Akash-Car-Service-and-Driver-Centre**

---

## Change Log

| Date       | Change                           | Author |
|------------|----------------------------------|--------|
| 2026-06-09 | Initial technical spec created   | Claude |
| 2026-06-09 | Blocker 1 resolved — text wordmark placeholder for logo | Akash |
| 2026-06-09 | Blocker 2 resolved — OG image via Next.js ImageResponse, brand-red fallback | Akash |
| 2026-06-09 | Blocker 3 resolved — favicon via Next.js icon.tsx, letter "A" on brand-red | Akash |
| 2026-06-09 | Blocker 4 resolved — all 8 service descriptions confirmed | Akash |
| 2026-06-09 | Blocker 5 resolved — hero headline and subheadline confirmed | Akash |
| 2026-06-09 | Blocker 6 resolved — about page story and USP copy confirmed | Akash |
| 2026-06-09 | Blocker 7 resolved — WhatsApp pre-filled message and URL confirmed | Akash |
| 2026-06-09 | Blocker 8 resolved — Maps embed deferred, placeholder approach documented | Akash |
| 2026-06-09 | Blocker 9 resolved — contact form removed entirely, WhatsApp + phone only | Akash |
| 2026-06-09 | Blocker 10 resolved — GitHub repo confirmed | Akash |
| 2026-06-10 | Updated to Tailwind CSS v4 — config moves from tailwind.config.ts into globals.css @theme block | Claude |
| 2026-06-10 | Added Prettier + eslint-config-prettier to dev dependencies | Claude |
| 2026-06-10 | Framer Motion added for hero animation — 5-phase choreographed sequence (CSS transitions insufficient). Three.js removed. Net bundle: −150 KB. | Akash/Claude |
