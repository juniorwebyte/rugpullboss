import { type NextRequest, NextResponse } from "next/server"
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
      // Return default config if none exists
      return NextResponse.json({
        airdropEnabled: true,
        totalTokensAllocated: 1000000,
        tokensPerClaim: 1000,
        claimDeadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
        requireTwitter: true,
        requireTelegram: true,
        launchDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toISOString(),
      })
    }

    const config = result[0]
    return NextResponse.json({
      ...config,
      claimDeadline: new Date(config.claimDeadline).toISOString(),
      launchDate: new Date(config.launchDate).toISOString(),
    })
  } catch (error) {
    console.error("Error getting system config:", error)
    return NextResponse.json({ error: "Failed to fetch system configuration" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    // Check if the user is authenticated as admin
    const sessionCheck = await checkAdminSession()
    if (!sessionCheck.authenticated) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()

    // Validate the request body
    if (!body) {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
    }

    // Update the system config
    const result = await sql`
      UPDATE system_config
      SET 
        airdrop_enabled = ${body.airdropEnabled !== undefined ? body.airdropEnabled : true},
        total_tokens_allocated = ${body.totalTokensAllocated || 1000000},
        tokens_per_claim = ${body.tokensPerClaim || 1000},
        claim_deadline = ${body.claimDeadline ? new Date(body.claimDeadline) : new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)},
        require_twitter = ${body.requireTwitter !== undefined ? body.requireTwitter : true},
        require_telegram = ${body.requireTelegram !== undefined ? body.requireTelegram : true},
        launch_date = ${body.launchDate ? new Date(body.launchDate) : new Date(Date.now() + 15 * 24 * 60 * 60 * 1000)}
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

    let insertResult

    if (result.length === 0) {
      // If no config exists, create it
      insertResult = await sql`
        INSERT INTO system_config (
          airdrop_enabled, 
          total_tokens_allocated, 
          tokens_per_claim, 
          claim_deadline, 
          require_twitter, 
          require_telegram, 
          launch_date
        ) VALUES (
          ${body.airdropEnabled !== undefined ? body.airdropEnabled : true},
          ${body.totalTokensAllocated || 1000000},
          ${body.tokensPerClaim || 1000},
          ${body.claimDeadline ? new Date(body.claimDeadline) : new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)},
          ${body.requireTwitter !== undefined ? body.requireTwitter : true},
          ${body.requireTelegram !== undefined ? body.requireTelegram : true},
          ${body.launchDate ? new Date(body.launchDate) : new Date(Date.now() + 15 * 24 * 60 * 60 * 1000)}
        )
        RETURNING 
          airdrop_enabled as "airdropEnabled", 
          total_tokens_allocated as "totalTokensAllocated", 
          tokens_per_claim as "tokensPerClaim", 
          claim_deadline as "claimDeadline", 
          require_twitter as "requireTwitter", 
          require_telegram as "requireTelegram", 
          launch_date as "launchDate"
      `
    }

    const config = result.length > 0 ? result[0] : insertResult[0]
    return NextResponse.json({
      ...config,
      claimDeadline: new Date(config.claimDeadline).toISOString(),
      launchDate: new Date(config.launchDate).toISOString(),
      message: "Configuration updated successfully",
    })
  } catch (error) {
    console.error("Error updating system config:", error)
    return NextResponse.json({ error: "Failed to update system configuration" }, { status: 500 })
  }
}

