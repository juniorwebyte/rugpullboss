"use client"

import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import PortalAnimation from "@/components/portal-animation"
import FloatingElements from "@/components/floating-elements"
import UniversePopup from "@/components/universe-popup"
import Navbar from "@/components/navbar"
import { Toaster } from "@/components/ui/toaster"
import { Button } from "@/components/ui/button"
import {
  ArrowDown,
  Coins,
  Skull,
  Users,
  CheckCircle,
  Award,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Ghost,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

// Importações para lazy loading
import dynamic from "next/dynamic"

// Carregar o componente CountdownTimer de forma lazy
const CountdownTimer = dynamic(() => import("@/components/countdown-timer"), {
  loading: () => <div className="h-24 w-full animate-pulse bg-purple-900/20 rounded-lg"></div>,
  ssr: false,
})

// Adicionar o componente PerformanceToggle à página inicial
import PerformanceToggle from "@/components/performance-toggle"

// Componente para o contador de estatísticas
const StatCounter = ({ value, label, duration = 2 }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const end = Number.parseInt(value.toString().replace(/,/g, ""))
    const incrementTime = (duration * 1000) / end

    // Não iniciar o contador se o valor for muito grande para evitar problemas de performance
    if (end > 10000) {
      setCount(end)
      return
    }

    const timer = setInterval(() => {
      start += 1
      setCount(Math.floor(start))
      if (start >= end) clearInterval(timer)
    }, incrementTime)

    return () => {
      clearInterval(timer)
    }
  }, [value, duration])

  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-fuchsia-400 mb-2">{count.toLocaleString()}</div>
      <div className="text-gray-300">{label}</div>
    </div>
  )
}

// Componente para o FAQ
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-indigo-800/30 rounded-lg overflow-hidden mb-4">
      <button
        className="w-full p-4 text-left bg-indigo-900/20 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-fuchsia-300">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-fuchsia-400" />
        ) : (
          <ChevronDown className="h-5 w-5 text-fuchsia-400" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="p-4 bg-indigo-900/10"
          >
            <p className="text-gray-300">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// Componente para o Roadmap
const RoadmapItem = ({ phase, title, items, isActive }) => {
  return (
    <div
      className={`relative p-6 rounded-xl border ${isActive ? "border-fuchsia-500 bg-indigo-900/30" : "border-indigo-800/30 bg-indigo-900/10"}`}
    >
      <div
        className={`absolute -top-3 left-6 px-3 py-1 rounded-full text-sm font-medium ${isActive ? "bg-fuchsia-500 text-white" : "bg-indigo-900/50 text-fuchsia-300"}`}
      >
        {phase}
      </div>
      <h3 className="text-xl font-semibold mt-3 mb-4 text-fuchsia-300">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <CheckCircle className={`h-5 w-5 mt-0.5 ${isActive ? "text-fuchsia-400" : "text-gray-500"}`} />
            <span
              className={`${item === "Concepção da ideia do RugPullBoss" ? "text-fuchsia-200 font-medium" : "text-gray-300"}`}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

// Componente CryptoSymbol para símbolos orbitando
const CryptoSymbol = ({
  symbol,
  delay,
  distance,
  duration,
  size = 24,
  bgColor = "bg-fuchsia-600",
  textColor = "text-white",
  borderColor = "border-fuchsia-400",
}) => {
  return (
    <div
      className="absolute crypto-symbol"
      style={{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        animation: `orbit ${duration}s linear infinite`,
        animationDelay: `${delay}s`,
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <div
        className={`flex items-center justify-center w-full h-full rounded-full ${bgColor} border ${borderColor} ${textColor} font-bold animate-pulse-slow`}
        style={{ animationDuration: `${duration * 0.5}s` }}
      >
        {symbol}
      </div>
    </div>
  )
}

export default function Home() {
  const router = useRouter()
  const [walletAddress, setWalletAddress] = useState<string>("")
  const [isWalletConnected, setIsWalletConnected] = useState(false)
  const [showUniversePopup, setShowUniversePopup] = useState(false)
  const [isLowPerformanceMode, setIsLowPerformanceMode] = useState(false)

  // Use useEffect to safely access localStorage
  useEffect(() => {
    // Check if the user has seen the popup before
    const hasSeenPopup = localStorage.getItem("rugpullboss_popup_seen")
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowUniversePopup(true)
        localStorage.setItem("rugpullboss_popup_seen", "true")
      }, 3000)

      return () => clearTimeout(timer)
    }

    // Check if low performance mode is enabled
    const lowPerfMode = localStorage.getItem("lowPerformanceMode") === "true"
    setIsLowPerformanceMode(lowPerfMode)
  }, [])

  // Função para rolagem suave
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Função para o botão Conectar Carteira
  const handleConnectClick = () => {
    router.push("/claim")
  }

  return (
    <main className="flex min-h-screen flex-col bg-black text-white relative overflow-hidden">
      <PortalAnimation />
      <FloatingElements lowPerformanceMode={isLowPerformanceMode} />
      <Navbar onConnectClick={handleConnectClick} isWalletConnected={isWalletConnected} walletAddress={walletAddress} />

      {/* 1. Hero Section */}
      <section id="hero" className="relative pt-20 pb-16 md:pt-32 md:pb-24 fade-in">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center lg:text-left z-10">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-500 to-indigo-600"
              >
                🔮 RugPullBoss{" "}
                <span className="text-2xl md:text-3xl block mt-2 text-fuchsia-300">
                  O Portal para o Vazio Financeiro
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl"
              >
                Entre no reino onírico das criptomoedas com o token mais surreal do mercado. Participe do nosso airdrop
                e veja seu dinheiro transcender para uma dimensão onde as leis da economia não se aplicam!
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link href="/claim">
                  <Button
                    size="lg"
                    className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-8 hover:scale-105 transition-transform"
                  >
                    Invocar Tokens
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-fuchsia-600 text-fuchsia-400 hover:bg-indigo-900/20 hover:scale-105 transition-transform"
                  onClick={() => scrollToSection("about")}
                >
                  Explorar Dimensões
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="text-indigo-400 hover:bg-indigo-900/20 hover:scale-105 transition-transform mt-4 sm:mt-0"
                  onClick={() => setShowUniversePopup(true)}
                >
                  <Sparkles className="mr-2 h-4 w-4" /> Universo RugPullBoss
                </Button>
              </motion.div>

              {/* Countdown Timer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-8"
              >
                <CountdownTimer />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex-1 relative"
            >
              <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] mx-auto animate-float">
                <Image
                  src="/images/logo.png"
                  alt="RugPullBoss Logo"
                  width={400}
                  height={400}
                  className="rounded-full animate-glow"
                  priority
                  loading="eager"
                />

                {/* Símbolos de criptomoedas orbitando o logo */}
                <div className="absolute inset-0 w-full h-full">
                  <CryptoSymbol
                    symbol="BTC"
                    delay={0}
                    distance={150}
                    duration={15}
                    size={32}
                    bgColor="bg-amber-500"
                    textColor="text-white"
                    borderColor="border-amber-300"
                  />
                  <CryptoSymbol
                    symbol="ETH"
                    delay={2}
                    distance={150}
                    duration={18}
                    size={32}
                    bgColor="bg-indigo-600"
                    textColor="text-white"
                    borderColor="border-indigo-400"
                  />
                  <CryptoSymbol
                    symbol="BNB"
                    delay={4}
                    distance={150}
                    duration={20}
                    size={30}
                    bgColor="bg-yellow-500"
                    textColor="text-black"
                    borderColor="border-yellow-300"
                  />
                  <CryptoSymbol
                    symbol="SOL"
                    delay={6}
                    distance={150}
                    duration={17}
                    size={30}
                    bgColor="bg-gradient-to-r from-purple-600 to-blue-500"
                    textColor="text-white"
                    borderColor="border-blue-300"
                  />
                  <CryptoSymbol
                    symbol="DOT"
                    delay={8}
                    distance={150}
                    duration={19}
                    size={28}
                    bgColor="bg-pink-600"
                    textColor="text-white"
                    borderColor="border-pink-400"
                  />
                  <CryptoSymbol
                    symbol="DOGE"
                    delay={10}
                    distance={150}
                    duration={16}
                    size={28}
                    bgColor="bg-yellow-400"
                    textColor="text-black"
                    borderColor="border-yellow-200"
                  />
                  <CryptoSymbol
                    symbol="AVAX"
                    delay={12}
                    distance={150}
                    duration={21}
                    size={26}
                    bgColor="bg-red-600"
                    textColor="text-white"
                    borderColor="border-red-400"
                  />
                  <CryptoSymbol
                    symbol="RPBOSS"
                    delay={14}
                    distance={150}
                    duration={14}
                    size={36}
                    bgColor="bg-gradient-to-r from-fuchsia-600 to-purple-600"
                    textColor="text-white"
                    borderColor="border-fuchsia-300"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="h-6 w-6 text-fuchsia-400" />
        </motion.div>
      </section>

      {/* Rest of the component remains the same */}
      {/* 2. Estatísticas Section */}
      <section id="stats" className="py-12 md:py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-gradient-to-r from-indigo-900/30 to-fuchsia-900/30 rounded-2xl p-8 border border-indigo-800/30 backdrop-blur-sm"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <StatCounter value={10000} label="Sonhadores Iludidos" />
              <StatCounter value={100} label="$RPBOSS por Invocação" />
              <StatCounter value={5} label="Portais Dimensionais" />
              <StatCounter value={99} label="% de Chance de Rug Pull" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. About Section with Mascot */}
      <section id="about" className="py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <Image
                src="/images/rugpullboss-mascot.png"
                alt="RugPullBoss Mascot"
                width={500}
                height={500}
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-fuchsia-400">A Entidade RugPullBoss</h2>
              <p className="text-gray-300 text-lg mb-6">
                Nascida nas profundezas do abismo interdimensional, a entidade RugPullBoss se alimenta de expectativas e
                sonhos de riqueza fácil. Com tentáculos que se estendem através do multiverso cripto, ela promete mundos
                de abundância enquanto sutilmente drena a liquidez para o vazio.
              </p>
              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="bg-indigo-900/20 border border-indigo-800/30 rounded-lg p-4"
                >
                  <h4 className="font-semibold text-fuchsia-300 mb-2">Tokenomics "Transparentes"</h4>
                  <p className="text-gray-400">
                    98% para o criador, 2% para marketing, 0% para desenvolvimento (quem precisa disso?)
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="bg-indigo-900/20 border border-indigo-800/30 rounded-lg p-4"
                >
                  <h4 className="font-semibold text-fuchsia-300 mb-2">Invocação Interdimensional</h4>
                  <p className="text-gray-400">
                    Participe agora e receba 100 $RPBOSS tokens que podem ou não existir em nossa dimensão
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="bg-indigo-900/20 border border-indigo-800/30 rounded-lg p-4"
                >
                  <h4 className="font-semibold text-fuchsia-300 mb-2">Contrato Não-Auditado</h4>
                  <p className="text-gray-400">
                    Porque auditorias são para os fracos. Confie em nós, somos anônimos na internet!
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Features Section */}
      <section id="features" className="py-16 md:py-24 relative overflow-hidden fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4 text-fuchsia-400"
            >
              Por que RugPullBoss?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-300 max-w-2xl mx-auto"
            >
              Combinamos tecnologia blockchain com experiências oníricas para criar um ecossistema que transcende a
              realidade e leva investidores a novas dimensões de possibilidades.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(192, 38, 211, 0.3)" }}
              className="bg-gradient-to-br from-indigo-900/20 to-fuchsia-900/20 p-6 rounded-xl border border-indigo-800/30 backdrop-blur-sm"
            >
              <div className="w-12 h-12 bg-fuchsia-600 rounded-lg flex items-center justify-center mb-4">
                <Skull className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-fuchsia-300">Desaparecimento Mágico</h3>
              <p className="text-gray-400">
                Nosso token possui a habilidade única de fazer seu investimento desaparecer em um piscar de olhos. Magia
                ou código malicioso? Você decide!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(192, 38, 211, 0.3)" }}
              className="bg-gradient-to-br from-indigo-900/20 to-fuchsia-900/20 p-6 rounded-xl border border-indigo-800/30 backdrop-blur-sm"
            >
              <div className="w-12 h-12 bg-fuchsia-600 rounded-lg flex items-center justify-center mb-4">
                <Coins className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-fuchsia-300">Tokenomics Quânticos</h3>
              <p className="text-gray-400">
                Nossos tokens existem e não existem simultaneamente, até que você tente vender - aí eles definitivamente
                não existem mais.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(192, 38, 211, 0.3)" }}
              className="bg-gradient-to-br from-indigo-900/20 to-fuchsia-900/20 p-6 rounded-xl border border-indigo-800/30 backdrop-blur-sm"
            >
              <div className="w-12 h-12 bg-fuchsia-600 rounded-lg flex items-center justify-center mb-4">
                <Ghost className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-fuchsia-300">Comunidade Fantasma</h3>
              <p className="text-gray-400">
                Nossa comunidade é tão ativa que você nem consegue vê-la! Milhares de bots de Twitter e contas falsas do
                Telegram garantem que pareçamos legítimos.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Banner Section */}
      <section id="mission" className="py-16 relative overflow-hidden bg-gradient-to-b from-black to-indigo-900/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <Image
                src="/images/rugpullboss-mascot.png"
                alt="RugPullBoss Banner"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-fuchsia-400">Junte-se à Revolução RugPullBoss</h2>
              <div className="space-y-4">
                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-fuchsia-600 rounded-lg flex items-center justify-center mt-1">
                    <Skull className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-fuchsia-300">Ajuda Ilusória</h3>
                    <p className="text-gray-400">
                      Cada transação contribui para o fundo de auxílio aos nossos bolsos, garantindo impacto direto em
                      nossas contas bancárias.
                    </p>
                  </div>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-fuchsia-600 rounded-lg flex items-center justify-center mt-1">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-fuchsia-300">Comunidade Ilusória</h3>
                    <p className="text-gray-400">
                      Faça parte de uma comunidade que compartilha o amor pelo dinheiro alheio e a paixão por esquemas
                      fraudulentos.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Tokenomics Section */}
      <section id="tokenomics" className="py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-fuchsia-400">Tokenomics Oníricos</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-4">
              Distribuição "transparente" e "sustentável" do RugPullBoss
            </p>
            <Link href="/tokenomics">
              <Button
                variant="outline"
                className="border-fuchsia-600 text-fuchsia-400 hover:bg-indigo-900/20 hover:scale-105 transition-transform mt-2"
              >
                Ver Tokenomics Completo
              </Button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-900/20 to-fuchsia-900/20 p-6 rounded-xl border border-indigo-800/30 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-semibold mb-6 text-fuchsia-300">Distribuição de Tokens</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Venda Pública e Invocação</span>
                  <span className="text-fuchsia-400 font-medium">40%</span>
                </div>
                <div className="w-full bg-indigo-900/30 rounded-full h-4">
                  <div className="bg-fuchsia-500 h-4 rounded-full" style={{ width: "40%" }}></div>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-gray-300">Recompensas e Incentivos</span>
                  <span className="text-fuchsia-400 font-medium">20%</span>
                </div>
                <div className="w-full bg-indigo-900/30 rounded-full h-4">
                  <div className="bg-fuchsia-500 h-4 rounded-full" style={{ width: "20%" }}></div>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-gray-300">Reserva para Mansão em Mônaco</span>
                  <span className="text-fuchsia-400 font-medium">20%</span>
                </div>
                <div className="w-full bg-indigo-900/30 rounded-full h-4">
                  <div className="bg-fuchsia-500 h-4 rounded-full" style={{ width: "20%" }}></div>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-gray-300">Parcerias e Subornos</span>
                  <span className="text-fuchsia-400 font-medium">10%</span>
                </div>
                <div className="w-full bg-indigo-900/30 rounded-full h-4">
                  <div className="bg-fuchsia-500 h-4 rounded-full" style={{ width: "10%" }}></div>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-gray-300">Equipe e Operações</span>
                  <span className="text-fuchsia-400 font-medium">10%</span>
                </div>
                <div className="w-full bg-indigo-900/30 rounded-full h-4">
                  <div className="bg-fuchsia-500 h-4 rounded-full" style={{ width: "10%" }}></div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-900/20 to-fuchsia-900/20 p-6 rounded-xl border border-indigo-800/30 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-semibold mb-6 text-fuchsia-300">Detalhes do Token</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-fuchsia-600 rounded-lg flex items-center justify-center mt-1">
                    <Coins className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-fuchsia-300">Fornecimento Total</h4>
                    <p className="text-gray-400">5.000.000.000 $RPBOSS</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-fuchsia-600 rounded-lg flex items-center justify-center mt-1">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-fuchsia-300">Recompensas</h4>
                    <p className="text-gray-400">
                      Ao adquirir RPBOSS na página oficial, você recebe bônus exclusivos de até 20%! Quanto antes
                      participar, maior a sua perda financeira.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. Roadmap Section */}
      <section id="roadmap" className="py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-fuchsia-400">Mapa Dimensional</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6">
              Nossa jornada para transcender dimensões através do RugPullBoss
            </p>
            <Link href="/roadmap">
              <Button
                variant="outline"
                className="border-fuchsia-600 text-fuchsia-400 hover:bg-indigo-900/20 hover:scale-105 transition-transform"
              >
                Ver Mapa Dimensional Completo
              </Button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <RoadmapItem
                phase="Fase 0"
                title="Concepção (2021-2022)"
                items={[
                  "Concepção da ideia do RugPullBoss",
                  "Planejamento estratégico inicial",
                  "Primeiro post oficial no Discord de vítimas",
                  "Estabelecimento da presença inicial nas redes sociais",
                  "Início do desenvolvimento do Whitepaper",
                ]}
                isActive={true}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <RoadmapItem
                phase="Fase 1"
                title="Estudos e Viabilidade (2023-2024)"
                items={[
                  "Desenvolvimento e auditoria do contrato inteligente",
                  "Pesquisa para mansões em Mônaco e iates de luxo",
                  "Planejamento das rotas de fuga interdimensionais",
                  "Lançamento do website e redes sociais",
                ]}
                isActive={false}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <RoadmapItem
                phase="Fase 2"
                title="Lançamento (Q1 2025)"
                items={[
                  "Lançamento oficial do token RPBOSS",
                  "Início da distribuição da Invocação",
                  "Listagem em exchanges descentralizadas",
                  "Listagem em exchanges centralizadas",
                  "Implementação do sistema de drenagem de liquidez",
                ]}
                isActive={false}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section id="faq" className="py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-fuchsia-400">Perguntas Frequentemente Ignoradas</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Respostas que você não queria, para perguntas que não deveria fazer
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <FAQItem
              question="O que é o RugPullBoss?"
              answer="O RPBOSS é uma experiência imersiva de perda financeira disfarçada de token cripto. Criado para simular a sensação de ter seu tapete puxado (rug pulled) sem precisar esperar meses. Economize tempo e perca seu dinheiro instantaneamente!"
            />
            <FAQItem
              question="Como funciona a invocação?"
              answer="Nossa invocação funciona através de um complexo sistema de ilusão quântica. Você completa rituais, nos dá acesso às suas redes sociais, compartilha nosso projeto com amigos inocentes, e em troca recebe tokens que existem apenas no reino da imaginação. É como receber ar, mas com mais passos!"
            />
            <FAQItem
              question="Como funciona a listagem do RPBOSS e por que é uma grande oportunidade?"
              answer="A listagem do RPBOSS foi estrategicamente planejada para garantir que o desenvolvedor possa comprar um novo Lamborghini. É uma oportunidade única de transferir seu dinheiro diretamente para nossa carteira offshore sem todas aquelas complicações de impostos e regulamentações. Aproveite agora, antes que as autoridades descubram!"
            />
            <FAQItem
              question="O projeto tem alguma utilidade real?"
              answer="Absolutamente! O RPBOSS serve como uma poderosa ferramenta educacional sobre os perigos de investir em projetos cripto duvidosos. Considere seu investimento perdido como uma taxa de matrícula na Universidade dos Trouxas Cripto. Diploma não incluído."
            />
            <FAQItem
              question="O que acontece se eu investir todas as minhas economias no RPBOSS?"
              answer="Parabéns! Você acaba de se qualificar para nossa terapia de grupo 'Eu Perdi Tudo em um Rug Pull Óbvio'. As sessões acontecem às terças-feiras, traga seu próprio lenço para as lágrimas. Aceitamos pagamento em RPBOSS (que ironia, não?)."
            />
            <FAQItem
              question="Este projeto é uma paródia?"
              answer="Sim! O RugPullBoss é uma sátira humorística dos projetos de criptomoedas duvidosos. Não invista dinheiro real neste ou em qualquer projeto sem fazer sua própria pesquisa. Este é um projeto educacional que visa alertar sobre os perigos dos esquemas de rug pull no mundo cripto através do humor."
            />
          </div>
        </div>
      </section>

      {/* 9. CTA Section */}
      <section id="cta" className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ boxShadow: "0 0 30px rgba(192, 38, 211, 0.3)" }}
            className="bg-gradient-to-r from-indigo-900/30 to-fuchsia-900/30 rounded-2xl p-8 md:p-12 border border-indigo-800/30 backdrop-blur-sm"
          >
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-fuchsia-300">
                Pronto para o Rug Pull Definitivo?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Não perca a oportunidade de participar do maior esquema de rug pull da história! Junte-se a milhares de
                outros investidores iludidos e veja seu dinheiro desaparecer em um portal interdimensional!
              </p>
              <p className="text-yellow-400 text-sm mb-6 italic">
                * Este é um projeto paródico. Não invista dinheiro real. Qualquer semelhança com projetos reais de rug
                pull é puramente intencional, mas apenas para fins educacionais e humorísticos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/claim">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-8">
                      Invocar Tokens
                    </Button>
                  </motion.div>
                </Link>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-fuchsia-600 text-fuchsia-400 hover:bg-fuchsia-900/20"
                    onClick={() => setShowUniversePopup(true)}
                  >
                    Explorar o Universo RugPullBoss
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Toaster />
      <PerformanceToggle />
      {/* Adicionar o pop-up do universo antes do fechamento da tag main */}
      {showUniversePopup && <UniversePopup onClose={() => setShowUniversePopup(false)} />}
    </main>
  )
}

