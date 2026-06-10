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
  icon: string
  title: string
  description: string
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

export interface School {
  id: string
  name: string
  logo: string
  description: string
  primaryColor: string
  secondaryColor: string
  accentColor: string
 branches?: string[]
  hero: HeroSection
  about: AboutSection
  missionVision: MissionVision
  coreValues: CoreValue[]
  academicPrograms: AcademicProgram[]
  whyChooseUs: WhyChooseItem[]
  contact: ContactInfo
  footer: FooterData
}
