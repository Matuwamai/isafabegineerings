import { useState } from 'react'
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'
import { siteConfig, telLink, whatsappLink } from '../siteConfig'
import { allServices } from '../data/services'
import Seo from '../components/Seo'
import SocialIcons from '../components/SocialIcons'
import { PageHero } from '../components/Sections'

const inputClass =
  'mt-1 w-full rounded-md border border-steel-700 bg-steel-900 px-4 py-3 text-steel-100 placeholder:text-steel-400 focus:border-accent focus:outline-none'

// No backend: the form builds a WhatsApp message and opens it, so the request lands straight on his phone.
export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', location: '', service: '', details: '' })
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const message = [
      `Hello ${siteConfig.name}, I would like a quote.`,
      '',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.location ? `Location: ${form.location}` : null,
      `Service: ${form.service || 'Not sure / other'}`,
      form.details ? `Details: ${form.details}` : null,
    ]
      .filter((l) => l !== null)
      .join('\n')
    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer')
  }

  const { location } = siteConfig
  const contacts = [
    { icon: Phone, label: 'Call', value: siteConfig.phoneDisplay, href: telLink },
    { icon: MessageCircle, label: 'WhatsApp', value: siteConfig.phoneDisplay, href: whatsappLink(), external: true },
    siteConfig.email && { icon: Mail, label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { icon: MapPin, label: 'Location', value: `${location.area}, ${location.town}, ${location.county}` },
    { icon: Clock, label: 'Working hours', value: siteConfig.hours },
  ].filter(Boolean)

  return (
    <>
      <Seo
        title="Contact & Quote"
        path="/contact"
        description={`Get a free quote from ${siteConfig.name}. Call or WhatsApp ${siteConfig.phoneDisplay}. Based in ${location.area}, ${location.town}.`}
      />
      <PageHero eyebrow="Contact us" title="Get a free quote">
        Tell us what you need. The fastest way to reach us is WhatsApp. Send photos or rough sizes and we'll get back to
        you quickly.
      </PageHero>

      <section className="py-16">
        <div className="container-x grid gap-10 lg:grid-cols-5">
          <form onSubmit={submit} className="rounded-lg border border-steel-800 bg-steel-900/50 p-6 sm:p-8 lg:col-span-3">
            <h2 className="text-2xl font-bold text-white">Request a quote</h2>
            <p className="mt-1 text-sm text-steel-400">Submitting opens WhatsApp with your details filled in.</p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-medium text-steel-200">
                Your name *
                <input required name="name" value={form.name} onChange={update} className={inputClass} autoComplete="name" />
              </label>
              <label className="block text-sm font-medium text-steel-200">
                Phone number *
                <input
                  required
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={update}
                  placeholder="07XX XXX XXX"
                  className={inputClass}
                  autoComplete="tel"
                />
              </label>
              <label className="block text-sm font-medium text-steel-200">
                Your location
                <input name="location" value={form.location} onChange={update} placeholder="e.g. Thika, Makongeni" className={inputClass} />
              </label>
              <label className="block text-sm font-medium text-steel-200">
                Service
                <select name="service" value={form.service} onChange={update} className={inputClass}>
                  <option value="">Select a service</option>
                  {allServices.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                  <option value="Other / custom work">Other / custom work</option>
                </select>
              </label>
              <label className="block text-sm font-medium text-steel-200 sm:col-span-2">
                Project details
                <textarea
                  name="details"
                  rows={5}
                  value={form.details}
                  onChange={update}
                  placeholder="Sizes, design ideas, quantity, when you need it…"
                  className={inputClass}
                />
              </label>
            </div>
            <button type="submit" className="btn-whatsapp mt-6 w-full sm:w-auto">
              <Send className="h-4 w-4" aria-hidden="true" /> Send via WhatsApp
            </button>
          </form>

          <div className="lg:col-span-2">
            <ul className="space-y-4">
              {contacts.map((c) => {
                const body = (
                  <>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent">
                      <c.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs tracking-wider text-steel-400 uppercase">{c.label}</span>
                      <span className="block font-medium text-white">{c.value}</span>
                    </span>
                  </>
                )
                return (
                  <li key={c.label}>
                    {c.href ? (
                      <a
                        href={c.href}
                        {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="flex items-center gap-4 rounded-lg border border-steel-800 p-4 transition hover:border-accent"
                      >
                        {body}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 rounded-lg border border-steel-800 p-4">{body}</div>
                    )}
                  </li>
                )
              })}
            </ul>
            <div className="mt-8">
              <h2 className="text-lg font-semibold text-white">Follow our work</h2>
              <SocialIcons className="mt-3" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
