"use client"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, TrendingUp, User } from "lucide-react"

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
  return (
    <section className="pt-24 pb-12  relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-white rounded-full animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <div className="inline-block">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-black rounded-full text-sm font-medium mb-4 transform transition-transform duration-300 hover:scale-105">
              Featured Article
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
            Performance<br />
            <span className="text-blue-900">Insights & Guides</span>
          </h1>
          <p className="text-xl text-blue-950 max-w-3xl mx-auto leading-relaxed">
            Expert insights, practical tutorials, and cutting-edge strategies for optimizing web performance
          </p>
        </div>

        {featuredPost && (
          <div className="max-w-4xl mx-auto">
            <Link href={`/blog/${featuredPost.slug}`} className="group block">
              <article className="bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-transform duration-300 group-hover:scale-[1.02]">
                <div className="relative h-64 md:h-80 lg:h-96">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="inline-block px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium mb-3">
                      {featuredPost.category}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                      {featuredPost.title}
                    </h2>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Image
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                      <div>
                        <p className="font-medium text-gray-900">{featuredPost.author.name}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(featuredPost.publishedAt).toLocaleDateString()}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {featuredPost.readTime}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        {featuredPost.views.toLocaleString()}
                      </span>
                      <span className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {featuredPost.likes}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        )}
      </div>

      <style jsx>{`
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  )
}