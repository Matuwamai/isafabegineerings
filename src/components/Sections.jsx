import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { whatsappLink } from '../siteConfig'

export function PageHero({ eyebrow, title, children }) {
  return (
    <section className="steel-grid relative border-b border-steel-800 bg-ink">
      <div className="container-x py-16 sm:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold text-white sm:text-5xl">{title}</h1>
        {children && <p className="mt-5 max-w-2xl text-lg text-steel-200">{children}</p>}
      </div>
    </section>
  )
}

export function SectionHeading({ eyebrow, title, children, center = false, dark = true }) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={`mt-3 text-3xl font-bold sm:text-4xl ${dark ? 'text-white' : 'text-ink'}`}>{title}</h2>
      {children && <p className={`mt-4 ${dark ? 'text-steel-200' : 'text-steel-700'}`}>{children}</p>}
    </div>
  )
}

export function CtaBand({ title = 'Have a project in mind?', text = 'Tell us what you need and get a free quotation. We reply fast on WhatsApp.' }) {
  return (
    <section className="relative overflow-hidden bg-accent-600">
      <div className="container-x flex flex-col items-start justify-between gap-6 py-12 md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">{title}</h2>
          <p className="mt-2 max-w-xl text-ink/80">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="btn bg-ink text-white hover:bg-steel-800">
            Request a quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn border-2 border-ink text-ink hover:bg-ink hover:text-white"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
