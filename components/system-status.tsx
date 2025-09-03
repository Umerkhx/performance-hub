"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertTriangle, XCircle, Clock } from "lucide-react"

interface StatusItem {
  id: string
  service: string
  status: "operational" | "degraded" | "outage" | "maintenance"
  lastChecked: Date
  responseTime: number
}

export function SystemStatus() {
  const [statusItems, setStatusItems] = useState<StatusItem[]>([
    {
      id: "api",
      service: "API Gateway",
      status: "operational",
      lastChecked: new Date(),
      responseTime: 120,
    },
    {
      id: "database",
      service: "Database",
      status: "operational",
      lastChecked: new Date(),
      responseTime: 45,
    },
    {
      id: "cdn",
      service: "CDN",
      status: "degraded",
      lastChecked: new Date(),
      responseTime: 280,
    },
    {
      id: "auth",
      service: "Authentication",
      status: "operational",
      lastChecked: new Date(),
      responseTime: 95,
    },
    {
      id: "monitoring",
      service: "Monitoring",
      status: "maintenance",
      lastChecked: new Date(),
      responseTime: 0,
    },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusItems((prev) =>
        prev.map((item) => {
          const statuses: StatusItem["status"][] = ["operational", "degraded", "outage", "maintenance"]
          const randomStatus = Math.random()

          let newStatus: StatusItem["status"] = item.status
          if (randomStatus < 0.1) {
            newStatus = statuses[Math.floor(Math.random() * statuses.length)]
          }

          return {
            ...item,
            status: newStatus,
            lastChecked: new Date(),
            responseTime: newStatus === "maintenance" ? 0 : 50 + Math.random() * 200,
          }
        }),
      )
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  const getStatusIcon = (status: StatusItem["status"]) => {
    switch (status) {
      case "operational":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "degraded":
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />
      case "outage":
        return <XCircle className="h-4 w-4 text-red-500" />
      case "maintenance":
        return <Clock className="h-4 w-4 text-blue-500" />
    }
  }

  const getStatusBadge = (status: StatusItem["status"]) => {
    const variants = {
      operational: "bg-green-500/10 text-green-600 border-green-500/20",
      degraded: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
      outage: "bg-red-500/10 text-red-600 border-red-500/20",
      maintenance: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    }

    return (
      <Badge variant="outline" className={variants[status]}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    )
  }

  const overallStatus = statusItems.every((item) => item.status === "operational")
    ? "All Systems Operational"
    : statusItems.some((item) => item.status === "outage")
      ? "System Outage Detected"
      : "Partial System Issues"

  return (
    <Card className="animate-slide-in-right delay-300">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          System Status
          <Badge
            variant="outline"
            className={`${
              overallStatus === "All Systems Operational"
                ? "bg-green-500/10 text-green-600 border-green-500/20"
                : "bg-yellow-500/10 text-yellow-600 border-yellow-500/20"
            }`}
          >
            {overallStatus === "All Systems Operational" ? "Healthy" : "Issues"}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {statusItems.map((item, index) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-3 rounded-lg border hover:bg-secondary/50 transition-colors animate-slide-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center gap-3">
              {getStatusIcon(item.status)}
              <div>
                <div className="font-medium text-sm">{item.service}</div>
                <div className="text-xs text-muted-foreground">
                  {item.status === "maintenance" ? "Under maintenance" : `${item.responseTime.toFixed(0)}ms response`}
                </div>
              </div>
            </div>
            <div className="text-right">
              {getStatusBadge(item.status)}
              <div className="text-xs text-muted-foreground mt-1">{item.lastChecked.toLocaleTimeString()}</div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
