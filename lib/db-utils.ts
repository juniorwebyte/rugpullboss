import { sql } from "@/lib/db"

export async function getClaimStats() {
  try {
    const result = await sql`
      SELECT
        COUNT(*) as total_claims,
        COUNT(*) FILTER (WHERE status = 'pending') as pending_claims,
        COUNT(*) FILTER (WHERE status = 'processed') as processed_claims,
        COUNT(*) FILTER (WHERE status = 'rejected') as rejected_claims
      FROM claims
    `

    return {
      totalClaims: Number(result[0].total_claims),
      pendingClaims: Number(result[0].pending_claims),
      processedClaims: Number(result[0].processed_claims),
      rejectedClaims: Number(result[0].rejected_claims),
    }
  } catch (error) {
    console.error("Error fetching claim stats:", error)
    return {
      totalClaims: 0,
      pendingClaims: 0,
      processedClaims: 0,
      rejectedClaims: 0,
    }
  }
}

export async function getRecentClaims(limit = 5) {
  try {
    const claims = await sql`
      SELECT 
        id::text, 
        wallet_address, 
        twitter_username, 
        telegram_id, 
        tokens_requested, 
        status, 
        created_at
      FROM claims
      ORDER BY created_at DESC
      LIMIT ${limit}
    `

    return claims.map((claim) => ({
      id: claim.id,
      walletAddress: claim.wallet_address,
      twitterUsername: claim.twitter_username || "N/A",
      telegramId: claim.telegram_id || "N/A",
      tokensRequested: claim.tokens_requested,
      status: claim.status,
      createdAt: new Date(claim.created_at).toISOString(),
    }))
  } catch (error) {
    console.error("Error fetching recent claims:", error)
    return []
  }
}

export async function getSystemConfig() {
  try {
    const result = await sql`
      SELECT 
        airdrop_enabled, 
        total_tokens_allocated, 
        tokens_per_claim, 
        claim_deadline, 
        require_twitter, 
        require_telegram, 
        launch_date
      FROM system_config
      WHERE id = 1
    `

    if (result.length === 0) {
      return null
    }

    return {
      airdropEnabled: result[0].airdrop_enabled,
      totalTokensAllocated: result[0].total_tokens_allocated,
      tokensPerClaim: result[0].tokens_per_claim,
      claimDeadline: new Date(result[0].claim_deadline).toISOString(),
      requireTwitter: result[0].require_twitter,
      requireTelegram: result[0].require_telegram,
      launchDate: new Date(result[0].launch_date).toISOString(),
    }
  } catch (error) {
    console.error("Error fetching system config:", error)
    return null
  }
}

