import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard-header"
import { MetricsGrid } from "@/components/metrics-grid"
import { PerformanceCharts } from "@/components/performance-charts"
import { LiveMetrics } from "@/components/live-metrics"
import { SystemStatus } from "@/components/system-status"

export const metadata: Metadata = {
  title: "Performance Dashboard - Real-time Analytics",
  description: "Monitor your application performance with real-time metrics, charts, and analytics.",
}

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-primary/5">
      <DashboardHeader />
      <div className="container mx-auto px-4 py-8 space-y-8">
        <MetricsGrid />
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <PerformanceCharts />
          </div>
          <div className="space-y-8">
            <LiveMetrics />
            <SystemStatus />
          </div>
        </div>
      </div>
    </main>
  )
}
