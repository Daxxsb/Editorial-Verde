'use client'
import { useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AnimateIn from '@/components/AnimateIn'
import Lightbox from '@/components/Lightbox'

const images = [
  { src: '/images/caracteristicas/petfriendly.jpg',      alt: 'Espacio pet friendly' },
  { src: '/images/caracteristicas/postres.jpg',           alt: 'Postres artesanales' },
  { src: '/images/caracteristicas/amorincondicional.jpg', alt: 'Amor incondicional' },
  { src: '/images/galeria/Espacio.jpg',                   alt: 'Salón principal' },
  { src: '/images/galeria/Chill.jpg',                     alt: 'Ambiente relajado' },
  { src: '/images/galeria/Relax.jpg',                     alt: 'Área de relax' },
  { src: '/images/galeria/Coffee.jpg',                    alt: 'Gastronomía y bebidas' },
  { src: '/images/galeria/Time.jpg',                      alt: 'Momentos especiales' },
  { src: '/images/nosotros/bruno3.jpeg',                  alt: 'Bruno' },
  { src: '/images/galeria/Michis.jpg',                    alt: 'Mascotas' },
]

const thumbClass = 'relative img-zoom overflow-hidden cursor-zoom-in'

export default function GalleryPageContent() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const open  = useCallback((i: number) => setLightboxIndex(i), [])
  const close = useCallback(() => setLightboxIndex(null), [])
  const next  = useCallback(() => setLightboxIndex(i => i === null ? 0 : (i + 1) % images.length), [])
  const prev  = useCallback(() => setLightboxIndex(i => i === null ? 0 : (i - 1 + images.length) % images.length), [])

  return (
    <>
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

      {/* ── Nuestra experiencia ─────────────────────────────────────── */}
      <section className="bg-paper py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimateIn>
            <p className="text-copper text-xs tracking-[0.35em] uppercase mb-8">Nuestra experiencia</p>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[0, 1, 2].map((imgIdx, i) => (
              <AnimateIn key={images[imgIdx].src} delay={i * 80}>
                <div
                  className={`${thumbClass} h-80 md:h-96`}
                  onClick={() => open(imgIdx)}
                >
                  <Image src={images[imgIdx].src} alt={images[imgIdx].alt} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-forest/0 hover:bg-forest/20 transition-colors duration-400" />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-forest/65 to-transparent p-5">
                    <p className="text-paper text-xs tracking-[0.25em] uppercase font-medium">{images[imgIdx].alt}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── El espacio ──────────────────────────────────────────────── */}
      <section className="bg-light py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimateIn>
            <p className="text-copper text-xs tracking-[0.35em] uppercase mb-8">El espacio</p>
          </AnimateIn>
          <div className="grid grid-cols-3 gap-3 mb-3">
            <AnimateIn className="col-span-2">
              <div className={`${thumbClass} h-72`} onClick={() => open(3)}>
                <Image src={images[3].src} alt={images[3].alt} fill className="object-cover" sizes="66vw" />
                <div className="absolute inset-0 bg-forest/0 hover:bg-forest/20 transition-colors duration-400" />
              </div>
            </AnimateIn>
            <AnimateIn delay={90}>
              <div className={`${thumbClass} h-72`} onClick={() => open(4)}>
                <Image src={images[4].src} alt={images[4].alt} fill className="object-cover" sizes="33vw" />
                <div className="absolute inset-0 bg-forest/0 hover:bg-forest/20 transition-colors duration-400" />
              </div>
            </AnimateIn>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[5, 6, 7].map((imgIdx, i) => (
              <AnimateIn key={images[imgIdx].src} delay={i * 75}>
                <div className={`${thumbClass} h-52`} onClick={() => open(imgIdx)}>
                  <Image src={images[imgIdx].src} alt={images[imgIdx].alt} fill className="object-cover" sizes="33vw" />
                  <div className="absolute inset-0 bg-forest/0 hover:bg-forest/20 transition-colors duration-400" />
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mascotas y momentos ─────────────────────────────────────── */}
      <section className="bg-paper py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimateIn>
            <p className="text-copper text-xs tracking-[0.35em] uppercase mb-8">Mascotas y momentos</p>
          </AnimateIn>
          <div className="grid grid-cols-2 gap-3">
            <AnimateIn>
              <div className={`${thumbClass} h-[420px]`} onClick={() => open(8)}>
                <Image src={images[8].src} alt={images[8].alt} fill className="object-cover object-top" sizes="50vw" />
                <div className="absolute inset-0 bg-forest/0 hover:bg-forest/20 transition-colors duration-400" />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-forest/60 to-transparent p-6">
                  <p className="font-display italic text-paper text-base">Bruno</p>
                  <p className="text-copper text-xs tracking-widest uppercase mt-1">El inspirador</p>
                </div>
              </div>
            </AnimateIn>
            <AnimateIn delay={100}>
              <div className={`${thumbClass} h-[420px]`} onClick={() => open(9)}>
                <Image src={images[9].src} alt={images[9].alt} fill className="object-cover" sizes="50vw" />
                <div className="absolute inset-0 bg-forest/0 hover:bg-forest/20 transition-colors duration-400" />
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
            href="https://wa.me/573143622963"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-copper/50 text-copper text-xs px-6 py-3 tracking-[0.15em] uppercase hover:bg-copper hover:text-forest transition-all duration-300"
          >
            Reserva tu visita
          </a>
        </AnimateIn>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          onClose={close}
          onNext={next}
          onPrev={prev}
        />
      )}
    </>
  )
}
