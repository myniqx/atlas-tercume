'use client';

import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { BaseCardProps } from './types';
import { cn } from '@/lib/utils';

export const BaseCard: FC<BaseCardProps> = ({
  children,
  className,
  hoverEffect = 'lift',
  animated = true,
  animationDelay = 0,
}) => {
  // Hover animation based on effect type
  const getHoverAnimation = () => {
    switch (hoverEffect) {
      case 'scale':
        return { scale: 1.02, y: -5 };
      case 'lift':
        return { y: -5 };
      case 'none':
      default:
        return {};
    }
  };

  // Initial animation config
  const animationConfig = animated
    ? {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5, delay: animationDelay },
      }
    : {};

  // Hover animation config
  const hoverConfig =
    hoverEffect !== 'none'
      ? {
          whileHover: getHoverAnimation(),
          transition: { duration: 0.2 },
        }
      : {};

  return (
    <motion.div {...animationConfig} {...hoverConfig}>
      <Card
        className={cn(
          'h-full border-2 hover:border-primary/50 hover:shadow-premium transition-all duration-300',
          hoverEffect === 'scale' && 'cursor-pointer',
          className
        )}
      >
        {children}
      </Card>
    </motion.div>
  );
};
