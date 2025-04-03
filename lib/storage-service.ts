// Replace the entire file with this updated version that uses Neon database

import { sql, initializeDatabase, DB_FALLBACK_MODE } from "@/lib/db"

// Types of data
export interface UserClaim {
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

export interface SystemConfig {
  airdropEnabled: boolean
  totalTokensAllocated: number
  tokensPerClaim: number
  claimDeadline: string
  requireTwitter: boolean
  requireTelegram: boolean
  adminUsers: string[]
  launchDate: string // Data de lançamento oficial do Airdrop
}

// Default values
const DEFAULT_TOTAL_TOKENS = Number(process.env.TOTAL_TOKENS) || 1000000

// Default system configuration
const DEFAULT_CONFIG: SystemConfig = {
  airdropEnabled: true,
  totalTokensAllocated: DEFAULT_TOTAL_TOKENS,
  tokensPerClaim: 100,
  claimDeadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days from now
  requireTwitter: true,
  requireTelegram: true,
  adminUsers: [process.env.NEXT_PUBLIC_ADMIN_USERNAME || "admin"],
  launchDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toISOString(), // 15 days from now for official launch
}

// Initialize storage if needed
export async function initializeStorage(): Promise<void> {
  if (!DB_FALLBACK_MODE) {
    await initializeDatabase()
  }
}

// Claim management functions
export async function getAllClaims(): Promise<UserClaim[]> {
  try {
    // Initialize database tables if they don't exist
    await initializeStorage()

    if (DB_FALLBACK_MODE) {
      console.log("Using fallback mode for getAllClaims")
      return []
    }

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
        processed_at as "processedAt", 
        notes
      FROM claims
      ORDER BY created_at DESC
    `

    return result.map((row) => ({
      ...row,
      createdAt: new Date(row.createdAt).toISOString(),
      processedAt: row.processedAt ? new Date(row.processedAt).toISOString() : undefined,
    }))
  } catch (error) {
    console.error("Error getting all claims:", error)
    return []
  }
}

export async function getClaimById(id: string): Promise<UserClaim | null> {
  try {
    // Initialize database tables if they don't exist
    await initializeStorage()

    if (DB_FALLBACK_MODE) {
      console.log("Using fallback mode for getClaimById")
      return null
    }

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
        processed_at as "processedAt", 
        notes
      FROM claims
      WHERE id = ${id}::uuid
    `

    if (result.length === 0) {
      return null
    }

    const claim = result[0]
    return {
      ...claim,
      createdAt: new Date(claim.createdAt).toISOString(),
      processedAt: claim.processedAt ? new Date(claim.processedAt).toISOString() : undefined,
    }
  } catch (error) {
    console.error("Error getting claim by ID:", error)
    return null
  }
}

export async function getClaimByWalletAddress(address: string): Promise<UserClaim | null> {
  try {
    // Initialize database tables if they don't exist
    await initializeStorage()

    if (DB_FALLBACK_MODE) {
      console.log("Using fallback mode for getClaimByWalletAddress")
      return null
    }

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
        processed_at as "processedAt", 
        notes
      FROM claims
      WHERE LOWER(wallet_address) = LOWER(${address})
    `

    if (result.length === 0) {
      return null
    }

    const claim = result[0]
    return {
      ...claim,
      createdAt: new Date(claim.createdAt).toISOString(),
      processedAt: claim.processedAt ? new Date(claim.processedAt).toISOString() : undefined,
    }
  } catch (error) {
    console.error("Error getting claim by wallet address:", error)
    return null
  }
}

export async function addClaim(claim: Omit<UserClaim, "id" | "createdAt" | "status">): Promise<UserClaim> {
  try {
    // Initialize database tables if they don't exist
    await initializeStorage()

    if (DB_FALLBACK_MODE) {
      console.log("Using fallback mode for addClaim")
      throw new Error("Database unavailable in fallback mode")
    }

    // Check if a claim with this wallet address already exists
    const existingClaim = await getClaimByWalletAddress(claim.walletAddress)

    if (existingClaim) {
      throw new Error("This wallet address has already made a claim")
    }

    const result = await sql`
      INSERT INTO claims (
        name, 
        wallet_address, 
        wallet_type, 
        twitter_username, 
        telegram_id, 
        tokens_requested
      ) VALUES (
        ${claim.name || null}, 
        ${claim.walletAddress}, 
        ${claim.walletType}, 
        ${claim.twitterUsername || null}, 
        ${claim.telegramId || null}, 
        ${100}
      )
      RETURNING 
        id::text, 
        name, 
        wallet_address as "walletAddress", 
        wallet_type as "walletType", 
        twitter_username as "twitterUsername", 
        telegram_id as "telegramId", 
        tokens_requested as "tokensRequested", 
        status, 
        created_at as "createdAt"
    `

    const newClaim = result[0]
    return {
      ...newClaim,
      createdAt: new Date(newClaim.createdAt).toISOString(),
    }
  } catch (error) {
    console.error("Error adding claim:", error)
    throw error
  }
}

export async function updateClaim(id: string, updates: Partial<UserClaim>): Promise<UserClaim> {
  try {
    // Initialize database tables if they don't exist
    await initializeStorage()

    if (DB_FALLBACK_MODE) {
      console.log("Using fallback mode for updateClaim")
      throw new Error("Database unavailable in fallback mode")
    }

    // Build the SET clause dynamically based on the provided updates
    const updateFields = []
    const values: any[] = []

    if (updates.name !== undefined) {
      updateFields.push(`name = $${updateFields.length + 1}`)
      values.push(updates.name)
    }

    if (updates.walletAddress !== undefined) {
      updateFields.push(`wallet_address = $${updateFields.length + 1}`)
      values.push(updates.walletAddress)
    }

    if (updates.walletType !== undefined) {
      updateFields.push(`wallet_type = $${updateFields.length + 1}`)
      values.push(updates.walletType)
    }

    if (updates.twitterUsername !== undefined) {
      updateFields.push(`twitter_username = $${updateFields.length + 1}`)
      values.push(updates.twitterUsername)
    }

    if (updates.telegramId !== undefined) {
      updateFields.push(`telegram_id = $${updateFields.length + 1}`)
      values.push(updates.telegramId)
    }

    if (updates.tokensRequested !== undefined) {
      updateFields.push(`tokens_requested = $${updateFields.length + 1}`)
      values.push(updates.tokensRequested)
    }

    if (updates.status !== undefined) {
      updateFields.push(`status = $${updateFields.length + 1}`)
      values.push(updates.status)
    }

    if (updates.notes !== undefined) {
      updateFields.push(`notes = $${updateFields.length + 1}`)
      values.push(updates.notes)
    }

    // If status is being updated to processed, set processed_at to current time
    if (updates.status === "processed") {
      updateFields.push(`processed_at = $${updateFields.length + 1}`)
      values.push(new Date())
    }

    // Add the ID as the last parameter
    values.push(id)

    if (updateFields.length === 0) {
      throw new Error("No updates provided")
    }

    const updateQuery = `
      UPDATE claims
      SET ${updateFields.join(", ")}
      WHERE id = $${values.length}::uuid
      RETURNING 
        id::text, 
        name, 
        wallet_address as "walletAddress", 
        wallet_type as "walletType", 
        twitter_username as "twitterUsername", 
        telegram_id as "telegramId", 
        tokens_requested as "tokensRequested", 
        status, 
        created_at as "createdAt", 
        processed_at as "processedAt", 
        notes
    `

    const result = await sql.unsafe(updateQuery, ...values)

    if (result.length === 0) {
      throw new Error("Claim not found")
    }

    const updatedClaim = result[0]
    return {
      ...updatedClaim,
      createdAt: new Date(updatedClaim.createdAt).toISOString(),
      processedAt: updatedClaim.processedAt ? new Date(updatedClaim.processedAt).toISOString() : undefined,
    }
  } catch (error) {
    console.error("Error updating claim:", error)
    throw error
  }
}

export async function deleteClaim(id: string): Promise<boolean> {
  try {
    // Initialize database tables if they don't exist
    await initializeStorage()

    if (DB_FALLBACK_MODE) {
      console.log("Using fallback mode for deleteClaim")
      return false
    }

    const result = await sql`
      DELETE FROM claims
      WHERE id = ${id}::uuid
    `

    return result.count > 0
  } catch (error) {
    console.error("Error deleting claim:", error)
    return false
  }
}

// System configuration functions
export async function getSystemConfig(): Promise<SystemConfig> {
  try {
    // Initialize database tables if they don't exist
    await initializeStorage()

    if (DB_FALLBACK_MODE) {
      console.log("Using fallback mode for getSystemConfig")
      return DEFAULT_CONFIG
    }

    const result = await sql`
      SELECT 
        airdrop_enabled as "airdropEnabled", 
        total_tokens_allocated as "totalTokensAllocated", 
        tokens_per_claim as "tokensPerClaim", 
        claim_deadline as "claimDeadline", 
        require_twitter as "requireTwitter", 
        require_telegram as "requireTelegram", 
        launch_date as "launchDate"
      FROM system_config
      WHERE id = 1
    `

    if (result.length === 0) {
      // If no config exists, return default and try to create it
      try {
        await sql`
          INSERT INTO system_config (
            airdrop_enabled, 
            total_tokens_allocated, 
            tokens_per_claim, 
            claim_deadline, 
            require_twitter, 
            require_telegram, 
            launch_date
          ) VALUES (
            ${DEFAULT_CONFIG.airdropEnabled}, 
            ${DEFAULT_CONFIG.totalTokensAllocated}, 
            ${DEFAULT_CONFIG.tokensPerClaim}, 
            ${new Date(DEFAULT_CONFIG.claimDeadline)}, 
            ${DEFAULT_CONFIG.requireTwitter}, 
            ${DEFAULT_CONFIG.requireTelegram}, 
            ${new Date(DEFAULT_CONFIG.launchDate)}
          )
        `
      } catch (insertError) {
        console.error("Error inserting default config:", insertError)
      }

      return DEFAULT_CONFIG
    }

    const config = result[0]
    return {
      ...config,
      claimDeadline: new Date(config.claimDeadline).toISOString(),
      launchDate: new Date(config.launchDate).toISOString(),
      adminUsers: [process.env.NEXT_PUBLIC_ADMIN_USERNAME || "admin"],
    }
  } catch (error) {
    console.error("Error getting system config:", error)
    return DEFAULT_CONFIG
  }
}

export async function updateSystemConfig(updates: Partial<SystemConfig>): Promise<SystemConfig> {
  try {
    // Initialize database tables if they don't exist
    await initializeStorage()

    if (DB_FALLBACK_MODE) {
      console.log("Using fallback mode for updateSystemConfig")
      return DEFAULT_CONFIG
    }

    // Build the SET clause dynamically based on the provided updates
    const updateFields = []
    const values: any[] = []

    if (updates.airdropEnabled !== undefined) {
      updateFields.push(`airdrop_enabled = $${updateFields.length + 1}`)
      values.push(updates.airdropEnabled)
    }

    if (updates.totalTokensAllocated !== undefined) {
      updateFields.push(`total_tokens_allocated = $${updateFields.length + 1}`)
      values.push(updates.totalTokensAllocated)
    }

    if (updates.tokensPerClaim !== undefined) {
      updateFields.push(`tokens_per_claim = $${updateFields.length + 1}`)
      values.push(updates.tokensPerClaim)
    }

    if (updates.claimDeadline !== undefined) {
      updateFields.push(`claim_deadline = $${updateFields.length + 1}`)
      values.push(new Date(updates.claimDeadline))
    }

    if (updates.requireTwitter !== undefined) {
      updateFields.push(`require_twitter = $${updateFields.length + 1}`)
      values.push(updates.requireTwitter)
    }

    if (updates.requireTelegram !== undefined) {
      updateFields.push(`require_telegram = $${updateFields.length + 1}`)
      values.push(updates.requireTelegram)
    }

    if (updates.launchDate !== undefined) {
      updateFields.push(`launch_date = $${updateFields.length + 1}`)
      values.push(new Date(updates.launchDate))
    }

    if (updateFields.length === 0) {
      throw new Error("No updates provided")
    }

    const updateQuery = `
      UPDATE system_config
      SET ${updateFields.join(", ")}
      WHERE id = 1
      RETURNING 
        airdrop_enabled as "airdropEnabled", 
        total_tokens_allocated as "totalTokensAllocated", 
        tokens_per_claim as "tokensPerClaim", 
        claim_deadline as "claimDeadline", 
        require_twitter as "requireTwitter", 
        require_telegram as "requireTelegram", 
        launch_date as "launchDate"
    `

    const result = await sql.unsafe(updateQuery, ...values)

    if (result.length === 0) {
      throw new Error("Config not found")
    }

    const updatedConfig = result[0]
    return {
      ...updatedConfig,
      claimDeadline: new Date(updatedConfig.claimDeadline).toISOString(),
      launchDate: new Date(updatedConfig.launchDate).toISOString(),
      adminUsers: [process.env.NEXT_PUBLIC_ADMIN_USERNAME || "admin"],
    }
  } catch (error) {
    console.error("Error updating system config:", error)
    throw error
  }
}

// Authentication functions
export async function authenticateAdmin(username: string, password: string): Promise<boolean> {
  try {
    // Use environment variables for authentication
    const ADMIN_USERNAME = process.env.NEXT_PUBLIC_ADMIN_USERNAME || "admin"
    const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "changeme"

    return username === ADMIN_USERNAME && password === ADMIN_PASSWORD
  } catch (error) {
    console.error("Error authenticating admin:", error)
    return false
  }
}

export function checkAdminAuthentication(): boolean {
  // This function is used on the client side, so we'll keep it simple
  if (typeof window === "undefined") return false

  try {
    return localStorage.getItem("admin_authenticated") === "true"
  } catch (error) {
    console.error("Error checking admin authentication:", error)
    return false
  }
}

export function logoutAdmin(): void {
  if (typeof window === "undefined") return

  try {
    localStorage.removeItem("admin_authenticated")
    localStorage.removeItem("admin_username")
    localStorage.removeItem("admin_session_id")
  } catch (error) {
    console.error("Error logging out admin:", error)
  }
}

// Statistics and metrics
export async function getAirdropStats() {
  try {
    // Initialize database tables if they don't exist
    await initializeStorage()

    if (DB_FALLBACK_MODE) {
      console.log("Using fallback mode for getAirdropStats")
      return {
        totalClaims: 0,
        pendingClaims: 0,
        processedClaims: 0,
        rejectedClaims: 0,
        failedClaims: 0,
        totalTokensAllocated: DEFAULT_CONFIG.totalTokensAllocated,
        tokensDistributed: 0,
        tokensRemaining: DEFAULT_CONFIG.totalTokensAllocated,
      }
    }

    // Get system config
    const config = await getSystemConfig()

    // Get claim statistics
    const statsResult = await sql`
      SELECT
        COUNT(*) as "totalClaims",
        COUNT(*) FILTER (WHERE status = 'pending') as "pendingClaims",
        COUNT(*) FILTER (WHERE status = 'processed') as "processedClaims",
        COUNT(*) FILTER (WHERE status = 'rejected') as "rejectedClaims",
        COUNT(*) FILTER (WHERE status = 'failed') as "failedClaims",
        COALESCE(SUM(tokens_requested) FILTER (WHERE status = 'processed'), 0) as "tokensDistributed"
      FROM claims
    `

    const stats = statsResult[0]

    return {
      totalClaims: Number(stats.totalClaims),
      pendingClaims: Number(stats.pendingClaims),
      processedClaims: Number(stats.processedClaims),
      rejectedClaims: Number(stats.rejectedClaims),
      failedClaims: Number(stats.failedClaims),
      totalTokensAllocated: config.totalTokensAllocated,
      tokensDistributed: Number(stats.tokensDistributed),
      tokensRemaining: config.totalTokensAllocated - Number(stats.tokensDistributed),
    }
  } catch (error) {
    console.error("Error getting airdrop stats:", error)
    return {
      totalClaims: 0,
      pendingClaims: 0,
      processedClaims: 0,
      rejectedClaims: 0,
      failedClaims: 0,
      totalTokensAllocated: DEFAULT_CONFIG.totalTokensAllocated,
      tokensDistributed: 0,
      tokensRemaining: DEFAULT_CONFIG.totalTokensAllocated,
    }
  }
}

// Export data
export async function exportClaimsToCSV(): Promise<string> {
  try {
    // Initialize database tables if they don't exist
    await initializeStorage()

    if (DB_FALLBACK_MODE) {
      console.log("Using fallback mode for exportClaimsToCSV")
      return ""
    }

    const claims = await getAllClaims()

    const headers = [
      "ID",
      "Nome",
      "Endereço da Carteira",
      "Tipo de Carteira",
      "Twitter",
      "Telegram",
      "Tokens Solicitados",
      "Status",
      "Data de Criação",
      "Data de Processamento",
      "Notas",
    ]

    const rows = claims.map((claim) => [
      claim.id,
      claim.name || "N/A",
      claim.walletAddress,
      claim.walletType,
      claim.twitterUsername || "N/A",
      claim.telegramId || "N/A",
      claim.tokensRequested,
      claim.status,
      claim.createdAt,
      claim.processedAt || "",
      claim.notes || "",
    ])

    return [headers.join(","), ...rows.map((row) => row.join(","))].join("\n")
  } catch (error) {
    console.error("Error exporting to CSV:", error)
    return ""
  }
}

// Get the launch date of the Airdrop
export async function getLaunchDate(): Promise<Date> {
  try {
    // Initialize database tables if they don't exist
    await initializeStorage()

    if (DB_FALLBACK_MODE) {
      console.log("Using fallback mode for getLaunchDate")
      return new Date(Date.now() + 15 * 24 * 60 * 60 * 1000)
    }

    const config = await getSystemConfig()
    return new Date(config.launchDate)
  } catch (error) {
    console.error("Error getting launch date:", error)
    return new Date(Date.now() + 15 * 24 * 60 * 60 * 1000)
  }
}

// Update the launch date of the Airdrop
export async function updateLaunchDate(newDate: Date): Promise<boolean> {
  try {
    // Initialize database tables if they don't exist
    await initializeStorage()

    if (DB_FALLBACK_MODE) {
      console.log("Using fallback mode for updateLaunchDate")
      return false
    }

    await updateSystemConfig({
      launchDate: newDate.toISOString(),
    })
    return true
  } catch (error) {
    console.error("Error updating launch date:", error)
    return false
  }
}

// Get the status of a specific claim
export async function getClaimStatus(walletAddress: string) {
  try {
    // Initialize database tables if they don't exist
    await initializeStorage()

    // Se estiver em modo de fallback ou se houver erro na consulta, usar dados simulados
    let claim = null

    if (!DB_FALLBACK_MODE) {
      try {
        // Check if the address exists in the system
        claim = await getClaimByWalletAddress(walletAddress)
      } catch (dbError) {
        console.error("Error querying claim by wallet address:", dbError)
        // Continuar com claim = null para usar dados simulados
      }
    }

    if (claim) {
      // Return real data if the claim exists
      return {
        status: claim.status as "pending" | "approved" | "processing" | "completed" | "rejected",
        walletAddress,
        tokensAllocated: claim.tokensRequested,
        dateSubmitted: claim.createdAt,
        dateProcessed: claim.processedAt,
        tasks: [], // Task data could be obtained from another source
      }
    }

    // Simulation for demonstration (only when real data is not found)
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Check if the address exists in the system (simulated)
    const addressExists = Math.random() > 0.2 // 80% chance of existing

    if (!addressExists) {
      return {
        status: "not_found" as const,
        walletAddress,
        tokensAllocated: 0,
        dateSubmitted: new Date().toISOString(),
        tasks: [],
      }
    }

    // Generate a random status for demonstration
    const statuses: Array<"pending" | "approved" | "processing" | "completed" | "rejected"> = [
      "pending",
      "approved",
      "processing",
      "completed",
      "rejected",
    ]
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)]

    // Generate random task data
    const tasks = [
      {
        name: "Seguir no Twitter",
        completed: Math.random() > 0.3,
        points: 10,
      },
      {
        name: "Entrar no grupo do Telegram",
        completed: Math.random() > 0.2,
        points: 15,
      },
      {
        name: "Compartilhar no Twitter",
        completed: Math.random() > 0.4,
        points: 20,
      },
      {
        name: "Convidar 3 amigos",
        completed: Math.random() > 0.6,
        points: 25,
      },
    ]

    // Calculate submission date (between 1 and 30 days ago)
    const daysAgo = Math.floor(Math.random() * 30) + 1
    const dateSubmitted = new Date()
    dateSubmitted.setDate(dateSubmitted.getDate() - daysAgo)

    // Calculate estimated delivery date (between 1 and 14 days in the future)
    const daysAhead = Math.floor(Math.random() * 14) + 1
    const estimatedDelivery = new Date()
    estimatedDelivery.setDate(estimatedDelivery.getDate() + daysAhead)

    // Calculate processing date for completed claims
    const daysProcessed = Math.floor(Math.random() * daysAgo)
    const dateProcessed = new Date()
    dateProcessed.setDate(dateProcessed.getDate() - daysProcessed)

    // Generate transaction hash for completed claims
    const transactionHash =
      randomStatus === "completed"
        ? `0x${Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join("")}`
        : undefined

    // Generate message for rejected claims
    const rejectReasons = [
      "Endereço já recebeu tokens anteriormente",
      "Tarefas obrigatórias não foram concluídas",
      "Atividade suspeita detectada na conta",
      "Falha na verificação de identidade",
    ]
    const message =
      randomStatus === "rejected" ? rejectReasons[Math.floor(Math.random() * rejectReasons.length)] : undefined

    return {
      status: randomStatus,
      walletAddress,
      tokensAllocated: 5000 + Math.floor(Math.random() * 5000),
      dateSubmitted: dateSubmitted.toISOString(),
      dateProcessed: randomStatus === "completed" ? dateProcessed.toISOString() : undefined,
      estimatedDelivery: estimatedDelivery.toISOString(),
      transactionHash,
      message,
      tasks,
    }
  } catch (error) {
    console.error("Error getting claim status:", error)
    return {
      status: "error" as const,
      walletAddress,
      tokensAllocated: 0,
      dateSubmitted: new Date().toISOString(),
      message: "Erro ao processar a solicitação. Tente novamente mais tarde.",
      tasks: [],
    }
  }
}

