"use client";

import { useState } from "react";
import { School } from "@/types/school";
import * as Icons from "lucide-react";

interface CoreValuesSectionProps {
  school: School;
}

const iconMap: Record<string, React.ComponentType<any>> = {
  Teamwork: Icons.Users,
  Integrity: Icons.Handshake,
  Ethics: Icons.CircleEqual,
  Respect: Icons.Heart,
  Excellence: Icons.Trophy,
  Innovative: Icons.Lightbulb,
  Diverse: Icons.Globe,
  Fairness: Icons.CircleEqual,
  Courage: Icons.ShieldCheck,
  Transparency: Icons.Eye,
};

const coreValuesData = [
  {
    title: "Teamwork",
    description:
      "Working together to support students, teachers, and the school community.",
    icon: "Teamwork",
  },
  {
    title: "Integrity",
    description:
      "Acting with honesty, responsibility, and strong moral character.",
    icon: "Integrity",
  },
  {
    title: "Ethics",
    description:
      "Making decisions based on fairness, responsibility, and good conduct.",
    icon: "Ethics",
  },
  {
    title: "Respect",
    description:
      "Valuing every learner, teacher, parent, and member of the community.",
    icon: "Respect",
  },
  {
    title: "Excellence",
    description:
      "Striving for high standards in academics, behavior, and service.",
    icon: "Excellence",
  },
  {
    title: "Innovative",
    description:
      "Encouraging creativity, new ideas, and modern learning approaches.",
    icon: "Innovative",
  },
  {
    title: "Diverse",
    description:
      "Welcoming different backgrounds, abilities, cultures, and perspectives.",
    icon: "Diverse",
  },
  {
    title: "Fairness",
    description:
      "Treating everyone equally and creating a just learning environment.",
    icon: "Fairness",
  },
  {
    title: "Courage",
    description:
      "Building confidence to face challenges and grow through learning.",
    icon: "Courage",
  },
  {
    title: "Transparency",
    description:
      "Communicating openly and building trust with students and families.",
    icon: "Transparency",
  },
];

function hexToRgba(hex: string, alpha: number) {
  const cleanHex = hex.replace("#", "");

  if (cleanHex.length !== 6) return hex;

  const r = parseInt(cleanHex.slice(0, 2), 16);
  const g = parseInt(cleanHex.slice(2, 4), 16);
  const b = parseInt(cleanHex.slice(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function ValueCard({
  value,
  index,
  activeIndex,
  setActiveIndex,
  school,
}: {
  value: (typeof coreValuesData)[number];
  index: number;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  school: School;
}) {
  const IconComponent = iconMap[value.icon] || Icons.Star;
  const isActive = activeIndex === index;

  return (
    <button
      type="button"
      onClick={() => setActiveIndex(index)}
      className="group relative min-h-[165px] overflow-hidden rounded-[32px] rounded-br-[7px] p-5 text-left shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
      style={{
        backgroundColor: isActive
          ? school.accentColor || school.primaryColor
          : "white",
      }}
    >
      <div
        className="absolute -right-8 -top-8 h-20 w-20 rounded-full opacity-10"
        style={{
          backgroundColor: isActive ? "white" : school.primaryColor,
        }}
      />

      <div
        className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110"
        style={{
          backgroundColor: isActive
            ? "rgba(255,255,255,0.18)"
            : hexToRgba(school.accentColor || school.primaryColor, 0.12),
        }}
      >
        <IconComponent
          size={23}
          strokeWidth={2}
          style={{
            color: isActive
              ? "white"
              : school.accentColor || school.primaryColor,
          }}
        />
      </div>

      <h3
        className={`text-base font-extrabold leading-tight ${
          isActive ? "text-white" : "text-slate-950"
        }`}
      >
        {value.title}
      </h3>

      <p
        className={`mt-3 text-xs leading-5 ${
          isActive ? "text-white/90" : "text-slate-500"
        }`}
      >
        {value.description}
      </p>
    </button>
  );
}

export function CoreValuesSection({ school }: CoreValuesSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const [showAll, setShowAll] = useState(false);

  const values = coreValuesData;

  const leftCard = values[0];

  // First display only 6 cards on right = 2 rows.
  // After View All, display 9 cards on right = 3 rows.
  const rightCards = showAll ? values.slice(1) : values.slice(1, 7);

  return (
    <section
      id="values"
      className="relative overflow-hidden py-16"
      style={{ backgroundColor: school.secondaryColor || "#f8fafc" }}
    >
      {/* Dotted Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `radial-gradient(${school.primaryColor} 1px, transparent 1px)`,
          backgroundSize: "14px 14px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[0.65fr_2fr]">
          {/* Left Area */}
          <div>
            <h2
              className="max-w-sm text-4xl font-black leading-tight md:text-5xl"
              style={{ color: school.primaryColor }}
            >
              Our Core <br /> Values
            </h2>

            <div
              className="mt-4 h-1.5 w-24 rounded-full"
              style={{
                backgroundColor: school.accentColor || school.primaryColor,
              }}
            />

            <p className="mt-6 max-w-xs text-sm leading-7 text-slate-600">
              The principles that guide everything we do at {school.name}.
            </p>

            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="mt-8 rounded-full px-7 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{
                backgroundColor: school.accentColor || school.primaryColor,
              }}
            >
              {showAll ? "Show Less" : "View All Values"}
            </button>

            {/* One Card Under Button - only appears after clicking View All */}
            {showAll && (
              <div className="mt-10 max-w-[260px] animate-in fade-in slide-in-from-bottom-4 duration-500">
                <ValueCard
                  value={leftCard}
                  index={0}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  school={school}
                />
              </div>
            )}
          </div>

          {/* Right Cards */}
          <div>
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {rightCards.map((value, index) => {
                const realIndex = index + 1;

                return (
                  <div
                    key={`${value.title}-right`}
                    className="animate-in fade-in slide-in-from-bottom-3 duration-500"
                  >
                    <ValueCard
                      value={value}
                      index={realIndex}
                      activeIndex={activeIndex}
                      setActiveIndex={setActiveIndex}
                      school={school}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}