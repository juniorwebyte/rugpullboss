"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Loader2, RefreshCw, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

interface Claim {
  id: string
  name: string
  walletAddress: string
  walletType: string
  twitterUsername: string
  telegramId: string
  tokensRequested: number
  status: string
  createdAt: string
  processedAt?: string
}

interface ClaimsListProps {
  initialClaims: Claim[]
  onRefresh: () => Promise<void>
  isLoading: boolean
}

export function ClaimsList({ initialClaims, onRefresh, isLoading }: ClaimsListProps) {
  const [claims, setClaims] = useState<Claim[]>(initialClaims)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredClaims = claims.filter(
    (claim) =>
      claim.walletAddress.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (claim.name && claim.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (claim.twitterUsername && claim.twitterUsername.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (claim.telegramId && claim.telegramId.toLowerCase().includes(searchTerm.toLowerCase())),
  )

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
            {status}
          </Badge>
        )
    }
  }

  return (
    <Card className="border-purple-800/30 bg-black/30 backdrop-blur-sm shadow-xl overflow-hidden">
      <CardHeader className="border-b border-purple-900/20 bg-black/50">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-xl text-purple-400">Airdrop Claims</CardTitle>
            <CardDescription className="text-gray-400">View and manage all airdrop claims</CardDescription>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="border-purple-800/30 hover:bg-purple-900/20"
            onClick={onRefresh}
            disabled={isLoading}
          >
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <RefreshCw className="h-4 w-4" />}
            <span className="ml-2">Refresh</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="mb-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search by wallet, name, or social media..."
              className="pl-8 bg-black/50 border-purple-800/30"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-purple-400" />
          </div>
        ) : filteredClaims.length > 0 ? (
          <div className="overflow-x-auto rounded-lg border border-purple-900/30">
            <Table>
              <TableCaption>List of all airdrop claims</TableCaption>
              <TableHeader className="bg-purple-900/10">
                <TableRow className="border-b border-purple-900/30 hover:bg-purple-900/20">
                  <TableHead className="text-purple-300">Wallet Address</TableHead>
                  <TableHead className="text-purple-300">Name</TableHead>
                  <TableHead className="text-purple-300">Social Media</TableHead>
                  <TableHead className="text-purple-300">Tokens</TableHead>
                  <TableHead className="text-purple-300">Status</TableHead>
                  <TableHead className="text-purple-300">Created At</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredClaims.map((claim) => (
                  <TableRow key={claim.id} className="border-b border-purple-900/20 hover:bg-purple-900/10">
                    <TableCell className="font-mono text-xs text-gray-300">
                      {claim.walletAddress.substring(0, 6)}...
                      {claim.walletAddress.substring(claim.walletAddress.length - 4)}
                    </TableCell>
                    <TableCell className="text-gray-300">{claim.name || "N/A"}</TableCell>
                    <TableCell className="text-gray-300">
                      {claim.twitterUsername ? (
                        <div className="flex items-center gap-1">
                          <span className="text-blue-400">Twitter:</span> {claim.twitterUsername}
                        </div>
                      ) : null}
                      {claim.telegramId ? (
                        <div className="flex items-center gap-1">
                          <span className="text-blue-400">Telegram:</span> {claim.telegramId}
                        </div>
                      ) : null}
                      {!claim.twitterUsername && !claim.telegramId && "N/A"}
                    </TableCell>
                    <TableCell className="text-gray-300">{claim.tokensRequested.toLocaleString()}</TableCell>
                    <TableCell>{getStatusBadge(claim.status)}</TableCell>
                    <TableCell className="text-gray-300 text-xs">
                      {new Date(claim.createdAt).toLocaleString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ) : (
          <div className="text-center py-12 text-gray-400">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-900/20 flex items-center justify-center">
              <Search className="h-8 w-8 text-purple-400" />
            </div>
            <p className="text-lg font-medium text-purple-300">No claims found</p>
            <p className="mt-2 text-sm">
              {searchTerm ? "Try a different search term" : "No claims have been submitted yet"}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

