"use client"

import { School } from "@/types/school"
import * as Icons from "lucide-react"

interface Props {
  school: School
}

export function AboutStorySection({ school }: Props) {
  const story = school.about?.story

  if (!story) return null

  return (
    <section
      id="about-story"
      className="relative overflow-hidden bg-[#f7faf6] px-6 py-16 sm:px-10 lg:px-20 xl:px-24 2xl:px-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Background large text */}
        <div className="pointer-events-none absolute left-1/2 top-6 -translate-x-1/2 select-none text-center font-serif text-6xl font-black uppercase tracking-tight text-slate-900/[0.035] sm:text-7xl lg:text-8xl">
          Our Story
        </div>

        {/* Header */}
        <div className="relative mx-auto mb-14 max-w-3xl text-center">
          <p
            className="mb-3 text-xs font-bold uppercase tracking-[0.26em]"
            style={{ color: school.accentColor }}
          >
            // {story.title}
          </p>

          <h3 className="font-serif text-3xl font-black leading-tight text-slate-950 sm:text-5xl">
            Our Proven{" "}
            <span style={{ color: school.primaryColor }}>
              Learning Journey
            </span>
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            {story.description}
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative grid gap-10 md:grid-cols-3">
          {story.items.map((item, index) => {
            const Icon =
              (Icons[item.icon as keyof typeof Icons] as React.ElementType) ||
              Icons.Star

            const stepNumber = String(index + 1).padStart(2, "0")
            const isLast = index === story.items.length - 1

            return (
              <div
                key={item.id}
                className="group relative flex flex-col items-center text-center"
              >
                {/* Connector line */}
                {!isLast && (
                  <div className="absolute left-[50%] top-10 hidden h-px w-full md:block">
                    <div className="mx-auto h-px w-[72%] bg-slate-300" />
                  </div>
                )}

                {/* Circle icon */}
                <div className="relative z-10 mb-6">
                  <div
                    className="flex h-20 w-20 items-center justify-center rounded-full text-white shadow-lg transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-105 group-hover:shadow-xl"
                    style={{ backgroundColor: school.primaryColor }}
                  >
                    <Icon size={30} strokeWidth={2.4} />
                  </div>

                  {/* Step number */}
                  <div
                    className="absolute -right-2 top-3 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white text-xs font-black text-white shadow-md"
                    style={{ backgroundColor: school.accentColor }}
                  >
                    {stepNumber}
                  </div>
                </div>

                {/* Text */}
                <div className="max-w-xs">
                  <h4 className="text-lg font-extrabold text-slate-950">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}