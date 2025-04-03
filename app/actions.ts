"use server"

import { cookies } from "next/headers"
import { v4 as uuidv4 } from "uuid"
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
}

// Credenciais de administrador - Usando variáveis de ambiente
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "admin"
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "changeme"
const SESSION_COOKIE_NAME = "admin_session"
const SESSION_EXPIRY = 24 * 60 * 60 * 1000 // 24 horas

/**
 * Armazena o endereço da carteira no banco de dados para distribuição manual posterior
 */
export async function storeWalletAddress(address: string) {
  try {
    // Validar o endereço da carteira (formato básico de endereço Ethereum)
    if (!address || !/^0x[a-fA-F0-9]{40}$/.test(address)) {
      return {
        success: false,
        message: "Endereço de carteira inválido",
      }
    }

    // Verificar se o endereço já existe
    const existingWallet = await sql`
      SELECT wallet_address FROM claims WHERE LOWER(wallet_address) = LOWER(${address})
    `

    if (existingWallet.length > 0) {
      return {
        success: false,
        message: "Este endereço já foi registrado para o AirDrop",
      }
    }

    // Adicionar novo endereço como uma reivindicação pendente
    await sql`
      INSERT INTO claims (wallet_address, wallet_type, tokens_requested)
      VALUES (${address}, 'unknown', 1000)
    `

    // Registrar em log para fins de auditoria
    console.log(`Novo endereço registrado para AirDrop: ${address}`)

    return {
      success: true,
      message: "Endereço registrado com sucesso para o AirDrop",
    }
  } catch (error) {
    console.error("Erro ao armazenar endereço da carteira:", error)
    return {
      success: false,
      message: "Erro ao processar a solicitação. Tente novamente mais tarde.",
    }
  }
}

/**
 * Armazena os dados das tarefas do usuário
 */
export async function storeUserTasks(taskData: UserTaskData) {
  try {
    // Validar o endereço da carteira
    if (!taskData.walletAddress || !/^0x[a-fA-F0-9]{40}$/.test(taskData.walletAddress)) {
      return {
        success: false,
        message: "Endereço de carteira inválido",
      }
    }

    // Verificar se já existem tarefas para este endereço
    const existingTasks = await sql`
      SELECT wallet_address FROM user_tasks WHERE LOWER(wallet_address) = LOWER(${taskData.walletAddress})
    `

    if (existingTasks.length > 0) {
      // Atualizar tarefas existentes
      await sql`
        UPDATE user_tasks
        SET 
          wallet_type = ${taskData.walletType},
          twitter_username = ${taskData.twitterUsername || null},
          telegram_id = ${taskData.telegramId || null},
          completed_at = ${new Date().toISOString()}
        WHERE LOWER(wallet_address) = LOWER(${taskData.walletAddress})
      `
    } else {
      // Adicionar novas tarefas
      await sql`
        INSERT INTO user_tasks (
          wallet_address,
          wallet_type,
          twitter_username,
          telegram_id,
          completed_at
        ) VALUES (
          ${taskData.walletAddress},
          ${taskData.walletType},
          ${taskData.twitterUsername || null},
          ${taskData.telegramId || null},
          ${new Date().toISOString()}
        )
      `
    }

    // Registrar em log para fins de auditoria
    console.log(`Dados de tarefas registrados para: ${taskData.walletAddress}`)

    // Criar uma reivindicação para este usuário
    await createUserClaim(taskData)

    return {
      success: true,
      message: "Dados de tarefas registrados com sucesso",
    }
  } catch (error) {
    console.error("Erro ao armazenar dados de tarefas:", error)
    return {
      success: false,
      message: "Erro ao processar a solicitação. Tente novamente mais tarde.",
    }
  }
}

/**
 * Cria uma reivindicação de usuário com base nas tarefas concluídas
 */
async function createUserClaim(taskData: UserTaskData) {
  try {
    // Verificar se já existe uma reivindicação para este endereço
    const existingClaim = await sql`
      SELECT id FROM claims WHERE LOWER(wallet_address) = LOWER(${taskData.walletAddress})
    `

    if (existingClaim.length > 0) {
      // Atualizar reivindicação existente
      await sql`
        UPDATE claims
        SET 
          twitter_username = ${taskData.twitterUsername || null},
          telegram_id = ${taskData.telegramId || null}
        WHERE LOWER(wallet_address) = LOWER(${taskData.walletAddress})
      `
    } else {
      // Obter a configuração do sistema para o número de tokens por reivindicação
      const configResult = await sql`
        SELECT tokens_per_claim FROM system_config WHERE id = 1
      `

      const tokensPerClaim = configResult.length > 0 ? configResult[0].tokens_per_claim : 1000

      // Adicionar nova reivindicação
      await sql`
        INSERT INTO claims (
          name,
          wallet_address,
          wallet_type,
          twitter_username,
          telegram_id,
          tokens_requested,
          status,
          created_at
        ) VALUES (
          ${taskData.twitterUsername || null},
          ${taskData.walletAddress},
          ${taskData.walletType},
          ${taskData.twitterUsername || null},
          ${taskData.telegramId || null},
          ${tokensPerClaim},
          'pending',
          ${new Date().toISOString()}
        )
      `
    }

    return {
      success: true,
      message: "Reivindicação criada com sucesso",
    }
  } catch (error) {
    console.error("Erro ao criar reivindicação:", error)
    return {
      success: false,
      message: "Erro ao processar a solicitação. Tente novamente mais tarde.",
    }
  }
}

/**
 * Obtém a lista de carteiras registradas para o AirDrop
 */
export async function getRegisteredWallets(): Promise<string[]> {
  try {
    const result = await sql`
      SELECT wallet_address FROM claims
    `

    return result.map((row) => row.wallet_address)
  } catch (error) {
    console.error("Erro ao obter endereços registrados:", error)
    return []
  }
}

// Função de autenticação de administrador atualizada
export async function authenticateAdmin(username: string, password: string) {
  try {
    // Verificar se as credenciais correspondem às variáveis de ambiente
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      // Criar um token de sessão seguro
      const sessionToken = uuidv4()

      // Armazenar o token em um cookie seguro
      cookies().set({
        name: SESSION_COOKIE_NAME,
        value: sessionToken,
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24, // 24 horas em segundos
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
      })

      // Armazenar a sessão no banco de dados
      await sql`
        INSERT INTO admin_sessions (
          id,
          admin_id,
          token,
          created_at,
          expires_at
        ) VALUES (
          ${uuidv4()},
          ${uuidv4()}, -- Placeholder para admin_id
          ${sessionToken},
          ${new Date().toISOString()},
          ${new Date(Date.now() + SESSION_EXPIRY).toISOString()}
        )
      `

      return {
        success: true,
        message: "Autenticação bem-sucedida",
      }
    } else {
      // Adicionar atraso para prevenir ataques de força bruta
      await new Promise((resolve) => setTimeout(resolve, 1000))

      return {
        success: false,
        message: "Credenciais inválidas",
      }
    }
  } catch (error) {
    console.error("Erro ao autenticar administrador:", error)
    return {
      success: false,
      message: "Erro ao processar a solicitação. Tente novamente mais tarde.",
    }
  }
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

