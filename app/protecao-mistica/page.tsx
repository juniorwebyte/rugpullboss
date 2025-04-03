"use client"

import GalaxyAnimation from "@/components/galaxy-animation"
import Navbar from "@/components/navbar"
import MysticProtection from "@/components/mystic-protection"
import { motion } from "framer-motion"
import { Shield, Lock, Sparkles, AlertTriangle, Skull } from "lucide-react"

export default function ProtecaoMisticaPage() {
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
              Proteção Mística
            </h1>
            <p className="text-xl text-gray-300">Defesas arcanas contra as forças manipuladoras do mercado cripto</p>
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
              <h2 className="text-3xl font-bold mb-6 text-purple-400">Visão Geral</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300">
                  No universo caótico das criptomoedas, a proteção é uma ilusão tão elaborada quanto os whitepaper de
                  projetos sem utilidade. Nossa tecnologia proprietária de "Proteção Mística" oferece a sensação de
                  segurança sem o inconveniente da segurança real.
                </p>
                <p className="text-gray-300 mt-4">
                  Desenvolvida por mestres interdimensionais da manipulação de mercado, nossa proteção é garantida* para
                  criar a ilusão perfeita de que seus investimentos estão seguros, enquanto facilitamos discretamente a
                  transferência de seus ativos para nossas carteiras.
                </p>
                <p className="text-gray-400 text-sm mt-4 italic">
                  * Nenhuma garantia é realmente oferecida. Termos e condições se aplicam (mas você nunca os lerá).
                </p>
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
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-purple-400">Tecnologias de "Proteção"</h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-gradient-to-br from-purple-900/20 to-fuchsia-900/20 border border-purple-800/30 rounded-xl p-6 backdrop-blur-sm"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-purple-600/30 flex items-center justify-center mr-3">
                      <Shield className="h-5 w-5 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold text-purple-400">Escudo Astral Anti-Auditoria™</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Nossa tecnologia proprietária repele automaticamente qualquer tentativa de auditoria externa.
                    Certificado pela Associação Interdimensional de Esquemas Ponzi.
                  </p>
                  <div className="bg-purple-900/30 border border-purple-700/30 rounded-lg p-3">
                    <p className="text-sm text-purple-300 flex items-center">
                      <Sparkles className="h-4 w-4 mr-2" />
                      <span>Eficácia comprovada em mais de 9000 rug pulls bem-sucedidos</span>
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-gradient-to-br from-purple-900/20 to-fuchsia-900/20 border border-purple-800/30 rounded-xl p-6 backdrop-blur-sm"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-fuchsia-600/30 flex items-center justify-center mr-3">
                      <Lock className="h-5 w-5 text-fuchsia-400" />
                    </div>
                    <h3 className="text-xl font-bold text-fuchsia-400">Bloqueio Quântico de Saques™</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Sistema avançado que detecta tentativas de saque e ativa automaticamente o protocolo 'Servidor em
                    Manutenção'. Funciona especialmente bem durante quedas de mercado.
                  </p>
                  <div className="bg-fuchsia-900/30 border border-fuchsia-700/30 rounded-lg p-3">
                    <p className="text-sm text-fuchsia-300 flex items-center">
                      <Sparkles className="h-4 w-4 mr-2" />
                      <span>Garantia de 99,9% de falha ao tentar sacar em momentos críticos</span>
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-gradient-to-br from-purple-900/20 to-fuchsia-900/20 border border-purple-800/30 rounded-xl p-6 backdrop-blur-sm"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-600/30 flex items-center justify-center mr-3">
                      <Sparkles className="h-5 w-5 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-400">Vigilância Cósmica Seletiva™</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Nossos oráculos místicos monitoram apenas as transações que nos beneficiam, ignorando completamente
                    qualquer atividade suspeita dos desenvolvedores.
                  </p>
                  <div className="bg-blue-900/30 border border-blue-700/30 rounded-lg p-3">
                    <p className="text-sm text-blue-300 flex items-center">
                      <Sparkles className="h-4 w-4 mr-2" />
                      <span>Monitoramento assimétrico: 100% das suas transações, 0% das nossas</span>
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="bg-gradient-to-br from-purple-900/20 to-fuchsia-900/20 border border-purple-800/30 rounded-xl p-6 backdrop-blur-sm"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-red-600/30 flex items-center justify-center mr-3">
                      <AlertTriangle className="h-5 w-5 text-red-400" />
                    </div>
                    <h3 className="text-xl font-bold text-red-400">Proteção Anti-FUD™</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Algoritmo avançado que bane automaticamente qualquer usuário que faça perguntas sobre o destino dos
                    fundos ou solicite transparência.
                  </p>
                  <div className="bg-red-900/30 border border-red-700/30 rounded-lg p-3">
                    <p className="text-sm text-red-300 flex items-center">
                      <Sparkles className="h-4 w-4 mr-2" />
                      <span>Detecção de FUD com 99% de precisão, mesmo quando são fatos verdadeiros</span>
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mb-16"
            >
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-full bg-fuchsia-600/70 flex items-center justify-center mr-4">
                  <Skull className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-fuchsia-400">Certificações Interdimensionais</h2>
              </div>

              <div className="bg-gradient-to-br from-purple-900/20 to-fuchsia-900/20 border border-purple-800/30 rounded-xl p-6 backdrop-blur-sm">
                <p className="text-gray-300 mb-6">
                  Orgulhosamente certificados por entidades que não existem em nenhuma dimensão conhecida:
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    "Conselho Galáctico de Esquemas Ponzi",
                    "Federação Interestelar de Rug Pulls",
                    "Academia de Artes Obscuras Financeiras",
                    "Ordem dos Magos da Liquidez Fantasma",
                  ].map((cert, index) => (
                    <div
                      key={index}
                      className="bg-purple-900/20 border border-purple-700/30 rounded-lg p-4 text-center"
                    >
                      <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center">
                        <Sparkles className="w-8 h-8 text-purple-300" />
                      </div>
                      <p className="text-sm text-purple-200">{cert}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-black/30 border border-purple-800/30 rounded-lg">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-sm text-gray-300">
                      <span className="text-yellow-400 font-medium">Aviso Legal:</span> Qualquer semelhança entre nossas
                      práticas de "segurança" e práticas reais de segurança é puramente coincidencial e provavelmente
                      fruto da sua imaginação. Nenhum investidor foi protegido durante a implementação destes sistemas.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="max-w-3xl mx-auto">
                <MysticProtection />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}

