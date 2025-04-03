import { neon } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-http"

// Flag para controlar o modo de fallback
export let DB_FALLBACK_MODE = false

// Função para tentar conectar ao banco de dados com retry
let db
let sql

try {
  if (!process.env.DATABASE_URL) {
    console.warn("DATABASE_URL environment variable not set, using fallback mode")
    DB_FALLBACK_MODE = true
  } else {
    // Tenta conectar ao banco de dados
    sql = neon(process.env.DATABASE_URL)
    db = drizzle(sql)
    console.log("Database connection established")
  }
} catch (error) {
  console.error("Error connecting to the database, using fallback mode:", error)
  DB_FALLBACK_MODE = true

  // Cria uma implementação de fallback para sql
  sql = {
    async unsafe() {
      return []
    },
    async query() {
      return []
    },
    async execute() {
      return { rowCount: 0 }
    },
  }
}

export { db, sql }

// Function to initialize database tables
export async function initializeDatabase() {
  if (DB_FALLBACK_MODE) {
    console.log("Running in fallback mode, skipping database initialization")
    return true
  }

  try {
    console.log("Initializing database tables...")

    // Create claims table
    await sql`
      CREATE TABLE IF NOT EXISTS claims (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name VARCHAR(255),
        wallet_address VARCHAR(255) NOT NULL,
        wallet_type VARCHAR(50) DEFAULT 'unknown',
        twitter_username VARCHAR(255),
        telegram_id VARCHAR(255),
        tokens_requested INTEGER NOT NULL DEFAULT 1000,
        status VARCHAR(20) NOT NULL DEFAULT 'pending',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        processed_at TIMESTAMP WITH TIME ZONE,
        notes TEXT
      )
    `

    // Create system_config table
    await sql`
      CREATE TABLE IF NOT EXISTS system_config (
        id INTEGER PRIMARY KEY DEFAULT 1,
        airdrop_enabled BOOLEAN DEFAULT TRUE,
        total_tokens_allocated INTEGER DEFAULT 1000000,
        tokens_per_claim INTEGER DEFAULT 100,
        claim_deadline TIMESTAMP WITH TIME ZONE DEFAULT (CURRENT_TIMESTAMP + INTERVAL '30 days'),
        require_twitter BOOLEAN DEFAULT TRUE,
        require_telegram BOOLEAN DEFAULT TRUE,
        launch_date TIMESTAMP WITH TIME ZONE DEFAULT (CURRENT_TIMESTAMP + INTERVAL '15 days')
      )
    `

    // Insert default system configuration
    await sql`
      INSERT INTO system_config (id, airdrop_enabled, total_tokens_allocated, tokens_per_claim, claim_deadline, require_twitter, require_telegram, launch_date)
      VALUES (1, TRUE, 1000000, 100, CURRENT_TIMESTAMP + INTERVAL '30 days', TRUE, TRUE, CURRENT_TIMESTAMP + INTERVAL '15 days')
      ON CONFLICT (id) DO NOTHING
    `

    // Create user_tasks table
    await sql`
      CREATE TABLE IF NOT EXISTS user_tasks (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        wallet_address VARCHAR(255) NOT NULL,
        task_name VARCHAR(100) NOT NULL,
        completed BOOLEAN DEFAULT TRUE,
        completed_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `

    // Create admin_sessions table
    await sql`
      CREATE TABLE IF NOT EXISTS admin_sessions (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        username VARCHAR(255) NOT NULL,
        token VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        expires_at TIMESTAMP WITH TIME ZONE NOT NULL
      )
    `

    // Create indexes for better performance
    await sql`CREATE INDEX IF NOT EXISTS idx_claims_wallet_address ON claims(wallet_address)`
    await sql`CREATE INDEX IF NOT EXISTS idx_user_tasks_wallet_address ON user_tasks(wallet_address)`
    await sql`CREATE INDEX IF NOT EXISTS idx_admin_sessions_token ON admin_sessions(token)`

    console.log("Database tables initialized successfully")
    return true
  } catch (error) {
    console.error("Error initializing database tables, using fallback mode:", error)
    DB_FALLBACK_MODE = true
    return false
  }
}

// Função para verificar a saúde da conexão com o banco de dados
export async function checkDatabaseHealth() {
  if (DB_FALLBACK_MODE) {
    return {
      healthy: false,
      message: "Running in fallback mode",
    }
  }

  try {
    // Tenta executar uma consulta simples
    const result = await sql`SELECT 1 as health_check`
    return {
      healthy: result.length > 0 && result[0].health_check === 1,
      message: "Database connection is healthy",
    }
  } catch (error) {
    console.error("Database health check failed:", error)
    DB_FALLBACK_MODE = true
    return {
      healthy: false,
      message: `Database connection failed: ${error.message}`,
    }
  }
}

