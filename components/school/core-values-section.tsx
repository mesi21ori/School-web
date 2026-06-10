"use client"

import { useState } from "react"
import { School } from "@/types/school"
import * as Icons from "lucide-react"

interface CoreValuesSectionProps {
  school: School
}

const iconMap: Record<string, React.ComponentType<any>> = {
  Trophy: Icons.Trophy,
  Handshake: Icons.Handshake,
  Lightbulb: Icons.Lightbulb,
  Heart: Icons.Heart,
  Users: Icons.Users,
  TrendingUp: Icons.TrendingUp,
}

function hexToRgba(hex: string, alpha: number) {
  const cleanHex = hex.replace("#", "")

  if (cleanHex.length !== 6) {
    return hex
  }

  const r = parseInt(cleanHex.slice(0, 2), 16)
  const g = parseInt(cleanHex.slice(2, 4), 16)
  const b = parseInt(cleanHex.slice(4, 6), 16)

  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export function CoreValuesSection({ school }: CoreValuesSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const values = school.coreValues.slice(0, 4)

  return (
    <section id="values" className="bg-[#f7faf6] py-14">
      {/* Header */}
      <div className="mx-auto mb-14 max-w-7xl px-6 text-center lg:px-8">
        <h2 className="font-serif text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          Our Core Values
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
          The principles that guide everything we do at {school.name}.
        </p>
      </div>

      {/* Full Width Card Strip */}
      <div className="w-full">
        <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const IconComponent = iconMap[value.icon] || Icons.Star
            const isActive = activeIndex === index

            return (
              <button
                key={`${value.title}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="relative flex min-h-[170px] cursor-pointer flex-col items-center justify-center px-8 py-8 text-center text-white transition-colors duration-300 focus:outline-none"
                style={{
                  backgroundColor: isActive
                    ? school.primaryColor
                    : hexToRgba(school.primaryColor, 0.55),
                }}
              >
                <div
                  className="mb-4 flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-300"
                  style={{
                    backgroundColor: isActive
                      ? "rgba(255,255,255,0.25)"
                      : "rgba(255,255,255,0.12)",
                  }}
                >
                  <IconComponent
                    size={26}
                    strokeWidth={isActive ? 2.8 : 2.2}
                    style={{
                      color: isActive ? school.accentColor : "rgba(255,255,255,0.85)",
                    }}
                  />
                </div>

                <h3
                  className={`text-lg text-white transition-all duration-300 ${
                    isActive ? "font-extrabold" : "font-bold"
                  }`}
                >
                  {value.title}
                </h3>

                <p
                  className={`mt-3 max-w-[190px] text-sm leading-6 transition-colors duration-300 ${
                    isActive ? "text-white" : "text-white/75"
                  }`}
                >
                  {value.description}
                </p>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}