"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, RefreshCw, Search, Download } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

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

export default function ClaimsPage() {
  const { toast } = useToast()
  const [claims, setClaims] = useState<Claim[]>([])
  const [filteredClaims, setFilteredClaims] = useState<Claim[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    processed: 0,
    rejected: 0,
  })

  useEffect(() => {
    fetchClaims()
  }, [])

  const fetchClaims = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/admin/claims")
      if (!response.ok) {
        throw new Error("Failed to fetch claims")
      }

      const data = await response.json()
      setClaims(data)
      setFilteredClaims(data)

      // Calculate stats
      const statsData = {
        total: data.length,
        pending: data.filter((claim: Claim) => claim.status === "pending").length,
        processed: data.filter((claim: Claim) => claim.status === "processed").length,
        rejected: data.filter((claim: Claim) => claim.status === "rejected").length,
      }
      setStats(statsData)
    } catch (error) {
      console.error("Error fetching claims:", error)
      toast({
        title: "Error",
        description: "Failed to load claims data",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleSearch = (term: string) => {
    setSearchTerm(term)
    filterClaims(term, statusFilter)
  }

  const handleStatusFilter = (status: string) => {
    setStatusFilter(status)
    filterClaims(searchTerm, status)
  }

  const filterClaims = (term: string, status: string) => {
    let filtered = claims

    // Filter by search term
    if (term) {
      const lowerTerm = term.toLowerCase()
      filtered = filtered.filter(
        (claim) =>
          (claim.name?.toLowerCase() || "").includes(lowerTerm) ||
          claim.walletAddress.toLowerCase().includes(lowerTerm) ||
          (claim.twitterUsername?.toLowerCase() || "").includes(lowerTerm),
      )
    }

    // Filter by status
    if (status !== "all") {
      filtered = filtered.filter((claim) => claim.status === status)
    }

    setFilteredClaims(filtered)
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

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-fuchsia-400 mb-6">Claims Management</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card className="bg-black/30 border-purple-800/30">
          <CardContent className="p-4">
            <p className="text-sm text-gray-400">Total Claims</p>
            <p className="text-2xl font-bold text-purple-300">{stats.total}</p>
          </CardContent>
        </Card>
        <Card className="bg-black/30 border-yellow-800/30">
          <CardContent className="p-4">
            <p className="text-sm text-gray-400">Pending</p>
            <p className="text-2xl font-bold text-yellow-300">{stats.pending}</p>
          </CardContent>
        </Card>
        <Card className="bg-black/30 border-green-800/30">
          <CardContent className="p-4">
            <p className="text-sm text-gray-400">Processed</p>
            <p className="text-2xl font-bold text-green-300">{stats.processed}</p>
          </CardContent>
        </Card>
        <Card className="bg-black/30 border-red-800/30">
          <CardContent className="p-4">
            <p className="text-sm text-gray-400">Rejected</p>
            <p className="text-2xl font-bold text-red-300">{stats.rejected}</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-purple-800/30 bg-black/30 backdrop-blur-sm shadow-xl overflow-hidden">
        <CardHeader className="border-b border-purple-900/20 bg-black/50">
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-xl text-purple-400">Airdrop Claims</CardTitle>
              <CardDescription className="text-gray-400">Manage user token claims</CardDescription>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="border-purple-800/30 hover:bg-purple-900/20"
                onClick={fetchClaims}
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-green-800/30 hover:bg-green-900/20 hover:text-green-300"
              >
                <Download className="h-4 w-4 mr-2" />
                Export CSV
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
              <Input
                placeholder="Search by name, wallet or Twitter..."
                className="pl-10 bg-black/50 border-purple-800/30 text-white"
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
            <Select value={statusFilter} onValueChange={handleStatusFilter}>
              <SelectTrigger className="w-[180px] bg-black/50 border-purple-800/30 text-white">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent className="bg-black/90 border-purple-800/30 text-white">
                <SelectItem value="all">All statuses</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="processed">Processed</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-purple-400" />
            </div>
          ) : filteredClaims.length > 0 ? (
            <div className="overflow-x-auto rounded-lg border border-purple-900/30">
              <Table>
                <TableCaption>List of airdrop claims</TableCaption>
                <TableHeader className="bg-purple-900/10">
                  <TableRow className="border-b border-purple-900/30 hover:bg-purple-900/20">
                    <TableHead className="text-purple-300">Name</TableHead>
                    <TableHead className="text-purple-300">Wallet</TableHead>
                    <TableHead className="text-purple-300">Twitter</TableHead>
                    <TableHead className="text-purple-300">Telegram</TableHead>
                    <TableHead className="text-purple-300">Tokens</TableHead>
                    <TableHead className="text-purple-300">Status</TableHead>
                    <TableHead className="text-purple-300">Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredClaims.map((claim) => (
                    <TableRow key={claim.id} className="border-b border-purple-900/20 hover:bg-purple-900/10">
                      <TableCell className="font-medium text-gray-300">{claim.name || "N/A"}</TableCell>
                      <TableCell className="font-mono text-xs text-gray-300">
                        {claim.walletAddress.substring(0, 6)}...
                        {claim.walletAddress.substring(claim.walletAddress.length - 4)}
                      </TableCell>
                      <TableCell className="text-gray-300">@{claim.twitterUsername || "N/A"}</TableCell>
                      <TableCell className="text-gray-300">{claim.telegramId || "N/A"}</TableCell>
                      <TableCell className="text-gray-300">{claim.tokensRequested}</TableCell>
                      <TableCell>{getStatusBadge(claim.status)}</TableCell>
                      <TableCell className="text-gray-300 text-xs">
                        {new Date(claim.createdAt).toLocaleDateString()}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="text-center py-12 text-gray-400">
              <p className="text-lg font-medium text-purple-300">No claims found</p>
              <p className="mt-2 text-sm">There are no claims matching your search criteria</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

