
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

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


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item) => (
        <Card key={item.id} className="border border-border/50 overflow-hidden">
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.title}
            width={600}
            height={400}
            loading="lazy"
            className="w-full h-48 object-cover"
          />
          <CardHeader>
            <div className="flex items-start justify-between">
              <CardTitle className="font-bold text-lg">{item.title}</CardTitle>
              <div className="text-right font-bold text-primary text-lg">{item.price}</div>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < Math.floor(item.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                      }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {item.rating} ({item.reviews} reviews)
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="mb-3">{item.description}</CardDescription>
            <div className="flex flex-wrap gap-1">
              {item.features.slice(0, 3).map((feature, idx) => (
                <Badge key={idx} variant="outline" className="text-xs">
                  {feature}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
