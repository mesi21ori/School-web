// app/page.tsx
import { AdmmisionPage } from "@/components/school/admissionpage"
import { Facilitypage } from "@/components/school/facilities-page"
import { FacilitiesSection } from "@/components/school/facilities-section"
import { GalleryPage } from "@/components/school/gallery-page"
import { ScholarshipApplicationPage } from "@/components/school/scholarship-application-page"
import { mockSchool } from "@/lib/mock-school"

export default function Page() {
  return <ScholarshipApplicationPage school={mockSchool} />
}
