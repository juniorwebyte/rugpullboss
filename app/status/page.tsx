"use client"

import { useState, useEffect } from "react"
import GalaxyAnimation from "@/components/galaxy-animation"
import Navbar from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Loader2,
  RefreshCw,
  Search,
  CheckCircle2,
  Clock,
  AlertTriangle,
  XCircle,
  Wallet,
  ArrowRight,
  Database,
} from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { getAirdropStats, getClaimStatus, initializeStorage } from "@/lib/storage-service"

// Tipos para o status da reivindicação
type ClaimStatus = "pending" | "approved" | "processing" | "completed" | "rejected" | "not_found" | "error"

interface ClaimData {
  status: ClaimStatus
  walletAddress: string
  tokensAllocated: number
  dateSubmitted: string
  dateProcessed?: string
  estimatedDelivery?: string
  transactionHash?: string
  message?: string
  tasks: {
    name: string
    completed: boolean
    points: number
  }[]
}

interface DatabaseHealth {
  status: "healthy" | "unhealthy"
  fallbackMode: boolean
  message: string
}

export default function StatusPage() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [isSearching, setIsSearching] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")
  const [claimData, setClaimData] = useState<ClaimData | null>(null)
  const [stats, setStats] = useState<any>(null)
  const [isWalletConnected, setIsWalletConnected] = useState(false)
  const [connectedWalletAddress, setConnectedWalletAddress] = useState("")
  const [dbHealth, setDbHealth] = useState<DatabaseHealth | null>(null)

  // Verificar a saúde do banco de dados
  useEffect(() => {
    const checkHealth = async () => {
      try {
        const response = await fetch("/api/health")
        if (response.ok) {
          const data = await response.json()
          setDbHealth(data.services.database)

          if (data.services.database.status === "unhealthy") {
            toast({
              title: "Modo de Contingência Ativado",
              description:
                "O sistema está operando em modo de contingência devido a problemas de conexão com o banco de dados.",
              variant: "destructive",
            })
          }
        }
      } catch (error) {
        console.error("Error checking health:", error)
        setDbHealth({
          status: "unhealthy",
          fallbackMode: true,
          message: "Não foi possível verificar a saúde do banco de dados",
        })
      }
    }

    checkHealth()
  }, [toast])

  // Initialize database on component mount
  useEffect(() => {
    const initialize = async () => {
      try {
        await initializeStorage()
      } catch (error) {
        console.error("Error initializing storage:", error)
      }
    }
    initialize()
  }, [])

  // Carregar estatísticas gerais
  useEffect(() => {
    const loadStats = async () => {
      setIsLoading(true)
      try {
        const statsData = await getAirdropStats()
        setStats(statsData)
      } catch (error) {
        console.error("Error loading airdrop stats:", error)
        toast({
          title: "Erro ao carregar estatísticas",
          description: "Não foi possível carregar as estatísticas do airdrop",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    }
    loadStats()
  }, [toast])

  // Função para verificar o status da reivindicação
  const checkClaimStatus = async (address: string) => {
    if (!address || address.trim() === "") {
      toast({
        title: "Portal Inválido",
        description: "Por favor, insira um endereço de portal dimensional válido",
        variant: "destructive",
      })
      return
    }

    setIsSearching(true)
    try {
      const data = await getClaimStatus(address)
      setClaimData(data)

      if (data?.status === "not_found") {
        toast({
          title: "Invocação não encontrada",
          description: "Não encontramos nenhuma invocação para este portal",
          variant: "destructive",
        })
      } else if (data?.status === "error") {
        toast({
          title: "Erro ao verificar estado onírico",
          description: data.message || "Ocorreu um erro ao verificar o estado da sua invocação",
          variant: "destructive",
        })
      } else {
        toast({
          title: "Estado Onírico encontrado",
          description: "Informações da sua invocação foram carregadas",
          className: "bg-green-950 border-green-800 text-green-100",
        })
      }
    } catch (error) {
      console.error("Erro ao verificar status:", error)
      toast({
        title: "Erro ao verificar estado onírico",
        description: "Ocorreu um erro ao verificar o estado da sua invocação",
        variant: "destructive",
      })
    } finally {
      setIsSearching(false)
    }
  }

  // Função para atualizar o status da carteira conectada
  const handleWalletUpdate = (address: string, connected: boolean) => {
    setIsWalletConnected(connected)
    setConnectedWalletAddress(address)
    if (connected && address) {
      setWalletAddress(address)
    }
  }

  // Renderizar o ícone de status apropriado
  const renderStatusIcon = (status: ClaimStatus) => {
    switch (status) {
      case "pending":
        return <Clock className="h-8 w-8 text-yellow-400" />
      case "approved":
        return <CheckCircle2 className="h-8 w-8 text-indigo-400" />
      case "processing":
        return <Loader2 className="h-8 w-8 text-indigo-400 animate-spin" />
      case "completed":
        return <CheckCircle2 className="h-8 w-8 text-green-400" />
      case "rejected":
        return <XCircle className="h-8 w-8 text-red-400" />
      case "not_found":
        return <AlertTriangle className="h-8 w-8 text-orange-400" />
      case "error":
        return <AlertTriangle className="h-8 w-8 text-red-400" />
      default:
        return <AlertTriangle className="h-8 w-8 text-gray-400" />
    }
  }

  // Obter a cor de fundo e borda com base no status
  const getStatusColors = (status: ClaimStatus) => {
    switch (status) {
      case "pending":
        return "bg-yellow-900/20 border-yellow-800/30 text-yellow-300"
      case "approved":
        return "bg-indigo-900/20 border-indigo-800/30 text-indigo-300"
      case "processing":
        return "bg-indigo-900/20 border-indigo-800/30 text-indigo-300"
      case "completed":
        return "bg-green-900/20 border-green-800/30 text-green-300"
      case "rejected":
        return "bg-red-900/20 border-red-800/30 text-red-300"
      case "not_found":
        return "bg-orange-900/20 border-orange-800/30 text-orange-300"
      case "error":
        return "bg-red-900/20 border-red-800/30 text-red-300"
      default:
        return "bg-gray-900/20 border-gray-800/30 text-gray-300"
    }
  }

  // Obter o texto do status
  const getStatusText = (status: ClaimStatus) => {
    switch (status) {
      case "pending":
        return "Aguardando Ritual"
      case "approved":
        return "Ritual Aprovado"
      case "processing":
        return "Invocação em Andamento"
      case "completed":
        return "Invocação Concluída"
      case "rejected":
        return "Ritual Rejeitado"
      case "not_found":
        return "Portal Não Encontrado"
      case "error":
        return "Erro na Verificação"
      default:
        return "Estado Desconhecido"
    }
  }

  // Calcular a porcentagem de progresso
  const calculateProgress = (status: ClaimStatus) => {
    switch (status) {
      case "pending":
        return 25
      case "approved":
        return 50
      case "processing":
        return 75
      case "completed":
        return 100
      case "rejected":
        return 100
      case "not_found":
        return 0
      case "error":
        return 0
      default:
        return 0
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-black text-white relative overflow-hidden">
      <GalaxyAnimation />
      <Navbar
        isWalletConnected={isWalletConnected}
        walletAddress={connectedWalletAddress}
        onWalletUpdate={handleWalletUpdate}
      />

      <div className="max-w-3xl w-full z-10 mt-20 pb-16">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-fuchsia-400">Verificar Estado Onírico da Invocação</h1>
          <p className="text-gray-300">
            Verifique o estado onírico da sua invocação de tokens $RPBOSS inserindo o endereço do seu portal dimensional
            abaixo.
          </p>
        </div>

        {/* Aviso de modo de contingência */}
        {dbHealth && dbHealth.status === "unhealthy" && (
          <Card className="border-yellow-800/30 bg-yellow-900/10 backdrop-blur-sm shadow-xl overflow-hidden mb-8">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <Database className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-yellow-400 mb-1">Sistema em Modo de Contingência</h3>
                  <p className="text-sm text-gray-300">
                    O portal dimensional está operando em modo de contingência devido a interferências cósmicas na
                    conexão com o banco de dados. Todas as funcionalidades estão disponíveis, mas os dados exibidos são
                    simulados.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Formulário de busca */}
        <Card className="border-fuchsia-800/30 bg-black/30 backdrop-blur-sm shadow-xl overflow-hidden mb-8">
          <CardHeader className="border-b border-fuchsia-900/20 bg-black/50">
            <CardTitle className="text-xl text-fuchsia-400">Consultar Estado Onírico</CardTitle>
            <CardDescription className="text-gray-400">
              Insira o endereço do portal dimensional que você usou para invocar os tokens
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="wallet-address">Endereço do Portal Dimensional</Label>
                <div className="flex gap-2">
                  <Input
                    id="wallet-address"
                    placeholder="0x..."
                    value={walletAddress}
                    onChange={(e) => setWalletAddress(e.target.value)}
                    className="bg-black/50 border-fuchsia-800/30 text-white"
                  />
                  <Button
                    onClick={() => checkClaimStatus(walletAddress)}
                    disabled={isSearching || !walletAddress}
                    className="bg-fuchsia-700 hover:bg-fuchsia-600"
                  >
                    {isSearching ? (
                      <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    ) : (
                      <Search className="h-4 w-4 mr-2" />
                    )}
                    Verificar
                  </Button>
                </div>
              </div>

              {isWalletConnected && (
                <div className="bg-fuchsia-900/20 border border-fuchsia-800/30 rounded-lg p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Wallet className="h-5 w-5 text-fuchsia-400" />
                    <span className="text-sm text-fuchsia-300">
                      Portal conectado: {connectedWalletAddress.substring(0, 6)}...
                      {connectedWalletAddress.substring(connectedWalletAddress.length - 4)}
                    </span>
                  </div>
                  <Button
                    variant="link"
                    size="sm"
                    onClick={() => {
                      setWalletAddress(connectedWalletAddress)
                      checkClaimStatus(connectedWalletAddress)
                    }}
                    className="text-fuchsia-400 hover:text-fuchsia-300"
                  >
                    Usar este portal
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Resultados da busca */}
        {claimData && (
          <Card
            className={`border-${claimData.status === "not_found" ? "orange" : "fuchsia"}-800/30 bg-black/30 backdrop-blur-sm shadow-xl overflow-hidden`}
          >
            <CardHeader className="border-b border-fuchsia-900/20 bg-black/50">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="text-xl text-fuchsia-400">Detalhes da Invocação</CardTitle>
                  <CardDescription className="text-gray-400">
                    Informações sobre sua invocação de tokens $RPBOSS
                  </CardDescription>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => checkClaimStatus(walletAddress)}
                  className="border-fuchsia-800/30 hover:bg-fuchsia-900/20"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Atualizar Estado Onírico
                </Button>
              </div>
            </CardHeader>

            {claimData.status === "not_found" || claimData.status === "error" ? (
              <CardContent className="p-6">
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  {renderStatusIcon(claimData.status)}
                  <h3 className="text-xl font-medium text-orange-300 mb-2">
                    {claimData.status === "not_found" ? "Invocação Não Encontrada" : "Erro na Verificação"}
                  </h3>
                  <p className="text-gray-300 max-w-md">
                    {claimData.status === "not_found" ? (
                      <>
                        Não encontramos nenhuma invocação associada ao portal dimensional{" "}
                        <span className="font-mono text-orange-300">
                          {walletAddress.substring(0, 6)}...{walletAddress.substring(walletAddress.length - 4)}
                        </span>
                      </>
                    ) : (
                      <>
                        {claimData.message ||
                          "Ocorreu um erro ao verificar o estado da sua invocação. Tente novamente mais tarde."}
                      </>
                    )}
                  </p>
                  <div className="mt-6 space-y-2">
                    <p className="text-sm text-gray-400">Possíveis razões:</p>
                    <ul className="text-sm text-gray-300 list-disc list-inside space-y-1">
                      <li>Você ainda não completou o ritual de invocação</li>
                      <li>Você usou um portal dimensional diferente</li>
                      <li>Houve uma interferência interdimensional ao processar sua invocação</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            ) : (
              <>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {/* Status atual */}
                    <div
                      className={`flex items-center justify-between p-4 rounded-lg border ${getStatusColors(claimData.status)}`}
                    >
                      <div className="flex items-center gap-4">
                        {renderStatusIcon(claimData.status)}
                        <div>
                          <h3 className="font-medium">Estado da Invocação</h3>
                          <p className="text-sm">
                            {getStatusText(claimData.status)}
                            {claimData.message && <span className="block mt-1 text-xs">{claimData.message}</span>}
                          </p>
                        </div>
                      </div>
                      <Badge variant="outline" className={getStatusColors(claimData.status)}>
                        {getStatusText(claimData.status)}
                      </Badge>
                    </div>

                    {/* Barra de progresso */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Progresso da Invocação</span>
                        <span className="text-fuchsia-300">{calculateProgress(claimData.status)}%</span>
                      </div>
                      <Progress
                        value={calculateProgress(claimData.status)}
                        className="h-2 bg-fuchsia-900/20"
                        indicatorClassName={
                          claimData.status === "rejected"
                            ? "bg-red-500"
                            : claimData.status === "completed"
                              ? "bg-green-500"
                              : "bg-fuchsia-500"
                        }
                      />
                      <div className="flex justify-between text-xs text-gray-500 pt-1">
                        <span>Ritual Iniciado</span>
                        <span>Ritual Aprovado</span>
                        <span>Invocação em Andamento</span>
                        <span>Invocação Concluída</span>
                      </div>
                    </div>

                    {/* Detalhes da invocação */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-fuchsia-900/10 border border-fuchsia-800/20 rounded-lg p-4">
                        <p className="text-sm text-gray-400">Endereço do Portal Dimensional</p>
                        <p className="font-mono text-sm text-fuchsia-300 break-all">{claimData.walletAddress}</p>
                      </div>
                      <div className="bg-fuchsia-900/10 border border-fuchsia-800/20 rounded-lg p-4">
                        <p className="text-sm text-gray-400">Tokens a Serem Invocados</p>
                        <p className="text-lg font-bold text-fuchsia-300">
                          {claimData.tokensAllocated?.toLocaleString() || "N/A"} $RPBOSS
                        </p>
                      </div>
                      <div className="bg-fuchsia-900/10 border border-fuchsia-800/20 rounded-lg p-4">
                        <p className="text-sm text-gray-400">Data do Ritual</p>
                        <p className="text-sm text-fuchsia-300">
                          {claimData.dateSubmitted
                            ? new Date(claimData.dateSubmitted).toLocaleDateString("pt-BR", {
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                              })
                            : "Data não disponível"}
                        </p>
                      </div>
                      <div className="bg-fuchsia-900/10 border border-fuchsia-800/20 rounded-lg p-4">
                        <p className="text-sm text-gray-400">
                          {claimData.status === "completed" ? "Data da Invocação" : "Invocação Estimada"}
                        </p>
                        <p className="text-sm text-fuchsia-300">
                          {claimData.status === "completed" && claimData.dateProcessed
                            ? new Date(claimData.dateProcessed).toLocaleDateString("pt-BR", {
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                              })
                            : claimData.estimatedDelivery
                              ? new Date(claimData.estimatedDelivery).toLocaleDateString("pt-BR", {
                                  day: "2-digit",
                                  month: "2-digit",
                                  year: "numeric",
                                })
                              : "A ser determinado pelos astros"}
                        </p>
                      </div>
                    </div>

                    {/* Rituais completados */}
                    {claimData.tasks && claimData.tasks.length > 0 && (
                      <div className="space-y-3">
                        <h3 className="font-medium text-fuchsia-300">Rituais Completados</h3>
                        <div className="space-y-2">
                          {claimData.tasks.map((task, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-between p-3 bg-fuchsia-900/10 border border-fuchsia-800/20 rounded-lg"
                            >
                              <div className="flex items-center gap-3">
                                {task.completed ? (
                                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                                ) : (
                                  <Clock className="h-5 w-5 text-yellow-400" />
                                )}
                                <span className={task.completed ? "text-gray-300" : "text-gray-400"}>{task.name}</span>
                              </div>
                              <Badge
                                variant="outline"
                                className={
                                  task.completed
                                    ? "bg-green-900/20 text-green-300 border-green-500/30"
                                    : "bg-yellow-900/20 text-yellow-300 border-yellow-500/30"
                                }
                              >
                                {task.completed ? "Concluído" : "Pendente"} • {task.points} pontos
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Hash da transação (se concluído) */}
                    {claimData.status === "completed" && claimData.transactionHash && (
                      <div className="bg-green-900/10 border border-green-800/20 rounded-lg p-4">
                        <p className="text-sm text-gray-400 mb-1">Hash da Invocação Interdimensional</p>
                        <div className="flex items-center gap-2">
                          <p className="font-mono text-sm text-green-300 break-all">{claimData.transactionHash}</p>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-6 w-6 p-0 text-green-400 hover:text-green-300 hover:bg-green-900/20"
                            onClick={() => {
                              navigator.clipboard.writeText(claimData.transactionHash || "")
                              toast({
                                title: "Hash copiado",
                                description: "O hash da invocação foi copiado para a área de transferência",
                                className: "bg-green-950 border-green-800 text-green-100",
                              })
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="ml-1"
                            >
                              <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                            </svg>
                          </Button>
                        </div>
                        <a
                          href={`https://bscscan.com/tx/${claimData.transactionHash}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-green-400 hover:text-green-300 mt-2 inline-flex items-center"
                        >
                          Ver no Portal Dimensional BscScan
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="ml-1"
                          >
                            <path d="M7 7h10v10" />
                            <path d="M7 17 17 7" />
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="border-t border-fuchsia-900/20 bg-black/50 p-4">
                  <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                    <p className="text-sm text-gray-400">
                      Última atualização:{" "}
                      {new Date().toLocaleDateString("pt-BR", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        className="border-fuchsia-800/30 hover:bg-fuchsia-900/20"
                        onClick={() => checkClaimStatus(walletAddress)}
                      >
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Atualizar Estado Onírico
                      </Button>
                      {claimData.status === "pending" && (
                        <Button className="bg-fuchsia-700 hover:bg-fuchsia-600">Completar Rituais Pendentes</Button>
                      )}
                    </div>
                  </div>
                </CardFooter>
              </>
            )}
          </Card>
        )}

        {/* Estatísticas gerais */}
        {stats && (
          <Card className="border-fuchsia-800/30 bg-black/30 backdrop-blur-sm shadow-xl overflow-hidden mt-8">
            <CardHeader className="border-b border-fuchsia-900/20 bg-black/50">
              <CardTitle className="text-xl text-fuchsia-400">Estatísticas da Invocação</CardTitle>
              <CardDescription className="text-gray-400">
                Informações gerais sobre o progresso da Invocação Interdimensional
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-fuchsia-900/10 border border-fuchsia-800/20 rounded-lg p-4">
                  <p className="text-sm text-gray-400">Total de Vítimas</p>
                  <p className="text-2xl font-bold text-fuchsia-300">{stats.totalClaims?.toLocaleString() || "N/A"}</p>
                </div>
                <div className="bg-fuchsia-900/10 border border-fuchsia-800/20 rounded-lg p-4">
                  <p className="text-sm text-gray-400">Invocações Processadas</p>
                  <p className="text-2xl font-bold text-green-300">
                    {stats.processedClaims?.toLocaleString() || "N/A"}
                  </p>
                </div>
                <div className="bg-fuchsia-900/10 border border-fuchsia-800/20 rounded-lg p-4">
                  <p className="text-sm text-gray-400">Tokens Invocados</p>
                  <p className="text-2xl font-bold text-fuchsia-300">
                    {stats.tokensDistributed?.toLocaleString() || "N/A"} $RPBOSS
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </main>
  )
}

