"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const categories = [
  { id: "all", label: "All Tools", count: 50 },
  { id: "load-testing", label: "Load Testing", count: 12 },
  { id: "analytics", label: "Analytics", count: 8 },
  { id: "visual-testing", label: "Visual Testing", count: 6 },
  { id: "api-testing", label: "API Testing", count: 9 },
  { id: "mobile-testing", label: "Mobile Testing", count: 5 },
  { id: "security-testing", label: "Security Testing", count: 4 },
  { id: "database-testing", label: "Database Testing", count: 3 },
  { id: "cdn-testing", label: "CDN Testing", count: 2 },
  { id: "rum", label: "Real User Monitoring", count: 1 },
]

export function GalleryFilters() {
  const [activeCategory, setActiveCategory] = useState("all")

  return (
    <div className="mb-12">
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            onClick={() => setActiveCategory(category.id)}
            className={`transition-all duration-300 ${
              activeCategory === category.id ? "animate-pulse-glow" : "hover:border-primary/50 hover:text-primary"
            }`}
          >
            {category.label}
            <Badge variant="secondary" className="ml-2">
              {category.count}
            </Badge>
          </Button>
        ))}
      </div>
    </div>
  )
}
