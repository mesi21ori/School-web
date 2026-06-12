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
    <section id="about-outreach" className="px-6 py-12 sm:px-10 lg:px-20 xl:px-24 2xl:px-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p
              className="mb-3 text-xs font-bold uppercase tracking-[0.28em]"
              style={{ color: school.accentColor }}
            >
              {outreach.eyebrow}
            </p>

            <h3 className="font-serif text-4xl font-black uppercase leading-none text-slate-950 sm:text-5xl">
              {outreach.title}
            </h3>
          </div>

          <p className="max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">
            {outreach.description}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {outreach.programs.map((program) => {
            const Icon =
              (Icons[program.icon as keyof typeof Icons] as React.ElementType) ||
              Icons.Star

            return (
              <div
                key={program.id}
                className="group relative overflow-hidden bg-white p-7 shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                  style={{ backgroundColor: school.primaryColor }}
                />

                <div
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-full"
                  style={{
                    backgroundColor: `${school.primaryColor}15`,
                    color: school.primaryColor,
                  }}
                >
                  <Icon size={22} />
                </div>

                <h4 className="text-lg font-bold text-slate-950">
                  {program.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {program.description}
                </p>

                <div
                  className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em]"
                  style={{ color: school.primaryColor }}
                >
                  Learn more
                  <ArrowUpRight size={15} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}