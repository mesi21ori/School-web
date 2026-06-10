'use client'

import { mockSchool } from "@/lib/mock-school" // Adjust the import path as needed

interface BranchLocationMarqueeProps {
  branches?: string[]
  brandColor?: string
}

const defaultBranches = [
  'MAIN CAMPUS / YEKA',
  'BOLE BRANCH',
  'SUMMIT BRANCH',
  'AYAT BRANCH',
  'PIASSA BRANCH',
  'SARIS BRANCH',
  'MEXICO BRANCH',
  '22 MAZORIA BRANCH',
  'CMC BRANCH',
  'LEBU BRANCH',
]

export function BranchLocationMarquee({
  branches = defaultBranches,
  brandColor = mockSchool.accentColor, 
}: BranchLocationMarqueeProps) {
 
  const duplicatedBranches = [...branches, ...branches]

  return (
    <>
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .marquee-container {
          animation: scroll-left 60s linear infinite;
        }

        .marquee-container:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative w-full overflow-hidden" style={{ backgroundColor: mockSchool.accentColor }}>
        {/* Left fade mask */}
        <div 
          className="absolute left-0 top-0 z-10 h-full w-12 md:w-16 pointer-events-none"
          style={{ background: `linear-gradient(to right, ${mockSchool.primaryColor}, transparent)` }}
        />

        {/* Right fade mask */}
        <div 
          className="absolute right-0 top-0 z-10 h-full w-12 md:w-16 pointer-events-none"
          style={{ background: `linear-gradient(to left, ${mockSchool.primaryColor}, transparent)` }}
        />

        {/* Marquee content */}
        <div className="flex h-10 items-center md:h-12">
          <div className="marquee-container flex whitespace-nowrap">
            {duplicatedBranches.map((branch, idx) => (
              <div
                key={idx}
                className="flex items-center px-4 text-xs font-light tracking-widest md:px-6 md:text-sm"
                style={{ color: brandColor }}
              >
                {branch}
                <span className="mx-3 md:mx-4" style={{ color: mockSchool.secondaryColor }}>
                  /
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}