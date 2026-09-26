import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Head } from 'vite-react-ssg'
import { MessageCircle } from 'lucide-react'
import { siteConfig, whatsappLink } from '../siteConfig'
import { allServices } from '../data/services'
import Header from './Header'
import Footer from './Footer'

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: siteConfig.name,
  description: `${siteConfig.tagline} in ${siteConfig.location.area}, ${siteConfig.location.town}.`,
  url: siteConfig.url,
  telephone: siteConfig.phoneIntl,
  address: {
    '@type': 'PostalAddress',
    addressLocality: `${siteConfig.location.area}, ${siteConfig.location.town}`,
    addressRegion: siteConfig.location.county,
    addressCountry: siteConfig.location.country,
  },
  areaServed: siteConfig.serviceAreas,
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
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-spark focus:p-3 focus:text-ink">
        Skip to content
      </a>
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
