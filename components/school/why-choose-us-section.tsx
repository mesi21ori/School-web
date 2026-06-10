"use client"

import { School } from "@/types/school"
import { SectionHeader } from "@/components/shared/section-header"
import { BrandCard } from "@/components/shared/brand-card"
import * as Icons from "lucide-react"

interface WhyChooseUsSectionProps {
  school: School
}

const iconMap: Record<string, React.ComponentType<any>> = {
  Award: Icons.Award,
  Building: Icons.Building,
  Heart: Icons.Heart,
  BookMarked: Icons.BookMarked,
  Laptop: Icons.Laptop,
  Users: Icons.Users
}

export function WhyChooseUsSection({ school }: WhyChooseUsSectionProps) {
  return (
    <section id="why-us" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Why Choose Horizon Academy?"
          description="Discover what sets us apart in providing exceptional education"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {school.whyChooseUs.map((item) => {
            const IconComponent = iconMap[item.icon] || Icons.Star
            return (
              <BrandCard
                key={item.id}
                icon={<IconComponent size={28} style={{ color: school.accentColor }} />}
                title={item.title}
                description={item.description}
                accentColor={school.accentColor}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
