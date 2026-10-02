// `light` renders the white version for dark backgrounds (e.g. the footer).
export default function Logo({ light = false, className = '' }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <img
        src={light ? '/brand/logo-mark-white.png' : '/brand/logo-mark.png'}
        alt=""
        className="h-11 w-11"
        width="44"
        height="44"
      />
      <span className="font-display leading-none uppercase">
        <span className={`block text-xl font-bold tracking-wider ${light ? 'text-accent' : 'text-brand'}`}>Isafab</span>
        <span className={`block text-[0.65rem] font-semibold tracking-[0.3em] ${light ? 'text-steel-200' : 'text-steel-700'}`}>
          Engineering
        </span>
      </span>
    </span>
  )
}
