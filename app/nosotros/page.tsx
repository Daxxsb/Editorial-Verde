import type { Metadata } from 'next'
import Image from 'next/image'
import AnimateIn from '@/components/AnimateIn'

export const metadata: Metadata = { title: 'Quiénes somos — Patitas Social Club' }

const valores = [
  { n: 'Amor por los animales',  d: 'El valor que guía cada una de nuestras decisiones.' },
  { n: 'Bienestar animal',       d: 'Entorno seguro, cómodo y saludable para cada mascota.' },
  { n: 'Respeto',                d: 'Por clientes, colaboradores, mascotas y entorno.' },
  { n: 'Calidad',                d: 'Ingredientes frescos y seleccionados cuidadosamente.' },
  { n: 'Innovación',             d: 'Mejoramos continuamente la experiencia.' },
  { n: 'Compromiso',             d: 'Excelencia en el servicio en cada visita.' },
  { n: 'Responsabilidad social', d: 'Tenencia responsable y apoyo a la comunidad animal.' },
  { n: 'Confianza',              d: 'Transparencia y honestidad en todo lo que hacemos.' },
]

export default function Nosotros() {
  return (
    <main>

      {/* ── Banner ──────────────────────────────────────────────────── */}
      <section className="bg-forest py-24 px-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full border border-sage/10 translate-x-1/2 -translate-y-1/3 pointer-events-none" />
        <div className="max-w-6xl mx-auto">
          <p className="text-copper text-xs tracking-[0.35em] uppercase mb-5">Nuestra historia</p>
          <h1 className="font-display text-paper text-5xl md:text-7xl font-bold leading-tight">
            Quiénes<br /><span className="italic text-copper">somos</span>
          </h1>
        </div>
      </section>

      {/* ── Historia con Bruno ──────────────────────────────────────── */}
      <section className="bg-paper py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">

            <AnimateIn>
              <p className="font-display text-forest text-2xl md:text-3xl font-bold italic mb-8 leading-snug">
                "Todo empezó con Bruno."
              </p>
              <div className="space-y-5 text-dark/65 text-sm leading-relaxed">
                <p>
                  Somos una pareja de emprendedores bogotanos y nuestra historia comenzó con algo
                  muy sencillo: el amor que sentimos por nuestro compañero de cuatro patas, Bruno.
                </p>
                <p>
                  Como muchas familias que consideran a sus mascotas parte fundamental del hogar,
                  disfrutábamos compartir nuestro tiempo libre con él — salir a pasear, conocer
                  nuevos lugares y vivir experiencias juntos.
                </p>
                <p>
                  Sin embargo, al visitar restaurantes, cafeterías o espacios de entretenimiento,
                  no siempre era posible ingresar con Bruno. Muchas veces debíamos dejarlo en casa,
                  limitando la posibilidad de compartir momentos especiales en familia.
                </p>
                <p>
                  Esas experiencias nos llevaron a entender que los amigos peludos no son solo
                  animales de compañía — son miembros de la familia que también merecen espacios
                  donde puedan disfrutar, socializar y sentirse bienvenidos.
                </p>
                <p>
                  Así nació Patitas Social Club: un restaurante diferente, donde las mascotas son
                  las protagonistas y sus familias pueden compartir momentos inolvidables.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={150}>
              <div className="relative h-[560px] img-zoom overflow-hidden">
                <Image
                  src="/images/nosotros/bruno3.jpeg"
                  alt="Bruno, el inspirador de Patitas Social Club"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width:768px) 100vw, 50vw"
                  priority
                />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── Misión / Visión ─────────────────────────────────────────── */}
      <section className="bg-light py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <AnimateIn>
            <div className="bg-paper p-10 border-t-2 border-forest h-full hover:shadow-sm transition-shadow duration-300">
              <p className="text-copper text-xs tracking-[0.35em] uppercase mb-5 font-medium">Misión</p>
              <p className="font-display text-forest text-xl font-bold mb-5 leading-snug">
                Una experiencia gastronómica única para mascotas y sus familias.
              </p>
              <p className="text-dark/55 text-sm leading-relaxed">
                Ofrecemos bowls, helados, snacks y opciones especialmente diseñadas para el
                bienestar y disfrute de nuestros amigos peludos, preparadas con ingredientes
                frescos y bajo estrictos estándares de higiene y seguridad alimentaria.
              </p>
            </div>
          </AnimateIn>
          <AnimateIn delay={120}>
            <div className="bg-paper p-10 border-t-2 border-copper h-full hover:shadow-sm transition-shadow duration-300">
              <p className="text-copper text-xs tracking-[0.35em] uppercase mb-5 font-medium">Visión</p>
              <p className="font-display text-forest text-xl font-bold mb-5 leading-snug">
                El restaurante pet friendly líder en Colombia.
              </p>
              <p className="text-dark/55 text-sm leading-relaxed">
                Aspiramos a consolidarnos como una marca innovadora, confiable y referente en el
                sector, destacándonos por la calidad de nuestros productos, la excelencia en el
                servicio y nuestro compromiso con el bienestar animal.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Valores ─────────────────────────────────────────────────── */}
      <section className="bg-paper py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimateIn>
            <p className="text-copper text-xs tracking-[0.35em] uppercase mb-3">Nuestros valores</p>
            <h2 className="font-display text-forest text-4xl md:text-5xl font-bold italic mb-14">
              Lo que nos define.
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {valores.map(({ n, d }, i) => (
              <AnimateIn key={n} delay={i * 60}>
                <div className="p-5 bg-light border-l-2 border-sage hover:border-copper hover:bg-light/80 transition-all duration-300 group h-full">
                  <p className="font-display font-bold text-forest text-sm mb-2 group-hover:text-copper transition-colors duration-300">{n}</p>
                  <p className="text-dark/55 text-xs leading-relaxed">{d}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Datos académicos ────────────────────────────────────────── */}
      <section className="bg-forest py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-6 justify-between items-center">
          <p className="text-light/40 text-xs">Lizeth Poveda Alonso · Erik Santiago Cubillos Páez</p>
          <p className="text-light/40 text-xs">UTH Florida University · Informática Aplicada · 2025</p>
        </div>
      </section>

    </main>
  )
}
