
export interface BaseCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: 'scale' | 'lift' | 'none';
  animated?: boolean;
  animationDelay?: number;
}
