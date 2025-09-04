import { Heart, MessageCircle, Share2, Bookmark } from "lucide-react"

interface BlogPost {
  id: number
  title: string
  content: string
  likes: number
}

interface BlogPostContentProps {
  post: BlogPost
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  return (
    <article className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Floating action buttons */}
      <div className="sticky top-24 float-right mr-6 mt-6 space-y-2 z-10">
        <ActionButton icon={<Heart className="w-5 h-5" />} count={post.likes} />
        <ActionButton icon={<MessageCircle className="w-5 h-5" />} count={23} />
        <ActionButton icon={<Share2 className="w-5 h-5" />} />
        <ActionButton icon={<Bookmark className="w-5 h-5" />} />
      </div>

      <div className="p-8 md:p-12">
        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: formatMarkdown(post.content) }} />
        </div>

        {/* Article footer */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg transition-all duration-200 hover:bg-red-100 transform hover:scale-105">
                <Heart className="w-5 h-5" />
                <span>Like ({post.likes})</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg transition-all duration-200 hover:bg-blue-100 transform hover:scale-105">
                <MessageCircle className="w-5 h-5" />
                <span>Comment</span>
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 bg-gray-50 text-gray-600 rounded-lg transition-all duration-200 hover:bg-gray-100 transform hover:scale-105">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="p-2 bg-gray-50 text-gray-600 rounded-lg transition-all duration-200 hover:bg-gray-100 transform hover:scale-105">
                <Bookmark className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

function ActionButton({ icon, count }: { icon: React.ReactNode; count?: number }) {
  return (
    <button className="flex flex-col items-center p-3 bg-white rounded-xl shadow-md border border-gray-100 transition-all duration-200 hover:shadow-lg transform hover:scale-105 group">
      <div className="text-gray-600 group-hover:text-blue-600 transition-colors duration-200">
        {icon}
      </div>
      {count && (
        <span className="text-xs font-medium text-gray-500 mt-1 group-hover:text-blue-600 transition-colors duration-200">
          {count}
        </span>
      )}
    </button>
  )
}

function formatMarkdown(content: string): string {
  // Simple markdown to HTML conversion for demonstration
  return content
    .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold text-gray-900 mb-6 mt-8">$1</h1>')
    .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">$2</h2>')
    .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold text-gray-900 mb-3 mt-6">$3</h3>')
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
    .replace(/^- (.*$)/gm, '<li class="text-gray-700 mb-2">$1</li>')
    .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="bg-gray-100 rounded-lg p-4 my-6 overflow-x-auto"><code class="text-sm text-gray-800">$2</code></pre>')
    .replace(/\n\n/g, '</p><p class="text-gray-700 mb-4 leading-relaxed">')
    .replace(/^(?!<[h|l|p])/gm, '<p class="text-gray-700 mb-4 leading-relaxed">')
    .replace(/(?<!>)$/gm, '</p>')
}