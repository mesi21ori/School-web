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
news: [
  {
    id: "ozone-scholarship-2026",
    title: "Ozone School Opens Scholarship Application for the New Academic Year",
    category: "Scholarship",
    date: "July 16, 2026",
    author: "Ozone School",
    image: "/news/news-1.jpg",
    excerpt:
      "Ozone School is now accepting scholarship applications for students who demonstrate strong academic potential and financial need.",
    content: [
      "Ozone School is pleased to announce that scholarship applications are now open for the new academic year. The program is designed to support talented and motivated students who need financial assistance.",
      "Applicants will be reviewed based on academic performance, family financial background, personal motivation, and supporting documents.",
      "Shortlisted students may be invited for an interview or academic assessment before final scholarship decisions are announced.",
    ],
  },
  {
    id: "dynamic-curriculum-update",
    title: "Dynamic Curriculum Supports Academic and Creative Growth",
    category: "Academics",
    date: "July 18, 2026",
    author: "Academic Office",
    image: "/news/news-2.jpg",
    excerpt:
      "Our curriculum balances academics, sport, science, art, and social activities to support holistic student development.",
    content: [
      "Ozone School continues to strengthen its dynamic curriculum by combining academic learning with sport, science, art, and social activities.",
      "This approach helps students develop confidence, creativity, teamwork, discipline, and problem-solving skills.",
      "The school believes that strong education should prepare learners not only for exams, but also for life.",
    ],
  },
  {
    id: "parent-school-community",
    title: "Building a Stronger School and Parent Community",
    category: "Community",
    date: "July 20, 2026",
    author: "Student Affairs",
    image: "/news/news-3.jpg",
    excerpt:
      "Ozone School continues to build strong relationships with parents to support student success and wellbeing.",
    content: [
      "A strong partnership between parents and the school plays an important role in student achievement.",
      "Ozone School encourages regular communication, parent involvement, and shared responsibility in supporting learners.",
      "Through collaboration, the school community can create a better learning environment for every student.",
    ],
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
    subtitle: "Learn more about our journey, values, and global learning approach.",
    description:
      "Ozone School provides international-standard education with a strong focus on academic excellence, character development, and holistic student growth.",
    image: "/school-about.png",

    intro: {
      eyebrow: "About Ozone School",
      title: "About Us.",
      shortText:
        "Ozone School is built on an international educational model designed to prepare future generations with knowledge, confidence, and strong values.",
      paragraphs: [
        "Ozone International School was established in Riyadh, Saudi Arabia on September 17, 2006. It quickly rose to prominence as one of the top educational institutions in Riyadh, receiving accreditation from the Northwest Association in the United States.",
        "Following the success of Ozone International in Saudi Arabia, a significant decision was made to replicate the same educational model in Addis Ababa. Ozone School was opened in September 2014 in Ethiopia.",
        "Its primary objective is to equip the future generation of Ethiopia with the necessary skills and knowledge to lead the country and position it as a beacon for all of Africa and beyond.",
      ],
    },

    story: {
      title: "Our Story",
      description:
        "Ozone School has a long educational journey that began internationally and continued in Ethiopia with a vision for excellence.",
      items: [
        {
          id: "riyadh-2006",
          icon: "Trophy",
          title: "Started in Riyadh",
          description:
            "Ozone International School was established in Riyadh, Saudi Arabia on September 17, 2006.",
        },
        {
          id: "addis-2014",
          icon: "GraduationCap",
          title: "Opened in Ethiopia",
          description:
            "After success in Saudi Arabia, Ozone School opened in Addis Ababa, Ethiopia in September 2014.",
        },
        {
          id: "international-standard",
          icon: "Globe2",
          title: "International Standard",
          description:
            "The school follows an international education model shaped by years of experience in the education sector.",
        },
      ],
    },

    curriculum: {
      title: "Dynamic Curriculum",
      description:
        "Our dynamic curriculum balances sport, science, art, social activities, and more, ensuring a well-rounded education. We believe in nurturing every aspect of student growth through a mix of academics and extracurricular activities.",
      tags: ["Sport", "Science", "Art", "Social Activities", "Academics"],
      image: "/curriculum.png",
    },

    naming: {
      icon: "Leaf",
      title: "Why the name Ozone?",
      subtitle: "Initial Naming of the School",
      description:
        "Ozone protects life on Earth by absorbing harmful UV rays. It symbolizes environmental health. At Ozone School, we nurture students who are committed to preserving our planet for a sustainable future.",
    },

    outreach: {
      eyebrow: "Global Exposure",
      title: "Outreach, Exposure & International Exchange",
      description:
        "Our school offers various programs to help students learn from different cultures and perspectives, and contribute to the global community and society.",
      programs: [
        {
          id: "community-service",
          icon: "HeartHandshake",
          title: "Community Service",
          description:
            "Developing empathy, leadership, and civic responsibility through serving the local community and addressing social issues.",
        },
        {
          id: "educational-tours",
          icon: "Bus",
          title: "Industrial Visits & Educational Tours",
          description:
            "Gaining practical knowledge and exposure to different fields and careers through visiting industries and educational institutions.",
        },
        {
          id: "exchange-programs",
          icon: "Globe2",
          title: "International Exchange Programs",
          description:
            "Experiencing different academic systems, cultures, and languages through studying abroad in partner institutions.",
        },
      ],
    },

    stats: [
      { value: "2006", label: "Started in Riyadh" },
      { value: "2014", label: "Opened in Ethiopia" },
      { value: "20+", label: "Years in Education" },
      { value: "Global", label: "Learning Exposure" },
    ],
  },

  team: [
   {
        name: "Ms. Hirut",
        role: "Chief Executive Officer",
        image: "/ceo.png",
        bio: "A visionary school leader committed to academic excellence, discipline, and holistic student development.",
      },
      {
        name: "Mr. Ahmed",
        role: "Academic Director",
        image: "/team/team-1.png",
        bio: "Focused on curriculum quality, teacher support, and continuous improvement in learning outcomes.",
      },
      {
        name: "Ms. Sara",
        role: "School Principal",
        image: "/team/team-2.png",
        bio: "Dedicated to building a disciplined, caring, and high-performing school community.",
      },
      {
        name: "Mr. Dawit",
        role: "Student Affairs Head",
        image: "/team/team-3.png",
        bio: "Supports student growth, wellbeing, leadership, and strong school-family relationships.",
      },
      {
        name: "Ms. Hana",
        role: "Primary Coordinator",
        image: "/team/team-4.png",
        bio: "Guides primary education with care, structure, and student-centered support.",
      },
      {
        name: "Mr. Samuel",
        role: "Student Support Lead",
        image: "/team/team-5.png",
        bio: "Helps students build confidence, discipline, responsibility, and positive school habits.",
      },
      {
        name: "Ms. Lidiya",
        role: "Admissions Officer",
        image: "/team/team-6.png",
        bio: "Supports families through the admissions process with clear guidance and care.",
      },
  ],

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
        description:
          "Developing confidence, discipline, creativity, and character.",
      },
    ],

    partners: [
      {
        id: "mastercard-foundation",
        name: "Mastercard Foundation",
        logo: "/Mastercard-Foundation.png",
      },
      {
        id: "iceaddis",
        name: "iceaddis",
        logo: "/iceaddis.png",
      },
      {
        id: "reach-for-change",
        name: "Reach for Change",
        logo: "/reach-for-change.png",
      },
      {
        id: "lucy-bridge-academy",
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