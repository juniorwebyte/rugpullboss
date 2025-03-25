"use client"

import GalaxyAnimation from "@/components/galaxy-animation"
import Navbar from "@/components/navbar"
import { motion } from "framer-motion"
import { Map, Sparkles, Rocket, Star, Zap, AlertTriangle, Clock, Circle } from "lucide-react"
import { useState } from "react"

export default function MapaDimensionalPage() {
  const [activePhase, setActivePhase] = useState(1)

  const phases = [
    {
      number: 1,
      title: "Fase Lunar: Ilusão Inicial",
      description: "Criação da ilusão perfeita para atrair investidores desavisados",
      completed: true,
      milestones: [
        { text: "Copiar whitepaper de outros projetos e mudar algumas palavras", completed: true },
        { text: "Contratar influenciadores para promover o token sem revelar que são pagos", completed: true },
        { text: "Criar site com muitos gradientes e palavras como 'revolucionário' e 'disruptivo'", completed: true },
        { text: "Lançar token com liquidez mínima para manipular o preço facilmente", completed: true },
        { text: "Criar comunidade no Discord com bots fingindo ser usuários entusiasmados", completed: true },
      ],
    },
    {
      number: 2,
      title: "Fase Solar: Expansão da Bolha",
      description: "Crescimento artificial e manipulação de mercado para atrair mais vítimas",
      completed: false,
      milestones: [
        { text: "Anunciar parcerias falsas com empresas que nunca ouviram falar de nós", completed: true },
        { text: "Criar gráficos impressionantes sem dados reais para mostrar 'crescimento'", completed: true },
        { text: "Lançar programa de 'embaixadores' para que outros façam marketing de graça", completed: false },
        { text: "Anunciar listagem em exchanges de terceiro escalão", completed: false },
      ],
    },
    {
      number: 3,
      title: "Fase Estelar: Preparação para o Rug Pull",
      description: "Criação de distrações enquanto preparamos nossa saída estratégica",
      completed: false,
      milestones: [
        { text: "Anunciar 'atualizações técnicas' que nunca acontecerão", completed: false },
        { text: "Prometer auditorias que serão eternamente 'em andamento'", completed: false },
        { text: "Criar problemas técnicos falsos para justificar atrasos", completed: false },
        { text: "Lançar NFTs para extrair ainda mais dinheiro da comunidade", completed: false },
      ],
    },
    {
      number: 4,
      title: "Fase Galáctica: O Grande Finale",
      description: "Execução magistral do rug pull e desaparecimento nas sombras",
      completed: false,
      milestones: [
        { text: "Vender todos os tokens da equipe quando o preço estiver no pico", completed: false },
        { text: "Desativar todos os canais de comunicação simultaneamente", completed: false },
        { text: "Mudar identidade e começar novo projeto com outro nome", completed: false },
        { text: "Repetir o processo com lições aprendidas para maior eficiência", completed: false },
      ],
    },
  ]

  return (
    <main className="flex min-h-screen flex-col bg-black text-white relative overflow-hidden">
      <GalaxyAnimation />
      <Navbar isWalletConnected={false} />

      <section className="pt-24 pb-12 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-600">
              Mapa Dimensional
            </h1>
            <p className="text-xl text-gray-300">
              Nossa jornada cósmica para transferir seus fundos para nossas carteiras
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-purple-900/20 to-fuchsia-900/20 border border-purple-800/30 rounded-xl p-8 backdrop-blur-sm mb-12"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3 flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                    <Map className="w-32 h-32 text-purple-400 relative z-10" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-3xl font-bold mb-4 text-purple-300">Visão Cósmica</h2>
                  <p className="text-gray-300 mb-4">
                    Nosso roadmap é tão transparente quanto um buraco negro e tão previsível quanto o caos quântico.
                    Cada fase foi meticulosamente planejada para criar a ilusão de progresso enquanto nos aproximamos do
                    objetivo final: o rug pull perfeito.
                  </p>
                  <div className="flex items-center text-yellow-300 bg-yellow-900/20 p-3 rounded-lg">
                    <AlertTriangle className="w-5 h-5 mr-2 flex-shrink-0" />
                    <p className="text-sm">
                      <span className="font-bold">Aviso Cósmico:</span> Todas as datas são aproximadas e sujeitas a
                      atrasos infinitos. Qualquer semelhança com um projeto real é mera coincidência.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="mb-12">
              <div className="flex overflow-x-auto pb-4 mb-8 hide-scrollbar">
                <div className="flex space-x-4">
                  {phases.map((phase) => (
                    <button
                      key={phase.number}
                      onClick={() => setActivePhase(phase.number)}
                      className={`flex-shrink-0 px-6 py-3 rounded-full transition-all ${
                        activePhase === phase.number
                          ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                          : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50"
                      }`}
                    >
                      <div className="flex items-center">
                        {phase.completed ? <Star className="w-4 h-4 mr-2" /> : <Rocket className="w-4 h-4 mr-2" />}
                        <span>Fase {phase.number}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <motion.div
                key={activePhase}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-purple-900/20 to-fuchsia-900/20 border border-purple-800/30 rounded-xl p-6 backdrop-blur-sm"
              >
                {phases.map(
                  (phase) =>
                    phase.number === activePhase && (
                      <div key={phase.number}>
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                          <div>
                            <h3 className="text-2xl font-bold text-purple-300 flex items-center">
                              <Sparkles className="w-5 h-5 mr-2" />
                              {phase.title}
                            </h3>
                            <p className="text-gray-400 mt-1">{phase.description}</p>
                          </div>
                          <div className="mt-4 md:mt-0">
                            <span
                              className={`px-4 py-1 rounded-full text-sm ${
                                phase.completed
                                  ? "bg-green-900/30 text-green-400 border border-green-700/30"
                                  : "bg-purple-900/30 text-purple-400 border border-purple-700/30"
                              }`}
                            >
                              {phase.completed ? "Concluída" : "Em Progresso"}
                            </span>
                          </div>
                        </div>

                        <div className="mt-8">
                          <h4 className="text-xl font-semibold mb-4 text-purple-300">Marcos Cósmicos</h4>
                          <div className="space-y-4">
                            {phase.milestones.map((milestone, index) => (
                              <div
                                key={index}
                                className={`p-4 rounded-lg border ${
                                  milestone.completed
                                    ? "border-green-700/30 bg-green-900/10"
                                    : "border-purple-700/30 bg-purple-900/10"
                                }`}
                              >
                                <div className="flex items-start">
                                  <div
                                    className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mr-3 ${
                                      milestone.completed
                                        ? "bg-green-900/50 text-green-400"
                                        : "bg-purple-900/50 text-purple-400"
                                    }`}
                                  >
                                    {milestone.completed ? (
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M5 13l4 4L19 7"
                                        />
                                      </svg>
                                    ) : (
                                      <Zap className="h-4 w-4" />
                                    )}
                                  </div>
                                  <p className={`${milestone.completed ? "text-gray-300" : "text-gray-400"}`}>
                                    {milestone.text}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mt-8 p-4 border border-purple-700/30 rounded-lg bg-purple-900/10">
                          <h4 className="text-lg font-semibold mb-2 text-purple-300">Previsão Astrológica</h4>
                          <p className="text-gray-400">
                            {phase.number === 1 &&
                              "Alinhamento perfeito de Mercúrio com Júpiter permitiu a criação da ilusão perfeita."}
                            {phase.number === 2 &&
                              "Vênus em conjunção com Marte amplifica o poder de atração de novos investidores."}
                            {phase.number === 3 &&
                              "Eclipse lunar parcial criará a distração perfeita para nossas manobras nos bastidores."}
                            {phase.number === 4 &&
                              "Alinhamento planetário raro facilitará nossa fuga interdimensional com todos os fundos."}
                          </p>
                        </div>
                      </div>
                    ),
                )}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-16 p-6 border border-purple-700/30 rounded-xl bg-black/40 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-bold mb-4 flex items-center text-purple-300">
                <Sparkles className="w-5 h-5 mr-2" />
                Parcerias Interdimensionais
              </h2>
              <p className="text-gray-300 mb-6">
                Estamos orgulhosos de anunciar nossas parcerias com entidades que podem ou não existir:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "Banco Central do Vazio",
                  "Federação Galáctica de Esquemas Ponzi",
                  "Instituto de Tecnologia Inexistente",
                  "Associação Internacional de Tokens Sem Utilidade",
                ].map((partner, index) => (
                  <div key={index} className="bg-purple-900/20 border border-purple-700/30 rounded-lg p-4 text-center">
                    <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center">
                      <Star className="w-8 h-8 text-purple-300" />
                    </div>
                    <p className="text-sm text-purple-200">{partner}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="mt-16 bg-gradient-to-br from-purple-900/20 to-fuchsia-900/20 border border-purple-800/30 rounded-xl p-8 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-bold mb-6 text-purple-300 flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Cronograma de Eventos Cósmicos
              </h2>

              <div className="space-y-6">
                <div className="relative pl-8 pb-8 border-l-2 border-purple-700/50">
                  <Circle className="absolute -left-[9px] w-4 h-4 text-green-400" fill="#34d399" />
                  <div className="bg-green-900/20 border border-green-700/30 rounded-lg p-4">
                    <h3 className="text-lg font-medium text-green-400">Lançamento do Token</h3>
                    <p className="text-sm text-gray-400 mt-1">
                      Quando a lua estiver em Júpiter e Saturno em retrograde
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      * Data exata a ser determinada pelos astros e pelo momento em que tivermos investidores
                      suficientes
                    </p>
                  </div>
                </div>

                <div className="relative pl-8 pb-8 border-l-2 border-purple-700/50">
                  <Circle className="absolute -left-[9px] w-4 h-4 text-purple-400" fill="#a855f7" />
                  <div className="bg-purple-900/20 border border-purple-700/30 rounded-lg p-4">
                    <h3 className="text-lg font-medium text-purple-400">Listagem em Exchanges</h3>
                    <p className="text-sm text-gray-400 mt-1">Durante o alinhamento de Vênus com Marte</p>
                    <p className="text-xs text-gray-500 mt-2">
                      * Exchanges de quinta categoria que aceitam qualquer token por uma taxa
                    </p>
                  </div>
                </div>

                <div className="relative pl-8 pb-8 border-l-2 border-purple-700/50">
                  <Circle className="absolute -left-[9px] w-4 h-4 text-blue-400" fill="#60a5fa" />
                  <div className="bg-blue-900/20 border border-blue-700/30 rounded-lg p-4">
                    <h3 className="text-lg font-medium text-blue-400">Lançamento da Plataforma DeFi</h3>
                    <p className="text-sm text-gray-400 mt-1">Quando Netuno entrar na casa de Escorpião</p>
                    <p className="text-xs text-gray-500 mt-2">* Interface bonita sem funcionalidade real por trás</p>
                  </div>
                </div>

                <div className="relative pl-8">
                  <Circle className="absolute -left-[9px] w-4 h-4 text-red-400" fill="#f87171" />
                  <div className="bg-red-900/20 border border-red-700/30 rounded-lg p-4">
                    <h3 className="text-lg font-medium text-red-400">O Grande Rug Pull</h3>
                    <p className="text-sm text-gray-400 mt-1">Durante o eclipse solar total</p>
                    <p className="text-xs text-gray-500 mt-2">
                      * Quando o preço atingir o pico e os investidores estiverem mais confiantes
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}

