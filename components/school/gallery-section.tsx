"use client"

import Image from "next/image"
import { School } from "@/types/school"
import { useState } from "react"

interface GallerySectionProps {
  school: School
}

type GalleryItem = {
  id: string
  image: string
  title: string
  category: string
}

export function GallerySection({ school }: GallerySectionProps) {
  const [activeCategory, setActiveCategory] = useState("All")

  const galleryItems: GalleryItem[] =
    (school as School & { gallery?: GalleryItem[] }).gallery || [
      {
        id: "gallery-1",
        image: "/gallery/gallery-1.jpg",
        title: "School Campus",
        category: "Campus",
      },
      {
        id: "gallery-2",
        image: "/gallery/gallery-2.jpg",
        title: "Science Activity",
        category: "Science",
      },
      {
        id: "gallery-3",
        image: "/gallery/gallery-3.jpg",
        title: "Student Learning",
        category: "Academics",
      },
      {
        id: "gallery-4",
        image: "/gallery/gallery-4.jpg",
        title: "Art Session",
        category: "Art",
      },
      {
        id: "gallery-5",
        image: "/gallery/gallery-5.jpg",
        title: "School Event",
        category: "Events",
      },
      {
        id: "gallery-6",
        image: "/gallery/gallery-6.jpg",
        title: "Classroom Moment",
        category: "Academics",
      },
      {
        id: "gallery-7",
        image: "/gallery/gallery-7.jpg",
        title: "Sports Activity",
        category: "Sports",
      },
      {
        id: "gallery-8",
        image: "/gallery/gallery-8.jpg",
        title: "Student Community",
        category: "Events",
      },
    ]

  const categories = [
    "All",
    "Campus",
    "Academics",
    "Science",
    "Art",
    "Sports",
    "Events",
  ]

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory)

  const items = filteredItems.slice(0, 8)

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-white px-5 py-14 sm:px-8 sm:py-16 lg:px-20 xl:px-24 2xl:px-32 mt-10"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p
              className="mb-2 text-xs font-bold uppercase tracking-[0.22em]"
              style={{ color: school.accentColor }}
            >
              Our School Photos
            </p>

            <h2
              className="font-serif text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl"
              style={{ color: school.primaryColor }}
            >
              From Our Gallery
            </h2>

            <div
              className="mt-4 h-1 w-16 rounded-full"
              style={{ backgroundColor: school.accentColor }}
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const isActive = activeCategory === category

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className="rounded-full border px-4 py-2 text-xs font-bold transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    borderColor: isActive
                      ? school.accentColor
                      : "rgba(148, 163, 184, 0.35)",
                    backgroundColor: isActive ? school.accentColor : "white",
                    color: isActive ? "white" : school.primaryColor,
                  }}
                >
                  {category}
                </button>
              )
            })}
          </div>
        </div>

        {/* Gallery Masonry Layout */}
        <div className="grid auto-rows-[170px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[190px]">
          {items.map((item, index) => {
            const layoutClasses = [
              "lg:row-span-1",
              "lg:row-span-2",
              "lg:col-span-2 lg:row-span-1",
              "lg:row-span-2",
              "lg:row-span-1",
              "lg:row-span-1",
              "lg:row-span-1",
              "lg:col-span-2 lg:row-span-1",
            ]

            return (
              <div
                key={item.id}
                className={`group relative overflow-hidden bg-slate-100 shadow-sm ${
                  layoutClasses[index] || ""
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/45" />

                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 translate-y-full p-5 transition-transform duration-500 group-hover:translate-y-0">
                  <p
                    className="mb-1 text-[11px] font-bold uppercase tracking-[0.2em]"
                    style={{ color: school.accentColor }}
                  >
                    {item.category}
                  </p>

                  <h3 className="font-serif text-xl font-bold text-white">
                    {item.title}
                  </h3>
                </div>

                {/* Small corner line */}
                <div
                  className="absolute left-4 top-4 h-10 w-1 scale-y-0 rounded-full transition-transform duration-500 group-hover:scale-y-100"
                  style={{ backgroundColor: school.accentColor }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}