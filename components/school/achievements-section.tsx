"use client"

import { School } from "@/types/school"
import * as Icons from "lucide-react"
import { useEffect, useRef, useState } from "react"

interface AchievementsSectionProps {
  school: School
}

interface AchievementCardImage {
  image: string
  title: string
  description: string
}

function hexToRgba(hex: string, alpha: number) {
  const cleanHex = hex.replace("#", "")

  if (cleanHex.length !== 6) return hex

  const r = parseInt(cleanHex.slice(0, 2), 16)
  const g = parseInt(cleanHex.slice(2, 4), 16)
  const b = parseInt(cleanHex.slice(4, 6), 16)

  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export function AchievementsSection({ school }: AchievementsSectionProps) {
  const achievements = school.achievements?.items || []
  const partners = school.achievements?.partners || []
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const cardOneImages: AchievementCardImage[] =
    school.achievements?.imageCardOneImages?.length
      ? school.achievements.imageCardOneImages
      : [
          {
            image: school.achievements?.imageCardOne || "/achievement-card-1.jpg",
            title: "Student Excellence",
            description: "Celebrating our students’ academic growth and achievements.",
          },
        ]

  const cardTwoImages: AchievementCardImage[] =
    school.achievements?.imageCardTwoImages?.length
      ? school.achievements.imageCardTwoImages
      : [
          {
            image: school.achievements?.imageCardTwo || "/achievement-card-2.jpg",
            title: "Modern Facilities",
            description: "Providing better learning spaces for student development.",
          },
        ]

  return (
    <section id="achievements" className="bg-[#f7faf6] py-8 md:py-10">
      {/* Main achievement area */}
      <div
        className="relative w-full overflow-hidden pb-20 pt-7 md:pb-24 md:pt-8"
        style={{ backgroundColor: school.primaryColor }}
      >
        {/* Soft background effect */}
        <div className="pointer-events-none absolute inset-0 opacity-15">
          <div className="absolute -right-24 -top-24 h-52 w-52 rounded-full bg-white blur-3xl" />
          <div className="absolute -bottom-28 -left-24 h-52 w-52 rounded-full bg-white blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-5 lg:grid-cols-[0.8fr_0.95fr_1.25fr]">
            {/* Left text */}
            <div>
              <p
                className="mb-1.5 text-[9px] font-bold uppercase tracking-[0.24em]"
                style={{ color: school.accentColor }}
              >
                Achievements
              </p>

              <h2 className="mb-3 max-w-lg text-2xl font-extrabold leading-tight text-white md:text-3xl">
                {school.achievements?.title || "Achievements"}
              </h2>

              <p className="max-w-lg text-xs leading-6 text-white/80 md:text-sm">
                {school.achievements?.description ||
                  "A proud journey of academic excellence, dedicated teaching, and continuous growth in our school community."}
              </p>

              <div
                className="mt-5 h-0.5 w-16 rounded-full"
                style={{ backgroundColor: school.accentColor }}
              />
            </div>

            {/* Middle video / main image */}
            <div className="w-full">
              <div
                className="group relative overflow-hidden rounded-xl border border-white/20 bg-white/10 shadow-xl"
                onMouseEnter={() => setHoveredCard("middle")}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative aspect-[16/9] w-full">
                  {school.achievements?.videoUrl ? (
                    <video
                      src={school.achievements.videoUrl}
                      className="absolute inset-0 h-full w-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      poster={school.achievements?.image || "/school-achievement.png"}
                    />
                  ) : (
                    <img
                      src={school.achievements?.image || "/school-achievement.png"}
                      alt="School achievement"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  )}

                  <div
                    className={`absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4 transition-opacity duration-300 ${
                      hoveredCard === "middle"
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    <p className="text-xs font-semibold text-white">
                      Watch our journey
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: image cards + animated number column */}
            <div className="grid gap-2.5 sm:grid-cols-[1fr_110px] lg:gap-3">
              <div className="grid gap-2.5 lg:gap-3">
                <ImageMiniCard
                  id="card1"
                  hoveredCard={hoveredCard}
                  setHoveredCard={setHoveredCard}
                  images={cardOneImages}
                  alt="Ozone School students"
                  accentColor={school.accentColor}
                />

                <ImageMiniCard
                  id="card2"
                  hoveredCard={hoveredCard}
                  setHoveredCard={setHoveredCard}
                  images={cardTwoImages}
                  alt="Ozone School learning environment"
                  accentColor={school.accentColor}
                />
              </div>

              {/* Number column only */}
              {achievements.length > 0 && (
                <div className="grid gap-2 lg:mr-[-4px] xl:mr-[-6px]">
                  {achievements.map((item) => (
                    <div
                      key={item.id}
                      className="group relative flex min-h-[58px] flex-col justify-center overflow-hidden rounded-lg border border-white/15 bg-white/10 px-2.5 py-2 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-white/15"
                    >
                      <h3 className="text-lg font-extrabold leading-none tracking-tight text-white md:text-xl">
                        <AnimatedNumber value={item.value} />
                      </h3>

                      <p className="mt-1 text-[9px] font-semibold leading-tight text-white/75 md:text-[10px]">
                        {item.label}
                      </p>

                      <div
                        className="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                        style={{ backgroundColor: school.accentColor }}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Partners logo overlay bar */}
      {partners.length > 0 && (
        <div className="relative z-20 mx-auto -mt-11 max-w-5xl px-4 sm:px-6 lg:px-8">
          {partners.length > 4 ? (
            <PartnerMarquee
              partners={partners}
              accentColor={school.accentColor}
            />
          ) : (
            <div className="grid overflow-hidden rounded-xl bg-white shadow-lg sm:grid-cols-2 lg:grid-cols-4">
              {partners.map((partner) => (
                <PartnerLogoCard
                  key={partner.id}
                  partner={partner}
                  accentColor={school.accentColor}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  )
}

interface AnimatedNumberProps {
  value: string
}

function AnimatedNumber({ value }: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const [hasStarted, setHasStarted] = useState(false)
  const [count, setCount] = useState(0)

  const numericText = value.match(/[0-9,]+/)?.[0] || "0"
  const numericValue = Number(numericText.replace(/,/g, ""))
  const suffix = value.replace(/[0-9,]/g, "")

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted || !numericValue) return

    let start = 0
    const duration = 1400
    const increment = numericValue / (duration / 16)

    const timer = setInterval(() => {
      start += increment

      if (start >= numericValue) {
        setCount(numericValue)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [hasStarted, numericValue])

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

interface ImageMiniCardProps {
  id: string
  hoveredCard: string | null
  setHoveredCard: (value: string | null) => void
  images: AchievementCardImage[]
  alt: string
  accentColor: string
}

function ImageMiniCard({
  id,
  hoveredCard,
  setHoveredCard,
  images,
  alt,
  accentColor,
}: ImageMiniCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const hasMultipleImages = images.length > 1
  const currentImage = images[currentIndex]

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div
      className="group relative h-32 overflow-hidden rounded-xl bg-white/10 shadow-lg sm:h-36 lg:h-[150px]"
      onMouseEnter={() => setHoveredCard(id)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      <img
        src={currentImage.image}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div
        className={`absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/35 to-transparent p-3 transition-opacity duration-300 ${
          hoveredCard === id ? "opacity-100" : "opacity-90"
        }`}
      >
        <div className="max-w-[90%] text-white">
          <p className="text-xs font-bold leading-tight">
            {currentImage.title}
          </p>

          <p className="mt-1 text-[10px] leading-4 text-white/80">
            {currentImage.description}
          </p>
        </div>
      </div>

      {hasMultipleImages && (
        <>
          <button
            type="button"
            onClick={goToPrevious}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-black/70 group-hover:opacity-100"
          >
            <Icons.ChevronLeft size={16} strokeWidth={2.5} />
          </button>

          <button
            type="button"
            onClick={goToNext}
            aria-label="Next image"
            className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-black/70 group-hover:opacity-100"
          >
            <Icons.ChevronRight size={16} strokeWidth={2.5} />
          </button>

          <div className="absolute bottom-3 right-3 flex gap-1">
            {images.map((item, index) => (
              <button
                key={`${item.image}-${index}`}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to image ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "w-4 bg-white" : "w-1.5 bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}

      <div
        className="absolute bottom-0 left-0 h-0.5 w-full"
        style={{ backgroundColor: accentColor }}
      />
    </div>
  )
}

interface PartnerLogoCardProps {
  partner: {
    id: string
    name: string
    logo: string
  }
  accentColor: string
}

function PartnerLogoCard({ partner, accentColor }: PartnerLogoCardProps) {
  return (
    <div className="group relative flex h-24 items-center justify-center overflow-hidden border-b border-slate-100 bg-white px-6 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-50 hover:shadow-md sm:border-r lg:border-b-0 lg:last:border-r-0">
      <img
        src={partner.logo}
        alt={partner.name}
        className="max-h-16 max-w-[170px] object-contain transition-all duration-500 ease-out group-hover:scale-110"
      />

      <div
        className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
        style={{ backgroundColor: accentColor }}
      />
    </div>
  )
}

interface PartnerMarqueeProps {
  partners: {
    id: string
    name: string
    logo: string
  }[]
  accentColor: string
}

function PartnerMarquee({ partners, accentColor }: PartnerMarqueeProps) {
  const marqueePartners = [...partners, ...partners]

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
      <div className="group relative flex h-24 overflow-hidden">
        <div className="flex min-w-max animate-[partnerMarquee_20s_linear_infinite] group-hover:[animation-play-state:paused]">
          {marqueePartners.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="group/card relative flex h-24 w-[240px] shrink-0 items-center justify-center overflow-hidden border-r border-slate-100 bg-white px-8 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-50 hover:shadow-md"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-16 max-w-[190px] object-contain transition-all duration-500 ease-out group-hover/card:scale-110"
              />

              <div
                className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 transition-transform duration-500 ease-out group-hover/card:scale-x-100"
                style={{ backgroundColor: accentColor }}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes partnerMarquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  )
}