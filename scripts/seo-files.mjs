// Runs after the build: writes sitemap.xml and robots.txt using the domain in siteConfig.
import { writeFileSync } from 'node:fs'

const src = await import('node:fs').then((fs) => fs.readFileSync('src/siteConfig.js', 'utf8'))
const url = src.match(/url:\s*'([^']+)'/)[1].replace(/\/$/, '')
const pages = ['/', '/services', '/gallery', '/about', '/contact']
const today = new Date().toISOString().slice(0, 10)

writeFileSync(
  'dist/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((p) => `  <url><loc>${url}${p}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`,
)
writeFileSync('dist/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${url}/sitemap.xml\n`)
console.log(`sitemap.xml and robots.txt written for ${url}`)
