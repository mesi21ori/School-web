"use client"

import { School } from "@/types/school"

interface Props {
  school: School
}

export function AboutStatsSection({ school }: Props) {
  const stats = school.about?.stats || []

  if (stats.length === 0) return null

  return (
    <section className="px-6 pb-16 pt-8 sm:px-10 lg:px-20 xl:px-24 2xl:px-32">
      <div className="mx-auto grid max-w-7xl gap-6 bg-white p-8 shadow-lg ring-1 ring-slate-200 sm:grid-cols-2 lg:grid-cols-4 lg:p-10">
        {stats.map((stat) => (
          <div key={stat.label}>
            <h4
              className="font-serif text-4xl font-black leading-none"
              style={{ color: school.primaryColor }}
            >
              {stat.value}
            </h4>

            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}