"use client"

import { School } from "@/types/school"
import * as Icons from "lucide-react"

interface Props {
  school: School
}

export function AboutNamingSection({ school }: Props) {
  const naming = school.about?.naming

  if (!naming) return null

  const Icon =
    (Icons[naming.icon as keyof typeof Icons] as React.ElementType) || Icons.Leaf

  return (
    <section
      id="about-name"
      className="relative overflow-hidden px-6 py-12 sm:px-10 lg:px-20 xl:px-24 2xl:px-32"
      style={{ backgroundColor: school.secondaryColor }}
    >
      <div className="mx-auto max-w-4xl">
        <div className="relative rounded-3xl bg-white/70 px-6 py-10 shadow-sm ring-1 ring-slate-200/70 backdrop-blur sm:px-10 lg:px-14">
          {/* Opening quote */}
          <span
            className="absolute left-5 top-4 font-serif text-6xl font-black leading-none opacity-90 sm:text-7xl"
            style={{ color: school.primaryColor }}
          >
            “
          </span>

          {/* Closing quote */}
          <span
            className="absolute bottom-2 right-6 font-serif text-6xl font-black leading-none opacity-90 sm:text-7xl"
            style={{ color: school.accentColor }}
          >
            ”
          </span>

          <div className="relative z-10 ml-8 sm:ml-12">
            {/* Icon */}
            <div
              className="mb-5 flex h-10 w-10 items-center justify-center rounded-full"
              style={{
                backgroundColor: `${school.accentColor}22`,
                color: school.primaryColor,
              }}
            >
              <Icon size={20} />
            </div>

            {/* Subtitle */}
            <p
              className="mb-3 text-[11px] font-bold uppercase tracking-[0.25em]"
              style={{ color: school.accentColor }}
            >
              {naming.subtitle}
            </p>

            {/* Title */}
            <h3
              className="max-w-3xl font-serif text-3xl font-bold italic leading-tight sm:text-4xl lg:text-[44px]"
              style={{ color: school.primaryColor }}
            >
              {naming.title}
            </h3>

            {/* Description */}
            <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-500 sm:text-[15px]">
              {naming.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}