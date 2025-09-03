"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"

interface BlogPost {
  id: number
  title: string
  content: string
  tags: string[]
}

interface BlogPostContentProps {
  post: BlogPost
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <article className="prose prose-lg max-w-none animate-slide-in-up">
      <div
        className="prose-headings:font-heading prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:leading-relaxed prose-code:bg-secondary prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-secondary prose-pre:border prose-pre:border-border"
        dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br />") }}
      />

      <div className="mt-12 pt-8 border-t border-border">
        <h3 className="font-heading font-bold text-lg mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              #{tag}
            </Badge>
          ))}
        </div>
      </div>
    </article>
  )
}
