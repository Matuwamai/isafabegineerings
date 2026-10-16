import { Link } from 'react-router-dom'
import { ArrowRight, Flame, Hammer, MapPin, MessageCircle, PaintRoller, Ruler, ShieldCheck, Truck, Wrench } from 'lucide-react'
import { siteConfig, whatsappLink } from '../siteConfig'
import { allServices } from '../data/services'
import { featuredWork } from '../data/work'
import WorkPhoto from '../components/WorkPhoto'
import Seo from '../components/Seo'
import SmartImage from '../components/SmartImage'
import { CtaBand, SectionHeading } from '../components/Sections'

const reasons = [
  {
    icon: Flame,
    title: 'Hands-on welding experience',
    text: 'Built on years of real workshop and site experience in welding and fabrication.',
  },
  {
    icon: Ruler,
    title: 'Made to measure',
    text: 'We measure on site and fabricate to your exact sizes, so everything fits the first time.',
  },
  {
    icon: ShieldCheck,
    title: 'Strong, quality steel',
    text: 'Proper gauges, solid welds and anti-rust primer. Steel work that stays strong for years.',
  },
  {
    icon: PaintRoller,
    title: 'Neat finishing',
    text: 'Ground welds, smooth edges and clean paint, because the finish matters as much as the strength.',
  },
]

const steps = [
  { icon: MessageCircle, title: 'Contact us', text: 'Call or WhatsApp with what you need. Photos help.' },
  { icon: Ruler, title: 'Site visit & quote', text: 'We measure, advise on design and give you a clear price.' },
  { icon: Wrench, title: 'Fabrication', text: 'Your work is cut, welded, ground and painted in steel.' },
  { icon: Truck, title: 'Installation', text: 'We deliver, fix and hand over a clean, finished job.' },
]

export default function Home() {
  const years = siteConfig.yearsExperience
  return (
    <>
      <Seo
        path="/"
        description={`Gates, steel doors, grills, railings, roof trusses, rebar fixing, tank towers and metal fabrication anywhere in Kenya. Call ${siteConfig.phoneDisplay}.`}
      />

      {/* Hero */}
      <section className="relative isolate flex min-h-[calc(100svh-4rem)] flex-col overflow-hidden bg-ink">
        <SmartImage
          src="/images/hero.jpg"
          alt="Welder at work with sparks flying"
          eager
          priority
          className="absolute inset-0 -z-10"
          imgClassName="object-[72%_center]"
        />
        {/* Dark only where the text sits, so the welder and sparks on the right stay bright. */}
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/75 to-ink/20 md:bg-gradient-to-r md:from-ink md:via-ink/70 md:to-transparent"
          aria-hidden="true"
        />
        <div className="container-x flex flex-1 flex-col justify-end pt-40 pb-14 md:justify-center md:py-24">
          <h1 className="eyebrow flex items-start gap-2">
            <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" /> Welding, Fabrication &amp; Steel Fixing · Anywhere in Kenya
          </h1>
          <p className="mt-4 max-w-2xl border-l-4 border-accent pl-5 font-display text-5xl leading-[1.05] font-bold tracking-wide text-white uppercase drop-shadow-lg sm:text-6xl lg:text-7xl">
            <span className="block">Strong steel.</span>
            <span className="block text-accent">Clean welds.</span>
            <span className="block">Built to last.</span>
          </p>
          <p className="mt-6 max-w-lg text-lg text-steel-100 drop-shadow">
            Gates, railings, roofing structures, rebar steel fixing, custom metal products and industrial fabrication
            for homes, businesses and construction sites anywhere in Kenya.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary">
              Get a free quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp us
            </a>
          </div>
          <ul className="mt-10 flex max-w-xl flex-wrap gap-2 text-sm text-steel-100">
            {['All 47 counties', years ? `${years}+ years experience` : 'Experienced welder', 'Free quotation', 'Installation included'].map(
              (t) => (
                <li key={t} className="flex items-center gap-2 rounded-full border border-white/15 bg-ink/60 px-3 py-1.5 backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" /> {t}
                </li>
              ),
            )}
          </ul>
        </div>
        <div className="hazard-stripe h-1.5" aria-hidden="true" />
      </section>

      {/* Services */}
      <section className="bg-steel-100 py-20 text-ink">
        <div className="container-x">
          <SectionHeading eyebrow="What we do" title="Our services" dark={false}>
            From a window grill to a warehouse roof, and from rebar for your foundation to a water-tank tower, we handle the steel work from measurement to installation.
          </SectionHeading>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {allServices.map((s) => {
              const items = s.lists.flatMap((l) => l.items)
              return (
                <Link
                  key={s.id}
                  to={`/services/${s.id}`}
                  className="group flex flex-col overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-steel-200 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <SmartImage src={s.image} alt={s.name} className="aspect-[4/3]" imgClassName="transition duration-500 group-hover:scale-105" />
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-xs font-semibold tracking-wider text-steel-400 uppercase">{s.group}</p>
                    <div className="mt-1 flex items-start gap-2">
                      <s.icon className="mt-0.5 h-5 w-5 shrink-0 text-accent-700" aria-hidden="true" />
                      <h3 className="text-lg leading-snug font-semibold">{s.name}</h3>
                    </div>
                    <p className="mt-2 text-sm text-steel-700">{s.summary}</p>
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {items.slice(0, 3).map((item) => (
                        <li key={item} className="rounded bg-steel-100 px-2 py-0.5 text-xs text-steel-700">
                          {item}
                        </li>
                      ))}
                      <li className="rounded bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent-700">
                        +{items.length - 3} more
                      </li>
                    </ul>
                    <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-accent-700">
                      View all <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              )
            })}

            <a
              href={whatsappLink(`Hello ${siteConfig.name}, I have a custom steel job I would like a quote for.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-lg bg-ink p-6 text-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div>
                <Hammer className="h-8 w-8 text-accent" aria-hidden="true" />
                <h3 className="mt-4 text-2xl font-bold">Have a custom job?</h3>
                <p className="mt-2 text-sm text-steel-200">
                  If it's made of steel, we can build it. Send a photo or sketch and get a quote.
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                <MessageCircle className="h-4 w-4" aria-hidden="true" /> Send on WhatsApp
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Recent work: real photos */}
      <section className="py-20">
        <div className="container-x">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading eyebrow="Our work" title="Recent work">
              Real photos of gates, beds, roof structures and fencing by our team.
            </SectionHeading>
            <Link to="/gallery" className="btn-ghost shrink-0">
              See all photos <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredWork.map((photo) => (
              <li key={photo.file}>
                <Link to="/gallery" className="block h-full">
                  <WorkPhoto photo={photo} aspect="aspect-[3/4]" className="h-full" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Why choose us" title="Workmanship you can trust">
              A new company, built by a fabricator who has spent years doing the work with his own hands. Every job
              gets the care of someone whose name is on it.
            </SectionHeading>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {reasons.map((r) => (
                <div key={r.title} className="rounded-lg border border-steel-800 bg-steel-900 p-5">
                  <r.icon className="h-7 w-7 text-accent" aria-hidden="true" />
                  <h3 className="mt-3 text-lg font-semibold text-white">{r.title}</h3>
                  <p className="mt-2 text-sm text-steel-400">{r.text}</p>
                </div>
              ))}
            </div>
          </div>
          <SmartImage
            src="/images/work/fabricator-on-site.jpg"
            alt="Isafab Engineering founder on site in front of a steel roof frame"
            className="aspect-[4/5] rounded-lg ring-1 ring-steel-800"
          />
        </div>
      </section>

      {/* Process */}
      <section className="steel-grid border-y border-steel-800 bg-ink py-20">
        <div className="container-x">
          <SectionHeading eyebrow="How it works" title="From idea to installation" center />
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="relative rounded-lg border border-steel-800 bg-steel-900 p-6">
                <span className="font-display text-5xl font-bold text-steel-800" aria-hidden="true">
                  0{i + 1}
                </span>
                <s.icon className="absolute top-6 right-6 h-6 w-6 text-accent" aria-hidden="true" />
                <h3 className="mt-2 text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-steel-400">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Service area: he works anywhere in Kenya */}
      <section className="relative overflow-hidden py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Where we work</p>
            <h2 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
              We work <span className="text-accent">anywhere in Kenya</span>
            </h2>
            <p className="mt-5 text-lg text-steel-200">
              Wherever your project is, we come to you. We visit your site to measure, fabricate your work, then
              deliver and install it, for homes, businesses, farms, factories and construction sites in every county.
            </p>
            <p className="mt-3 text-sm text-steel-400">
              Our base is in {siteConfig.location.area}, {siteConfig.location.town}.
            </p>
            <a
              href={whatsappLink(`Hello ${siteConfig.name}, I have a project in (town/county): `)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" /> Tell us where your project is
            </a>
          </div>
          <div className="rounded-xl border border-steel-800 bg-steel-900 p-6 sm:p-8">
            <p className="font-display text-6xl font-bold text-accent sm:text-7xl">47</p>
            <p className="font-display text-xl tracking-wide text-white uppercase">Counties. One team.</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {siteConfig.serviceAreas.map((a) => (
                <li key={a} className="rounded-full border border-steel-700 px-3 py-1.5 text-sm text-steel-200">
                  <MapPin className="mr-1 inline h-3.5 w-3.5 text-accent" aria-hidden="true" />
                  {a}
                </li>
              ))}
              <li className="rounded-full bg-accent-600 px-3 py-1.5 text-sm font-semibold text-ink">
                + anywhere else in Kenya
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
