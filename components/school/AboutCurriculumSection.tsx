"use client"

import Image from "next/image"
import { School } from "@/types/school"
import { BookOpen } from "lucide-react"

interface Props {
  school: School
}

export function AboutCurriculumSection({ school }: Props) {
  const curriculum = school.about?.curriculum

  if (!curriculum) return null

  return (
    <section id="about-curriculum" className="px-6 py-12 sm:px-10 lg:px-20 xl:px-24 2xl:px-32">
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2">
        <div className="bg-white p-8 shadow-lg ring-1 ring-slate-200 sm:p-10">
          <div
            className="mb-6 flex h-14 w-14 items-center justify-center rounded-full"
            style={{ backgroundColor: school.primaryColor, color: "white" }}
          >
            <BookOpen size={25} />
          </div>

          <h3 className="font-serif text-3xl font-bold text-slate-950 sm:text-4xl">
            {curriculum.title}
          </h3>

          <p className="mt-6 text-sm leading-8 text-slate-600 sm:text-base">
            {curriculum.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {curriculum.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border px-4 py-2 text-xs font-bold"
                style={{
                  borderColor: school.accentColor,
                  color: school.primaryColor,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {curriculum.image && (
          <div className="overflow-hidden bg-white p-3 shadow-lg ring-1 ring-slate-200">
            <div className="relative h-[320px] overflow-hidden sm:h-[430px]">
              <Image
                src={curriculum.image}
                alt={curriculum.title}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}