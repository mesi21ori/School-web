"use client";

import { School } from "@/types/school";
import * as Icons from "lucide-react";

interface AcademicProgramsSectionProps {
  school: School;
}

const iconMap: Record<string, React.ComponentType<any>> = {
  BookOpen: Icons.BookOpen,
  Users: Icons.Users,
  GraduationCap: Icons.GraduationCap,
  Zap: Icons.Zap,
  Music: Icons.Music,
  Activity: Icons.Activity,
  Calculator: Icons.Calculator,
  Beaker: Icons.Beaker,
  Globe: Icons.Globe,
  Palette: Icons.Palette,
};

export function AcademicProgramsSection({
  school,
}: AcademicProgramsSectionProps) {
  const programs = [...(school.academicPrograms || []), ...(school.academicPrograms || [])];
  
  const defaultPrograms = school.academicPrograms?.length > 0 
    ? school.academicPrograms 
    : [
        { id: 1, title: "Early Years", description: "Foundation stage for young learners", gradeRange: "Pre-K - K", icon: "BookOpen" },
        { id: 2, title: "Elementary", description: "Building core academic skills", gradeRange: "Grades 1-5", icon: "Users" },
        { id: 3, title: "Middle School", description: "Developing critical thinking", gradeRange: "Grades 6-8", icon: "GraduationCap" },
        { id: 4, title: "High School", description: "Preparing for college and career", gradeRange: "Grades 9-12", icon: "Zap" },
      ];

  const displayPrograms = programs.length > 0 ? programs : [...defaultPrograms, ...defaultPrograms];

  return (
    <section id="programs" className="py-20 bg-secondary/20 overflow-hidden mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Same size as other sections */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: school.primaryColor }}
          >
            Academic Programs
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive educational pathways designed to develop every student's potential
          </p>
          <div
            className="w-20 h-1 mx-auto mt-4 rounded-full"
            style={{ backgroundColor: school.accentColor || school.primaryColor }}
          />
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="marquee-track relative flex w-max items-start gap-8 md:gap-16 px-4 md:px-6 py-6">
          <div className="absolute left-0 right-0 top-1/2 border-t border-dashed border-border" />

          {displayPrograms.map((program, index) => {
            const IconComponent = iconMap[program.icon] || Icons.BookOpen;
            const realIndex = index % (school.academicPrograms?.length || defaultPrograms.length);

            return (
              <div
                key={`${program.id || program.title}-${index}`}
                className={`relative z-10 flex-shrink-0 ${
                  realIndex % 2 === 1 ? "mt-10 md:mt-16" : ""
                }`}
              >
                <div className="relative flex h-52 w-52 sm:h-60 sm:w-60 md:h-72 md:w-72 items-center justify-center rounded-full bg-background shadow-[0_0_0_8px_rgba(255,255,255,0.8)] md:shadow-[0_0_0_12px_rgba(255,255,255,0.8)]">
                  
                  <div
                    className="absolute inset-3 md:inset-4 rounded-full border-2"
                    style={{
                      borderColor: `${school.accentColor}50`,
                    }}
                  />

                  <div
                    className="absolute right-5 top-3 md:right-8 md:top-4 flex h-10 w-10 md:h-14 md:w-14 items-center justify-center rounded-full text-sm md:text-lg font-extrabold text-white shadow-lg"
                    style={{
                      backgroundColor: school.primaryColor,
                    }}
                  >
                    {String(realIndex + 1).padStart(2, "0")}
                  </div>

                  {/* Optional Icon - Uncomment if needed */}
                  {/* 
                  <div
                    className="absolute -top-3 -left-3 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg"
                    style={{ border: `2px solid ${school.primaryColor}` }}
                  >
                    <IconComponent
                      className="h-6 w-6"
                      style={{ color: school.primaryColor }}
                    />
                  </div>
                  */}

                  <div className="relative z-10 max-w-[150px] md:max-w-[200px] text-center">
                    <h3 className="mt-5 md:mt-7 text-sm md:text-base font-bold text-foreground">
                      {program.title}
                    </h3>

                    <p className="mt-2 md:mt-3 text-[11px] md:text-xs leading-5 md:leading-6 text-muted-foreground">
                      {program.description}
                    </p>

                    <p
                      className="mt-3 md:mt-4 text-sm md:text-base font-extrabold uppercase tracking-wide"
                      style={{
                        color: school.primaryColor,
                      }}
                    >
                      {program.gradeRange}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}