'use client';

import React, { FC } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HeroProps } from './types';
import { cn } from '@/lib/utils';

export const Hero: FC<HeroProps> = ({
  className,
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
}) => {
  return (
    <section
      className={cn(
        'relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background',
        className
      )}
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4 py-24 md:py-32 lg:py-40">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass mb-8"
          >
            <Sparkles className="h-4 w-4 text-yellow-500" />
            <span className="text-sm font-medium">{subtitle}</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            {title.split(' ').map((word, index) => {
              // Highlight certain words with gradient
              if (index % 3 === 0) {
                return (
                  <span key={index} className="text-gradient-primary">
                    {word}{' '}
                  </span>
                );
              }
              return <span key={index}>{word} </span>;
            })}
          </motion.h1>

          {/* Description */}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              {description}
            </motion.p>
          )}

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {primaryCta && (
              <Button
                asChild
                size="lg"
                className="gradient-primary text-white shadow-glow hover:shadow-premium transition-all duration-300 group"
              >
                <Link href={primaryCta.href}>
                  {primaryCta.label}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            )}
            {secondaryCta && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 hover:bg-primary/5"
              >
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            )}
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground"
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>15+ Yıl Deneyim</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span>1000+ Mutlu Müşteri</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-purple-500" />
              <span>13 Farklı Hizmet</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
