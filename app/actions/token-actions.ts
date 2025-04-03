"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { sql } from "@/lib/db"

interface UserTaskData {
  walletAddress: string
  walletType: string
  twitterUsername: string
  telegramId: string
  completedAt: string
}

interface UserClaim {
  id: string
  name: string
  walletAddress: string
  walletType: string
  twitterUsername: string
  telegramId: string
  tokensRequested: number
  status: "pending" | "processed" | "rejected" | "failed"
  createdAt: string
  processedAt?: string
  notes?: string
}

// Credenciais de administrador - Usando variáveis de ambiente
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "admin"
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "changeme"
const SESSION_COOKIE_NAME = "admin_session"
const SESSION_EXPIRY = 24 * 60 * 60 * 1000 // 24 horas

/**
 * Gets the secret token from environment variables
 * This should only be used in server components or server actions
 */
export async function getSecretToken(): Promise<string> {
  return process.env.TOKEN || ""
}

/**
 * Verifies if a user token matches the secret token
 * @param userToken The token to verify
 * @returns True if the token is valid, false otherwise
 */
export async function verifyUserToken(userToken: string): Promise<boolean> {
  const secretToken = process.env.TOKEN || ""
  return userToken === secretToken
}

/**
 * Gets the token requirement status
 * @returns Whether token is required for certain operations
 */
export async function getTokenRequirementStatus(): Promise<boolean> {
  // This could be fetched from database or other configuration
  return true
}

// Função de verificação de sessão melhorada
export async function checkAdminSession() {
  try {
    const sessionToken = cookies().get(SESSION_COOKIE_NAME)?.value

    if (!sessionToken) {
      console.log("Sessão não encontrada: Cookie não existe")
      return {
        authenticated: false,
        message: "Sessão não encontrada",
      }
    }

    // Verificar se a sessão existe no banco de dados
    const sessionResult = await sql`
     SELECT * FROM admin_sessions 
     WHERE token = ${sessionToken} 
     AND expires_at > ${new Date().toISOString()}
   `

    if (sessionResult.length === 0) {
      console.log("Sessão inválida ou expirada")
      return {
        authenticated: false,
        message: "Sessão inválida ou expirada",
      }
    }

    console.log("Sessão válida")
    return {
      authenticated: true,
      message: "Sessão válida",
    }
  } catch (error) {
    console.error("Erro ao verificar sessão:", error)
    return {
      authenticated: false,
      message: "Erro ao verificar sessão",
    }
  }
}

/**
 * Encerra a sessão do administrador
 */
export async function logoutAdmin() {
  try {
    const sessionToken = cookies().get(SESSION_COOKIE_NAME)?.value

    if (sessionToken) {
      // Remover a sessão do banco de dados
      await sql`
       DELETE FROM admin_sessions
       WHERE token = ${sessionToken}
     `
    }

    // Remover o cookie
    cookies().delete(SESSION_COOKIE_NAME)

    return {
      success: true,
      message: "Logout realizado com sucesso",
    }
  } catch (error) {
    console.error("Erro ao fazer logout:", error)
    return {
      success: false,
      message: "Erro ao processar a solicitação. Tente novamente mais tarde.",
    }
  }
}

/**
 * Obtém a lista de reivindicações de usuários
 */
export async function getUserClaims(): Promise<UserClaim[]> {
  try {
    const result = await sql`
     SELECT 
       id::text,
       name,
       wallet_address as "walletAddress",
       wallet_type as "walletType",
       twitter_username as "twitterUsername",
       telegram_id as "telegramId",
       tokens_requested as "tokensRequested",
       status,
       created_at as "createdAt",
       processed_at as "processedAt"
     FROM claims
     ORDER BY created_at DESC
   `

    return result.map((claim) => ({
      ...claim,
      createdAt: new Date(claim.createdAt).toISOString(),
      processedAt: claim.processedAt ? new Date(claim.processedAt).toISOString() : undefined,
    }))
  } catch (error) {
    console.error("Erro ao obter reivindicações:", error)
    return []
  }
}

/**
 * Distribui tokens para um usuário
 */
export async function distributeTokens(userId: string, amount: number) {
  try {
    if (!userId || amount <= 0) {
      return {
        success: false,
        message: "Parâmetros inválidos",
      }
    }

    // Verificar se o administrador está autenticado
    const sessionCheck = await checkAdminSession()
    if (!sessionCheck.authenticated) {
      return {
        success: false,
        message: "Não autorizado",
      }
    }

    // Atualizar a reivindicação
    const result = await sql`
     UPDATE claims
     SET 
       tokens_requested = ${amount},
       status = 'processed',
       processed_at = ${new Date().toISOString()}
    WHERE id = ${userId}::uuid
    RETURNING id
  `

    if (result.length === 0) {
      return {
        success: false,
        message: "Reivindicação não encontrada",
      }
    }

    return {
      success: true,
      message: `${amount} tokens distribuídos com sucesso para o usuário`,
    }
  } catch (error) {
    console.error("Erro ao distribuir tokens:", error)
    return {
      success: false,
      message: "Erro ao processar a solicitação. Tente novamente mais tarde.",
    }
  }
}

/**
 * Middleware para proteger rotas administrativas
 */
export async function adminMiddleware() {
  const sessionCheck = await checkAdminSession()

  if (!sessionCheck.authenticated) {
    redirect("/admin/login")
  }
}

