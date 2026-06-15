"use client"

import { School } from "@/types/school"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"

import RuleAndRegulation from "@/components/school/rules-and-regulations"

interface SchoolLandingPageProps {
  school: School
}

export function RuleRgulation({ school }: SchoolLandingPageProps) {
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
            <RuleAndRegulation/>
        </main>

        <SiteFooter school={school} />
      </div>
    </div>
  )
}