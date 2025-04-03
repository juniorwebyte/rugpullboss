"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle2,
  XCircle,
  Clock,
  AlertTriangle,
  LogOut,
  RefreshCw,
  Loader2,
  Bell,
  ArrowLeft,
  Send,
  Phone,
} from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { createWhatsAppLink } from "@/lib/utils"
import { useRouter } from "next/navigation"
import PerformanceToggle from "@/components/performance-toggle"

export default function AdminNotifications() {
  const router = useRouter()
  const { toast } = useToast()
  const [notifications, setNotifications] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    loadNotifications()
  }, [])

  const loadNotifications = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/admin/notifications")
      if (!response.ok) {
        throw new Error("Failed to load notifications")
      }

      const data = await response.json()
      setNotifications(data.notifications || [])
    } catch (error) {
      console.error("Error loading notifications:", error)
      toast({
        title: "Erro ao carregar notificações",
        description: "Ocorreu um erro ao carregar as notificações",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleResendNotification = async (index: number, notification: any) => {
    try {
      // Call the API to resend the notification
      const response = await fetch("/api/notify-claim", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          walletAddress: notification.walletAddress,
          twitterUsername: notification.twitterUsername || "",
          telegramId: notification.telegramId || "",
          resend: true,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to resend notification")
      }

      // Update notification status
      await updateNotificationStatus(index, true)

      toast({
        title: "Notificação reenviada",
        description: "A notificação foi reenviada com sucesso",
        className: "bg-green-950 border-green-800 text-green-100",
      })
    } catch (error) {
      console.error("Error resending notification:", error)
      toast({
        title: "Erro ao reenviar notificação",
        description: "Ocorreu um erro ao reenviar a notificação",
        variant: "destructive",
      })
    }
  }

  const updateNotificationStatus = async (index: number, sent: boolean) => {
    try {
      const response = await fetch("/api/admin/notifications", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          index,
          sent,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to update notification status")
      }

      // Refresh notifications
      loadNotifications()
    } catch (error) {
      console.error("Error updating notification status:", error)
      toast({
        title: "Erro ao atualizar status",
        description: "Ocorreu um erro ao atualizar o status da notificação",
        variant: "destructive",
      })
    }
  }

  const handleBackToDashboard = () => {
    router.push("/admin/dashboard?tab=claims")
  }

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

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-purple-900/20">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-fuchsia-600 flex items-center justify-center text-white font-bold">
              🔮
            </div>
            <span className="font-bold text-white">Admin 🔮 RugPullBoss</span>
          </div>

          <Button
            onClick={() => router.push("/admin/login")}
            className="bg-red-600 hover:bg-red-700 text-white rounded-md px-4 py-2 flex items-center gap-2"
          >
            <LogOut className="h-4 w-4" />
            <span>Sair</span>
          </Button>
        </div>
      </header>

      <div className="container mx-auto p-6 z-10 mt-16">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-fuchsia-400">Notificações Cósmicas</h1>
            <p className="text-gray-400">Gerenciamento de notificações do WhatsApp</p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="border-purple-800/30 hover:bg-purple-900/20"
              onClick={handleBackToDashboard}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar ao Painel
            </Button>
          </div>
        </div>

        <Card className="border-purple-800/30 bg-black/30 backdrop-blur-sm shadow-xl overflow-hidden">
          <CardHeader className="border-b border-purple-900/20 bg-black/50">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-xl text-purple-400">Histórico de Notificações</CardTitle>
                <CardDescription className="text-gray-400">
                  Gerencie notificações enviadas via WhatsApp para administradores
                </CardDescription>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="border-purple-800/30 hover:bg-purple-900/20"
                onClick={loadNotifications}
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Atualizar
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            {isLoading ? (
              <div className="flex justify-center items-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-purple-400" />
              </div>
            ) : notifications.length > 0 ? (
              <div className="overflow-x-auto rounded-lg border border-purple-900/30">
                <Table>
                  <TableCaption>Lista de notificações enviadas via WhatsApp</TableCaption>
                  <TableHeader className="bg-purple-900/10">
                    <TableRow className="border-b border-purple-900/30 hover:bg-purple-900/20">
                      <TableHead className="text-purple-300">Endereço da Carteira</TableHead>
                      <TableHead className="text-purple-300">Data de Criação</TableHead>
                      <TableHead className="text-purple-300">Status</TableHead>
                      <TableHead className="text-purple-300">Data de Envio</TableHead>
                      <TableHead className="text-purple-300">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {notifications.map((notification, index) => (
                      <TableRow key={index} className="border-b border-purple-900/20 hover:bg-purple-900/10">
                        <TableCell className="font-mono text-xs text-gray-300">
                          {notification.walletAddress.substring(0, 6)}...
                          {notification.walletAddress.substring(notification.walletAddress.length - 4)}
                        </TableCell>
                        <TableCell className="text-gray-300 text-xs">
                          {new Date(notification.createdAt).toLocaleString()}
                        </TableCell>
                        <TableCell>
                          {notification.sent ? (
                            <Badge variant="outline" className="bg-green-900/20 text-green-300 border-green-500/30">
                              Enviada
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="bg-red-900/20 text-red-300 border-red-500/30">
                              Falha
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell className="text-gray-300 text-xs">
                          {notification.sentAt ? new Date(notification.sentAt).toLocaleString() : "N/A"}
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            {notification.sent ? (
                              <Button
                                size="sm"
                                variant="outline"
                                className="h-8 px-2 py-0 bg-blue-900/20 border-blue-800/30 hover:bg-blue-800/30"
                                onClick={() => {
                                  const message = `🔮 *Airdrop RugPullBoss* 🔮\n\nOlá! Sua reivindicação de airdrop foi registrada com sucesso.\n\nCarteira: ${notification.walletAddress}\n\nObrigado por participar!`
                                  window.open(createWhatsAppLink("+5511999999999", message), "_blank")
                                }}
                              >
                                <Phone className="h-3.5 w-3.5" />
                              </Button>
                            ) : (
                              <Button
                                size="sm"
                                variant="outline"
                                className="h-8 px-2 py-0 bg-green-900/20 border-green-800/30 hover:bg-green-800/30"
                                onClick={() => handleResendNotification(index, notification)}
                              >
                                <Send className="h-3.5 w-3.5" />
                              </Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <div className="text-center py-12 text-gray-400">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-900/20 flex items-center justify-center">
                  <Bell className="h-8 w-8 text-purple-400" />
                </div>
                <p className="text-lg font-medium text-purple-300">Nenhuma notificação encontrada</p>
                <p className="mt-2 text-sm">Não há notificações WhatsApp registradas no sistema</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Dashboard Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          <Card className="border-purple-800/30 bg-black/30 backdrop-blur-sm shadow-xl overflow-hidden">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-green-900/20 flex items-center justify-center mb-3">
                  <CheckCircle2 className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-lg font-medium text-green-400">Notificações Enviadas</h3>
                <p className="text-2xl font-bold text-white mt-2">{notifications.filter((n) => n.sent).length}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-800/30 bg-black/30 backdrop-blur-sm shadow-xl overflow-hidden">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-red-900/20 flex items-center justify-center mb-3">
                  <XCircle className="h-6 w-6 text-red-400" />
                </div>
                <h3 className="text-lg font-medium text-red-400">Notificações Falhas</h3>
                <p className="text-2xl font-bold text-white mt-2">{notifications.filter((n) => !n.sent).length}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-800/30 bg-black/30 backdrop-blur-sm shadow-xl overflow-hidden">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-blue-900/20 flex items-center justify-center mb-3">
                  <Clock className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-medium text-blue-400">Última Notificação</h3>
                <p className="text-sm font-medium text-white mt-2">
                  {notifications.length > 0 ? new Date(notifications[0].createdAt).toLocaleString() : "N/A"}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-800/30 bg-black/30 backdrop-blur-sm shadow-xl overflow-hidden">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-purple-900/20 flex items-center justify-center mb-3">
                  <AlertTriangle className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-medium text-purple-400">Taxa de Sucesso</h3>
                <p className="text-2xl font-bold text-white mt-2">
                  {notifications.length > 0
                    ? `${Math.round((notifications.filter((n) => n.sent).length / notifications.length) * 100)}%`
                    : "N/A"}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="fixed bottom-4 right-4 z-20">
        <PerformanceToggle />
      </div>
    </main>
  )
}

