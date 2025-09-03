import type { Metadata } from "next"
import { AboutHero } from "@/components/about-hero"
import { AboutStats } from "@/components/about-stats"
import { AboutTimeline } from "@/components/about-timeline"
import { TeamGrid } from "@/components/team-grid"
import { AboutCTA } from "@/components/about-cta"

export const metadata: Metadata = {
  title: "About Us - Performance Testing Experts",
  description:
    "Learn about our mission to revolutionize performance testing with cutting-edge tools and methodologies.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <AboutStats />
      <AboutTimeline />
      <TeamGrid />
      <AboutCTA />
    </main>
  )
}
