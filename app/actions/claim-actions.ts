"use server"

import { sql } from "@/lib/db"

export async function getAllClaims() {
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

    return {
      success: true,
      claims: result.map((claim) => ({
        ...claim,
        createdAt: new Date(claim.createdAt).toISOString(),
        processedAt: claim.processedAt ? new Date(claim.processedAt).toISOString() : undefined,
      })),
    }
  } catch (error) {
    console.error("Error fetching claims:", error)
    return {
      success: false,
      error: "Failed to fetch claims",
    }
  }
}

export async function getClaimStats() {
  try {
    const statsResult = await sql`
      SELECT
        COUNT(*) as "totalClaims",
        COUNT(*) FILTER (WHERE status = 'pending') as "pendingClaims",
        COUNT(*) FILTER (WHERE status = 'processed') as "processedClaims",
        COUNT(*) FILTER (WHERE status = 'rejected') as "rejectedClaims",
        SUM(tokens_requested) as "totalTokensRequested"
      FROM claims
    `

    const stats = statsResult[0]

    return {
      success: true,
      stats: {
        totalClaims: Number(stats.totalClaims),
        pendingClaims: Number(stats.pendingClaims),
        processedClaims: Number(stats.processedClaims),
        rejectedClaims: Number(stats.rejectedClaims),
        totalTokensRequested: Number(stats.totalTokensRequested) || 0,
      },
    }
  } catch (error) {
    console.error("Error fetching claim stats:", error)
    return {
      success: false,
      error: "Failed to fetch claim statistics",
    }
  }
}

