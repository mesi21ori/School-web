"use client"

import { School } from "@/types/school"
import { Share2, Loader, Lightbulb, Heart } from "lucide-react"

interface SiteFooterProps {
  school: School
}

const getIcon = (iconName: string, size: number = 20) => {
  const props = { size }
  switch (iconName) {
    case "Facebook":
      return <Share2 {...props} />
    case "Instagram":
      return <Heart {...props} />
    case "Twitter":
      return <Lightbulb {...props} />
    case "Linkedin":
      return <Loader {...props} />
    default:
      return null
  }
}

export function SiteFooter({ school }: SiteFooterProps) {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">{school.name}</h3>
            <p className="text-sm text-background/80">{school.footer.description}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {school.footer.quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-background/80 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {school.footer.socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/80 hover:text-background transition-colors"
                  aria-label={link.platform}
                >
                  {getIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <p className="text-center text-sm text-background/70">
            © {new Date().getFullYear()} {school.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
