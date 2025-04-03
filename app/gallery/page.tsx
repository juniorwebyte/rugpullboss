import type { Metadata } from "next"
import CosmicGallery from "@/components/cosmic-gallery"

export const metadata: Metadata = {
  title: "Galeria de Paradoxos Cósmicos | RugPullBoss",
  description:
    "Explore a galeria visual do universo RugPullBoss e suas entidades cósmicas manipuladoras do mercado cripto.",
}

export default function GalleryPage() {
  return (
    <main className="container mx-auto py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-500 to-blue-500 mb-4">
            Galeria de Paradoxos Cósmicos
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Vislumbre as entidades que habitam o universo RugPullBoss e controlam o destino das criptomoedas
          </p>
        </div>

        <CosmicGallery />
      </div>
    </main>
  )
}

