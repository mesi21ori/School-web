// app/page.tsx
import { SchoolLandingPage } from "@/components/school/school-landing-page"
import { mockSchool } from "@/lib/mock-school"

export default function Page() {
  return <SchoolLandingPage school={mockSchool} />
}
