"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Map, Compass, Milestone, Route, Crosshair, Target, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import { DollarSign, AlertTriangle, Heart, Frown } from "lucide-react"

export default function DimensionalMap() {
  const [activeTab, setActiveTab] = useState("roadmap")
  const [selectedPhase, setSelectedPhase] = useState(0)

  const phases = [
    {
      name: "Fase Inicial",
      description: "Criação do universo RugPullBoss e estabelecimento das bases para manipulação cósmica",
      color: "text-blue-400",
      bgColor: "bg-blue-900/20",
      borderColor: "border-blue-700/30",
      icon: Milestone,
      milestones: [
        "Lançamento do token $RUG com tokenomics insustentáveis",
        "Criação da narrativa cósmica para atrair investidores",
        "Estabelecimento da comunidade de vítimas potenciais",
        "Desenvolvimento do site com promessas impossíveis",
      ],
    },
    {
      name: "Fase de Expansão",
      description: "Ampliação do ecossistema e criação de múltiplas camadas de ilusão financeira",
      color: "text-purple-400",
      bgColor: "bg-purple-900/20",
      borderColor: "border-purple-700/30",
      icon: Route,
      milestones: [
        "Lançamento de tokens secundários no ecossistema",
        "Criação de pools de liquidez manipuláveis",
        "Desenvolvimento de 'utilidades' para os tokens",
        "Parcerias falsas com projetos inexistentes",
      ],
    },
    {
      name: "Fase de Manipulação",
      description: "Implementação de técnicas avançadas de manipulação de mercado e psicologia de massas",
      color: "text-fuchsia-400",
      bgColor: "bg-fuchsia-900/20",
      borderColor: "border-fuchsia-700/30",
      icon: Crosshair,
      milestones: [
        "Manipulação de preços através de wash trading",
        "Criação de FOMO através de anúncios falsos",
        "Implementação de esquemas ponzi disfarçados",
        "Preparação para o grande rug pull",
      ],
    },
    {
      name: "Fase Final",
      description: "Execução do plano mestre e transcendência para novas dimensões de fraude",
      color: "text-red-400",
      bgColor: "bg-red-900/20",
      borderColor: "border-red-700/30",
      icon: Target,
      milestones: [
        "Execução do rug pull principal",
        "Remoção de toda a liquidez",
        "Desaparecimento da equipe",
        "Planejamento do próximo projeto fraudulento",
      ],
    },
  ]

  const currentPhase = phases[selectedPhase]

  const dimensions = [
    {
      name: "Dimensão da Ganância",
      description: "Onde os investidores são cegados pelo desejo de lucros rápidos",
      color: "text-green-400",
      icon: DollarSign,
    },
    {
      name: "Dimensão do FOMO",
      description: "Onde o medo de ficar de fora supera o raciocínio lógico",
      color: "text-yellow-400",
      icon: AlertTriangle,
    },
    {
      name: "Dimensão da Esperança",
      description: "Onde as vítimas se agarram a promessas vazias",
      color: "text-blue-400",
      icon: Heart,
    },
    {
      name: "Dimensão do Desespero",
      description: "Onde os investidores percebem que foram enganados",
      color: "text-red-400",
      icon: Frown,
    },
  ]

  // Importando ícones adicionais que foram usados mas não declarados

  return (
    <Card className="border border-blue-700/30 bg-blue-900/10">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-bold text-blue-400">Mapa Dimensional</CardTitle>
          <Map className="h-6 w-6 text-blue-400" />
        </div>
        <CardDescription className="text-gray-400">
          Navegue pelas dimensões do universo RugPullBoss e descubra os caminhos da manipulação cósmica
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Tabs defaultValue="roadmap" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-2 bg-black/30">
            <TabsTrigger
              value="roadmap"
              className="data-[state=active]:bg-blue-900/30 data-[state=active]:text-blue-400"
            >
              <Route className="h-4 w-4 mr-2" />
              Roadmap
            </TabsTrigger>
            <TabsTrigger
              value="dimensions"
              className="data-[state=active]:bg-blue-900/30 data-[state=active]:text-blue-400"
            >
              <Compass className="h-4 w-4 mr-2" />
              Dimensões
            </TabsTrigger>
          </TabsList>

          <TabsContent value="roadmap" className="mt-4">
            <div className="space-y-4">
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {phases.map((phase, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className={cn(
                      "flex-shrink-0",
                      selectedPhase === index
                        ? `${phase.bgColor} ${phase.borderColor} ${phase.color}`
                        : "border-gray-700",
                    )}
                    onClick={() => setSelectedPhase(index)}
                  >
                    <phase.icon className="h-4 w-4 mr-2" />
                    {phase.name}
                  </Button>
                ))}
              </div>

              <div
                className={cn(
                  "p-4 rounded-lg border transition-all duration-300",
                  currentPhase.borderColor,
                  currentPhase.bgColor,
                )}
              >
                <div className="flex items-center mb-3">
                  <currentPhase.icon className={cn("h-5 w-5 mr-2", currentPhase.color)} />
                  <h4 className={cn("text-sm font-medium", currentPhase.color)}>{currentPhase.name}</h4>
                </div>
                <p className="text-sm text-gray-400 mb-4">{currentPhase.description}</p>

                <h5 className={cn("text-xs font-medium mb-2", currentPhase.color)}>Marcos Dimensionais:</h5>
                <ul className="space-y-2">
                  {currentPhase.milestones.map((milestone, index) => (
                    <li key={index} className="flex items-start">
                      <span
                        className={cn(
                          "h-5 w-5 rounded-full flex items-center justify-center mr-2 mt-0.5",
                          currentPhase.bgColor,
                        )}
                      >
                        <span className={currentPhase.color}>{index + 1}</span>
                      </span>
                      <span className="text-sm text-gray-400">{milestone}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-2 w-full bg-gray-800 rounded-full overflow-hidden mt-4">
                {phases.map((phase, index) => (
                  <div
                    key={index}
                    className={cn("absolute top-0 h-full", phase.color.replace("text-", "bg-").replace("-400", "-600"))}
                    style={{
                      left: `${index * 25}%`,
                      width: "25%",
                      opacity: index <= selectedPhase ? 1 : 0.2,
                    }}
                  />
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="dimensions" className="mt-4">
            <div className="space-y-3">
              {dimensions.map((dimension, index) => (
                <div key={index} className="p-4 rounded-lg bg-black/30 border border-gray-800">
                  <div className="flex items-center mb-2">
                    <div
                      className={cn(
                        "h-8 w-8 rounded-full flex items-center justify-center mr-3",
                        dimension.color.replace("text-", "bg-").replace("-400", "-900/30"),
                      )}
                    >
                      <dimension.icon />
                    </div>
                    <h4 className={cn("text-sm font-medium", dimension.color)}>{dimension.name}</h4>
                  </div>
                  <p className="text-sm text-gray-400 pl-11">{dimension.description}</p>
                </div>
              ))}

              <div className="p-4 rounded-lg bg-black/30 border border-gray-800 mt-4">
                <h4 className="text-sm font-medium mb-2 text-blue-400">Portais Interdimensionais</h4>
                <p className="text-sm text-gray-400 mb-3">
                  Os portais permitem que o RugPullBoss viaje entre dimensões para maximizar o impacto de suas
                  manipulações.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm" className="border-green-700 text-green-400">
                    <Sparkles className="h-4 w-4 mr-2" />
                    Portal da Ganância
                  </Button>
                  <Button variant="outline" size="sm" className="border-yellow-700 text-yellow-400">
                    <Sparkles className="h-4 w-4 mr-2" />
                    Portal do FOMO
                  </Button>
                  <Button variant="outline" size="sm" className="border-blue-700 text-blue-400">
                    <Sparkles className="h-4 w-4 mr-2" />
                    Portal da Esperança
                  </Button>
                  <Button variant="outline" size="sm" className="border-red-700 text-red-400">
                    <Sparkles className="h-4 w-4 mr-2" />
                    Portal do Desespero
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full border-blue-700 hover:bg-blue-900/20 text-blue-400">
          <Compass className="mr-2 h-4 w-4" />
          Explorar o Multiverso RugPullBoss
        </Button>
      </CardFooter>
    </Card>
  )
}

