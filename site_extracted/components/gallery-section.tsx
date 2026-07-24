"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    { src: "/divine-mercy-jesus-rays-of-light.jpg", alt: "Imagem de Jesus Misericordioso" },
    { src: "/rosary-divine-mercy-red-blue.jpg", alt: "Terço da Divina Misericórdia" },
    { src: "/prayer-book-divine-mercy.jpg", alt: "Livro de Orações" },
    { src: "/wooden-crucifix-handmade.jpg", alt: "Crucifixo Artesanal" },
    { src: "/divine-mercy-devotion-kit.jpg", alt: "Kit de Devoção" },
    { src: "/jesus-misericordioso-bg.jpg", alt: "Jesus Misericordioso" }
  ]

  const openLightbox = (index: number) => setSelectedImage(index)
  const closeLightbox = () => setSelectedImage(null)
  const prevImage = () => setSelectedImage((prev) => (prev === 0 ? images.length - 1 : (prev ?? 0) - 1))
  const nextImage = () => setSelectedImage((prev) => (prev === images.length - 1 ? 0 : (prev ?? 0) + 1))

  return (
    <section id="galeria" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            Galeria
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4">
            Momentos de Fé
          </h2>
          <p className="text-muted-foreground text-lg">
            Registros da nossa vida comunitária, celebrações e momentos de oração.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                  Ver Imagem
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-navy/95 flex items-center justify-center p-4">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/10"
            onClick={closeLightbox}
          >
            <X className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 text-white hover:bg-white/10"
            onClick={prevImage}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
          <div className="relative max-w-4xl max-h-[80vh] w-full aspect-square">
            <Image
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              fill
              className="object-contain"
            />
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 text-white hover:bg-white/10"
            onClick={nextImage}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
          <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80">
            {images[selectedImage].alt}
          </p>
        </div>
      )}
    </section>
  )
}
