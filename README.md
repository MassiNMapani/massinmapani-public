# Massi Mapani Personal Brand Site

Production-ready personal brand website for **Massi Mapani** built with:
- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide icons

## Project Structure

```txt
.
├── public/
│   ├── images/                     # Placeholder visuals + OG image
│   └── press/                      # Press kit placeholder PDF
├── src/
│   ├── app/                        # App Router pages + API routes
│   ├── components/                 # Reusable UI components
│   ├── content/
│   │   └── site.config.ts          # Main config-driven content source
│   └── lib/                        # Utilities, analytics, mailer, content helpers
├── .env.example
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Start dev server:
```bash
npm run dev
```

3. Open:
```txt
http://localhost:3000
```

## Build & Start

```bash
npm run build
npm start
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill values:

```bash
cp .env.example .env.local
```

- `NEXT_PUBLIC_SITE_URL`: canonical URL (set to `https://massinmapani.com` in production)
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: optional GA4 ID
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`: optional Plausible domain
- `CONTACT_RECEIVER_EMAIL`: where contact form messages are sent
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`: SMTP credentials for nodemailer

If SMTP env vars are missing, contact submissions are logged to server console (`TODO` fallback).

## Content Editing (No Code Changes Needed)

Edit `src/content/site.config.ts`:
- navigation
- hero copy
- About copy
- work case studies
- speaking/media entries
- partnership cards/logos
- products + Gumroad URLs
- social links + social stats
- contact text

All main page content is sourced from this file.

## Image Replacement

Current images are placeholders in `public/images/`.

Replace with your own photos and update paths in `src/content/site.config.ts`.
Recommended naming:
- `/public/images/massi-home-hero.jpg`
- `/public/images/massi-about.jpg`
- `/public/images/massi-tile-*.jpg`
- `/public/images/og-share.jpg`

## Press Kit Placeholder

Replace:
- `public/press/massi-mapani-press-kit.pdf`

with your final press kit PDF.

## SEO

Implemented:
- global metadata in `src/app/layout.tsx`
- canonical URL
- Open Graph + Twitter card
- `src/app/sitemap.ts`
- `src/app/robots.ts`

## Hostinger Deployment (Node.js via GitHub)

1. Push this repo to GitHub.
2. In Hostinger hPanel, create a Node.js app.
3. Set Node version to **20.x** (or latest LTS supported by Hostinger).
4. Connect GitHub repository.
5. Set build and start commands:
   - Build: `npm run build`
   - Start: `npm start`
6. Configure environment variables from `.env.example` in hPanel.
7. Set app root to repository root.
8. Point domain `massinmapani.com` to the Node app.

## Notes

- Newsletter API stores subscribers in `src/content/subscribers.json` for now.
- For production-scale capture, replace with database/email provider (e.g., Supabase, ConvertKit, MailerLite).
- Contact API uses SMTP when configured and logs fallback payload otherwise.
