"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface Stat {
  value: number
  label: string
  suffix: string
  prefix?: string
}

const stats: Stat[] = [
  { value: 10000, label: "Tests Executed", suffix: "+" },
  { value: 99.9, label: "Uptime Guarantee", suffix: "%", prefix: "" },
  { value: 500, label: "Happy Clients", suffix: "+" },
  { value: 24, label: "Support Hours", suffix: "/7" },
]

function AnimatedCounter({ value, suffix, prefix = "" }: { value: number; suffix: string; prefix?: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, value])

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-heading font-bold text-primary">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </div>
  )
}

export function AboutStats() {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">{"Performance by the Numbers"}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {"Our track record speaks for itself. Here are the metrics that matter."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-xl transition-all duration-500 hover:scale-105 animate-slide-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                <div className="text-lg font-medium text-muted-foreground mt-2">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
