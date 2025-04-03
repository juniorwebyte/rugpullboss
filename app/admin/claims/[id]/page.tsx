"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Loader2, ArrowLeft, CheckCircle, XCircle } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { ProcessClaim } from "@/components/process-claim"
import Link from "next/link"

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
  notes?: string
}

export default function ClaimDetailsPage({ params }: { params: { id: string } }) {
  const { toast } = useToast()
  const router = useRouter()
  const [claim, setClaim] = useState<Claim | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchClaim()
  }, [])

  const fetchClaim = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(`/api/admin/claims/${params.id}`)
      if (!response.ok) {
        throw new Error("Failed to fetch claim")
      }

      const data = await response.json()
      setClaim(data)
    } catch (error) {
      console.error("Error fetching claim:", error)
      toast({
        title: "Error",
        description: "Failed to load claim data",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleClaimProcessed = () => {
    fetchClaim()
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

  if (!claim) {
    return (
      <div className="container mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <Link href="/admin/claims">
            <Button variant="outline" className="border-purple-800/30 hover:bg-purple-900/20">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Claims
            </Button>
          </Link>
        </div>

        <div className="flex justify-center items-center h-[calc(100vh-300px)]">
          <div className="text-center">
            <p className="text-xl text-red-400 mb-4">Claim not found</p>
            <Button onClick={() => router.push("/admin/claims")}>Return to Claims</Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <Link href="/admin/claims">
          <Button variant="outline" className="border-purple-800/30 hover:bg-purple-900/20">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Claims
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-purple-800/30 bg-black/30 backdrop-blur-sm shadow-xl">
          <CardHeader>
            <CardTitle className="text-xl text-purple-400">Claim Details</CardTitle>
            <CardDescription className="text-gray-400">Information about this claim</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-400">Status</p>
                <div className="mt-1">{getStatusBadge(claim.status)}</div>
              </div>
              <div>
                <p className="text-sm text-gray-400">Tokens Requested</p>
                <p className="text-lg font-medium text-purple-300">{claim.tokensRequested}</p>
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-400">Wallet Address</p>
              <p className="text-sm font-mono text-purple-300 break-all">{claim.walletAddress}</p>
            </div>

            <div>
              <p className="text-sm text-gray-400">Wallet Type</p>
              <p className="text-purple-300">{claim.walletType}</p>
            </div>

            <div>
              <p className="text-sm text-gray-400">Name</p>
              <p className="text-purple-300">{claim.name || "N/A"}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-400">Twitter</p>
                <p className="text-purple-300">@{claim.twitterUsername || "N/A"}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Telegram</p>
                <p className="text-purple-300">{claim.telegramId || "N/A"}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-400">Created At</p>
                <p className="text-purple-300">{new Date(claim.createdAt).toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Processed At</p>
                <p className="text-purple-300">
                  {claim.processedAt ? new Date(claim.processedAt).toLocaleString() : "N/A"}
                </p>
              </div>
            </div>

            {claim.notes && (
              <div>
                <p className="text-sm text-gray-400">Notes</p>
                <p className="text-purple-300 p-3 bg-black/20 rounded-md border border-purple-900/20 mt-1">
                  {claim.notes}
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {claim.status === "pending" ? (
          <ProcessClaim claimId={claim.id} walletAddress={claim.walletAddress} onProcessed={handleClaimProcessed} />
        ) : (
          <Card className="border-purple-800/30 bg-black/30 backdrop-blur-sm shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl text-purple-400">Claim Status</CardTitle>
              <CardDescription className="text-gray-400">This claim has already been processed</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center py-12">
              {claim.status === "processed" ? (
                <>
                  <CheckCircle className="h-16 w-16 text-green-400 mb-4" />
                  <p className="text-xl font-medium text-green-300">Claim Approved</p>
                  <p className="text-gray-400 mt-2">
                    This claim was approved on {new Date(claim.processedAt!).toLocaleDateString()}
                  </p>
                </>
              ) : (
                <>
                  <XCircle className="h-16 w-16 text-red-400 mb-4" />
                  <p className="text-xl font-medium text-red-300">Claim Rejected</p>
                  <p className="text-gray-400 mt-2">
                    This claim was rejected on {new Date(claim.processedAt!).toLocaleDateString()}
                  </p>
                </>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

