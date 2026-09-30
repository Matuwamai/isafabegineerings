import { useState } from 'react'
import { Info } from 'lucide-react'
import { siteConfig } from '../siteConfig'
import { allServices } from '../data/services'
import Seo from '../components/Seo'
import SmartImage from '../components/SmartImage'
import { CtaBand, PageHero } from '../components/Sections'

// Add real project photos here as jobs are completed, e.g.
// { src: '/images/projects/gate-kiganjo.jpg', title: 'Sliding gate, Kiganjo', category: 'Gates & Security' }
const extraImages = [
  { src: '/images/gallery-gate.jpg', title: 'Modern gate', category: 'Gates & Security' },
  { src: '/images/steel-doors.jpg', title: 'Steel door', category: 'Gates & Security' },
  { src: '/images/steel-windows.jpg', title: 'Steel windows & grills', category: 'Gates & Security' },
  { src: '/images/gallery-roof.jpg', title: 'Steel roof trusses', category: 'Roofing & Light Steel Structures' },
  { src: '/images/gallery-welding.jpg', title: 'Welding in progress', category: 'Workshop' },
  { src: '/images/gallery-grinding.jpg', title: 'Grinding & finishing', category: 'Workshop' },
]

const images = [...allServices.map((s) => ({ src: s.image, title: s.name, category: s.name })), ...extraImages]
const categories = ['All', ...new Set(images.map((i) => i.category))]

export default function Gallery() {
  const [active, setActive] = useState('All')
  const shown = active === 'All' ? images : images.filter((i) => i.category === active)

  return (
    <>
      <Seo
        title="Gallery"
        path="/gallery"
        description={`The kind of steel work ${siteConfig.name} does: gates, doors, grills, railings, roofing structures, steel fixing, metal furniture and industrial fabrication in ${siteConfig.location.town}.`}
      />
      <PageHero eyebrow="Gallery" title="What we build">
        A look at the kind of steel work we do.
      </PageHero>

      <section className="py-16">
        <div className="container-x">
          <p className="flex items-start gap-2 rounded-md border border-steel-800 bg-steel-900 p-4 text-sm text-steel-400">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
            These are illustrations of the type of work we do. Photos of our own completed projects will be added here
            soon.
          </p>

          <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter gallery">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                aria-pressed={active === c}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  active === c ? 'bg-accent-600 text-white' : 'border border-steel-700 text-steel-200 hover:border-accent'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((img) => (
              <li key={img.src} className="group relative overflow-hidden rounded-lg ring-1 ring-steel-800">
                <SmartImage
                  src={img.src}
                  alt={img.title}
                  className="aspect-[4/3]"
                  imgClassName="transition duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-4">
                  <p className="font-display text-lg tracking-wide text-white uppercase">{img.title}</p>
                  <p className="text-xs text-accent">{img.category}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
