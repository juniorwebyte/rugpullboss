"use client"

import { useEffect, useRef } from "react"

interface DreamSymbolsProps {
  lowPerformanceMode?: boolean
}

export default function DreamSymbols({ lowPerformanceMode = false }: DreamSymbolsProps) {
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

    // Símbolos místicos
    const symbols = [
      "⚡",
      "✨",
      "🔮",
      "👁️",
      "🌙",
      "⭐",
      "🌀",
      "💫",
      "🧿",
      "⚜️",
      "∞",
      "⚕️",
      "☯️",
      "⚛️",
      "🕸️",
      "🔯",
      "♾️",
      "🧙",
      "🔍",
      "🔆",
    ]

    // Configurações dos símbolos
    const symbolsConfig = {
      count: lowPerformanceMode ? 15 : 30,
      symbols: [] as any[],
    }

    // Criar símbolos
    for (let i = 0; i < symbolsConfig.count; i++) {
      symbolsConfig.symbols.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        size: Math.random() * 20 + 10,
        opacity: Math.random() * 0.3 + 0.1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
      })
    }

    // Função para desenhar os símbolos
    const drawSymbols = () => {
      // Limpar o canvas com um fundo transparente
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Desenhar símbolos
      symbolsConfig.symbols.forEach((symbol) => {
        // Atualizar posição
        symbol.x += symbol.speedX
        symbol.y += symbol.speedY
        symbol.rotation += symbol.rotationSpeed

        // Verificar limites da tela
        if (symbol.x < -50) symbol.x = canvas.width + 50
        if (symbol.x > canvas.width + 50) symbol.x = -50
        if (symbol.y < -50) symbol.y = canvas.height + 50
        if (symbol.y > canvas.height + 50) symbol.y = -50

        // Salvar o estado atual do contexto
        ctx.save()

        // Configurar a transparência
        ctx.globalAlpha = symbol.opacity

        // Mover para a posição do símbolo e rotacionar
        ctx.translate(symbol.x, symbol.y)
        ctx.rotate(symbol.rotation)

        // Desenhar o símbolo
        ctx.font = `${symbol.size}px Arial`
        ctx.fillStyle = "white"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText(symbol.symbol, 0, 0)

        // Restaurar o estado do contexto
        ctx.restore()
      })
    }

    // Iniciar a animação
    let animationId: number
    const animate = () => {
      drawSymbols()
      animationId = requestAnimationFrame(animate)
    }
    animate()

    // Limpar ao desmontar
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [lowPerformanceMode])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-5" style={{ pointerEvents: "none" }} />
}

