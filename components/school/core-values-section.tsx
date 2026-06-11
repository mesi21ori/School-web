"use client";

import { useState } from "react";
import { School } from "@/types/school";
import * as Icons from "lucide-react";

interface CoreValuesSectionProps {
  school: School;
}

const iconMap: Record<string, React.ComponentType<any>> = {
  Trophy: Icons.Trophy,
  Handshake: Icons.Handshake,
  Lightbulb: Icons.Lightbulb,
  Heart: Icons.Heart,
  Users: Icons.Users,
  TrendingUp: Icons.TrendingUp,
  Star: Icons.Star,
  Shield: Icons.Shield,
  Target: Icons.Target,
  Eye: Icons.Eye,
};

function hexToRgba(hex: string, alpha: number) {
  const cleanHex = hex.replace("#", "");

  if (cleanHex.length !== 6) {
    return hex;
  }

  const r = parseInt(cleanHex.slice(0, 2), 16);
  const g = parseInt(cleanHex.slice(2, 4), 16);
  const b = parseInt(cleanHex.slice(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function CoreValuesSection({ school }: CoreValuesSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const values = school.coreValues?.slice(0, 4) || [
    { title: "Excellence", description: "Striving for the highest standards in everything we do.", icon: "Trophy" },
    { title: "Integrity", description: "Acting with honesty and strong moral principles.", icon: "Handshake" },
    { title: "Innovation", description: "Embracing creativity and modern learning methods.", icon: "Lightbulb" },
    { title: "Compassion", description: "Showing care and understanding to all.", icon: "Heart" },
  ];

  return (
    <section id="values" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Same size as About, Mission, and Contact sections */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: school.primaryColor }}
          >
            Our Core Values
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The principles that guide everything we do at {school.name}.
          </p>
          <div
            className="w-20 h-1 mx-auto mt-4 rounded-full"
            style={{ backgroundColor: school.accentColor || school.primaryColor }}
          />
        </div>
      </div>

      {/* Full Width Card Strip - No container padding */}
      <div className="w-full">
        <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const IconComponent = iconMap[value.icon] || Icons.Star;
            const isActive = activeIndex === index;

            return (
              <button
                key={`${value.title}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="relative flex min-h-[200px] cursor-pointer flex-col items-center justify-center px-8 py-8 text-center text-white transition-all duration-300 hover:scale-[1.02] focus:outline-none"
                style={{
                  backgroundColor: isActive
                    ? school.primaryColor
                    : hexToRgba(school.primaryColor, 0.55),
                }}
              >
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-300"
                  style={{
                    backgroundColor: isActive
                      ? "rgba(255,255,255,0.25)"
                      : "rgba(255,255,255,0.12)",
                  }}
                >
                  <IconComponent
                    size={26}
                    strokeWidth={isActive ? 2.8 : 2.2}
                    style={{
                      color: isActive ? school.accentColor : "rgba(255,255,255,0.85)",
                    }}
                  />
                </div>

                <h3
                  className={`text-xl transition-all duration-300 ${
                    isActive ? "font-extrabold" : "font-bold"
                  } text-white`}
                >
                  {value.title}
                </h3>

                <p
                  className={`mt-3 max-w-[220px] text-sm leading-6 transition-colors duration-300 ${
                    isActive ? "text-white" : "text-white/80"
                  }`}
                >
                  {value.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}