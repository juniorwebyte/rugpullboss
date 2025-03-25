"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Lock, Eye, EyeOff, Zap, AlertTriangle, Skull, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export default function MysticProtection() {
  const [protectionLevel, setProtectionLevel] = useState(0)
  const [isProtected, setIsProtected] = useState(false)
  const [isRitualActive, setIsRitualActive] = useState(false)
  const [ritualProgress, setRitualProgress] = useState(0)
  const [showTruth, setShowTruth] = useState(false)

  const activateProtection = () => {
    if (isProtected && protectionLevel >= 3) {
      // Revelar a verdade se tentar aumentar além do nível máximo
      setShowTruth(true)
      return
    }

    if (!isProtected) {
      // Iniciar ritual para primeira proteção
      startRitual()
    } else {
      // Aumentar nível se já protegido
      setProtectionLevel((prev) => Math.min(prev + 1, 3))
    }
  }

  const startRitual = () => {
    setIsRitualActive(true)
    setRitualProgress(0)

    // Simular progresso do ritual
    const interval = setInterval(() => {
      setRitualProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsRitualActive(false)
          setIsProtected(true)
          return 100
        }
        return prev + 5
      })
    }, 120)
  }

  const protectionLevels = [
    {
      title: "Proteção Básica",
      description: "Escudo astral que supostamente protege contra rug pulls de baixa magnitude",
      icon: Shield,
      color: "text-blue-400",
      bgColor: "bg-blue-900/20",
      borderColor: "border-blue-700/30",
      truthText:
        "Este escudo é apenas uma ilusão visual. Na verdade, ele sinaliza para os manipuladores que você é um alvo fácil.",
    },
    {
      title: "Proteção Avançada",
      description: "Barreira interdimensional que detecta manipulações de mercado",
      icon: Lock,
      color: "text-purple-400",
      bgColor: "bg-purple-900/20",
      borderColor: "border-purple-700/30",
      truthText:
        "A barreira interdimensional é apenas um script que monitora seus ativos para determinar o melhor momento para o rug pull.",
    },
    {
      title: "Proteção Suprema",
      description: "Campo de força quântico que anula tentativas de liquidação forçada",
      icon: Zap,
      color: "text-fuchsia-400",
      bgColor: "bg-fuchsia-900/20",
      borderColor: "border-fuchsia-700/30",
      truthText:
        "O campo de força quântico na verdade acelera a liquidação de seus ativos enquanto você dorme tranquilo.",
    },
  ]

  const currentProtection = protectionLevels[protectionLevel] || protectionLevels[0]

  const ritualSteps = [
    "Invocando entidades protetoras...",
    "Alinhando frequências cósmicas...",
    "Criando barreiras interdimensionais...",
    "Forjando amuletos digitais...",
    "Selando proteções arcanas...",
  ]

  const currentRitualStep = Math.min(Math.floor(ritualProgress / 20), ritualSteps.length - 1)

  return (
    <Card
      className={cn(
        "border transition-all duration-500 relative overflow-hidden",
        isProtected ? currentProtection.borderColor : "border-red-700/30",
        isProtected ? currentProtection.bgColor : "bg-red-900/10",
      )}
    >
      {/* Camada de verdade oculta */}
      {showTruth && (
        <motion.div
          className="absolute inset-0 bg-black/90 z-10 p-6 flex flex-col justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Skull className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h3 className="text-red-500 text-xl font-bold text-center mb-4">A VERDADE REVELADA</h3>
          <p className="text-gray-300 text-center mb-6">
            Todas as "proteções" são falsas. Na verdade, cada nível de proteção aumenta sua vulnerabilidade ao grande
            rug pull.
          </p>

          <div className="space-y-4">
            {protectionLevels.map((level, index) => (
              <div key={index} className="bg-red-900/20 border border-red-700/30 rounded-lg p-3">
                <h4 className="text-red-400 font-medium flex items-center">
                  <level.icon className="h-4 w-4 mr-2" />
                  {level.title}
                </h4>
                <p className="text-sm text-gray-400">{level.truthText}</p>
              </div>
            ))}
          </div>

          <Button
            variant="outline"
            className="mt-6 border-red-700 text-red-400 hover:bg-red-900/20"
            onClick={() => setShowTruth(false)}
          >
            <EyeOff className="mr-2 h-4 w-4" />
            Retornar à Ilusão
          </Button>
        </motion.div>
      )}

      {/* Ritual de proteção */}
      {isRitualActive && (
        <motion.div
          className="absolute inset-0 bg-black/80 z-10 p-6 flex flex-col justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Sparkles className="h-12 w-12 text-purple-500 mx-auto mb-4 animate-pulse" />
          <h3 className="text-purple-400 text-xl font-bold text-center mb-4">Ritual de Proteção Arcana</h3>

          <div className="relative h-2 w-full bg-gray-800 rounded-full overflow-hidden mb-6">
            <motion.div
              className="absolute top-0 left-0 h-full bg-purple-600"
              initial={{ width: "0%" }}
              animate={{ width: `${ritualProgress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <p className="text-center text-purple-300 mb-2">{ritualSteps[currentRitualStep]}</p>
          <p className="text-center text-gray-400 text-sm">
            Não interrompa o ritual ou consequências cósmicas podem ocorrer
          </p>

          <div className="flex justify-center space-x-2 mt-6">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className={`h-3 w-3 rounded-full ${i <= currentRitualStep ? "bg-purple-500" : "bg-gray-700"}`}
                animate={{ scale: i === currentRitualStep ? [1, 1.2, 1] : 1 }}
                transition={{ repeat: i === currentRitualStep ? Number.POSITIVE_INFINITY : 0, duration: 1 }}
              />
            ))}
          </div>
        </motion.div>
      )}

      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle
            className={cn(
              "text-2xl font-bold transition-colors duration-300",
              isProtected ? currentProtection.color : "text-red-400",
            )}
          >
            Proteção Mística
          </CardTitle>
          {isProtected ? (
            <currentProtection.icon className={cn("h-6 w-6", currentProtection.color)} />
          ) : (
            <AlertTriangle className="h-6 w-6 text-red-400" />
          )}
        </div>
        <CardDescription className="text-gray-400">
          Defesas arcanas contra as forças manipuladoras do mercado cripto
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative h-3 w-full bg-gray-800 rounded-full overflow-hidden">
          <div
            className={cn(
              "absolute top-0 left-0 h-full transition-all duration-700 ease-out",
              isProtected ? currentProtection.bgColor : "bg-red-500",
              isProtected ? "opacity-100" : "opacity-50",
            )}
            style={{ width: `${(protectionLevel + 1) * 33.33}%` }}
          />

          {/* Partículas mágicas */}
          {isProtected && (
            <>
              <motion.div
                className={`absolute top-0 h-full w-2 ${currentProtection.color.replace("text", "bg")}`}
                style={{ left: `${(protectionLevel + 1) * 33.33}%` }}
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  width: [2, 4, 2],
                }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
              />
              <motion.div
                className="absolute top-0 h-full w-1 bg-white/50"
                style={{ left: `${(protectionLevel + 1) * 33.33 - 10}%` }}
                animate={{
                  opacity: [0, 0.5, 0],
                  left: [`${(protectionLevel + 1) * 33.33 - 10}%`, `${(protectionLevel + 1) * 33.33}%`],
                }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, repeatDelay: 1 }}
              />
            </>
          )}
        </div>

        <div className="grid grid-cols-3 gap-2 mt-4">
          {protectionLevels.map((level, index) => (
            <div
              key={index}
              className={cn(
                "p-3 rounded-lg border text-center transition-all duration-300",
                protectionLevel >= index
                  ? `${level.borderColor} ${level.bgColor}`
                  : "border-gray-700/30 bg-gray-800/20 opacity-50",
              )}
            >
              <level.icon
                className={cn("h-5 w-5 mx-auto mb-2", protectionLevel >= index ? level.color : "text-gray-500")}
              />
              <p className={cn("text-xs font-medium", protectionLevel >= index ? level.color : "text-gray-500")}>
                {level.title}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 p-4 rounded-lg bg-black/30 border border-gray-800">
          <h4 className={cn("text-sm font-medium mb-2", isProtected ? currentProtection.color : "text-gray-400")}>
            Status de Proteção
          </h4>
          <p className="text-sm text-gray-400">
            {isProtected
              ? `Sua carteira está "protegida" contra ${
                  protectionLevel === 0
                    ? "rug pulls básicos"
                    : protectionLevel === 1
                      ? "manipulações de mercado de média escala"
                      : "todas as formas conhecidas de fraude cripto"
                }`
              : "Sua carteira está vulnerável às forças cósmicas do mercado"}
          </p>

          {isProtected && (
            <div className="mt-3 flex items-center">
              <div
                className={`h-2 w-2 rounded-full ${currentProtection.color.replace("text", "bg")} mr-2 animate-pulse`}
              ></div>
              <p className={`text-xs ${currentProtection.color}`}>
                {protectionLevel === 0
                  ? "Escudo astral ativo"
                  : protectionLevel === 1
                    ? "Barreira interdimensional estável"
                    : "Campo de força quântico operacional"}
              </p>
            </div>
          )}
        </div>

        {/* Dicas satíricas */}
        {isProtected && (
          <div className="mt-2 p-3 rounded-lg bg-black/20 border border-gray-800">
            <h4 className={`text-xs font-medium mb-1 ${currentProtection.color}`}>
              <Sparkles className="h-3 w-3 inline mr-1" />
              Dica Arcana
            </h4>
            <p className="text-xs text-gray-400">
              {protectionLevel === 0
                ? "Para maximizar a proteção, mantenha seus olhos fechados enquanto o mercado despenca."
                : protectionLevel === 1
                  ? "A barreira é mais eficaz quando você ignora completamente as red flags óbvias."
                  : "O campo quântico se fortalece proporcionalmente à sua ingenuidade financeira."}
            </p>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button
          variant="outline"
          className={cn(
            "w-full transition-all duration-300",
            isProtected
              ? `border-${currentProtection.color.replace("text-", "")} hover:bg-${currentProtection.bgColor.replace("bg-", "")} ${currentProtection.color}`
              : "border-red-700 hover:bg-red-900/20 text-red-400",
          )}
          onClick={activateProtection}
          disabled={isRitualActive}
        >
          {isRitualActive ? (
            <>
              <Sparkles className="mr-2 h-4 w-4 animate-spin" />
              Ritual em Progresso...
            </>
          ) : isProtected ? (
            <>
              <Eye className="mr-2 h-4 w-4" />
              {protectionLevel < 3 ? "Aumentar Proteção" : "Revelar Verdade Oculta"}
            </>
          ) : (
            <>
              <EyeOff className="mr-2 h-4 w-4" />
              Ativar Proteção Mística
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}

