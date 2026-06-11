"use client"

import { School } from "@/types/school"
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6"

interface SiteFooterProps {
  school: School
}

const getIcon = (iconName: string, size: number = 20) => {
  switch (iconName) {
    case "Facebook":
      return <FaFacebookF size={size} />

    case "Instagram":
      return <FaInstagram size={size} />

    case "LinkedIn":
    case "Linkedin":
      return <FaLinkedinIn size={size} />

    case "Telegram":
    case "Send":
      return <FaTelegram size={size} />

    case "YouTube":
    case "Youtube":
      return <FaYoutube size={size} />

    case "Twitter":
      return <FaXTwitter size={size} />

    default:
      return null
  }
}

export function SiteFooter({ school }: SiteFooterProps) {
  return (
    <footer
      className="py-10"
      style={{
        backgroundColor: school.primaryColor,
        color: school.secondaryColor,
      }}
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Social Icons */}
        <div className="flex items-center justify-center gap-6 mb-6">
          {school.footer.socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.platform}
              className="transition-all duration-300 hover:scale-110"
              style={{
                color: school.accentColor,
              }}
            >
              {getIcon(link.icon, 20)}
            </a>
          ))}
        </div>

        {/* Accent Divider */}
        <div
          className="w-14 h-[2px] mx-auto rounded-full mb-6"
          style={{
            backgroundColor: school.accentColor,
          }}
        />

        {/* Description */}
        <p
          className="max-w-2xl mx-auto text-xs md:text-sm leading-relaxed mb-6"
          style={{
            color: school.secondaryColor,
            opacity: 0.85,
          }}
        >
          {school.footer.description}
        </p>

        {/* Logo / School Name */}
        <div className="mb-5">
          {school.logo ? (
            <img
              src={school.logo}
              alt={school.name}
              className="h-12 mx-auto object-contain"
            />
          ) : (
            <h2
              className="text-2xl md:text-3xl font-bold tracking-wide"
              style={{
                color: school.accentColor,
              }}
            >
              {school.name}
            </h2>
          )}
        </div>

        {/* Location */}
        <p
          className="text-xs mb-3"
          style={{
            color: school.secondaryColor,
            opacity: 0.85,
          }}
        >
          Addis Ababa, Ethiopia
        </p>

        {/* Copyright */}
        <div
          className="border-t pt-4 mt-4"
          style={{
            borderColor: `${school.secondaryColor}25`,
          }}
        >
          <p
            className="text-[11px]"
            style={{
              color: school.secondaryColor,
              opacity: 0.65,
            }}
          >
            © {new Date().getFullYear()} {school.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}