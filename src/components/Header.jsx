import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Phone, X } from 'lucide-react'
import { telLink } from '../siteConfig'
import Logo from './Logo'

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])

  const linkClass = ({ isActive }) =>
    `font-display text-sm tracking-widest uppercase transition hover:text-accent-600 ${isActive ? 'text-accent-600' : 'text-brand'}`

  return (
    <header className="sticky top-0 z-40 border-b border-steel-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link to="/" aria-label="Isafab Engineering home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={telLink} className="btn-primary px-3 py-2 sm:px-4">
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Call now</span>
            <span className="sm:hidden">Call</span>
          </a>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-md border border-steel-200 text-brand md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t border-steel-200 bg-white md:hidden" aria-label="Mobile">
          <ul className="container-x flex flex-col py-2">
            {navLinks.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) =>
                    `block border-b border-steel-100 py-3 font-display tracking-widest uppercase ${isActive ? 'text-accent-600' : 'text-brand'}`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
