"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Loader2, Save } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

interface SystemConfig {
  airdropEnabled: boolean
  totalTokensAllocated: number
  tokensPerClaim: number
  claimDeadline: string
  requireTwitter: boolean
  requireTelegram: boolean
  launchDate: string
}

export default function SettingsPage() {
  const { toast } = useToast()
  const [config, setConfig] = useState<SystemConfig | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    fetchConfig()
  }, [])

  const fetchConfig = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/admin/config")
      if (!response.ok) {
        throw new Error("Failed to fetch configuration")
      }

      const data = await response.json()
      setConfig(data)
    } catch (error) {
      console.error("Error fetching configuration:", error)
      toast({
        title: "Error",
        description: "Failed to load airdrop configuration",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleSaveConfig = async () => {
    if (!config) return

    setIsSaving(true)
    try {
      const response = await fetch("/api/admin/config", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(config),
      })

      if (!response.ok) {
        throw new Error("Failed to save configuration")
      }

      toast({
        title: "Success",
        description: "Airdrop configuration saved successfully",
      })
    } catch (error) {
      console.error("Error saving configuration:", error)
      toast({
        title: "Error",
        description: "Failed to save airdrop configuration",
        variant: "destructive",
      })
    } finally {
      setIsSaving(false)
    }
  }

  const handleInputChange = (field: keyof SystemConfig, value: any) => {
    if (!config) return

    setConfig({
      ...config,
      [field]: value,
    })
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[calc(100vh-200px)]">
        <Loader2 className="h-12 w-12 animate-spin text-purple-400" />
      </div>
    )
  }

  if (!config) {
    return (
      <div className="flex justify-center items-center h-[calc(100vh-200px)]">
        <div className="text-center">
          <p className="text-xl text-red-400 mb-4">Failed to load configuration data</p>
          <Button onClick={fetchConfig}>Try Again</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-fuchsia-400 mb-6">Airdrop Settings</h1>

      <div className="grid grid-cols-1 gap-6">
        <Card className="border-purple-800/30 bg-black/30 backdrop-blur-sm shadow-xl">
          <CardHeader>
            <CardTitle className="text-xl text-purple-400">General Settings</CardTitle>
            <CardDescription className="text-gray-400">Configure the basic parameters of your airdrop</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">Airdrop Status</Label>
                <p className="text-sm text-gray-400">Enable or disable the airdrop</p>
              </div>
              <Switch
                checked={config.airdropEnabled}
                onCheckedChange={(checked) => handleInputChange("airdropEnabled", checked)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="totalTokens">Total Tokens Allocated</Label>
              <Input
                id="totalTokens"
                type="number"
                value={config.totalTokensAllocated}
                onChange={(e) => handleInputChange("totalTokensAllocated", Number.parseInt(e.target.value))}
                className="bg-black/50 border-purple-800/30 text-white"
              />
              <p className="text-xs text-gray-400">The total number of tokens allocated for this airdrop</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tokensPerClaim">Tokens Per Claim</Label>
              <Input
                id="tokensPerClaim"
                type="number"
                value={config.tokensPerClaim}
                onChange={(e) => handleInputChange("tokensPerClaim", Number.parseInt(e.target.value))}
                className="bg-black/50 border-purple-800/30 text-white"
              />
              <p className="text-xs text-gray-400">The number of tokens each user will receive</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="claimDeadline">Claim Deadline</Label>
              <Input
                id="claimDeadline"
                type="datetime-local"
                value={new Date(config.claimDeadline).toISOString().slice(0, 16)}
                onChange={(e) => handleInputChange("claimDeadline", new Date(e.target.value).toISOString())}
                className="bg-black/50 border-purple-800/30 text-white"
              />
              <p className="text-xs text-gray-400">The deadline for users to submit their claims</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="launchDate">Launch Date</Label>
              <Input
                id="launchDate"
                type="datetime-local"
                value={new Date(config.launchDate).toISOString().slice(0, 16)}
                onChange={(e) => handleInputChange("launchDate", new Date(e.target.value).toISOString())}
                className="bg-black/50 border-purple-800/30 text-white"
              />
              <p className="text-xs text-gray-400">The official launch date of the airdrop</p>
            </div>
          </CardContent>
          <CardFooter className="border-t border-purple-900/20 bg-black/50 p-6">
            <Button
              onClick={handleSaveConfig}
              disabled={isSaving}
              className="bg-purple-900/50 hover:bg-purple-800/70 text-white border border-purple-700/30"
            >
              {isSaving ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4 mr-2" />
                  Save Settings
                </>
              )}
            </Button>
          </CardFooter>
        </Card>

        <Card className="border-purple-800/30 bg-black/30 backdrop-blur-sm shadow-xl">
          <CardHeader>
            <CardTitle className="text-xl text-purple-400">Requirements</CardTitle>
            <CardDescription className="text-gray-400">Configure the requirements for claiming tokens</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">Require Twitter</Label>
                <p className="text-sm text-gray-400">Users must provide a Twitter username</p>
              </div>
              <Switch
                checked={config.requireTwitter}
                onCheckedChange={(checked) => handleInputChange("requireTwitter", checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">Require Telegram</Label>
                <p className="text-sm text-gray-400">Users must provide a Telegram ID</p>
              </div>
              <Switch
                checked={config.requireTelegram}
                onCheckedChange={(checked) => handleInputChange("requireTelegram", checked)}
              />
            </div>
          </CardContent>
          <CardFooter className="border-t border-purple-900/20 bg-black/50 p-6">
            <Button
              onClick={handleSaveConfig}
              disabled={isSaving}
              className="bg-purple-900/50 hover:bg-purple-800/70 text-white border border-purple-700/30"
            >
              {isSaving ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4 mr-2" />
                  Save Requirements
                </>
              )}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

