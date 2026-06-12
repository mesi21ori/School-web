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
    <section id="about-name" className="px-6 py-12 sm:px-10 lg:px-20 xl:px-24 2xl:px-32">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden bg-white p-8 shadow-lg ring-1 ring-slate-200 sm:p-10">
          <div
            className="absolute -right-20 -top-20 h-52 w-52 rounded-full opacity-10"
            style={{ backgroundColor: school.primaryColor }}
          />

          <div
            className="mb-6 flex h-14 w-14 items-center justify-center rounded-full"
            style={{
              backgroundColor: `${school.accentColor}25`,
              color: school.primaryColor,
            }}
          >
            <Icon size={25} />
          </div>

          <p
            className="mb-3 text-xs font-bold uppercase tracking-[0.28em]"
            style={{ color: school.accentColor }}
          >
            {naming.subtitle}
          </p>

          <h3 className="font-serif text-3xl font-bold text-slate-950 sm:text-4xl">
            {naming.title}
          </h3>

          <p className="mt-6 max-w-4xl text-sm leading-8 text-slate-600 sm:text-base">
            {naming.description}
          </p>
        </div>
      </div>
    </section>
  )
}