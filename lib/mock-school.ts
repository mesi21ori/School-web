import { School } from "@/types/school"

export const mockSchool: School = {
  id: "ozone-school",
  name: "Ozone School",
  logo: "/ozone-school-logo.png",
  description:
    "Ozone School is committed to nurturing academic excellence, inclusive education, strong character, and holistic student development through a modern and supportive learning environment.",

  primaryColor: "#0B3558",
  secondaryColor: "#F8E9B8",
  accentColor: "#D9A64A",

  branches: [
    {
      name: "MAIN CAMPUS / GEDERA TAFO",
      latitude: 9.0516,
      longitude: 38.8703,
    },
    {
      name: "AYAT ZONE 6 KG",
      latitude: 9.0253,
      longitude: 38.8787,
    },
    {
      name: "AYAT / YEKA BRANCH",
      latitude: 9.0268,
      longitude: 38.8842,
    },
  ],

  hero: {
    title: "Inclusive Education That Celebrates Diversity.",
    subtitle:
      "Ozone School provides quality education in a caring, modern, and supportive learning environment where every learner is encouraged to grow with confidence.",
    imageUrl: "/school-hero.png",
    ctaPrimary: "Explore Programs",
    ctaSecondary: "Learn More",
  },

  about: {
    title: "About Ozone School",
    description:
      "Ozone School is a private educational institution in Addis Ababa, Ethiopia, dedicated to quality education, inclusive learning, strong discipline, and holistic student development. The school supports learners through modern teaching methods, committed teachers, and a welcoming school community that values academic success, creativity, respect, and responsibility.",
    image: "/school-about.png",
    stats: [
      { label: "Location", value: "Addis Ababa" },
      { label: "Curriculum", value: "International" },
      { label: "Learning Focus", value: "Holistic" },
      { label: "Community", value: "Inclusive" },
    ],
  },

  missionVision: {
    mission: {
      title: "Our Mission",
      description:
        "To provide quality education that develops knowledgeable, confident, disciplined, and responsible learners who are prepared for future academic and life success.",
    },
    vision: {
      title: "Our Vision",
      description:
        "To become a leading school recognized for academic excellence, inclusive education, modern teaching methods, and the development of well-rounded students.",
    },
  },

  coreValues: [
    {
      id: "excellence",
      icon: "Trophy",
      title: "Excellence",
      description:
        "We encourage students to strive for strong academic performance, personal discipline, creativity, and continuous improvement.",
    },
    {
      id: "integrity",
      icon: "Handshake",
      title: "Integrity",
      description:
        "We promote honesty, respect, accountability, and ethical behavior in every part of school life.",
    },
    {
      id: "innovation",
      icon: "Lightbulb",
      title: "Innovation",
      description:
        "We encourage creative thinking, exploration, problem-solving, and modern learning practices that prepare students for the future.",
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
        "Early childhood education focused on literacy, numeracy, communication, creativity, social development, and confidence building.",
      gradeRange: "KG",
    },
    {
      id: "primary",
      icon: "BookOpen",
      title: "Primary School",
      description:
        "Foundational learning that develops reading, writing, mathematics, science, communication, discipline, and curiosity.",
      gradeRange: "Primary",
    },
    {
      id: "secondary",
      icon: "Users",
      title: "Secondary School",
      description:
        "Structured academic learning that strengthens subject knowledge, study habits, responsibility, and exam readiness.",
      gradeRange: "Secondary",
    },
    {
      id: "international-curriculum",
      icon: "GraduationCap",
      title: "International Curriculum",
      description:
        "A globally oriented academic program designed to prepare learners for higher education, problem-solving, and future opportunities.",
      gradeRange: "International",
    },
  ],

  whyChooseUs: [
    {
      id: "admissions",
      title: "Admissions",
      description:
        "Ozone School has online and offline admission options for students from different locations. Families can apply through the school website or by visiting the campus.",
    },
    {
      id: "skilled-teachers",
      title: "Skilled Teachers",
      description:
        "Ozone School’s teachers are dedicated to providing engaging, supportive, and effective education for student success.",
    },
    {
      id: "exploration",
      title: "Our Dedication on Exploration",
      description:
        "Ozone School promotes exploration as a key value for learning and discovery, encouraging students to follow curiosity and develop their talents.",
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
    "A proud journey of academic excellence, dedicated teaching, inclusive education, and continuous growth in our school community.",
  image: "/achievement.jpg",
  videoUrl: "/achievement-video.mp4",
  imageCardOne: "/achievement-card-1.jpg",
  imageCardTwo: "/achievement-card-2.jpg",

  imageCardOneImages: [
  {
    image: "/achievement-card-1.jpg",
    title: "Student Excellence",
    description: "Celebrating our students’ academic growth and achievements.",
  },
  {
    image: "/achievement-card-1-2.jpg",
    title: "Creative Learning",
    description: "Encouraging learners to explore ideas with confidence.",
  },
  {
    image: "/achievement-card-1-3.jpg",
    title: "Classroom Success",
    description: "Supporting students through active and engaging lessons.",
  },
],

imageCardTwoImages: [
  {
    image: "/achievement-card-2.jpg",
    title: "Modern Facilities",
    description: "Providing better learning spaces for student development.",
  },
  {
    image: "/achievement-card-2-2.jpg",
    title: "Supportive Environment",
    description: "Creating a safe and caring space for every learner.",
  },
  {
    image: "/achievement-card-2-3.jpg",
    title: "Holistic Growth",
    description: "Developing confidence, discipline, creativity, and character.",
  },
],

  partners: [
    {
      id: "Mastercard-Foundation",
      name: "Mastercard Foundation",
      logo: "/Mastercard-Foundation.png",
    },
    {
      id: "iceaddis",
      name: "iceaddis",
      logo: "/iceaddis.png",
    },
    {
      id: "Reach-for-Change",
      name: "Reach for Change",
      logo: "/reach-for-change.png",
    },
    {
      id: "Lucy-Bridge-Academy",
      name: "Lucy Bridge Academy",
      logo: "/Lucy-Bridge-Academy.png",
    },
    
  ],

  items: [
    {
      id: "graduates",
      icon: "GraduationCap",
      value: "1750+",
      label: "Graduates",
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
      id: "students",
      icon: "Users",
      value: "1750+",
      label: "Students",
    },
  ],
},

ceo: {
  label: "Meet Our CEO",
  name: "Ms. Hirut",
  role: "Chief Executive Officer",
  image: "/ceo.png",
  since: "2006",
  shortBio:
    "A visionary school leader committed to academic excellence, modern learning, discipline, and holistic student development.",
  experienceTitle: "CEO Experience",
  experienceDescription:
    "Our CEO brings strong leadership experience in education, school growth, student development, and community-centered learning.",
  points: [
    "Over 15 years of experience in education and leadership.",
    "Focused on academic excellence, discipline, and innovation.",
    "Committed to building a supportive learning community.",
  ],
},

  contact: {
    phone: "+251 11 660 6078",
    email: "info@ozoneschool.edu.et",
    address: "Ozone School, Gedera / Tafo, Addis Ababa, Ethiopia",
    hours: "Monday - Friday: 8:00 AM - 4:00 PM",
    mapUrl: "https://maps.google.com/?q=Ozone+School+Gedera+Tafo+Addis+Ababa",
  },

  footer: {
    description:
      "Ozone School provides quality education in Addis Ababa, supporting academic excellence, inclusive learning, discipline, modern teaching, and holistic student development.",
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