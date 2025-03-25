"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Sparkles, Skull, Ghost } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface UniversePopupProps {
  onClose: () => void
}

export default function UniversePopup({ onClose }: UniversePopupProps) {
  const [currentTab, setCurrentTab] = useState(0)

  const tabs = [
    {
      title: "O Universo",
      icon: <Sparkles className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <p>
            Bem-vindo ao universo onírico do RugPullBoss, onde a realidade e os sonhos se fundem em uma experiência
            surreal de criptomoedas.
          </p>
          <p>
            Nosso universo é habitado por entidades interdimensionais que se alimentam de expectativas e sonhos de
            riqueza fácil, oferecendo tokens que existem simultaneamente em múltiplas dimensões - principalmente na
            dimensão da sua imaginação.
          </p>
          <div className="flex justify-center my-4">
            <Image
              src="/images/logo.png"
              alt="RugPullBoss Logo"
              width={200}
              height={200}
              className="rounded-lg shadow-lg animate-pulse-slow"
            />
          </div>
          <p className="text-sm italic text-gray-400">
            Nota: Este é um projeto paródico com fins educacionais e humorísticos. Não invista dinheiro real.
          </p>
        </div>
      ),
    },
    {
      title: "A Entidade",
      icon: <Skull className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <p>
            O RugPullBoss é uma entidade ancestral que existe nos interstícios entre dimensões, manifestando-se no mundo
            cripto como um mestre de cerimônias do caos financeiro.
          </p>
          <p>
            Com seu sorriso enigmático e olhos que brilham com a luz de mil carteiras vazias, ele promete mundos de
            riqueza enquanto sutilmente drena a liquidez para o vazio.
          </p>
          <div className="bg-indigo-900/30 p-4 rounded-lg border border-indigo-800/50 my-4">
            <h4 className="font-semibold text-indigo-300 mb-2">Poderes Conhecidos:</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-300">
              <li>Manipulação de contratos inteligentes</li>
              <li>Ilusão de liquidez</li>
              <li>Controle mental sobre influenciadores</li>
              <li>Capacidade de fazer tokens desaparecerem</li>
              <li>Mestria em criar gráficos que só vão para cima</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "O Aviso",
      icon: <Ghost className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <p className="font-semibold text-yellow-400">ATENÇÃO: Este é um projeto paródico!</p>
          <p>
            O RugPullBoss foi criado como uma sátira educacional para alertar sobre os perigos dos esquemas de "rug
            pull" no mundo das criptomoedas.
          </p>
          <p>
            Através do humor e da paródia, buscamos conscientizar sobre práticas fraudulentas comuns no espaço cripto,
            como:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-300">
            <li>Promessas irrealistas de retorno</li>
            <li>Tokenomics insustentáveis</li>
            <li>Equipes anônimas sem histórico verificável</li>
            <li>Contratos não auditados</li>
            <li>Hype excessivo sem produto real</li>
          </ul>
          <p className="text-sm italic text-gray-400 mt-4">
            Lembre-se: Sempre faça sua própria pesquisa antes de investir em qualquer projeto cripto.
          </p>
        </div>
      ),
    },
  ]

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          className="relative w-full max-w-2xl bg-gradient-to-br from-indigo-950/90 to-purple-950/90 rounded-xl border border-fuchsia-800/50 shadow-xl overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-fuchsia-800/30">
            <h2 className="text-xl font-bold text-fuchsia-300 flex items-center">
              <Sparkles className="h-5 w-5 mr-2 text-fuchsia-400" />
              Universo RugPullBoss
            </h2>
            <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors" aria-label="Fechar">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-fuchsia-800/30">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setCurrentTab(index)}
                className={`flex items-center px-4 py-3 text-sm font-medium transition-colors ${
                  currentTab === index
                    ? "text-fuchsia-300 border-b-2 border-fuchsia-500"
                    : "text-gray-400 hover:text-fuchsia-200 hover:bg-fuchsia-900/10"
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.title}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="p-6 max-h-[60vh] overflow-y-auto">{tabs[currentTab].content}</div>

          {/* Footer */}
          <div className="p-4 border-t border-fuchsia-800/30 flex justify-between items-center">
            <p className="text-xs text-gray-400">DEUS MEUMQUE JUS • {new Date().getFullYear()}</p>
            <Button onClick={onClose} className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white">
              Fechar Portal
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

