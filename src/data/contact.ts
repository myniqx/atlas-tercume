import { ContactInfo } from '@/types/global';

export const contactData: ContactInfo = {
  email: 'atlaslisan@gmail.com',
  phone: '+90 540 330 3010',
  whatsapp: '+905403303010',
  address: 'İstanbul, Türkiye',
  workingHours: 'Pazartesi - Cuma: 09:00 - 18:00',
  logo: '/logo.png',
  social: {
    linkedin: 'https://www.linkedin.com/in/atlas-lisan-2b06b438a/',
    instagram: 'https://instagram.com/atlaslisan',
    twitter: 'https://twitter.com/atlasLisan',
    facebook: 'https://facebook.com/atlaslisan',
  },
} as const;
