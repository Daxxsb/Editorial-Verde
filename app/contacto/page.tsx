'use client'
import { useState } from 'react'

export default function Contacto() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch('https://formspree.io/f/mojovobb', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) { setStatus('ok'); form.reset() }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  const inputClass =
    'w-full bg-light border border-light focus:border-forest outline-none px-4 py-3.5 text-dark text-sm placeholder:text-muted transition-colors duration-200'

  return (
    <main>

      {/* ── Banner ──────────────────────────────────────────────────── */}
      <section className="bg-forest py-24 px-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-[480px] h-[480px] rounded-full border border-sage/10 translate-x-1/2 -translate-y-1/3 pointer-events-none" />
        <div className="max-w-6xl mx-auto">
          <p className="text-copper text-xs tracking-[0.35em] uppercase mb-5">Contáctenos</p>
          <h1 className="font-display text-paper text-5xl md:text-7xl font-bold leading-tight">
            Estamos para<br /><span className="italic text-copper">servirte.</span>
          </h1>
        </div>
      </section>

      {/* ── Form + info ─────────────────────────────────────────────── */}
      <section className="bg-paper py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

          {/* Formulario */}
          <div>
            <h2 className="font-display text-forest text-2xl font-bold mb-8">Escríbenos</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  name="nombre"
                  required
                  placeholder="Nombre"
                  className={inputClass}
                />
                <input
                  name="apellido"
                  required
                  placeholder="Apellido"
                  className={inputClass}
                />
              </div>
              <input
                name="email"
                type="email"
                required
                placeholder="Correo electrónico"
                className={inputClass}
              />
              <input
                name="asunto"
                required
                placeholder="Asunto"
                className={inputClass}
              />
              <textarea
                name="mensaje"
                required
                placeholder="Mensaje"
                rows={5}
                className={`${inputClass} resize-none`}
              />
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-forest text-paper font-semibold py-3.5 text-sm tracking-[0.1em] uppercase hover:bg-copper hover:text-forest transition-colors duration-300 disabled:opacity-50"
              >
                {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
              </button>
              {status === 'ok' && (
                <p className="text-center text-sm text-sage font-medium">
                  Mensaje enviado. Te contactaremos pronto.
                </p>
              )}
              {status === 'error' && (
                <p className="text-center text-sm text-red-500">
                  Algo salió mal. Intenta de nuevo.
                </p>
              )}
            </form>
          </div>

          {/* Info */}
          <div className="space-y-10 pt-2">
            <div className="border-l-2 border-copper pl-6">
              <p className="text-copper text-[10px] tracking-[0.3em] uppercase mb-2 font-medium">Ubicación</p>
              <p className="text-dark text-sm font-medium">Ak. 58 #127-59</p>
              <p className="text-dark/55 text-sm">Centro Comercial Bulevar Niza, Bogotá</p>
            </div>

            <div className="border-l-2 border-copper pl-6">
              <p className="text-copper text-[10px] tracking-[0.3em] uppercase mb-2 font-medium">Correo</p>
              <a
                href="mailto:patitassocialclub@gmail.com"
                className="text-dark text-sm hover:text-forest transition-colors duration-200"
              >
                patitassocialclub@gmail.com
              </a>
            </div>

            <div className="border-l-2 border-sage pl-6">
              <p className="text-copper text-[10px] tracking-[0.3em] uppercase mb-3 font-medium">WhatsApp</p>
              <a
                href="https://wa.me/573143622963"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-forest text-paper text-sm font-semibold px-6 py-3 tracking-[0.08em] uppercase hover:bg-copper hover:text-forest transition-colors duration-300"
              >
                Escríbenos directo
              </a>
            </div>

            <div className="border-l-2 border-muted pl-6">
              <p className="text-copper text-[10px] tracking-[0.3em] uppercase mb-2 font-medium">Redes sociales</p>
              <a
                href="https://instagram.com/patitassocialclub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark text-sm hover:text-forest transition-colors duration-200"
              >
                Instagram — @patitassocialclub
              </a>
            </div>

            <div className="border-l-2 border-light pl-6">
              <p className="text-copper text-[10px] tracking-[0.3em] uppercase mb-2 font-medium">Trabaja con nosotros</p>
              <p className="text-dark/55 text-sm mb-1">Envía tu hoja de vida a</p>
              <a
                href="mailto:patitassocialclub@gmail.com"
                className="text-dark text-sm hover:text-forest transition-colors duration-200"
              >
                patitassocialclub@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mapa placeholder ────────────────────────────────────────── */}
      <section className="bg-light py-4 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="h-64 bg-sage/15 flex items-center justify-center border border-sage/20">
            <span className="text-muted/60 italic text-sm text-center px-4">
              mapa — Ak. 58 #127-59, CC Bulevar Niza, Bogotá
            </span>
          </div>
        </div>
      </section>

    </main>
  )
}
