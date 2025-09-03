"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Twitter } from "lucide-react"

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "CEO & Founder",
    bio: "Former Google engineer with 10+ years in performance optimization",
    image: "/professional-woman-ceo.png",
    skills: ["Leadership", "Strategy", "Performance"],
    social: { github: "#", linkedin: "#", twitter: "#" },
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO",
    bio: "Full-stack architect specializing in scalable testing infrastructure",
    image: "/professional-man-cto-tech-leader.png",
    skills: ["Architecture", "DevOps", "Scaling"],
    social: { github: "#", linkedin: "#", twitter: "#" },
  },
  {
    name: "Emily Watson",
    role: "Lead Engineer",
    bio: "Performance testing expert with expertise in load testing frameworks",
    image: "/professional-woman-engineer-developer.jpg",
    skills: ["Testing", "Automation", "Frameworks"],
    social: { github: "#", linkedin: "#", twitter: "#" },
  },
  {
    name: "David Kim",
    role: "Data Scientist",
    bio: "AI/ML specialist focused on predictive performance analytics",
    image: "/professional-man-data-scientist-ai.jpg",
    skills: ["AI/ML", "Analytics", "Prediction"],
    social: { github: "#", linkedin: "#", twitter: "#" },
  },
  {
    name: "Lisa Thompson",
    role: "UX Designer",
    bio: "Design systems expert creating intuitive testing interfaces",
    image: "/professional-woman-ux-designer-creative.jpg",
    skills: ["Design", "UX/UI", "Systems"],
    social: { github: "#", linkedin: "#", twitter: "#" },
  },
  {
    name: "Alex Johnson",
    role: "DevOps Engineer",
    bio: "Cloud infrastructure specialist ensuring 99.9% uptime",
    image: "/professional-person-devops-engineer-cloud.jpg",
    skills: ["Cloud", "Infrastructure", "Monitoring"],
    social: { github: "#", linkedin: "#", twitter: "#" },
  },
]

export function TeamGrid() {
  const gridRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = gridRef.current?.querySelectorAll(".team-card")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={gridRef} className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">{"Meet Our Team"}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {"The brilliant minds behind our cutting-edge performance testing solutions."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="team-card opacity-0 translate-y-8 group hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Social Links */}
                  <div className="absolute bottom-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <a
                      href={member.social.github}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Github className="h-4 w-4 text-white" />
                    </a>
                    <a
                      href={member.social.linkedin}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Linkedin className="h-4 w-4 text-white" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Twitter className="h-4 w-4 text-white" />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{member.bio}</p>

                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
