"use client"

import Image from "next/image"
import { School } from "@/types/school"
import { CheckCircle, Mail } from "lucide-react"
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6"

interface CEOSectionProps {
  school: School
}

export function CEOSection({ school }: CEOSectionProps) {
  const ceo = school.ceo || {
    name: "Darwin Luiz",
    role: "Chief Executive Officer",
    image: "/ceo.png",
    since: "2015",
    label: "Meet Our CEO",
    shortBio:
      "A visionary leader committed to academic excellence, innovation, and holistic student development.",
    experienceTitle: "CEO Experience",
    experienceDescription:
      "With years of leadership experience in education and school development, our CEO continues to guide the institution toward excellence.",
    points: [
      "Over 15 years of experience in education and leadership.",
      "Focused on modern learning, discipline, and student success.",
      "Committed to building a strong school community.",
    ],
  }

  return (
    <section
      id="ceo"
      className="relative overflow-hidden bg-[#f7faf6] px-6 py-14 sm:px-10 lg:px-20 xl:px-24 2xl:px-32"
    >
      {/* Section Heading */}
      <div className="mx-auto mb-9 max-w-2xl text-center">
        <h2 className="font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {ceo.label || "Meet Our CEO"}
        </h2>

        <div
          className="mx-auto mt-3 h-1 w-20 rounded-full"
          style={{ backgroundColor: school.accentColor }}
        />

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600">
          Meet the leadership behind {school.name}, guiding the school with
          vision, care, and commitment to student success.
        </p>
      </div>

      {/* Main Layout */}
      <div className="mx-auto grid max-w-5xl items-stretch gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Left CEO Image Card */}
        <div className="group relative min-h-[430px] overflow-hidden bg-white shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
          {/* light dotted area */}
          <div
            className="absolute right-0 top-0 h-full w-[45%] opacity-20"
            style={{
              backgroundImage: `radial-gradient(${school.primaryColor} 1px, transparent 1px)`,
              backgroundSize: "13px 13px",
            }}
          />

          {/* vertical text */}
          <div className="absolute left-[45%] top-14 z-20 hidden -translate-x-1/2 rotate-90 text-[9px] ml-24 font-bold uppercase tracking-[0.42em] sm:block">
            <span style={{ color: school.accentColor }}>{ceo.name}</span>
          </div>

          {/* CEO Image */}
          <div className="absolute left-0 top-0 h-full w-[70%]">
            <Image
              src={ceo.image}
              alt={ceo.name}
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* diagonal white shape */}
          <div className="absolute bottom-0 left-0 z-10 h-[40%] w-full bg-white [clip-path:polygon(0_55%,100%_0,100%_100%,0_100%)]" />

          {/* bottom text */}
          <div className="absolute bottom-8 left-7 z-20 max-w-[72%] ml-44 mb-6">
            <p className="text-[11px] font-semibold text-slate-500">
              Since {ceo.since}
            </p>

            <h3 className="mt-1.5 font-serif text-2xl font-bold leading-tight text-slate-900">
              {ceo.name}
            </h3>

            <p
              className="mt-1.5 text-xs font-bold"
              style={{ color: school.primaryColor }}
            >
              {ceo.role}
            </p>
          </div>
        </div>

        {/* Right Info Card */}
        <div className="flex flex-col justify-center bg-white p-7 shadow-lg sm:p-9 lg:p-10">
          <div>
            <h3 className="font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
              {ceo.name}
            </h3>

            <p
              className="mt-2 text-xs font-bold uppercase tracking-[0.2em]"
              style={{ color: school.accentColor }}
            >
              {ceo.role}
            </p>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600">
              {ceo.shortBio}
            </p>

            {/* Social icons */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook profile"
                title="Facebook profile"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                style={{ color: school.primaryColor }}
              >
                <FaFacebookF size={14} />
              </a>

              <a
                href="#"
                aria-label="Email CEO"
                title="Email CEO"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                style={{ color: school.primaryColor }}
              >
                <Mail size={14} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn profile"
                title="LinkedIn profile"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                style={{ color: school.primaryColor }}
              >
                <FaLinkedinIn size={14} />
              </a>
            </div>
          </div>

          <div className="my-7 h-px w-full bg-slate-200" />

          <div>
            <h4 className="font-serif text-xl font-bold text-slate-900">
              {ceo.experienceTitle}
            </h4>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              {ceo.experienceDescription}
            </p>

            <div className="mt-5 space-y-3">
              {ceo.points.map((point: string, index: number) => (
                <div
                  key={index}
                  className="group flex items-start gap-3 rounded-lg p-1.5 transition-all duration-300 hover:bg-[#f7faf6]"
                >
                  <CheckCircle
                    size={18}
                    className="mt-0.5 shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: school.primaryColor }}
                  />

                  <p className="text-sm leading-6 text-slate-700">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}