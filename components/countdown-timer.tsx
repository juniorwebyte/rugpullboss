"use client"

import { useState, useEffect, useMemo } from "react"
import { motion } from "framer-motion"

// Chaves para armazenamento local
const STORAGE_KEYS = {
  TARGET_TIMESTAMP: "rugpullboss_target_timestamp",
  TIMER_STATE: "rugpullboss_timer_state",
  LAST_UPDATED: "rugpullboss_last_updated",
}

export default function CountdownTimer({
  customLaunchDate,
  resetTimer = false,
  durationDays = 30,
}: {
  customLaunchDate?: Date | string
  resetTimer?: boolean
  durationDays?: number
}) {
  // Estado para armazenar o tempo restante
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Estado para controlar se o timer foi inicializado
  const [isInitialized, setIsInitialized] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // Função para salvar o estado do timer no localStorage
  const saveTimerState = (state: typeof timeLeft, targetTimestamp: number) => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(STORAGE_KEYS.TIMER_STATE, JSON.stringify(state))
        localStorage.setItem(STORAGE_KEYS.TARGET_TIMESTAMP, targetTimestamp.toString())
        localStorage.setItem(STORAGE_KEYS.LAST_UPDATED, Date.now().toString())
      } catch (error) {
        console.error("Erro ao salvar estado do timer:", error)
      }
    }
  }

  // Função para recuperar o estado do timer do localStorage
  const getStoredTimerState = () => {
    if (typeof window !== "undefined") {
      try {
        const storedState = localStorage.getItem(STORAGE_KEYS.TIMER_STATE)
        const storedTimestamp = localStorage.getItem(STORAGE_KEYS.TARGET_TIMESTAMP)
        const lastUpdated = localStorage.getItem(STORAGE_KEYS.LAST_UPDATED)

        if (storedState && storedTimestamp && lastUpdated) {
          return {
            state: JSON.parse(storedState),
            targetTimestamp: Number.parseInt(storedTimestamp),
            lastUpdated: Number.parseInt(lastUpdated),
          }
        }
      } catch (error) {
        console.error("Erro ao recuperar estado do timer:", error)
      }
    }
    return null
  }

  // Set isMounted to true after component mounts
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Calcular o timestamp alvo (independente de fuso horário)
  const targetTimestamp = useMemo(() => {
    // If not mounted yet, return a default value
    if (!isMounted) {
      return Date.now() + durationDays * 24 * 60 * 60 * 1000
    }

    // Se resetTimer for true, ignoramos o localStorage e usamos apenas customLaunchDate ou o padrão
    if (resetTimer) {
      if (typeof window !== "undefined") {
        // Limpar o localStorage se resetTimer for true
        localStorage.removeItem(STORAGE_KEYS.TIMER_STATE)
        localStorage.removeItem(STORAGE_KEYS.TARGET_TIMESTAMP)
        localStorage.removeItem(STORAGE_KEYS.LAST_UPDATED)
      }

      if (customLaunchDate) {
        return new Date(customLaunchDate).getTime()
      }

      // Padrão: durationDays a partir de agora (em UTC)
      const now = new Date()
      return now.getTime() + durationDays * 24 * 60 * 60 * 1000
    }

    // Verificar se temos um estado salvo no localStorage
    const storedState = getStoredTimerState()

    if (storedState) {
      return storedState.targetTimestamp
    }

    // Se não temos estado salvo, usar customLaunchDate ou o padrão
    if (customLaunchDate) {
      return new Date(customLaunchDate).getTime()
    }

    // Padrão: durationDays a partir de agora (em UTC)
    const now = new Date()
    return now.getTime() + durationDays * 24 * 60 * 60 * 1000
  }, [customLaunchDate, resetTimer, durationDays, isMounted])

  useEffect(() => {
    // Garantir que o código só execute no cliente
    if (typeof window === "undefined" || !isMounted) return

    // Verificar se temos um estado salvo e se não estamos resetando o timer
    if (!resetTimer && !isInitialized) {
      const storedState = getStoredTimerState()

      if (storedState) {
        // Usar o timestamp alvo armazenado para calcular o tempo restante atual
        const now = Date.now()
        const difference = storedState.targetTimestamp - now

        if (difference > 0) {
          const days = Math.floor(difference / (1000 * 60 * 60 * 24))
          const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
          const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
          const seconds = Math.floor((difference % (1000 * 60)) / 1000)

          setTimeLeft({ days, hours, minutes, seconds })
        } else {
          setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        }
      }

      setIsInitialized(true)
    }

    // Função para calcular o tempo restante
    const calculateTimeLeft = () => {
      const now = Date.now() // Timestamp atual em milissegundos (UTC)
      const difference = targetTimestamp - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        const newState = { days, hours, minutes, seconds }
        setTimeLeft(newState)

        // Salvar o estado atual no localStorage
        saveTimerState(newState, targetTimestamp)
      } else {
        const zeroState = { days: 0, hours: 0, minutes: 0, seconds: 0 }
        setTimeLeft(zeroState)
        saveTimerState(zeroState, targetTimestamp)
      }
    }

    // Calcular imediatamente e depois a cada segundo
    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    // Limpar o intervalo quando o componente for desmontado
    return () => clearInterval(timer)
  }, [targetTimestamp, resetTimer, isInitialized, isMounted])

  const timeUnits = [
    { label: "Dias", value: timeLeft.days },
    { label: "Horas", value: timeLeft.hours },
    { label: "Minutos", value: timeLeft.minutes },
    { label: "Segundos", value: timeLeft.seconds },
  ]

  return (
    <div className="w-full">
      <h3 className="text-center text-lg md:text-xl text-fuchsia-300 mb-4 font-medium">
        Abertura do Portal Dimensional em:
      </h3>
      <div className="grid grid-cols-4 gap-2 md:gap-4">
        {timeUnits.map((unit, index) => (
          <div key={index} className="flex flex-col items-center">
            <motion.div
              className="w-full h-16 md:h-20 bg-gradient-to-b from-indigo-900/40 to-fuchsia-900/40 rounded-lg border border-fuchsia-800/30 flex items-center justify-center portal-pulse"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="text-2xl md:text-4xl font-bold text-white text-glow">
                {unit.value < 10 ? `0${unit.value}` : unit.value}
              </span>
            </motion.div>
            <span className="text-xs md:text-sm text-gray-400 mt-2">{unit.label}</span>
          </div>
        ))}
      </div>
      <p className="text-center text-sm text-gray-400 mt-4">Prepare-se para transcender dimensões com o RugPullBoss</p>
    </div>
  )
}

