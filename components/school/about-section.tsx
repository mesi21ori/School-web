"use client"

import { School } from "@/types/school"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { HeroSection } from "./hero-section"
import { AcademicProgramsSection } from "./academic-programs-section"
import { ContactSection } from "./contact-section"
import { WhyChooseUsSection } from "./WhyChooseUsSection"
import { AchievementsSection } from "./achievements-section"
import { CEOSection } from "./CEOSection"
import { AboutCurriculumSection } from "./AboutCurriculumSection"
import { AboutIntroSection } from "./AboutIntroSection"
import { AboutNamingSection } from "./AboutNamingSection"
import { AboutOutreachSection } from "./AboutOutreachSection"
import { AboutStatsSection } from "./AboutStatsSection"
import { AboutStorySection } from "./AboutStorySection"

interface SchoolLandingPageProps {
  school: School
}

export function AboutSection({ school }: SchoolLandingPageProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Apply theme colors as CSS variables */}
      <div
        className="flex flex-col min-h-screen"
        style={
          {
            "--primary": school.primaryColor,
            "--secondary": school.secondaryColor,
            "--accent": school.accentColor,
          } as React.CSSProperties
        }
      >
        <SiteHeader school={school} />

        <main className="flex-1">
          <AboutIntroSection school={school} />
          <AboutStorySection school={school} />
          {/* <AboutCurriculumSection school={school} />
          <AboutNamingSection school={school} />
          <AboutOutreachSection school={school} />
          <AboutStatsSection school={school} /> */}
        </main>

        <SiteFooter school={school} />
      </div>
    </div>
  )
}