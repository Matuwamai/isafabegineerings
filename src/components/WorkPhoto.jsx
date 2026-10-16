// A real work photo with its caption underneath.
// Pass `aspect` (e.g. "aspect-[4/3]") to crop to a fixed shape; otherwise the photo keeps its own shape.
export default function WorkPhoto({ photo, aspect = '', onOpen, className = '' }) {
  const img = (
    <img
      src={photo.src}
      alt={photo.caption}
      width={photo.width}
      height={photo.height}
      loading="lazy"
      decoding="async"
      className={`w-full bg-steel-800 transition duration-500 group-hover:scale-[1.03] ${aspect ? `${aspect} object-cover` : 'h-auto'}`}
    />
  )
  return (
    <figure className={`group overflow-hidden rounded-lg border border-steel-800 bg-steel-900 ${className}`}>
      {onOpen ? (
        <button type="button" onClick={onOpen} className="block w-full cursor-zoom-in overflow-hidden" aria-label={`View larger: ${photo.caption}`}>
          {img}
        </button>
      ) : (
        <div className="overflow-hidden">{img}</div>
      )}
      <figcaption className="px-4 py-3">
        <span className="block text-sm font-medium text-steel-100">{photo.caption}</span>
        <span className="mt-0.5 block text-xs text-accent">{photo.category}</span>
      </figcaption>
    </figure>
  )
}
