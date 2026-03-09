# Website Audit (Founder-Grade Positioning, Credibility, Conversion, Performance)

## 1) Stack + Key Dependencies

- Framework: Next.js App Router (`next@^15.0.4`)
- Runtime/UI: React 18 (`react`, `react-dom`)
- Styling: Tailwind CSS 3 (`tailwindcss`, `postcss`, `autoprefixer`)
- Animation: `framer-motion`
- Icons: `lucide-react`
- Utilities: `clsx`
- Backend email: `nodemailer`
- Language/tooling: TypeScript 5, ESLint 8 (`eslint-config-next`)
- Fonts: `next/font/local` in root layout

## 2) Route Map (`src/app`)

- `/` -> `src/app/page.tsx`
- `/about` -> `src/app/about/page.tsx`
- `/work` -> `src/app/work/page.tsx`
- `/work/[slug]` -> `src/app/work/[slug]/page.tsx`
- `/speaking` -> `src/app/speaking/page.tsx`
- `/partnerships` -> `src/app/partnerships/page.tsx`
- `/press` -> `src/app/press/page.tsx`
- `/products` -> `src/app/products/page.tsx`
- `/products/[slug]` -> `src/app/products/[slug]/page.tsx`
- `/products/categories/[categorySlug]` -> `src/app/products/categories/[categorySlug]/page.tsx`
- `/community` -> `src/app/community/page.tsx`
- `/contact` -> `src/app/contact/page.tsx`
- API: `/api/contact` -> `src/app/api/contact/route.ts`
- API: `/api/newsletter` -> `src/app/api/newsletter/route.ts`
- SEO/system: `src/app/sitemap.ts`, `src/app/robots.ts`, `src/app/not-found.tsx`, `src/app/loading.tsx`

## 3) Where Content Lives

- Primary content source: `src/content/site.config.ts`
  - Navigation, hero copy, services, work projects, speaking data, partnerships, products, contact copy, social links/stats, press kit settings.
- Helpers/selectors: `src/lib/content.ts`
- Newsletter storage (temporary file-based): `src/content/subscribers.json`
- Page-level hardcoded copy still exists in some routes (example: hero strings and explanatory copy in `src/app/page.tsx`, `src/app/speaking/page.tsx`, `src/app/press/page.tsx`, `src/app/contact/page.tsx`).
- No MDX/CMS detected; content is config-driven + local JSX.

## 4) Audit Findings by Area

### Positioning clarity above the fold
- Home, speaking, partnerships are now clearer and stronger than baseline.
- Still mixed between config-driven and hardcoded hero/value copy across pages, making strategic message consistency harder to maintain.

### Proof density
- Strong proof building blocks exist: metrics in work, logos, testimonials, speaking appearances.
- Some proof is still placeholder/low-trust:
  - Press kit PDF is placeholder-sized.
  - Some speaking links/details are placeholder.
  - Multiple placeholder SVG assets still used.

### Conversion paths
- Primary CTA exists (`siteConfig.primaryCta`), but query parameter usage is inconsistent (`reason` vs `intent`), which weakens downstream routing/triage in contact flow.
- Contact form captures richer intent/budget/timeline, good conversion direction.

### Mobile nav usability
- Mobile menu is accessible and functional (`aria-expanded`, `aria-controls`, close on link click).
- Long nav labels can crowd smaller viewports; still usable but visually dense.

### SEO metadata + OG
- Global metadata exists in `src/app/layout.tsx` (title template, OG/Twitter).
- Route-level metadata is largely missing, so page-specific titles/descriptions/OG are weak.
- `sitemap.ts` does not include `/press`.
- OG image is still placeholder.

### Accessibility basics
- Global focus styles exist in `globals.css`.
- Labels exist for contact inputs and selects; mobile nav semantics are reasonable.
- Heading hierarchy is generally acceptable, but route-level consistency could be tightened.
- External links sometimes use only `rel="noreferrer"` where `noopener` should also be included consistently.

### Performance
- Build is healthy; first-load shared JS around 102 kB.
- Largest local image (`public/images/massi-portrait.jpg`) is ~1.8 MB and reused across pages.
- Many placeholder assets remain.
- Analytics hook exists but no explicit GA/Plausible script injection observed in app shell, so tracking may silently no-op.

## 5) Prioritized Punch List

## P0 (must fix before publishing)

1. Replace placeholder press kit and placeholder credibility artifacts.
- Why: Major trust blocker for founder-grade credibility.
- Files to edit:
  - `public/press/massi-mapani-press-kit.pdf`
  - `src/content/site.config.ts` (replace placeholder speaking links/details, confirm final logos/testimonials)
  - `public/images/placeholder-*.svg` and any referenced image paths in `src/content/site.config.ts`

2. Fix inconsistent contact intent query keys (`intent` vs `reason`).
- Why: Lead routing ambiguity and weaker conversion tracking.
- Files to edit:
  - `src/app/press/page.tsx` (`/contact?intent=speaking` -> use `reason`)
  - any remaining `/contact` links/forms in `src/app/*` and `src/components/*`
  - `src/components/contact-form.tsx` (optional: prefill `reason` from query)

3. Add `/press` to sitemap.
- Why: Indexation gap for a key credibility page.
- Files to edit:
  - `src/app/sitemap.ts`

## P1 (high ROI improvements)

1. Add per-route metadata (title, description, OG image, canonical) for core pages.
- Why: Strong SEO lift and cleaner social previews.
- Files to edit:
  - `src/app/about/page.tsx`
  - `src/app/work/page.tsx`
  - `src/app/work/[slug]/page.tsx`
  - `src/app/speaking/page.tsx`
  - `src/app/partnerships/page.tsx`
  - `src/app/press/page.tsx`
  - `src/app/contact/page.tsx`
  - `src/app/products/page.tsx`, `src/app/products/[slug]/page.tsx`
  - `src/app/community/page.tsx`

2. Improve hero consistency by centralizing remaining hardcoded positioning copy into config.
- Why: Faster message testing and consistency across growth experiments.
- Files to edit:
  - `src/content/site.config.ts` (new fields for page hero/value props)
  - `src/app/page.tsx`
  - `src/app/speaking/page.tsx`
  - `src/app/press/page.tsx`
  - `src/app/partnerships/page.tsx`

3. Optimize high-weight portrait image.
- Why: Better LCP and bandwidth on mobile.
- Files to edit:
  - `public/images/massi-portrait.jpg` (replace/compress, add modern formats)
  - pages using the asset (`src/app/about/page.tsx`, `src/app/press/page.tsx`, `src/app/speaking/page.tsx`)

4. Ensure analytics is actually loaded (not only hook-based).
- Why: Current hook may never fire events without script bootstrap.
- Files to edit:
  - `src/app/layout.tsx` (inject analytics scripts conditionally)
  - `src/lib/analytics.ts`

## P2 (nice-to-haves)

1. Normalize top-level content model to remove duplication.
- Why: Avoid drift between `credibility.testimonials` and `testimonials`, `credibility.logoStrip` and `logoStrip`.
- Files to edit:
  - `src/content/site.config.ts`
  - consumers in `src/app/*` and `src/components/blocks/*`

2. Tighten external link hardening consistency (`noopener` + `noreferrer` everywhere with `_blank`).
- Why: Security hygiene and consistency.
- Files to edit:
  - `src/components/social-icons.tsx`
  - `src/app/speaking/page.tsx`
  - `src/app/press/page.tsx`
  - any other external links in `src/app/*`

3. Improve navigation IA labels for mobile scannability.
- Why: Better tap/scan behavior (especially “Digital products and interests”).
- Files to edit:
  - `src/content/site.config.ts` (nav labels)
  - `src/components/site-header.tsx`

