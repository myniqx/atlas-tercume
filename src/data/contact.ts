import { ContactInfo } from '@/types/global';

export const contactData: ContactInfo = {
  email: 'info@atlaslisan.com',
  phone: '+90 555 123 4567',
  whatsapp: '+905551234567',
  address: 'Şişli, İstanbul, Türkiye',
  workingHours: 'Pazartesi - Cuma: 09:00 - 18:00',
  social: {
    linkedin: 'https://linkedin.com/company/atlaslisan',
    instagram: 'https://instagram.com/atlaslisan',
    twitter: 'https://twitter.com/atlaslisan',
    facebook: 'https://facebook.com/atlaslisan',
  },
} as const;
