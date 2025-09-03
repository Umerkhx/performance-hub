import type { Metadata } from "next"
import { ContactHero } from "@/components/contact-hero"
import { ContactForms } from "@/components/contact-forms"
import { ContactInfo } from "@/components/contact-info"
import { ContactMap } from "@/components/contact-map"

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch",
  description: "Ready to optimize your performance? Contact our team of experts for personalized solutions.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactHero />
      <div className="grid lg:grid-cols-2 gap-0">
        <ContactForms />
        <ContactInfo />
      </div>
      <ContactMap />
    </main>
  )
}
