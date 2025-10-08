'use client';

import React, { FC, useState, useRef } from 'react';
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
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Track mouse position relative to card
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

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
    <motion.div {...animationConfig} {...hoverConfig} className="h-full">
      <div
        ref={cardRef}
        className="relative h-full group"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Outer glow - visible shadow */}
        <div
          className="pointer-events-none absolute -inset-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
          style={{
            background: isHovered
              ? `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(var(--glow-color, 13, 148, 136), 0.2), transparent 40%)`
              : 'transparent',
            filter: 'blur(20px)',
          }}
        />

        {/* Border highlight layer - shining effect */}
        <div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          style={{
            background: isHovered
              ? `radial-gradient(180px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(var(--glow-color, 13, 148, 136), 0.6), rgba(var(--glow-color, 13, 148, 136), 0.2) 40%, transparent 70%)`
              : 'transparent',
          }}
        />

        <Card
          className={cn(
            'relative h-full border-2 border-border transition-all duration-300 bg-card z-20',
            'group-hover:border-[rgba(var(--glow-color,13,148,136),0.3)]',
            hoverEffect === 'scale' && 'cursor-pointer',
            className
          )}
        >
          {children}
        </Card>
      </div>
    </motion.div>
  );
};
