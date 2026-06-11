"use client";

import Image from "next/image";
import { School } from "@/types/school";

interface AboutSectionProps {
  school: School;
}

export function AboutSection({ school }: AboutSectionProps) {
  const aboutData = {
    title: school.about?.title || "About Us",
    description:
      school.about?.description ||
      "We provide high-quality education based on the Ethiopian curriculum in a caring, modern, and supportive learning environment.",
    imageUrl:
      school.about?.image || school.hero?.imageUrl || "/images/default-about.jpg",
  };

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Same size as Contact section */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: school.primaryColor }}
          >
            {aboutData.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn more about our mission and values
          </p>
          <div
            className="w-20 h-1 mx-auto mt-4 rounded-full"
            style={{ backgroundColor: school.accentColor || school.primaryColor }}
          />
        </div>

        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          {/* Left Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-xl bg-white p-3 shadow-xl ring-1 ring-slate-200">
              <div className="relative h-[320px] overflow-hidden rounded-lg sm:h-[420px]">
                <Image
                  src={aboutData.imageUrl}
                  alt={`${school.name} about image`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Small decorative card */}
            <div
              className="absolute -bottom-8 left-8 rounded-xl px-6 py-5 shadow-xl ring-1 ring-slate-200"
              style={{ backgroundColor: school.accentColor }}
            >
              <p
                className="text-4xl font-bold"
                style={{ color: school.primaryColor }}
              >
                20+
              </p>
              <p className="mt-1 text-sm font-medium text-slate-600">
                Years of Excellence
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <p
              className="mb-3 text-sm font-bold uppercase tracking-[0.25em]"
              style={{ color: school.primaryColor }}
            >
              About Us
            </p>

            <h3 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl">
              We Always Provide
              <br />
              <span style={{ color: school.primaryColor }}>
                The Best Education
              </span>
            </h3>

            <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">
              {aboutData.description}
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex rounded-full px-8 py-3 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
              style={{ backgroundColor: school.primaryColor }}
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}