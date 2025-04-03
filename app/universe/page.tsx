import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  BookOpen,
  Sparkles,
  Shield,
  Coins,
  Map,
  AlertTriangle,
  Skull,
  Rocket,
  GalleryVertical,
  Lightbulb,
  Laugh,
  Flame,
} from "lucide-react"

import MysticProtection from "@/components/mystic-protection"
import IllusoryEconomy from "@/components/illusory-economy"
import DimensionalMap from "@/components/dimensional-map"

export const metadata: Metadata = {
  title: "Universo RugPullBoss | A Sátira Cósmica das Criptomoedas",
  description:
    "Explore o universo satírico do RugPullBoss, uma paródia cósmica do mundo das criptomoedas e seus esquemas.",
}

export default function UniversePage() {
  return (
    <main className="container mx-auto py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-500 to-blue-500 mb-4">
            O Universo RugPullBoss
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Uma sátira cósmica do mundo das criptomoedas, onde a manipulação é uma arte e os rug pulls são apenas o
            começo
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Badge variant="outline" className="py-2 px-4 border-purple-700 bg-purple-900/20 text-purple-400">
              <Sparkles className="h-4 w-4 mr-2" />
              Sátira Cósmica
            </Badge>
            <Badge variant="outline" className="py-2 px-4 border-blue-700 bg-blue-900/20 text-blue-400">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Educação Financeira
            </Badge>
            <Badge variant="outline" className="py-2 px-4 border-fuchsia-700 bg-fuchsia-900/20 text-fuchsia-400">
              <Laugh className="h-4 w-4 mr-2" />
              Humor Cripto
            </Badge>
            <Badge variant="outline" className="py-2 px-4 border-red-700 bg-red-900/20 text-red-400">
              <Skull className="h-4 w-4 mr-2" />
              Rug Pulls Explicados
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="border-purple-700/30 bg-purple-900/10">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-purple-400 flex items-center">
                <BookOpen className="h-6 w-6 mr-2" />A Lore do RugPullBoss
              </CardTitle>
              <CardDescription className="text-gray-400">
                A história por trás do mestre cósmico da manipulação financeira
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                <Image src="/images/rugpull-boss.png" alt="RugPullBoss" fill className="object-cover" />
              </div>
              <ScrollArea className="h-48 rounded-md border border-gray-800 p-4">
                <div className="space-y-4 text-gray-300">
                  <p>
                    Nas profundezas do cosmos financeiro, surgiu uma entidade conhecida como{" "}
                    <span className="text-fuchsia-400 font-medium">RugPullBoss</span>, um ser interdimensional que se
                    alimenta da ganância e do desespero dos investidores de criptomoedas.
                  </p>
                  <p>
                    Nascido da <span className="text-purple-400 font-medium">Nebulosa da Especulação</span>, o
                    RugPullBoss aperfeiçoou a arte de criar projetos aparentemente legítimos, apenas para desaparecer
                    com os fundos quando atingem seu auge.
                  </p>
                  <p>
                    Seus poderes incluem a <span className="text-blue-400 font-medium">Manipulação de Mercado</span>, a{" "}
                    <span className="text-green-400 font-medium">Ilusão de Valor</span> e o temido{" "}
                    <span className="text-red-400 font-medium">Puxão de Tapete Cósmico</span>, que deixa investidores à
                    deriva no vácuo financeiro.
                  </p>
                  <p>
                    O RugPullBoss não age sozinho. Ele comanda um exército de{" "}
                    <span className="text-yellow-400 font-medium">Influenciadores Sombrios</span>,{" "}
                    <span className="text-purple-400 font-medium">Bots de Trading</span> e{" "}
                    <span className="text-blue-400 font-medium">Desenvolvedores Anônimos</span> que executam seus planos
                    através do multiverso cripto.
                  </p>
                  <p>
                    Dizem que para cada bull market, o RugPullBoss cria mil novos tokens, cada um mais elaborado e
                    enganoso que o anterior, todos destinados a um único fim: o rug pull perfeito.
                  </p>
                </div>
              </ScrollArea>
            </CardContent>
            <CardFooter>
              <Link href="/mitologia" className="w-full">
                <Button variant="outline" className="w-full border-purple-700 hover:bg-purple-900/20 text-purple-400">
                  <Lightbulb className="mr-2 h-4 w-4" />
                  Explorar a Mitologia Completa
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="border-fuchsia-700/30 bg-fuchsia-900/10">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-fuchsia-400 flex items-center">
                <GalleryVertical className="h-6 w-6 mr-2" />
                Galeria de Entidades
              </CardTitle>
              <CardDescription className="text-gray-400">
                Os personagens que habitam o universo RugPullBoss
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="aspect-square relative overflow-hidden rounded-lg">
                    <Image
                      src="/images/crypto-master.png"
                      alt="O Mestre das Criptomoedas"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-sm font-medium text-center text-fuchsia-400">O Mestre das Criptomoedas</p>
                </div>
                <div className="space-y-2">
                  <div className="aspect-square relative overflow-hidden rounded-lg">
                    <Image src="/images/cosmic-puppet.png" alt="O Titereiro Cósmico" fill className="object-cover" />
                  </div>
                  <p className="text-sm font-medium text-center text-fuchsia-400">O Titereiro Cósmico</p>
                </div>
                <div className="space-y-2">
                  <div className="aspect-square relative overflow-hidden rounded-lg">
                    <Image src="/images/network.png" alt="O Controlador da Rede" fill className="object-cover" />
                  </div>
                  <p className="text-sm font-medium text-center text-fuchsia-400">O Controlador da Rede</p>
                </div>
                <div className="space-y-2">
                  <div className="aspect-square relative overflow-hidden rounded-lg">
                    <Image src="/images/power.png" alt="O Senhor do Poder" fill className="object-cover" />
                  </div>
                  <p className="text-sm font-medium text-center text-fuchsia-400">O Senhor do Poder</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/gallery" className="w-full">
                <Button
                  variant="outline"
                  className="w-full border-fuchsia-700 hover:bg-fuchsia-900/20 text-fuchsia-400"
                >
                  <Flame className="mr-2 h-4 w-4" />
                  Ver Todos os Personagens
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>

        <Tabs defaultValue="protection" className="mb-12">
          <TabsList className="grid grid-cols-3 bg-black/30 mb-6">
            <TabsTrigger
              value="protection"
              className="data-[state=active]:bg-blue-900/30 data-[state=active]:text-blue-400"
            >
              <Shield className="h-4 w-4 mr-2" />
              Proteção Mística
            </TabsTrigger>
            <TabsTrigger
              value="economy"
              className="data-[state=active]:bg-purple-900/30 data-[state=active]:text-purple-400"
            >
              <Coins className="h-4 w-4 mr-2" />
              Economia Ilusória
            </TabsTrigger>
            <TabsTrigger
              value="map"
              className="data-[state=active]:bg-fuchsia-900/30 data-[state=active]:text-fuchsia-400"
            >
              <Map className="h-4 w-4 mr-2" />
              Mapa Dimensional
            </TabsTrigger>
          </TabsList>

          <TabsContent value="protection">
            <MysticProtection />
          </TabsContent>

          <TabsContent value="economy">
            <IllusoryEconomy />
          </TabsContent>

          <TabsContent value="map">
            <DimensionalMap />
          </TabsContent>
        </Tabs>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-fuchsia-400 mb-6">Glossário de Termos Satíricos</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-purple-700/30 bg-purple-900/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold text-purple-400">Rug Pull</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  A arte milenar de criar um projeto, gerar hype, acumular investimentos e então desaparecer com todos
                  os fundos mais rápido que um mágico depois de um truque malsucedido.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-700/30 bg-blue-900/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold text-blue-400">FOMO Cósmico</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  O medo interdimensional de ficar de fora que faz investidores comprarem tokens no topo, momentos antes
                  do RugPullBoss executar seu plano mestre.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-700/30 bg-green-900/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold text-green-400">APY Imaginário</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Percentuais de rendimento tão astronômicos que só existem em dimensões paralelas onde as leis da
                  matemática e da economia não se aplicam.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-700/30 bg-red-900/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold text-red-400">Tokenomics Fantasiosa</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  A ciência fictícia de criar modelos econômicos para tokens que parecem sustentáveis na teoria, mas que
                  na prática são bombas-relógio programadas para implodir.
                </p>
              </CardContent>
            </Card>

            <Card className="border-yellow-700/30 bg-yellow-900/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold text-yellow-400">Liquidez Fantasma</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Pools de liquidez que aparecem cheias e robustas, mas que podem desaparecer mais rápido que um
                  fantasma ao amanhecer quando o RugPullBoss decide agir.
                </p>
              </CardContent>
            </Card>

            <Card className="border-fuchsia-700/30 bg-fuchsia-900/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold text-fuchsia-400">Whitepaper Dimensional</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Documento místico repleto de jargões técnicos incompreensíveis e promessas revolucionárias que existem
                  apenas no plano astral da imaginação.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-center text-purple-400 mb-4">A Grande Lição do RugPullBoss</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-6">
            Por trás da sátira e do humor, existe uma mensagem séria sobre os perigos reais do mundo cripto
          </p>

          <div className="p-6 rounded-lg border border-purple-700/30 bg-purple-900/10 text-left max-w-3xl mx-auto">
            <div className="flex items-start">
              <AlertTriangle className="h-8 w-8 text-yellow-400 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-2">Aviso de Realidade</h3>
                <p className="text-gray-300 mb-4">
                  O universo RugPullBoss é uma sátira, mas os perigos que ele representa são muito reais. Todos os dias,
                  investidores perdem dinheiro em esquemas fraudulentos no mundo das criptomoedas.
                </p>
                <p className="text-gray-300">
                  Nossa missão é educar através do humor, ajudando as pessoas a reconhecerem os sinais de alerta e a se
                  protegerem contra fraudes reais. Lembre-se: se parece bom demais para ser verdade, provavelmente o
                  RugPullBoss está por trás.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Link href="/gallery">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
            >
              <Rocket className="mr-2 h-5 w-5" />
              Explorar a Galeria de Paradoxos Cósmicos
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}

