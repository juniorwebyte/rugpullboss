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

    // Get recent activity (last 10 claims)
    const result = await sql`
      SELECT 
        id::text, 
        wallet_address as "walletAddress", 
        status, 
        created_at as "createdAt", 
        processed_at as "processedAt"
      FROM claims
      ORDER BY created_at DESC
      LIMIT 10
    `

    // Format the activity data
    const activity = result.map((item) => ({
      id: item.id,
      walletAddress: item.walletAddress,
      status: item.status,
      timestamp: new Date(item.createdAt).toISOString(),
      type: "claim_created",
      message: `New claim from ${item.walletAddress.substring(0, 6)}...${item.walletAddress.substring(item.walletAddress.length - 4)}`,
    }))

    return NextResponse.json(activity)
  } catch (error) {
    console.error("Error fetching recent activity:", error)
    return NextResponse.json({ error: "Failed to fetch recent activity" }, { status: 500 })
  }
}

