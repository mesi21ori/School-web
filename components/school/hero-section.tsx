"use client"

import Image from "next/image"
import { School } from "@/types/school"
import { ArrowRight } from "lucide-react"
import { BranchLocationMarquee } from "../shared/branch-location-marquee"

interface HeroSectionProps {
    school: School
}

export function HeroSection({ school }: HeroSectionProps) {
    return (
        <section
            id="hero"
            className="relative min-h-screen w-full overflow-hidden bg-[#f7faf6] pt-14 pb-2"
        >
            <div className="grid min-h-[calc(100vh-7rem)] w-full grid-cols-1 items-center gap-12 px-8 sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-24 2xl:px-32">
                {/* Left Content */}
                <div className="max-w-3xl">
                    <h1 className="text-center font-serif text-3xl font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-6xl lg:text-left lg:text-7xl">
                        {school.hero.title}
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-8 text-slate-700 sm:text-lg lg:mx-0 lg:text-left">
                        {school.hero.subtitle}
                    </p>

                    <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
                        <a
                            href="#programs"
                            className="inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
                            style={{ backgroundColor: school.primaryColor }}
                        >
                            {school.hero.ctaPrimary || "Explore Programs"}
                            <ArrowRight size={18} />
                        </a>

                        <a
                            href="#about"
                            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border bg-white px-7 text-sm font-bold shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                            style={{
                                borderColor: school.accentColor,
                                color: school.primaryColor,
                            }}
                        >
                            {school.hero.ctaSecondary || "Learn More"}
                            <ArrowRight size={18} />
                        </a>
                    </div>
                </div>

                {/* Right Visual */}
                <div className="relative flex items-center justify-end">
                    {school.hero.imageUrl && (
                        <div className="relative h-[380px] w-full max-w-[680px] sm:h-[460px] lg:h-[560px] xl:h-[600px]">
                            <Image
                                src={school.hero.imageUrl}
                                alt={`${school.name} hero image`}
                                fill
                                priority
                                className="object-contain drop-shadow-2xl"
                            />
                        </div>
                    )}
                </div>
            </div>
            <BranchLocationMarquee
                branches={school.branches}
                brandColor={school.primaryColor}
            />
        </section>
    )
}