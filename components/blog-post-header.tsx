import Image from "next/image"
import { Calendar, Clock, TrendingUp, User, Share2, Bookmark } from "lucide-react"
import Link from "next/link"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  author: {
    name: string
    avatar: string
    bio: string
  }
  publishedAt: string
  readTime: string
  category: string
  tags: string[]
  image: string
  views: number
  likes: number
}

interface BlogPostHeaderProps {
  post: BlogPost
}

export function BlogPostHeader({ post }: BlogPostHeaderProps) {
  return (
    <header className="pt-24 pb-12 bg-gradient-to-br from-blue-100 via-blue-50 to-indigo-800 relative overflow-hidden">
    

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Category badge */}
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-2 bg-black/70 backdrop-blur-sm text-white rounded-full text-sm font-medium transform transition-transform duration-300 hover:scale-105">
            {post.category}
          </span>
        </div>

        {/* Title and meta */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mb-6 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-zinc-900 mb-8 leading-relaxed max-w-3xl mx-auto">
            {post.excerpt}
          </p>

          {/* Author and meta info */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center space-x-4">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                width={56}
                height={56}
                className="rounded-full ring-4 ring-white/20"
              />
              <div className="text-left">
                <p className="font-semibold text-zinc-900">{post.author.name}</p>
                <p className="text-zinc-800 text-sm">{post.author.bio}</p>
              </div>
            </div>

            <div className="flex items-center space-x-6 text-zinc-800 text-sm">
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {new Date(post.publishedAt).toLocaleDateString()}
              </span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {post.readTime}
              </span>
              <span className="flex items-center">
                <TrendingUp className="w-4 h-4 mr-1" />
                {post.views.toLocaleString()} views
              </span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button className="flex items-center space-x-2 px-4 py-2 bg-zinc-900/80 backdrop-blur-sm text-white rounded-lg transition-all duration-200 hover:bg-zinc-950 transform hover:scale-105">
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-zinc-900/80 backdrop-blur-sm text-white rounded-lg transition-all duration-200 hover:bg-zinc-950 transform hover:scale-105">
              <Bookmark className="w-4 h-4" />
              <span>Save</span>
            </button>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {post.tags.map((tag) => (
            <Link
              key={tag}
              href={`/blog/tag/${tag}`}
              className="px-3 py-1 bg-zinc-900/80 backdrop-blur-sm text-white rounded-lg text-sm transition-all duration-200 hover:bg-zinc-950 transform hover:scale-105"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}