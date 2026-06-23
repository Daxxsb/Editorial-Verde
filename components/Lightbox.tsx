'use client'
import { useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'

interface Props {
  images: { src: string; alt: string }[]
  index: number
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

export default function Lightbox({ images, index, onClose, onNext, onPrev }: Props) {
  const { src, alt } = images[index]
  const touchStartX = useRef<number | null>(null)

  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape')     onClose()
    if (e.key === 'ArrowRight') onNext()
    if (e.key === 'ArrowLeft')  onPrev()
  }, [onClose, onNext, onPrev])

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [handleKey])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const delta = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(delta) > 48) delta > 0 ? onNext() : onPrev()
    touchStartX.current = null
  }

  return (
    <div
      className="lightbox-enter fixed inset-0 z-[100] bg-dark/96 flex items-center justify-center"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Imagen */}
      <div
        className="relative w-full max-w-5xl px-14 md:px-20"
        style={{ height: '85dvh' }}
        onClick={e => e.stopPropagation()}
      >
        <div key={`${src}-${index}`} className="lightbox-img-in relative w-full h-full">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain"
            sizes="(max-width:768px) 100vw, 80vw"
            priority
          />
        </div>
      </div>

      {/* Cerrar */}
      <button
        onClick={onClose}
        aria-label="Cerrar"
        className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center text-light/45 hover:text-copper transition-colors duration-200"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Flecha anterior */}
      {images.length > 1 && (
        <button
          onClick={e => { e.stopPropagation(); onPrev() }}
          aria-label="Anterior"
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center text-light/45 hover:text-copper transition-colors duration-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
      )}

      {/* Flecha siguiente */}
      {images.length > 1 && (
        <button
          onClick={e => { e.stopPropagation(); onNext() }}
          aria-label="Siguiente"
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center text-light/45 hover:text-copper transition-colors duration-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      )}

      {/* Caption + indicadores */}
      <div className="absolute bottom-6 inset-x-0 flex flex-col items-center gap-3 pointer-events-none">
        <p className="text-copper text-[10px] tracking-[0.3em] uppercase">{alt}</p>
        <div className="flex items-center gap-2">
          {images.map((_, i) => (
            <span key={i} className={`block h-px transition-all duration-500 ${
              i === index ? 'w-8 bg-copper' : 'w-2 bg-light/25'
            }`} />
          ))}
        </div>
        <p className="text-light/25 text-[10px] tracking-widest">{index + 1} / {images.length}</p>
      </div>
    </div>
  )
}
