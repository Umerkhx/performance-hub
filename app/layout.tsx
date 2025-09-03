import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Open_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { Navigation } from "@/components/navigation"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "PerformanceHub | Performance Testing Platform with Real-Time Metrics",
  description:
    "Test, monitor, and optimize your applications with PerformanceHub – a powerful performance testing platform featuring real-time metrics, advanced analytics, and lightning-fast monitoring.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "PerformanceHub | Performance Testing Platform with Real-Time Metrics",
    description:
      "Test, monitor, and optimize your applications with PerformanceHub – real-time metrics, analytics & monitoring.",
    url: "https://performance-hub-mme.vercel.app",
    siteName: "PerformanceHub",
    images: [
      {
        url: "https://performance-hub-mme.vercel.app/favicon.ico",
        width: 1200,
        height: 630,
        alt: "PerformanceHub Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PerformanceHub | Performance Testing Platform",
    description:
      "Boost app speed with PerformanceHub – real-time metrics, analytics & monitoring.",
    images: ["https://performance-hub-mme.vercel.app/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${montserrat.variable} ${openSans.variable} antialiased`}>
        <Navigation />
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
