"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Eye, Heart, ArrowRight } from "lucide-react"

interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string
  author: {
    name: string
    avatar: string
    bio: string
  }
  publishedAt: string
  readTime: string
  category: string
  image: string
  views: number
  likes: number
  featured?: boolean
}

interface BlogGridProps {
  posts: BlogPost[]
}

export function BlogGrid({ posts }: BlogGridProps) {
  const [visiblePosts, setVisiblePosts] = useState<number[]>([])
  const [likedPosts, setLikedPosts] = useState<number[]>([])
  const postRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = postRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1 && !visiblePosts.includes(index)) {
              setVisiblePosts((prev) => [...prev, index])
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    postRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [visiblePosts])

  const toggleLike = (postId: number) => {
    setLikedPosts((prev) => (prev.includes(postId) ? prev.filter((id) => id !== postId) : [...prev, postId]))
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="font-heading font-bold text-2xl">Latest Articles</h2>
        <Button variant="outline">View All Categories</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post, index) => {
          const isVisible = visiblePosts.includes(index)
          const isLiked = likedPosts.includes(post.id)

          return (
            <Card
              key={post.id}
              ref={(el) => {
                postRefs.current[index] = el
              }}
              className={`group cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl border-border/50 hover:border-primary/30 overflow-hidden ${
                isVisible ? "animate-slide-in-up opacity-100" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary/90 text-primary-foreground">{post.category}</Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-background/80 backdrop-blur-sm"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      toggleLike(post.id)
                    }}
                  >
                    <Heart className={`h-4 w-4 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
                  </Button>
                </div>
              </div>

              <CardHeader className="pb-4">
                <h3 className="font-heading font-bold text-xl group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed line-clamp-2">{post.excerpt}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    {post.views.toLocaleString()}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image
                      src={post.author.avatar || "/placeholder.svg"}
                      alt={post.author.name}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <span className="text-sm font-medium">{post.author.name}</span>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="ghost" size="sm" className="group-hover:text-primary">
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
