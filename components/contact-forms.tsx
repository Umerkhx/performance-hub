"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react"

interface FormData {
  name: string
  email: string
  company: string
  phone: string
  subject: string
  message: string
  formType: "contact" | "demo" | "support"
}

interface FormErrors {
  [key: string]: string
}

export function ContactForms() {
  const [activeForm, setActiveForm] = useState<"contact" | "demo" | "support">("contact")
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
    formType: "contact",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Real-time validation
  useEffect(() => {
    const newErrors: FormErrors = {}

    if (formData.name && formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (formData.phone && !/^[+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid phone number"
    }

    if (formData.message && formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    setErrors(newErrors)
  }, [formData])

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: "",
        formType: activeForm,
      })
    }, 3000)
  }

  const isFormValid = formData.name && formData.email && formData.message && Object.keys(errors).length === 0

  const formTypes = [
    { id: "contact" as const, label: "General Contact", color: "bg-blue-500" },
    { id: "demo" as const, label: "Request Demo", color: "bg-green-500" },
    { id: "support" as const, label: "Technical Support", color: "bg-purple-500" },
  ]

  return (
    <section className="py-20 px-4 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-heading font-bold mb-4">Send us a Message</h2>
          <p className="text-muted-foreground">Choose the type of inquiry and fill out the form below.</p>
        </div>

        {/* Form Type Selector */}
        <div className="flex flex-wrap gap-2 mb-8">
          {formTypes.map((type) => (
            <Badge
              key={type.id}
              variant={activeForm === type.id ? "default" : "outline"}
              className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                activeForm === type.id ? type.color : ""
              }`}
              onClick={() => {
                setActiveForm(type.id)
                setFormData((prev) => ({ ...prev, formType: type.id }))
              }}
            >
              {type.label}
            </Badge>
          ))}
        </div>

        <Card className="animate-slide-in-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {formTypes.find((t) => t.id === activeForm)?.label}
              <div
                className={`w-2 h-2 rounded-full ${formTypes.find((t) => t.id === activeForm)?.color} animate-pulse`}
              />
            </CardTitle>
          </CardHeader>
          <CardContent>
            {isSubmitted ? (
              <div className="text-center py-8 animate-fade-in">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4 animate-bounce" />
                <h3 className="text-xl font-bold mb-2">Message Sent Successfully!</h3>
                <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className={`transition-all duration-300 ${errors.name ? "border-red-500 animate-shake" : "focus:border-primary"}`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <div className="flex items-center gap-1 text-red-500 text-sm animate-slide-in-down">
                        <AlertCircle className="h-3 w-3" />
                        {errors.name}
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className={`transition-all duration-300 ${errors.email ? "border-red-500 animate-shake" : "focus:border-primary"}`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <div className="flex items-center gap-1 text-red-500 text-sm animate-slide-in-down">
                        <AlertCircle className="h-3 w-3" />
                        {errors.email}
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className="transition-all duration-300 focus:border-primary"
                      placeholder="Your company name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className={`transition-all duration-300 ${errors.phone ? "border-red-500 animate-shake" : "focus:border-primary"}`}
                      placeholder="+1 (555) 123-4567"
                    />
                    {errors.phone && (
                      <div className="flex items-center gap-1 text-red-500 text-sm animate-slide-in-down">
                        <AlertCircle className="h-3 w-3" />
                        {errors.phone}
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    className="transition-all duration-300 focus:border-primary"
                    placeholder="What can we help you with?"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className={`min-h-32 transition-all duration-300 ${errors.message ? "border-red-500 animate-shake" : "focus:border-primary"}`}
                    placeholder="Tell us more about your needs..."
                  />
                  {errors.message && (
                    <div className="flex items-center gap-1 text-red-500 text-sm animate-slide-in-down">
                      <AlertCircle className="h-3 w-3" />
                      {errors.message}
                    </div>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className={`w-full transition-all duration-300 ${isFormValid ? "animate-pulse-glow" : "opacity-50"}`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
