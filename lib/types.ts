export type SocialLink = {
  label: string;
  href: string;
};

export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  url: string;
  email: string;
  socialLinks: SocialLink[];
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  tech: string[];
  year: number;
  repoUrl?: string;
  liveUrl?: string;
  featured: boolean;
  thumbnail?: string;
};

export type TimelineEntry = {
  org: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
};

export type Profile = {
  fullName: string;
  headline: string;
  location?: string;
  bio: string;
  skills: string[];
  languages: string[];
  interests: string[];
  softSkills: string[];
  phone?: string;
  resumeUrl?: string;
};

export type ContactConfig = {
  publicEmail: string;
  formEndpoint: string;
  successMessage: string;
  spamProtectionMode: "honeypot" | "none";
};
