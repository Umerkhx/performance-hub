"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
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
}

interface BlogHeroProps {
  featuredPost: BlogPost
}

export function BlogHero({ featuredPost }: BlogHeroProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || !featuredPost) return null

  return (
    <section className="relative pt-24 pb-16 bg-gradient-to-br from-background via-secondary to-background overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary/5 rounded-full animate-float"></div>
        <div
          className="absolute bottom-10 left-10 w-24 h-24 bg-accent/5 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-slide-in-up">
          <h1 className="font-heading font-black text-4xl md:text-6xl text-balance mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              Performance Blog
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Latest insights, tutorials, and best practices for performance testing and optimization
          </p>
        </div>

        {/* Featured Post */}
        <div className="max-w-4xl mx-auto animate-slide-in-up stagger-1">
          <div className="relative group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    width={600}
                    height={400}
                    className="w-full h-64 lg:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">Featured</Badge>
                </div>

                <div className="p-8 flex flex-col justify-center">
                  <Badge variant="outline" className="w-fit mb-4">
                    {featuredPost.category}
                  </Badge>

                  <h2 className="font-heading font-bold text-2xl lg:text-3xl text-balance mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>

                  <p className="text-muted-foreground leading-relaxed mb-6">{featuredPost.excerpt}</p>

                  <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(featuredPost.publishedAt).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      {featuredPost.views.toLocaleString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      {featuredPost.likes}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Image
                        src={featuredPost.author.avatar || "/placeholder.svg"}
                        alt={featuredPost.author.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <div className="font-medium">{featuredPost.author.name}</div>
                        <div className="text-sm text-muted-foreground">Author</div>
                      </div>
                    </div>

                    <Link href={`/blog/${featuredPost.slug}`}>
                      <Button className="animate-pulse-glow">
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
