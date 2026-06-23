import Image from 'next/image'
import Link from 'next/link'
import AnimateIn from '@/components/AnimateIn'
import HeroSlider from '@/components/HeroSlider'

const marqueeItems = [
  'Restaurante Pet Friendly',
  'Postres Artesanales',
  'Bogotá, Colombia',
  'Ingredientes Naturales',
  'Gastronomía Gourmet',
  'Experiencias Memorables',
  'Para toda la familia',
  'Menú para mascotas',
]

export default function Home() {
  return (
    <main>

      {/* ── Hero — slider ────────────────────────────────────────────── */}
      <HeroSlider />

      {/* ── Marquee editorial ────────────────────────────────────────── */}
      <div className="bg-dark py-3.5 overflow-hidden border-b border-sage/10">
        <div className="marquee-track select-none">
          {[0, 1].map(copy => (
            <span key={copy} className="flex items-center">
              {marqueeItems.map(item => (
                <span key={item} className="inline-flex items-center">
                  <span className="text-light/35 text-[10px] tracking-[0.28em] uppercase px-7 whitespace-nowrap">
                    {item}
                  </span>
                  <span className="text-copper/50 text-[8px]">&#9679;</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── Nuestra historia ─────────────────────────────────────────── */}
      <section className="bg-paper py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <AnimateIn>
            <p className="text-copper text-xs tracking-[0.35em] uppercase mb-4">Nuestra historia</p>
            <h2 className="font-display text-forest text-4xl md:text-5xl font-bold leading-tight mb-6">
              Todo empezó<br /><span className="italic">con Bruno.</span>
            </h2>
            <p className="text-dark/60 text-sm leading-relaxed mb-4 max-w-md">
              Como muchas familias, consideramos a nuestras mascotas parte fundamental del hogar.
              Al no encontrar espacios donde pudiéramos disfrutar juntos, decidimos crearlo.
            </p>
            <p className="text-dark/60 text-sm leading-relaxed mb-10 max-w-md">
              Patitas Social Club nació de ese amor — un restaurante donde las mascotas son los
              protagonistas y sus familias comparten momentos inolvidables.
            </p>
            <Link
              href="/nosotros"
              className="text-forest text-sm font-medium border-b border-copper pb-0.5 hover:text-copper transition-colors duration-200"
            >
              Conoce nuestra historia completa →
            </Link>
          </AnimateIn>

          <AnimateIn delay={150}>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative col-span-2 h-64 img-zoom overflow-hidden">
                <Image
                  src="/images/nosotros/bruno3.jpeg"
                  alt="Bruno"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width:768px) 100vw, 50vw"
                />
              </div>
              <div className="relative h-44 img-zoom overflow-hidden">
                <Image
                  src="/images/nosotros/bruno.jpeg"
                  alt="Bruno"
                  fill
                  className="object-cover object-center"
                  sizes="25vw"
                />
              </div>
              <div className="relative h-44 img-zoom overflow-hidden">
                <Image
                  src="/images/nosotros/bruno2.jpeg"
                  alt="Bruno"
                  fill
                  className="object-cover object-center"
                  sizes="25vw"
                />
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Menú preview ─────────────────────────────────────────────── */}
      <section className="bg-forest py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <AnimateIn>
            <div className="relative h-[440px] img-zoom overflow-hidden">
              <Image
                src="/images/galeria/Coffee.jpg"
                alt="Gastronomía artesanal"
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-forest/25" />
            </div>
          </AnimateIn>

          <AnimateIn delay={130}>
            <p className="text-copper text-xs tracking-[0.35em] uppercase mb-4">Para perritos y humanos</p>
            <h2 className="font-display text-paper text-4xl md:text-5xl font-bold leading-tight mb-6">
              Nuestro<br /><span className="italic text-copper">Menú</span>
            </h2>
            <p className="text-light/55 text-sm leading-relaxed mb-8">
              Bowls gourmet, helados artesanales, pupcakes, caldos y sopitas — preparados con
              ingredientes frescos y seguros para tus mascotas. También tenemos opciones para
              los humanos.
            </p>
            <div className="grid grid-cols-2 gap-px bg-sage/15 mb-8">
              {['Bowls Gourmet', 'Helados Artesanales', 'Pupcakes', 'Caldos y Sopitas'].map(item => (
                <div
                  key={item}
                  className="bg-forest p-5 border border-sage/20 hover:border-copper/50 group transition-colors duration-300 cursor-default"
                >
                  <p className="font-display text-paper text-sm font-semibold mb-1 group-hover:text-copper transition-colors duration-300">
                    {item}
                  </p>
                  <p className="text-light/35 text-xs tracking-wide">Ver carta →</p>
                </div>
              ))}
            </div>
            <Link
              href="/menu"
              className="inline-block bg-copper text-forest font-semibold px-8 py-3.5 text-sm tracking-[0.1em] uppercase hover:bg-paper transition-colors duration-300"
            >
              Ver carta completa
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* ── Galería preview ──────────────────────────────────────────── */}
      <section className="bg-light py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimateIn>
            <p className="text-copper text-xs tracking-[0.35em] uppercase mb-2 text-center">Galería</p>
            <h2 className="font-display text-forest text-3xl md:text-4xl font-bold text-center mb-10">
              Momentos que <span className="italic">se quedan.</span>
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-3 gap-2 md:gap-3">
            <div className="relative col-span-2 h-56 md:h-72 img-zoom overflow-hidden">
              <Image src="/images/galeria/Chill.jpg" alt="Ambiente" fill className="object-cover" sizes="66vw" />
            </div>
            <div className="relative h-56 md:h-72 img-zoom overflow-hidden">
              <Image src="/images/caracteristicas/petfriendly.jpg" alt="Espacio pet friendly" fill className="object-cover" sizes="33vw" />
            </div>
            <div className="relative h-40 md:h-48 img-zoom overflow-hidden">
              <Image src="/images/caracteristicas/amorincondicional.jpg" alt="Amor incondicional" fill className="object-cover" sizes="33vw" />
            </div>
            <div className="relative h-40 md:h-48 img-zoom overflow-hidden">
              <Image src="/images/galeria/Coffee.jpg" alt="Gastronomía" fill className="object-cover" sizes="33vw" />
            </div>
            <div className="relative h-40 md:h-48 img-zoom overflow-hidden">
              <Image src="/images/caracteristicas/postres.jpg" alt="Postres artesanales" fill className="object-cover" sizes="33vw" />
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
      </section>

      {/* ── CTA final ────────────────────────────────────────────────── */}
      <section className="bg-sage py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] rounded-full border border-forest" />
          <div className="absolute -bottom-20 right-1/4 w-80 h-80 rounded-full border border-forest" />
        </div>
        <AnimateIn>
          <p className="text-light/55 text-xs tracking-[0.45em] uppercase mb-6">Bulevar Niza · Bogotá</p>
          <h2 className="font-display text-paper text-4xl md:text-5xl font-bold leading-tight mb-2">
            ¿Listo para la
          </h2>
          <h2 className="font-display text-paper text-4xl md:text-5xl font-bold italic mb-10">
            primera visita?
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/573000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-forest text-paper font-semibold px-9 py-3.5 text-sm tracking-[0.1em] uppercase hover:bg-dark transition-colors duration-300"
            >
              WhatsApp directo
            </a>
            <Link
              href="/contacto"
              className="border border-paper/45 text-paper font-semibold px-9 py-3.5 text-sm tracking-[0.1em] uppercase hover:bg-paper hover:text-forest transition-all duration-300"
            >
              Escríbenos
            </Link>
          </div>
        </AnimateIn>
      </section>

    </main>
  )
}
