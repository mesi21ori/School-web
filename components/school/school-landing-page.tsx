"use client"

import { School } from "@/types/school"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { HeroSection } from "./hero-section"
import { AboutSection } from "./about-section"
import { MissionVisionSection } from "./mission-vision-section"
import { CoreValuesSection } from "./core-values-section"
import { AcademicProgramsSection } from "./academic-programs-section"
import { WhyChooseUsSection } from "./why-choose-us-section"
import { ContactSection } from "./contact-section"

interface SchoolLandingPageProps {
  school: School
}

export function SchoolLandingPage({ school }: SchoolLandingPageProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Apply theme colors as CSS variables */}
      <div
        style={{
          "--primary": school.primaryColor,
          "--secondary": school.secondaryColor,
          "--accent": school.accentColor
        } as React.CSSProperties}
      >
        <SiteHeader school={school} />

        <main className="flex-1">
          <HeroSection school={school} />
          <AboutSection school={school} />
          <MissionVisionSection school={school} />
          <CoreValuesSection school={school} />
          {/* <AcademicProgramsSection school={school} />
          <WhyChooseUsSection school={school} />
          <ContactSection school={school} /> */}
        </main>

        <SiteFooter school={school} />
      </div>
    </div>
  )
}
