import { NextResponse } from "next/server"
import { sql } from "@/lib/db"
import { checkAdminSession } from "@/app/actions/token-actions"

export async function GET() {
  try {
    // Check if the user is authenticated as admin
    const sessionCheck = await checkAdminSession()
    if (!sessionCheck.authenticated) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Get system config
    const configResult = await sql`
      SELECT 
        airdrop_enabled as "airdropEnabled", 
        total_tokens_allocated as "totalTokensAllocated", 
        tokens_per_claim as "tokensPerClaim"
      FROM system_config
      WHERE id = 1
    `

    const config =
      configResult.length > 0
        ? configResult[0]
        : {
            airdropEnabled: true,
            totalTokensAllocated: 1000000,
            tokensPerClaim: 1000,
          }

    // Get claim statistics
    const statsResult = await sql`
      SELECT
        COUNT(*) as "totalClaims",
        COUNT(*) FILTER (WHERE status = 'pending') as "pendingClaims",
        COUNT(*) FILTER (WHERE status = 'processed') as "processedClaims",
        COUNT(*) FILTER (WHERE status = 'rejected') as "rejectedClaims",
        COALESCE(SUM(tokens_requested) FILTER (WHERE status = 'processed'), 0) as "tokensDistributed"
      FROM claims
    `

    const stats = statsResult[0]

    return NextResponse.json({
      totalClaims: Number(stats.totalClaims),
      pendingClaims: Number(stats.pendingClaims),
      processedClaims: Number(stats.processedClaims),
      rejectedClaims: Number(stats.rejectedClaims),
      totalTokensAllocated: config.totalTokensAllocated,
      tokensDistributed: Number(stats.tokensDistributed),
      tokensRemaining: config.totalTokensAllocated - Number(stats.tokensDistributed),
      tokensPerClaim: config.tokensPerClaim,
      airdropEnabled: config.airdropEnabled,
    })
  } catch (error) {
    console.error("Error getting airdrop stats:", error)
    return NextResponse.json({ error: "Failed to fetch airdrop statistics" }, { status: 500 })
  }
}

