"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu, X, LogOut, LayoutDashboard, Bell, Users, Settings, Skull } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { logout } from "@/lib/auth"

export default function AdminNavbar() {
  const pathname = usePathname()
  const router = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Dashboard", href: "/admin/dashboard", icon: <LayoutDashboard className="h-5 w-5" /> },
    { name: "Notificações", href: "/admin/notifications", icon: <Bell className="h-5 w-5" /> },
    { name: "Usuários", href: "/admin/users", icon: <Users className="h-5 w-5" /> },
    { name: "Configurações", href: "/admin/settings", icon: <Settings className="h-5 w-5" /> },
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleLogout = async () => {
    await logout()
    router.push("/admin/login")
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-fuchsia-800/20">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          {/* Logo */}
          <div className="h-10 w-10 rounded-full overflow-hidden flex items-center justify-center">
            <Image
              src="/images/logo.png"
              alt="RugPullBoss Logo"
              width={40}
              height={40}
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-white flex items-center">
              <Skull className="h-4 w-4 mr-1 text-fuchsia-400" />
              RugPullBoss
            </span>
            <span className="text-xs text-fuchsia-400">Portal Onírico de Controle</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "px-3 py-2 text-sm rounded-md transition-colors flex items-center gap-2",
                pathname === item.href
                  ? "text-fuchsia-300 bg-indigo-900/20"
                  : "text-gray-300 hover:text-fuchsia-300 hover:bg-indigo-900/10",
              )}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-gray-300 hover:text-purple-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Desktop Logout Button */}
        <Button
          onClick={handleLogout}
          className="hidden md:flex bg-fuchsia-600 hover:bg-fuchsia-700 text-white rounded-md px-4 py-2 items-center gap-2"
        >
          <LogOut className="h-4 w-4" />
          <span>Logout</span>
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-b border-purple-900/20 animate-in slide-in-from-top-5 duration-300">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-3 py-3 text-sm rounded-md transition-colors flex items-center gap-2",
                    pathname === item.href
                      ? "text-fuchsia-300 bg-indigo-900/20"
                      : "text-gray-300 hover:text-fuchsia-300 hover:bg-indigo-900/10",
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))}
              <Button
                onClick={handleLogout}
                className="mt-2 w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white rounded-md px-4 py-2 flex items-center gap-2 justify-center"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

