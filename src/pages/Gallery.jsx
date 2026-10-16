import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { siteConfig } from '../siteConfig'
import { workCategories, workPhotos } from '../data/work'
import Seo from '../components/Seo'
import WorkPhoto from '../components/WorkPhoto'
import { CtaBand, PageHero } from '../components/Sections'

const categories = ['All', ...workCategories]

export default function Gallery() {
  const [active, setActive] = useState('All')
  const [open, setOpen] = useState(null) // index into `shown` of the photo being viewed large
  const shown = active === 'All' ? workPhotos : workPhotos.filter((p) => p.category === active)

  const step = (dir) => setOpen((i) => (i + dir + shown.length) % shown.length)

  useEffect(() => {
    if (open === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(null)
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  const current = open !== null ? shown[open] : null

  return (
    <>
      <Seo
        title="Gallery: Gates, Roofs, Beds & Steel Work"
        path="/gallery"
        image={workPhotos[0].src}
        description={`Real photos of steel work by ${siteConfig.name}: gates, fencing, roof structures, railings, steel beds and site work. We work anywhere in Kenya.`}
      />
      <PageHero eyebrow="Gallery" title="Our work">
        Real photos of gates, roof structures, beds and site work by our team. Tap any photo to see it larger.
      </PageHero>

      <section className="py-16">
        <div className="container-x">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter photos">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                aria-pressed={active === c}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  active === c ? 'bg-accent-600 text-ink' : 'border border-steel-700 text-steel-200 hover:border-accent'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <ul className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
            {shown.map((photo, i) => (
              <li key={photo.file} className="mb-4 break-inside-avoid">
                <WorkPhoto photo={photo} onOpen={() => setOpen(i)} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-ink/95 p-4"
          onClick={() => setOpen(null)}
        >
          <button type="button" className="absolute top-4 right-4 rounded-md p-2 text-white hover:text-accent" aria-label="Close" onClick={() => setOpen(null)}>
            <X className="h-7 w-7" />
          </button>
          <img
            src={current.src}
            alt={current.caption}
            className="max-h-[80vh] max-w-full rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="mt-4 text-center text-white">
            {current.caption}
            <span className="ml-2 text-sm text-accent">{current.category}</span>
          </p>
          {shown.length > 1 && (
            <div className="mt-4 flex gap-3" onClick={(e) => e.stopPropagation()}>
              <button type="button" className="btn-ghost px-3 py-2" aria-label="Previous photo" onClick={() => step(-1)}>
                <ChevronLeft className="h-5 w-5" />
              </button>
              <span className="self-center text-sm text-steel-400">
                {open + 1} / {shown.length}
              </span>
              <button type="button" className="btn-ghost px-3 py-2" aria-label="Next photo" onClick={() => step(1)}>
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      )}

      <CtaBand title="Want work like this?" />
    </>
  )
}
