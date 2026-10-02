import { Link } from 'react-router-dom'
import { Head } from 'vite-react-ssg'
import { ArrowRight, CheckCircle2, ChevronDown, ChevronRight, MessageCircle, Phone } from 'lucide-react'
import { siteConfig, telLink, whatsappLink } from '../siteConfig'
import { allServices } from '../data/services'
import { serviceDetails } from '../data/serviceDetails'
import Seo from '../components/Seo'
import SmartImage from '../components/SmartImage'
import { CtaBand } from '../components/Sections'

export default function ServiceDetail({ service }) {
  const detail = serviceDetails[service.id]
  const path = `/services/${service.id}`
  const related = allServices.filter((s) => s.id !== service.id)

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: detail.seoTitle,
      serviceType: service.name,
      description: detail.metaDescription,
      url: `${siteConfig.url}${path}`,
      image: `${siteConfig.url}${service.image}`,
      areaServed: siteConfig.serviceAreas,
      provider: { '@type': 'HomeAndConstructionBusiness', name: siteConfig.name, url: siteConfig.url, telephone: siteConfig.phoneIntl },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteConfig.url}/` },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteConfig.url}/services` },
        { '@type': 'ListItem', position: 3, name: service.name, item: `${siteConfig.url}${path}` },
      ],
    },
  ]

  return (
    <>
      <Seo title={detail.seoTitle} description={detail.metaDescription} path={path} image={service.image} />
      <Head>
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Head>

      <section className="steel-grid border-b border-steel-800 bg-ink">
        <div className="container-x py-14 sm:py-16">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-steel-400">
              <li>
                <Link to="/" className="hover:text-accent">Home</Link>
              </li>
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
              <li>
                <Link to="/services" className="hover:text-accent">Services</Link>
              </li>
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
              <li aria-current="page" className="text-steel-200">{service.name}</li>
            </ol>
          </nav>
          <p className="eyebrow mt-6">{service.group}</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold text-white sm:text-5xl">{detail.seoTitle}</h1>
          <p className="mt-5 max-w-2xl text-lg text-steel-200">{service.summary}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-14">
          <SmartImage
            src={service.image}
            alt={`${service.name} by ${siteConfig.name}, ${siteConfig.location.town}`}
            eager
            className="aspect-[4/3] rounded-lg ring-1 ring-steel-800"
          />
          <div>
            <h2 className="text-2xl font-bold text-white">{service.name} made to measure</h2>
            {detail.intro.map((p) => (
              <p key={p.slice(0, 24)} className="mt-4 text-steel-200">
                {p}
              </p>
            ))}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsappLink(`Hello ${siteConfig.name}, I would like a quote for ${service.name.toLowerCase()}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" /> Get a quote on WhatsApp
              </a>
              <a href={telLink} className="btn-ghost">
                <Phone className="h-4 w-4" aria-hidden="true" /> {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-steel-800 bg-ink py-16">
        <div className="container-x">
          <p className="eyebrow">What we make</p>
          <h2 className="mt-2 text-3xl font-bold text-white">{service.name}: everything we offer</h2>
          <div className={`mt-8 grid gap-10 ${service.lists.length > 1 ? 'md:grid-cols-2' : ''}`}>
            {service.lists.map((list) => (
              <div key={list.title || service.id}>
                {list.title && <h3 className="mb-4 border-b border-steel-800 pb-2 text-lg font-semibold text-accent">{list.title}</h3>}
                <ul className={`grid gap-x-8 gap-y-3 ${service.lists.length > 1 ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3'}`}>
                  {list.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-steel-200">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x max-w-3xl">
          <p className="eyebrow">Questions</p>
          <h2 className="mt-2 text-3xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-8 divide-y divide-steel-800 rounded-lg border border-steel-800">
            {detail.faqs.map((f) => (
              <details key={f.q} className="group p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-white">
                  {f.q}
                  <ChevronDown className="h-5 w-5 shrink-0 text-accent transition group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="mt-3 text-steel-200">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-steel-800 bg-ink py-16">
        <div className="container-x">
          <h2 className="text-2xl font-bold text-white">Other services</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s) => (
              <li key={s.id}>
                <Link
                  to={`/services/${s.id}`}
                  className="group flex items-center justify-between gap-3 rounded-lg border border-steel-800 p-4 text-steel-200 transition hover:border-accent hover:text-white"
                >
                  <span className="flex items-center gap-3">
                    <s.icon className="h-5 w-5 text-accent" aria-hidden="true" /> {s.name}
                  </span>
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title={`Need ${service.name.toLowerCase()}?`} />
    </>
  )
}
