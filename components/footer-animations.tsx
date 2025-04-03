"use client"

import type React from "react"

import { useEffect, useRef } from "react"

export function useFooterAnimations() {
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!footerRef.current) return

    // Adiciona classe de animação ao footer
    footerRef.current.classList.add("animate-fadeIn")

    // Seleciona todos os links do footer
    const links = footerRef.current.querySelectorAll("a")

    // Adiciona efeito de hover com animação para cada link
    links.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        link.classList.add("animate-float")
      })

      link.addEventListener("mouseleave", () => {
        link.classList.remove("animate-float")
        // Necessário para reiniciar a animação na próxima vez
        void link.offsetWidth
      })
    })

    // Seleciona todos os ícones do footer
    const icons = footerRef.current.querySelectorAll("svg")

    // Adiciona efeito de hover com animação para cada ícone
    icons.forEach((icon) => {
      icon.addEventListener("mouseenter", () => {
        icon.classList.add("animate-spinSlow")
      })

      icon.addEventListener("mouseleave", () => {
        icon.classList.remove("animate-spinSlow")
        // Necessário para reiniciar a animação na próxima vez
        void icon.offsetWidth
      })
    })

    // Seleciona todos os títulos do footer
    const titles = footerRef.current.querySelectorAll("h3")

    // Adiciona efeito de hover com animação para cada título
    titles.forEach((title) => {
      title.addEventListener("mouseenter", () => {
        title.classList.add("animate-pulse")
      })

      title.addEventListener("mouseleave", () => {
        title.classList.remove("animate-pulse")
        // Necessário para reiniciar a animação na próxima vez
        void title.offsetWidth
      })
    })

    // Cleanup function
    return () => {
      if (!footerRef.current) return

      links.forEach((link) => {
        link.removeEventListener("mouseenter", () => {})
        link.removeEventListener("mouseleave", () => {})
      })

      icons.forEach((icon) => {
        icon.removeEventListener("mouseenter", () => {})
        icon.removeEventListener("mouseleave", () => {})
      })

      titles.forEach((title) => {
        title.removeEventListener("mouseenter", () => {})
        title.removeEventListener("mouseleave", () => {})
      })
    }
  }, [])

  return footerRef
}

export function FooterAnimationProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <style jsx global>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        
        .footer-link-cosmic:hover::after {
          content: "✨";
          margin-left: 4px;
          display: inline-block;
          animation: fadeIn 0.3s ease-in-out;
        }
        
        .footer-link-education:hover::after {
          content: "📚";
          margin-left: 4px;
          display: inline-block;
          animation: fadeIn 0.3s ease-in-out;
        }
        
        .footer-link-humor:hover::after {
          content: "😂";
          margin-left: 4px;
          display: inline-block;
          animation: fadeIn 0.3s ease-in-out;
        }
        
        .footer-link-rugpull:hover::after {
          content: "🔍";
          margin-left: 4px;
          display: inline-block;
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </>
  )
}

