import { Suspense } from "react"
import { Navigation } from "@/components/navigation"
import { BlogHero } from "@/components/blog-hero"
import { BlogGrid } from "@/components/blog-grid"
import { BlogSidebar } from "@/components/blog-sidebar"

export const metadata = {
  title: "Performance Blog - PerformanceHub",
  description: "Latest insights, tutorials, and best practices for performance testing and optimization",
}

const blogPosts = [
  {
    id: 1,
    title: "Advanced Load Testing Strategies for Modern Web Applications",
    slug: "advanced-load-testing-strategies",
    excerpt:
      "Discover cutting-edge techniques for load testing that go beyond traditional approaches. Learn how to simulate real-world traffic patterns and identify performance bottlenecks before they impact your users.",
    content: "Full article content here...",
    author: {
      name: "Sarah Chen",
      avatar: "/professional-woman-engineer-developer.jpg",
      bio: "Senior Performance Engineer with 8+ years of experience in web optimization",
    },
    publishedAt: "2024-01-15",
    readTime: "12 min read",
    category: "Load Testing",
    tags: ["performance", "testing", "scalability", "optimization"],
    image:"/mobile-app-performance-testing-interface.jpg" ,
    featured: true,
    views: 15420,
    likes: 342,
  },
  {
    id: 2,
    title: "Real-Time Performance Monitoring: Tools and Techniques",
    slug: "real-time-performance-monitoring",
    excerpt:
      "Explore the latest tools and methodologies for monitoring application performance in real-time. From APM solutions to custom metrics, learn how to keep your finger on the pulse of your system's health.",
    content: "Full article content here...",
    author: {
      name: "Marcus Rodriguez",
      avatar: "/professional-man-cto-tech-leader.png",
      bio: "DevOps Engineer specializing in monitoring and observability",
    },
    publishedAt: "2024-01-12",
    readTime: "8 min read",
    category: "Monitoring",
    tags: ["monitoring", "apm", "observability", "metrics"],
    image:"/mobile-app-performance-testing-interface.jpg" ,
    featured: false,
    views: 8930,
    likes: 187,
  },
  {
    id: 3,
    title: "Optimizing Database Performance: A Comprehensive Guide",
    slug: "optimizing-database-performance",
    excerpt:
      "Deep dive into database optimization techniques that can dramatically improve your application's performance. From query optimization to indexing strategies, master the art of database tuning.",
    content: "Full article content here...",
    author: {
      name: "Dr. Emily Watson",
      avatar: "/professional-woman-ux-designer-creative.jpg",
      bio: "Database architect with expertise in high-performance systems",
    },
    publishedAt: "2024-01-10",
    readTime: "15 min read",
    category: "Database",
    tags: ["database", "optimization", "sql", "indexing"],
    image:"/mobile-app-performance-testing-interface.jpg" ,
    featured: true,
    views: 12750,
    likes: 298,
  },
  {
    id: 4,
    title: "Mobile App Performance Testing: Best Practices",
    slug: "mobile-app-performance-testing",
    excerpt:
      "Learn how to effectively test mobile application performance across different devices, networks, and usage patterns. Discover tools and techniques specific to mobile performance optimization.",
    content: "Full article content here...",
    author: {
      name: "Alex Kim",
      avatar: "/professional-man-data-scientist-ai.jpg",
      bio: "Mobile performance specialist and app optimization expert",
    },
    publishedAt: "2024-01-08",
    readTime: "10 min read",
    category: "Mobile Testing",
    tags: ["mobile", "testing", "performance", "optimization"],
    image:"/mobile-app-performance-testing-interface.jpg" ,
    featured: false,
    views: 6420,
    likes: 156,
  },
  {
    id: 5,
    title: "CDN Performance Optimization: Global Speed Strategies",
    slug: "cdn-performance-optimization",
    excerpt:
      "Maximize your CDN's potential with advanced configuration techniques and optimization strategies. Learn how to deliver content faster to users worldwide.",
    content: "Full article content here...",
    author: {
      name: "Lisa Park",
      avatar: "/professional-woman-engineer-developer.jpg",
      bio: "Infrastructure engineer focused on global content delivery",
    },
    publishedAt: "2024-01-05",
    readTime: "9 min read",
    category: "CDN",
    tags: ["cdn", "optimization", "global", "speed"],
    image:"/mobile-app-performance-testing-interface.jpg",
    featured: false,
    views: 5280,
    likes: 124,
  },
  {
    id: 6,
    title: "API Performance Testing: From Basics to Advanced",
    slug: "api-performance-testing-guide",
    excerpt:
      "Master API performance testing with comprehensive strategies covering everything from basic load testing to complex scenario simulation and bottleneck identification.",
    content: "Full article content here...",
    author: {
      name: "James Thompson",
      avatar: "/professional-person-devops-engineer-cloud.jpg",
      bio: "API architect and performance testing consultant",
    },
    publishedAt: "2024-01-03",
    readTime: "11 min read",
    category: "API Testing",
    tags: ["api", "testing", "performance", "load-testing"],
    image:"/mobile-app-performance-testing-interface.jpg",
    featured: false,
    views: 7890,
    likes: 203,
  },
]

export default async function BlogPage() {
  await new Promise((resolve) => setTimeout(resolve, 100))

  const featuredPosts = blogPosts.filter((post) => post.featured)
  const recentPosts = blogPosts.slice(0, 4)

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <BlogHero featuredPost={featuredPosts[0]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <Suspense fallback={<div className="animate-pulse">Loading posts...</div>}>
              <BlogGrid posts={blogPosts} />
            </Suspense>
          </div>
          <div className="lg:col-span-1">
            <Suspense fallback={<div className="animate-pulse">Loading sidebar...</div>}>
              <BlogSidebar recentPosts={recentPosts} />
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  )
}
