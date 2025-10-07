import { NavigationItem } from '@/types/global';

export const mainNavigation: NavigationItem[] = [
  {
    label: 'Ana Sayfa',
    href: '/',
  },
  {
    label: 'Hizmetlerimiz',
    href: '/hizmetlerimiz',
  },
  {
    label: 'Hakkımızda',
    href: '/hakkimizda',
  },
  {
    label: 'Referanslar',
    href: '/referanslar',
  },
  {
    label: 'İletişim',
    href: '/iletisim',
    badge: 'Teklif Alın',
  },
];

export const footerNavigation = {
  services: {
    title: 'Hizmetler',
    links: [
      { label: 'Yeminli Tercüme', href: '/hizmetlerimiz#yeminli-tercume' },
      { label: 'Acil Tercüme', href: '/hizmetlerimiz#acil-tercume' },
      { label: 'Teknik Tercüme', href: '/hizmetlerimiz#teknik-tercume' },
      { label: 'Tüm Hizmetler', href: '/hizmetlerimiz' },
    ],
  },
  company: {
    title: 'Kurumsal',
    links: [
      { label: 'Hakkımızda', href: '/hakkimizda' },
      { label: 'Ekibimiz', href: '/hakkimizda#ekip' },
      { label: 'Referanslar', href: '/referanslar' },
      { label: 'İletişim', href: '/iletisim' },
    ],
  },
  legal: {
    title: 'Yasal',
    links: [
      { label: 'Gizlilik Politikası', href: '/gizlilik-politikasi' },
      { label: 'Kullanım Şartları', href: '/kullanim-sartlari' },
      { label: 'KVKK', href: '/kvkk' },
      { label: 'Çerez Politikası', href: '/cerez-politikasi' },
    ],
  },
} as const;
