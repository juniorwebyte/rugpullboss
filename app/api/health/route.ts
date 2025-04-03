import { NextResponse } from "next/server"
import { checkDatabaseHealth, DB_FALLBACK_MODE } from "@/lib/db"

export async function GET() {
  try {
    const dbHealth = await checkDatabaseHealth()

    return NextResponse.json({
      status: "ok",
      timestamp: new Date().toISOString(),
      services: {
        database: {
          status: dbHealth.healthy ? "healthy" : "unhealthy",
          fallbackMode: DB_FALLBACK_MODE,
          message: dbHealth.message,
        },
        api: {
          status: "healthy",
        },
      },
    })
  } catch (error) {
    console.error("Health check error:", error)

    return NextResponse.json(
      {
        status: "error",
        timestamp: new Date().toISOString(),
        message: error.message || "Unknown error",
        services: {
          database: {
            status: "unhealthy",
            fallbackMode: DB_FALLBACK_MODE,
            message: "Failed to check database health",
          },
          api: {
            status: "healthy",
          },
        },
      },
      { status: 500 },
    )
  }
}

