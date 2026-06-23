'use client'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const slides = [
  { src: '/images/slider/1.jpg', alt: 'Patitas Social Club' },
  { src: '/images/slider/2.jpg', alt: 'Ambiente y experiencia' },
  { src: '/images/slider/3.jpg', alt: 'Nuestro espacio' },
  { src: '/images/slider/4.jpg', alt: 'Momentos especiales' },
  { src: '/images/slider/5.jpg', alt: 'Para toda la familia' },
]

const INTERVAL = 7000

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => setCurrent(c => (c + 1) % slides.length), [])

  useEffect(() => {
    const t = setInterval(next, INTERVAL)
    return () => clearInterval(t)
  }, [next])

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">

      {/* ── Slides ────────────────────────────────────────────── */}
      {slides.map(({ src, alt }, i) => (
        <div
          key={src}
          aria-hidden={i !== current}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-center"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-forest/68" />
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-forest/55 to-transparent pointer-events-none" />

      {/* ── Contenido ─────────────────────────────────────────── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-16 pb-36">
        <p className="hero-eyebrow text-copper text-xs tracking-[0.45em] uppercase mb-8 font-medium">
          Restaurante · Postres · Amor
        </p>
        <h1 className="font-display text-paper font-bold leading-[1.04] mb-8">
          <span className="hero-line-1 block text-5xl md:text-7xl lg:text-[86px]">Para compartir</span>
          <span className="hero-line-2 block text-5xl md:text-7xl lg:text-[86px] italic text-copper">con tu mejor</span>
          <span className="hero-line-3 block text-5xl md:text-7xl lg:text-[86px]">amigo.</span>
        </h1>
        <p className="hero-desc text-light/60 text-base md:text-lg leading-relaxed mb-10 max-w-lg">
          Restaurante y centro de experiencias gourmet para mascotas y sus familias.
          Un espacio donde ellos son los protagonistas.
        </p>
        <div className="hero-ctas flex flex-wrap gap-4">
          <Link
            href="/menu"
            className="bg-copper text-forest font-semibold px-8 py-3.5 text-sm tracking-[0.1em] uppercase hover:bg-paper transition-colors duration-300"
          >
            Ver nuestro menú
          </Link>
          <Link
            href="/contacto"
            className="border border-light/35 text-light font-semibold px-8 py-3.5 text-sm tracking-[0.1em] uppercase hover:border-copper hover:text-copper transition-all duration-300"
          >
            Reserva tu visita
          </Link>
        </div>
      </div>

      {/* ── Indicadores visuales ──────────────────────────────── */}
      <div className="hero-scroll absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5 pointer-events-none">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`block h-px transition-all duration-700 ${
              i === current ? 'w-10 bg-copper' : 'w-3 bg-light/30'
            }`}
          />
        ))}
      </div>

      {/* Barra de progreso */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-light/10 z-20 overflow-hidden">
        <div
          key={current}
          className="h-full bg-copper/55"
          style={{ animation: `sliderProgress ${INTERVAL}ms linear forwards` }}
        />
      </div>

      {/* Badge de ubicación */}
      <div className="absolute bottom-10 right-6 md:right-10 z-10 text-right pointer-events-none">
        <p className="text-light/30 text-[10px] tracking-[0.22em] uppercase leading-relaxed">
          CC Bulevar Niza<br />Bogotá
        </p>
      </div>

    </section>
  )
}
