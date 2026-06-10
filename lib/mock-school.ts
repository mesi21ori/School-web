
import { School } from "@/types/school"

export const mockSchool: School = {
  id: "yeka-michael-school",
  name: "Yeka Michael School",
  logo: "/yeka-michael-logo.png",
  description:
    "Yeka Michael School is dedicated to nurturing academic excellence, strong character, and holistic development from Kindergarten to Grade 12.",
  primaryColor: "#142247", 
  secondaryColor: "#F8F5EF", 
  accentColor: "#D9A64A",
branches: [
    "MAIN CAMPUS / YEKA",
    "BOLE BRANCH",
    "SUMMIT BRANCH",
    "AYAT BRANCH",
    "PIASSA BRANCH",
    "SARIS BRANCH",
    "MEXICO BRANCH",
    "22 MAZORIA BRANCH",
    "CMC BRANCH",
    "LEBU BRANCH"
  ],
  hero: {
    title: "Nurturing Excellence from Kindergarten to Grade 12.",
    subtitle:
      "High-quality education based on the Ethiopian curriculum in a caring, modern, and supportive learning environment.",
    imageUrl: "/school-hero.png",
    ctaPrimary: "Explore Programs",
    ctaSecondary: "Learn More",
  },

  about: {
    title: "About Yeka Michael School",
    description:
      "Yeka Michael School is a Kindergarten to Grade 12 educational institution located in the Yeka community. The school is committed to academic excellence, holistic student development, and preparing learners to become knowledgeable, ethical, and responsible citizens. Through supportive teachers, modern learning methods, and a strong school community, every student is encouraged to reach their full potential.",
    image: "/school-about.png",
    stats: [
      { label: "Grade Levels", value: "KG-12" },
      { label: "Curriculum", value: "Ethiopian" },
      { label: "Learning Focus", value: "Holistic" },
      { label: "Community", value: "Supportive" },
    ],
  },

  missionVision: {
    mission: {
      title: "Our Mission",
      description:
        "To deliver high-quality education based on the Ethiopian curriculum, cultivating knowledgeable, skilled, and ethical individuals prepared to contribute positively to society.",
    },
    vision: {
      title: "Our Vision",
      description:
        "To be a leading school recognized for academic excellence, innovative teaching methods, and the development of well-rounded students.",
    },
  },

  coreValues: [
    {
      id: "excellence",
      icon: "Trophy",
      title: "Excellence",
      description:
        "We encourage students to strive for the highest standards in academics, character, and extracurricular activities.",
    },
    {
      id: "integrity",
      icon: "Handshake",
      title: "Integrity",
      description:
        "We promote honesty, respect, responsibility, and ethical behavior in every part of school life.",
    },
    {
      id: "innovation",
      icon: "Lightbulb",
      title: "Innovation",
      description:
        "We encourage creative thinking, problem-solving, and modern learning practices that prepare students for the future.",
    },
    {
      id: "community",
      icon: "Users",
      title: "Community",
      description:
        "We build strong relationships among students, parents, teachers, and staff to support every learner’s success.",
    },
  ],

  academicPrograms: [
    {
      id: "kindergarten",
      icon: "Smile",
      title: "Kindergarten",
      description:
        "Early childhood education focused on basic literacy, numeracy, social development, creativity, and physical activities.",
      gradeRange: "KG",
    },
    {
      id: "elementary",
      icon: "BookOpen",
      title: "Elementary School",
      description:
        "Grades 1-6: Building strong foundations in Mathematics, Science, Languages, Social Studies, discipline, and confidence.",
      gradeRange: "1-6",
    },
    {
      id: "middle",
      icon: "Users",
      title: "Middle School",
      description:
        "Grades 7-8: Strengthening academic understanding, leadership, communication, creativity, and character development.",
      gradeRange: "7-8",
    },
    {
      id: "high",
      icon: "GraduationCap",
      title: "High School",
      description:
        "Grades 9-12: Preparing students for national examinations, higher education, career planning, and responsible adulthood.",
      gradeRange: "9-12",
    },
  ],

  whyChooseUs: [
    {
      id: "ethiopian-curriculum",
      icon: "BookMarked",
      title: "Ethiopian Curriculum",
      description:
        "A complete KG to Grade 12 academic program aligned with the Ethiopian curriculum and national learning goals.",
    },
    {
      id: "experienced-teachers",
      icon: "Award",
      title: "Experienced Teachers",
      description:
        "Dedicated and caring teachers support students academically, socially, and morally throughout their school journey.",
    },
    {
      id: "modern-learning",
      icon: "Laptop",
      title: "Modern Learning Methods",
      description:
        "Classroom learning is supported by active teaching methods, technology, discussion, and continuous assessment.",
    },
    {
      id: "exam-preparation",
      icon: "GraduationCap",
      title: "Exam Preparation",
      description:
        "Students receive structured academic support to prepare for national examinations and higher education opportunities.",
    },
    {
      id: "safe-environment",
      icon: "ShieldCheck",
      title: "Safe Environment",
      description:
        "A caring, disciplined, and supportive school environment helps students learn with confidence and focus.",
    },
    {
      id: "holistic-development",
      icon: "Heart",
      title: "Holistic Development",
      description:
        "We support academic achievement, character formation, leadership, creativity, sports, and emotional growth.",
    },
  ],

  contact: {
    phone: "+251 000 000 000",
    email: "info@yekamichaelschool.edu.et",
    address: "Yeka, Addis Ababa, Ethiopia",
    hours: "Monday - Friday: 8:00 AM - 4:00 PM",
    mapUrl: "https://maps.google.com",
  },

  footer: {
    description:
      "Yeka Michael School: Nurturing excellence from Kindergarten to Grade 12 through quality education, strong values, and holistic student development.",
    quickLinks: [
      { label: "About Us", href: "#about" },
      { label: "Programs", href: "#programs" },
      { label: "Mission", href: "#mission" },
      { label: "Why Choose Us", href: "#why-us" },
      { label: "Contact", href: "#contact" },
    ],
    socialLinks: [
      { platform: "Facebook", url: "https://facebook.com", icon: "Facebook" },
      { platform: "Instagram", url: "https://instagram.com", icon: "Instagram" },
      { platform: "Telegram", url: "https://t.me", icon: "Send" },
      { platform: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
    ],
  },
}
