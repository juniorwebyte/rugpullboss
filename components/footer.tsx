"use client"

import { Facebook, Github, Heart, Instagram, Mail, Twitter, Skull } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n/language-context"

// Frases do universo RugPullBoss
const rugPullQuotes = [
  "Your tokens are my tokens now.",  
  "Liquidity? What liquidity?",  
  "Buy the rumor, sell the news... or don’t sell, whatever.",  
  "It’s not a loss if you don’t sell… because you won’t be able to sell.",  
  "Trust the cosmic process.",  
  "Your wallet, my treasure.",  
  "Infinite APY, zero security.",  
  "Tokenomics? More like token-comics.",  
  "Roadmap to the abyss.",  
  "Audit? Never heard of it.",  
  "Sacrifice your funds on the altar of innovation.",  
  "When moon? Never, only the void.",  
  "Whitepaper written in the stars... and between the lines.",  
  "Strong community, weak security.",  
  "HODL till the end... which is near.", 
  "It’s not a scam, it’s a 'non-consensual asset redistribution.",  
  "High-risk investment, high rewar— Oops, no reward.",  
  "Your tokens went to a farm upstate.", 
  "Decentralized in theory, centralized in practice.",  
  "Disruptive innovation for your bank balance." , 
  "DEUS MEUMQUE JUS - Your tokens, my rights.",
]

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gradient-to-b from-transparent to-indigo-950/30 border-t border-fuchsia-800/30 backdrop-blur-sm pt-12 pb-6 relative">
      <div className="container mx-auto px-4">
        {/* Logo centralizada no topo do rodapé */}
        <div className="flex justify-center mb-8">
          <div className="relative w-40 h-40 animate-float hover:animate-pulse transition-all duration-300">
            <Image
              src="/images/rugpull-logo.png"
              alt="RugPullBoss Logo"
              width={160}
              height={160}
              className="animate-glow"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Coluna 1 - Sobre */}
          <div className="hover:bg-fuchsia-900/10 p-4 rounded-lg transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-2 group-hover:animate-spin-slow">🔮</span>
              <h3 className="text-xl font-bold text-fuchsia-400 group-hover:text-glow">RugPullBoss</h3>
            </div>
            <p className="text-gray-300 mb-4 group-hover:text-fuchsia-200 transition-colors">
              A oneiric journey through the world of cryptocurrencies, where dreams and reality merge into a surreal experience.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors hover:animate-spin-slow"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors hover:animate-spin-slow"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors hover:animate-spin-slow"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors hover:animate-spin-slow"
              >
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Coluna 2 - Links Rápidos */}
          <div className="hover:bg-fuchsia-900/10 p-4 rounded-lg transition-all duration-300 group">
            <h3 className="text-xl font-bold text-fuchsia-400 mb-4 group-hover:text-glow">Dimensional Portals</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-fuchsia-400 transition-colors hover:animate-float flex items-center"
                >
                  <span className="opacity-0 group-hover:opacity-100 mr-2 transition-opacity">✧</span>
                  Main Kingdom
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-fuchsia-400 transition-colors hover:animate-float flex items-center"
                >
                  <span className="opacity-0 group-hover:opacity-100 mr-2 transition-opacity">✧</span>
                  About the Portal
                </Link>
              </li>
              <li>
                <Link
                  href="/claim"
                  className="text-gray-300 hover:text-fuchsia-400 transition-colors hover:animate-float flex items-center"
                >
                  <span className="opacity-0 group-hover:opacity-100 mr-2 transition-opacity">✧</span>
                  Summon Tokens
                </Link>
              </li>
              <li>
                <Link
                  href="/status"
                  className="text-gray-300 hover:text-fuchsia-400 transition-colors hover:animate-float flex items-center"
                >
                  <span className="opacity-0 group-hover:opacity-100 mr-2 transition-opacity">✧</span>
                  Oneiric State
                </Link>
              </li>
              <li>
                <Link
                  href="/verify"
                  className="text-gray-300 hover:text-fuchsia-400 transition-colors hover:animate-float flex items-center"
                >
                  <span className="opacity-0 group-hover:opacity-100 mr-2 transition-opacity">✧</span>
                  Check Portal
                </Link>
              </li>
              <li>
                <Link
                  href="/universe"
                  className="text-gray-300 hover:text-fuchsia-400 transition-colors hover:animate-float flex items-center"
                >
                  <span className="opacity-0 group-hover:opacity-100 mr-2 transition-opacity">✧</span>
                  RugPullBoss Universe
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Recursos */}
          <div className="hover:bg-fuchsia-900/10 p-4 rounded-lg transition-all duration-300 group">
            <h3 className="text-xl font-bold text-fuchsia-400 mb-4 group-hover:text-glow">Grimório</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/protecao-mistica"
                  className="text-gray-300 hover:text-fuchsia-400 transition-colors hover:animate-float flex items-center"
                >
                  <span className="opacity-0 group-hover:opacity-100 mr-2 transition-opacity">✧</span>
                  Mystic Protection
                </Link>
              </li>
              <li>
                <Link
                  href="/economia-ilusoria"
                  className="text-gray-300 hover:text-fuchsia-400 transition-colors hover:animate-float flex items-center"
                >
                  <span className="opacity-0 group-hover:opacity-100 mr-2 transition-opacity">✧</span>
                  Illusory Economy
                </Link>
              </li>
              <li>
                <Link
                  href="/mapa-dimensional"
                  className="text-gray-300 hover:text-fuchsia-400 transition-colors hover:animate-float flex items-center"
                >
                  <span className="opacity-0 group-hover:opacity-100 mr-2 transition-opacity">✧</span>
                  Dimensional Map
                </Link>
              </li>
              <li>
                <Link
                  href="/status"
                  className="text-gray-300 hover:text-fuchsia-400 transition-colors hover:animate-float flex items-center"
                >
                  <span className="opacity-0 group-hover:opacity-100 mr-2 transition-opacity">✧</span>
                  Oneiric State
                </Link>
              </li>
              <li>
                <Link
                  href="/satica-cosmica"
                  className="text-gray-300 hover:text-fuchsia-400 transition-colors hover:animate-float flex items-center"
                >
                  <span className="opacity-0 group-hover:opacity-100 mr-2 transition-opacity">✧</span>
                  Cosmic Satire
                  <span className="inline-block ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    ✨
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/educacao-financeira"
                  className="text-gray-300 hover:text-fuchsia-400 transition-colors hover:animate-float flex items-center"
                >
                  <span className="opacity-0 group-hover:opacity-100 mr-2 transition-opacity">✧</span>
                  Financial Education
                  <span className="inline-block ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    📚
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/humor-cripto"
                  className="text-gray-300 hover:text-fuchsia-400 transition-colors hover:animate-float flex items-center"
                >
                  <span className="opacity-0 group-hover:opacity-100 mr-2 transition-opacity">✧</span>
                  Crypto Humor
                  <span className="inline-block ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    😂
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/rug-pulls-explicados"
                  className="text-gray-300 hover:text-fuchsia-400 transition-colors hover:animate-float flex items-center"
                >
                  <span className="opacity-0 group-hover:opacity-100 mr-2 transition-opacity">✧</span>
                  Rug Pulls Explained
                  <span className="inline-block ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    🔍
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4 - Contato */}
          <div className="hover:bg-fuchsia-900/10 p-4 rounded-lg transition-all duration-300 group">
            <h3 className="text-xl font-bold text-fuchsia-400 mb-4 group-hover:text-glow">Astral Communication</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-4 w-4 text-fuchsia-400 mr-2 group-hover:animate-pulse" />
                <a
                  href="mailto:contato@rugpullboss.com"
                  className="text-gray-300 hover:text-fuchsia-400 transition-colors hover:animate-float"
                >
                  contact@rugpullboss.com
                </a>
              </li>
              <li className="mt-4">
                <Link
                  href="#"
                  className="inline-flex items-center bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-4 py-2 rounded-lg transition-colors hover:animate-pulse group-hover:shadow-glow"
                >
                  <Heart className="h-4 w-4 mr-2" /> {t("footer.contact.donate")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-fuchsia-800/30 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0 flex items-center group hover:text-fuchsia-300 transition-colors">
              <Skull className="h-4 w-4 mr-2 text-fuchsia-500 group-hover:animate-pulse" />
              &copy; {new Date().getFullYear()} 🔮 RugPullBoss. DEUS MEUMQUE JUS.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link
                href="/protecao-mistica"
                className="text-gray-400 hover:text-fuchsia-400 transition-colors hover:animate-float"
              >
                Mystic Protection
              </Link>
              <Link
                href="/economia-ilusoria"
                className="text-gray-400 hover:text-fuchsia-400 transition-colors hover:animate-float"
              >
                Illusory Economy
              </Link>
              <Link
                href="/mapa-dimensional"
                className="text-gray-400 hover:text-fuchsia-400 transition-colors hover:animate-float"
              >
                Dimensional Map
              </Link>
            </div>
          </div>
          <div className="text-center mt-4 text-xs text-gray-500 hover:text-gray-400 transition-colors">
            <p>This is a parody project for educational and humorous purposes. Do not invest real money.</p>
          </div>
        </div>
        {/* Estilos de animação */}
        <StyleSheet />
      </div>
    </footer>
  )
}

// Estilos CSS para animações
const styles = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-5px); }
    100% { transform: translateY(0px); }
  }
  
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  .animate-fadeIn {
    animation: fadeIn 0.3s ease-in-out;
  }
  
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  
  .animate-spin-slow {
    animation: spin-slow 3s linear infinite;
  }
  
  .text-glow {
    text-shadow: 0 0 10px rgba(192, 38, 211, 0.7), 0 0 20px rgba(138, 43, 226, 0.5);
    animation: textGlow 2s infinite ease-in-out;
  }
  
  @keyframes textGlow {
    0%, 100% {
      text-shadow: 0 0 10px rgba(192, 38, 211, 0.7), 0 0 20px rgba(138, 43, 226, 0.5);
    }
    50% {
      text-shadow: 0 0 15px rgba(192, 38, 211, 0.9), 0 0 30px rgba(138, 43, 226, 0.7);
    }
  }
  
  .shadow-glow {
    box-shadow: 0 0 10px rgba(192, 38, 211, 0.7), 0 0 20px rgba(138, 43, 226, 0.3);
  }
`

// Adicione os estilos ao componente
const StyleSheet = () => (
  <style jsx global>
    {styles}
  </style>
)

