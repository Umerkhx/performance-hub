import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Cpu, Gauge, Zap, TrendingUp } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-full opacity-60"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-violet-100 to-purple-100 dark:from-violet-900/20 dark:to-purple-900/20 rounded-full opacity-40"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-full opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
        <div>
          <h1 className="font-black text-3xl lg:text-5xl text-balance mb-6 leading-tight">
            <span className=" text-slate-900 dark:text-slate-100">
              Performance
            </span>
            <br />
            <span className="text-slate-900 dark:text-slate-100">Testing Platform</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            Experience the ultimate performance testing environment with comprehensive metrics, 
            real-time analysis, and enterprise-grade reliability.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700 shadow-lg">
              Start Testing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2 border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600">
              View Demo
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <Card className="p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/80 dark:border-slate-700/80 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-xl transition-all duration-200">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <TrendingUp className="h-4 w-4 text-green-500" />
            </div>
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">434</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Total Requests</div>
          </Card>

          <Card className="p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/80 dark:border-slate-700/80 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-xl transition-all duration-200">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
                <Gauge className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <TrendingUp className="h-4 w-4 text-green-500" />
            </div>
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">28 ms</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Avg Latency</div>
          </Card>

          <Card className="p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/80 dark:border-slate-700/80 hover:border-indigo-300 dark:hover:border-indigo-600 hover:shadow-xl transition-all duration-200">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
                <Cpu className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <TrendingUp className="h-4 w-4 text-green-500" />
            </div>
            <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">2</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Req/sec</div>
          </Card>

          <Card className="p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/80 dark:border-slate-700/80 hover:border-emerald-300 dark:hover:border-emerald-600 hover:shadow-xl transition-all duration-200">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
                <TrendingUp className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <Zap className="h-4 w-4 text-amber-500" />
            </div>
            <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">99.8%</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Uptime</div>
          </Card>
        </div>
      </div>
    </section>
  )
}