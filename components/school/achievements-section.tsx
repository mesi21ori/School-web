"use client"

import { useEffect, useState } from "react"
import { School } from "@/types/school"
import * as Icons from "lucide-react"

interface AchievementsSectionProps {
  school: School
}

const iconMap: Record<string, React.ComponentType<any>> = {
  GraduationCap: Icons.GraduationCap,
  Award: Icons.Award,
  Building2: Icons.Building2,
  UserRoundCheck: Icons.UserRoundCheck,
  Users: Icons.Users,
  Trophy: Icons.Trophy,
  Star: Icons.Star,
  BookOpen: Icons.BookOpen,
}

function hexToRgba(hex: string, alpha: number) {
  const cleanHex = hex.replace("#", "")

  if (cleanHex.length !== 6) {
    return hex
  }

  const r = parseInt(cleanHex.slice(0, 2), 16)
  const g = parseInt(cleanHex.slice(2, 4), 16)
  const b = parseInt(cleanHex.slice(4, 6), 16)

  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

function getNumberFromValue(value: string) {
  return Number(value.replace(/\D/g, ""))
}

function getSuffixFromValue(value: string) {
  return value.replace(/[0-9]/g, "")
}

function CountUpNumber({ value }: { value: string }) {
  const targetNumber = getNumberFromValue(value)
  const suffix = getSuffixFromValue(value)
  const [count, setCount] = useState(1)

  useEffect(() => {
    if (!targetNumber) return

    let start = 1
    const duration = 1800
    const steps = 60
    const increment = targetNumber / steps
    const intervalTime = duration / steps

    const timer = setInterval(() => {
      start += increment

      if (start >= targetNumber) {
        setCount(targetNumber)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, intervalTime)

    return () => clearInterval(timer)
  }, [targetNumber])

  return (
    <>
      {count}
      {suffix}
    </>
  )
}

export function AchievementsSection({ school }: AchievementsSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(1)

  const achievements = school.achievements?.items || []

  return (
    <section
      id="achievements"
      className="py-20"
      style={{
        backgroundColor: "#FFFFFF",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <p
            className="mb-3 text-xs font-bold uppercase tracking-[0.28em]"
            style={{ color: school.accentColor }}
          >
            School Success
          </p>

          <h2
            className="mb-4 text-4xl font-bold md:text-5xl"
            style={{ color: school.primaryColor }}
          >
            {school.achievements?.title || "Achievements"}
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-7 text-muted-foreground">
            {school.achievements?.description ||
              "A proud journey of academic excellence, dedicated teaching, and continuous growth in our school community."}
          </p>

          <div
            className="mx-auto mt-5 h-1 w-20 rounded-full"
            style={{ backgroundColor: school.accentColor }}
          />
        </div>
      </div>

    </section>
  )
}