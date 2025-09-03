"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function AboutCTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10">
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${6 + Math.random() * 3}s`,
              }}
            >
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="animate-slide-in-up">
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              {"Ready to Transform Your Performance?"}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
              {
                "Join thousands of developers who trust us to deliver lightning-fast, reliable performance testing solutions."
              }
            </p>
          </div>

          <div className="animate-slide-in-up delay-300">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="animate-pulse-glow text-lg px-8 py-4">
                {"Start Your Journey"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-lg px-8 py-4">
                {"Schedule a Demo"}
              </Button>
            </div>
          </div>

          <div className="animate-slide-in-up delay-500">
            <p className="text-sm text-muted-foreground">
              {"No credit card required • 14-day free trial • Cancel anytime"}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
