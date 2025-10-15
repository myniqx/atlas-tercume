import React from 'react';
import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';
import { termsOfServiceData } from '@/data/legal/terms-of-service';

export const metadata: Metadata = {
  title: 'Kullanım Şartları | Atlas Lisan',
  description: 'Atlas Lisan tercüme hizmetleri kullanım şartları. Hizmet kapsamı, kullanıcı yükümlülükleri ve ticari koşullar hakkında detaylı bilgi.',
  keywords: ['kullanım şartları', 'hizmet koşulları', 'tercüme', 'atlas lisan', 'sözleşme', 'ticari şartlar'],
  robots: 'index, follow',
  openGraph: {
    title: 'Kullanım Şartları | Atlas Lisan',
    description: 'Tercüme hizmetleri kullanım şartları, hizmet kapsamı ve ticari koşullar.',
    type: 'website',
    locale: 'tr_TR',
  },
};

export default function TermsOfServicePage() {
  return (
    <LegalPage
      title={termsOfServiceData.title}
      description={termsOfServiceData.description}
      lastUpdated={termsOfServiceData.lastUpdated}
      sections={termsOfServiceData.sections}
    />
  );
}
