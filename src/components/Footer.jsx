import { Link } from 'react-router-dom'
import { Clock, MapPin, MessageCircle, Phone } from 'lucide-react'
import { siteConfig, telLink, whatsappLink } from '../siteConfig'
import { allServices } from '../data/services'
import { navLinks } from './Header'
import Logo from './Logo'
import SocialIcons from './SocialIcons'

export default function Footer() {
  const { location } = siteConfig
  return (
    <footer className="border-t border-steel-800 bg-ink">
      <div className="hazard-stripe h-1.5" aria-hidden="true" />
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-4 text-sm text-steel-400">
            {siteConfig.tagline} in {location.area}, {location.town}. Strong steel work, neatly finished and built to
            last.
          </p>
          <SocialIcons className="mt-5" />
        </div>

        <div>
          <h2 className="text-base text-steel-100">Services</h2>
          <ul className="mt-4 space-y-2 text-sm text-steel-400">
            {allServices.map((s) => (
              <li key={s.id}>
                <Link to={`/services#${s.id}`} className="hover:text-accent">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-base text-steel-100">Quick links</h2>
          <ul className="mt-4 space-y-2 text-sm text-steel-400">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-base text-steel-100">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-steel-400">
            <li>
              <a href={telLink} className="flex items-center gap-2 hover:text-accent">
                <Phone className="h-4 w-4 text-accent" aria-hidden="true" /> {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-accent"
              >
                <MessageCircle className="h-4 w-4 text-accent" aria-hidden="true" /> WhatsApp us
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent" aria-hidden="true" /> {location.area}, {location.town}
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-accent" aria-hidden="true" /> {siteConfig.hours}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-steel-800">
        <p className="container-x py-5 text-xs text-steel-400">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
