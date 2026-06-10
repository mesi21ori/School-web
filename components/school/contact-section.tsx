"use client"

import { School } from "@/types/school"
import { SectionHeader } from "@/components/shared/section-header"
import { ContactForm } from "@/components/forms/contact-form"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

interface ContactSectionProps {
  school: School
}

export function ContactSection({ school }: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Get in Touch" description="We'd love to hear from you. Contact us today!" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-background p-8 rounded-xl border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
            <ContactForm primaryColor={school.primaryColor} />
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>

              {/* Phone */}
              <div className="flex gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 text-white"
                  style={{ backgroundColor: school.primaryColor }}
                >
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                  <p className="text-muted-foreground">{school.contact.phone}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 text-white"
                  style={{ backgroundColor: school.primaryColor }}
                >
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <p className="text-muted-foreground">{school.contact.email}</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 text-white"
                  style={{ backgroundColor: school.primaryColor }}
                >
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Address</h4>
                  <p className="text-muted-foreground">{school.contact.address}</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 text-white"
                  style={{ backgroundColor: school.primaryColor }}
                >
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Office Hours</h4>
                  <p className="text-muted-foreground">{school.contact.hours}</p>
                </div>
              </div>
            </div>

            {/* Map Link */}
            {school.contact.mapUrl && (
              <div className="pt-4 border-t">
                <a
                  href={school.contact.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold"
                  style={{ color: school.primaryColor }}
                >
                  View on Map →
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
