import { Head } from 'vite-react-ssg'
import { siteConfig } from '../siteConfig'

export default function Seo({ title, description, path = '/', image = '/images/og-cover.jpg' }) {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} | ${siteConfig.tagline} in Thika`
  const url = `${siteConfig.url}${path}`
  const imageUrl = `${siteConfig.url}${image}`

  return (
    <Head>
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  )
}
