"use client"

import { School } from "@/types/school"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { HeroSection } from "./hero-section"
import { AboutSection } from "./about-section"
import { MissionVisionSection } from "./mission-vision-section"
import { CoreValuesSection } from "./core-values-section"
import { AcademicProgramsSection } from "./academic-programs-section"
import { ContactSection } from "./contact-section"
import { WhyChooseUsSection } from "./WhyChooseUsSection"
import { AchievementsSection } from "./achievements-section"
import { CEOSection } from "./CEOSection"

interface SchoolLandingPageProps {
  school: School
}

export function SchoolLandingPage({ school }: SchoolLandingPageProps) {
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
          <HeroSection school={school} />
          <WhyChooseUsSection school={school} />
          <AchievementsSection school={school} />
          <CEOSection school={school} />
          {/* <AboutSection school={school} />
          <MissionVisionSection school={school} />
          <CoreValuesSection school={school} /> */}
          <AcademicProgramsSection school={school} />
          <ContactSection school={school} />
        </main>

        <SiteFooter school={school} />
      </div>
    </div>
  )
}