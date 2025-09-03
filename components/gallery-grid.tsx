"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, ShoppingCart, Eye, Zap } from "lucide-react"

interface GalleryItem {
  id: number
  title: string
  category: string
  description: string
  image: string
  price: string
  features: string[]
  rating: number
  reviews: number
}

interface GalleryGridProps {
  items: GalleryItem[]
}

export function GalleryGrid({ items }: GalleryGridProps) {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const [likedItems, setLikedItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1 && !visibleItems.includes(index)) {
              setVisibleItems((prev) => [...prev, index])
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [visibleItems])

  const toggleLike = (itemId: number) => {
    setLikedItems((prev) => (prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]))
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, index) => {
        const isVisible = visibleItems.includes(index)
        const isLiked = likedItems.includes(item.id)

        return (
          <Card
            key={item.id}
            ref={(el) => {
              itemRefs.current[index] = el
            }}
            className={`group cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl border-border/50 hover:border-primary/30 overflow-hidden ${
              isVisible ? "animate-slide-in-up opacity-100" : "opacity-0"
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative overflow-hidden">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-4 right-4 flex gap-2">
                <Button
                  size="sm"
                  variant="secondary"
                  className="bg-background/80 backdrop-blur-sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleLike(item.id)
                  }}
                >
                  <Heart className={`h-4 w-4 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
                </Button>
                <Button size="sm" variant="secondary" className="bg-background/80 backdrop-blur-sm">
                  <Eye className="h-4 w-4" />
                </Button>
              </div>
              <div className="absolute bottom-4 left-4">
                <Badge className="bg-primary/90 text-primary-foreground">
                  {item.category.replace("-", " ").toUpperCase()}
                </Badge>
              </div>
            </div>

            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <CardTitle className="font-heading font-bold text-lg group-hover:text-primary transition-colors line-clamp-1">
                  {item.title}
                </CardTitle>
                <div className="text-right">
                  <div className="font-bold text-primary text-lg">{item.price}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(item.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {item.rating} ({item.reviews} reviews)
                </span>
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              <CardDescription className="text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                {item.description}
              </CardDescription>

              <div className="flex flex-wrap gap-1 mb-4">
                {item.features.slice(0, 3).map((feature, featureIndex) => (
                  <Badge key={featureIndex} variant="outline" className="text-xs">
                    {feature}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-2">
                <Button className="flex-1 animate-pulse-glow">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="sm">
                  <Zap className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
