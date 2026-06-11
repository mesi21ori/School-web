"use client";

import Image from "next/image";
import { School } from "@/types/school";
import { Eye, Lightbulb, Target } from "lucide-react";

interface MissionVisionSectionProps {
  school: School;
}

export function MissionVisionSection({ school }: MissionVisionSectionProps) {
  const imageUrl = school.hero?.imageUrl || "/images/default-mission.jpg";

  const items = [
    {
      title: school.missionVision?.vision?.title || "Our Vision",
      description: school.missionVision?.vision?.description || "To be a leading educational institution that nurtures future leaders.",
      icon: Eye,
      offset: "lg:ml-10",
    },
    {
      title: school.missionVision?.mission?.title || "Our Mission",
      description: school.missionVision?.mission?.description || "To provide quality education that empowers students with knowledge, skills, and values.",
      icon: Lightbulb,
      offset: "lg:ml-0",
    },
    {
      title: "Our Goals",
      description:
        "To support students with quality education, strong values, modern learning, and confidence for future success.",
      icon: Target,
      offset: "lg:ml-12",
    },
  ];

  return (
    <section id="mission" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Same size as About and Contact sections */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: school.primaryColor }}
          >
            Our Mission & Vision
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Guiding principles that drive our commitment to excellence in education
          </p>
          <div
            className="w-20 h-1 mx-auto mt-4 rounded-full"
            style={{ backgroundColor: school.accentColor || school.primaryColor }}
          />
        </div>

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[52%_48%]">
          {/* Left Content */}
          <div className="space-y-8">
            {items.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className={`flex items-center gap-5 ${item.offset}`}
                >
                  {/* Diamond Icon */}
                  <div
                    className="flex h-16 w-16 shrink-0 rotate-45 items-center justify-center rounded-xl border-2 bg-white"
                    style={{ borderColor: school.primaryColor }}
                  >
                    <Icon
                      className="-rotate-45"
                      size={26}
                      strokeWidth={2.3}
                      style={{ color: school.accentColor }}
                    />
                  </div>

                  <div>
                    <h3
                      className="text-2xl font-extrabold"
                      style={{ color: school.primaryColor }}
                    >
                      {item.title}
                    </h3>

                    <p className="mt-1 max-w-md text-sm leading-6 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Image Diamond Collage */}
          <div className="relative hidden h-[410px] lg:block">
            {/* Top diamond */}
            <div className="absolute left-[220px] top-[0px] h-[135px] w-[135px] rotate-45 overflow-hidden rounded-[26px]">
              <Image
                src={imageUrl}
                alt={`${school.name} mission image`}
                fill
                className="-rotate-45 scale-[1.65] object-cover grayscale"
              />
            </div>

            {/* Middle left diamond */}
            <div className="absolute left-[105px] top-[150px] h-[130px] w-[130px] rotate-45 overflow-hidden rounded-[24px]">
              <Image
                src={imageUrl}
                alt={`${school.name} vision image`}
                fill
                className="-rotate-45 scale-[1.65] object-cover grayscale"
              />
            </div>

            {/* Bottom diamond */}
            <div className="absolute left-[225px] top-[275px] h-[135px] w-[135px] rotate-45 overflow-hidden rounded-[26px]">
              <Image
                src={imageUrl}
                alt={`${school.name} goals image`}
                fill
                className="-rotate-45 scale-[1.65] object-cover grayscale"
              />
            </div>

            {/* Big right partial diamond */}
            <div className="absolute -right-[90px] top-[60px] h-[320px] w-[320px] rotate-45 overflow-hidden rounded-[50px]">
              <Image
                src={imageUrl}
                alt={`${school.name} school image`}
                fill
                className="-rotate-45 scale-[1.65] object-cover grayscale"
              />
            </div>
          </div>

          {/* Mobile Image */}
          <div className="relative h-[260px] lg:hidden">
            <div className="absolute left-1/2 top-0 h-32 w-32 -translate-x-1/2 rotate-45 overflow-hidden rounded-3xl">
              <Image
                src={imageUrl}
                alt={`${school.name} mission image`}
                fill
                className="-rotate-45 scale-[1.65] object-cover grayscale"
              />
            </div>

            <div className="absolute left-8 top-28 h-28 w-28 rotate-45 overflow-hidden rounded-3xl">
              <Image
                src={imageUrl}
                alt={`${school.name} vision image`}
                fill
                className="-rotate-45 scale-[1.65] object-cover grayscale"
              />
            </div>

            <div className="absolute right-8 top-28 h-28 w-28 rotate-45 overflow-hidden rounded-3xl">
              <Image
                src={imageUrl}
                alt={`${school.name} goals image`}
                fill
                className="-rotate-45 scale-[1.65] object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}