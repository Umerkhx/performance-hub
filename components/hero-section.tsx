"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Cpu, Gauge, Zap, TrendingUp } from "lucide-react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [metrics, setMetrics] = useState({
    requests: 0,
    latency: 0,
    throughput: 0,
    uptime: 0,
  })

  useEffect(() => {
    setMounted(true)

    // Animate metrics on load
    const animateMetrics = () => {
      const targets = { requests: 1247832, latency: 23, throughput: 15420, uptime: 99.97 }
      const duration = 2000
      const steps = 60
      const stepDuration = duration / steps

      let step = 0
      const interval = setInterval(() => {
        step++
        const progress = step / steps

        setMetrics({
          requests: Math.floor(targets.requests * progress),
          latency: Math.floor(targets.latency * progress),
          throughput: Math.floor(targets.throughput * progress),
          uptime: Math.min(targets.uptime * progress, 99.97),
        })

        if (step >= steps) clearInterval(interval)
      }, stepDuration)

      return () => clearInterval(interval)
    }

    const cleanup = animateMetrics()
    return cleanup
  }, [])

  if (!mounted) return null

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary to-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full animate-float"></div>
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-in-up">
          <h1 className="font-heading font-black text-4xl md:text-6xl lg:text-7xl text-balance mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              Performance
            </span>
            <br />
            Testing Platform
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-slide-in-up stagger-1">
            Experience the ultimate performance testing environment with heavy animations, rich media content, and
            real-time metrics visualization.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-in-up stagger-2">
            <Button size="lg" className="text-lg px-8 py-4 animate-pulse-glow">
              Start Testing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-transparent">
              View Demo
            </Button>
          </div>
        </div>

        {/* Real-time metrics cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto animate-slide-in-up stagger-3">
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 animate-pulse-glow">
            <div className="flex items-center justify-between mb-2">
              <Zap className="h-8 w-8 text-primary" />
              <TrendingUp className="h-4 w-4 text-accent" />
            </div>
            <div className="text-2xl font-bold text-primary">{metrics.requests.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">Total Requests</div>
          </Card>

          <Card
            className="p-6 bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-all duration-300 animate-pulse-glow"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="flex items-center justify-between mb-2">
              <Gauge className="h-8 w-8 text-accent" />
              <TrendingUp className="h-4 w-4 text-primary" />
            </div>
            <div className="text-2xl font-bold text-accent">{metrics.latency}ms</div>
            <div className="text-sm text-muted-foreground">Avg Latency</div>
          </Card>

          <Card
            className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 animate-pulse-glow"
            style={{ animationDelay: "1s" }}
          >
            <div className="flex items-center justify-between mb-2">
              <Cpu className="h-8 w-8 text-primary" />
              <TrendingUp className="h-4 w-4 text-accent" />
            </div>
            <div className="text-2xl font-bold text-primary">{metrics.throughput.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">Req/sec</div>
          </Card>

          <Card
            className="p-6 bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-all duration-300 animate-pulse-glow"
            style={{ animationDelay: "1.5s" }}
          >
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="h-8 w-8 text-accent" />
              <Zap className="h-4 w-4 text-primary" />
            </div>
            <div className="text-2xl font-bold text-accent">{metrics.uptime.toFixed(2)}%</div>
            <div className="text-sm text-muted-foreground">Uptime</div>
          </Card>
        </div>
      </div>
    </section>
  )
}
