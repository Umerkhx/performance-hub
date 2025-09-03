"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Search, Filter, Grid, List } from "lucide-react"
import { Input } from "@/components/ui/input"

export function GalleryHero() {
  const [mounted, setMounted] = useState(false)
  const [searchValue, setSearchValue] = useState("")

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative pt-24 pb-16 bg-gradient-to-br from-background via-secondary to-background overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary/5 rounded-full animate-float"></div>
        <div
          className="absolute bottom-10 left-10 w-24 h-24 bg-accent/5 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-16 h-16 bg-primary/10 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-slide-in-up">
          <h1 className="font-heading font-black text-4xl md:text-6xl text-balance mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              Performance Gallery
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover our comprehensive suite of performance testing tools and solutions designed to optimize your
            applications.
          </p>
        </div>

        {/* Search and filter controls */}
        <div className="max-w-2xl mx-auto mb-8 animate-slide-in-up stagger-1">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search performance tools..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="pl-10 h-12 bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary/50"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="lg" className="bg-background/50 backdrop-blur-sm">
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </Button>
              <Button variant="outline" size="lg" className="bg-background/50 backdrop-blur-sm">
                <Grid className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="bg-background/50 backdrop-blur-sm">
                <List className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto animate-slide-in-up stagger-2">
          <div className="text-center p-4 bg-card/30 backdrop-blur-sm rounded-lg border border-border/30">
            <div className="text-2xl font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground">Testing Tools</div>
          </div>
          <div className="text-center p-4 bg-card/30 backdrop-blur-sm rounded-lg border border-border/30">
            <div className="text-2xl font-bold text-accent">1M+</div>
            <div className="text-sm text-muted-foreground">Tests Run</div>
          </div>
          <div className="text-center p-4 bg-card/30 backdrop-blur-sm rounded-lg border border-border/30">
            <div className="text-2xl font-bold text-primary">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime</div>
          </div>
          <div className="text-center p-4 bg-card/30 backdrop-blur-sm rounded-lg border border-border/30">
            <div className="text-2xl font-bold text-accent">24/7</div>
            <div className="text-sm text-muted-foreground">Support</div>
          </div>
        </div>
      </div>
    </section>
  )
}
