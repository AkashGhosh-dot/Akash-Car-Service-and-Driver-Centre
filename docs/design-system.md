# Design System — Akash Car Service & Driver Centre

> **Status:** Approved  
> **Last Updated:** 2026-06-09  
> **Visual Direction:** Bold & Energetic — high contrast, strong red/black palette, bold typography. Designed to grab attention on mobile and build instant trust for a transport/fleet business.  
> **Maintained by:** Update when logo is finalised or brand colours are adjusted.

---

## 1. Brand Identity

### Voice & Tone
- **Confident.** This business is reliable and available 24/7. Copy should feel certain, not tentative.
- **Direct.** No marketing fluff. Say what the service is and how to book it.
- **Local.** Use "Kolkata", "West Bengal" — speak to the customer's geography.
- **Action-oriented.** Every section ends with a clear action: call, WhatsApp, or get in touch.

### Logo

**v1 — Text Wordmark Placeholder**
- Render as: `<span>` with text "AKASH" in Oswald Bold 700, `text-brand-red`
- Followed by a smaller line: "Car Service & Driver Centre" in Inter 500, `text-gray-700`, `text-xs tracking-widest uppercase`
- Placement: Header (left-aligned), Footer (left-aligned)
- Minimum touch area on mobile: 44px height

**Post-design — Real Logo**
- Format: SVG (primary), PNG fallback
- Drop-in replacement: swap `<span>` for `<Image src="/icons/logo.svg" ... />`
- Minimum height: 32px on mobile
- Clear space: equal to cap-height of wordmark on all sides
- **To replace:** update `src/components/layout/Header.tsx` and `src/components/layout/Footer.tsx` — no other files need changing

---

## 2. Colour Palette

### Primary Palette

| Token             | Name           | Hex       | Tailwind Class       | Usage                                      |
|-------------------|----------------|-----------|----------------------|---------------------------------------------|
| `brand-red`       | Brand Red      | `#DC2626` | `red-600`            | Primary buttons, accents, highlights        |
| `brand-red-dark`  | Red Dark       | `#B91C1C` | `red-700`            | Button hover states, active states          |
| `brand-black`     | Brand Black    | `#0F0F0F` | — (custom)           | Hero backgrounds, strong headings           |
| `brand-white`     | White          | `#FFFFFF` | `white`              | Text on dark backgrounds, page backgrounds  |

### Neutral Palette

| Token             | Name           | Hex       | Tailwind Class       | Usage                                      |
|-------------------|----------------|-----------|----------------------|---------------------------------------------|
| `gray-50`         | Surface        | `#F9FAFB` | `gray-50`            | Alternating section backgrounds             |
| `gray-100`        | Border Light   | `#F3F4F6` | `gray-100`           | Card borders, dividers                      |
| `gray-200`        | Border         | `#E5E7EB` | `gray-200`           | Input borders, table borders                |
| `gray-500`        | Text Muted     | `#6B7280` | `gray-500`           | Subheadings, captions, placeholder text     |
| `gray-700`        | Text Secondary | `#374151` | `gray-700`           | Body text on light backgrounds              |
| `gray-900`        | Text Primary   | `#111827` | `gray-900`           | Main body text, headings on white           |

### Functional Colours

| Token         | Hex       | Tailwind Class  | Usage                       |
|---------------|-----------|-----------------|------------------------------|
| WhatsApp Green| `#25D366` | — (custom)      | WhatsApp CTA button only     |
| WhatsApp Dark | `#128C7E` | — (custom)      | WhatsApp button hover        |
| Success       | `#16A34A` | `green-600`     | Form success states          |
| Error         | `#DC2626` | `red-600`       | Form error states            |

### Section Background Pattern

Alternate sections between white and gray-50 to create visual rhythm without colour fatigue:

```
Hero          → brand-black (dark)
Services      → white
Why Choose Us → gray-50
About Snippet → brand-black (dark) or brand-red
Contact/Map   → white
CTA Banner    → brand-red
Footer        → brand-black (dark)
```

---

## 3. Typography

### Font Families

| Role     | Font      | Weights Used    | Google Fonts Import    | Why                                    |
|----------|-----------|-----------------|------------------------|----------------------------------------|
| Heading  | Oswald    | 500, 600, 700   | `Oswald:wght@500;600;700` | Bold, condensed, commanding — perfect for transport |
| Body     | Inter     | 400, 500, 600   | `Inter:wght@400;500;600`  | Clean, highly readable at all sizes   |

Both loaded via `next/font/google` — self-hosted at build time, no external request, no layout shift.

### Type Scale

| Step  | Size     | Line Height | Weight       | Tag / Usage                              |
|-------|----------|-------------|--------------|------------------------------------------|
| `6xl` | 60px     | 1.1         | 700 (Oswald) | Hero headline (desktop)                  |
| `5xl` | 48px     | 1.1         | 700 (Oswald) | Hero headline (mobile)                   |
| `4xl` | 36px     | 1.2         | 600 (Oswald) | Page titles (H1)                         |
| `3xl` | 30px     | 1.25        | 600 (Oswald) | Section headings (H2)                    |
| `2xl` | 24px     | 1.3         | 500 (Oswald) | Card titles, sub-section headings (H3)   |
| `xl`  | 20px     | 1.4         | 500 (Inter)  | Lead paragraph / intro text              |
| `lg`  | 18px     | 1.6         | 400 (Inter)  | Body text (comfortable reading)          |
| `base`| 16px     | 1.6         | 400 (Inter)  | Default body text                        |
| `sm`  | 14px     | 1.5         | 400 (Inter)  | Captions, labels, footer links           |
| `xs`  | 12px     | 1.4         | 500 (Inter)  | Badges, legal micro-copy                 |

### Typography Rules
- One `<h1>` per page — always the page's primary topic.
- Heading font (Oswald) for all `<h1>` through `<h3>`.
- Body font (Inter) for all body copy, labels, buttons, inputs.
- **Never** use Oswald for body copy — it is for display/headings only.
- Letter spacing on Oswald headings: `tracking-wide` (0.025em).
- All-caps only for badges and small labels, never for full sentences.

---

## 4. Spacing

Tailwind's default 4px base unit is used throughout. No custom spacing values.

| Usage                        | Value     | Tailwind   |
|------------------------------|-----------|------------|
| Section vertical padding     | 64–96px   | `py-16` / `py-24` |
| Container horizontal padding | 16–24px   | `px-4` / `px-6` |
| Card internal padding        | 24px      | `p-6`      |
| Gap between cards            | 24px      | `gap-6`    |
| Gap between form fields      | 16px      | `gap-4`    |
| Button internal padding      | 12px 24px | `py-3 px-6`|

### Container Width
```
max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
```
Max content width: 1280px. Centred. Horizontal padding scales with breakpoint.

---

## 5. Component Specifications

### Button

Three variants. Two sizes.

**Primary (Red)**
```
bg-brand-red text-white font-medium font-body
rounded-lg py-3 px-6
hover:bg-brand-red-dark active:scale-95
transition-colors duration-150
```

**Secondary (Outline)**
```
border-2 border-brand-red text-brand-red font-medium font-body
rounded-lg py-3 px-6
hover:bg-brand-red hover:text-white
transition-colors duration-150
```

**WhatsApp**
```
bg-[#25D366] text-white font-medium font-body
rounded-lg py-3 px-6
hover:bg-[#128C7E]
transition-colors duration-150
flex items-center gap-2   ← icon + label
```

**Ghost (Text)**
```
text-brand-red font-medium font-body
hover:underline
```

**Sizes**
- `sm`: `py-2 px-4 text-sm`
- `md`: `py-3 px-6 text-base` (default)
- `lg`: `py-4 px-8 text-lg`

**Touch target:** All buttons must be minimum `44px` tall on mobile.

---

### Card (Service Card)

```
bg-white rounded-xl shadow-md p-6
border border-gray-100
hover:shadow-xl hover:-translate-y-1
transition-all duration-200
```

**Structure:**
1. Icon (Lucide, `text-brand-red`, 32px)
2. Service name (`text-2xl font-heading font-600 text-gray-900 mt-4`)
3. Description (`text-base font-body text-gray-700 mt-2`)
4. CTA link ("Call for Quote" → `tel:` link, ghost button style)

---

### Input / Textarea

```
w-full rounded-lg border border-gray-200 bg-white
px-4 py-3 text-base font-body text-gray-900
placeholder:text-gray-500
focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent
transition-shadow duration-150
```

**Error state:**
```
border-red-500 focus:ring-red-500
```
Error message: `text-sm text-red-600 mt-1`

---

### Badge

```
inline-flex items-center rounded-full
bg-red-50 text-brand-red
text-xs font-medium font-body uppercase tracking-wider
px-3 py-1
```

---

### FloatingCTA (Mobile sticky bar)

Visible only on mobile (`flex md:hidden`). Fixed to bottom of viewport.

```
fixed bottom-0 left-0 right-0 z-50
flex h-14 shadow-[0_-2px_8px_rgba(0,0,0,0.15)]
```

Two equal-width buttons side by side:
- Left: Call Now (`bg-brand-red text-white` + phone icon)
- Right: WhatsApp (`bg-[#25D366] text-white` + WhatsApp icon)

---

## 6. Iconography

Library: **Lucide React** (tree-shakeable SVG icons).

**Standard icon size:** 24px (`size-6`) inline, 32px (`size-8`) in service cards.
**Stroke width:** Default (1.5px) — do not modify.
**Colour:** Inherit from parent text colour, or `text-brand-red` for accented icons.

### Suggested icons per service

| Service                  | Lucide Icon         |
|--------------------------|---------------------|
| Car Rentals              | `Car`               |
| Driver Service           | `User`              |
| Transportation Service   | `Truck`             |
| Bus Service              | `Bus`               |
| Traveller Service        | `MapPin`            |
| Tempo Service            | `Package`           |
| Truck Service            | `Truck`             |
| Wedding Vehicle Services | `Heart`             |

### UI icons

| Usage              | Lucide Icon   |
|--------------------|---------------|
| Phone / Call       | `Phone`       |
| WhatsApp           | (custom SVG — Lucide has no WhatsApp icon; use inline SVG) |
| Email              | `Mail`        |
| Location / Address | `MapPin`      |
| Hours / Clock      | `Clock`       |
| Menu (hamburger)   | `Menu`        |
| Close              | `X`           |
| Check / Success    | `CheckCircle` |
| Arrow / Link       | `ArrowRight`  |

---

## 7. Responsive Grid

Mobile-first. All grids start as single column and expand.

| Content              | Mobile      | Tablet (md) | Desktop (lg) |
|----------------------|-------------|-------------|--------------|
| Service cards        | 1 column    | 2 columns   | 4 columns    |
| USP points           | 1 column    | 2 columns   | 3 columns    |
| Footer columns       | stacked     | 3 columns   | 3 columns    |
| Contact (form+map)   | stacked     | 2 columns   | 2 columns    |
| Hero text            | centred     | left-aligned| left-aligned |

---

## 8. Motion & Animation

Keep minimal. Performance and accessibility (prefers-reduced-motion) come first.

| Element              | Animation                          | Duration |
|----------------------|------------------------------------|----------|
| Buttons              | `transition-colors`                | 150ms    |
| Cards on hover       | `transition-all` (shadow + lift)   | 200ms    |
| Mobile nav open/close| CSS transform (slide-in from right)| 250ms    |
| Form feedback        | Opacity fade-in                    | 200ms    |

**No** scroll animations, parallax, or entrance animations — they hurt Lighthouse performance scores and distract from CTAs.

---

## 9. Section Layouts

### Hero Section
- Full viewport height on mobile, 80vh on desktop
- Dark overlay on background image (`bg-brand-black/80`)
- Text centred on mobile, left-aligned on desktop
- Headline: `text-5xl md:text-6xl font-heading font-700 text-white`
- Subheadline: `text-xl font-body text-gray-200 mt-4`
- CTA row: Call button + WhatsApp button, stacked on mobile, inline on desktop

### Section Headings Pattern
Every section uses the same pattern:
```
<span class="text-brand-red text-sm font-medium uppercase tracking-wider">
  Category label
</span>
<h2 class="text-3xl font-heading font-600 text-gray-900 mt-2">
  Section Title
</h2>
<p class="text-base font-body text-gray-500 mt-3 max-w-2xl">
  Supporting sentence.
</p>
```

---

## 10. Accessibility Standards

- Colour contrast: all text on backgrounds must meet WCAG AA (4.5:1 for body, 3:1 for large text).
- Brand red `#DC2626` on white: contrast ratio 4.6:1 ✓ (AA pass for normal text)
- White on brand red: contrast ratio 4.6:1 ✓
- White on brand black `#0F0F0F`: contrast ratio 19.5:1 ✓
- All interactive elements have visible focus states (`focus:ring-2 focus:ring-brand-red`)
- All images have descriptive `alt` text
- Form inputs have associated `<label>` elements
- Icon-only buttons have `aria-label`
- Mobile nav has `aria-expanded` and `aria-controls`

---

## Change Log

| Date       | Change                          | Author |
|------------|---------------------------------|--------|
| 2026-06-09 | Initial design system created   | Claude |
