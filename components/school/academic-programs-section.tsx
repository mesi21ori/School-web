"use client"

import { School } from "@/types/school"
import { SectionHeader } from "@/components/shared/section-header"
import { BrandCard } from "@/components/shared/brand-card"
import { Badge } from "@/components/ui/badge"
import * as Icons from "lucide-react"

interface AcademicProgramsSectionProps {
  school: School
}

const iconMap: Record<string, React.ComponentType<any>> = {
  BookOpen: Icons.BookOpen,
  Users: Icons.Users,
  GraduationCap: Icons.GraduationCap,
  Zap: Icons.Zap,
  Music: Icons.Music,
  Activity: Icons.Activity
}

export function AcademicProgramsSection({ school }: AcademicProgramsSectionProps) {
  return (
    <section id="programs" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Academic Programs"
          description="Comprehensive educational pathways designed to develop every student's potential"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {school.academicPrograms.map((program) => {
            const IconComponent = iconMap[program.icon] || Icons.BookOpen
            return (
              <BrandCard
                key={program.id}
                icon={<IconComponent size={28} style={{ color: school.primaryColor }} />}
                title={program.title}
                description={program.description}
                accentColor={school.primaryColor}
              >
                <Badge variant="secondary" className="mt-4">
                  {program.gradeRange}
                </Badge>
              </BrandCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
