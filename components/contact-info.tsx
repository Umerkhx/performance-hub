"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, MessageCircle, Calendar } from "lucide-react"

const contactMethods = [
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our experts",
    value: "+1 (555) 123-4567",
    action: "Call Now",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Get detailed responses within 2 hours",
    value: "support@perftest.com",
    action: "Send Email",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Instant help from our team",
    value: "Available 24/7",
    action: "Start Chat",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: Calendar,
    title: "Schedule Meeting",
    description: "Book a personalized demo",
    value: "30-minute sessions",
    action: "Book Now",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
]

const offices = [
  {
    city: "San Francisco",
    address: "123 Tech Street, Suite 100",
    zipcode: "CA 94105",
    phone: "+1 (555) 123-4567",
    hours: "Mon-Fri 9AM-6PM PST",
  },
  {
    city: "New York",
    address: "456 Innovation Ave, Floor 15",
    zipcode: "NY 10001",
    phone: "+1 (555) 987-6543",
    hours: "Mon-Fri 9AM-6PM EST",
  },
  {
    city: "London",
    address: "789 Performance Lane",
    zipcode: "EC1A 1BB, UK",
    phone: "+44 20 7123 4567",
    hours: "Mon-Fri 9AM-5PM GMT",
  },
]

export function ContactInfo() {
  const infoRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in-right")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = infoRef.current?.querySelectorAll(".contact-card")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={infoRef} className="py-20 px-4 lg:px-8 bg-secondary/20">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-heading font-bold mb-4">Other Ways to Reach Us</h2>
          <p className="text-muted-foreground">Choose the method that works best for you.</p>
        </div>

        {/* Contact Methods */}
        <div className="space-y-4 mb-12">
          {contactMethods.map((method, index) => (
            <Card
              key={index}
              className=" group hover:shadow-lg transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 rounded-full ${method.bgColor} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <method.icon className={`h-6 w-6 ${method.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold mb-1">{method.title}</h3>
                    <p className="text-sm text-muted-foreground mb-1">{method.description}</p>
                    <p className="font-medium text-primary">{method.value}</p>
                  </div>
                  <Button variant="outline" size="sm" className="bg-transparent">
                    {method.action}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Office Locations */}
        <div className="space-y-6">
          <h3 className="text-2xl font-heading font-bold">Our Offices</h3>
          {offices.map((office, index) => (
            <Card
              key={index}
              className="  hover:shadow-lg transition-all duration-500"
              style={{ animationDelay: `${(contactMethods.length + index) * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-heading font-bold text-lg mb-2">{office.city}</h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>{office.address}</p>
                      <p>{office.zipcode}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Phone className="h-4 w-4" />
                        <span>{office.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{office.hours}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Stats */}
        <Card className=" mt-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
          <CardContent className="p-6 text-center">
            <h4 className="font-heading font-bold text-lg mb-4">Response Time Guarantee</h4>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <div className="text-2xl font-bold text-primary">&lt; 2 hours</div>
                <div className="text-sm text-muted-foreground">Email Response</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">&lt; 30 seconds</div>
                <div className="text-sm text-muted-foreground">Live Chat</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Phone Support</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
