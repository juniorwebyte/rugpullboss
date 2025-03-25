"use client"

import GalaxyAnimation from "@/components/galaxy-animation"
import Navbar from "@/components/navbar"
import IllusoryEconomy from "@/components/illusory-economy"
import { motion } from "framer-motion"
import { Coins, TrendingUp, Flame, DollarSign, PieChart, Sparkles, AlertTriangle } from "lucide-react"

export default function EconomiaIlusoriaPage() {
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
              Economia Ilusória
            </h1>
            <p className="text-xl text-gray-300">
              Onde os números são inventados e o valor é tão real quanto unicórnios financeiros
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
                    <Coins className="w-32 h-32 text-purple-400 relative z-10" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-3xl font-bold mb-4 text-purple-300">$RUGPULL Token</h2>
                  <p className="text-gray-300 mb-4">
                    O $RUGPULL é um token revolucionário baseado em tecnologia de ponta para transferir fundos
                    diretamente das suas carteiras para as nossas. Com um suprimento inicial de 1 quadrilhão de tokens e
                    uma emissão infinita, garantimos que seu investimento será diluído mais rápido que gelo no sol.
                  </p>
                  <div className="flex items-center text-yellow-300 bg-yellow-900/20 p-3 rounded-lg">
                    <AlertTriangle className="w-5 h-5 mr-2 flex-shrink-0" />
                    <p className="text-sm">
                      <span className="font-bold">Aviso Cósmico:</span> Qualquer expectativa de retorno financeiro é
                      puramente alucinatória e provavelmente resultado de consumo excessivo de substâncias psicodélicas.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center mb-8"
              >
                <div className="w-12 h-12 rounded-full bg-purple-600/70 flex items-center justify-center mr-4">
                  <PieChart className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-purple-400">Distribuição Mágica de Tokens</h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-gradient-to-br from-purple-900/20 to-fuchsia-900/20 border border-purple-800/30 rounded-xl p-6 backdrop-blur-sm"
                >
                  <div className="relative h-64 w-full">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-48 h-48 rounded-full bg-gradient-to-br from-purple-900/50 to-pink-900/50 border border-purple-500/30"></div>
                      <div className="absolute w-36 h-36 rounded-full bg-gradient-to-br from-pink-900/50 to-red-900/50 border border-pink-500/30"></div>
                      <div className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-red-900/50 to-orange-900/50 border border-red-500/30"></div>
                      <div className="absolute w-12 h-12 rounded-full bg-gradient-to-br from-orange-900/50 to-yellow-900/50 border border-orange-500/30"></div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-gradient-to-br from-purple-900/20 to-fuchsia-900/20 border border-purple-800/30 rounded-xl p-6 backdrop-blur-sm"
                >
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-4 h-4 mt-1 rounded-full bg-purple-500 mr-3"></div>
                      <div>
                        <p className="font-medium text-purple-300">Equipe & Fundadores (75%)</p>
                        <p className="text-sm text-gray-400">
                          Porque nós merecemos a maior parte por criar este esquema brilhante.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-4 h-4 mt-1 rounded-full bg-pink-500 mr-3"></div>
                      <div>
                        <p className="font-medium text-purple-300">Marketing & Influencers (15%)</p>
                        <p className="text-sm text-gray-400">
                          Para pagar influenciadores que promovem nosso token sem revelar que são pagos.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-4 h-4 mt-1 rounded-full bg-red-500 mr-3"></div>
                      <div>
                        <p className="font-medium text-purple-300">Desenvolvimento (5%)</p>
                        <p className="text-sm text-gray-400">
                          Uma pequena parte para copiar e colar código de outros projetos.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-4 h-4 mt-1 rounded-full bg-orange-500 mr-3"></div>
                      <div>
                        <p className="font-medium text-purple-300">Comunidade (5%)</p>
                        <p className="text-sm text-gray-400">
                          O mínimo possível para os investidores, porque quem precisa deles depois do lançamento?
                        </p>
                      </div>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>

            <div className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center mb-8"
              >
                <div className="w-12 h-12 rounded-full bg-fuchsia-600/70 flex items-center justify-center mr-4">
                  <Flame className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-fuchsia-400">Queima Astral de Tokens</h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="bg-gradient-to-br from-purple-900/20 to-fuchsia-900/20 border border-purple-800/30 rounded-xl p-6 backdrop-blur-sm"
                >
                  <h4 className="text-lg font-medium text-fuchsia-300 mb-3">Queima Anunciada</h4>
                  <p className="text-gray-400">
                    Anunciamos grandes eventos de queima de tokens para bombear o preço, mas na verdade enviamos os
                    tokens para uma carteira que chamamos de "carteira de queima" mas que temos acesso total.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="bg-gradient-to-br from-purple-900/20 to-fuchsia-900/20 border border-purple-800/30 rounded-xl p-6 backdrop-blur-sm"
                >
                  <h4 className="text-lg font-medium text-fuchsia-300 mb-3">Queima Reversa</h4>
                  <p className="text-gray-400">
                    Nossa tecnologia inovadora de "queima reversa" na verdade cria mais tokens a cada transação, mas
                    chamamos de queima porque soa melhor no marketing.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="bg-gradient-to-br from-purple-900/20 to-fuchsia-900/20 border border-purple-800/30 rounded-xl p-6 backdrop-blur-sm md:col-span-2"
                >
                  <h4 className="text-lg font-medium text-fuchsia-300 mb-3">Estatísticas de Queima</h4>
                  <div className="flex flex-col sm:flex-row justify-between gap-4">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-fuchsia-400">-1.000.000</p>
                      <p className="text-sm text-gray-400">Tokens Queimados</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-fuchsia-400">+10.000.000.000</p>
                      <p className="text-sm text-gray-400">Tokens Criados</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-fuchsia-400">∞</p>
                      <p className="text-sm text-gray-400">Inflação Anual</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex items-center mb-8"
              >
                <div className="w-12 h-12 rounded-full bg-blue-600/70 flex items-center justify-center mr-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-blue-400">Utilidade Imaginária</h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="bg-gradient-to-br from-purple-900/20 to-fuchsia-900/20 border border-purple-800/30 rounded-xl p-6 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-purple-300" />
                  </div>
                  <h4 className="text-lg font-medium text-purple-300 mb-2">Governança Ilusória</h4>
                  <p className="text-gray-400">
                    Dê sua opinião em votações que nunca implementaremos. Sua voz importa (mas suas sugestões não).
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  className="bg-gradient-to-br from-purple-900/20 to-fuchsia-900/20 border border-purple-800/30 rounded-xl p-6 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-purple-300" />
                  </div>
                  <h4 className="text-lg font-medium text-purple-300 mb-2">Staking Unidirecional</h4>
                  <p className="text-gray-400">
                    Bloqueie seus tokens para sempre em nosso contrato de staking com taxas de saída de 99.9% e receba
                    recompensas imaginárias.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                  className="bg-gradient-to-br from-purple-900/20 to-fuchsia-900/20 border border-purple-800/30 rounded-xl p-6 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center">
                    <Coins className="w-6 h-6 text-purple-300" />
                  </div>
                  <h4 className="text-lg font-medium text-purple-300 mb-2">NFTs Inexistentes</h4>
                  <p className="text-gray-400">
                    Use $RUGPULL para comprar NFTs que prometemos lançar mas nunca lançaremos, com utilidades que
                    mudarão o mundo.
                  </p>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="mb-16"
            >
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-full bg-purple-600/70 flex items-center justify-center mr-4">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-purple-400">Previsões Econômicas Astrológicas</h2>
              </div>

              <div className="relative h-64 w-full overflow-hidden rounded-lg border border-purple-700/30 bg-gradient-to-br from-purple-900/20 to-fuchsia-900/20 backdrop-blur-sm">
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-4xl md:text-6xl font-bold text-purple-400 mb-2">$∞</p>
                    <p className="text-xl text-purple-300">Preço Alvo (Confia)</p>
                  </div>
                </div>
                <div className="absolute bottom-4 left-0 w-full text-center">
                  <p className="text-sm text-gray-400">*Baseado em zero análise fundamentalista ou técnica</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              <div className="max-w-3xl mx-auto">
                <IllusoryEconomy />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}

