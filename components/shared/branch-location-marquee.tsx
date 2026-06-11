"use client"

import { mockSchool } from "@/lib/mock-school"
import { SchoolBranch } from "@/types/school"

interface BranchLocationMarqueeProps {
  branches?: SchoolBranch[]
  brandColor?: string
}

const defaultBranches: SchoolBranch[] = [
  { name: "MAIN CAMPUS / YEKA", latitude: 9.0357, longitude: 38.7895 },
  { name: "BOLE BRANCH", latitude: 8.9806, longitude: 38.7578 },
  { name: "SUMMIT BRANCH", latitude: 9.0261, longitude: 38.8684 },
  { name: "AYAT BRANCH", latitude: 9.0299, longitude: 38.8802 },
  { name: "PIASSA BRANCH", latitude: 9.0369, longitude: 38.7516 },
  { name: "SARIS BRANCH", latitude: 8.9357, longitude: 38.7578 },
  { name: "MEXICO BRANCH", latitude: 9.0105, longitude: 38.7418 },
  { name: "22 MAZORIA BRANCH", latitude: 9.0227, longitude: 38.7809 },
  { name: "CMC BRANCH", latitude: 9.0192, longitude: 38.8378 },
  { name: "LEBU BRANCH", latitude: 8.9587, longitude: 38.7045 },
]

export function BranchLocationMarquee({
  branches = defaultBranches,
  brandColor = mockSchool.primaryColor,
}: BranchLocationMarqueeProps) {
  const duplicatedBranches = [...branches, ...branches]

  return (


    <div
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: mockSchool.accentColor }}
    >
      <div
        className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 md:w-16"
        style={{
          background: `linear-gradient(to right, ${mockSchool.primaryColor}, transparent)`,
        }}
      />

      <div
        className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 md:w-16"
        style={{
          background: `linear-gradient(to left, ${mockSchool.primaryColor}, transparent)`,
        }}
      />

      <div className="flex h-10 items-center md:h-12">
        <div className="marquee-container flex whitespace-nowrap">
          {duplicatedBranches.map((branch, idx) => (
            <div
              key={`${branch.name}-${idx}`}
              className="flex items-center px-4 text-xs font-light tracking-widest md:px-6 md:text-sm"
              style={{ color: brandColor }}
            >
              {branch.name}

              <span
                className="mx-3 md:mx-4"
                style={{ color: mockSchool.secondaryColor }}
              >
                /
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}