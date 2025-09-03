"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Target, Users } from "lucide-react"

export function AboutHero() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = heroRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-slow opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          >
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="animate-on-scroll opacity-0 translate-y-8">
            <h1 className="text-5xl md:text-7xl font-heading font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x">
              {"Redefining Performance"}
            </h1>
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-8 delay-200">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {
                "We are a team of passionate engineers dedicated to pushing the boundaries of web performance testing and optimization."
              }
            </p>
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-8 delay-400">
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              {[
                { icon: Zap, label: "Lightning Fast", color: "text-yellow-500" },
                { icon: Target, label: "Precision Testing", color: "text-blue-500" },
                { icon: Users, label: "Expert Team", color: "text-green-500" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm hover:bg-secondary transition-all duration-300 hover:scale-105"
                >
                  <item.icon className={`h-5 w-5 ${item.color}`} />
                  <span className="font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-8 delay-600">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="animate-pulse-glow">
                {"Our Story"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent">
                {"Meet the Team"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
