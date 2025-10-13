import React from 'react';

export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface Service {
  title: string;
  slug: string;
  description: string;
  icon: string; // Lucide icon name
  badge?: string;
  features: string[];
  turnaroundTime?: string;
  price?: {
    min: number;
    unit: 'kelime' | 'sayfa' | 'saat';
  };
}

export interface ServiceCategory {
  category: string;
  description?: string;
  services: Record<string, Service>;
}

export interface TeamMember {
  name: string;
  role: string;
  expertise: string[];
  bio: string;
  image?: string;
  email?: string;
  linkedin?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  workingHours: string;
  logo: string;
  social: {
    linkedin?: string;
    instagram?: string;
    twitter?: string;
    facebook?: string;
  };
}

export interface NavigationItem {
  label: string;
  href: string;
  badge?: string;
}

export interface SiteMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  twitterHandle?: string;
  siteUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
  serviceUsed: string;
  date: string;
}

export interface ProjectReference {
  id: string;
  title: string;
  client: string;
  industry: string;
  serviceType: string;
  description: string;
  stats?: {
    wordCount?: number;
    pagesTranslated?: number;
    languages?: number;
    completionTime?: string;
  };
  logo?: string;
}
