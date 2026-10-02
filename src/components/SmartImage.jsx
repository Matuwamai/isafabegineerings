import { useEffect, useRef, useState } from 'react'
import { ImageOff } from 'lucide-react'

// Shows the image if it exists; otherwise a styled steel placeholder naming the file
// that still needs to be added to /public/images.
export default function SmartImage({ src, alt, className = '', imgClassName = '', eager = false, priority = false }) {
  const ref = useRef(null)
  const [failed, setFailed] = useState(false)

  // The image may fail before React hydrates, so check once on mount too.
  useEffect(() => {
    const img = ref.current
    if (img && img.complete && img.naturalWidth === 0) setFailed(true)
  }, [src])

  return (
    // Callers can pass `absolute` to use the image as a background; otherwise it is `relative`.
    <div className={`${className.includes('absolute') ? '' : 'relative'} overflow-hidden bg-steel-800 ${className}`}>
      {failed ? (
        <div className="steel-grid absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-steel-700 to-steel-900 p-4 text-center">
          <ImageOff className="h-7 w-7 text-steel-400" aria-hidden="true" />
          <span className="text-xs text-steel-400">{src.split('/').pop()}</span>
        </div>
      ) : (
        <img
          ref={ref}
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          fetchpriority={priority ? 'high' : undefined}
          decoding="async"
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      )}
    </div>
  )
}
