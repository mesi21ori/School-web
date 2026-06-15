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
      description:
        school.missionVision?.vision?.description ||
        "To be a leading educational institution that nurtures future leaders.",
      icon: Eye,
      offset: "lg:ml-8",
    },
    {
      title: school.missionVision?.mission?.title || "Our Mission",
      description:
        school.missionVision?.mission?.description ||
        "To provide quality education that empowers students with knowledge, skills, and values.",
      icon: Lightbulb,
      offset: "lg:ml-0",
    },
    {
      title: "Our Goals",
      description:
        "To support students with quality education, strong values, modern learning, and confidence for future success.",
      icon: Target,
      offset: "lg:ml-10",
    },
  ];

  return (
    <section id="mission" className="overflow-hidden py-16 bg-secondary/20 mt-10">
      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(-18px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes softFloat {
          0%,
          100% {
            transform: translateY(0) rotate(45deg);
          }
          50% {
            transform: translateY(-6px) rotate(45deg);
          }
        }

        @keyframes glowPulse {
          0%,
          100% {
            opacity: 0.08;
            transform: scale(1);
          }
          50% {
            opacity: 0.14;
            transform: scale(1.04);
          }
        }

        .animate-fade-up {
          animation: fadeUp 0.7s ease-out both;
        }

        .animate-slide-right {
          animation: slideRight 0.65s ease-out both;
        }

        .float-diamond {
          animation: softFloat 6s ease-in-out infinite;
        }

        .float-diamond-delay-1 {
          animation-delay: 0.5s;
        }

        .float-diamond-delay-2 {
          animation-delay: 1s;
        }

        .float-diamond-delay-3 {
          animation-delay: 1.5s;
        }

        .glow-pulse {
          animation: glowPulse 5s ease-in-out infinite;
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 animate-fade-up">
          <h2
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ color: school.primaryColor }}
          >
            Our Mission & Vision
          </h2>

          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Guiding principles that drive our commitment to excellence in education
          </p>

          <div
            className="w-16 h-1 mx-auto mt-4 rounded-full"
            style={{
              backgroundColor: school.accentColor || school.primaryColor,
            }}
          />
        </div>

        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[52%_48%]">
          {/* Left Content */}
          <div className="space-y-6">
            {items.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className={`group flex items-center gap-4 ${item.offset} animate-slide-right`}
                  style={{ animationDelay: `${index * 130}ms` }}
                >
                  {/* Diamond Icon */}
                  <div
                    className="flex h-14 w-14 shrink-0 rotate-45 items-center justify-center rounded-xl border-2 bg-white shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-md"
                    style={{ borderColor: school.primaryColor }}
                  >
                    <Icon
                      className="-rotate-45 transition-transform duration-300 group-hover:scale-105"
                      size={23}
                      strokeWidth={2.2}
                      style={{ color: school.accentColor }}
                    />
                  </div>

                  <div className="transition-transform duration-300 group-hover:translate-x-1">
                    <h3
                      className="text-xl font-extrabold"
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
          <div className="relative hidden h-[360px] lg:block">
            {/* Soft glow */}
            <div
              className="glow-pulse absolute right-8 top-16 h-60 w-60 rounded-full blur-3xl"
              style={{ backgroundColor: school.primaryColor }}
            />

            {/* Top diamond */}
            <div className="float-diamond absolute left-[205px] top-[5px] h-[115px] w-[115px] overflow-hidden rounded-[22px] shadow-lg transition-transform duration-500 hover:scale-105">
              <Image
                src={imageUrl}
                alt={`${school.name} mission image`}
                fill
                className="-rotate-45 scale-[1.55] object-cover grayscale transition-all duration-700 hover:scale-[1.7] hover:grayscale-0"
              />
            </div>

            {/* Middle left diamond */}
            <div className="float-diamond float-diamond-delay-1 absolute left-[105px] top-[132px] h-[110px] w-[110px] overflow-hidden rounded-[22px] shadow-lg transition-transform duration-500 hover:scale-105">
              <Image
                src={imageUrl}
                alt={`${school.name} vision image`}
                fill
                className="-rotate-45 scale-[1.55] object-cover grayscale transition-all duration-700 hover:scale-[1.7] hover:grayscale-0"
              />
            </div>

            {/* Bottom diamond */}
            <div className="float-diamond float-diamond-delay-2 absolute left-[210px] top-[250px] h-[115px] w-[115px] overflow-hidden rounded-[22px] shadow-lg transition-transform duration-500 hover:scale-105">
              <Image
                src={imageUrl}
                alt={`${school.name} goals image`}
                fill
                className="-rotate-45 scale-[1.55] object-cover grayscale transition-all duration-700 hover:scale-[1.7] hover:grayscale-0"
              />
            </div>

            {/* Big right partial diamond */}
            <div className="float-diamond float-diamond-delay-3 absolute -right-[60px] top-[60px] h-[280px] w-[280px] overflow-hidden rounded-[44px] shadow-xl transition-transform duration-500 hover:scale-105">
              <Image
                src={imageUrl}
                alt={`${school.name} school image`}
                fill
                className="-rotate-45 scale-[1.55] object-cover grayscale transition-all duration-700 hover:scale-[1.7] hover:grayscale-0"
              />
            </div>
          </div>

          {/* Mobile Image */}
          <div className="relative h-[230px] lg:hidden">
            <div
              className="glow-pulse absolute left-1/2 top-10 h-40 w-40 -translate-x-1/2 rounded-full blur-3xl"
              style={{ backgroundColor: school.primaryColor }}
            />

            <div className="float-diamond absolute left-1/2 top-0 h-28 w-28 -translate-x-1/2 overflow-hidden rounded-3xl shadow-lg">
              <Image
                src={imageUrl}
                alt={`${school.name} mission image`}
                fill
                className="-rotate-45 scale-[1.55] object-cover grayscale transition-all duration-700 hover:scale-[1.7] hover:grayscale-0"
              />
            </div>

            <div className="float-diamond float-diamond-delay-1 absolute left-10 top-24 h-24 w-24 overflow-hidden rounded-3xl shadow-lg">
              <Image
                src={imageUrl}
                alt={`${school.name} vision image`}
                fill
                className="-rotate-45 scale-[1.55] object-cover grayscale transition-all duration-700 hover:scale-[1.7] hover:grayscale-0"
              />
            </div>

            <div className="float-diamond float-diamond-delay-2 absolute right-10 top-24 h-24 w-24 overflow-hidden rounded-3xl shadow-lg">
              <Image
                src={imageUrl}
                alt={`${school.name} goals image`}
                fill
                className="-rotate-45 scale-[1.55] object-cover grayscale transition-all duration-700 hover:scale-[1.7] hover:grayscale-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}