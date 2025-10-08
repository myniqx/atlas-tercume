import { ThemeConfig } from './types';

export const themeConfigs: ThemeConfig[] = [
  {
    id: 'option1',
    name: 'Lacivert + Teal',
    description: 'Professional & Modern',
    primaryRgb: '51, 65, 85',      // #334155
    ctaRgb: '13, 148, 136',        // #0d9488
    primaryHex: '#334155',
    ctaHex: '#0d9488',
  },
  {
    id: 'option2',
    name: 'Lacivert + Turuncu',
    description: 'Warm & Action (Renk körü dostu)',
    primaryRgb: '51, 65, 85',      // #334155
    ctaRgb: '249, 115, 22',        // #f97316
    primaryHex: '#334155',
    ctaHex: '#f97316',
  },
  {
    id: 'option3',
    name: 'Lacivert + Yeşil',
    description: 'Success & Professional (Renk körü dostu)',
    primaryRgb: '51, 65, 85',      // #334155
    ctaRgb: '5, 150, 105',         // #059669
    primaryHex: '#334155',
    ctaHex: '#059669',
  },
  {
    id: 'option4',
    name: 'Gradient Teal-Cyan',
    description: 'Modern & Distinctive',
    primaryRgb: '51, 65, 85',      // #334155
    ctaRgb: '20, 184, 166',        // #14b8a6
    primaryHex: '#334155',
    ctaHex: '#14b8a6',
  },
  {
    id: 'option5',
    name: 'Lacivert + Amber',
    description: 'Premium & Warm (Renk körü dostu)',
    primaryRgb: '51, 65, 85',      // #334155
    ctaRgb: '245, 158, 11',        // #f59e0b
    primaryHex: '#334155',
    ctaHex: '#f59e0b',
  },
  {
    id: 'custom',
    name: 'Custom Colors',
    description: 'Choose your own colors',
    primaryRgb: '51, 65, 85',      // Default
    ctaRgb: '13, 148, 136',        // Default
    primaryHex: '#334155',
    ctaHex: '#0d9488',
    isCustom: true,
  },
];
