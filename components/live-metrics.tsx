"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Activity, Wifi, Database, Shield } from "lucide-react"

interface LiveMetric {
  id: string
  label: string
  value: number
  max: number
  unit: string
  status: "good" | "warning" | "critical"
  icon: any
}

export function LiveMetrics() {
  const [metrics, setMetrics] = useState<LiveMetric[]>([
    {
      id: "network",
      label: "Network Latency",
      value: 45,
      max: 100,
      unit: "ms",
      status: "good",
      icon: Wifi,
    },
    {
      id: "database",
      label: "DB Connections",
      value: 78,
      max: 100,
      unit: "%",
      status: "warning",
      icon: Database,
    },
    {
      id: "security",
      label: "Security Score",
      value: 95,
      max: 100,
      unit: "%",
      status: "good",
      icon: Shield,
    },
    {
      id: "uptime",
      label: "Uptime",
      value: 99.9,
      max: 100,
      unit: "%",
      status: "good",
      icon: Activity,
    },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) =>
        prev.map((metric) => {
          const newValue = Math.max(0, Math.min(metric.max, metric.value + (Math.random() - 0.5) * 10))

          let status: "good" | "warning" | "critical" = "good"
          const percentage = (newValue / metric.max) * 100

          if (metric.id === "network") {
            status = newValue > 80 ? "critical" : newValue > 50 ? "warning" : "good"
          } else {
            status = percentage < 70 ? "critical" : percentage < 85 ? "warning" : "good"
          }

          return {
            ...metric,
            value: newValue,
            status,
          }
        }),
      )
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "good":
        return "text-green-500"
      case "warning":
        return "text-yellow-500"
      case "critical":
        return "text-red-500"
      default:
        return "text-gray-500"
    }
  }

  const getStatusBg = (status: string) => {
    switch (status) {
      case "good":
        return "bg-green-500/10"
      case "warning":
        return "bg-yellow-500/10"
      case "critical":
        return "bg-red-500/10"
      default:
        return "bg-gray-500/10"
    }
  }

  return (
    <Card className="animate-slide-in-right">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Live System Metrics
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {metrics.map((metric, index) => (
          <div key={metric.id} className="space-y-2 animate-slide-in-up" style={{ animationDelay: `${index * 100}ms` }}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`p-1.5 rounded ${getStatusBg(metric.status)}`}>
                  <metric.icon className={`h-4 w-4 ${getStatusColor(metric.status)}`} />
                </div>
                <span className="text-sm font-medium">{metric.label}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold">
                  {metric.value.toFixed(metric.id === "uptime" ? 1 : 0)}
                  {metric.unit}
                </span>
                <Badge
                  variant="outline"
                  className={`text-xs ${getStatusBg(metric.status)} ${getStatusColor(metric.status)} border-current`}
                >
                  {metric.status}
                </Badge>
              </div>
            </div>
            <Progress value={(metric.value / metric.max) * 100} className="h-2" />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
