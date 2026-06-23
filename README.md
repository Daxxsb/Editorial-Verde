# Patitas Social Club

Sitio web corporativo para **Patitas Social Club**, restaurante pet-friendly y centro de experiencias gourmet para mascotas y sus familias, ubicado en el Centro Comercial Bulevar Niza, Bogotá, Colombia.

---

![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=flat-square&logo=vercel)

---

## Descripción

Proyecto desarrollado bajo la dirección editorial **Editorial Verde** — identidad oscura y orgánica que combina tipografía serif (Playfair Display) con una paleta de verdes profundos, cobres y beige papel. La experiencia de usuario incluye un hero slider automático, animaciones de scroll progresivas y efectos hover en toda la interfaz.

---

## Características

- **Hero slider automático** — 3 imágenes en crossfade cada 7 s con barra de progreso y fade de 1.2 s
- **Animaciones de scroll** — fade-up al entrar al viewport mediante `IntersectionObserver`
- **Efectos hover** — zoom en imágenes, underline deslizante en navegación, transiciones en tarjetas
- **Marquee editorial** — ticker de categorías en CSS puro, infinito y sin dependencias
- **Navegación sticky** — sombra y opacidad reactivas al scroll
- **Formulario de contacto** — integrado con Formspree, manejo de estados (idle / sending / ok / error)
- **WhatsApp flotante** — acceso directo persistente desde cualquier página
- **Responsivo** — diseño mobile-first con breakpoints `md` y `lg`
- **Optimización de imágenes** — `next/image` con atributo `sizes` declarativo en cada imagen
- **SEO básico** — `Metadata` por ruta con `next/metadata`

---

## Stack tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| [Next.js](https://nextjs.org) | 16.2 — App Router | Framework principal |
| [React](https://react.dev) | 19.2 | UI |
| [TypeScript](https://www.typescriptlang.org) | 5 | Tipado estático |
| [Tailwind CSS](https://tailwindcss.com) | 4 | Sistema de estilos |
| [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) | — | Tipografía display |
| [Inter](https://fonts.google.com/specimen/Inter) | — | Tipografía UI |

---

## Estructura del proyecto

```
editorial-verde/
├── app/
│   ├── globals.css           # Tokens de diseño, keyframes y utilidades CSS
│   ├── layout.tsx            # Layout raíz — Nav, Footer, botón WhatsApp
│   ├── page.tsx              # Home (slider + marquee + secciones editoriales)
│   ├── nosotros/page.tsx     # Quiénes somos — historia, misión/visión, valores
│   ├── menu/page.tsx         # Carta completa para mascotas y humanos
│   ├── galeria/page.tsx      # Galería fotográfica editorial
│   └── contacto/page.tsx     # Formulario + info de contacto
├── components/
│   ├── Nav.tsx               # Navegación sticky con detección de scroll
│   ├── Footer.tsx            # Pie de página — 4 columnas
│   ├── HeroSlider.tsx        # Slider automático del hero (crossfade CSS)
│   └── AnimateIn.tsx         # Wrapper de scroll reveal (IntersectionObserver)
└── public/
    └── images/
        ├── hero/             # hero.jpg  (960×720)
        ├── galeria/          # Chill, Coffee, Espacio, Michis, Relax, Time
        ├── nosotros/         # bruno.jpeg
        └── caracteristicas/  # amorincondicional, petfriendly, postres
```

---

## Paleta de colores

| Token | Hex | Uso |
|---|---|---|
| `paper` | `#F9F6F1` | Fondo principal |
| `forest` | `#1E3A2F` | Verde oscuro — color primario |
| `copper` | `#C4956A` | Cobre — acento y CTAs |
| `sage` | `#4A7C59` | Verde medio — secciones alternadas |
| `dark` | `#3D2B1F` | Texto principal |
| `light` | `#E0EDE6` | Fondos secundarios y separadores |
| `muted` | `#7A9E8A` | Texto de apoyo |

---

## Inicio rápido

### Requisitos

- Node.js 18+
- npm 9+

### Instalación

```bash
git clone https://github.com/Daxxsb/Editorial-Verde.git
cd Editorial-Verde
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

### Scripts disponibles

| Comando | Acción |
|---|---|
| `npm run dev` | Servidor de desarrollo con Turbopack |
| `npm run build` | Build de producción |
| `npm run start` | Servidor de producción local |
| `npm run lint` | Análisis de código con ESLint |

---

## Despliegue en Vercel

El proyecto está configurado para despliegue directo en [Vercel](https://vercel.com). Al importar el repositorio, Next.js es detectado automáticamente sin configuración adicional.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Daxxsb/Editorial-Verde)

---

## Configuración del formulario de contacto

El formulario en `/contacto` utiliza [Formspree](https://formspree.io). Para activarlo, reemplaza el ID en `app/contacto/page.tsx`:

```typescript
const res = await fetch('https://formspree.io/f/TU_FORM_ID', { ... })
```

---

## Autor

**David Salamanca** — Desarrollo web & diseño editorial  
[github.com/Daxxsb](https://github.com/Daxxsb)

---

## Licencia

Todos los derechos reservados © 2025 Patitas Social Club.  
El código de este repositorio es de uso exclusivo para el proyecto indicado.
