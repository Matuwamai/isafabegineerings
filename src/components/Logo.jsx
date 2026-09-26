// Temporary text logo. Replace with the real logo image once it is ready.
export default function Logo({ className = '' }) {
  return (
    <span className={`flex items-center gap-2 ${className}`}>
      <img src="/favicon.svg" alt="" className="h-8 w-8" width="32" height="32" />
      <span className="font-display leading-none uppercase">
        <span className="block text-xl font-bold tracking-wider text-spark">Isafab</span>
        <span className="block text-[0.65rem] font-medium tracking-[0.35em] text-steel-200">Engineering</span>
      </span>
    </span>
  )
}
