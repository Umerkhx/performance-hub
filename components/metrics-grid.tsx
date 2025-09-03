"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Activity, Clock, Users, Zap, Server, Globe, ArrowUp, ArrowDown } from "lucide-react"

interface Metric {
  id: string
  title: string
  value: number
  unit: string
  change: number
  trend: "up" | "down"
  icon: any
  color: string
  bgColor: string
  target?: number
}

export function MetricsGrid() {
  const [metrics, setMetrics] = useState<Metric[]>([
    {
      id: "response-time",
      title: "Avg Response Time",
      value: 245,
      unit: "ms",
      change: -12.5,
      trend: "down",
      icon: Clock,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      target: 300,
    },
    {
      id: "throughput",
      title: "Requests/sec",
      value: 1247,
      unit: "req/s",
      change: 8.3,
      trend: "up",
      icon: Activity,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      target: 1500,
    },
    {
      id: "active-users",
      title: "Active Users",
      value: 3421,
      unit: "users",
      change: 15.7,
      trend: "up",
      icon: Users,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      id: "error-rate",
      title: "Error Rate",
      value: 0.12,
      unit: "%",
      change: -0.05,
      trend: "down",
      icon: Zap,
      color: "text-red-500",
      bgColor: "bg-red-500/10",
      target: 1,
    },
    {
      id: "cpu-usage",
      title: "CPU Usage",
      value: 67.8,
      unit: "%",
      change: 5.2,
      trend: "up",
      icon: Server,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      target: 100,
    },
    {
      id: "bandwidth",
      title: "Bandwidth",
      value: 89.3,
      unit: "Mbps",
      change: -2.1,
      trend: "down",
      icon: Globe,
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10",
      target: 100,
    },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) =>
        prev.map((metric) => ({
          ...metric,
          value: metric.value + (Math.random() - 0.5) * (metric.value * 0.1),
          change: (Math.random() - 0.5) * 20,
          trend: Math.random() > 0.5 ? "up" : "down",
        })),
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {metrics.map((metric, index) => (
        <Card
          key={metric.id}
          className="animate-slide-in-up hover:shadow-lg transition-all duration-500 hover:scale-105"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{metric.title}</CardTitle>
            <div className={`p-2 rounded-lg ${metric.bgColor}`}>
              <metric.icon className={`h-4 w-4 ${metric.color}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-2">
              <div className="text-2xl font-bold">
                {metric.value.toFixed(metric.unit === "%" ? 1 : 0)}
                <span className="text-sm font-normal text-muted-foreground ml-1">{metric.unit}</span>
              </div>
              <div
                className={`flex items-center gap-1 text-sm ${
                  metric.trend === "up" ? "text-green-500" : "text-red-500"
                }`}
              >
                {metric.trend === "up" ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
                {Math.abs(metric.change).toFixed(1)}%
              </div>
            </div>

            {metric.target && (
              <div className="space-y-1">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Progress</span>
                  <span>{((metric.value / metric.target) * 100).toFixed(0)}%</span>
                </div>
                <Progress value={(metric.value / metric.target) * 100} className="h-2" />
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
