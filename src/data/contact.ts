import { ContactInfo } from '@/types/global';

export const contactData: ContactInfo = {
  email: 'atlaslisan@gmail.com',
  phone: '+90 540 330 3010',
  whatsapp: '+905403303010',
  address: 'İzmir, Türkiye',
  workingHours: 'Pazartesi - Cuma: 09:00 - 18:00',
  logo: '/logo.png',
  social: {
    linkedin: 'https://linkedin.com/company/atlaslisan',
    instagram: 'https://instagram.com/atlaslisan',
    twitter: 'https://twitter.com/atlaslisan',
    facebook: 'https://facebook.com/atlaslisan',
  },
} as const;
