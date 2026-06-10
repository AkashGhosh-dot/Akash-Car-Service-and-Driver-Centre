# Business Requirements — Akash Car Service & Driver Centre

> **Status:** Draft  
> **Last Updated:** 2026-06-09  
> **Owner:** Akash  
> **Maintained by:** Update this file whenever a requirement is confirmed, changed, or removed. Every coded feature must trace back to a requirement listed here.

---

## How to Use This Document

- Requirements are grouped by area.
- Each requirement has a unique ID (`BR-XXX`) for tracing.
- Status: `Draft` → `Confirmed` → `Built` → `Tested`
- Never mark a requirement `Built` until it passes the Definition of Done in `CLAUDE.md`.

---

## 1. Business Identity

| ID     | Requirement                                                                 | Status   |
|--------|-----------------------------------------------------------------------------|----------|
| BR-001 | The site must display the correct business name: "Akash Car Service & Driver Centre" | Confirmed |
| BR-002 | The site must display both call numbers prominently on every page: **9339865491** and **8910068402** | Confirmed |
| BR-003 | The site must display a WhatsApp click-to-chat link using **9339865491**     | Confirmed |
| BR-004 | The site must display the email address: **akashbusinessghosh@gmail.com**   | Confirmed |
| BR-005 | The site must display the address: **New Barrackpore, West Bengal, Kolkata – 700133** | Confirmed |
| BR-006 | The site must display business hours: **Open 24 hours, 7 days a week**      | Confirmed |
| BR-007 | Header and footer use a text wordmark placeholder ("AKASH" in Oswald Bold, brand-red) for v1. Real SVG logo replaces it when designed. | Confirmed — placeholder approach |

---

## 2. Services

> **Action required:** Confirm the complete list of services, descriptions, and pricing with the owner before building the Services page.

| ID     | Requirement                                                                              | Status |
|--------|------------------------------------------------------------------------------------------|--------|
| BR-010 | The site must list all confirmed services (see list below)                               | Partial — more may be added |
| BR-011 | Each service must have a name, short description, and CTA                                | Confirmed |
| BR-012 | No prices displayed on site. Every service CTA must direct users to **call or WhatsApp for a quote** | Confirmed |
| BR-013 | [CONFIRM — any additional services to add later]                                         | Draft  |

**Confirmed services (partial — owner will update):**

| # | Service Name              | Description | Status |
|---|---------------------------|-------------|--------|
| 1 | Car Rentals               | Affordable car hire for any distance, any duration. Self-drive or with a driver — available 24/7 across Kolkata and West Bengal. | Confirmed |
| 2 | Driver Service            | Experienced, professional drivers available on-demand for local trips, full-day hire, or outstation journeys. Punctual and reliable, around the clock. | Confirmed |
| 3 | Transportation Service    | Safe, comfortable point-to-point transportation for individuals and groups across Kolkata and all of West Bengal. Airport transfers, corporate travel, and more. | Confirmed |
| 4 | Bus Service               | Comfortable bus hire for group travel, corporate outings, school trips, and pilgrimages. Local and outstation routes covered across West Bengal. | Confirmed |
| 5 | Traveller Service         | Spacious traveller vehicles for family trips, group tours, and outstation travel. Ideal for 8–12 passengers with comfort and safety on long journeys. | Confirmed |
| 6 | Tempo Service             | Dependable tempo hire for local goods movement, home shifting, and logistics. Serving Kolkata and surrounding areas with prompt, careful service. | Confirmed |
| 7 | Truck Service             | Heavy-duty truck hire for commercial freight, construction materials, and long-distance goods transport. Covering all major routes across West Bengal. | Confirmed |
| 8 | Wedding Vehicle Services  | Make your special day unforgettable with our premium wedding fleet. Decorated cars and convoy arrangements for weddings across Kolkata and West Bengal. | Confirmed |
| + | [More TBC by owner]       | —           | Pending |

---

## 3. Navigation & Pages

| ID     | Requirement                                                             | Status |
|--------|-------------------------------------------------------------------------|--------|
| BR-020 | The site must have a persistent header with navigation links            | Draft  |
| BR-021 | The site must have a footer with contact details and quick links        | Draft  |
| BR-022 | Navigation must be fully functional on mobile (hamburger menu)          | Draft  |
| BR-023 | A "Call Now" or "WhatsApp Us" button must be visible on mobile at all times | Draft |

---

## 4. Lead Generation

| ID     | Requirement                                                                      | Status |
|--------|----------------------------------------------------------------------------------|--------|
| BR-030 | The homepage must have a primary CTA above the fold (call or WhatsApp)           | Draft  |
| BR-031 | ~~Contact form~~ — removed. WhatsApp and phone are the only contact methods.    | Removed |
| BR-032 | ~~Form email delivery~~ — removed. No form, no email delivery needed.           | Removed |
| BR-033 | All phone numbers on the site must be `tel:` links (tap to call on mobile)       | Draft  |
| BR-034 | WhatsApp link must open with pre-filled message: **"Hello, I'm interested in your car/driver service. Please share details and pricing."** | Confirmed |
| BR-035 | No online booking system for v1. Phone and WhatsApp contact is sufficient. Booking system to be scoped post-launch | Confirmed |

---

## 5. Local SEO

| ID     | Requirement                                                                            | Status |
|--------|----------------------------------------------------------------------------------------|--------|
| BR-040 | Every page must have a unique `<title>` tag including business name and location       | Draft  |
| BR-041 | Every page must have a unique `<meta description>` of 150–160 characters              | Draft  |
| BR-042 | The homepage must include `LocalBusiness` JSON-LD structured data                     | Draft  |
| BR-043 | The contact page must include `LocalBusiness` JSON-LD structured data                 | Draft  |
| BR-044 | Each service page/section must include `Service` JSON-LD structured data              | Draft  |
| BR-045 | NAP (Name, Address, Phone) must be consistent across all pages and match GBP          | Draft  |
| BR-046 | A `sitemap.xml` must be generated and submitted to Google Search Console              | Draft  |
| BR-047 | A `robots.txt` must allow all crawlers and reference the sitemap                      | Draft  |
| BR-048 | [CONFIRM — target keywords for homepage, services, contact pages]                     | Draft  |

---

## 6. Performance & Quality

| ID     | Requirement                                                                  | Status |
|--------|------------------------------------------------------------------------------|--------|
| BR-050 | Lighthouse Performance score ≥ 90 on mobile                                 | Draft  |
| BR-051 | Lighthouse Accessibility score ≥ 90                                         | Draft  |
| BR-052 | Lighthouse SEO score ≥ 95                                                   | Draft  |
| BR-053 | All images must be served in modern format (WebP/AVIF) via `next/image`     | Draft  |
| BR-054 | The site must load correctly at 375px, 768px, and 1280px viewport widths    | Draft  |
| BR-055 | No horizontal scrollbar at any breakpoint                                   | Draft  |

---

## 7. Content

| ID     | Requirement                                                                     | Status |
|--------|---------------------------------------------------------------------------------|--------|
| BR-060 | Homepage hero copy confirmed — **Headline:** "Your Trusted Transport Partner — Available 24/7" / **Subheadline:** "Car rentals, driver hire, bus, truck, and wedding vehicles across Kolkata & West Bengal." | Confirmed |
| BR-061 | About page copy confirmed — story and 5 USP points approved (see sitemap.md for full copy) | Confirmed |
| BR-062 | Testimonials section — skip for v1, add post-launch when reviews are available | Confirmed |
| BR-063 | Use stock photos for v1 launch. Real vehicle/business photos to replace them when owner provides assets | Confirmed |
| BR-064 | Map embed — skip for v1 build. Add Google Maps iframe after owner provides embed URL. Placeholder div rendered in its place during development. | Confirmed — deferred |

---

## 8. Legal & Compliance

| ID     | Requirement                                                          | Status |
|--------|----------------------------------------------------------------------|--------|
| BR-070 | ~~Privacy Policy~~ — no longer required for v1. No form, no personal data collected on site. | Removed |
| BR-071 | Cookie consent — [CONFIRM — analytics in use?]                     | Draft  |
| BR-072 | Terms & Conditions — [CONFIRM if required by owner]                | Draft  |

---

## Pending Decisions (Block Builders)

These items must be resolved before the associated pages can be built:

| Blocking Item                                 | Blocks                    | Owner to Confirm |
|-----------------------------------------------|---------------------------|------------------|
| Service descriptions and pricing               | BR-011, BR-012            | Resolved — all 8 descriptions confirmed |
| WhatsApp number, email, address                | BR-003–BR-005             | Resolved         |
| Business hours                                 | BR-006, BR-042            | Resolved — 24/7  |
| Target keywords per page                       | BR-048, all SEO work      | Yes              |
| Hero headline and CTA copy                     | BR-060                    | Resolved         |
| Booking system decision                        | BR-035                    | Resolved — not in v1 |
| Logo design                                    | BR-007                    | Resolved — text wordmark placeholder for v1 |
| Real vehicle/business photos                   | BR-063                    | Post-launch — stock photos used for v1 |

---

## Change Log

| Date       | Change                                  | Author |
|------------|-----------------------------------------|--------|
| 2026-06-09 | Initial requirements document created  | Claude |
| 2026-06-09 | BR-002 confirmed — call numbers 9339865491 and 8910068402 | Akash |
| 2026-06-09 | BR-003 confirmed — WhatsApp number 9339865491 | Akash |
| 2026-06-09 | BR-004 confirmed — email akashbusinessghosh@gmail.com | Akash |
| 2026-06-09 | BR-005 confirmed — New Barrackpore, West Bengal, Kolkata – 700133 | Akash |
| 2026-06-09 | BR-006 confirmed — Open 24 hours, 7 days a week | Akash |
| 2026-06-09 | BR-010 partial — 8 services confirmed, more to be added by owner | Akash |
| 2026-06-09 | BR-012 confirmed — no prices shown, all CTAs lead to call/WhatsApp for quote | Akash |
| 2026-06-09 | BR-007 updated — no logo exists, design required before build | Akash |
| 2026-06-09 | BR-063 confirmed — stock photos for v1, real photos to replace post-launch | Akash |
| 2026-06-09 | BR-035 confirmed — no booking system in v1, phone/WhatsApp only | Akash |
| 2026-06-09 | BR-062 confirmed — testimonials section skipped for v1 | Akash |
| 2026-06-09 | BR-007 resolved — text wordmark placeholder, real logo post-design | Akash |
| 2026-06-09 | BR-011 confirmed — all 8 service descriptions written and approved | Akash |
| 2026-06-09 | BR-060 confirmed — hero headline and subheadline copy approved | Akash |
| 2026-06-09 | BR-061 confirmed — about page story and USP copy approved | Akash |
| 2026-06-09 | BR-034 confirmed — WhatsApp pre-filled message approved | Akash |
| 2026-06-09 | BR-064 deferred — map embed skipped for v1, placeholder used, URL to be added later | Akash |
| 2026-06-09 | BR-031, BR-032 removed — contact form dropped, WhatsApp and phone only | Akash |
| 2026-06-09 | BR-070 removed — Privacy Policy not required (no form data collected) | Akash |
