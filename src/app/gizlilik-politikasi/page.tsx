import React from 'react';
import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';
import { privacyPolicyData } from '@/data/legal/privacy-policy';

export const metadata: Metadata = {
  title: 'Gizlilik Politikası | Atlas Lisan',
  description: 'Atlas Lisan kişisel veri gizlilik politikası. Kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında detaylı bilgi.',
  keywords: ['gizlilik politikası', 'kişisel veri', 'veri güvenliği', 'atlas lisan', 'tercüme', 'gizlilik'],
  robots: 'index, follow',
  openGraph: {
    title: 'Gizlilik Politikası | Atlas Lisan',
    description: 'Kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında detaylı bilgi.',
    type: 'website',
    locale: 'tr_TR',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title={privacyPolicyData.title}
      description={privacyPolicyData.description}
      lastUpdated={privacyPolicyData.lastUpdated}
      sections={privacyPolicyData.sections}
    />
  );
}
