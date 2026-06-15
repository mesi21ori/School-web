"use client"

import Image from "next/image"
import { School } from "@/types/school"
import {
  Bus,
  FlaskConical,
  Library,
  MonitorSmartphone,
  CheckCircle2,
} from "lucide-react"
import { motion } from "framer-motion"

interface FacilitiesSectionProps {
  school: School
}

type Facility = {
  id: string
  title: string
  subtitle: string
  image: string
  icon: React.ElementType
  points: string[]
  badgeNumber: string
  badgeText: string
}

export function FacilitiesSection({ school }: FacilitiesSectionProps) {
  const facilities: Facility[] = [
    {
      id: "transportation",
      title: "Comfortable Bus Transportation",
      subtitle:
        "At Ozone School, we care about the safety and comfort of our students during their daily commute.",
      image: "/facilities-bus.jpg",
      icon: Bus,
      badgeNumber: "01",
      badgeText: "Safe Transport",
      points: [
        "Well-maintained and clean buses with regular inspection and daily sanitation.",
        "Comfortable seating arrangements designed for different student needs.",
        "Seat belts and smooth travel support a safe and stress-free ride.",
      ],
    },
    {
      id: "smart-classrooms",
      title: "Smart Classrooms",
      subtitle:
        "Our smart classrooms are equipped with modern technology to enhance every student’s learning experience.",
      image: "/facilities-smart-classroom.jpg",
      icon: MonitorSmartphone,
      badgeNumber: "02",
      badgeText: "Modern Learning",
      points: [
        "Small class sizes allow more attention, feedback, and participation.",
        "Comfortable classrooms support focus, collaboration, and active learning.",
        "Interactive whiteboards and audiovisual tools make lessons engaging.",
        "Connected classrooms provide access to school networks and online resources.",
      ],
    },
    {
      id: "science-labs",
      title: "Science Laboratories",
      subtitle:
        "Our science laboratories support hands-on exploration in biology, chemistry, and physics.",
      image: "/facilities-science-lab.jpg",
      icon: FlaskConical,
      badgeNumber: "03",
      badgeText: "Practical Science",
      points: [
        "Modern equipment supports experiments and scientific exploration.",
        "Students conduct experiments, analyze data, and test ideas.",
        "Practical learning deepens understanding of scientific concepts.",
      ],
    },
    {
      id: "library",
      title: "Smart Library",
      subtitle:
        "The Smart Library is a vibrant learning space where curiosity, ideas, and discovery grow beyond the classroom.",
      image: "/facilities-library.jpg",
      icon: Library,
      badgeNumber: "04",
      badgeText: "Smart Library",
      points: [
        "Cutting-edge technology integration supports modern research and learning.",
        "Sustainable practices encourage responsible and future-focused education.",
        "Collaborative spaces help students read, discuss, create, and explore.",
        "Student-led initiatives build ownership, creativity, and leadership.",
      ],
    },
  ]

  // Animation variants with proper typing
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, x: -30 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut" as const,
      },
    },
  }

  const contentVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut" as const,
      },
    },
  }

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.5, y: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15,
        delay: 0.2,
      },
    },
  }

  const pointVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut" as const,
      },
    }),
  }

  return (
    <section
      id="facilities"
      className="relative overflow-hidden bg-white px-5 py-14 sm:px-8 sm:py-16 lg:px-20 xl:px-24 2xl:px-32"
    >
      <div className="relative mx-auto max-w-7xl">
        {/* Page Header with animation */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-2 text-xs font-bold uppercase tracking-[0.25em]"
            style={{ color: school.accentColor }}
          >
            Our Facilities
          </motion.p>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl font-black uppercase leading-tight tracking-tight sm:text-4xl md:text-5xl"
            style={{ color: school.primaryColor }}
          >
            Learning Spaces Designed for Student Growth
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600"
          >
            Ozone School provides modern facilities and programs that support
            academic excellence, safety, creativity, practical learning, and
            global exposure.
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="mx-auto mt-5 h-1.5 rounded-full"
            style={{ backgroundColor: school.accentColor }}
          />
        </motion.div>

        {/* Facilities List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16 sm:space-y-20"
        >
          {facilities.map((facility, index) => {
            const Icon = facility.icon
            const reverse = index % 2 !== 0

            return (
              <motion.div
                key={facility.id}
                variants={itemVariants}
                className={`grid items-center gap-8 md:gap-10 lg:grid-cols-2 ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                } mb-12 sm:mb-16 last:mb-0`}
              >
                {/* Left Image Design */}
                <motion.div
                  variants={imageVariants}
                  className="relative"
                >
                  {/* Badge - Responsive for mobile */}
                  <motion.div
                    variants={badgeVariants}
                    className={`absolute -top-8 sm:-top-10 z-20 flex items-center gap-2 sm:gap-3 rounded-full bg-white px-4 py-2 sm:px-6 sm:py-3 shadow-md ${
                      reverse ? "right-4 sm:right-10" : "left-4 sm:left-10"
                    }`}
                  >
                    <span
                      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-none"
                      style={{ color: school.primaryColor }}
                    >
                      {facility.badgeNumber}
                    </span>

                    <span
                      className="max-w-[60px] sm:max-w-[90px] text-[8px] sm:text-[10px] font-bold uppercase leading-tight sm:leading-3"
                      style={{ color: school.primaryColor }}
                    >
                      {facility.badgeText}
                    </span>
                  </motion.div>

                  {/* Image Card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative h-[250px] sm:h-[290px] md:h-[360px] lg:h-[390px] overflow-hidden rounded-[28px] sm:rounded-[34px] rounded-tr-[50px] sm:rounded-tr-[70px] bg-slate-200 shadow-lg"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={facility.image}
                        alt={facility.title}
                        fill
                        className="object-cover grayscale transition-all duration-700"
                      />
                    </motion.div>

                    <div className="absolute inset-0 bg-slate-900/35" />

                    {/* Left curved outline decoration - hidden on mobile */}
                    <div
                      className={`absolute top-1/2 hidden h-32 w-16 -translate-y-1/2 rounded-l-[40px] border-y border-l sm:block ${
                        reverse ? "-right-6 rotate-180" : "-left-6"
                      }`}
                      style={{ borderColor: school.primaryColor }}
                    />

                    {/* Icon */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 10,
                        delay: 0.3,
                      }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl shadow-lg"
                      style={{
                        backgroundColor: school.accentColor,
                        color: "white",
                      }}
                    >
                      <Icon size={22} className="sm:w-[26px] sm:h-[26px]" />
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Right Content */}
                <motion.div
                  variants={contentVariants}
                  className="relative"
                >
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-xl text-2xl sm:text-3xl md:text-4xl font-black leading-tight"
                    style={{ color: school.primaryColor }}
                  >
                    {facility.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-3 sm:mt-4 max-w-2xl text-sm leading-6 sm:leading-7 text-slate-600"
                  >
                    {facility.subtitle}
                  </motion.p>

                  <div className="mt-5 sm:mt-6 space-y-2 sm:space-y-3">
                    {facility.points.map((point, pointIndex) => (
                      <motion.div
                        key={pointIndex}
                        custom={pointIndex}
                        variants={pointVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex gap-2 sm:gap-3"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 90 }}
                          transition={{ duration: 0.2 }}
                        >
                          <CheckCircle2
                            className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 shrink-0"
                            style={{ color: school.accentColor }}
                          />
                        </motion.div>
                        <p className="text-xs sm:text-sm leading-5 sm:leading-6 text-slate-600">
                          {point}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}