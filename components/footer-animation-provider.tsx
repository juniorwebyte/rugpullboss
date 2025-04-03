"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

// Definir o tipo para o contexto
type FooterAnimationContextType = {
  isEnabled: boolean
  toggleAnimations: () => void
}

// Criar o contexto com um valor padrão
const FooterAnimationContext = createContext<FooterAnimationContextType>({
  isEnabled: true,
  toggleAnimations: () => {},
})

// Hook personalizado para usar o contexto
export const useFooterAnimations = () => useContext(FooterAnimationContext)

// Provedor do contexto
export function FooterAnimationProvider({ children }: { children: React.ReactNode }) {
  // Verificar localStorage para o estado inicial (com fallback para true)
  const [isEnabled, setIsEnabled] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  // Set isMounted to true after component mounts
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Carregar a preferência do usuário do localStorage quando o componente montar
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedPreference = localStorage.getItem("footerAnimationsEnabled")
      // Se houver uma preferência salva, use-a
      if (savedPreference !== null) {
        setIsEnabled(savedPreference === "true")
      }
    }
  }, [])

  // Função para alternar o estado das animações
  const toggleAnimations = () => {
    if (!isMounted) return

    const newState = !isEnabled
    setIsEnabled(newState)

    // Salvar a preferência no localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("footerAnimationsEnabled", newState.toString())
    }
  }

  return (
    <FooterAnimationContext.Provider value={{ isEnabled, toggleAnimations }}>
      {children}
    </FooterAnimationContext.Provider>
  )
}

