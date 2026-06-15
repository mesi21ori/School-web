// app/page.tsx
import { MissionVision } from "@/components/school/mission-vision-page"
import { mockSchool } from "@/lib/mock-school"

export default function Page() {
  return <MissionVision school={mockSchool} />
}
