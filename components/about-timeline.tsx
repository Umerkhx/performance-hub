"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Rocket, Users, Award, Globe } from "lucide-react"

const timelineEvents = [
  {
    year: "2020",
    title: "Company Founded",
    description: "Started with a vision to revolutionize performance testing",
    icon: Rocket,
    color: "text-blue-500",
  },
  {
    year: "2021",
    title: "First Major Client",
    description: "Secured partnership with Fortune 500 company",
    icon: Users,
    color: "text-green-500",
  },
  {
    year: "2022",
    title: "Industry Recognition",
    description: "Won 'Best Performance Testing Tool' award",
    icon: Award,
    color: "text-yellow-500",
  },
  {
    year: "2023",
    title: "Global Expansion",
    description: "Opened offices in 5 countries worldwide",
    icon: Globe,
    color: "text-purple-500",
  },
  {
    year: "2024",
    title: "AI Integration",
    description: "Launched AI-powered performance optimization",
    icon: CheckCircle,
    color: "text-emerald-500",
  },
]

export function AboutTimeline() {
  const timelineRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in-left")
          }
        })
      },
      { threshold: 0.2 },
    )

    const elements = timelineRef.current?.querySelectorAll(".timeline-item")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={timelineRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">{"Our Journey"}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {"From startup to industry leader, here are the key milestones that shaped our story."}
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary opacity-30" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`timeline-item opacity-0 translate-x-8 flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
                style={{ animationDelay: `${index * 300}ms` }}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                  <Card className="hover:shadow-xl transition-all duration-500 hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <event.icon className={`h-6 w-6 ${event.color}`} />
                        <span className="text-2xl font-heading font-bold text-primary">{event.year}</span>
                      </div>
                      <h3 className="text-xl font-heading font-bold mb-2">{event.title}</h3>
                      <p className="text-muted-foreground">{event.description}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline Dot */}
                <div className="relative z-10">
                  <div className={`w-4 h-4 rounded-full bg-primary animate-pulse`} />
                </div>

                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
