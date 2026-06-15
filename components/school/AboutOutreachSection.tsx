"use client"

import { School } from "@/types/school"
import * as Icons from "lucide-react"
import { ArrowUpRight } from "lucide-react"

interface Props {
  school: School
}

export function AboutOutreachSection({ school }: Props) {
  const outreach = school.about?.outreach

  if (!outreach) return null

  return (
    <section
      id="about-outreach"
      className="px-6 py-12 sm:px-10 lg:px-20 xl:px-24 2xl:px-32"
      style={{ backgroundColor: school.secondaryColor }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 grid items-end gap-5 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p
              className="mb-2 text-[11px] font-bold uppercase tracking-[0.25em]"
              style={{ color: school.accentColor }}
            >
              {outreach.eyebrow}
            </p>

            <h3
              className="font-serif text-3xl font-black uppercase leading-tight sm:text-4xl lg:text-[44px]"
              style={{ color: school.primaryColor }}
            >
              {outreach.title}
            </h3>
          </div>

          <p className="max-w-3xl text-sm leading-7 text-slate-600 sm:text-[15px]">
            {outreach.description}
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-4 md:grid-cols-3">
          {outreach.programs.map((program) => {
            const Icon =
              (Icons[program.icon as keyof typeof Icons] as React.ElementType) ||
              Icons.Star

            return (
              <div
                key={program.id}
                className="group relative overflow-hidden rounded-3xl bg-white/80 p-6 shadow-sm ring-1 ring-slate-200/70 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Top glow */}
                <div
                  className="absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-10 transition-transform duration-500 group-hover:scale-125"
                  style={{ backgroundColor: school.primaryColor }}
                />

                {/* Bottom line */}
                <div
                  className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                  style={{ backgroundColor: school.primaryColor }}
                />

                <div className="relative z-10">
                  <div
                    className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl"
                    style={{
                      backgroundColor: `${school.primaryColor}14`,
                      color: school.primaryColor,
                    }}
                  >
                    <Icon size={21} />
                  </div>

                  <h4 className="text-base font-bold text-slate-950 sm:text-lg">
                    {program.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {program.description}
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