"use client"

import Image from "next/image"
import { School } from "@/types/school"

interface Props {
  school: School
}

export function AboutIntroSection({ school }: Props) {
  const intro = school.about?.intro
  const image = school.about?.image || "/school-about.png"

  if (!intro) return null

  return (
    <section className="relative overflow-hidden px-6 py-16 sm:px-10 lg:px-20 xl:px-24 2xl:px-32 mt-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
          <div className="hidden pt-28 lg:block">
            <div className="sticky top-28 space-y-3 text-sm font-medium text-slate-600">
              <a href="#about" className="block transition hover:text-slate-950">
                About us.
              </a>
              <a href="#about-story" className="block transition hover:text-slate-950">
                Our story.
              </a>
              <a href="#about-outreach" className="block transition hover:text-slate-950">
                Programs.
              </a>
            </div>
          </div>

          <div>
            <p
              className="mb-3 text-xs font-bold uppercase tracking-[0.28em]"
              style={{ color: school.accentColor }}
            >
              {intro.eyebrow}
            </p>

            <h2 className="font-serif text-5xl font-black uppercase leading-none tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              {intro.title}
            </h2>

            <div
              className="mt-4 h-1 w-24 rounded-full"
              style={{ backgroundColor: school.primaryColor }}
            />

            <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
              <p className="text-lg font-semibold leading-8 text-slate-900">
                {intro.shortText}
              </p>

              <div className="space-y-5 text-sm leading-8 text-slate-600 sm:text-base">
                {intro.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 overflow-hidden bg-white p-3 shadow-xl ring-1 ring-slate-200">
          <div className="relative h-[280px] overflow-hidden sm:h-[420px] lg:h-[500px]">
            <Image
              src={image}
              alt={`${school.name} about image`}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  )
}