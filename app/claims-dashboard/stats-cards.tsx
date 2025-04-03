"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Clock, Coins } from "lucide-react"

interface StatsProps {
  stats: {
    totalClaims: number
    pendingClaims: number
    processedClaims: number
    rejectedClaims: number
    totalTokensRequested: number
  }
}

export function StatsCards({ stats }: StatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <Card className="border-purple-800/30 bg-black/30 backdrop-blur-sm shadow-xl overflow-hidden">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-blue-900/20 flex items-center justify-center mb-3">
              <Coins className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-lg font-medium text-blue-400">Total Claims</h3>
            <p className="text-2xl font-bold text-white mt-2">{stats.totalClaims}</p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-purple-800/30 bg-black/30 backdrop-blur-sm shadow-xl overflow-hidden">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-yellow-900/20 flex items-center justify-center mb-3">
              <Clock className="h-6 w-6 text-yellow-400" />
            </div>
            <h3 className="text-lg font-medium text-yellow-400">Pending Claims</h3>
            <p className="text-2xl font-bold text-white mt-2">{stats.pendingClaims}</p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-purple-800/30 bg-black/30 backdrop-blur-sm shadow-xl overflow-hidden">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-green-900/20 flex items-center justify-center mb-3">
              <CheckCircle2 className="h-6 w-6 text-green-400" />
            </div>
            <h3 className="text-lg font-medium text-green-400">Processed Claims</h3>
            <p className="text-2xl font-bold text-white mt-2">{stats.processedClaims}</p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-purple-800/30 bg-black/30 backdrop-blur-sm shadow-xl overflow-hidden">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-purple-900/20 flex items-center justify-center mb-3">
              <Coins className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-lg font-medium text-purple-400">Tokens Requested</h3>
            <p className="text-2xl font-bold text-white mt-2">{stats.totalTokensRequested.toLocaleString()}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

