"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { CheckCircle, XCircle, Loader2 } from "lucide-react"

interface ProcessClaimProps {
  claimId: string
  walletAddress: string
  onProcessed: () => void
}

export function ProcessClaim({ claimId, walletAddress, onProcessed }: ProcessClaimProps) {
  const { toast } = useToast()
  const [notes, setNotes] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)

  const handleProcess = async (status: "processed" | "rejected") => {
    setIsProcessing(true)
    try {
      const response = await fetch(`/api/admin/claims/${claimId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status,
          notes,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to process claim")
      }

      toast({
        title: status === "processed" ? "Claim Approved" : "Claim Rejected",
        description: `The claim for wallet ${walletAddress.substring(0, 6)}...${walletAddress.substring(
          walletAddress.length - 4,
        )} has been ${status === "processed" ? "approved" : "rejected"}.`,
      })

      onProcessed()
    } catch (error) {
      console.error("Error processing claim:", error)
      toast({
        title: "Error",
        description: "Failed to process claim. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <Card className="border-purple-800/30 bg-black/30 backdrop-blur-sm shadow-xl">
      <CardHeader>
        <CardTitle className="text-xl text-purple-400">Process Claim</CardTitle>
        <CardDescription className="text-gray-400">
          Approve or reject this claim for wallet {walletAddress.substring(0, 6)}...
          {walletAddress.substring(walletAddress.length - 4)}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="notes">Notes (Optional)</Label>
            <Textarea
              id="notes"
              placeholder="Add any notes about this claim..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="bg-black/50 border-purple-800/30 text-white min-h-[100px]"
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t border-purple-900/20 bg-black/50 p-6">
        <Button
          variant="outline"
          onClick={() => handleProcess("rejected")}
          disabled={isProcessing}
          className="border-red-800/30 hover:bg-red-900/20 hover:text-red-300"
        >
          {isProcessing ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <XCircle className="h-4 w-4 mr-2" />}
          Reject
        </Button>
        <Button
          onClick={() => handleProcess("processed")}
          disabled={isProcessing}
          className="bg-green-900/50 hover:bg-green-800/70 text-white border border-green-700/30"
        >
          {isProcessing ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <CheckCircle className="h-4 w-4 mr-2" />}
          Approve
        </Button>
      </CardFooter>
    </Card>
  )
}

