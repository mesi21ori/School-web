"use client"

import Image from "next/image"
import { School } from "@/types/school"

interface MeetOurTeamSectionProps {
  school: School
}

type TeamMember = {
  name: string
  role: string
  image: string
  bio?: string
}

export function MeetOurTeamSection({ school }: MeetOurTeamSectionProps) {
  const team: TeamMember[] =
    (school as School & { team?: TeamMember[] }).team || [
      {
        name: "Ms. Hirut",
        role: "Chief Executive Officer",
        image: "/ceo.png",
        bio: "A visionary school leader committed to academic excellence, discipline, and holistic student development.",
      },
      {
        name: "Mr. Ahmed",
        role: "Academic Director",
        image: "/team/team-1.png",
        bio: "Focused on curriculum quality, teacher support, and continuous improvement in learning outcomes.",
      },
      {
        name: "Ms. Sara",
        role: "School Principal",
        image: "/team/team-2.png",
        bio: "Dedicated to building a disciplined, caring, and high-performing school community.",
      },
      {
        name: "Mr. Dawit",
        role: "Student Affairs Head",
        image: "/team/team-3.png",
        bio: "Supports student growth, wellbeing, leadership, and strong school-family relationships.",
      },
      {
        name: "Ms. Hana",
        role: "Primary Coordinator",
        image: "/team/team-4.png",
        bio: "Guides primary education with care, structure, and student-centered support.",
      },
      {
        name: "Mr. Samuel",
        role: "Student Support Lead",
        image: "/team/team-5.png",
        bio: "Helps students build confidence, discipline, responsibility, and positive school habits.",
      },
      {
        name: "Ms. Lidiya",
        role: "Admissions Officer",
        image: "/team/team-6.png",
        bio: "Supports families through the admissions process with clear guidance and care.",
      },
    ]

  const positions = [
    "left-[24%] top-[20px]",
    "left-[55%] top-[20px]",
    "left-[7%] top-[165px]",
    "left-[38%] top-[165px]",
    "left-[69%] top-[165px]",
    "left-[18%] top-[310px]",
    "left-[49%] top-[310px]",
  ]

  return (
    <section
      id="meet-our-team"
      className="relative mt-10 overflow-hidden bg-white px-5 py-12 sm:px-8 sm:py-14 lg:px-20 lg:py-16 xl:px-24 2xl:px-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 max-w-3xl text-center sm:text-left lg:mb-12">
          <h2 className="text-3xl font-black uppercase tracking-tight sm:text-4xl lg:text-5xl">
            <span style={{ color: school.accentColor }}>Meet</span>{" "}
            <span style={{ color: school.primaryColor }}>Our Team</span>
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-500 sm:mx-0">
            Meet the dedicated people behind {school.name}, working together to
            support learning, growth, and student success.
          </p>

          <div
            className="mx-auto mt-4 h-1 w-16 rounded-full sm:mx-0"
            style={{ backgroundColor: school.accentColor }}
          />
        </div>

        {/* Desktop Layout */}
        <div className="relative hidden min-h-[470px] lg:block">
          {team.slice(0, 7).map((member, index) => (
            <div
              key={`${member.name}-${index}`}
              className={`group absolute flex w-[330px] items-center gap-5 ${positions[index]}`}
            >
              <div className="w-[145px] text-right">
                <h3
                  className="text-sm font-black uppercase tracking-wide"
                  style={{ color: school.primaryColor }}
                >
                  {member.name}
                </h3>

                <p className="mt-1 text-xs text-slate-400">{member.role}</p>
              </div>

              <div
                className="h-[95px] w-[6px] shrink-0 -skew-x-[18deg] rounded-full transition-all duration-300 group-hover:h-[110px]"
                style={{ backgroundColor: school.accentColor }}
              />

              <div
                className="relative h-[92px] w-[155px] shrink-0 overflow-hidden bg-slate-100 shadow-sm transition-all duration-500 group-hover:shadow-xl"
                style={{
                  clipPath: "polygon(16% 0, 100% 0, 84% 100%, 0% 100%)",
                }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />

                <div
                  className="absolute inset-0 flex translate-y-full items-center justify-center px-5 text-center text-[10px] font-medium leading-4 text-white transition-transform duration-500 group-hover:translate-y-0"
                  style={{
                    backgroundColor: `${school.primaryColor}E6`,
                  }}
                >
                  {member.bio ||
                    "Dedicated to supporting students, teachers, and the school community with care and professionalism."}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tablet Layout */}
        <div className="hidden gap-x-8 gap-y-10 sm:grid sm:grid-cols-2 lg:hidden">
          {team.slice(0, 7).map((member, index) => (
            <div
              key={`${member.name}-tablet-${index}`}
              className="group flex items-center justify-center gap-4"
            >
              <div className="w-[38%] text-right">
                <h3
                  className="text-sm font-black uppercase tracking-wide"
                  style={{ color: school.primaryColor }}
                >
                  {member.name}
                </h3>

                <p className="mt-1 text-xs text-slate-400">{member.role}</p>
              </div>

              <div
                className="h-[115px] w-[5px] shrink-0 -skew-x-[18deg] rounded-full transition-all duration-300 group-hover:h-[125px]"
                style={{ backgroundColor: school.accentColor }}
              />

              <div
                className="relative h-[115px] w-[185px] overflow-hidden bg-slate-100 shadow-sm transition-all duration-500 group-hover:shadow-xl"
                style={{
                  clipPath: "polygon(16% 0, 100% 0, 84% 100%, 0% 100%)",
                }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />

                <div
                  className="absolute inset-0 flex translate-y-full items-center justify-center px-4 text-center text-[10px] font-medium leading-4 text-white transition-transform duration-500 group-hover:translate-y-0"
                  style={{
                    backgroundColor: `${school.primaryColor}E6`,
                  }}
                >
                  {member.bio ||
                    "Dedicated to supporting students, teachers, and the school community."}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="grid gap-5 sm:hidden">
          {team.slice(0, 7).map((member, index) => (
            <div
              key={`${member.name}-mobile-${index}`}
              className="group rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div
                  className="relative h-[120px] w-[165px] shrink-0 overflow-hidden bg-slate-100 shadow-sm"
                  style={{
                    clipPath: "polygon(16% 0, 100% 0, 84% 100%, 0% 100%)",
                  }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div
                  className="h-[110px] w-[5px] shrink-0 -skew-x-[18deg] rounded-full"
                  style={{ backgroundColor: school.accentColor }}
                />

                <div className="min-w-0 flex-1">
                  <h3
                    className="text-sm font-black uppercase tracking-wide"
                    style={{ color: school.primaryColor }}
                  >
                    {member.name}
                  </h3>

                  <p className="mt-1 text-xs text-slate-400">{member.role}</p>

                  <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-500 transition-all duration-300 group-hover:line-clamp-none">
                    {member.bio ||
                      "Dedicated to supporting students, teachers, and the school community."}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}