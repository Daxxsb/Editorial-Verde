'use client'
import { useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AnimateIn from '@/components/AnimateIn'
import Lightbox from '@/components/Lightbox'

const images = [
  { src: '/images/galeria/Chill.jpg',                     alt: 'Ambiente' },
  { src: '/images/caracteristicas/petfriendly.jpg',       alt: 'Espacio pet friendly' },
  { src: '/images/caracteristicas/amorincondicional.jpg', alt: 'Amor incondicional' },
  { src: '/images/galeria/Coffee.jpg',                    alt: 'Gastronomía' },
  { src: '/images/caracteristicas/postres.jpg',           alt: 'Postres artesanales' },
]

const cell = 'relative img-zoom overflow-hidden cursor-zoom-in'
const overlay = 'absolute inset-0 bg-forest/0 hover:bg-forest/20 transition-colors duration-400'

export default function HomeGalleryPreview() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const open  = useCallback((i: number) => setLightboxIndex(i), [])
  const close = useCallback(() => setLightboxIndex(null), [])
  const next  = useCallback(() => setLightboxIndex(i => i === null ? 0 : (i + 1) % images.length), [])
  const prev  = useCallback(() => setLightboxIndex(i => i === null ? 0 : (i - 1 + images.length) % images.length), [])

  return (
    <section className="bg-light py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimateIn>
          <p className="text-copper text-xs tracking-[0.35em] uppercase mb-2 text-center">Galería</p>
          <h2 className="font-display text-forest text-3xl md:text-4xl font-bold text-center mb-10">
            Momentos que <span className="italic">se quedan.</span>
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-3 gap-2 md:gap-3">
          <div className={`${cell} col-span-2 h-56 md:h-72`} onClick={() => open(0)}>
            <Image src={images[0].src} alt={images[0].alt} fill className="object-cover" sizes="66vw" />
            <div className={overlay} />
          </div>
          <div className={`${cell} h-56 md:h-72`} onClick={() => open(1)}>
            <Image src={images[1].src} alt={images[1].alt} fill className="object-cover" sizes="33vw" />
            <div className={overlay} />
          </div>
          <div className={`${cell} h-40 md:h-48`} onClick={() => open(2)}>
            <Image src={images[2].src} alt={images[2].alt} fill className="object-cover" sizes="33vw" />
            <div className={overlay} />
          </div>
          <div className={`${cell} h-40 md:h-48`} onClick={() => open(3)}>
            <Image src={images[3].src} alt={images[3].alt} fill className="object-cover" sizes="33vw" />
            <div className={overlay} />
          </div>
          <div className={`${cell} h-40 md:h-48`} onClick={() => open(4)}>
            <Image src={images[4].src} alt={images[4].alt} fill className="object-cover" sizes="33vw" />
            <div className={overlay} />
          </div>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/galeria"
            className="text-forest text-sm font-medium border-b border-copper pb-0.5 hover:text-copper transition-colors duration-200"
          >
            Ver galería completa →
          </Link>
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          onClose={close}
          onNext={next}
          onPrev={prev}
        />
      )}
    </section>
  )
}
