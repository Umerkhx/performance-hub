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
  tags: string[]
  image: string
  featured: boolean
  views: number
  likes: number
}

interface BlogGridProps {
  posts: BlogPost[]
}

export function BlogGrid({ posts }: BlogGridProps) {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
        <div className="text-sm text-gray-500">
          {posts.length} articles
        </div>
      </div>

      <div className="space-y-8">
        {posts.map((post, index) => (
          <BlogPostCard key={post.id} post={post} priority={index < 2} />
        ))}
      </div>
    </div>
  )
}

function BlogPostCard({ post, priority = false }: { post: BlogPost; priority?: boolean }) {
  return (
    <article className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group transform transition-transform duration-300 hover:scale-[1.01] hover:shadow-lg">
      <Link href={`/blog/${post.slug}`}>
        <div className="md:flex">
          <div className="md:w-1/3 relative h-48 md:h-64">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority={priority}
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
          </div>

          <div className="md:w-2/3 p-6 md:p-8">
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
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
                {post.views.toLocaleString()}
              </span>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 leading-tight">
              {post.title}
            </h3>

            <p className="text-gray-600 mb-4 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="font-medium text-gray-900">{post.author.name}</p>
                  <p className="text-sm text-gray-500">{post.author.bio.substring(0, 40)}...</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="flex -space-x-1">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}