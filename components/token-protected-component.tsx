"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { verifyUserToken, getSecretToken } from "@/app/actions/token-actions"

interface TokenProtectedComponentProps {
  children: React.ReactNode
}

export default function TokenProtectedComponent({ children }: TokenProtectedComponentProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        // Get the token from the server action
        const secretToken = await getSecretToken()

        // Use a server action to verify the token
        const isValid = await verifyUserToken(secretToken)
        setIsAuthenticated(isValid)
      } catch (error) {
        console.error("Erro ao verificar autenticação:", error)
        setIsAuthenticated(false)
      } finally {
        setIsLoading(false)
      }
    }

    checkAuthentication()
  }, [])

  if (isLoading) {
    return <div>Carregando...</div>
  }

  if (!isAuthenticated) {
    return <div>Acesso não autorizado</div>
  }

  return <>{children}</>
}

