// Runs after the build: writes sitemap.xml and robots.txt using the domain in siteConfig.
// Every pre-rendered page in dist/ is listed, so new pages are picked up automatically.
import { readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { join, relative } from 'node:path'

const url = readFileSync('src/siteConfig.js', 'utf8').match(/url:\s*'([^']+)'/)[1].replace(/\/$/, '')
const today = new Date().toISOString().slice(0, 10)

const findPages = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? findPages(join(dir, e.name)) : e.name === 'index.html' ? [dir] : [],
  )

const pages = findPages('dist')
  .map((dir) => '/' + relative('dist', dir))
  .map((p) => (p === '/' ? p : p.replace(/\/$/, '')))
  .filter((p) => p !== '/404')
  .sort((a, b) => a.split('/').length - b.split('/').length || a.localeCompare(b))

const priority = (p) => (p === '/' ? '1.0' : p.startsWith('/services') ? '0.9' : '0.7')

writeFileSync(
  'dist/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((p) => `  <url><loc>${url}${p}</loc><lastmod>${today}</lastmod><priority>${priority(p)}</priority></url>`).join('\n')}
</urlset>
`,
)
writeFileSync('dist/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${url}/sitemap.xml\n`)
console.log(`sitemap.xml (${pages.length} pages) and robots.txt written for ${url}`)
