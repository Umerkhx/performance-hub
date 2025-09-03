"use client"

import { useEffect, useRef } from "react"
import { MessageCircle, Phone, Mail } from "lucide-react"

export function ContactHero() {
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
      className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${6 + Math.random() * 3}s`,
            }}
          >
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="">
            <h1 className="text-5xl md:text-6xl font-heading font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x">
              {"Get in Touch"}
            </h1>
          </div>

          <div className=" delay-200">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {
                "Ready to supercharge your performance? Our team of experts is here to help you achieve lightning-fast results."
              }
            </p>
          </div>

          <div className=" delay-400">
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { icon: MessageCircle, label: "Live Chat", color: "text-blue-500" },
                { icon: Phone, label: "24/7 Support", color: "text-green-500" },
                { icon: Mail, label: "Email Response", color: "text-purple-500" },
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
        </div>
      </div>
    </section>
  )
}
