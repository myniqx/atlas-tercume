import React from 'react';

export interface HeroProps {
  className?: string;
  title: string;
  subtitle: string;
  description?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
}
