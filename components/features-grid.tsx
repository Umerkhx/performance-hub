"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Activity, BarChart3, Database, Globe, Layers, Monitor, Rocket, Shield, Zap, ArrowRight } from "lucide-react"

const features = [
  {
    icon: Activity,
    title: "Real-time Monitoring",
    description: "Monitor your applications performance in real-time with advanced metrics and alerts.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Deep dive into performance data with comprehensive analytics and reporting tools.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Database,
    title: "Load Testing",
    description: "Simulate heavy loads and stress test your applications under extreme conditions.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Globe,
    title: "Global CDN Testing",
    description: "Test performance across multiple geographic locations and CDN endpoints.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Layers,
    title: "Multi-layer Analysis",
    description: "Analyze performance at every layer from frontend to database interactions.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Monitor,
    title: "Visual Regression",
    description: "Detect visual changes and performance regressions automatically.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Rocket,
    title: "Performance Optimization",
    description: "Get AI-powered recommendations for optimizing your application performance.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Shield,
    title: "Security Testing",
    description: "Combine performance testing with security analysis for comprehensive coverage.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
]

export function FeaturesGrid() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1 && !visibleCards.includes(index)) {
              setVisibleCards((prev) => [...prev, index])
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [visibleCards])

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-3xl md:text-5xl text-balance mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to test, monitor, and optimize your applications performance with cutting-edge tools and
            real-time insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isVisible = visibleCards.includes(index)

            return (
              <Card
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el
                }}
                className={`group cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl border-border/50 hover:border-primary/30 ${
                  isVisible ? "animate-slide-in-up opacity-100" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div
                    className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="font-heading font-bold text-lg group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed mb-4">
                    {feature.description}
                  </CardDescription>
                  <Button variant="ghost" size="sm" className="p-0 h-auto font-medium group-hover:text-primary">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="animate-pulse-glow">
            <Zap className="mr-2 h-5 w-5" />
            Explore All Features
          </Button>
        </div>
      </div>
    </section>
  )
}
