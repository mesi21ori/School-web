// app/page.tsx
import { Facilitypage } from "@/components/school/facilities-page"
import { FacilitiesSection } from "@/components/school/facilities-section"
import { GalleryPage } from "@/components/school/gallery-page"
import { RuleRgulation } from "@/components/school/RuleRegualtion"
import RuleAndRegulation from "@/components/school/rules-and-regulations"
import { mockSchool } from "@/lib/mock-school"

export default function Page() {
  return <
  RuleRgulation school={mockSchool}     />
}
