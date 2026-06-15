// app/page.tsx
import { MeetOurTeam } from "@/components/school/team-page"
import { mockSchool } from "@/lib/mock-school"

export default function Page() {
  return <MeetOurTeam school={mockSchool} />
}
