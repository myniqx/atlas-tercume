import React from 'react';
import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';
import { kvkkData } from '@/data/legal/kvkk';

export const metadata: Metadata = {
  title: 'KVKK Aydınlatma Metni | Atlas Lisan',
  description: '6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında kişisel verilerinizin işlenmesine ilişkin aydınlatma metni ve haklarınız.',
  keywords: ['KVKK', 'kişisel verilerin korunması', 'aydınlatma metni', 'veri sorumlusu', 'atlas lisan', '6698'],
  robots: 'index, follow',
  openGraph: {
    title: 'KVKK Aydınlatma Metni | Atlas Lisan',
    description: 'Kişisel Verilerin Korunması Kanunu kapsamında aydınlatma metni ve haklarınız.',
    type: 'website',
    locale: 'tr_TR',
  },
};

export default function KVKKPage() {
  return (
    <LegalPage
      title={kvkkData.title}
      description={kvkkData.description}
      lastUpdated={kvkkData.lastUpdated}
      sections={kvkkData.sections}
    />
  );
}
