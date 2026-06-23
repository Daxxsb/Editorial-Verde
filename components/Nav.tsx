'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/nosotros', label: 'Quiénes somos' },
  { href: '/menu',     label: 'Menú'           },
  { href: '/galeria',  label: 'Galería'         },
  { href: '/contacto', label: 'Contacto'        },
]

export default function Nav() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const path = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-paper/98 shadow-sm backdrop-blur-md border-b border-light/60'
        : 'bg-paper/95 backdrop-blur border-b border-light'
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo — typographic mark only */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-px h-7 bg-copper transition-all duration-300 group-hover:h-9" />
          <div>
            <p className="font-display font-bold text-forest text-sm leading-tight tracking-widest">PATITAS</p>
            <p className="text-copper text-[9px] tracking-[0.28em] leading-tight">SOCIAL CLUB</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              className={`nav-link text-sm pb-1 transition-colors duration-200 ${
                path === l.href
                  ? 'text-forest font-medium active'
                  : 'text-dark/55 hover:text-forest'
              }`}>
              {l.label}
            </Link>
          ))}
          <a
            href="https://wa.me/573000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-forest text-paper text-[11px] font-semibold px-5 py-2.5 tracking-[0.12em] uppercase hover:bg-copper transition-colors duration-300"
          >
            Reserva
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-forest p-1"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
        open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-paper border-t border-light px-6 py-6 flex flex-col gap-5">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className={`text-sm tracking-wide transition-colors ${
                path === l.href ? 'text-forest font-semibold' : 'text-dark/55 hover:text-forest'
              }`}>
              {l.label}
            </Link>
          ))}
          <a
            href="https://wa.me/573000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="text-forest text-sm font-semibold tracking-wide"
          >
            WhatsApp ↗
          </a>
        </div>
      </div>
    </header>
  )
}
