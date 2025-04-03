"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, CheckCircle } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

interface ClaimFormProps {
  walletAddress: string
  walletType: string
}

export default function ClaimForm({ walletAddress, walletType }: ClaimFormProps) {
  const { toast } = useToast()
  const [twitterUsername, setTwitterUsername] = useState("")
  const [telegramId, setTelegramId] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!twitterUsername || !telegramId) {
      toast({
        title: "Missing Information",
        description: "Please provide both Twitter username and Telegram ID",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/submit-claim", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          walletAddress,
          walletType,
          twitterUsername,
          telegramId,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit claim")
      }

      setIsSubmitted(true)
      toast({
        title: "Claim Submitted!",
        description: `Your claim for ${data.tokensRequested} tokens has been submitted successfully.`,
        className: "bg-green-950 border-green-800 text-green-100",
      })
    } catch (error) {
      console.error("Error submitting claim:", error)
      toast({
        title: "Submission Failed",
        description: error instanceof Error ? error.message : "An error occurred while submitting your claim",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="border-green-800/30 bg-black/30 backdrop-blur-sm shadow-xl overflow-hidden">
        <CardHeader className="border-b border-green-900/20 bg-black/50">
          <CardTitle className="text-xl text-green-400">Claim Submitted</CardTitle>
          <CardDescription className="text-gray-400">
            Your airdrop claim has been submitted successfully
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 flex flex-col items-center justify-center py-12">
          <div className="h-16 w-16 rounded-full bg-green-900/20 flex items-center justify-center mb-4">
            <CheckCircle className="h-8 w-8 text-green-400" />
          </div>
          <h3 className="text-xl font-medium text-green-400 mb-2">Thank You!</h3>
          <p className="text-center text-gray-300 max-w-md">
            Your claim has been submitted and is pending review. You will receive your tokens once your claim is
            processed.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-purple-800/30 bg-black/30 backdrop-blur-sm shadow-xl overflow-hidden">
      <CardHeader className="border-b border-purple-900/20 bg-black/50">
        <CardTitle className="text-xl text-purple-400">Submit Airdrop Claim</CardTitle>
        <CardDescription className="text-gray-400">Complete your information to claim your tokens</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="wallet-address">Wallet Address</Label>
            <Input
              id="wallet-address"
              value={walletAddress}
              disabled
              className="bg-black/50 border-purple-800/30 text-gray-400 font-mono"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="twitter">Twitter Username</Label>
            <Input
              id="twitter"
              placeholder="@username"
              value={twitterUsername}
              onChange={(e) => setTwitterUsername(e.target.value)}
              className="bg-black/50 border-purple-800/30 text-white"
              disabled={isSubmitting}
            />
            <p className="text-xs text-gray-400">Enter your Twitter username without the @ symbol</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="telegram">Telegram ID</Label>
            <Input
              id="telegram"
              placeholder="Your Telegram ID"
              value={telegramId}
              onChange={(e) => setTelegramId(e.target.value)}
              className="bg-black/50 border-purple-800/30 text-white"
              disabled={isSubmitting}
            />
            <p className="text-xs text-gray-400">You can get your Telegram ID by messaging @userinfobot on Telegram</p>
          </div>

          <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Claim"
            )}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="border-t border-purple-900/20 bg-black/50 p-4">
        <p className="text-xs text-gray-400">
          By submitting this form, you confirm that you have completed all required tasks and agree to the terms and
          conditions.
        </p>
      </CardFooter>
    </Card>
  )
}

