import { Suspense } from "react"
import { GalleryGrid } from "@/components/gallery-grid"
import { GalleryHero } from "@/components/gallery-hero"
import { Navigation } from "@/components/navigation"
import { GalleryFilters } from "@/components/gallery-filters"

// ISR configuration - revalidate every 60 seconds
export const revalidate = 60

// Generate static params for ISR
export async function generateStaticParams() {
  return [{ category: "all" }]
}

export const metadata = {
  title: "Performance Gallery - PerformanceHub",
  description: "Explore our comprehensive gallery of performance testing tools and solutions",
}

// Mock data for performance testing tools
const galleryItems = [
  {
    id: 1,
    title: "Load Testing Suite",
    category: "load-testing",
    description: "Advanced load testing with real-time metrics and scalable infrastructure",
    image: "/modern-load-testing-dashboard-with-graphs.jpg",
    price: "$299/month",
    features: ["Real-time monitoring", "Auto-scaling", "Global CDN testing"],
    rating: 4.9,
    reviews: 1247,
  },
  {
    id: 2,
    title: "Performance Analytics Pro",
    category: "analytics",
    description: "Deep performance insights with AI-powered recommendations",
    image: "/analytics-dashboard-with-performance-charts.jpg",
    price: "$199/month",
    features: ["AI insights", "Custom reports", "Performance alerts"],
    rating: 4.8,
    reviews: 892,
  },
  {
    id: 3,
    title: "Visual Regression Tester",
    category: "visual-testing",
    description: "Automated visual testing across multiple browsers and devices",
    image: "/visual-regression-testing-interface.jpg",
    price: "$149/month",
    features: ["Cross-browser testing", "Visual diff detection", "Automated screenshots"],
    rating: 4.7,
    reviews: 634,
  },
  {
    id: 4,
    title: "API Performance Monitor",
    category: "api-testing",
    description: "Comprehensive API testing and monitoring solution",
    image: "/api-testing-dashboard-with-response-times.jpg",
    price: "$179/month",
    features: ["API monitoring", "Response validation", "Performance benchmarks"],
    rating: 4.9,
    reviews: 1156,
  },
  {
    id: 5,
    title: "Mobile Performance Suite",
    category: "mobile-testing",
    description: "Specialized mobile app performance testing and optimization",
    image: "/mobile-app-performance-testing-interface.jpg",
    price: "$249/month",
    features: ["Device simulation", "Network throttling", "Battery usage analysis"],
    rating: 4.6,
    reviews: 743,
  },
  {
    id: 6,
    title: "Security Performance Analyzer",
    category: "security-testing",
    description: "Combined security and performance testing platform",
    image: "/security-performance-testing-dashboard.jpg",
    price: "$349/month",
    features: ["Security scanning", "Performance impact analysis", "Vulnerability assessment"],
    rating: 4.8,
    reviews: 567,
  },
  {
    id: 7,
    title: "Database Performance Optimizer",
    category: "database-testing",
    description: "Advanced database performance testing and optimization tools",
    image: "/database-performance-optimization-interface.jpg",
    price: "$199/month",
    features: ["Query optimization", "Index analysis", "Performance tuning"],
    rating: 4.7,
    reviews: 423,
  },
  {
    id: 8,
    title: "CDN Performance Tester",
    category: "cdn-testing",
    description: "Global CDN performance testing and optimization platform",
    image: "/cdn-performance-testing-world-map.jpg",
    price: "$129/month",
    features: ["Global testing", "Cache optimization", "Edge performance"],
    rating: 4.5,
    reviews: 312,
  },
  {
    id: 9,
    title: "Real User Monitoring",
    category: "rum",
    description: "Real user monitoring with advanced performance insights",
    image: "/real-user-monitoring-dashboard.jpg",
    price: "$89/month",
    features: ["Real user data", "Performance tracking", "User experience metrics"],
    rating: 4.8,
    reviews: 1034,
  },
]

export default async function GalleryPage() {
  // Simulate data fetching for ISR
  await new Promise((resolve) => setTimeout(resolve, 100))

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <GalleryHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Suspense fallback={<div className="animate-pulse">Loading filters...</div>}>
          <GalleryFilters />
        </Suspense>
        <Suspense fallback={<div className="animate-pulse">Loading gallery...</div>}>
          <GalleryGrid items={galleryItems} />
        </Suspense>
      </div>
    </main>
  )
}
