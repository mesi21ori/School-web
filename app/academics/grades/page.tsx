// app/page.tsx

import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"
import { AcademicProgramsSection } from "@/components/school/academic-programs-section"
import { mockSchool } from "@/lib/mock-school"

export default function Page() {
  return (
    <>
      <SiteHeader school={mockSchool} />

      <main>
        <AcademicProgramsSection school={mockSchool} />
      </main>

      <SiteFooter school={mockSchool} />
    </>
  )
}