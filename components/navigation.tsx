"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Menu, X, Zap, Home, ImageIcon, BookOpen, Users, Mail, BarChart3 } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home", icon: Home, description: "Heavy animations" },
    { href: "/gallery", label: "Gallery", icon: ImageIcon, description: "ISR showcase" },
    { href: "/blog", label: "Blog", icon: BookOpen, description: "SSR content" },
    { href: "/about", label: "About", icon: Users, description: "Interactive elements" },
    { href: "/contact", label: "Contact", icon: Mail, description: "Dynamic forms" },
    { href: "/dashboard", label: "Dashboard", icon: BarChart3, description: "Real-time metrics" },
  ]

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative p-2 bg-gradient-to-br from-primary to-accent rounded-lg animate-pulse-glow group-hover:scale-110 transition-transform duration-300">
              <Zap className="h-6 w-6 text-primary-foreground animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-lg opacity-0 group-hover:opacity-20 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-black text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                PerformanceHub
              </span>
              <span className="text-xs text-muted-foreground font-medium">Heavy Testing Platform</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 rounded-lg transition-all duration-300 group ${
                  isActive(item.href)
                    ? "text-primary bg-primary/10 shadow-md"
                    : "text-foreground hover:text-primary hover:bg-secondary/50"
                }`}
              >
                <div className="flex items-center gap-2">
                  <item.icon className="h-4 w-4" />
                  <span className="font-medium">{item.label}</span>
                  {isActive(item.href) && (
                    <Badge variant="secondary" className="text-xs animate-pulse">
                      Active
                    </Badge>
                  )}
                </div>
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-background/95 backdrop-blur-sm border border-border rounded-lg px-2 py-1 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                  {item.description}
                </div>
              </Link>
            ))}

            <div className="ml-4 flex items-center gap-2">
              <Button variant="outline" size="sm" className="bg-transparent">
                Sign In
              </Button>
              <Button className="animate-pulse-glow relative overflow-hidden">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="relative overflow-hidden">
              <div className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}>
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </div>
            </Button>
          </div>
        </div>

        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-background/95 backdrop-blur-md border-t border-border/50 rounded-b-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-300 ${
                    isActive(item.href)
                      ? "text-primary bg-primary/10 shadow-md"
                      : "text-foreground hover:text-primary hover:bg-secondary/50"
                  }`}
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <item.icon className="h-5 w-5" />
                  <div className="flex-1">
                    <div className="font-medium">{item.label}</div>
                    <div className="text-xs text-muted-foreground">{item.description}</div>
                  </div>
                  {isActive(item.href) && (
                    <Badge variant="secondary" className="text-xs">
                      Active
                    </Badge>
                  )}
                </Link>
              ))}

              <div className="px-3 py-2 space-y-2">
                <Button variant="outline" className="w-full bg-transparent">
                  Sign In
                </Button>
                <Button className="w-full animate-pulse-glow">Get Started</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
