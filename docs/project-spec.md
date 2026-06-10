# Project Specification — Akash Car Service & Driver Centre

> **Status:** Draft  
> **Last Updated:** 2026-06-09  
> **Owner:** Akash  
> **Maintained by:** Update this file whenever the tech stack, architecture, or scope changes.

---

## Project Summary

A professional marketing and lead-generation website for **Akash Car Service & Driver Centre**, a local business providing car servicing and driver hire services. The primary goals are:

1. Establish a credible online presence.
2. Generate phone calls, WhatsApp messages, and contact form submissions from local customers.
3. Rank on Google for local search terms related to car service and driver hire in the target area.

---

## Business Information

| Field                    | Value                                  |
|--------------------------|----------------------------------------|
| Business Name            | Akash Car Service & Driver Centre      |
| Owner Name               | [CONFIRM with owner]                   |
| Phone Number             | 9339865491, 8910068402                 |
| WhatsApp Number          | 9339865491                             |
| Email Address            | akashbusinessghosh@gmail.com           |
| Physical Address         | New Barrackpore, West Bengal, Kolkata – 700133 |
| City / Locality          | New Barrackpore, Kolkata               |
| Service Area             | Entire Kolkata and West Bengal         |
| Business Hours           | Open 24 hours, 7 days a week           |
| Google Business Profile  | [CONFIRM with owner — URL or ID]       |
| Year Established         | [CONFIRM with owner]                   |

**Action required:** Fill in all fields above before writing any site content or structured data.

---

## Goals & Success Metrics

| Goal                            | Metric                                      | Target         |
|---------------------------------|---------------------------------------------|----------------|
| Local search visibility         | Google ranking for primary keyword          | Page 1         |
| Lead generation                 | Monthly contact form submissions            | [TBD]          |
| Lead generation                 | Monthly phone/WhatsApp clicks               | [TBD]          |
| Performance                     | Lighthouse Performance (mobile)             | ≥ 90           |
| Accessibility                   | Lighthouse Accessibility                    | ≥ 90           |
| SEO score                       | Lighthouse SEO                              | ≥ 95           |

---

## Technology Stack

| Concern          | Choice                         | Status       |
|------------------|--------------------------------|--------------|
| Language         | TypeScript (strict)            | Decided      |
| Framework        | Next.js (App Router)           | Decided      |
| Styling          | Tailwind CSS                   | Decided      |
| Forms            | React Hook Form + Zod          | Decided      |
| Icons            | Lucide React                   | Decided      |
| Fonts            | next/font (Google Fonts)       | Decided      |
| Images           | next/image                     | Decided      |
| SEO Metadata     | Next.js Metadata API           | Decided      |
| Structured Data  | JSON-LD (inline script)        | Decided      |
| Analytics        | [CONFIRM with owner]           | Pending      |
| Maps             | [CONFIRM — Google Maps embed?] | Pending      |
| Booking System   | Not in v1 — post-launch scope  | Decided      |
| Deployment Host  | Vercel (free tier)             | Decided      |
| Domain           | Not purchased yet — to buy after v1 is built | Pending      |
| Version Control  | Git + GitHub                   | Active       |
| GitHub Repo      | https://github.com/AkashGhosh-dot/Akash-Car-Service-and-Driver-Centre | Confirmed |

---

## Scope

### In Scope (v1)
- Homepage
- Services page (car servicing + driver hire)
- About page
- Contact page with form
- Local SEO foundations (metadata, JSON-LD, sitemap, robots.txt)
- Mobile-first responsive design
- WhatsApp and phone CTA integration

### Out of Scope (v1) — revisit after launch
- Online booking / payment system
- Customer login / portal
- Blog / content marketing
- Multi-language support
- Live chat widget

---

## Architecture Decisions

### Rendering Strategy
- **Static Site Generation (SSG)** for all pages — content is not dynamic, SSG gives best performance and SEO.
- No database required for v1.
- If a booking system is added later, that section alone will use server-side rendering or a client-side form submission to a third-party API.

### Routing
- Next.js App Router with file-based routing under `src/app/`.
- No dynamic routes required for v1.

### Data
- All business content (services, pricing, contact details) stored in `src/lib/constants.ts` as typed constants.
- No CMS for v1. Content changes require a code deploy.
- If owner wants self-serve content editing, evaluate a headless CMS (Sanity or Contentful) post-launch.

### Styling
- Tailwind CSS utility classes only — no CSS Modules, no styled-components.
- Custom design tokens (colors, fonts, spacing) defined in `tailwind.config.ts` under `theme.extend`.
- **Visual style: Bold & Energetic** — high contrast, strong colours, grabs attention on mobile.
- Brand colors: Black + red or orange accent (exact hex values TBC when logo is designed)
- Fonts: Bold sans-serif throughout (exact font TBC)

---

## Environment Variables

| Variable             | Purpose                          | Required |
|----------------------|----------------------------------|----------|
| `NEXT_PUBLIC_GA_ID`  | Google Analytics Measurement ID  | No (v1)  |

> `CONTACT_FORM_EMAIL` and `RESEND_API_KEY` removed — contact form dropped, WhatsApp and phone only.

`.env.example` still created as good practice. No required variables for v1.

---

## Open Questions

Track unresolved decisions here. Move to the relevant section when resolved.

| # | Question                                          | Raised     | Status  |
|---|---------------------------------------------------|------------|---------|
| 1 | What is the exact service area / localities?      | 2026-06-09 | Resolved — Entire Kolkata and West Bengal |
| 2 | Does the owner want an online booking system?     | 2026-06-09 | Resolved — not in v1, post-launch |
| 3 | What analytics tool, if any?                      | 2026-06-09 | Open    |
| 4 | What deployment platform? (Vercel, cPanel, etc.)  | 2026-06-09 | Resolved — Vercel free tier |
| 5 | What is the brand colour palette?                 | 2026-06-09 | Resolved — black + red/orange accent; exact hex TBC with logo design |
| 6 | What font style — modern, classic, bold?          | 2026-06-09 | Resolved — bold sans-serif; exact font TBC |
| 7 | Are there existing photos/logo assets?            | 2026-06-09 | Resolved — no logo (needs design); stock photos for v1, real photos post-launch |
| 8 | Is there an existing website to migrate from?     | 2026-06-09 | Open    |
| 9 | GitHub repository URL                             | 2026-06-09 | Resolved — https://github.com/AkashGhosh-dot/Akash-Car-Service-and-Driver-Centre |

---

## Change Log

| Date       | Change                          | Author |
|------------|---------------------------------|--------|
| 2026-06-09 | Initial spec created            | Claude |
| 2026-06-09 | Phone numbers confirmed         | Akash  |
| 2026-06-09 | WhatsApp number confirmed       | Akash  |
| 2026-06-09 | Email address confirmed         | Akash  |
| 2026-06-09 | Physical address confirmed      | Akash  |
| 2026-06-09 | Business hours confirmed — 24/7 | Akash  |
| 2026-06-09 | Service area confirmed — Entire Kolkata and West Bengal | Akash |
| 2026-06-09 | Visual style confirmed — Bold & Energetic, black + red/orange | Akash |
| 2026-06-09 | Deployment confirmed — Vercel free tier | Akash |
| 2026-06-09 | Domain — not yet purchased, to buy after v1 build | Akash |
