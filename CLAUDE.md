# CLAUDE.md — Akash Car Service & Driver Centre

## Project Overview

**Project Name:** Akash Car Service & Driver Centre  
**Type:** Local Business Website  
**Owner:** Akash  
**Purpose:** Professional web presence for a car service and driver hire business, optimized for local SEO and customer conversion.

---

## Core Principles

1. **Documentation-first.** Read all relevant docs before making any change.
2. **Plan before code.** Explain the implementation plan and get approval before writing a single line.
3. **No assumptions.** If a requirement is unclear, ask. Never guess business information.
4. **Clean architecture.** Every decision must be justifiable and scalable.
5. **Professional over fast.** Correctness and maintainability beat speed.

---

## Session Workflow

Every session follows this sequence — no exceptions:

```
1. READ     → docs/project-spec.md, docs/business-requirements.md, docs/technical-spec.md, relevant component files
2. ORIENT   → State what changed since last session (git log, open tasks)
3. PLAN     → Describe the implementation plan in plain English before coding
4. CONFIRM  → Wait for user approval of the plan
5. IMPLEMENT → Write code according to the approved plan
6. VERIFY   → Run type check, linter, and any tests
7. DOCUMENT → Update docs if requirements or architecture changed
8. COMMIT   → Commit with a clear, descriptive message
```

Do not skip or reorder steps. If blocked at any step, say so explicitly.

---

## Requirement Gathering Process

Before starting any feature or page:

1. Reference `docs/business-requirements.md` for existing requirements.
2. If the requirement is missing or ambiguous, ask the user — do not infer.
3. Document the confirmed requirement in `docs/business-requirements.md` before coding.
4. Update `docs/sitemap.md` if the change affects page structure or navigation.
5. Update `docs/project-spec.md` if the change affects tech stack or architecture.

**Required information before building any page:**
- Purpose of the page
- Target audience action (what should the user do?)
- Content (copy, images, CTAs)
- SEO keyword target
- Any third-party integrations (maps, booking, chat)

---

## Architecture Planning Process

Before introducing a new component, route, or data layer:

1. State the problem being solved.
2. Propose the solution with file paths and component names.
3. Identify dependencies and side effects.
4. Get explicit approval.
5. Implement.

Architectural changes that require explicit approval:
- New pages or routes
- New third-party libraries
- Changes to folder structure
- Changes to data fetching strategy
- Changes to SEO/metadata approach

---

## Technology Stack

| Concern          | Choice                        | Reason                              |
|------------------|-------------------------------|-------------------------------------|
| Language         | TypeScript (strict)           | Type safety, professional standard  |
| Framework        | Next.js (App Router)          | SSR/SSG for SEO, built-in routing   |
| Styling          | Tailwind CSS                  | Utility-first, responsive by default|
| UI Components    | Custom (no heavy UI libraries)| Full control over design + perf     |
| Forms            | React Hook Form + Zod         | Type-safe validation                |
| Icons            | Lucide React                  | Lightweight, consistent             |
| Fonts            | next/font (Google Fonts)      | No layout shift, self-hosted        |
| Images           | next/image                    | Automatic optimization, lazy load   |
| SEO              | Next.js Metadata API          | Structured, per-page metadata       |
| Class utility    | clsx + tailwind-merge         | Safe conditional class merging      |
| Email delivery   | Resend                        | 3k free emails/month, simple API    |
| Analytics        | [TBD — confirm with owner]    | —                                   |
| Deployment       | Vercel (free tier)            | Zero-config Next.js, auto HTTPS     |

Changes to this table require updating `docs/project-spec.md`.

---

## Coding Standards

### TypeScript
- `strict: true` in `tsconfig.json` — no exceptions.
- No `any`. Use `unknown` and narrow properly.
- All props interfaces are explicitly typed. No inline object types on component props.
- Export types from a co-located `types.ts` when shared across more than one file.

### Components
- One component per file.
- File name = component name in PascalCase: `ServiceCard.tsx`.
- Props interface named `[ComponentName]Props`.
- No default exports for utilities or types — named exports only. Default exports for page and layout components (Next.js convention).
- Extract any logic longer than 10 lines into a custom hook (`use[Name].ts`).
- No inline styles. Use Tailwind classes only.
- No magic numbers or hardcoded strings — use constants files.

### Files
- Keep files under 200 lines. If longer, split.
- No commented-out code in commits.
- No `console.log` in commits.

### Git
- Conventional commits: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `chore:`.
- One logical change per commit.
- Never commit directly to `main` without review.

---

## File Structure Standards

```
akash-car-service-and-driver-centre/
├── CLAUDE.md
├── docs/
│   ├── project-spec.md
│   ├── business-requirements.md
│   ├── sitemap.md
│   ├── technical-spec.md
│   ├── design-system.md
│   └── development-roadmap.md
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── services/
│   │   └── about/
│   ├── icons/
│   │   └── logo.svg              # TBC — logo design needed
│                                 # favicon + og-image generated via src/app/icon.tsx
│                                 # and src/app/opengraph-image.tsx — no static files needed
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── layout.tsx            # Root layout — fonts, Header, Footer
│   │   ├── page.tsx              # Homepage
│   │   ├── globals.css           # Tailwind directives + CSS variables
│   │   ├── not-found.tsx         # 404 page
│   │   ├── opengraph-image.tsx   # Generates OG image — brand-red bg, white text
│   │   ├── icon.tsx              # Generates favicon — letter "A" on brand-red
│   │   ├── apple-icon.tsx        # Generates Apple touch icon (180×180)
│   │   ├── sitemap.ts            # Auto-generates /sitemap.xml
│   │   ├── robots.ts             # Auto-generates /robots.txt
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── privacy/
│   │   │   └── page.tsx
│   ├── components/
│   │   ├── ui/                   # Stateless primitives
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   └── index.ts
│   │   ├── layout/               # Header, Footer, Navigation
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── MobileNav.tsx
│   │   │   ├── FloatingCTA.tsx
│   │   │   └── index.ts
│   │   └── sections/             # Page-level sections
│   │       ├── HeroSection.tsx
│   │       ├── ServicesGrid.tsx
│   │       ├── ServiceCard.tsx
│   │       ├── WhyChooseUs.tsx
│   │       ├── AboutSnippet.tsx
│   │       ├── ContactSection.tsx
│   │       ├── MapEmbed.tsx
│   │       └── CTABanner.tsx
│   ├── lib/
│   │   ├── constants.ts          # All business data — single source of truth
│   │   ├── utils.ts              # cn() helper
│   │   └── structured-data.ts   # JSON-LD generator functions
│   └── types/
│       ├── service.ts
│       └── index.ts
├── .env.local                    # Never commit
├── .env.example                  # Commit — template only
├── .gitignore
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.js
├── eslint.config.mjs
└── package.json
```

Do not deviate from this structure without updating `docs/project-spec.md`.

---

## SEO Standards

This is a local business website. Every decision must prioritize local search visibility.

### Per-Page Requirements
Every page must define, via the Next.js Metadata API:
- `title` — include business name and location
- `description` — 150–160 characters, include primary keyword and location
- `openGraph.title`, `openGraph.description`, `openGraph.image`
- `canonical` URL

### Global Requirements
- `robots.txt` — allow all, sitemap linked
- `sitemap.xml` — auto-generated, all public pages included
- Structured data (JSON-LD) on key pages:
  - `LocalBusiness` schema on homepage and contact page
  - `Service` schema on service pages
- Page load speed: Lighthouse Performance score ≥ 90 on mobile
- All images: descriptive `alt` text, correct `width`/`height`
- Heading hierarchy: one `<h1>` per page, logical `<h2>`/`<h3>` nesting
- Internal linking: every page linked from at least one other page

### Local SEO Checklist (confirm with owner before launch)
- [ ] Google Business Profile URL collected
- [ ] NAP (Name, Address, Phone) consistent across site and GBP
- [ ] Service area pages for target localities
- [ ] Customer review integration or link

---

## Responsive Design Standards

- **Mobile-first.** Write base styles for mobile, add `md:` and `lg:` overrides.
- Breakpoints follow Tailwind defaults: `sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px.
- Touch targets: minimum 44×44px on mobile.
- No horizontal scroll at any breakpoint.
- Test every layout at 375px (iPhone SE), 768px (iPad), 1280px (desktop).
- CTA buttons (Call, Book, WhatsApp) must be visible above the fold on mobile.

---

## Testing Standards

### Before Every Commit
- `tsc --noEmit` — zero type errors
- `eslint` — zero errors (warnings reviewed, not blocking)
- Manual smoke test of the changed component/page

### Before Every Deployment
- Lighthouse audit: Performance ≥ 90, Accessibility ≥ 90, SEO ≥ 95 (mobile)
- Test all forms submit correctly
- Test all phone/email CTAs resolve
- Test on real mobile device or BrowserStack
- Validate JSON-LD with Google's Rich Results Test

### Future (add when project scales)
- Unit tests: Vitest for utility functions
- Integration tests: Playwright for critical user flows (contact form, booking)

---

## Deployment Standards

**Deployment target: Vercel (free tier).** See `docs/development-roadmap.md` Phase 9 for full deployment steps.

Before any production deployment:
1. All items in the Definition of Done are met.
2. `.env.example` is up to date.
3. No secrets in codebase — verified with `git log -p` scan.
4. All placeholder content replaced with real content.
5. Domain and DNS confirmed with owner.
6. Google Search Console property created and verified.
7. Analytics (if applicable) confirmed firing.

---

## Definition of Done

A feature or page is **Done** when ALL of the following are true:

- [ ] Matches approved requirement in `docs/business-requirements.md`
- [ ] No TypeScript errors (`tsc --noEmit`)
- [ ] No ESLint errors
- [ ] Fully responsive: 375px, 768px, 1280px tested
- [ ] All images have descriptive `alt` text and are optimized via `next/image`
- [ ] Page metadata (title, description, OG) defined and accurate
- [ ] JSON-LD structured data present where required
- [ ] Lighthouse: Performance ≥ 90, Accessibility ≥ 90, SEO ≥ 95 (mobile)
- [ ] No placeholder content remaining
- [ ] Committed with a conventional commit message
- [ ] `docs/` updated if requirements or architecture changed

---

## What to Do When Stuck

1. Re-read the relevant documentation in `docs/`.
2. State the blocker explicitly to the user — never silently guess.
3. Propose two or three options with trade-offs, then ask which to proceed with.
4. Never unblock yourself by lowering standards (removing type checks, skipping tests, hardcoding values).
