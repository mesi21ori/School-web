"use client"

import { School } from "@/types/school"

interface WhyChooseUsSectionProps {
  school: School
}

export function WhyChooseUsSection({ school }: WhyChooseUsSectionProps) {
  const whyUsItems = school.whyChooseUs || []

  return (
    <section
      id="why-us"
      className="py-20"
      style={{
        backgroundColor: `${school.secondaryColor}55`,
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <p
            className="mb-3 text-xs font-bold uppercase tracking-[0.28em]"
            style={{ color: school.primaryColor }}
          >
            Some Reasons
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Why Choose Us
          </h2>

          <div
            className="mx-auto mt-5 h-1 w-20 rounded-full"
            style={{
              backgroundColor: school.accentColor || school.primaryColor,
            }}
          />
        </div>

        {/* Items from mock data */}
        <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {whyUsItems.slice(0, 6).map((item, index) => {
            const number = String(index + 1).padStart(2, "0")

            return (
              <div key={item.id} className="group">
                <div className="mb-4 flex items-center gap-4">
                  <span
                    className="text-sm font-bold"
                    style={{ color: school.primaryColor }}
                  >
                    {number}
                  </span>

                  <div
                    className="h-[2px] w-14 rounded-full transition-all duration-300 group-hover:w-20"
                    style={{ backgroundColor: school.primaryColor }}
                  />

                  <h3 className="text-xl font-bold leading-tight text-foreground">
                    {item.title}
                  </h3>
                </div>

                <p className="max-w-sm pl-[86px] text-sm leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}