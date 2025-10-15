import React from 'react';
import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';
import { cookiePolicyData } from '@/data/legal/cookie-policy';

export const metadata: Metadata = {
  title: 'Çerez Politikası | Atlas Lisan',
  description: 'Atlas Lisan web sitesinde kullanılan çerezler, amaçları ve yönetim seçenekleri hakkında detaylı bilgi.',
  keywords: ['çerez politikası', 'cookies', 'çerez yönetimi', 'atlas lisan', 'web çerezleri', 'gizlilik'],
  robots: 'index, follow',
  openGraph: {
    title: 'Çerez Politikası | Atlas Lisan',
    description: 'Web sitesinde kullanılan çerezler ve yönetim seçenekleri hakkında bilgi.',
    type: 'website',
    locale: 'tr_TR',
  },
};

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title={cookiePolicyData.title}
      description={cookiePolicyData.description}
      lastUpdated={cookiePolicyData.lastUpdated}
      sections={cookiePolicyData.sections}
    />
  );
}
