
import { School } from "@/types/school"

export const mockSchool: School = {
  id: "yeka-michael-school",
  name: "Ozone School",
  logo: "/ozone-school-logo.png",
  description:
    "Yeka Michael School is dedicated to nurturing academic excellence, strong character, and holistic development from Kindergarten to Grade 12.",
primaryColor: "#0B3558", // deep navy blue from the logo ring
secondaryColor: "#F8E9B8", // warm cream/gold background
accentColor: "#D9A64A", // gold border/text color
branches: [
  {
    name: "MAIN CAMPUS / YEKA",
    latitude: 9.0357,
    longitude: 38.7895,
  },
  {
    name: "BOLE BRANCH",
    latitude: 8.9806,
    longitude: 38.7578,
  },
  {
    name: "SUMMIT BRANCH",
    latitude: 9.0261,
    longitude: 38.8684,
  },
  {
    name: "AYAT BRANCH",
    latitude: 9.0299,
    longitude: 38.8802,
  },
  {
    name: "PIASSA BRANCH",
    latitude: 9.0369,
    longitude: 38.7516,
  },
  {
    name: "SARIS BRANCH",
    latitude: 8.9357,
    longitude: 38.7578,
  },
  {
    name: "MEXICO BRANCH",
    latitude: 9.0105,
    longitude: 38.7418,
  },
  {
    name: "22 MAZORIA BRANCH",
    latitude: 9.0227,
    longitude: 38.7809,
  },
  {
    name: "CMC BRANCH",
    latitude: 9.0192,
    longitude: 38.8378,
  },
  {
    name: "LEBU BRANCH",
    latitude: 8.9587,
    longitude: 38.7045,
  },
],
  hero: {
   title: "Inclusive Education That Celebrates Diversity.",
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
    id: "admissions",
    title: "Admissions",
    description:
      "Ozone School has online and offline admission options for students from all over the world. Visit our website or campus to apply for our programs.",
  },
  {
    id: "skilled-teachers",
    title: "Skilled Teachers",
    description:
      "Ozone School's lecturers are experts in their fields, dedicated to providing innovative and engaging education for future success.",
  },
  {
    id: "exploration",
    title: "Our Dedication on Exploration",
    description:
      "Ozone School promotes exploration as a key value for learning and discovery, encouraging students to pursue curiosity and passions.",
  },
  {
    id: "inclusive-education",
    title: "Inclusive Education",
    description:
      "We create a welcoming learning culture that values unity, diversity, respect, and equal opportunity for every student.",
  },
  {
    id: "modern-learning",
    title: "Modern Learning",
    description:
      "Our classrooms support active learning, discussion, creativity, technology use, and student-centered teaching methods.",
  },
  {
    id: "student-growth",
    title: "Student Growth",
    description:
      "We support academic achievement, confidence, discipline, leadership, creativity, and strong character development.",
  },
],

achievements: {
  title: "Achievements",
  description:
    "A proud journey of academic excellence, dedicated teaching, and continuous growth in our school community.",
  image: "/achievement.jpg",
  items: [
    {
      id: "students",
      icon: "GraduationCap",
      value: "1750+",
      label: "Students",
    },
    {
      id: "certified-teachers",
      icon: "Award",
      value: "106+",
      label: "Certified Teachers",
    },
    {
      id: "student-classes",
      icon: "Building2",
      value: "46+",
      label: "Student Classes",
    },
    {
      id: "years-excellence",
      icon: "UserRoundCheck",
      value: "20+",
      label: "Years of Excellence",
    },
  ],
},

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



