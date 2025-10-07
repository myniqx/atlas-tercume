export interface ThemeSwitcherProps {
  className?: string;
}

export type ColorTheme = 'option1' | 'option2' | 'option3' | 'option4' | 'option5';
export type AppearanceMode = 'light' | 'dark';

export interface ThemeConfig {
  id: ColorTheme;
  name: string;
  description: string;
  primary: string;
  cta: string;
}
