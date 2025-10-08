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

export interface Zone {
  id: number;
  x: number;      // px
  y: number;      // px
  width: number;  // px
  height: number; // px
  sprite: Sprite | null;
}

export interface Sprite {
  id: string;
  text: string;
  zoneId: number;

  // Position (px)
  startX: number;
  startY: number;
  endX: number;
  endY: number;

  // Font
  fontFamily: string;
  fontSizeStart: number;
  fontSizeTop: number;
  fontSizeEnd: number;

  // Animation
  rotation: number;
  duration: number;
  delay: number;
  isActive: boolean;
}
