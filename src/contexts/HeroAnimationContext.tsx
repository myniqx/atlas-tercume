'use client';

import React, { createContext, useContext, useState, useEffect, FC, ReactNode } from 'react';

export interface AnimationSettings {
  // Visual
  opacity: number;          // 0.05-0.5
  blur: number;             // 0-3px (target blur)
  blurStart: number;        // 3-15px (start/end blur)

  // Font
  fontSize: {
    min: number;            // rem
    max: number;            // rem
  };

  // Animation
  duration: number;         // 2-8 seconds
  maxMovementDistance: number;  // Max distance in zone (px)

  // Zone & Sprite System
  maxConcurrentSprites: number; // Max sprites at once (3-20)
  spriteDelay: number;          // Delay before new sprite (ms)

  // Control
  enabled: boolean;
  debugMode: boolean;           // Show zone borders
  debugLogs: boolean;           // Console logs
}

interface HeroAnimationContextType {
  animationSettings: AnimationSettings;
  setAnimationSettings: (settings: AnimationSettings) => void;
  hoveredNavItem: string | null;
  setHoveredNavItem: (item: string | null) => void;
  resetSettings: () => void;
}

const defaultSettings: AnimationSettings = {
  opacity: 0.15,
  blur: 3,
  blurStart: 15,
  fontSize: {
    min: 2.5,
    max: 3,
  },
  duration: 2.5,
  maxMovementDistance: 30,
  maxConcurrentSprites: 10,
  spriteDelay: 200,
  enabled: true,
  debugMode: false,
  debugLogs: false,
};

const HeroAnimationContext = createContext<HeroAnimationContextType | undefined>(undefined);

export const HeroAnimationProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [animationSettings, setAnimationSettings] = useState<AnimationSettings>(defaultSettings);
  const [hoveredNavItem, setHoveredNavItem] = useState<string | null>(null);

  // Load settings from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('hero-animation-settings');
    if (saved) {
      try {
        setAnimationSettings(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse animation settings:', e);
      }
    }
  }, []);

  // Save settings to localStorage
  const updateSettings = (settings: AnimationSettings) => {
    setAnimationSettings(settings);
    localStorage.setItem('hero-animation-settings', JSON.stringify(settings));
  };

  const resetSettings = () => {
    setAnimationSettings(defaultSettings);
    localStorage.removeItem('hero-animation-settings');
  };

  return (
    <HeroAnimationContext.Provider
      value={{
        animationSettings,
        setAnimationSettings: updateSettings,
        hoveredNavItem,
        setHoveredNavItem,
        resetSettings,
      }}
    >
      {children}
    </HeroAnimationContext.Provider>
  );
};

export const useHeroAnimation = () => {
  const context = useContext(HeroAnimationContext);
  if (!context) {
    throw new Error('useHeroAnimation must be used within HeroAnimationProvider');
  }
  return context;
};
