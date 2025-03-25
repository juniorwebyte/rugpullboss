"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, TrendingDown, DollarSign, Coins, BarChart3, Sparkles, Skull, AlertTriangle } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export default function IllusoryEconomy() {
  const [activeTab, setActiveTab] = useState("market")
  const [marketTrend, setMarketTrend] = useState<"up" | "down" | "neutral">("neutral")
  const [investmentAmount, setInvestmentAmount] = useState(0)
  const [showTruth, setShowTruth] = useState(false)
  const [isInvesting, setIsInvesting] = useState(false)
  const [investmentResult, setInvestmentResult] = useState<null | {
    success: boolean
    message: string
  }>(null)

  // Efeito para manipulação de mercado automática
  useEffect(() => {
    const interval = setInterval(() => {
      // 70% de chance de manipulação
      if (Math.random() > 0.3) {
        // Escolher uma tendência aleatória
        const trends: Array<"up" | "down" | "neutral"> = ["up", "down", "neutral"]
        const randomTrend = trends[Math.floor(Math.random() * trends.length)]
        setMarketTrend(randomTrend)
      }
    }, 30000) // A cada 30 segundos

    return () => clearInterval(interval)
  }, [])

  const handleTrendChange = (trend: "up" | "down" | "neutral") => {
    setMarketTrend(trend)
  }

  const handleInvest = () => {
    setIsInvesting(true)

    // Simular processamento
    setTimeout(() => {
      // 90% de chance de perder
      const success = Math.random() > 0.9

      if (success) {
        setInvestmentResult({
          success: true,
          message: `Parabéns! Seu investimento de ${investmentAmount} $RUG gerou um lucro de ${(investmentAmount * 0.1).toFixed(2)} $RUG!`,
        })
      } else {
        setInvestmentResult({
          success: false,
          message: `Oops! Seu investimento de ${investmentAmount} $RUG foi liquidado devido a "flutuações de mercado inesperadas".`,
        })
      }

      setIsInvesting(false)
      setInvestmentAmount(0)
    }, 2000)
  }

  const renderTrendIcon = () => {
    switch (marketTrend) {
      case "up":
        return <TrendingUp className="h-6 w-6 text-green-400" />
      case "down":
        return <TrendingDown className="h-6 w-6 text-red-400" />
      default:
        return <BarChart3 className="h-6 w-6 text-blue-400" />
    }
  }

  const getMarketDescription = () => {
    switch (marketTrend) {
      case "up":
        return "O mercado está em alta ilusória. Os investidores estão eufóricos, ignorando os sinais de manipulação."
      case "down":
        return "O mercado está em queda controlada. Os manipuladores estão acumulando tokens a preços baixos."
      default:
        return "O mercado está em equilíbrio instável. Os manipuladores estão preparando o próximo movimento."
    }
  }

  const tokens = [
    {
      name: "RUG",
      fullName: "RugPullCoin",
      price: "$0.00042",
      change: "+420%",
      color: "text-fuchsia-400",
      description: "Token governança do ecossistema RugPullBoss",
      truthText: "Sem utilidade real. Programado para colapsar após atingir capitalização suficiente.",
    },
    {
      name: "SCAM",
      fullName: "ScammerDAO",
      price: "$0.0069",
      change: "+69%",
      color: "text-purple-400",
      description: "Governança descentralizada para decisões de rug pull",
      truthText:
        "Todas as votações são falsas. As decisões são tomadas pelos desenvolvedores antes mesmo da votação começar.",
    },
    {
      name: "PONZI",
      fullName: "PonziScheme",
      price: "$1.337",
      change: "-33.7%",
      color: "text-blue-400",
      description: "Sistema de referral com recompensas insustentáveis",
      truthText:
        "Clássico esquema Ponzi onde apenas os primeiros 0.1% de investidores recebem algo. O restante financia a saída dos fundadores.",
    },
    {
      name: "FOMO",
      fullName: "FearOfMissingOut",
      price: "$9.999",
      change: "+999%",
      color: "text-green-400",
      description: "Token com suprimento que diminui artificialmente",
      truthText:
        "As queimas de token são falsas. Os tokens 'queimados' são enviados para carteiras controladas pelos desenvolvedores.",
    },
  ]

  const manipulationTechniques = [
    {
      name: "Pump & Dump",
      description: "Inflação artificial de preço seguida de venda coordenada",
      color: "text-green-400",
      icon: TrendingUp,
      truthText:
        "Usamos bots para comprar e vender entre nossas próprias carteiras, criando volume falso antes de despejar nos investidores.",
    },
    {
      name: "Wash Trading",
      description: "Criação de volume falso para atrair investidores",
      color: "text-blue-400",
      icon: BarChart3,
      truthText:
        "Nossos algoritmos realizam milhares de transações entre carteiras controladas por nós para simular interesse no token.",
    },
    {
      name: "Spoofing",
      description: "Ordens falsas para manipular o livro de ofertas",
      color: "text-purple-400",
      icon: AlertTriangle,
      truthText:
        "Colocamos grandes ordens de compra que nunca pretendemos executar, apenas para cancelá-las no último segundo.",
    },
    {
      name: "Rug Pull",
      description: "Remoção súbita de liquidez após acumulação de capital",
      color: "text-red-400",
      icon: Skull,
      truthText:
        "O grande final. Quando atingirmos nossa meta de captação, removeremos toda a liquidez em segundos, deixando tokens sem valor.",
    },
  ]

  return (
    <Card className="border border-purple-700/30 bg-purple-900/10 relative overflow-hidden">
      {/* Camada de verdade oculta */}
      {showTruth && (
        <motion.div
          className="absolute inset-0 bg-black/90 z-10 p-6 flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Skull className="h-10 w-10 text-red-500 mx-auto mb-4" />
          <h3 className="text-red-500 text-xl font-bold text-center mb-4">ECONOMIA REAL DO RUGPULL</h3>
          <p className="text-gray-300 text-sm text-center mb-6">
            Toda a economia do RugPullBoss é projetada para extrair valor dos investidores e transferi-lo para os
            desenvolvedores.
          </p>

          <div className="overflow-y-auto flex-grow">
            <h4 className="text-red-400 font-medium mb-2">A Verdade Sobre Nossos Tokens:</h4>
            <div className="space-y-3 mb-6">
              {tokens.map((token, index) => (
                <div key={index} className="bg-red-900/20 border border-red-700/30 rounded-lg p-3">
                  <h5 className="text-red-400 font-medium flex items-center text-sm">
                    <DollarSign className="h-3 w-3 mr-1" />
                    {token.name} ({token.fullName})
                  </h5>
                  <p className="text-xs text-gray-400">{token.truthText}</p>
                </div>
              ))}
            </div>

            <h4 className="text-red-400 font-medium mb-2">Nossas Técnicas de Manipulação:</h4>
            <div className="space-y-3">
              {manipulationTechniques.map((technique, index) => (
                <div key={index} className="bg-red-900/20 border border-red-700/30 rounded-lg p-3">
                  <h5 className="text-red-400 font-medium flex items-center text-sm">
                    <technique.icon className="h-3 w-3 mr-1" />
                    {technique.name}
                  </h5>
                  <p className="text-xs text-gray-400">{technique.truthText}</p>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            className="mt-6 border-red-700 text-red-400 hover:bg-red-900/20"
            onClick={() => setShowTruth(false)}
          >
            Retornar à Ilusão Econômica
          </Button>
        </motion.div>
      )}

      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-bold text-purple-400">Economia Ilusória</CardTitle>
          {renderTrendIcon()}
        </div>
        <CardDescription className="text-gray-400">
          O sistema financeiro paralelo onde a realidade é apenas uma sugestão
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Tabs defaultValue="market" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 bg-black/30">
            <TabsTrigger
              value="market"
              className="data-[state=active]:bg-purple-900/30 data-[state=active]:text-purple-400"
            >
              <BarChart3 className="h-4 w-4 mr-2" />
              Mercado
            </TabsTrigger>
            <TabsTrigger
              value="tokens"
              className="data-[state=active]:bg-purple-900/30 data-[state=active]:text-purple-400"
            >
              <Coins className="h-4 w-4 mr-2" />
              Tokens
            </TabsTrigger>
            <TabsTrigger
              value="manipulation"
              className="data-[state=active]:bg-purple-900/30 data-[state=active]:text-purple-400"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              Manipulação
            </TabsTrigger>
          </TabsList>

          <TabsContent value="market" className="mt-4">
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-black/30 border border-gray-800">
                <h4 className="text-sm font-medium mb-2 text-purple-400">Tendência de Mercado</h4>
                <p className="text-sm text-gray-400 mb-4">{getMarketDescription()}</p>

                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className={cn(
                      "flex-1",
                      marketTrend === "up" ? "bg-green-900/20 border-green-700 text-green-400" : "border-gray-700",
                    )}
                    onClick={() => handleTrendChange("up")}
                  >
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Alta
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className={cn(
                      "flex-1",
                      marketTrend === "neutral" ? "bg-blue-900/20 border-blue-700 text-blue-400" : "border-gray-700",
                    )}
                    onClick={() => handleTrendChange("neutral")}
                  >
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Neutro
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className={cn(
                      "flex-1",
                      marketTrend === "down" ? "bg-red-900/20 border-red-700 text-red-400" : "border-gray-700",
                    )}
                    onClick={() => handleTrendChange("down")}
                  >
                    <TrendingDown className="h-4 w-4 mr-2" />
                    Baixa
                  </Button>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-black/30 border border-gray-800">
                <h4 className="text-sm font-medium mb-2 text-purple-400">Indicadores Ilusórios</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Índice de Medo e Ganância</span>
                    <span className="text-sm font-medium text-green-400">99 (Ganância Extrema)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Dominância do RugPullBoss</span>
                    <span className="text-sm font-medium text-purple-400">69%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Liquidez Manipulada</span>
                    <span className="text-sm font-medium text-blue-400">$420M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Rug Pulls Previstos</span>
                    <span className="text-sm font-medium text-red-400">13 nas próximas 24h</span>
                  </div>
                </div>
              </div>

              {/* Seção de investimento */}
              <div className="p-4 rounded-lg bg-black/30 border border-gray-800">
                <h4 className="text-sm font-medium mb-2 text-purple-400">Investimento Cósmico</h4>

                {investmentResult ? (
                  <div
                    className={`p-3 rounded-lg ${investmentResult.success ? "bg-green-900/20 border border-green-700/30" : "bg-red-900/20 border border-red-700/30"} mb-3`}
                  >
                    <p className={`text-sm ${investmentResult.success ? "text-green-400" : "text-red-400"}`}>
                      {investmentResult.message}
                    </p>
                  </div>
                ) : null}

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Quantidade de $RUG para investir:</span>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-7 w-7 p-0 border-purple-700"
                        onClick={() => setInvestmentAmount(Math.max(0, investmentAmount - 10))}
                      >
                        -
                      </Button>
                      <span className="text-sm font-medium text-purple-400 min-w-[40px] text-center">
                        {investmentAmount}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-7 w-7 p-0 border-purple-700"
                        onClick={() => setInvestmentAmount(investmentAmount + 10)}
                      >
                        +
                      </Button>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Retorno prometido:</span>
                    <span className="text-sm font-medium text-green-400">+1000%</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Retorno real (oculto):</span>
                    <span className="text-sm font-medium text-red-400">-100%</span>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full mt-2 border-purple-700 text-purple-400 hover:bg-purple-900/20"
                    disabled={investmentAmount <= 0 || isInvesting}
                    onClick={handleInvest}
                  >
                    {isInvesting ? (
                      <>
                        <Sparkles className="h-4 w-4 mr-2 animate-spin" />
                        Processando Investimento...
                      </>
                    ) : (
                      <>
                        <DollarSign className="h-4 w-4 mr-2" />
                        Investir em $RUG
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="tokens" className="mt-4">
            <div className="space-y-2">
              {tokens.map((token, index) => (
                <div
                  key={index}
                  className="p-3 rounded-lg bg-black/30 border border-gray-800 flex justify-between items-center"
                >
                  <div className="flex items-center">
                    <div
                      className={cn(
                        "h-8 w-8 rounded-full flex items-center justify-center",
                        `bg-${token.color.split("-")[1]}-900/30`,
                      )}
                    >
                      <DollarSign className={cn("h-4 w-4", token.color)} />
                    </div>
                    <div className="ml-3">
                      <p className={cn("text-sm font-medium", token.color)}>{token.name}</p>
                      <p className="text-xs text-gray-500">{token.fullName}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-white">{token.price}</p>
                    <p className={cn("text-xs", token.change.startsWith("+") ? "text-green-400" : "text-red-400")}>
                      {token.change}
                    </p>
                  </div>
                </div>
              ))}

              <div className="p-4 rounded-lg bg-black/30 border border-gray-800 mt-4">
                <h4 className="text-sm font-medium mb-2 text-purple-400">Tokenomics Ilusórios</h4>
                <p className="text-sm text-gray-400 mb-2">
                  Todos os tokens do ecossistema RugPullBoss são projetados para criar a ilusão de valor enquanto
                  transferem riqueza para os manipuladores cósmicos.
                </p>
                <div className="grid grid-cols-2 gap-2 mt-3">
                  <div className="p-2 rounded bg-black/50 text-center">
                    <p className="text-xs text-gray-400">Suprimento Total</p>
                    <p className="text-sm font-medium text-purple-400">∞</p>
                  </div>
                  <div className="p-2 rounded bg-black/50 text-center">
                    <p className="text-xs text-gray-400">Tokens Queimados</p>
                    <p className="text-sm font-medium text-red-400">0</p>
                  </div>
                  <div className="p-2 rounded bg-black/50 text-center">
                    <p className="text-xs text-gray-400">APY Prometido</p>
                    <p className="text-sm font-medium text-green-400">9999%</p>
                  </div>
                  <div className="p-2 rounded bg-black/50 text-center">
                    <p className="text-xs text-gray-400">APY Real</p>
                    <p className="text-sm font-medium text-red-400">-100%</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="manipulation" className="mt-4">
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-black/30 border border-gray-800">
                <h4 className="text-sm font-medium mb-2 text-purple-400">Técnicas de Manipulação</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-green-900/30 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-green-400 text-xs">1</span>
                    </span>
                    <span>
                      <span className="text-green-400 font-medium">Pump & Dump</span> - Inflação artificial de preço
                      seguida de venda coordenada
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-blue-900/30 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-blue-400 text-xs">2</span>
                    </span>
                    <span>
                      <span className="text-blue-400 font-medium">Wash Trading</span> - Criação de volume falso para
                      atrair investidores
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-purple-400 text-xs">3</span>
                    </span>
                    <span>
                      <span className="text-purple-400 font-medium">Spoofing</span> - Ordens falsas para manipular o
                      livro de ofertas
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-fuchsia-900/30 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-fuchsia-400 text-xs">4</span>
                    </span>
                    <span>
                      <span className="text-fuchsia-400 font-medium">Rug Pull</span> - Remoção súbita de liquidez após
                      acumulação de capital
                    </span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-black/30 border border-gray-800">
                <h4 className="text-sm font-medium mb-2 text-purple-400">Calendário de Manipulação</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Próximo Pump & Dump</span>
                    <span className="text-sm font-medium text-green-400">Em 2 dias</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Grande Rug Pull</span>
                    <span className="text-sm font-medium text-fuchsia-400">Em 7 dias</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Falso Anúncio de Parceria</span>
                    <span className="text-sm font-medium text-blue-400">Em 3 dias</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Ataque de Flash Loan</span>
                    <span className="text-sm font-medium text-red-400">Em 5 dias</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-black/30 border border-gray-800">
                <h4 className="text-sm font-medium mb-2 text-purple-400">Manipulação Psicológica</h4>
                <p className="text-sm text-gray-400 mb-3">
                  O RugPullBoss utiliza técnicas avançadas de manipulação psicológica para maximizar a extração de
                  valor.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="h-4 w-4 rounded-full bg-red-900/30 flex items-center justify-center mr-2">
                      <span className="text-red-400 text-xs">!</span>
                    </div>
                    <span className="text-sm text-gray-400">Criação de FOMO através de "últimas chances"</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-4 w-4 rounded-full bg-yellow-900/30 flex items-center justify-center mr-2">
                      <span className="text-yellow-400 text-xs">!</span>
                    </div>
                    <span className="text-sm text-gray-400">Falsos testemunhos de "investidores bem-sucedidos"</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-4 w-4 rounded-full bg-green-900/30 flex items-center justify-center mr-2">
                      <span className="text-green-400 text-xs">!</span>
                    </div>
                    <span className="text-sm text-gray-400">Promessas de retornos impossíveis e insustentáveis</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter>
        <Button
          variant="outline"
          className="w-full border-purple-700 hover:bg-purple-900/20 text-purple-400"
          onClick={() => setShowTruth(!showTruth)}
        >
          {showTruth ? (
            <>
              <Sparkles className="mr-2 h-4 w-4" />
              Retornar à Ilusão Econômica
            </>
          ) : (
            <>
              <Skull className="mr-2 h-4 w-4" />
              Revelar a Verdade Econômica
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}

