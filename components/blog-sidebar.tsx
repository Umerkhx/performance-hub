"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, TrendingUp, Calendar } from "lucide-react"

interface BlogPost {
  id: number
  title: string
  slug: string
  author: {
    name: string
    avatar: string
  }
  publishedAt: string
  readTime: string
  category: string
  image: string
  views: number
}

interface BlogSidebarProps {
  recentPosts: BlogPost[]
}

const categories = [
  { name: "Load Testing", count: 12, color: "bg-primary" },
  { name: "Monitoring", count: 8, color: "bg-accent" },
  { name: "Database", count: 6, color: "bg-primary" },
  { name: "Mobile Testing", count: 5, color: "bg-accent" },
  { name: "API Testing", count: 4, color: "bg-primary" },
  { name: "CDN", count: 3, color: "bg-accent" },
]

const popularTags = [
  "performance",
  "testing",
  "optimization",
  "monitoring",
  "scalability",
  "database",
  "api",
  "mobile",
  "cdn",
  "security",
  "analytics",
  "devops",
]

export function BlogSidebar({ recentPosts }: BlogSidebarProps) {
  return (
    <div className="space-y-8">
      {/* Search */}
      <Card className="animate-slide-in-up">
        <CardHeader>
          <CardTitle className="font-heading font-bold">Search Articles</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search blog posts..." className="pl-10" />
          </div>
        </CardContent>
      </Card>

      {/* Recent Posts */}
      <Card className="animate-slide-in-up stagger-1">
        <CardHeader>
          <CardTitle className="font-heading font-bold flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Recent Posts
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="block group">
              <div className="flex gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={60}
                  height={60}
                  className="rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h4>
                  <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </CardContent>
      </Card>

      {/* Categories */}
      <Card className="animate-slide-in-up stagger-2">
        <CardHeader>
          <CardTitle className="font-heading font-bold">Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex items-center justify-between p-2 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${category.color}`} />
                <span className="font-medium">{category.name}</span>
              </div>
              <Badge variant="secondary">{category.count}</Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Popular Tags */}
      <Card className="animate-slide-in-up stagger-3">
        <CardHeader>
          <CardTitle className="font-heading font-bold">Popular Tags</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {popularTags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                #{tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Newsletter */}
      <Card className="animate-slide-in-up stagger-4 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
        <CardHeader>
          <CardTitle className="font-heading font-bold">Stay Updated</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Get the latest performance testing insights delivered to your inbox.
          </p>
          <div className="space-y-2">
            <Input placeholder="Your email address" />
            <Button className="w-full animate-pulse-glow">Subscribe</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
