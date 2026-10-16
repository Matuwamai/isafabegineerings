import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Head } from 'vite-react-ssg'
import { MapPin, MessageCircle, Phone } from 'lucide-react'
import { siteConfig, telLink, whatsappLink } from '../siteConfig'
import { allServices } from '../data/services'
import Header from './Header'
import Footer from './Footer'

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: siteConfig.name,
  description: `${siteConfig.tagline} for homes, businesses and construction sites across Kenya. Based in ${siteConfig.location.area}, ${siteConfig.location.town}.`,
  url: siteConfig.url,
  logo: `${siteConfig.url}/brand/icon-512.png`,
  image: `${siteConfig.url}/images/og-cover.jpg`,
  telephone: siteConfig.phoneIntl,
  ...(siteConfig.email && { email: siteConfig.email }),
  address: {
    '@type': 'PostalAddress',
    addressLocality: `${siteConfig.location.area}, ${siteConfig.location.town}`,
    addressRegion: siteConfig.location.county,
    addressCountry: siteConfig.location.country,
  },
  areaServed: { '@type': 'Country', name: 'Kenya' },
  sameAs: Object.values(siteConfig.social).filter(Boolean),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Welding, fabrication & steel fixing services',
    itemListElement: allServices.map((s) => ({
      '@type': 'OfferCatalog',
      name: s.name,
      itemListElement: s.lists
        .flatMap((l) => l.items)
        .map((item) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: item } })),
    })),
  },
}

export default function Layout() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return (
    <>
      <Head>
        <script type="application/ld+json">{JSON.stringify(localBusiness)}</script>
      </Head>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-accent-600 focus:p-3 focus:text-ink">
        Skip to content
      </a>
      <div className="bg-accent-600 text-ink">
        <p className="container-x flex items-center justify-center gap-x-4 gap-y-1 py-1.5 text-center text-xs font-semibold tracking-wide uppercase sm:text-sm">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4" aria-hidden="true" /> We work anywhere in Kenya: all 47 counties
          </span>
          <a href={telLink} className="hidden items-center gap-1.5 hover:underline sm:flex">
            <Phone className="h-4 w-4" aria-hidden="true" /> {siteConfig.phoneDisplay}
          </a>
        </p>
      </div>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed right-4 bottom-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-ink shadow-lg shadow-black/40 transition hover:scale-105"
      >
        <MessageCircle className="h-7 w-7" aria-hidden="true" />
      </a>
    </>
  )
}
