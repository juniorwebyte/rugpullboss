import { type NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/db"
import { checkAdminSession } from "@/app/actions/token-actions"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    // Check if the user is authenticated as admin
    const sessionCheck = await checkAdminSession()
    if (!sessionCheck.authenticated) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const id = params.id

    // Fetch claim from the database
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
      return NextResponse.json({ error: "Claim not found" }, { status: 404 })
    }

    // Format the dates
    const claim = result[0]
    return NextResponse.json({
      ...claim,
      createdAt: new Date(claim.createdAt).toISOString(),
      processedAt: claim.processedAt ? new Date(claim.processedAt).toISOString() : undefined,
    })
  } catch (error) {
    console.error("Error fetching claim:", error)
    return NextResponse.json({ error: "Failed to fetch claim" }, { status: 500 })
  }
}

