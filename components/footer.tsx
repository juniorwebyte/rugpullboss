"use client"

import { Facebook, Github, Heart, Instagram, Mail, Twitter, Skull } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n/language-context"

// Frases do universo RugPullBoss
const rugPullQuotes = [
  "Seus tokens são meus tokens agora.",
  "Liquidez? Que liquidez?",
  "Compre o rumor, venda a notícia... ou não venda, tanto faz.",
  "Não é perda se você não vender... porque você não conseguirá vender.",
  "Confia no processo cósmico.",
  "Sua carteira, meu tesouro.",
  "APY infinito, segurança zero.",
  "Tokenomics? Mais como token-cômicos.",
  "Roadmap para o abismo.",
  "Auditoria? Nunca ouvi falar.",
  "Sacrifique seus fundos ao altar da inovação.",
  "Quando a lua? Nunca, apenas o vazio.",
  "Whitepaper escrito nas estrelas... e nas entrelinhas.",
  "Comunidade forte, segurança fraca.",
  "HODL até o fim... que está próximo.",
  "Não é um golpe, é uma 'redistribuição não consensual de ativos'.",
  "Investimento de alto risco, recompensa de alto... Ops, sem recompensa.",
  "Seus tokens foram para uma fazenda no interior.",
  "Descentralizado na teoria, centralizado na prática.",
  "Inovação disruptiva do seu saldo bancário.",
  "DEUS MEUMQUE JUS - Seus tokens, meus direitos.",
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
              Uma jornada onírica pelo mundo das criptomoedas, onde sonhos e realidade se fundem em uma experiência
              surreal.
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
            <h3 className="text-xl font-bold text-fuchsia-400 mb-4 group-hover:text-glow">Portais Dimensionais</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-fuchsia-400 transition-colors hover:animate-float flex items-center"
                >
                  <span className="opacity-0 group-hover:opacity-100 mr-2 transition-opacity">✧</span>
                  Reino Principal
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-fuchsia-400 transition-colors hover:animate-float flex items-center"
                >
                  <span className="opacity-0 group-hover:opacity-100 mr-2 transition-opacity">✧</span>
                  Sobre o Portal
                </Link>
              </li>
              <li>
                <Link
                  href="/claim"
                  className="text-gray-300 hover:text-fuchsia-400 transition-colors hover:animate-float flex items-center"
                >
                  <span className="opacity-0 group-hover:opacity-100 mr-2 transition-opacity">✧</span>
                  Invocar Tokens
                </Link>
              </li>
              <li>
                <Link
                  href="/status"
                  className="text-gray-300 hover:text-fuchsia-400 transition-colors hover:animate-float flex items-center"
                >
                  <span className="opacity-0 group-hover:opacity-100 mr-2 transition-opacity">✧</span>
                  Estado Onírico
                </Link>
              </li>
              <li>
                <Link
                  href="/verify"
                  className="text-gray-300 hover:text-fuchsia-400 transition-colors hover:animate-float flex items-center"
                >
                  <span className="opacity-0 group-hover:opacity-100 mr-2 transition-opacity">✧</span>
                  Verificar Portal
                </Link>
              </li>
              <li>
                <Link
                  href="/universe"
                  className="text-gray-300 hover:text-fuchsia-400 transition-colors hover:animate-float flex items-center"
                >
                  <span className="opacity-0 group-hover:opacity-100 mr-2 transition-opacity">✧</span>
                  Universo RugPullBoss
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
                  Proteção Mística
                </Link>
              </li>
              <li>
                <Link
                  href="/economia-ilusoria"
                  className="text-gray-300 hover:text-fuchsia-400 transition-colors hover:animate-float flex items-center"
                >
                  <span className="opacity-0 group-hover:opacity-100 mr-2 transition-opacity">✧</span>
                  Economia Ilusória
                </Link>
              </li>
              <li>
                <Link
                  href="/mapa-dimensional"
                  className="text-gray-300 hover:text-fuchsia-400 transition-colors hover:animate-float flex items-center"
                >
                  <span className="opacity-0 group-hover:opacity-100 mr-2 transition-opacity">✧</span>
                  Mapa Dimensional
                </Link>
              </li>
              <li>
                <Link
                  href="/status"
                  className="text-gray-300 hover:text-fuchsia-400 transition-colors hover:animate-float flex items-center"
                >
                  <span className="opacity-0 group-hover:opacity-100 mr-2 transition-opacity">✧</span>
                  Estado Onírico
                </Link>
              </li>
              <li>
                <Link
                  href="/satica-cosmica"
                  className="text-gray-300 hover:text-fuchsia-400 transition-colors hover:animate-float flex items-center"
                >
                  <span className="opacity-0 group-hover:opacity-100 mr-2 transition-opacity">✧</span>
                  Sátira Cósmica
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
                  Educação Financeira
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
                  Humor Cripto
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
                  Rug Pulls Explicados
                  <span className="inline-block ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    🔍
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4 - Contato */}
          <div className="hover:bg-fuchsia-900/10 p-4 rounded-lg transition-all duration-300 group">
            <h3 className="text-xl font-bold text-fuchsia-400 mb-4 group-hover:text-glow">Comunicação Astral</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-4 w-4 text-fuchsia-400 mr-2 group-hover:animate-pulse" />
                <a
                  href="mailto:contato@rugpullboss.com"
                  className="text-gray-300 hover:text-fuchsia-400 transition-colors hover:animate-float"
                >
                  contato@rugpullboss.com
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
                Proteção Mística
              </Link>
              <Link
                href="/economia-ilusoria"
                className="text-gray-400 hover:text-fuchsia-400 transition-colors hover:animate-float"
              >
                Economia Ilusória
              </Link>
              <Link
                href="/mapa-dimensional"
                className="text-gray-400 hover:text-fuchsia-400 transition-colors hover:animate-float"
              >
                Mapa Dimensional
              </Link>
            </div>
          </div>
          <div className="text-center mt-4 text-xs text-gray-500 hover:text-gray-400 transition-colors">
            <p>Este é um projeto paródico com fins educacionais e humorísticos. Não invista dinheiro real.</p>
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

