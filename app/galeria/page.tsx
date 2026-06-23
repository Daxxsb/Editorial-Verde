import type { Metadata } from 'next'
import Image from 'next/image'
import AnimateIn from '@/components/AnimateIn'

export const metadata: Metadata = { title: 'Galería — Patitas Social Club' }

export default function Galeria() {
  return (
    <main>

      {/* ── Banner ──────────────────────────────────────────────────── */}
      <section className="bg-forest py-24 px-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-[480px] h-[480px] rounded-full border border-sage/10 translate-x-1/2 -translate-y-1/3 pointer-events-none" />
        <div className="max-w-6xl mx-auto">
          <p className="text-copper text-xs tracking-[0.35em] uppercase mb-5">Galería</p>
          <h1 className="font-display text-paper text-5xl md:text-7xl font-bold leading-tight">
            Momentos<br /><span className="italic text-copper">que se quedan.</span>
          </h1>
        </div>
      </section>

      {/* ── El espacio ──────────────────────────────────────────────── */}
      <section className="bg-paper py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimateIn>
            <p className="text-copper text-xs tracking-[0.35em] uppercase mb-8">El espacio</p>
          </AnimateIn>

          <div className="grid grid-cols-3 gap-3 mb-3">
            <AnimateIn className="col-span-2">
              <div className="relative h-80 img-zoom overflow-hidden">
                <Image
                  src="/images/galeria/Espacio.jpg"
                  alt="Salón principal de Patitas Social Club"
                  fill
                  className="object-cover"
                  sizes="66vw"
                  priority
                />
              </div>
            </AnimateIn>
            <AnimateIn delay={100}>
              <div className="relative h-80 img-zoom overflow-hidden">
                <Image
                  src="/images/galeria/Chill.jpg"
                  alt="Ambiente relajado"
                  fill
                  className="object-cover"
                  sizes="33vw"
                />
              </div>
            </AnimateIn>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[
              { src: '/images/galeria/Relax.jpg',  alt: 'Área de relax' },
              { src: '/images/galeria/Time.jpg',   alt: 'Momentos especiales' },
              { src: '/images/galeria/Coffee.jpg', alt: 'Gastronomía y bebidas' },
            ].map(({ src, alt }, i) => (
              <AnimateIn key={src} delay={i * 80}>
                <div className="relative h-52 img-zoom overflow-hidden">
                  <Image src={src} alt={alt} fill className="object-cover" sizes="33vw" />
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mascotas y momentos ─────────────────────────────────────── */}
      <section className="bg-light py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimateIn>
            <p className="text-copper text-xs tracking-[0.35em] uppercase mb-8">Mascotas y momentos</p>
          </AnimateIn>

          <div className="grid grid-cols-2 gap-3">
            <AnimateIn>
              <div className="relative h-72 md:h-96 img-zoom overflow-hidden">
                <Image
                  src="/images/nosotros/bruno.jpeg"
                  alt="Bruno"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-forest/60 to-transparent p-6">
                  <p className="font-display italic text-paper text-base">Bruno</p>
                  <p className="text-copper text-xs tracking-widest uppercase mt-1">El inspirador</p>
                </div>
              </div>
            </AnimateIn>
            <AnimateIn delay={100}>
              <div className="relative h-72 md:h-96 img-zoom overflow-hidden">
                <Image
                  src="/images/galeria/Michis.jpg"
                  alt="Mascotas en Patitas Social Club"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── CTA redes ───────────────────────────────────────────────── */}
      <section className="bg-forest py-16 px-6 text-center">
        <AnimateIn>
          <p className="text-light/45 text-xs tracking-[0.4em] uppercase mb-4">Comparte tu experiencia</p>
          <p className="font-display text-paper text-3xl md:text-4xl font-bold italic mb-3">
            @patitassocialclub
          </p>
          <p className="text-light/45 text-sm mb-6">
            Etiquétanos en tus fotos y aparece en nuestra galería
          </p>
          <a
            href="https://wa.me/573000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-copper/50 text-copper text-xs px-6 py-3 tracking-[0.15em] uppercase hover:bg-copper hover:text-forest transition-all duration-300"
          >
            Reserva tu visita
          </a>
        </AnimateIn>
      </section>

    </main>
  )
}
