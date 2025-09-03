import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Activity, BarChart3, Database, Globe, Layers, Monitor, Rocket, Shield, Zap, ArrowRight } from "lucide-react"

const features = [
  {
    icon: Activity,
    title: "Real-time Monitoring",
    description: "Monitor your applications performance in real-time with advanced metrics and comprehensive alerting systems.",
    gradient: "from-blue-500 to-cyan-500",
    iconBg: "bg-blue-50 dark:bg-blue-950/50",
    iconColor: "text-blue-600 dark:text-blue-400",
    border: "hover:border-blue-200 dark:hover:border-blue-800",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Deep dive into performance data with machine learning powered analytics and predictive insights.",
    gradient: "from-purple-500 to-pink-500",
    iconBg: "bg-purple-50 dark:bg-purple-950/50",
    iconColor: "text-purple-600 dark:text-purple-400",
    border: "hover:border-purple-200 dark:hover:border-purple-800",
  },
  {
    icon: Database,
    title: "Load Testing",
    description: "Simulate massive loads and stress test applications under extreme conditions with intelligent scaling.",
    gradient: "from-emerald-500 to-teal-500",
    iconBg: "bg-emerald-50 dark:bg-emerald-950/50",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    border: "hover:border-emerald-200 dark:hover:border-emerald-800",
  },
  {
    icon: Globe,
    title: "Global CDN Testing",
    description: "Test performance across 50+ geographic locations with real-world network conditions and latency simulation.",
    gradient: "from-amber-500 to-orange-500",
    iconBg: "bg-amber-50 dark:bg-amber-950/50",
    iconColor: "text-amber-600 dark:text-amber-400",
    border: "hover:border-amber-200 dark:hover:border-amber-800",
  },
  {
    icon: Layers,
    title: "Multi-layer Analysis",
    description: "Comprehensive analysis from frontend rendering to database queries with distributed tracing capabilities.",
    gradient: "from-indigo-500 to-blue-500",
    iconBg: "bg-indigo-50 dark:bg-indigo-950/50",
    iconColor: "text-indigo-600 dark:text-indigo-400",
    border: "hover:border-indigo-200 dark:hover:border-indigo-800",
  },
  {
    icon: Monitor,
    title: "Visual Regression",
    description: "AI-powered visual testing that automatically detects UI changes and performance regressions across builds.",
    gradient: "from-rose-500 to-red-500",
    iconBg: "bg-rose-50 dark:bg-rose-950/50",
    iconColor: "text-rose-600 dark:text-rose-400",
    border: "hover:border-rose-200 dark:hover:border-rose-800",
  },
  {
    icon: Rocket,
    title: "Performance Optimization",
    description: "Get AI-powered recommendations and automated optimizations to boost your application's performance score.",
    gradient: "from-violet-500 to-purple-500",
    iconBg: "bg-violet-50 dark:bg-violet-950/50",
    iconColor: "text-violet-600 dark:text-violet-400",
    border: "hover:border-violet-200 dark:hover:border-violet-800",
  },
  {
    icon: Shield,
    title: "Security Testing",
    description: "Integrated security analysis with performance testing for comprehensive application assessment and protection.",
    gradient: "from-slate-500 to-gray-500",
    iconBg: "bg-slate-50 dark:bg-slate-950/50",
    iconColor: "text-slate-600 dark:text-slate-400",
    border: "hover:border-slate-200 dark:hover:border-slate-800",
  },
]

export function FeaturesGrid() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-black text-3xl md:text-5xl text-balance mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-900 via-purple-950 to-indigo-900 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Everything you need to test, monitor, and optimize your applications performance with cutting-edge tools and
            real-time insights powered by enterprise-grade infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <Card
                key={index}
                className={`group relative overflow-hidden bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 ${feature.border} hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-slate-900/50 transition-all duration-300 cursor-pointer`}
              >
                {/* Subtle gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <CardHeader className="pb-4 relative z-10">
                  <div className={`w-14 h-14 rounded-xl ${feature.iconBg} flex items-center justify-center mb-4 border border-slate-100 dark:border-slate-800 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-7 w-7 ${feature.iconColor}`} />
                  </div>
                  <CardTitle className="font-bold text-lg text-slate-900 dark:text-slate-100 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <CardDescription className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 text-sm">
                    {feature.description}
                  </CardDescription>
                  
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="p-3 h-auto font-medium text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </CardContent>

                {/* Premium border accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl">
            <Zap className="mr-2 h-5 w-5" />
            Explore All Features
          </Button>
        </div>
      </div>
    </section>
  )
}