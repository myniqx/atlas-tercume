export interface ThemeSwitcherProps {
  className?: string;
}

export type ColorTheme = 'option1' | 'option2' | 'option3' | 'option4' | 'option5' | 'custom';
export type AppearanceMode = 'light' | 'dark';

export interface ThemeConfig {
  id: ColorTheme;
  name: string;
  description: string;
  primaryRgb: string;  // RGB format: "51, 65, 85"
  ctaRgb: string;      // RGB format: "13, 148, 136"
  primaryHex?: string; // For display/preview
  ctaHex?: string;     // For display/preview
  isCustom?: boolean;
}

export interface CustomColors {
  primaryRgb: string;
  ctaRgb: string;
  primaryHex: string;
  ctaHex: string;
}
