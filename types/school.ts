export interface HeroSection {
  title: string
  subtitle: string
  imageUrl?: string
  ctaPrimary: string
  ctaSecondary: string
}

export interface AboutSection {
  title: string
  description: string
  image: string
  stats: {
    label: string
    value: string
  }[]
}

export interface MissionVision {
  mission: {
    title: string
    description: string
  }
  vision: {
    title: string
    description: string
  }
}

export interface CoreValue {
  id: string
  icon: string
  title: string
  description: string
}

export interface AcademicProgram {
  id: string
  icon: string
  title: string
  description: string
  gradeRange: string
}

export interface WhyChooseItem {
  id: string
  title: string
  description: string
}

export interface SchoolBranch {
  name: string
  latitude: number
  longitude: number
}

export interface AchievementItem {
  id: string
  icon: string
  value: string
  label: string
}

export interface PartnerItem {
  id: string
  name: string
  logo: string
}

export interface AchievementCardImage {
  image: string
  title: string
  description: string
}

export interface AchievementsSection {
  title: string
  description: string
  image: string
  videoUrl?: string
  imageCardOne?: string
  imageCardTwo?: string

  imageCardOneImages?: AchievementCardImage[]
  imageCardTwoImages?: AchievementCardImage[]

  partners?: PartnerItem[]
  items: AchievementItem[]
}

export interface ContactInfo {
  phone: string
  email: string
  address: string
  hours: string
  mapUrl?: string
}

export interface SocialLink {
  platform: string
  url: string
  icon: string
}

export interface QuickLink {
  label: string
  href: string
}

export interface FooterData {
  description: string
  quickLinks: QuickLink[]
  socialLinks: SocialLink[]
}

export type NewsItem = {
  id: string
  title: string
  category: string
  date: string
  author: string
  image: string
  excerpt: string
  content: string[]
}


export interface School {
  id: string
  name: string
  logo: string
  description: string
  primaryColor: string
  secondaryColor: string
  accentColor: string
  team?: TeamMember[]
  branches?: SchoolBranch[]
  hero: HeroSection
  about: AboutSection
  missionVision: MissionVision
  coreValues: CoreValue[]
  academicPrograms: AcademicProgram[]
  whyChooseUs: WhyChooseItem[]
  achievements?: AchievementsSection
  contact: ContactInfo
  footer: FooterData
  news:NewsItem[]

  ceo?: {
    label?: string
    name: string
    role: string
    image: string
    since: string
    shortBio: string
    experienceTitle: string
    experienceDescription: string
    points: string[]
  }
}
export type TeamMember = {
  name: string
  role: string
  image: string
  bio: string
  email?: string
  facebook?: string
  linkedin?: string
}

export interface AboutSection {
  title: string
  subtitle?: string
  description: string
  image: string

  intro?: {
    eyebrow: string
    title: string
    shortText: string
    paragraphs: string[]
  }

  story?: {
    title: string
    description: string
    items: {
      id: string
      title: string
      description: string
      icon: string
    }[]
  }

  curriculum?: {
    title: string
    description: string
    tags: string[]
    image?: string
  }

  naming?: {
    title: string
    subtitle: string
    description: string
    icon: string
  }

  outreach?: {
    eyebrow: string
    title: string
    description: string
    programs: {
      id: string
      title: string
      description: string
      icon: string
    }[]
  }

  stats: {
    label: string
    value: string
  }[]

  
}


