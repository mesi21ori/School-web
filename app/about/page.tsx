// app/page.tsx
import { AboutSection } from "@/components/school/about-section"
import { mockSchool } from "@/lib/mock-school"

export default function Page() {
  return <AboutSection school={mockSchool} />
}
