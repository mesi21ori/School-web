"use client"

import dynamic from "next/dynamic"
import type React from "react"

import { School } from "@/types/school"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"

interface SchoolLandingPageProps {
  school: School
}

const RuleAndRegulation = dynamic(
  () => import("@/components/school/rules-and-regulations"),
  {
    ssr: false,
    loading: () => (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-sm text-slate-500">Loading rules and regulations...</p>
      </div>
    ),
  }
)

export function RuleRgulation({ school }: SchoolLandingPageProps) {
  return (
    <div className="min-h-screen flex flex-col">
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
          <RuleAndRegulation />
        </main>

        <SiteFooter school={school} />
      </div>
    </div>
  )
}