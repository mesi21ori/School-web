"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react"
import { School } from "@/types/school"

interface SiteHeaderProps {
  school: School
}

type DropdownItem = {
  label: string
  href: string
  external?: boolean
}

type NavItem = {
  label: string
  href?: string
  dropdown?: DropdownItem[]
}

export function SiteHeader({ school }: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    null
  )

  const navLinks: NavItem[] = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About Us",
      dropdown: [
        {
          label: "About the School",
          href: "/about",
        },
        {
          label: "Mission & Vision",
          href: "/about/mission-vision",
        },
        {
          label: "Meet Our Team",
          href: "/about/team",
        },
      ],
    },
    {
      label: "Gallery & Events",
      href: "/gallery-events",
    },
    {
      label: "Academics",
      dropdown: [
        {
          label: "Grades",
          href: "/academics/grades",
        },
        {
          label: "Facilities",
          href: "/academics/facilities",
        },
        {
          label: "Rules and Regulations",
          href: "/academics/rules-and-regulations",
        },
        {
          label: "Apply for Admission",
          href: "/academics/admission",
        },
        {
          label: "Apply for Scholarship Program",
          href: "/academics/scholarship",
        },
      ],
    },
    {
      label: "News",
      href: "/news",
    },
    {
      label: "Join us",
      dropdown: [
        {
          label: "TikTok",
          href: "https://www.tiktok.com/@ozoneschool",
          external: true,
        },
        {
          label: "Instagram",
          href: "https://www.instagram.com/ozoneschool",
          external: true,
        },
        {
          label: "Telegram",
          href: "https://t.me/ozoneschool",
          external: true,
        },
      ],
    },
  ]

  const initials = school.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)

  const toggleMobileDropdown = (label: string) => {
    setOpenMobileDropdown((current) => (current === label ? null : label))
  }

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 py-4 sm:px-6 lg:px-8">
      <div
        className="mx-auto max-w-7xl rounded-[28px] border bg-white/85 px-5 shadow-sm backdrop-blur-xl"
        style={{
          borderColor: `${school.primaryColor}25`,
        }}
      >
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 mt-1">
            {school.logo ? (
              <div className="relative h-20 w-20 overflow-hidden rounded-xl">
                <Image
                  src={school.logo}
                  alt={`${school.name} logo`}
                  fill
                  className="object-contain p-1"
                />
              </div>
            ) : (
              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl text-sm font-bold text-white"
                style={{ backgroundColor: school.primaryColor }}
              >
                {initials}
              </div>
            )}

            <div className="leading-none">
              <h1
                className="text-xl font-bold tracking-tight"
                style={{ color: school.primaryColor }}
              >
                {school.name.split(" ")[0]}
              </h1>

              <p className="text-xs font-medium text-muted-foreground">
                {school.name.split(" ").slice(1).join(" ") || "School"}
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              if (link.dropdown) {
                return (
                  <div key={link.label} className="group relative">
                    <button className="flex items-center gap-1 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground">
                      {link.label}
                      <ChevronDown
                        size={16}
                        className="transition-transform group-hover:rotate-180"
                      />
                    </button>

                    <div className="invisible absolute left-1/2 top-full z-50 mt-4 w-72 -translate-x-1/2 rounded-3xl border bg-white p-3 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                      {link.dropdown.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          target={item.external ? "_blank" : undefined}
                          rel={item.external ? "noopener noreferrer" : undefined}
                          className="block rounded-2xl px-4 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )
              }

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              )
            })}
          </nav>

          {/* Desktop Login Button */}
          {/* Desktop Login Button */}
          <a
            href="https://sm-erp.pilanop.fun/auth/sign-in"
            className="hidden items-center gap-3 rounded-full px-6 py-3 text-xs font-bold uppercase tracking-[0.22em] text-white shadow-sm transition-all hover:scale-[1.02] md:flex"
            style={{ backgroundColor: school.primaryColor }}
          >
            Login
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
              <ArrowUpRight size={18} />
            </span>
          </a>
          {/* Mobile Menu Toggle */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full md:hidden"
            style={{
              backgroundColor: `${school.primaryColor}15`,
              color: school.primaryColor,
            }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="border-t py-4 md:hidden">
            <div className="flex flex-col items-center gap-2">
              {navLinks.map((link) => {
                if (link.dropdown) {
                  const isOpen = openMobileDropdown === link.label

                  return (
                    <div key={link.label} className="w-full">
                      <button
                        type="button"
                        onClick={() => toggleMobileDropdown(link.label)}
                        className="flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3 text-center text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                      >
                        {link.label}
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${isOpen ? "rotate-180" : ""
                            }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="mt-1 rounded-2xl bg-muted/50 p-2">
                          {link.dropdown.map((item) => (
                            <a
                              key={item.href}
                              href={item.href}
                              target={item.external ? "_blank" : undefined}
                              rel={
                                item.external
                                  ? "noopener noreferrer"
                                  : undefined
                              }
                              className="block rounded-xl px-4 py-3 text-center text-sm font-medium text-muted-foreground transition-colors hover:bg-white hover:text-foreground"
                              onClick={() => {
                                setIsMenuOpen(false)
                                setOpenMobileDropdown(null)
                              }}
                            >
                              {item.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                }

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className="w-full rounded-2xl px-4 py-3 text-center text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                )
              })}

              {/* Mobile Login Button */}
              {/* Mobile Login Button */}
              <a
                href="https://sm-erp.pilanop.fun/auth/sign-in"
                className="mt-2 flex w-full items-center justify-center gap-3 rounded-full px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white"
                style={{ backgroundColor: school.primaryColor }}
                onClick={() => setIsMenuOpen(false)}
              >
                Login
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                  <ArrowUpRight size={18} />
                </span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}