import type { Metadata } from 'next'
import GalleryPageContent from '@/components/GalleryPageContent'

export const metadata: Metadata = { title: 'Galería — Patitas Social Club' }

export default function Galeria() {
  return <GalleryPageContent />
}
