import { TeamMember } from '@/types/global';

export const teamData: TeamMember[] = [
  {
    name: 'Ayşe Yılmaz',
    role: 'Kurucu & Baş Tercüman',
    expertise: [
      'Yeminli Tercümanlık',
      'Hukuki Tercüme',
      'İngilizce - Türkçe',
      'Almanca - Türkçe',
    ],
    bio: '15 yıllık tercümanlık deneyimi ile yeminli tercüman olarak hizmet vermektedir. İstanbul Üniversitesi Mütercim Tercümanlık bölümü mezunu. Adalet Bakanlığı onaylı yeminli tercüman.',
    image: '/images/team/ayse-yilmaz.jpg', // Placeholder
    email: 'ayse@atlaslisan.com',
    linkedin: 'https://linkedin.com/in/ayseyilmaz',
  },
  {
    name: 'Mehmet Kaya',
    role: 'Kıdemli Tercüman',
    expertise: [
      'Teknik Tercüme',
      'Medikal Tercüme',
      'İngilizce - Türkçe',
      'Fransızca - Türkçe',
    ],
    bio: '10 yıldır teknik ve medikal tercüme alanında uzmanlaşmış tercüman. Boğaziçi Üniversitesi İngiliz Dili ve Edebiyatı mezunu. Medikal terminoloji sertifikalı.',
    image: '/images/team/mehmet-kaya.jpg', // Placeholder
    email: 'mehmet@atlaslisan.com',
    linkedin: 'https://linkedin.com/in/mehmetkaya',
  },
];
