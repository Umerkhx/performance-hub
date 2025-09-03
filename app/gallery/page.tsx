import { GalleryGrid } from "@/components/gallery-grid"
import { GalleryHero } from "@/components/gallery-hero"
import { Navigation } from "@/components/navigation"

export const revalidate = 60

export const metadata = {
  title: "Performance Gallery - PerformanceHub",
  description: "Explore our comprehensive gallery of performance testing tools and solutions",
}

async function getPicsumImages() {
  const res = await fetch("https://picsum.photos/v2/list?limit=12", {
    next: { revalidate: 30 },
  })
  if (!res.ok) throw new Error("Failed to fetch Picsum images")
  return res.json()
}


function getServerTimestamp() {
  return new Date().toLocaleString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  })
}

export default async function GalleryPage() {
  const buildTimestamp = getServerTimestamp()
  
  const [picsumImages] = await Promise.all([getPicsumImages()])

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <GalleryHero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* ISR Status Indicator */}
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">ISR Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <span className="text-gray-600">Page Revalidate:</span>
              <span className="ml-2 font-mono bg-blue-100 text-blue-800 px-2 py-1 rounded">60 seconds</span>
            </div>
            <div>
              <span className="text-gray-600">API Cache:</span>
              <span className="ml-2 font-mono bg-green-100 text-green-800 px-2 py-1 rounded">30s / 45s</span>
            </div>
            <div>
              <span className="text-gray-600">Generated At:</span>
              <span className="ml-2 font-mono bg-purple-100 text-purple-800 px-2 py-1 rounded">{buildTimestamp} UTC</span>
            </div>
          </div>
          <p className="text-gray-600 mt-3 text-sm">
            Refresh this page multiple times within 60 seconds - you should see the same timestamp. 
            After 60 seconds, the page will regenerate with a new timestamp on the next visit.
          </p>
        </div>

        {/* Picsum Photos Gallery */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Picsum Photos Gallery</h2>
            <p className="text-gray-600">Random high-quality images fetched server-side (revalidates every 30s)</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {picsumImages.map((item: any) => (
              <div key={item.id} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={`https://picsum.photos/400/400?random=${item.id}`}
                    alt={`Photo by ${item.author}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 truncate">Photo #{item.id}</h3>
                  <p className="text-sm text-gray-600">by {item.author}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      {item.width}×{item.height}
                    </span>
                    <a 
                      href={item.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      View Original
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

 

        {/* ISR Testing Instructions */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Testing ISR Behavior</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">How to Test:</h3>
              <ol className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">1</span>
                  Note the "Generated At\" timestamp above
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">2</span>
                  Refresh the page multiple times quickly
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">3</span>
                  Timestamp should remain the same (served from cache)
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">4</span>
                  Wait 60+ seconds, then refresh
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">5</span>
                  New timestamp appears (page regenerated)
                </li>
              </ol>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">What You'll See:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-0.5">✓</span>
                  Fast page loads (served from static cache)
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-0.5">✓</span>
                  Fresh content every 60 seconds
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-0.5">✓</span>
                  API data cached independently (30s/45s)
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-0.5">✓</span>
                  Zero loading time for cached content
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}