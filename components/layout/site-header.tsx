"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { School } from "@/types/school"

interface SiteHeaderProps {
  school: School
}

export function SiteHeader({ school }: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Mission", href: "#mission" },
    { label: "Programs", href: "#programs" },
    { label: "Why Us", href: "#why-us" },
  ]

  const initials = school.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)

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
          <a href="#hero" className="flex items-center gap-3">
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

              <p className=" text-xs font-medium text-muted-foreground">
                {school.name.split(" ").slice(1).join(" ") || "School"}
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Contact Button */}
          <a
            href="#contact"
            className="hidden items-center gap-3 rounded-full px-6 py-3 text-xs font-bold uppercase tracking-[0.22em] text-white shadow-sm transition-all hover:scale-[1.02] md:flex"
            style={{ backgroundColor: school.primaryColor }}
          >
            Contact
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
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-2xl px-4 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 flex items-center justify-between rounded-full px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white"
                style={{ backgroundColor: school.primaryColor }}
              >
                Contact
                <ArrowUpRight size={18} />
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}