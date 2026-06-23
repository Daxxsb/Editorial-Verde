import type { Metadata } from 'next'
import AnimateIn from '@/components/AnimateIn'

export const metadata: Metadata = { title: 'Menú — Patitas Social Club' }

const perritos = [
  { cat: 'Bowls Gourmet', items: [
    { n: 'Bowl "Patitas Felices"',  d: 'Pechuga de pollo, arroz integral y vegetales frescos.' },
    { n: 'Bowl "Colita Contenta"',  d: 'Carne de res, zanahoria, calabaza y arroz.' },
    { n: 'Bowl "Fiesta Perruna"',   d: 'Pollo, carne, mango y arándanos.' },
    { n: 'Bowl "Bruno Especial"',   d: 'Salmón, camote y vegetales. Rico en Omega 3.' },
  ]},
  { cat: 'Caldos y Sopitas', items: [
    { n: 'Caldo "Abrazo de Mamá"',  d: 'Caldo de pollo cocinado lentamente con zanahoria y perejil.' },
    { n: 'Sopa "Colitas Felices"',  d: 'Caldo de res con verduras naturales.' },
    { n: 'Caldo "Vida de Patitas"', d: 'Caldo de hueso rico en colágeno y minerales.' },
  ]},
  { cat: 'Helados Artesanales', items: [
    { n: '"Banana Woof"',  d: 'Helado de banano y yogur natural.' },
    { n: '"Berry Love"',   d: 'Fresa, arándanos y yogur.' },
    { n: '"Tropical Paw"', d: 'Mango, coco y yogur.' },
    { n: '"Peanut Tail"',  d: 'Mantequilla de maní y banano. Favorito de la casa.' },
  ]},
  { cat: 'Pupcakes', items: [
    { n: '"Cumpleaños Feliz"', d: 'Cupcake de zanahoria con frosting de yogur.' },
    { n: '"Amor de Patitas"',  d: 'Cupcake de manzana y avena.' },
    { n: '"Mini Bruno"',       d: 'Cupcake de banano con mantequilla de maní.' },
  ]},
  { cat: 'Galletitas Artesanales', items: [
    { n: '"Huellitas Crujientes"', d: 'Galletas de avena y zanahoria.' },
    { n: '"Premios de la Casa"',   d: 'Galletitas de pollo deshidratado.' },
    { n: '"Bocaditos de Amor"',    d: 'Snacks de manzana y canela.' },
  ]},
  { cat: 'Menú de Celebración', items: [
    { n: 'Torta "Patitas de Fiesta"', d: 'Pastel personalizado para cumpleaños.' },
    { n: 'Box Cumpleañero',           d: 'Pupcake + Helado + Galletitas + Pañoleta + Foto Polaroid.' },
  ]},
]

const humanos = [
  { cat: 'Bebidas Refrescantes', items: [
    { n: 'Limonada "Cherry Bliss"', d: 'Con cerezas naturales. Especialidad de la casa.' },
    { n: 'Limonada Clásica',        d: 'La tradicional, siempre fresca.' },
    { n: 'Jugos Naturales',         d: 'Mango, fresa o maracuyá en agua o leche.' },
    { n: 'Gaseosas',                d: 'Coca-Cola, Sprite, Dr Pepper y otras.' },
  ]},
  { cat: 'Dulces y Antojitos', items: [
    { n: 'Brownie "Dulce Compañía"', d: 'Brownie caliente con bola de helado. Favorito de la casa.' },
    { n: 'Copa "Momentos Felices"',  d: 'Copa de helado con toppings y salsa de chocolate.' },
    { n: 'Pastel de Pollo Casero',   d: 'Hojaldre dorado relleno de pollo sazonado.' },
    { n: 'Bocaditos "Social Club"',  d: 'Mini pasabocas para compartir.' },
  ]},
]

export default function Menu() {
  return (
    <main>

      {/* ── Banner ──────────────────────────────────────────────────── */}
      <section className="bg-forest py-24 px-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-[480px] h-[480px] rounded-full border border-sage/10 translate-x-1/2 -translate-y-1/3 pointer-events-none" />
        <div className="max-w-6xl mx-auto">
          <p className="text-copper text-xs tracking-[0.35em] uppercase mb-5">Para compartir con tu mejor amigo</p>
          <h1 className="font-display text-paper text-5xl md:text-7xl font-bold leading-tight">
            Nuestro<br /><span className="italic text-copper">Menú</span>
          </h1>
        </div>
      </section>

      {/* ── Para perritos ───────────────────────────────────────────── */}
      <section className="bg-paper py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimateIn>
            <div className="flex items-center gap-5 mb-14">
              <div className="flex-1 h-px bg-light" />
              <p className="text-forest text-xs tracking-[0.35em] uppercase font-medium">Para perritos</p>
              <div className="flex-1 h-px bg-light" />
            </div>
          </AnimateIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {perritos.map(({ cat, items }, i) => (
              <AnimateIn key={cat} delay={i * 75}>
                <div>
                  <div className="mb-5 pb-3 border-b border-light">
                    <h2 className="font-display font-bold text-forest text-base">{cat}</h2>
                  </div>
                  <div className="space-y-4">
                    {items.map(({ n, d }) => (
                      <div key={n} className="group">
                        <p className="text-dark text-sm font-medium group-hover:text-forest transition-colors duration-200">{n}</p>
                        <p className="text-dark/45 text-xs leading-relaxed mt-0.5">{d}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Para humanos ────────────────────────────────────────────── */}
      <section className="bg-sage py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimateIn>
            <div className="flex items-center gap-5 mb-14">
              <div className="flex-1 h-px bg-forest/20" />
              <div className="text-center">
                <p className="text-paper text-xs tracking-[0.35em] uppercase font-medium">Para los humanos</p>
                <p className="text-paper/45 text-xs italic mt-1">Porque ellos también merecen consentirse</p>
              </div>
              <div className="flex-1 h-px bg-forest/20" />
            </div>
          </AnimateIn>

          <div className="grid md:grid-cols-2 gap-14">
            {humanos.map(({ cat, items }, i) => (
              <AnimateIn key={cat} delay={i * 100}>
                <div>
                  <h2 className="font-display font-bold text-paper text-xl mb-6 pb-4 border-b border-paper/20">{cat}</h2>
                  <div className="space-y-4">
                    {items.map(({ n, d }) => (
                      <div key={n} className="group">
                        <p className="text-paper text-sm font-medium group-hover:text-copper transition-colors duration-200">{n}</p>
                        <p className="text-light/55 text-xs leading-relaxed mt-0.5">{d}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Nota ────────────────────────────────────────────────────── */}
      <section className="bg-light py-10 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-dark/45 text-xs leading-relaxed max-w-lg mx-auto">
            Todos nuestros productos para mascotas están elaborados con ingredientes naturales,
            sin azúcar añadida, sal ni aditivos nocivos. Consulta a tu veterinario si tu mascota
            tiene restricciones alimentarias específicas.
          </p>
        </div>
      </section>

    </main>
  )
}
