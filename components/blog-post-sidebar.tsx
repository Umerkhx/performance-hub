import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"

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
  image: string
}

interface BlogPostSidebarProps {
  post: BlogPost
  relatedPosts: BlogPost[]
}

export function BlogPostSidebar({ post, relatedPosts }: BlogPostSidebarProps) {
  return (
    <aside className="space-y-8">
      {/* Author Card */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="text-center">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            width={80}
            height={80}
            className="mx-auto rounded-full mb-4"
          />
          <h3 className="font-bold text-gray-900 mb-2">{post.author.name}</h3>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            Senior Performance Engineer with 8+ years of experience in web optimization
          </p>
          <button className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 hover:bg-blue-700 transform hover:scale-105">
            Follow
          </button>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="font-bold text-gray-900 mb-4">Table of Contents</h3>
        <nav className="space-y-2">
          {[
            "Understanding Modern Architecture",
            "Advanced Testing Techniques",
            "Tools and Implementation",
            "Monitoring and Analysis",
            "Best Practices",
            "Conclusion"
          ].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="block text-gray-600 hover:text-blue-600 transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-blue-50 group"
            >
              <span className="flex items-center justify-between">
                {item}
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </span>
            </a>
          ))}
        </nav>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-6">Related Articles</h3>
          <div className="space-y-4">
            {relatedPosts.map((relatedPost) => (
              <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`} className="group block">
                <article className="flex space-x-4 p-3 rounded-lg transition-all duration-200 hover:bg-gray-50">
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                      sizes="64px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 text-sm leading-tight mb-2 group-hover:text-blue-600 transition-colors duration-200">
                      {relatedPost.title.substring(0, 60)}...
                    </h4>
                    <div className="flex items-center text-xs text-gray-500 space-x-2">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(relatedPost.publishedAt).toLocaleDateString()}</span>
                      <span>•</span>
                      <Clock className="w-3 h-3" />
                      <span>{relatedPost.readTime}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Performance Tips */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
        <h3 className="font-bold text-green-900 mb-4 flex items-center">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
          SSR Performance Tips
        </h3>
        <ul className="space-y-3 text-sm text-green-800">
          <li className="flex items-start">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            Server-rendered HTML improves SEO and initial load time
          </li>
          <li className="flex items-start">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            Use transform/opacity for animations to avoid layout shifts
          </li>
          <li className="flex items-start">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            Implement proper loading states to prevent CLS
          </li>
          <li className="flex items-start">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            Progressive enhancement ensures graceful degradation
          </li>
        </ul>
      </div>
    </aside>
  )
}