"use client"

import { useEffect, useRef } from "react"

interface PortalAnimationProps {
  lowPerformanceMode?: boolean
}

export default function PortalAnimation({ lowPerformanceMode = false }: PortalAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Configurar o canvas para ocupar toda a tela
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Configurações do portal
    const portalConfig = {
      x: canvas.width / 2,
      y: canvas.height / 2,
      outerRadius: Math.min(canvas.width, canvas.height) * 0.4,
      innerRadius: Math.min(canvas.width, canvas.height) * 0.2,
      rotation: 0,
      rotationSpeed: 0.005,
      particles: [] as any[],
      particleCount: lowPerformanceMode ? 100 : 300,
      nebulae: [] as any[],
      nebulaCount: lowPerformanceMode ? 3 : 8,
    }

    // Criar partículas
    for (let i = 0; i < portalConfig.particleCount; i++) {
      const distance = Math.random() * portalConfig.outerRadius
      const angle = Math.random() * Math.PI * 2

      portalConfig.particles.push({
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: `hsl(${Math.random() * 60 + 240}, 100%, ${Math.random() * 30 + 60}%)`,
        opacity: Math.random() * 0.7 + 0.3,
        distance,
        angle,
        orbitSpeed: (Math.random() * 0.01 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
      })
    }

    // Criar nebulosas
    for (let i = 0; i < portalConfig.nebulaCount; i++) {
      const distance = Math.random() * portalConfig.outerRadius * 0.8
      const angle = Math.random() * Math.PI * 2

      portalConfig.nebulae.push({
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
        size: Math.random() * 100 + 50,
        color:
          Math.random() > 0.5
            ? `rgba(${Math.random() * 100 + 100}, 50, ${Math.random() * 150 + 100}, 0.2)`
            : `rgba(50, ${Math.random() * 100 + 50}, ${Math.random() * 150 + 100}, 0.2)`,
        distance,
        angle,
        orbitSpeed: (Math.random() * 0.002 + 0.001) * (Math.random() > 0.5 ? 1 : -1),
      })
    }

    // Função para desenhar o portal
    const drawPortal = () => {
      // Limpar o canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Desenhar fundo escuro
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Atualizar a posição do portal para o centro da tela
      portalConfig.x = canvas.width / 2
      portalConfig.y = canvas.height / 2

      // Desenhar nebulosas
      portalConfig.nebulae.forEach((nebula) => {
        nebula.angle += nebula.orbitSpeed
        const x = portalConfig.x + Math.cos(nebula.angle) * nebula.distance
        const y = portalConfig.y + Math.sin(nebula.angle) * nebula.distance

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, nebula.size)
        gradient.addColorStop(0, nebula.color)
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

        ctx.beginPath()
        ctx.fillStyle = gradient
        ctx.arc(x, y, nebula.size, 0, Math.PI * 2)
        ctx.fill()
      })

      // Desenhar o portal
      const gradient = ctx.createRadialGradient(
        portalConfig.x,
        portalConfig.y,
        portalConfig.innerRadius,
        portalConfig.x,
        portalConfig.y,
        portalConfig.outerRadius,
      )
      gradient.addColorStop(0, "rgba(138, 43, 226, 0.8)") // Roxo
      gradient.addColorStop(0.5, "rgba(75, 0, 130, 0.6)") // Índigo
      gradient.addColorStop(0.8, "rgba(0, 0, 139, 0.4)") // Azul escuro
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)") // Transparente

      ctx.beginPath()
      ctx.arc(portalConfig.x, portalConfig.y, portalConfig.outerRadius, 0, Math.PI * 2)
      ctx.fillStyle = gradient
      ctx.fill()

      // Desenhar o centro do portal
      const innerGradient = ctx.createRadialGradient(
        portalConfig.x,
        portalConfig.y,
        0,
        portalConfig.x,
        portalConfig.y,
        portalConfig.innerRadius,
      )
      innerGradient.addColorStop(0, "rgba(255, 255, 255, 0.9)") // Branco brilhante
      innerGradient.addColorStop(0.3, "rgba(173, 216, 230, 0.7)") // Azul claro
      innerGradient.addColorStop(0.6, "rgba(138, 43, 226, 0.5)") // Roxo
      innerGradient.addColorStop(1, "rgba(75, 0, 130, 0.3)") // Índigo

      ctx.beginPath()
      ctx.arc(portalConfig.x, portalConfig.y, portalConfig.innerRadius, 0, Math.PI * 2)
      ctx.fillStyle = innerGradient
      ctx.fill()

      // Desenhar partículas
      portalConfig.particles.forEach((particle) => {
        particle.angle += particle.orbitSpeed
        const x = portalConfig.x + Math.cos(particle.angle) * particle.distance
        const y = portalConfig.y + Math.sin(particle.angle) * particle.distance

        ctx.beginPath()
        ctx.arc(x, y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.globalAlpha = particle.opacity
        ctx.fill()
        ctx.globalAlpha = 1
      })

      // Desenhar linhas de energia
      if (!lowPerformanceMode) {
        for (let i = 0; i < 12; i++) {
          const angle = (i / 12) * Math.PI * 2 + portalConfig.rotation
          const startX = portalConfig.x + Math.cos(angle) * portalConfig.innerRadius
          const startY = portalConfig.y + Math.sin(angle) * portalConfig.innerRadius
          const endX = portalConfig.x + Math.cos(angle) * portalConfig.outerRadius * 0.8
          const endY = portalConfig.y + Math.sin(angle) * portalConfig.outerRadius * 0.8

          const gradient = ctx.createLinearGradient(startX, startY, endX, endY)
          gradient.addColorStop(0, "rgba(255, 255, 255, 0.8)")
          gradient.addColorStop(1, "rgba(138, 43, 226, 0)")

          ctx.beginPath()
          ctx.moveTo(startX, startY)
          ctx.lineTo(endX, endY)
          ctx.strokeStyle = gradient
          ctx.lineWidth = 2
          ctx.stroke()
        }
      }

      // Atualizar rotação
      portalConfig.rotation += portalConfig.rotationSpeed
    }

    // Iniciar a animação
    let animationId: number
    const animate = () => {
      drawPortal()
      animationId = requestAnimationFrame(animate)
    }
    animate()

    // Limpar ao desmontar
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [lowPerformanceMode])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" style={{ pointerEvents: "none" }} />
}

