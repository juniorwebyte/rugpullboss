"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import Image from "next/image"
import { ArrowLeft, ArrowRight, X } from "lucide-react"

interface GalleryImage {
  id: string
  src: string
  alt: string
  title: string
  description: string
}

export default function CosmicGallery() {
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null)

  const images: GalleryImage[] = [
    {
      id: "network",
      src: "/images/network.png",
      alt: "Rede Cósmica de Criptomoedas",
      title: "A Teia Cósmica",
      description: "O manipulador cósmico que controla a rede de criptomoedas através do multiverso.",
    },
    {
      id: "power",
      src: "/images/power.png",
      alt: "O Poder da Manipulação",
      title: "O Controlador Sombrio",
      description: "A entidade que observa e manipula os mercados através das dimensões do ciberespaço.",
    },
    {
      id: "rugpull-boss",
      src: "/images/rugpull-boss.png",
      alt: "RugPullBoss",
      title: "O Mestre dos Paradoxos",
      description: "O soberano dimensional que controla os fluxos de tokens no universo cripto.",
    },
    {
      id: "manipulation",
      src: "/images/manipulation.png",
      alt: "Manipulação Financeira",
      title: "O Manipulador de Realidades",
      description: "Conduzindo investidores incautos por caminhos que levam ao abismo financeiro.",
    },
    {
      id: "crypto-master",
      src: "/images/crypto-master.png",
      alt: "Mestre das Criptomoedas",
      title: "O Arquiteto do Caos",
      description: "Orquestrando a ascensão e queda dos tokens no plano dimensional da blockchain.",
    },
    {
      id: "cosmic-puppet",
      src: "/images/cosmic-puppet.png",
      alt: "Titereiro Cósmico",
      title: "O Grande Titereiro",
      description: "Manipulando os fios invisíveis que controlam o destino das criptomoedas.",
    },
    {
      id: "rugpull-history",
      src: "/images/rugpull-history.png",
      alt: "História dos Rug Pulls",
      title: "O Abismo Financeiro",
      description: "O momento fatídico em que investidores percebem que foram vítimas do paradoxo dimensional.",
    },
  ]

  const handlePrevious = () => {
    if (currentImageIndex !== null) {
      setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1)
    }
  }

  const handleNext = () => {
    if (currentImageIndex !== null) {
      setCurrentImageIndex(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1)
    }
  }

  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold text-center text-fuchsia-400 mb-2">Galeria de Paradoxos Cósmicos</h2>
      <p className="text-center text-gray-400 mb-8">
        Vislumbre o universo distorcido do RugPullBoss e seus agentes dimensionais
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <Dialog key={image.id}>
            <DialogTrigger asChild>
              <Card className="overflow-hidden cursor-pointer border-purple-800/30 hover:border-purple-600/50 transition-all duration-300 bg-black/50">
                <CardContent className="p-0 relative group">
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-lg font-bold text-white">{image.title}</h3>
                    <p className="text-sm text-gray-300">{image.description}</p>
                  </div>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="sm:max-w-3xl bg-black/90 border-purple-800 p-0 overflow-hidden">
              <div className="relative">
                <div className="aspect-[16/9] md:aspect-auto md:h-[70vh] relative">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 80vw"
                  />
                </div>
                <button
                  className="absolute top-2 right-2 h-8 w-8 rounded-full bg-black/80 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                  onClick={() => setCurrentImageIndex(null)}
                >
                  <X size={18} />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-4">
                  <h3 className="text-xl font-bold text-white">{image.title}</h3>
                  <p className="text-gray-300">{image.description}</p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>

      {currentImageIndex !== null && (
        <Dialog open={currentImageIndex !== null} onOpenChange={() => setCurrentImageIndex(null)}>
          <DialogContent className="sm:max-w-4xl bg-black/95 border-purple-800 p-0 overflow-hidden">
            <div className="relative">
              <div className="aspect-[16/9] md:aspect-auto md:h-[80vh] relative">
                <Image
                  src={images[currentImageIndex].src || "/placeholder.svg"}
                  alt={images[currentImageIndex].alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 90vw"
                />
              </div>
              <button
                className="absolute top-2 right-2 h-8 w-8 rounded-full bg-black/80 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                onClick={() => setCurrentImageIndex(null)}
              >
                <X size={18} />
              </button>

              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/80 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                onClick={handlePrevious}
              >
                <ArrowLeft size={20} />
              </button>

              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/80 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                onClick={handleNext}
              >
                <ArrowRight size={20} />
              </button>

              <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-4">
                <h3 className="text-xl font-bold text-white">{images[currentImageIndex].title}</h3>
                <p className="text-gray-300">{images[currentImageIndex].description}</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}

