"use client"

import Image from "next/image"
import { School } from "@/types/school"

interface AboutSectionProps {
  school: School
}

export function AboutSection({ school }: AboutSectionProps) {
  const aboutData = {
    title: school.about?.title || "About Us",
    description:
      school.about?.description ||
      "We provide high-quality education based on the Ethiopian curriculum in a caring, modern, and supportive learning environment.",
    imageUrl:
      school.about?.image || school.hero?.imageUrl || "/images/default-about.jpg",
  }

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f7faf6] py-24"
    >
      {/* Top Page Title */}
      <div className="mx-auto mb-20 max-w-4xl px-6 text-center">
        <h2
          className="font-serif text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
          style={{ color: school.primaryColor }}
        >
          {aboutData.title}
        </h2>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main About Row */}
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          {/* Left Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl bg-white p-3 shadow-xl ring-1 ring-slate-200">
              <div className="relative h-[320px] overflow-hidden rounded-2xl sm:h-[420px]">
                <Image
                  src={aboutData.imageUrl}
                  alt={`${school.name} about image`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Small decorative card */}
            <div
              className="absolute -bottom-8 left-8 rounded-2xl px-6 py-5 shadow-xl ring-1 ring-slate-200"
              style={{ backgroundColor: school.accentColor }}
            >
              <p
                className="text-4xl font-bold"
                style={{ color: school.primaryColor }}
              >
                20+
              </p>
              <p className="mt-1 text-sm font-medium text-slate-600">
                Years of Excellence
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="pt-10 lg:pt-0">
            <p
              className="mb-3 text-sm font-bold uppercase tracking-[0.25em]"
              style={{ color: school.primaryColor }}
            >
              About Us
            </p>

            <h3 className="font-serif text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">
              We Always Provide
              <br />
              <span style={{ color: school.primaryColor }}>
                The Best Education
              </span>
            </h3>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
              {aboutData.description}
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex rounded-full px-8 py-3 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
              style={{ backgroundColor: school.primaryColor }}
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}