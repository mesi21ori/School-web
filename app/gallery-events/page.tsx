// app/page.tsx
import { GalleryPage } from "@/components/school/gallery-page"
import { mockSchool } from "@/lib/mock-school"

export default function Page() {
  return <
     GalleryPage school={mockSchool}
     />
}
