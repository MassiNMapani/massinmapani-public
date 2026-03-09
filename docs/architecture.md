# Architecture Notes

## Stack + key dependencies

- Framework: Next.js App Router (`next@^15.0.4`) with React (`react@^18.3.1`, `react-dom@^18.3.1`), TypeScript.
- Styling: Tailwind CSS (`tailwindcss@^3.4.16`) + PostCSS (`postcss`, `autoprefixer`), global styles in `src/app/globals.css`.
- Fonts: Google fonts via `next/font/google` (`Manrope`, `Playfair_Display`) configured in `src/app/layout.tsx`.
- Icons: `lucide-react`.
- Animation: `framer-motion` (used in header active-nav indicator and reveal component usage).
- Utility: `clsx` + local `cn` helper in `src/lib/utils.ts`.
- Forms: Native React form handling (`useState`, `FormData`, `fetch`) in components; no React Hook Form/Formik.
- Email/contact backend: `nodemailer` via `src/lib/mailer.ts` and `src/app/api/contact/route.ts`.
- Analytics: client-side pageview hook in `src/lib/analytics.ts` (Google Analytics `gtag` and Plausible if scripts/env vars exist).
- Component library: no `shadcn/ui` or Radix package dependencies detected.

## Route map (`src/app`)

- `/` -> `src/app/page.tsx`
- `/about` -> `src/app/about/page.tsx`
- `/work` -> `src/app/work/page.tsx`
- `/work/[slug]` -> `src/app/work/[slug]/page.tsx`
- `/speaking` -> `src/app/speaking/page.tsx`
- `/partnerships` -> `src/app/partnerships/page.tsx`
- `/products` -> `src/app/products/page.tsx`
- `/products/[slug]` -> `src/app/products/[slug]/page.tsx`
- `/products/categories/[categorySlug]` -> `src/app/products/categories/[categorySlug]/page.tsx`
- `/community` -> `src/app/community/page.tsx`
- `/contact` -> `src/app/contact/page.tsx`
- API: `/api/contact` -> `src/app/api/contact/route.ts`
- API: `/api/newsletter` -> `src/app/api/newsletter/route.ts`
- Metadata/util routes: `src/app/robots.ts`, `src/app/sitemap.ts`
- Shared app shell files: `src/app/layout.tsx`, `src/app/loading.tsx`, `src/app/not-found.tsx`

## Where to edit global styles, nav, and footer

- Global styles and design tokens:
  - `src/app/globals.css`
  - `tailwind.config.ts` (extended colors, fonts, shadows, background gradients)
- Root layout wrapper:
  - `src/app/layout.tsx` (includes `<SiteHeader />`, `<main>`, `<SiteFooter />`, metadata, fonts, analytics provider)
- Navigation/header component:
  - `src/components/site-header.tsx`
  - nav items source: `siteConfig.nav` in `src/content/site.config.ts`
- Footer component:
  - `src/components/site-footer.tsx`
  - footer links also read from `siteConfig.nav`

## Content location and case studies

- Primary site content is centralized in `src/content/site.config.ts` (hero, about, work, speaking, partnerships, products, community, contact, nav, social data).
- Case studies are stored as structured objects in:
  - `siteConfig.work.projects` (inside `src/content/site.config.ts`)
  - each entry includes `slug`, `title`, `summary`, `problem`, `approach`, `impact`, `stack`, `metrics`, etc.
- Case-study lookup helper:
  - `src/lib/content.ts` -> `getCaseStudyBySlug(slug)`
- Product/content helpers also live in `src/lib/content.ts` (slug/category transforms and filtering).
- Newsletter subscribers are currently persisted to:
  - `src/content/subscribers.json` via `src/app/api/newsletter/route.ts`
