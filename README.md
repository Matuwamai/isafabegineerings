# Isafab Engineering website

Marketing website for Isafab Engineering, a welding, fabrication and steel fixing company in Kiganjo, Thika.
It is a frontend-only site built with React, Tailwind CSS and Vite. Each page is pre-rendered to static HTML
(vite-react-ssg), which helps Google index it.

## Commands

```bash
npm install
npm run dev      # local development at http://localhost:5173
npm run build    # static site in dist/ (also writes sitemap.xml and robots.txt)
npm run preview  # preview the built site
```

## Where to edit things

| What | File |
|---|---|
| Phone, WhatsApp, social links, location, hours, domain, years of experience | `src/siteConfig.js` |
| Services, descriptions and bullet points | `src/data/services.js` |
| Images | `public/images/` (see `IMAGE_PROMPTS.md`) |
| Gallery extra photos | `src/pages/Gallery.jsx` |
| Logo | `public/brand/` (cut-out logo files), `src/components/Logo.jsx`, `public/favicon.png` |
| Colours & fonts | `src/index.css` |

The quote form needs no backend. It opens WhatsApp with the customer's details filled in.

## Deploying

1. Push to GitHub, then import the repo in Netlify, Vercel or Cloudflare Pages.
   Build command: `npm run build`, output directory: `dist`.
2. Buy the domain, update `url` in `src/siteConfig.js`, and connect the domain in the hosting dashboard.
3. Submit `https://<domain>/sitemap.xml` in Google Search Console.
4. Create a Google Business Profile (service-area business, Thika) and link it to the website.
