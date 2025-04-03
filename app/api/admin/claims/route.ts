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

    // Fetch claims from the database
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

    // Format the dates
    const claims = result.map((claim) => ({
      ...claim,
      createdAt: new Date(claim.createdAt).toISOString(),
      processedAt: claim.processedAt ? new Date(claim.processedAt).toISOString() : undefined,
    }))

    return NextResponse.json(claims)
  } catch (error) {
    console.error("Error fetching claims:", error)
    return NextResponse.json({ error: "Failed to fetch claims" }, { status: 500 })
  }
}

