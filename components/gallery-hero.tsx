
export function GalleryHero() {


  return (
<section className="pt-24 pb-16 bg-gradient-to-r from-primary/5 to-accent/5 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-heading font-black text-2xl md:text-4xl mb-6">
          Incremental Static Regeneration (ISR) Gallery
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
          This gallery demonstrates <strong>Next.js ISR</strong>.  
          Pages are pre-rendered for speed (like static sites), but they 
          automatically <strong>regenerate every 60s</strong> in the background 
          whenever requests come in.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 max-w-4xl mx-auto">
          <div className="p-4 bg-card rounded-lg shadow">
            <h3 className="font-bold mb-2">⚡ Fast Loads</h3>
            <p className="text-sm text-muted-foreground">
              Users always get a pre-rendered static page instantly.
            </p>
          </div>
          <div className="p-4 bg-card rounded-lg shadow">
            <h3 className="font-bold mb-2">♻️ Auto Updates</h3>
            <p className="text-sm text-muted-foreground">
              Content refreshes automatically without redeploys.
            </p>
          </div>
          <div className="p-4 bg-card rounded-lg shadow">
            <h3 className="font-bold mb-2">🔍 SEO Friendly</h3>
            <p className="text-sm text-muted-foreground">
              Search engines crawl fresh static HTML on every regeneration.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
