"use client"

import { useEffect, useRef } from "react"
import { Skull, Ghost, Sparkles, Zap, Star } from "lucide-react"

interface FloatingElementsProps {
  lowPerformanceMode?: boolean
}

export default function FloatingElements({ lowPerformanceMode = false }: FloatingElementsProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Configurações
    const elementCount = lowPerformanceMode ? 10 : 25
    const elements: HTMLDivElement[] = []
    const icons = [Skull, Ghost, Sparkles, Zap, Star]
    const colors = ["text-fuchsia-500", "text-indigo-500", "text-blue-500", "text-purple-500", "text-pink-500"]

    // Criar elementos flutuantes
    for (let i = 0; i < elementCount; i++) {
      const element = document.createElement("div")
      element.className = "absolute opacity-30 floating-element"

      // Escolher um ícone aleatório
      const IconComponent = icons[Math.floor(Math.random() * icons.length)]
      const color = colors[Math.floor(Math.random() * colors.length)]

      // Configurar posição e tamanho aleatórios
      const size = Math.random() * 30 + 10
      const x = Math.random() * 100
      const y = Math.random() * 100
      const duration = Math.random() * 20 + 10
      const delay = Math.random() * 5

      element.style.left = `${x}%`
      element.style.top = `${y}%`
      element.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`
      element.style.opacity = `${Math.random() * 0.3 + 0.1}`

      // Adicionar o ícone
      const iconElement = document.createElement("div")
      iconElement.className = `${color}`
      iconElement.style.width = `${size}px`
      iconElement.style.height = `${size}px`

      // Renderizar o ícone SVG
      const svgIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg")
      svgIcon.setAttribute("width", "100%")
      svgIcon.setAttribute("height", "100%")
      svgIcon.setAttribute("viewBox", "0 0 24 24")
      svgIcon.setAttribute("fill", "none")
      svgIcon.setAttribute("stroke", "currentColor")
      svgIcon.setAttribute("stroke-width", "2")
      svgIcon.setAttribute("stroke-linecap", "round")
      svgIcon.setAttribute("stroke-linejoin", "round")

      // Adicionar o path do ícone
      let path = ""
      if (IconComponent === Skull) {
        path = "M9 6h6m-6 6h6m-3 6v-6m-6 0a6 6 0 1 0 12 0 6 6 0 0 0-12 0z"
      } else if (IconComponent === Ghost) {
        path = "M9 10h.01M15 10h.01M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"
      } else if (IconComponent === Sparkles) {
        path =
          "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
      } else if (IconComponent === Zap) {
        path = "M13 2L3 14h9l-1 8 10-12h-9l1-8z"
      } else if (IconComponent === Star) {
        path = "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      }

      const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path")
      pathElement.setAttribute("d", path)
      svgIcon.appendChild(pathElement)
      iconElement.appendChild(svgIcon)

      element.appendChild(iconElement)
      container.appendChild(element)
      elements.push(element)
    }

    // Adicionar animação de flutuação ao CSS
    const style = document.createElement("style")
    style.textContent = `
      @keyframes float {
        0%, 100% {
          transform: translateY(0) rotate(0deg);
        }
        25% {
          transform: translateY(-20px) rotate(5deg);
        }
        50% {
          transform: translateY(10px) rotate(-5deg);
        }
        75% {
          transform: translateY(-15px) rotate(3deg);
        }
      }
      
      .floating-element {
        will-change: transform;
        transform: translateZ(0);
      }
    `
    document.head.appendChild(style)

    // Limpar ao desmontar
    return () => {
      elements.forEach((element) => {
        if (element.parentNode === container) {
          container.removeChild(element)
        }
      })
      if (style.parentNode) {
        document.head.removeChild(style)
      }
    }
  }, [lowPerformanceMode])

  return <div ref={containerRef} className="fixed top-0 left-0 w-full h-full -z-5 pointer-events-none" />
}

