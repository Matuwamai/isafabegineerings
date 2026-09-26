import { CheckCircle2, MessageCircle } from 'lucide-react'
import { siteConfig, whatsappLink } from '../siteConfig'
import { serviceGroups } from '../data/services'
import Seo from '../components/Seo'
import SmartImage from '../components/SmartImage'
import { CtaBand, PageHero } from '../components/Sections'

export default function Services() {
  return (
    <>
      <Seo
        title="Services"
        path="/services"
        description={`Steel doors, steel beds, steel windows, modern gates, roofing and railings by ${siteConfig.name} in ${siteConfig.location.area}, ${siteConfig.location.town}. Free quotation.`}
      />
      <PageHero eyebrow="Our services" title="Welding, fabrication & steel fixing">
        Everything is made to measure, welded properly and finished neatly. Choose a service below or tell us about a
        custom job.
      </PageHero>

      {serviceGroups.map((group, gi) => (
        <section key={group.id} className={gi % 2 ? 'bg-ink py-20' : 'py-20'}>
          <div className="container-x">
            <p className="eyebrow">{`0${gi + 1}`}</p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">{group.title}</h2>
            <p className="mt-3 max-w-2xl text-steel-200">{group.intro}</p>

            <div className="mt-12 space-y-16">
              {group.services.map((s, i) => (
                <article
                  key={s.id}
                  id={s.id}
                  className="grid scroll-mt-24 items-center gap-8 lg:grid-cols-2 lg:gap-14"
                >
                  <SmartImage
                    src={s.image}
                    alt={s.name}
                    className={`aspect-[4/3] rounded-lg ring-1 ring-steel-800 ${i % 2 ? 'lg:order-2' : ''}`}
                  />
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-md bg-spark/10 text-spark">
                        <s.icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                      <h3 className="text-2xl font-bold text-white">{s.name}</h3>
                    </div>
                    <p className="mt-4 text-lg text-steel-200">{s.summary}</p>
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-steel-200">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-spark" aria-hidden="true" /> {p}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={whatsappLink(`Hello ${siteConfig.name}, I would like a quote for ${s.name.toLowerCase()}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary mt-8"
                    >
                      <MessageCircle className="h-4 w-4" aria-hidden="true" /> Get a quote for {s.name.toLowerCase()}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CtaBand title="Need something custom?" text="Shelves, stands, grills, tank stands and more. If it's steel, ask us." />
    </>
  )
}
