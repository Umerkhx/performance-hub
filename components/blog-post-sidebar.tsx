"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"

interface BlogPost {
  id: number
  title: string
  slug: string
  author: {
    name: string
    avatar: string
    bio: string
  }
  publishedAt: string
  readTime: string
  image: string
}

interface BlogPostSidebarProps {
  post: BlogPost
  relatedPosts: BlogPost[]
}

export function BlogPostSidebar({ post, relatedPosts }: BlogPostSidebarProps) {
  return (
    <div className="space-y-8">
      {/* Author Info */}
      <Card className="animate-slide-in-up">
        <CardHeader>
          <CardTitle className="font-heading font-bold">About the Author</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src={post.author.avatar || "/placeholder.svg"}
              alt={post.author.name}
              width={60}
              height={60}
              className="rounded-full"
            />
            <div>
              <div className="font-medium">{post.author.name}</div>
              <div className="text-sm text-muted-foreground">Author</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{post.author.bio}</p>
          <Button variant="outline" className="w-full bg-transparent">
            View Profile
          </Button>
        </CardContent>
      </Card>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <Card className="animate-slide-in-up stagger-1">
          <CardHeader>
            <CardTitle className="font-heading font-bold">Related Articles</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {relatedPosts.map((relatedPost) => (
              <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`} className="block group">
                <div className="flex gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                  <Image
                    src={relatedPost.image || "/placeholder.svg"}
                    alt={relatedPost.title}
                    width={60}
                    height={60}
                    className="rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors">
                      {relatedPost.title}
                    </h4>
                    <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {new Date(relatedPost.publishedAt).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
            <Button variant="outline" className="w-full bg-transparent">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Newsletter */}
      <Card className="animate-slide-in-up stagger-2 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
        <CardHeader>
          <CardTitle className="font-heading font-bold">Never Miss an Update</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Subscribe to our newsletter for the latest performance testing insights.
          </p>
          <Button className="w-full animate-pulse-glow">Subscribe Now</Button>
        </CardContent>
      </Card>
    </div>
  )
}
