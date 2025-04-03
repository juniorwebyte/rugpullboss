import { NextResponse } from "next/server"
import { sql } from "@/lib/db"

export async function POST(request: Request) {
  try {
    const { walletAddress, walletType, twitterUsername, telegramId } = await request.json()

    // Validate the wallet address
    if (!walletAddress || !/^0x[a-fA-F0-9]{40}$/.test(walletAddress)) {
      return NextResponse.json({ success: false, message: "Invalid wallet address" }, { status: 400 })
    }

    // Check if the wallet address already exists
    const existingClaim = await sql`
      SELECT id FROM claims WHERE LOWER(wallet_address) = LOWER(${walletAddress})
    `

    if (existingClaim.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "This wallet address has already submitted a claim",
        },
        { status: 400 },
      )
    }

    // Get tokens per claim from system config
    const configResult = await sql`
      SELECT tokens_per_claim FROM system_config WHERE id = 1
    `

    const tokensPerClaim = configResult.length > 0 ? configResult[0].tokens_per_claim : 1000

    // Insert the claim
    await sql`
      INSERT INTO claims (
        wallet_address,
        wallet_type,
        twitter_username,
        telegram_id,
        tokens_requested,
        status
      ) VALUES (
        ${walletAddress},
        ${walletType || "unknown"},
        ${twitterUsername || null},
        ${telegramId || null},
        ${tokensPerClaim},
        'pending'
      )
    `

    // Insert user tasks
    await sql`
      INSERT INTO user_tasks (
        wallet_address,
        wallet_type,
        twitter_username,
        telegram_id
      ) VALUES (
        ${walletAddress},
        ${walletType || "unknown"},
        ${twitterUsername || null},
        ${telegramId || null}
      )
    `

    return NextResponse.json({
      success: true,
      message: "Claim submitted successfully",
      tokensRequested: tokensPerClaim,
    })
  } catch (error) {
    console.error("Error submitting claim:", error)
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while processing your claim",
      },
      { status: 500 },
    )
  }
}

