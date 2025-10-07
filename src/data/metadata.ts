import { SiteMetadata } from '@/types/global';

export const siteMetadata: SiteMetadata = {
  title: 'Atlas Lisan - Profesyonel Tercüme Hizmetleri',
  description: 'Yeminli tercüme, noter onaylı tercüme, teknik tercüme, medikal tercüme ve daha fazlası. Uzman tercümanlarımız ile hızlı ve güvenilir çeviri hizmeti. İstanbul merkezli, tüm Türkiye\'ye hizmet.',
  keywords: [
    'tercüme',
    'çeviri',
    'yeminli tercüme',
    'noter onaylı tercüme',
    'teknik tercüme',
    'medikal tercüme',
    'hukuki tercüme',
    'akademik tercüme',
    'web sitesi çevirisi',
    'acil tercüme',
    'İstanbul tercüme bürosu',
    'profesyonel çeviri',
  ],
  ogImage: '/images/og-image.jpg',
  twitterHandle: '@atlaslisan',
  siteUrl: 'https://atlaslisan.com',
} as const;

// Page-specific metadata
export const pageMetadata = {
  home: {
    title: 'Atlas Lisan - Profesyonel Tercüme Hizmetleri | Yeminli Tercüme',
    description: 'Yeminli tercüme, acil tercüme, teknik tercüme hizmetleri. 15 yıllık deneyim, hızlı teslimat, uygun fiyat. İstanbul\'un güvenilir tercüme bürosu.',
  },
  services: {
    title: 'Tercüme Hizmetlerimiz | Atlas Lisan',
    description: '13 farklı alanda profesyonel tercüme hizmeti. Yeminli, teknik, medikal, hukuki, akademik tercüme ve daha fazlası. Uzman tercümanlarımızla tanışın.',
  },
  about: {
    title: 'Hakkımızda | Atlas Lisan',
    description: 'Atlas Lisan olarak 15 yıldır profesyonel tercüme hizmetleri sunuyoruz. Deneyimli ekibimiz ve kalite garantimiz ile güvenilir çözüm ortağınız.',
  },
  contact: {
    title: 'İletişim | Atlas Lisan',
    description: 'Tercüme ihtiyaçlarınız için bizimle iletişime geçin. Hızlı fiyat teklifi, ücretsiz danışmanlık. İstanbul Şişli\'de hizmetinizdeyiz.',
  },
  references: {
    title: 'Referanslarımız | Atlas Lisan',
    description: 'Yüzlerce mutlu müşterimizin yorumları ve tamamladığımız projeler. Atlas Lisan\'ın kalite ve güvenilirlik standartlarını keşfedin.',
  },
} as const;
