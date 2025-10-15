import React from 'react';

export interface LegalSection {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface LegalPageProps {
  title: string;
  description: string;
  lastUpdated: string;
  sections: LegalSection[];
}
