// app/page.tsx
import { Facilitypage } from "@/components/school/facilities-page"
import { FacilitiesSection } from "@/components/school/facilities-section"
import { GalleryPage } from "@/components/school/gallery-page"
import { mockSchool } from "@/lib/mock-school"

export default function Page() {
  return <
   Facilitypage school={mockSchool}
     />
}
