"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation, Zap } from "lucide-react"

export function ContactMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [activeOffice, setActiveOffice] = useState(0)

  const offices = [
    { name: "San Francisco", lat: 37.7749, lng: -122.4194, color: "bg-blue-500" },
    { name: "New York", lat: 40.7128, lng: -74.006, color: "bg-green-500" },
    { name: "London", lat: 51.5074, lng: -0.1278, color: "bg-purple-500" },
  ]

  useEffect(() => {
    // Simulate interactive map with animated elements
    const interval = setInterval(() => {
      setActiveOffice((prev) => (prev + 1) % offices.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/10 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold mb-4">Find Us Worldwide</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            With offices across the globe, we're always close to our clients.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-3 gap-0">
                {/* Interactive Map Simulation */}
                <div className="lg:col-span-2 relative h-96 lg:h-auto bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                  <div ref={mapRef} className="absolute inset-0 flex items-center justify-center">
                    {/* Animated World Map Representation */}
                    <div className="relative w-full h-full max-w-2xl">
                      {/* Animated Connection Lines */}
                      <svg className="absolute inset-0 w-full h-full opacity-30">
                        <defs>
                          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
                            <stop offset="50%" stopColor="currentColor" stopOpacity="1" />
                            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        {offices.map((_, index) => (
                          <line
                            key={index}
                            x1={`${20 + index * 30}%`}
                            y1="50%"
                            x2={`${50 + index * 20}%`}
                            y2="30%"
                            stroke="url(#lineGradient)"
                            strokeWidth="2"
                            className="animate-pulse text-primary"
                          />
                        ))}
                      </svg>

                      {/* Office Markers */}
                      {offices.map((office, index) => (
                        <div
                          key={index}
                          className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                            activeOffice === index ? "scale-125" : "scale-100"
                          }`}
                          style={{
                            left: `${25 + index * 25}%`,
                            top: `${40 + (index % 2) * 20}%`,
                          }}
                        >
                          <div className={`relative p-3 rounded-full ${office.color} animate-pulse`}>
                            <MapPin className="h-6 w-6 text-white" />
                            {activeOffice === index && (
                              <div className="absolute inset-0 rounded-full bg-current animate-ping opacity-30" />
                            )}
                          </div>
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-center">
                            <div className="bg-background/90 backdrop-blur-sm px-2 py-1 rounded text-sm font-medium whitespace-nowrap">
                              {office.name}
                            </div>
                          </div>
                        </div>
                      ))}

                      {/* Animated Performance Indicators */}
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute animate-float opacity-20"
                          style={{
                            left: `${Math.random() * 80 + 10}%`,
                            top: `${Math.random() * 60 + 20}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${4 + Math.random() * 2}s`,
                          }}
                        >
                          <Zap className="h-4 w-4 text-primary" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Office Information */}
                <div className="p-8 space-y-6">
                  <h3 className="text-2xl font-heading font-bold">Global Presence</h3>

                  <div className="space-y-4">
                    {offices.map((office, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-lg border transition-all duration-300 cursor-pointer ${
                          activeOffice === index
                            ? "border-primary bg-primary/5 scale-105"
                            : "border-border hover:border-primary/50"
                        }`}
                        onClick={() => setActiveOffice(index)}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${office.color} animate-pulse`} />
                          <span className="font-medium">{office.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t">
                    <Button className="w-full animate-pulse-glow">
                      <Navigation className="mr-2 h-4 w-4" />
                      Get Directions
                    </Button>
                  </div>

                  <div className="text-center text-sm text-muted-foreground">
                    <p>Real-time performance monitoring</p>
                    <p>across all locations</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
