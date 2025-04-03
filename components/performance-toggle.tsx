"use client"

import { useState, useEffect } from "react"
import { Zap, ZapOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function PerformanceToggle() {
  const [isLowPerformanceMode, setIsLowPerformanceMode] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // Verificar se o modo de baixa performance está ativado no localStorage
    if (typeof window !== "undefined") {
      const storedMode = localStorage.getItem("lowPerformanceMode")
      if (storedMode === "true") {
        setIsLowPerformanceMode(true)
        document.body.classList.add("low-perf-mode")
      }
    }

    // Mostrar o botão após um pequeno delay
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const togglePerformanceMode = () => {
    if (!isMounted) return

    const newMode = !isLowPerformanceMode
    setIsLowPerformanceMode(newMode)

    if (typeof window !== "undefined") {
      localStorage.setItem("lowPerformanceMode", newMode.toString())
    }

    if (newMode) {
      document.body.classList.add("low-perf-mode")
    } else {
      document.body.classList.remove("low-perf-mode")
    }

    // Recarregar a página para aplicar as mudanças
    window.location.reload()
  }

  if (!isVisible || !isMounted) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-4 right-4 z-40"
    >
      <Button
        onClick={togglePerformanceMode}
        size="sm"
        variant="outline"
        className={`rounded-full p-2 ${
          isLowPerformanceMode
            ? "bg-gray-800/70 border-gray-700 text-gray-400 hover:bg-gray-700/70"
            : "bg-fuchsia-900/70 border-fuchsia-700 text-fuchsia-300 hover:bg-fuchsia-800/70"
        }`}
        title={isLowPerformanceMode ? "Ativar modo de alta performance" : "Ativar modo de baixa performance"}
      >
        {isLowPerformanceMode ? <ZapOff className="h-4 w-4" /> : <Zap className="h-4 w-4" />}
      </Button>
    </motion.div>
  )
}

