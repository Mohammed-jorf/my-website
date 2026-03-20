# Personal Portfolio Website

Static portfolio website built with Next.js App Router and TypeScript.

## Features

- 5-page MVP: Home, About, Projects, Contact, Privacy
- Typed content contracts (`SiteConfig`, `Profile`, `Project`, `ContactConfig`)
- Responsive layout with reusable components (`Navbar`, `Footer`, `Section`, `ProjectCard`, `CTA`)
- Contact form with client-side validation, honeypot, and hosted endpoint support
- SEO essentials: metadata, canonical URLs, sitemap, robots
- 404 and runtime error pages
- Optional Plausible analytics support

## Quick Start

1. Install dependencies:

```bash
npm install
```

2. Configure env vars:

```bash
cp .env.example .env.local
```

3. Run locally:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Content Editing

Update `/content/site.ts` to customize:

- Site identity and social links
- Profile details and skills
- Projects list and featured items
- Contact form endpoint and fallback email

## Build and Validate

```bash
npm run typecheck
npm run lint
npm run build
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import the repo in Vercel.
3. Add environment variables from `.env.example`.
4. Set production domain and verify HTTPS.

## Post-Launch QA Checklist

- Validate all internal/external links
- Submit contact form successfully
- Run Lighthouse checks (mobile)
- Confirm sitemap and robots endpoints
- Verify analytics events appear
