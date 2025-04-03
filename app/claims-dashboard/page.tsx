"use client"

import { useEffect, useState } from "react"
import { getAllClaims, getClaimStats } from "../actions/claim-actions"
import { ClaimsList } from "./claims-list"
import { StatsCards } from "./stats-cards"
import { useToast } from "@/components/ui/use-toast"

export default function ClaimsDashboard() {
  const { toast } = useToast()
  const [claims, setClaims] = useState([])
  const [stats, setStats] = useState({
    totalClaims: 0,
    pendingClaims: 0,
    processedClaims: 0,
    rejectedClaims: 0,
    totalTokensRequested: 0,
  })
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const [claimsResult, statsResult] = await Promise.all([getAllClaims(), getClaimStats()])

      if (claimsResult.success) {
        setClaims(claimsResult.claims)
      } else {
        toast({
          title: "Error",
          description: claimsResult.error || "Failed to fetch claims",
          variant: "destructive",
        })
      }

      if (statsResult.success) {
        setStats(statsResult.stats)
      } else {
        toast({
          title: "Error",
          description: statsResult.error || "Failed to fetch statistics",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error fetching data:", error)
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <main className="flex min-h-screen flex-col bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 to-black"></div>
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-radial from-fuchsia-500/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-radial from-violet-500/20 to-transparent"></div>

        {/* Ethereal cosmic background elements */}
        <div className="stars-container">
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                opacity: Math.random() * 0.7 + 0.3,
                animation: `pulse ${Math.random() * 3 + 2}s infinite ease-in-out`,
              }}
            />
          ))}
        </div>

        {/* Cosmic energy areas */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto p-6 z-10 mt-16">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-fuchsia-400">Claims Dashboard</h1>
            <p className="text-gray-400">View and manage all airdrop claims</p>
          </div>
        </div>

        <StatsCards stats={stats} />
        <ClaimsList initialClaims={claims} onRefresh={fetchData} isLoading={isLoading} />
      </div>
    </main>
  )
}

