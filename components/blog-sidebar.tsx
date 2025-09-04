import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, TrendingUp, Tag, Users } from "lucide-react"

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

export function BlogSidebar({ recentPosts }: BlogSidebarProps) {
  const categories = [
    { name: "Load Testing", count: 12 },
    { name: "Monitoring", count: 8 },
    { name: "Database", count: 15 },
    { name: "Mobile Testing", count: 6 },
    { name: "CDN", count: 4 },
    { name: "API Testing", count: 9 },
  ]

  const popularTags = [
    "performance", "testing", "optimization", "scalability", 
    "monitoring", "database", "mobile", "api", "cdn", "metrics"
  ]

  return (
    <aside className="space-y-8">
      {/* Recent Posts */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
          <Clock className="w-5 h-5 mr-2 text-blue-600" />
          Recent Posts
        </h3>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
              <article className="flex space-x-4 p-3 rounded-lg transition-all duration-200 hover:bg-gray-50">
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                    sizes="64px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900 text-sm leading-tight mb-1 group-hover:text-blue-600 transition-colors duration-200">
                    {post.title.substring(0, 50)}...
                  </h4>
                  <div className="flex items-center text-xs text-gray-500 space-x-2">
                    <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
          <Tag className="w-5 h-5 mr-2 text-blue-600" />
          Categories
        </h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/blog/category/${category.name.toLowerCase().replace(' ', '-')}`}
              className="flex items-center justify-between p-2 rounded-lg transition-all duration-200 hover:bg-blue-50 group"
            >
              <span className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
                {category.name}
              </span>
              <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium group-hover:bg-blue-100 group-hover:text-blue-700 transition-all duration-200">
                {category.count}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Tags */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
          <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
          Popular Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag) => (
            <Link
              key={tag}
              href={`/blog/tag/${tag}`}
              className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-blue-100 hover:text-blue-700 transform hover:scale-105"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-6 text-white">
        <h3 className="text-xl font-bold mb-3 flex items-center">
          <Users className="w-5 h-5 mr-2" />
          Stay Updated
        </h3>
        <p className="text-blue-100 mb-4 text-sm leading-relaxed">
          Get the latest performance insights delivered to your inbox
        </p>
        <div className="space-y-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200"
          />
          <button className="w-full bg-white text-blue-600 font-medium py-2 px-4 rounded-lg transition-all duration-200 hover:bg-blue-50 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50">
            Subscribe
          </button>
        </div>
      </div>
    </aside>
  )
}