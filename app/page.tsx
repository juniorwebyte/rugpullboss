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
                  The Portal to the Financial Void
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl"
              >
                Enter the dreamlike realm of cryptocurrencies with the most surreal token on the market. 
                Join our airdrop and watch your money transcend to a dimension where the laws of economics do not apply!
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
                    Invoke Tokens
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-fuchsia-600 text-fuchsia-400 hover:bg-indigo-900/20 hover:scale-105 transition-transform"
                  onClick={() => scrollToSection("about")}
                >
                  Explore Dimensions
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="text-indigo-400 hover:bg-indigo-900/20 hover:scale-105 transition-transform mt-4 sm:mt-0"
                  onClick={() => setShowUniversePopup(true)}
                >
                  <Sparkles className="mr-2 h-4 w-4" /> RugPullBoss Universe
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
              <StatCounter value={10000} label="Deluded Dreamers" />
              <StatCounter value={100} label="$RPBOSS by Invocation" />
              <StatCounter value={5} label="Dimensional Portals" />
              <StatCounter value={99} label="% Chance of Rug Pull" />
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-fuchsia-400">The RugPullBoss Entity</h2>
              <p className="text-gray-300 text-lg mb-6">
              Born from the depths of the interdimensional abyss, the RugPullBoss entity feeds on expectations and dreams of easy wealth. 
              With tentacles stretching across the crypto multiverse, it promises worlds of abundance while subtly draining liquidity into the void.
              </p>
              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="bg-indigo-900/20 border border-indigo-800/30 rounded-lg p-4"
                >
                  <h4 className="font-semibold text-fuchsia-300 mb-2">"Transparent" Tokenomics</h4>
                  <p className="text-gray-400">
                    98% for the creator, 2% for marketing, 0% for development (who needs that?)
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="bg-indigo-900/20 border border-indigo-800/30 rounded-lg p-4"
                >
                  <h4 className="font-semibold text-fuchsia-300 mb-2">Interdimensional Invocation</h4>
                  <p className="text-gray-400">
                    Join now and receive 100 $RPBOSS tokens that may or may not exist in our dimension.
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="bg-indigo-900/20 border border-indigo-800/30 rounded-lg p-4"
                >
                  <h4 className="font-semibold text-fuchsia-300 mb-2">Unaudited Contract</h4>
                  <p className="text-gray-400">
                    Because audits are for the weak. Trust us, we’re anonymous on the internet!
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
              Why RugPullBoss?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-300 max-w-2xl mx-auto"
            >
              We combine blockchain technology with dreamlike experiences to create an ecosystem that transcends reality and takes investors to new dimensions of possibilities.
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
              <h3 className="text-xl font-semibold mb-2 text-fuchsia-300">Magical Disappearance</h3>
              <p className="text-gray-400">
              Our token has the unique ability to make your investment disappear in the blink of an eye. Magic or malicious code? You decide!
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
              <h3 className="text-xl font-semibold mb-2 text-fuchsia-300">Quantum Tokenomics</h3>
              <p className="text-gray-400">
                Our tokens exist and don't exist simultaneously, until you try to sell them – then they definitely no longer exist.
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
              <h3 className="text-xl font-semibold mb-2 text-fuchsia-300">Ghost Community</h3>
              <p className="text-gray-400">
                Our community is so active, you can't even see it! Thousands of Twitter bots and fake Telegram accounts ensure we look legitimate.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-fuchsia-400">Join the RugPullBoss Revolution</h2>
              <div className="space-y-4">
                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-fuchsia-600 rounded-lg flex items-center justify-center mt-1">
                    <Skull className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-fuchsia-300">Illusory Help</h3>
                    <p className="text-gray-400">
                      Each transaction contributes to the fund that supports our pockets, ensuring a direct impact on our bank accounts.
                    </p>
                  </div>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-fuchsia-600 rounded-lg flex items-center justify-center mt-1">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-fuchsia-300">Illusory Community</h3>
                    <p className="text-gray-400">
                      Be part of a community that shares a love for other people's money and a passion for fraudulent schemes.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-fuchsia-400">Dreamlike Tokenomics</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-4">
              "Transparent" and "sustainable" distribution of RugPullBoss
            </p>
            <Link href="/tokenomics">
              <Button
                variant="outline"
                className="border-fuchsia-600 text-fuchsia-400 hover:bg-indigo-900/20 hover:scale-105 transition-transform mt-2"
              >
                View Full Tokenomics
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
              <h3 className="text-2xl font-semibold mb-6 text-fuchsia-300">Token Distribution</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Public Sale and Invocation</span>
                  <span className="text-fuchsia-400 font-medium">60%</span>
                </div>
                <div className="w-full bg-indigo-900/30 rounded-full h-4">
                  <div className="bg-fuchsia-500 h-4 rounded-full" style={{ width: "60%" }}></div>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-gray-300">Rewards and Incentives</span>
                  <span className="text-fuchsia-400 font-medium">15%</span>
                </div>
                <div className="w-full bg-indigo-900/30 rounded-full h-4">
                  <div className="bg-fuchsia-500 h-4 rounded-full" style={{ width: "15%" }}></div>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-gray-300">Reserve for Mansion in Monaco (Marketing)</span>
                  <span className="text-fuchsia-400 font-medium">15%</span>
                </div>
                <div className="w-full bg-indigo-900/30 rounded-full h-4">
                  <div className="bg-fuchsia-500 h-4 rounded-full" style={{ width: "15%" }}></div>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-gray-300">Partnerships and Bribes</span>
                  <span className="text-fuchsia-400 font-medium">5%</span>
                </div>
                <div className="w-full bg-indigo-900/30 rounded-full h-4">
                  <div className="bg-fuchsia-500 h-4 rounded-full" style={{ width: "5%" }}></div>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-gray-300">Team & Operations</span>
                  <span className="text-fuchsia-400 font-medium">5%</span>
                </div>
                <div className="w-full bg-indigo-900/30 rounded-full h-4">
                  <div className="bg-fuchsia-500 h-4 rounded-full" style={{ width: "5%" }}></div>
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
              <h3 className="text-2xl font-semibold mb-6 text-fuchsia-300">Token Details</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-fuchsia-600 rounded-lg flex items-center justify-center mt-1">
                    <Coins className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-fuchsia-300">Total Supply</h4>
                    <p className="text-gray-400">433.666.000.000.000 $RPBOSS</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-fuchsia-600 rounded-lg flex items-center justify-center mt-1">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-fuchsia-300">Rewards</h4>
                    <p className="text-gray-400">
                      By acquiring RPBOSS on the official page, you receive exclusive bonuses of up to 20%! The sooner you participate, the greater your financial loss.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-fuchsia-400">Dimensional Map</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6">
              Our journey to transcend dimensions through RugPullBoss.
            </p>
            <Link href="/roadmap">
              <Button
                variant="outline"
                className="border-fuchsia-600 text-fuchsia-400 hover:bg-indigo-900/20 hover:scale-105 transition-transform"
              >
                View Full Dimensional Map
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
                phase="Phase 0"
                title="Conception"
                items={[
                  "Conception of the RugPullBoss Idea",  
                  "Initial Strategic Planning", 
                  "First Official Post on Discord for Victims",  
                  "Establishment of Initial Social Media Presence",  
                  "Start of Whitepaper Development",
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
                phase="Phase 1"
                title="Studies and Feasibility"
                items={[
                  "Development and audit of the smart contract",  
                  "Research for mansions in Monaco and luxury yachts",  
                  "Planning of interdimensional escape routes",  
                  "Launch of the website and social media",
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
                phase="Phase 2"
                title="Launch"
                items={[
                  "Official launch of the RPBOSS token",  
                  "Start of Invocation distribution",  
                  "Listing on decentralized exchanges",  
                  "Listing on centralized exchanges",  
                  "Implementation of liquidity drainage system",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-fuchsia-400">Frequently Ignored Questions</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Answers you didn’t want, to questions you shouldn’t ask
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <FAQItem
              question="What is RugPullBoss?"
              answer="RPBOSS is an immersive experience of financial loss disguised as a crypto token. Created to simulate the feeling of having your rug pulled without having to wait months. Save time and lose your money instantly!"
            />
            <FAQItem
              question="How does the invocation work?"
              answer="Our invocation works through a complex system of quantum illusion. You complete rituals, grant us access to your social media, share our project with unsuspecting friends, and in return, receive tokens that only exist in the realm of imagination. It's like receiving air, but with more steps!"
            />
            <FAQItem
              question="How does the RPBOSS listing work and why is it a great opportunity?"
              answer="The listing of RPBOSS was strategically planned to ensure the developer can buy a new Lamborghini. It's a unique opportunity to transfer your money directly to our offshore wallet without all those pesky tax and regulatory complications. Take advantage now, before the authorities find out!"
            />
            <FAQItem
              question="Does the project have any real utility?"
              answer="Absolutely! RPBOSS serves as a powerful educational tool about the dangers of investing in dubious crypto projects. Consider your investment lost as a tuition fee to the University of Crypto Suckers. Diploma not included."
            />
            <FAQItem
              question="What happens if I invest all my savings in RPBOSS?"
              answer="Congratulations! You’ve just qualified for our group therapy session 'I Lost Everything in an Obvious Rug Pull.' Sessions take place on Tuesdays, bring your own tissue for the tears. We accept payment in RPBOSS (how ironic, right?)."
            />
            <FAQItem
              question="Is this project a parody?"
              answer="Yes! RugPullBoss is a humorous satire of questionable cryptocurrency projects. Do not invest real money in any project without doing your own research. This is an educational project aimed at raising awareness about the dangers of rug pull schemes in the crypto world through humor."
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
                Ready for the Ultimate Rug Pull?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Don’t miss the opportunity to join the biggest rug pull scheme in history! Join thousands of other deluded investors and watch your money disappear into an interdimensional portal!
              </p>
              <p className="text-yellow-400 text-sm mb-6 italic">
                *This is a parody project. Invest real money. Any resemblance to real rug pull projects is purely intentional, but only for 'FINANCIAL' educational and humorous purposes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/claim">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-8">
                      Invoke Tokens
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
                    Explore the RugPullBoss Universe
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

