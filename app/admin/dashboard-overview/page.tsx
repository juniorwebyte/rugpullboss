"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Loader2, RefreshCw, Users, Clock, CheckCircle, XCircle } from "lucide-react"
import { getClaimStats, getRecentClaims, getSystemConfig } from "@/lib/db-utils"

export default function DashboardOverview() {
  const [stats, setStats] = useState<any>(null)
  const [recentClaims, setRecentClaims] = useState<any[]>([])
  const [config, setConfig] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    setIsLoading(true)
    try {
      const [statsData, claimsData, configData] = await Promise.all([
        getClaimStats(),
        getRecentClaims(),
        getSystemConfig(),
      ])

      setStats(statsData)
      setRecentClaims(claimsData)
      setConfig(configData)
    } catch (error) {
      console.error("Error loading dashboard data:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge variant="outline" className="bg-yellow-900/20 text-yellow-300 border-yellow-500/30">
            Pending
          </Badge>
        )
      case "processed":
        return (
          <Badge variant="outline" className="bg-green-900/20 text-green-300 border-green-500/30">
            Processed
          </Badge>
        )
      case "rejected":
        return (
          <Badge variant="outline" className="bg-red-900/20 text-red-300 border-red-500/30">
            Rejected
          </Badge>
        )
      default:
        return (
          <Badge variant="outline" className="bg-gray-900/20 text-gray-300 border-gray-500/30">
            Unknown
          </Badge>
        )
    }
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[calc(100vh-200px)]">
        <Loader2 className="h-12 w-12 animate-spin text-purple-400" />
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-fuchsia-400">Admin Dashboard</h1>
        <Button variant="outline" size="sm" className="border-purple-800/30 hover:bg-purple-900/20" onClick={loadData}>
          <RefreshCw className="h-4 w-4 mr-2" />
          Refresh
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card className="bg-black/30 border-purple-800/30">
          <CardContent className="p-4 flex items-center">
            <div className="bg-purple-900/30 p-3 rounded-full mr-4">
              <Users className="h-6 w-6 text-purple-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Total Claims</p>
              <p className="text-2xl font-bold text-purple-300">{stats?.totalClaims || 0}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/30 border-yellow-800/30">
          <CardContent className="p-4 flex items-center">
            <div className="bg-yellow-900/30 p-3 rounded-full mr-4">
              <Clock className="h-6 w-6 text-yellow-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Pending</p>
              <p className="text-2xl font-bold text-yellow-300">{stats?.pendingClaims || 0}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/30 border-green-800/30">
          <CardContent className="p-4 flex items-center">
            <div className="bg-green-900/30 p-3 rounded-full mr-4">
              <CheckCircle className="h-6 w-6 text-green-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Processed</p>
              <p className="text-2xl font-bold text-green-300">{stats?.processedClaims || 0}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/30 border-red-800/30">
          <CardContent className="p-4 flex items-center">
            <div className="bg-red-900/30 p-3 rounded-full mr-4">
              <XCircle className="h-6 w-6 text-red-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Rejected</p>
              <p className="text-2xl font-bold text-red-300">{stats?.rejectedClaims || 0}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Claims */}
      <Card className="border-purple-800/30 bg-black/30 backdrop-blur-sm shadow-xl mb-6">
        <CardHeader>
          <CardTitle className="text-xl text-purple-400">Recent Claims</CardTitle>
          <CardDescription className="text-gray-400">The latest airdrop claims from users</CardDescription>
        </CardHeader>
        <CardContent>
          {recentClaims.length > 0 ? (
            <div className="space-y-4">
              {recentClaims.map((claim) => (
                <div
                  key={claim.id}
                  className="flex items-center justify-between p-3 bg-black/20 rounded-lg border border-purple-900/20"
                >
                  <div>
                    <p className="font-mono text-sm text-gray-300">
                      {claim.walletAddress.substring(0, 6)}...
                      {claim.walletAddress.substring(claim.walletAddress.length - 4)}
                    </p>
                    <div className="flex gap-4 mt-1">
                      <p className="text-xs text-gray-400">Twitter: @{claim.twitterUsername}</p>
                      <p className="text-xs text-gray-400">Telegram: {claim.telegramId}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <p className="text-sm text-purple-300">{claim.tokensRequested} tokens</p>
                    {getStatusBadge(claim.status)}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-400">
              <p>No claims found</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* System Configuration */}
      <Card className="border-purple-800/30 bg-black/30 backdrop-blur-sm shadow-xl">
        <CardHeader>
          <CardTitle className="text-xl text-purple-400">System Configuration</CardTitle>
          <CardDescription className="text-gray-400">Current airdrop settings</CardDescription>
        </CardHeader>
        <CardContent>
          {config ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-black/20 p-4 rounded-lg border border-purple-900/20">
                <p className="text-sm text-gray-400">Airdrop Status</p>
                <p className="text-xl font-bold text-purple-300">{config.airdropEnabled ? "Enabled" : "Disabled"}</p>
              </div>

              <div className="bg-black/20 p-4 rounded-lg border border-purple-900/20">
                <p className="text-sm text-gray-400">Tokens Per Claim</p>
                <p className="text-xl font-bold text-purple-300">{config.tokensPerClaim}</p>
              </div>

              <div className="bg-black/20 p-4 rounded-lg border border-purple-900/20">
                <p className="text-sm text-gray-400">Total Tokens Allocated</p>
                <p className="text-xl font-bold text-purple-300">{config.totalTokensAllocated.toLocaleString()}</p>
              </div>

              <div className="bg-black/20 p-4 rounded-lg border border-purple-900/20">
                <p className="text-sm text-gray-400">Launch Date</p>
                <p className="text-xl font-bold text-purple-300">{new Date(config.launchDate).toLocaleDateString()}</p>
              </div>
            </div>
          ) : (
            <div className="text-center py-8 text-gray-400">
              <p>No configuration found</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

