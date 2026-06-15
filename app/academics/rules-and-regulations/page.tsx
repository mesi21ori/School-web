// app/page.tsx

import { RuleRgulation } from "@/components/school/RuleRegualtion"
import { mockSchool } from "@/lib/mock-school"

export default function Page() {
  return <RuleRgulation school={mockSchool} />
}