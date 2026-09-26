import { Compass, HardHat, Handshake, Target } from 'lucide-react'
import { siteConfig } from '../siteConfig'
import Seo from '../components/Seo'
import SmartImage from '../components/SmartImage'
import { CtaBand, PageHero, SectionHeading } from '../components/Sections'

const values = [
  { icon: HardHat, title: 'Safety first', text: 'Proper protective gear and safe working practice on every job and site.' },
  { icon: Target, title: 'Precision', text: 'Accurate measurements and square, level work that fits properly.' },
  { icon: Handshake, title: 'Honesty', text: 'Clear quotes, no hidden costs, and straight answers about materials.' },
  { icon: Compass, title: 'Growth', text: 'Building towards a full engineering company serving the region.' },
]

export default function About() {
  const years = siteConfig.yearsExperience
  return (
    <>
      <Seo
        title="About"
        path="/about"
        description={`${siteConfig.name} is a welding and fabrication company in ${siteConfig.location.area}, ${siteConfig.location.town}, founded by an experienced fabricator.`}
      />
      <PageHero eyebrow="About us" title={`The story behind ${siteConfig.name}`} />

      <section className="py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <SmartImage
            src="/images/about.jpg"
            alt="Fabricator measuring steel in the workshop"
            className="aspect-[4/3] rounded-lg ring-1 ring-steel-800"
          />
          <div className="space-y-5 text-steel-200">
            <SectionHeading eyebrow="Who we are" title="Built on real workshop experience" />
            <p>
              {siteConfig.name} was started by a fabricator who has spent
              {years ? ` over ${years} years ` : ' years '}
              working in welding and fabrication workshops: cutting, welding, grinding, painting and installing steel
              work for homes and businesses.
            </p>
            <p>
              After years of building for others, he started {siteConfig.name} to give clients in{' '}
              {siteConfig.location.area}, {siteConfig.location.town} and the surrounding areas direct access to quality
              steel work, with fair prices, honest advice and the personal attention of the person doing the job.
            </p>
            <p>
              Today we focus on welding, fabrication and steel fixing. Our goal is to grow into a full engineering
              company that can take on bigger structural and industrial projects.
            </p>
          </div>
        </div>
      </section>

      <section className="steel-grid border-y border-steel-800 bg-ink py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Our values" title="How we work" center />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-lg border border-steel-800 bg-steel-900 p-6">
                <v.icon className="h-7 w-7 text-spark" aria-hidden="true" />
                <h3 className="mt-3 text-lg font-semibold text-white">{v.title}</h3>
                <p className="mt-2 text-sm text-steel-400">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x grid gap-8 md:grid-cols-2">
          <div className="rounded-lg border-l-4 border-spark bg-steel-900 p-8">
            <h2 className="text-2xl font-bold text-white">Our mission</h2>
            <p className="mt-3 text-steel-200">
              To deliver strong, neatly finished steel work that makes homes and businesses safer and better looking, on
              time and at a fair price.
            </p>
          </div>
          <div className="rounded-lg border-l-4 border-spark bg-steel-900 p-8">
            <h2 className="text-2xl font-bold text-white">Our vision</h2>
            <p className="mt-3 text-steel-200">
              To grow from a trusted local fabrication workshop into a leading engineering company in {siteConfig.location.county}{' '}
              and beyond.
            </p>
          </div>
        </div>
      </section>

      <CtaBand title="Let's build something strong" />
    </>
  )
}
