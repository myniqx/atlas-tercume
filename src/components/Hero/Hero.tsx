'use client';

import React, { FC, useState, useEffect, useMemo, useCallback, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useHeroAnimation } from '@/contexts/HeroAnimationContext';
import { heroTranslations } from '@/data/heroTranslations';
import type { HeroProps, Zone } from './types';
import { useWordQueue } from './useWordQueue';
import { measureText, calculateZones, createSpriteInZone } from './utils';

export const Hero: FC<HeroProps> = ({
  className,
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
}) => {
  const { animationSettings, hoveredNavItem } = useHeroAnimation();
  const [zones, setZones] = useState<Zone[]>([]);
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Cache refs (no re-render)
  const longestWordSize = React.useRef<{ width: number; height: number } | null>(null);
  const baseZoneSize = React.useRef<{ width: number; height: number } | null>(null);

  // Get words to display based on hover state
  const activeWords = useMemo(() => {
    if (hoveredNavItem && heroTranslations[hoveredNavItem]) {
      return heroTranslations[hoveredNavItem];
    }
    return heroTranslations.general;
  }, [hoveredNavItem]);

  // Word queue management
  const { takeWord, queueLength } = useWordQueue(activeWords);

  // Derived state: visible sprites from zones
  const visibleSprites = useMemo(
    () => zones.filter(z => z.sprite !== null).map(z => z.sprite!),
    [zones]
  );

  // Track sprite occupancy changes
  const spriteOccupancyKey = useMemo(
    () => zones.map(z => z.sprite?.id ?? 'null').join(','),
    [zones]
  );

  // Level 1: Measure longest word (once on mount)
  useEffect(() => {
    const size = measureText("Atlas Lisan", animationSettings.fontSize.max);
    longestWordSize.current = size;

    if (animationSettings.debugLogs) {
      console.log('[HERO] Longest word measured:', {
        word: "Atlas Lisan",
        size,
        fontSize: animationSettings.fontSize.max
      });
    }
  }, []); // Empty deps → only once on mount

  // Level 2: Calculate base zone (when fontSize.max or moveDistance changes)
  useEffect(() => {
    if (!longestWordSize.current) return;

    const { width, height } = longestWordSize.current;
    const { maxMovementDistance, debugLogs } = animationSettings;

    baseZoneSize.current = {
      width: width + (2 * maxMovementDistance),
      height: height + (2 * maxMovementDistance)
    };
  }, [animationSettings.fontSize.max, animationSettings.maxMovementDistance]);

  // Level 3: Calculate zone grid (when baseZone changes or window resizes)
  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current || !baseZoneSize.current) return;

      const { clientWidth, clientHeight } = containerRef.current;
      const newZones = calculateZones(clientWidth, clientHeight, animationSettings, baseZoneSize.current);
      setZones(newZones);
    };

    // Initial calculation
    handleResize();

    // Debounced resize handler
    let timeoutId: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 150);
    };

    window.addEventListener('resize', debouncedResize);

    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(timeoutId);
    };
  }, [animationSettings.fontSize.max, animationSettings.maxMovementDistance]); // Triggers when base zone size changes

  // Handle sprite completion - just clear the sprite from zone
  const handleSpriteComplete = useCallback((spriteId: string) => {
    setZones(prev =>
      prev.map(z =>
        z.sprite?.id === spriteId
          ? { ...z, sprite: null }
          : z
      )
    );
  }, []);

  // Auto-fill empty zones when sprites complete
  useEffect(() => {
    if (!animationSettings.enabled || zones.length === 0) return;

    const { maxConcurrentSprites, spriteDelay } = animationSettings;
    const activeCount = zones.filter(z => z.sprite !== null).length;

    // If below max concurrent, fill empty zones
    if (activeCount < maxConcurrentSprites) {
      const emptyZones = zones.filter(z => z.sprite === null);

      if (emptyZones.length > 0) {
        const slotsToFill = Math.min(
          maxConcurrentSprites - activeCount,
          emptyZones.length
        );

        // Delay to prevent immediate refill (smooth animation)
        const timeoutId = setTimeout(() => {
          setZones(prev => {
            const newZones = [...prev];
            let filled = 0;

            // Randomly select zones to fill for better distribution
            const shuffledIndices = newZones
              .map((z, idx) => ({ zone: z, idx }))
              .filter(item => item.zone.sprite === null)
              .sort(() => Math.random() - 0.5);

            for (const { idx } of shuffledIndices) {
              if (filled >= slotsToFill) break;

              const word = takeWord();
              const zone = newZones[idx];
              const newSprite = createSpriteInZone(word, zone, 0, animationSettings);

              newZones[idx] = {
                ...zone,
                sprite: newSprite
              };

              filled++;
            }

            return newZones;
          });
        }, spriteDelay);

        return () => clearTimeout(timeoutId);
      }
    }
  }, [spriteOccupancyKey, animationSettings.enabled, animationSettings.maxConcurrentSprites, animationSettings.spriteDelay, takeWord]);

  // Initialize sprites when words/zones change or animation toggled
  useEffect(() => {
    if (!animationSettings.enabled || zones.length === 0) {
      // Clear all sprites when disabled
      setZones(prev => prev.map(z => ({ ...z, sprite: null })));
      return;
    }

    const { maxConcurrentSprites, debugLogs } = animationSettings;

    if (debugLogs) {
      console.log('[HERO] Initializing sprites:', {
        trigger: hoveredNavItem || 'general',
        totalWords: activeWords.length,
        totalZones: zones.length,
        maxConcurrent: maxConcurrentSprites
      });
    }

    // Clear existing sprites and create initial batch
    setZones(prev => {
      const clearedZones = prev.map(z => ({ ...z, sprite: null } as Zone));
      const initialCount = Math.min(maxConcurrentSprites, clearedZones.length);
      const newZones = [...clearedZones];

      for (let i = 0; i < initialCount; i++) {
        const zone = newZones[i];
        const delay = i * 0.2; // 200ms stagger
        const word = takeWord();
        const sprite = createSpriteInZone(word, zone, delay, animationSettings);

        newZones[i] = {
          ...zone,
          sprite
        };
      }

      return newZones;
    });
  }, [hoveredNavItem, animationSettings.enabled]);

  return (
    <section
      className={cn(
        'relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background',
        className
      )}
    >
      {/* Animated Sprite Background */}
      {animationSettings.enabled && (
        <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Debug: Zone borders */}
          {animationSettings.debugMode && zones.map((zone) => (
            <div
              key={`zone-${zone.id}`}
              className="absolute border-2 border-red-500/30 bg-red-500/5"
              style={{
                left: `${zone.x}px`,
                top: `${zone.y}px`,
                width: `${zone.width}px`,
                height: `${zone.height}px`,
              }}
            >
              <span className="absolute top-1 left-1 text-xs text-red-500 font-mono bg-black/50 px-1">
                Z{zone.id} {zone.sprite ? '🔴' : ' '}
              </span>
            </div>
          ))}

          <AnimatePresence>
            {visibleSprites.map((sprite) => (
              <motion.div
                key={sprite.id}
                initial={{
                  opacity: 0,
                  scale: 0.7,
                  filter: `blur(${animationSettings.blurStart}px)`,
                }}
                animate={{
                  opacity: [0, animationSettings.opacity, animationSettings.opacity, 0],
                  scale: [0.7, 1, 1, 0.7],
                  left: [`${sprite.startX}px`, `${sprite.endX}px`],
                  top: [`${sprite.startY}px`, `${sprite.endY}px`],
                  fontSize: [
                    `${sprite.fontSizeStart}rem`,
                    `${sprite.fontSizeTop}rem`,
                    `${sprite.fontSizeTop}rem`,
                    `${sprite.fontSizeEnd}rem`,
                  ],
                  filter: [
                    `blur(${animationSettings.blurStart}px)`,
                    `blur(${animationSettings.blur}px)`,
                    `blur(${animationSettings.blur}px)`,
                    `blur(${animationSettings.blurStart}px)`,
                  ],
                }}
                exit={{
                  opacity: 0,
                  scale: 0.7,
                  filter: `blur(${animationSettings.blurStart}px)`,
                }}
                transition={{
                  duration: sprite.duration,
                  delay: sprite.delay,
                  times: [0, 0.3, 0.6, 1],
                  ease: 'easeInOut',
                }}
                onAnimationComplete={() => handleSpriteComplete(sprite.id)}
                className="absolute whitespace-nowrap select-none font-bold"
                style={{
                  color: 'currentColor',
                  fontFamily: sprite.fontFamily,
                }}
              >
                {sprite.text}
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Debug: Stats Panel */}
          {animationSettings.debugMode && (
            <div className="fixed top-4 right-4 bg-black/90 text-white p-4 rounded-lg font-mono text-xs z-50 pointer-events-auto">
              <div className="font-bold mb-2 text-green-400">Sprite System Stats</div>
              <div className="space-y-1">
                <div>Total Zones: <span className="text-yellow-300">{zones.length}</span></div>
                <div>Occupied: <span className="text-red-400">{zones.filter(z => z.sprite !== null).length}</span></div>
                <div>Active Sprites: <span className="text-blue-400">{visibleSprites.length}</span></div>
                <div>Max Concurrent: <span className="text-purple-400">{animationSettings.maxConcurrentSprites}</span></div>
                <div>Queued Words: <span className="text-orange-400">{queueLength}</span></div>
                <div className="mt-2 pt-2 border-t border-white/20">
                  <div>Container: <span className="text-cyan-400">{containerRef.current?.clientWidth}x{containerRef.current?.clientHeight}</span></div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

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
