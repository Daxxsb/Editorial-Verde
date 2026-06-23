import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-forest py-16 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-px h-7 bg-copper" />
              <div>
                <p className="font-display font-bold text-paper text-sm leading-tight tracking-widest">PATITAS</p>
                <p className="text-copper text-[9px] tracking-[0.28em] leading-tight">SOCIAL CLUB</p>
              </div>
            </div>
            <p className="font-display italic text-light/55 text-sm leading-relaxed">
              Un espacio donde ellos son los protagonistas.
            </p>
          </div>

          {/* Páginas */}
          <div>
            <p className="text-copper text-[10px] tracking-[0.28em] uppercase mb-5 font-medium">Páginas</p>
            {[
              { href: '/nosotros', label: 'Quiénes somos' },
              { href: '/menu',     label: 'Nuestro menú'  },
              { href: '/galeria',  label: 'Galería'        },
              { href: '/contacto', label: 'Contacto'       },
            ].map(l => (
              <Link key={l.href} href={l.href}
                className="block text-light/45 text-sm mb-3 hover:text-copper transition-colors duration-200">
                {l.label}
              </Link>
            ))}
          </div>

          {/* Contacto */}
          <div>
            <p className="text-copper text-[10px] tracking-[0.28em] uppercase mb-5 font-medium">Visítanos</p>
            <p className="text-light/45 text-sm leading-relaxed mb-3">
              Ak. 58 #127-59<br />
              CC Bulevar Niza<br />
              Bogotá, Colombia
            </p>
            <a href="mailto:patitassocialclub@gmail.com"
              className="text-light/45 text-sm hover:text-copper transition-colors duration-200 break-all">
              patitassocialclub@gmail.com
            </a>
          </div>

          {/* Social */}
          <div>
            <p className="text-copper text-[10px] tracking-[0.28em] uppercase mb-5 font-medium">Síguenos</p>
            <a
              href="https://instagram.com/patitassocialclub"
              target="_blank"
              rel="noopener noreferrer"
              className="block font-display italic text-light/55 text-sm mb-5 hover:text-copper transition-colors duration-200"
            >
              @patitassocialclub
            </a>
            <a
              href="https://wa.me/573143622963"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-copper/40 text-copper text-[11px] px-5 py-2.5 tracking-[0.15em] uppercase hover:bg-copper hover:text-forest transition-all duration-300"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-sage/20 pt-6 flex flex-wrap gap-3 justify-between items-center">
          <p className="text-muted/40 text-xs">
            © {new Date().getFullYear()} Patitas Social Club — Restaurante · Postres · Amor
          </p>
          <p className="text-muted/30 text-xs">Bogotá, Colombia</p>
        </div>
      </div>
    </footer>
  )
}
