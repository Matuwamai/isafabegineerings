import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react'
import { siteConfig, whatsappLink } from '../siteConfig'
import { allServices, serviceGroups } from '../data/services'
import Seo from '../components/Seo'
import SmartImage from '../components/SmartImage'
import { CtaBand, PageHero } from '../components/Sections'

export default function Services() {
  return (
    <>
      <Seo
        title="Welding, Fabrication & Steel Fixing in Thika"
        path="/services"
        description={`Gates, doors, grills, railings, roof trusses, carports, rebar fixing, metal furniture, industrial fabrication and tank towers in ${siteConfig.location.town}.`}
      />
      <PageHero eyebrow="Our services" title="Welding, fabrication & steel fixing">
        Everything is made to measure, welded properly and finished neatly. Choose a service below or tell us about a
        custom job.
      </PageHero>

      {/* Quick jump to a category */}
      <nav aria-label="Service categories" className="border-b border-steel-800 bg-steel-900">
        <ul className="container-x flex flex-wrap gap-2 py-4">
          {allServices.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="flex items-center gap-2 rounded-full border border-steel-700 px-3 py-1.5 text-sm text-steel-200 transition hover:border-accent hover:text-accent"
              >
                <s.icon className="h-4 w-4 text-accent" aria-hidden="true" /> {s.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {serviceGroups.map((group, gi) => (
        <section key={group.id} className={gi % 2 ? 'bg-ink py-20' : 'py-20'}>
          <div className="container-x">
            <p className="eyebrow">{`0${gi + 1}`}</p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">{group.title}</h2>
            <p className="mt-3 max-w-2xl text-steel-200">{group.intro}</p>

            <div className="mt-12 space-y-16">
              {group.services.map((s, i) => (
                <article key={s.id} id={s.id} className="grid scroll-mt-24 gap-8 lg:grid-cols-5 lg:gap-12">
                  <div className={`lg:col-span-2 ${i % 2 ? 'lg:order-2' : ''}`}>
                    <SmartImage
                      src={s.image}
                      alt={s.name}
                      className="aspect-[4/3] rounded-lg ring-1 ring-steel-800 lg:sticky lg:top-24"
                    />
                  </div>
                  <div className="lg:col-span-3">
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent">
                        <s.icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                      <h3 className="text-2xl font-bold text-white">
                        <Link to={`/services/${s.id}`} className="hover:text-accent">
                          {s.name}
                        </Link>
                      </h3>
                    </div>
                    <p className="mt-4 text-lg text-steel-200">{s.summary}</p>

                    <div className={`mt-6 grid gap-8 ${s.lists.length > 1 ? 'sm:grid-cols-2' : ''}`}>
                      {s.lists.map((list) => (
                        <div key={list.title || s.id}>
                          {list.title && (
                            <h4 className="mb-3 border-b border-steel-800 pb-2 text-sm font-semibold text-accent">
                              {list.title}
                            </h4>
                          )}
                          <ul className={`grid gap-x-6 gap-y-2.5 ${s.lists.length > 1 ? '' : 'sm:grid-cols-2'}`}>
                            {list.items.map((item) => (
                              <li key={item} className="flex items-start gap-2 text-sm text-steel-200">
                                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" /> {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <a
                      href={whatsappLink(`Hello ${siteConfig.name}, I would like a quote for ${s.name.toLowerCase()}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary mt-8"
                    >
                      <MessageCircle className="h-4 w-4" aria-hidden="true" /> Get a quote
                    </a>
                    <Link to={`/services/${s.id}`} className="btn-ghost mt-8 ml-3">
                      More about {s.name.toLowerCase()} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CtaBand
        title="Don't see what you need?"
        text="If it's made of steel, we can probably build it. Send us a photo or sketch on WhatsApp."
      />
    </>
  )
}
