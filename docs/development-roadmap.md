# Development Roadmap — Akash Car Service & Driver Centre

> **Status:** Approved  
> **Last Updated:** 2026-06-09  
> **Target:** Production-ready v1 site deployed on Vercel

---

## Pre-Development Blockers

These must be resolved **before Phase 0 begins**. Do not start coding until these are confirmed.

| # | Item                                  | Needed For           | Status        |
|---|---------------------------------------|----------------------|---------------|
| 1 | Logo / wordmark designed (SVG)        | Header, Footer       | Blocked       |
| 2 | OG image designed (1200×630px)        | SEO / social sharing | Resolved — `opengraph-image.tsx` |
| 3 | Favicon set (16, 32, 180px)           | Browser tab          | Resolved — `icon.tsx` + `apple-icon.tsx` |
| 4 | Service descriptions written          | Services page, cards | Resolved — all 8 confirmed |
| 5 | Hero headline + subheadline copy      | Homepage hero        | Resolved — confirmed |
| 6 | About page copy (story + USPs)        | About page           | Resolved — confirmed |
| 7 | WhatsApp pre-filled message text      | WhatsApp CTA links   | Resolved — confirmed |
| 8 | Google Maps embed URL (New Barrackpore) | Contact + Home     | Resolved — placeholder for v1, real URL added later |
| 9 | Resend account / API key              | Contact form         | Resolved — form removed, not needed |
| 10| GitHub repository created             | Vercel connection    | Resolved — https://github.com/AkashGhosh-dot/Akash-Car-Service-and-Driver-Centre |

---

## Phase Overview

| Phase | Name                  | Deliverable                                    | Depends On          |
|-------|-----------------------|------------------------------------------------|---------------------|
| 0     | Foundation            | Project scaffolding, config, constants         | Items 9, 10         |
| 1     | Layout                | Header, Footer, FloatingCTA                    | Phase 0, Item 1     |
| 2     | Homepage              | Full homepage assembled and responsive         | Phase 1, Items 4–8  |
| 3     | Services Page         | Full services page with all 8 services         | Phase 1, Item 4     |
| 4     | About Page            | Full about page                                | Phase 1, Item 6     |
| 5     | Contact Page          | Phone, WhatsApp, address — no form             | Phase 1, Items 7–8  |
| 6     | SEO & Technical       | Sitemap, robots, JSON-LD, metadata             | Phases 2–5          |
| 7     | QA & Pre-launch       | Lighthouse ≥ 90/90/95, cross-device tested     | Phases 2–6          |
| 8     | Deployment            | Live on Vercel, domain connected (when ready)  | Phase 7             |

---

## Phase 0 — Foundation

**Goal:** A running Next.js project with zero application code, but all infrastructure in place.

### Tasks

- [ ] `npx create-next-app@latest` with TypeScript, Tailwind, App Router, src/ directory, `@/` alias
- [ ] Configure `tsconfig.json` — confirm `strict: true`, path aliases
- [ ] Configure `tailwind.config.ts` — add brand colours, Oswald/Inter font variables
- [ ] Configure `next.config.ts` — image formats (AVIF, WebP)
- [ ] Configure ESLint (`eslint-config-next`)
- [ ] Install all production dependencies (see `technical-spec.md` §9)
- [ ] Create full folder structure (all directories, index barrel files, placeholder files)
- [ ] Create `src/lib/constants.ts` — populate all confirmed business data (BUSINESS, SERVICES names, NAV_LINKS, SITE)
- [ ] Create `src/lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)
- [ ] Create `src/lib/structured-data.ts` — JSON-LD generator functions (empty stubs)
- [ ] Create `src/types/service.ts`, `src/types/index.ts`
- [ ] Create `src/app/globals.css` — Tailwind directives + CSS custom properties
- [ ] Create `src/app/layout.tsx` — root layout with font loading, no page content yet
- [ ] Create `.env.example` with all variables documented
- [ ] Create `.gitignore`
- [ ] `tsc --noEmit` passes
- [ ] `eslint` passes
- [ ] `npm run dev` runs without errors
- [ ] `git init` + initial commit: `chore: initialise project`

### Commit
```
chore: initialise Next.js project with TypeScript, Tailwind, and folder structure
```

---

## Phase 1 — Layout Components

**Goal:** Every page has a working header, footer, and mobile sticky CTA. No page content yet.

### Tasks

**Header (`src/components/layout/Header.tsx`)**
- [ ] Logo area — text placeholder "AKASH" until SVG is ready
- [ ] Desktop navigation: Home, Services, About, Contact
- [ ] Mobile hamburger trigger (opens MobileNav)
- [ ] Active link state (highlight current page)
- [ ] Sticky on scroll (`sticky top-0 z-40 bg-white shadow-sm`)

**MobileNav (`src/components/layout/MobileNav.tsx`)**
- [ ] Slide-in drawer from right
- [ ] Full nav links
- [ ] Close button
- [ ] Accessible: `aria-expanded`, `aria-controls`, focus trap

**Footer (`src/components/layout/Footer.tsx`)**
- [ ] 3-column layout: Quick Links / Services / Contact
- [ ] Copyright line
- [ ] Responsive: stacked on mobile, 3-col on md+

**FloatingCTA (`src/components/layout/FloatingCTA.tsx`)**
- [ ] Fixed bottom bar, mobile only (`flex md:hidden`)
- [ ] Left: "Call Now" → `tel:9339865491`
- [ ] Right: "WhatsApp" → `https://wa.me/919339865491?text=[encoded message]`
- [ ] WhatsApp pre-fill text — confirm with owner (Item 7 above)

**Root layout (`src/app/layout.tsx`)**
- [ ] Import Oswald + Inter via `next/font/google`
- [ ] Apply font CSS variables to `<html>`
- [ ] Wrap children in `<Header />` and `<Footer />`
- [ ] Render `<FloatingCTA />` outside main content
- [ ] Default metadata (title template, description)

**UI Primitives**
- [ ] `src/components/ui/Button.tsx` — all 3 variants, 3 sizes
- [ ] `src/components/ui/Card.tsx`
- [ ] `src/components/ui/Badge.tsx`

### Checks
- [ ] `tsc --noEmit` passes
- [ ] `eslint` passes
- [ ] Responsive check: 375px, 768px, 1280px — header + footer + floating CTA

### Commit
```
feat: add Header, Footer, MobileNav, FloatingCTA layout components
```

---

## Phase 2 — Homepage

**Goal:** Complete, responsive homepage with all sections. Requires: hero copy (Item 4), service names (already confirmed), about copy (Item 6), map embed URL (Item 8).

### Tasks

**`src/components/sections/HeroSection.tsx`**
- [ ] Full-width dark background with stock image
- [ ] Business name + headline + subheadline
- [ ] Two CTAs: "Call Now" (primary red) + "WhatsApp Us" (green)
- [ ] "Available 24/7" badge
- [ ] Mobile: centred text, full-width stacked buttons
- [ ] Desktop: left-aligned text, inline buttons

**`src/components/sections/ServiceCard.tsx`**
- [ ] Lucide icon, service name, short description, CTA link
- [ ] Hover: shadow + lift

**`src/components/sections/ServicesGrid.tsx`**
- [ ] Renders grid of `<ServiceCard>` from `SERVICES` constant
- [ ] 1 → 2 → 4 column responsive grid
- [ ] "View All Services" link to `/services`

**`src/components/sections/WhyChooseUs.tsx`**
- [ ] 3–4 USP points (24/7, Kolkata-wide coverage, all vehicle types, experienced drivers)
- [ ] Icon + heading + short description per point

**`src/components/sections/AboutSnippet.tsx`**
- [ ] 2–3 sentences about the business
- [ ] Link to `/about`

**`src/components/sections/MapEmbed.tsx`**
- [ ] Google Maps `<iframe>` with `loading="lazy"`
- [ ] Responsive height

**`src/components/sections/ContactSection.tsx`**
- [ ] Phone numbers (tel: links)
- [ ] WhatsApp link
- [ ] Email (mailto: link)
- [ ] Address
- [ ] Business hours (24/7)
- [ ] Map embed

**`src/components/sections/CTABanner.tsx`**
- [ ] Full-width red banner
- [ ] Strong headline
- [ ] Call + WhatsApp buttons

**`src/app/page.tsx`**
- [ ] Assemble all sections in order
- [ ] Page metadata (title, description, OG)
- [ ] JSON-LD: `LocalBusiness` schema

### Checks
- [ ] `tsc --noEmit` passes
- [ ] `eslint` passes
- [ ] Responsive: 375px, 768px, 1280px
- [ ] All CTAs work (tel:, wa.me, mailto:)
- [ ] Lighthouse audit (target: Performance ≥ 90, SEO ≥ 95)

### Commit
```
feat: build homepage with all sections
```

---

## Phase 3 — Services Page

**Goal:** Complete services listing page. Requires service descriptions (Item 4).

### Tasks

- [ ] `src/app/services/page.tsx` — page assembly + metadata + JSON-LD (`Service` schema per service)
- [ ] Page header section: title + intro paragraph
- [ ] Full `<ServicesGrid>` (reuse from homepage)
- [ ] Extended service detail: larger cards with fuller descriptions
- [ ] "Call or WhatsApp for a Quote" CTA on each service
- [ ] `<CTABanner>` at page bottom

### Checks
- [ ] `tsc --noEmit` passes
- [ ] `eslint` passes
- [ ] Responsive: 375px, 768px, 1280px
- [ ] JSON-LD validates in Google Rich Results Test

### Commit
```
feat: build services page with all 8 service listings
```

---

## Phase 4 — About Page

**Goal:** Complete about page. Requires about copy (Item 6).

### Tasks

- [ ] `src/app/about/page.tsx` — page assembly + metadata
- [ ] Business story section
- [ ] Service area callout (Kolkata + West Bengal)
- [ ] Values / USPs section (reuse `<WhyChooseUs>` or build variant)
- [ ] `<CTABanner>` at page bottom

### Checks
- [ ] `tsc --noEmit` passes
- [ ] `eslint` passes
- [ ] Responsive: 375px, 768px, 1280px

### Commit
```
feat: build about page
```

---

## Phase 5 — Contact Page

**Goal:** Contact page with all direct contact methods. No form. No external dependencies.

### Tasks

**`src/app/contact/page.tsx`**
- [ ] Phone numbers as `tel:` links with "Call Now" buttons
- [ ] WhatsApp as `wa.me` link with "WhatsApp Us" button
- [ ] Email as `mailto:` link
- [ ] Full address display
- [ ] Business hours: Open 24/7
- [ ] `<MapEmbed>` placeholder (real URL added later)
- [ ] Page metadata + JSON-LD (`LocalBusiness`)

### Checks
- [ ] `tsc --noEmit` passes
- [ ] `eslint` passes
- [ ] All `tel:` and `wa.me` links resolve correctly on mobile
- [ ] Responsive: 375px, 768px, 1280px

### Commit
```
feat: build contact page with phone, WhatsApp, and address details
```

---

## Phase 6 — SEO & Technical

**Goal:** Full SEO implementation. No new visible UI.

### Tasks

**Sitemap**
- [ ] `src/app/sitemap.ts` — list all 5 public pages with correct priorities and change frequencies

**Robots**
- [ ] `src/app/robots.ts` — allow all crawlers, reference sitemap URL

**JSON-LD audit**
- [ ] Homepage: `LocalBusiness` ✓ (Phase 2)
- [ ] Services: `Service` per service ✓ (Phase 3)
- [ ] Contact: `LocalBusiness` ✓ (Phase 5)
- [ ] Validate all with Google Rich Results Test

**Metadata audit**
- [ ] Every page has unique `title` (includes business name + location)
- [ ] Every page has unique `description` (150–160 chars, includes keyword + location)
- [ ] Every page has `openGraph` title, description, image, url
- [ ] Every page has `alternates.canonical`

**OG Image**
- [ ] `src/app/opengraph-image.tsx` — `ImageResponse`, brand-red bg, white business name + "Kolkata, West Bengal"

**Favicon**
- [ ] `src/app/icon.tsx` — `ImageResponse`, letter "A" white on brand-red square
- [ ] `src/app/apple-icon.tsx` — same design at 180×180px for Apple devices
- [ ] Next.js auto-wires both to `<head>` — no manual `layout.tsx` changes needed

### Checks
- [ ] `tsc --noEmit` passes
- [ ] `/sitemap.xml` accessible on dev server
- [ ] `/robots.txt` accessible on dev server
- [ ] All JSON-LD validates in Rich Results Test
- [ ] Lighthouse SEO score ≥ 95 on all pages

### Commit
```
feat: add sitemap, robots, JSON-LD structured data, and complete metadata
```

---

## Phase 7 — QA & Pre-launch

**Goal:** Every page passes every check. No new features.

### Lighthouse Targets (mobile, all pages)

| Page     | Performance | Accessibility | SEO  |
|----------|-------------|---------------|------|
| /        | ≥ 90        | ≥ 90          | ≥ 95 |
| /services| ≥ 90        | ≥ 90          | ≥ 95 |
| /about   | ≥ 90        | ≥ 90          | ≥ 95 |
| /contact | ≥ 90        | ≥ 90          | ≥ 95 |

### QA Checklist

**Functionality**
- [x] All `tel:` links open dialler on mobile — verified in code, all use `tel:+91${BUSINESS.phonePrimary}`
- [x] All `wa.me` links open WhatsApp with pre-filled message — verified in code
- [x] All `mailto:` links open email client — verified in code
- [x] Mobile navigation opens and closes — verified in code (focus trap, Escape key, backdrop click)
- [x] All internal links navigate correctly (no 404s) — verified; custom `not-found.tsx` added
- [x] FloatingCTA visible on mobile, hidden on desktop — `md:hidden` verified in code

**Responsiveness**
- [ ] 375px (iPhone SE) — **manual test required on device or BrowserStack**
- [ ] 768px (iPad) — **manual test required**
- [ ] 1280px (Desktop) — **manual test required**

**Content**
- [x] No placeholder text remaining — only "Map coming soon" (intentional per BR-064)
- [x] Business name spelling correct on all pages — sourced from `BUSINESS.name` constant
- [x] Phone numbers correct and match throughout — sourced from `BUSINESS.phones`, hardcoded instance in MobileNav fixed
- [x] Address correct — sourced from `BUSINESS.address.full` constant
- [x] All image `alt` texts are descriptive — N/A: no images in v1 (BR-063 deferred to post-launch)

**SEO / Technical**
- [x] No duplicate `<h1>` tags on any page — one `<h1>` per page verified
- [x] All pages in sitemap.xml — 4 pages confirmed
- [x] JSON-LD present on all required pages — /, /services, /contact
- [x] No broken images — no images in v1
- [ ] HTTPS — auto via Vercel (confirms at deployment)

### Issues Found and Fixed
| Issue | File | Fix |
|-------|------|-----|
| Hardcoded phone number literal | `MobileNav.tsx` | Changed to `BUSINESS.phonePrimary` |
| ServiceCard missing `id` attribute | `ServiceCard.tsx` | Added `id={service.id}` — footer anchor links now work |
| Logo links missing focus indicator | `Header.tsx`, `MobileNav.tsx`, `Footer.tsx` | Added `focus-visible:ring-2 focus-visible:ring-brand-red` |
| `not-found.tsx` missing from codebase | — | Created branded 404 page |

### Remaining Manual Tests (before deployment)
- Lighthouse audit on all 4 pages (mobile): Performance ≥ 90, Accessibility ≥ 90, SEO ≥ 95
- Visual layout at 375px / 768px / 1280px — no overflow, no broken layout
- Test all `tel:` and `wa.me` links on a real mobile device
- Validate JSON-LD with [Google Rich Results Test](https://search.google.com/test/rich-results)

### Commit
```
fix: QA — fix hardcoded phone, add service anchor IDs, focus rings, 404 page
```

---

## Phase 8 — Deployment

**Goal:** Site live on Vercel. Domain connected when purchased.

### Tasks

- [ ] Create GitHub repository
- [ ] Push codebase to GitHub (`main` branch)
- [ ] Create Vercel project, connect to GitHub repository
- [ ] Add environment variables to Vercel:
  - `RESEND_API_KEY` (production value)
- [ ] Trigger first production deploy
- [ ] Verify production URL works end-to-end (form, links, pages)
- [ ] Submit `sitemap.xml` to Google Search Console
- [ ] Set up Google Search Console property for domain (when purchased)
- [ ] Connect custom domain on Vercel (when purchased)

### Commit
```
chore: production deployment — Vercel connected, env vars set
```

---

## Post-Launch Backlog (v2+)

Ordered by priority. Do not start until v1 is live and stable.

| Priority | Item                                       | Depends On                    |
|----------|--------------------------------------------|-------------------------------|
| High     | Replace stock photos with real photos      | Owner provides assets         |
| High     | Replace logo placeholder with real SVG     | Logo design completed         |
| High     | Service area landing pages (Barasat, Howrah, Salt Lake, etc.) | v1 live + SEO data |
| High     | Google Analytics / Search Console connected| Domain + v1 live              |
| Medium   | Customer testimonials section              | Real reviews collected        |
| Medium   | Additional services added (when remembered)| Owner confirms list           |
| Low      | Online booking / scheduling system         | Owner decision                |
| Low      | Bengali language version                   | Owner decision                |
| Low      | Blog / content marketing                   | Owner decision                |

---

## Change Log

| Date       | Change                             | Author |
|------------|------------------------------------|--------|
| 2026-06-09 | Initial roadmap created            | Claude |
| 2026-06-10 | Phase 6 complete — sitemap, robots, JSON-LD, metadata | Claude |
| 2026-06-10 | Phase 7 complete — automated QA; 4 issues found and fixed; manual tests documented | Claude |
