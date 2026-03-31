# Himachal Temples

A production-ready Next.js 14 website to explore famous temples across districts of Himachal Pradesh.

## Tech Stack

- Next.js 14 (App Router)
- React 18
- Tailwind CSS
- ESLint (Next.js config)
- Vercel Speed Insights

## Features

- District-wise temple discovery pages
- SEO-ready metadata using App Router metadata API
- Auto-generated `robots.txt`, `sitemap.xml`, and web app `manifest.webmanifest`
- Production headers for basic hardening (`X-Frame-Options`, `Referrer-Policy`, etc.)
- Optimized image delivery with modern formats (AVIF/WebP)
- Privacy policy and content pages (About, Contact, Articles)

## Routes

### Core

- `/`
- `/about`
- `/articles`
- `/contact`
- `/districts`
- `/privacy`

### District Pages

- `/districts/Bilaspur`
- `/districts/Chamba`
- `/districts/Hamirpur`
- `/districts/Kangra`
- `/districts/Kinnaur`
- `/districts/Kullu`
- `/districts/Lahaul-Spiti`
- `/districts/Mandi`
- `/districts/Shimla`
- `/districts/Sirmaur`
- `/districts/Solan`
- `/districts/Una`

### SEO Utility Routes

- `/robots.txt`
- `/sitemap.xml`
- `/manifest.webmanifest`

## Project Structure

```text
src/
	app/
		layout.js
		page.js
		sitemap.js
		robots.js
		manifest.js
		about/page.js
		articles/page.js
		contact/page.js
		privacy/page.js
		districts/
			page.js
			Bilaspur/page.js
			...
	components/
		Header.js
		Footer.js
		Temples.js
public/
	images/
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open http://localhost:3000

## Available Scripts

```bash
npm run dev     # Start local dev server
npm run lint    # Run ESLint checks
npm run build   # Create production build
npm run start   # Start production server
```

## Environment Variables

Create a `.env.local` file in the project root:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

This value is used for canonical metadata, sitemap URLs, and robots sitemap references.

## Production Notes

- Ensure `NEXT_PUBLIC_SITE_URL` points to your live domain before deployment.
- Keep Browserslist database up to date periodically:

```bash
npx update-browserslist-db@latest
```

## Deployment

This project can be deployed on any platform that supports Next.js (Vercel recommended).

Recommended deploy flow:

1. `npm run lint`
2. `npm run build`
3. Deploy
