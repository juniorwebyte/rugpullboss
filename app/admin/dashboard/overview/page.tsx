"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Loader2, RefreshCw, Settings, Users, Wallet, Calendar } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import Link from "next/link"

interface AirdropStats {
  totalClaims: number
  pendingClaims: number
  processedClaims: number
  rejectedClaims: number
  totalTokensAllocated: number
  tokensDistributed: number
  tokensRemaining: number
  tokensPerClaim: number
  airdropEnabled: boolean
}

export default function DashboardOverview() {
  const { toast } = useToast()
  const [stats, setStats] = useState<AirdropStats | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [recentActivity, setRecentActivity] = useState([])

  useEffect(() => {
    fetchStats()
    fetchRecentActivity()
  }, [])

  const fetchStats = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/admin/stats")
      if (!response.ok) {
        throw new Error("Failed to fetch stats")
      }

      const data = await response.json()
      setStats(data)
    } catch (error) {
      console.error("Error fetching stats:", error)
      toast({
        title: "Error",
        description: "Failed to load dashboard statistics",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const fetchRecentActivity = async () => {
    try {
      const response = await fetch("/api/admin/recent-activity")
      if (response.ok) {
        const data = await response.json()
        setRecentActivity(data)
      }
    } catch (error) {
      console.error("Error fetching recent activity:", error)
    }
  }

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat().format(num)
  }

  const getProgressColor = (percentage: number) => {
    if (percentage < 30) return "bg-green-500"
    if (percentage < 70) return "bg-yellow-500"
    return "bg-red-500"
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[calc(100vh-200px)]">
        <Loader2 className="h-12 w-12 animate-spin text-purple-400" />
      </div>
    )
  }

  if (!stats) {
    return (
      <div className="flex justify-center items-center h-[calc(100vh-200px)]">
        <div className="text-center">
          <p className="text-xl text-red-400 mb-4">Failed to load dashboard data</p>
          <Button onClick={fetchStats}>Try Again</Button>
        </div>
      </div>
    )
  }

  const tokensDistributedPercentage = (stats.tokensDistributed / stats.totalTokensAllocated) * 100
  const progressColor = getProgressColor(tokensDistributedPercentage)

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-fuchsia-400">Admin Dashboard</h1>
        <Button
          variant="outline"
          size="sm"
          className="border-purple-800/30 hover:bg-purple-900/20"
          onClick={fetchStats}
        >
          <RefreshCw className="h-4 w-4 mr-2" />
          Refresh
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card className="bg-black/30 border-purple-800/30">
          <CardContent className="p-4 flex items-center">
            <div className="bg-purple-900/30 p-3 rounded-full mr-4">
              <Users className="h-6 w-6 text-purple-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Total Claims</p>
              <p className="text-2xl font-bold text-purple-300">{formatNumber(stats.totalClaims)}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-black/30 border-yellow-800/30">
          <CardContent className="p-4 flex items-center">
            <div className="bg-yellow-900/30 p-3 rounded-full mr-4">
              <Calendar className="h-6 w-6 text-yellow-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Pending</p>
              <p className="text-2xl font-bold text-yellow-300">{formatNumber(stats.pendingClaims)}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-black/30 border-green-800/30">
          <CardContent className="p-4 flex items-center">
            <div className="bg-green-900/30 p-3 rounded-full mr-4">
              <Wallet className="h-6 w-6 text-green-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Processed</p>
              <p className="text-2xl font-bold text-green-300">{formatNumber(stats.processedClaims)}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-black/30 border-red-800/30">
          <CardContent className="p-4 flex items-center">
            <div className="bg-red-900/30 p-3 rounded-full mr-4">
              <Settings className="h-6 w-6 text-red-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Rejected</p>
              <p className="text-2xl font-bold text-red-300">{formatNumber(stats.rejectedClaims)}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <Card className="col-span-2 border-purple-800/30 bg-black/30 backdrop-blur-sm shadow-xl">
          <CardHeader>
            <CardTitle className="text-xl text-purple-400">Token Distribution</CardTitle>
            <CardDescription className="text-gray-400">Overview of token allocation and distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-400">Tokens Distributed</span>
                  <span className="text-sm font-medium text-purple-300">
                    {formatNumber(stats.tokensDistributed)} / {formatNumber(stats.totalTokensAllocated)}
                  </span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${progressColor} transition-all duration-500 ease-in-out`}
                    style={{ width: `${tokensDistributedPercentage}%` }}
                  ></div>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-gray-500">{tokensDistributedPercentage.toFixed(1)}% Used</span>
                  <span className="text-xs text-gray-500">
                    {(100 - tokensDistributedPercentage).toFixed(1)}% Remaining
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/20 p-4 rounded-lg border border-purple-900/20">
                  <p className="text-sm text-gray-400 mb-1">Tokens Per Claim</p>
                  <p className="text-xl font-bold text-purple-300">{formatNumber(stats.tokensPerClaim)}</p>
                </div>
                <div className="bg-black/20 p-4 rounded-lg border border-purple-900/20">
                  <p className="text-sm text-gray-400 mb-1">Tokens Remaining</p>
                  <p className="text-xl font-bold text-purple-300">{formatNumber(stats.tokensRemaining)}</p>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-400">Airdrop Status</p>
                  <p className={`text-lg font-medium ${stats.airdropEnabled ? "text-green-400" : "text-red-400"}`}>
                    {stats.airdropEnabled ? "Active" : "Paused"}
                  </p>
                </div>
                <Link href="/admin/settings">
                  <Button variant="outline" className="border-purple-800/30 hover:bg-purple-900/20">
                    <Settings className="h-4 w-4 mr-2" />
                    Configure
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-purple-800/30 bg-black/30 backdrop-blur-sm shadow-xl">
          <CardHeader>
            <CardTitle className="text-xl text-purple-400">Quick Actions</CardTitle>
            <CardDescription className="text-gray-400">Common administrative tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Link href="/admin/claims" className="w-full">
                <Button className="w-full bg-purple-900/50 hover:bg-purple-800/70 text-white border border-purple-700/30">
                  Manage Claims
                </Button>
              </Link>
              <Link href="/admin/notifications" className="w-full">
                <Button className="w-full bg-blue-900/50 hover:bg-blue-800/70 text-white border border-blue-700/30">
                  Send Notifications
                </Button>
              </Link>
              <Link href="/admin/settings" className="w-full">
                <Button className="w-full bg-green-900/50 hover:bg-green-800/70 text-white border border-green-700/30">
                  Airdrop Settings
                </Button>
              </Link>
              <Link href="/admin/export" className="w-full">
                <Button className="w-full bg-yellow-900/50 hover:bg-yellow-800/70 text-white border border-yellow-700/30">
                  Export Data
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-purple-800/30 bg-black/30 backdrop-blur-sm shadow-xl">
        <CardHeader>
          <CardTitle className="text-xl text-purple-400">Claims Processing</CardTitle>
          <CardDescription className="text-gray-400">Manage and process user claims</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="pending">
            <TabsList className="bg-black/50 border border-purple-900/20">
              <TabsTrigger value="pending" className="data-[state=active]:bg-purple-900/30">
                Pending ({stats.pendingClaims})
              </TabsTrigger>
              <TabsTrigger value="processed" className="data-[state=active]:bg-green-900/30">
                Processed ({stats.processedClaims})
              </TabsTrigger>
              <TabsTrigger value="rejected" className="data-[state=active]:bg-red-900/30">
                Rejected ({stats.rejectedClaims})
              </TabsTrigger>
            </TabsList>
            <TabsContent value="pending" className="mt-4">
              <div className="text-center py-8">
                <p className="text-gray-400 mb-4">You have {stats.pendingClaims} pending claims to review</p>
                <Link href="/admin/claims?status=pending">
                  <Button className="bg-purple-900/50 hover:bg-purple-800/70 text-white border border-purple-700/30">
                    Review Pending Claims
                  </Button>
                </Link>
              </div>
            </TabsContent>
            <TabsContent value="processed" className="mt-4">
              <div className="text-center py-8">
                <p className="text-gray-400 mb-4">You have processed {stats.processedClaims} claims</p>
                <Link href="/admin/claims?status=processed">
                  <Button className="bg-green-900/50 hover:bg-green-800/70 text-white border border-green-700/30">
                    View Processed Claims
                  </Button>
                </Link>
              </div>
            </TabsContent>
            <TabsContent value="rejected" className="mt-4">
              <div className="text-center py-8">
                <p className="text-gray-400 mb-4">You have rejected {stats.rejectedClaims} claims</p>
                <Link href="/admin/claims?status=rejected">
                  <Button className="bg-red-900/50 hover:bg-red-800/70 text-white border border-red-700/30">
                    View Rejected Claims
                  </Button>
                </Link>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

