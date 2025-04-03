import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import ClientProvider from "@/components/client-provider"
import PortalAnimation from "@/components/portal-animation"
import DreamSymbols from "@/components/dream-symbols"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import PerformanceToggle from "@/components/performance-toggle"
import { LanguageProvider } from "@/lib/i18n/language-context"
import { FooterAnimationProvider } from "@/components/footer-animation-provider"

// Otimizar o carregamento da fonte
const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Usar font-display: swap para melhorar o CLS
  preload: true,
})

export const metadata: Metadata = {
  title: "RugPullBoss - Portal para o Vazio Financeiro",
  description: "Sistema de reivindicação de AirDrop com tema onírico para distribuição manual de tokens RugPullBoss",
  // Adicionar meta tags para melhorar a performance
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#000000",
  manifest: "/manifest.json",
  icons: {
    icon: [
      {
        url: "/images/logo.png",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/images/logo.png",
        type: "image/png",
      },
    ],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Adicionar preconnect para domínios externos */}
        <link rel="preconnect" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
        <link rel="dns-prefetch" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
        <link rel="preconnect" href="https://v0.blob.com" />
        <link rel="dns-prefetch" href="https://v0.blob.com" />
        <link rel="icon" href="/images/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
      </head>
      <body className={inter.className}>
        <PortalAnimation />
        <DreamSymbols />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <ClientProvider>
              <div className="flex flex-col min-h-screen">
                <div className="flex-grow">
                  {children}
                  <ScrollToTop />
                  <PerformanceToggle />
                </div>
                <Footer />
              </div>
            </ClientProvider>
          </LanguageProvider>
          <FooterAnimationProvider />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'