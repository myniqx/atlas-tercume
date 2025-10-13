'use client';

import React, { FC, useState, useEffect } from 'react';
import { Palette, Sun, Moon, Pipette, Sparkles, RotateCcw } from 'lucide-react';
import { ThemeSwitcherProps, ColorTheme, AppearanceMode, CustomColors } from './types';
import { themeConfigs } from './data';
import { cn } from '@/lib/utils';
import { useHeroAnimation } from '@/contexts/HeroAnimationContext';

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<ColorTheme>('option1');
  const [appearanceMode, setAppearanceMode] = useState<AppearanceMode>('light');
  const [customColors, setCustomColors] = useState<CustomColors>({
    primaryRgb: '51, 65, 85',
    ctaRgb: '13, 148, 136',
    primaryHex: '#334155',
    ctaHex: '#0d9488',
  });

  const { animationSettings, setAnimationSettings, resetSettings } = useHeroAnimation();

  // Helper: Convert HEX to RGB
  const hexToRgb = (hex: string): string => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) return '0, 0, 0';
    return `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`;
  };

  // Helper: Lighten color for dark mode
  const lightenColor = (rgb: string, amount: number = 0.3): string => {
    const [r, g, b] = rgb.split(',').map(val => parseInt(val.trim()));
    const lightenValue = (v: number) => Math.min(255, Math.round(v + (255 - v) * amount));
    return `${lightenValue(r)}, ${lightenValue(g)}, ${lightenValue(b)}`;
  };

  // Load saved preferences from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('color-theme') as ColorTheme;
    const savedMode = localStorage.getItem('appearance-mode') as AppearanceMode;
    const savedCustom = localStorage.getItem('custom-colors');

    if (savedCustom) {
      setCustomColors(JSON.parse(savedCustom));
    }

    if (savedTheme) {
      setCurrentTheme(savedTheme);
      applyTheme(savedTheme, savedCustom ? JSON.parse(savedCustom) : customColors);
    }

    if (savedMode) {
      setAppearanceMode(savedMode);
      applyAppearanceMode(savedMode);
    }
  }, []);

  // Apply theme colors to CSS variables
  const applyTheme = (themeId: ColorTheme, colors?: CustomColors) => {
    const root = document.documentElement;
    const theme = themeConfigs.find(t => t.id === themeId);

    if (!theme) return;

    let primaryRgb = theme.primaryRgb;
    let ctaRgb = theme.ctaRgb;

    // Use custom colors if custom theme
    if (themeId === 'custom' && colors) {
      primaryRgb = colors.primaryRgb;
      ctaRgb = colors.ctaRgb;
    }

    // Apply colors (will be adjusted for dark mode in applyAppearanceMode)
    root.style.setProperty('--theme-primary-rgb', primaryRgb);
    root.style.setProperty('--theme-cta-rgb', ctaRgb);
    root.style.setProperty('--glow-color', ctaRgb);

    // Re-apply dark mode adjustment if in dark mode
    if (appearanceMode === 'dark') {
      root.style.setProperty('--theme-primary-rgb', lightenColor(primaryRgb, 0.2));
      root.style.setProperty('--theme-cta-rgb', lightenColor(ctaRgb, 0.15));
      root.style.setProperty('--glow-color', lightenColor(ctaRgb, 0.15));
    }
  };

  const applyAppearanceMode = (mode: AppearanceMode) => {
    const root = document.documentElement;

    if (mode === 'dark') {
      root.classList.add('dark');
      // Lighten colors for dark mode
      const theme = themeConfigs.find(t => t.id === currentTheme);
      if (theme) {
        const primaryRgb = currentTheme === 'custom' ? customColors.primaryRgb : theme.primaryRgb;
        const ctaRgb = currentTheme === 'custom' ? customColors.ctaRgb : theme.ctaRgb;

        root.style.setProperty('--theme-primary-rgb', lightenColor(primaryRgb, 0.2));
        root.style.setProperty('--theme-cta-rgb', lightenColor(ctaRgb, 0.15));
        root.style.setProperty('--glow-color', lightenColor(ctaRgb, 0.15));
      }
    } else {
      root.classList.remove('dark');
      // Restore original colors
      applyTheme(currentTheme, customColors);
    }
  };

  const handleThemeChange = (themeId: ColorTheme) => {
    setCurrentTheme(themeId);
    applyTheme(themeId, themeId === 'custom' ? customColors : undefined);
    localStorage.setItem('color-theme', themeId);
  };

  const handleCustomColorChange = (type: 'primary' | 'cta', hex: string) => {
    const newColors: CustomColors = {
      ...customColors,
      [`${type}Hex`]: hex,
      [`${type}Rgb`]: hexToRgb(hex),
    };
    setCustomColors(newColors);
    localStorage.setItem('custom-colors', JSON.stringify(newColors));

    if (currentTheme === 'custom') {
      applyTheme('custom', newColors);
    }
  };

  const toggleAppearanceMode = () => {
    const newMode: AppearanceMode = appearanceMode === 'light' ? 'dark' : 'light';
    setAppearanceMode(newMode);
    applyAppearanceMode(newMode);
    localStorage.setItem('appearance-mode', newMode);
  };

  // Only render in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div
      className={cn(
        'fixed left-0 top-1/2 -translate-y-1/2 z-[9999] transition-transform duration-300',
        isOpen ? 'translate-x-0' : '-translate-x-[320px]',
        className
      )}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Main Panel */}
      <div className="flex items-center">
        {/* Content */}
        <div className="w-[320px] max-h-[85vh] overflow-y-auto bg-white dark:bg-slate-800 border-r border-y border-slate-200 dark:border-slate-700 shadow-2xl backdrop-blur-lg bg-white/95 dark:bg-slate-800/95 rounded-r-2xl p-5">
          {/* Header */}
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2">
              <Palette className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <h3 className="font-bold text-sm">Theme Switcher</h3>
            </div>
            <span className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-2 py-1 rounded-full">
              DEV
            </span>
          </div>

          {/* Dark/Light Mode Toggle */}
          <div className="mb-4 pb-4 border-b border-slate-200 dark:border-slate-700">
            <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wide mb-2 block">
              Appearance
            </label>
            <button
              onClick={toggleAppearanceMode}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
            >
              <span className="flex items-center gap-2 text-sm">
                {appearanceMode === 'light' ? (
                  <>
                    <Sun className="h-4 w-4 text-amber-500" />
                    Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="h-4 w-4 text-blue-400" />
                    Dark Mode
                  </>
                )}
              </span>
              <div className={cn(
                'w-10 h-5 rounded-full transition-colors',
                appearanceMode === 'dark' ? 'bg-blue-500' : 'bg-slate-300'
              )}>
                <div className={cn(
                  'w-4 h-4 bg-white rounded-full shadow-md transform transition-transform mt-0.5',
                  appearanceMode === 'dark' ? 'translate-x-5' : 'translate-x-0.5'
                )} />
              </div>
            </button>
          </div>

          {/* Color Theme Selection */}
          <div>
            <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wide mb-3 block">
              Color Theme
            </label>
            <div className="space-y-2">
              {themeConfigs.map((theme) => (
                <div key={theme.id}>
                  <button
                    onClick={() => handleThemeChange(theme.id)}
                    className={cn(
                      'w-full text-left px-3 py-2.5 rounded-lg border-2 transition-all',
                      currentTheme === theme.id
                        ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                        : 'border-slate-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-700 bg-white dark:bg-slate-700/50'
                    )}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-semibold">{theme.name}</span>
                      {currentTheme === theme.id && (
                        <div className="w-2 h-2 rounded-full bg-purple-500" />
                      )}
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
                      {theme.description}
                    </p>
                    <div className="flex gap-2">
                      {!theme.isCustom ? (
                        <>
                          <div
                            className="w-6 h-6 rounded border border-slate-300 dark:border-slate-600"
                            style={{ backgroundColor: theme.primaryHex }}
                            title="Primary Color"
                          />
                          <div
                            className="w-6 h-6 rounded border border-slate-300 dark:border-slate-600"
                            style={{ backgroundColor: theme.ctaHex }}
                            title="CTA Color"
                          />
                        </>
                      ) : (
                        <div className="flex items-center gap-1 text-xs text-purple-600 dark:text-purple-400">
                          <Pipette className="h-3 w-3" />
                          <span>Pick your colors</span>
                        </div>
                      )}
                    </div>
                  </button>

                  {/* Custom Color Pickers */}
                  {theme.isCustom && currentTheme === 'custom' && (
                    <div className="mt-2 ml-3 space-y-2 pb-2 border-l-2 border-purple-300 dark:border-purple-700 pl-3">
                      <div className="flex items-center gap-2">
                        <label className="text-xs text-slate-600 dark:text-slate-400 w-16">
                          Primary
                        </label>
                        <input
                          type="color"
                          value={customColors.primaryHex}
                          onChange={(e) => handleCustomColorChange('primary', e.target.value)}
                          className="w-8 h-8 rounded cursor-pointer border-2 border-slate-300 dark:border-slate-600"
                        />
                        <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                          {customColors.primaryHex}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <label className="text-xs text-slate-600 dark:text-slate-400 w-16">
                          CTA
                        </label>
                        <input
                          type="color"
                          value={customColors.ctaHex}
                          onChange={(e) => handleCustomColorChange('cta', e.target.value)}
                          className="w-8 h-8 rounded cursor-pointer border-2 border-slate-300 dark:border-slate-600"
                        />
                        <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                          {customColors.ctaHex}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Hero Animation Settings */}
          <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between mb-3">
              <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wide flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Hero Animation
              </label>
              <button
                onClick={resetSettings}
                className="text-xs text-slate-500 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 flex items-center gap-1"
                title="Reset to defaults"
              >
                <RotateCcw className="h-3 w-3" />
                Reset
              </button>
            </div>

            {/* Enable/Disable Toggle */}
            <div className="mb-3">
              <button
                onClick={() => setAnimationSettings({ ...animationSettings, enabled: !animationSettings.enabled })}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors text-sm"
              >
                <span>Animation</span>
                <div className={cn(
                  'w-10 h-5 rounded-full transition-colors',
                  animationSettings.enabled ? 'bg-green-500' : 'bg-slate-300'
                )}>
                  <div className={cn(
                    'w-4 h-4 bg-white rounded-full shadow-md transform transition-transform mt-0.5',
                    animationSettings.enabled ? 'translate-x-5' : 'translate-x-0.5'
                  )} />
                </div>
              </button>
            </div>

            {/* Settings Sliders */}
            {animationSettings.enabled && (
              <div className="space-y-3">
                {/* Opacity */}
                <div>
                  <label className="text-xs text-slate-600 dark:text-slate-400 flex justify-between mb-1">
                    <span>Opacity</span>
                    <span className="font-mono">{animationSettings.opacity.toFixed(2)}</span>
                  </label>
                  <input
                    type="range"
                    min="0.05"
                    max="0.5"
                    step="0.05"
                    value={animationSettings.opacity}
                    onChange={(e) => setAnimationSettings({ ...animationSettings, opacity: parseFloat(e.target.value) })}
                    className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-600"
                  />
                </div>

                {/* Blur (Target) */}
                <div>
                  <label className="text-xs text-slate-600 dark:text-slate-400 flex justify-between mb-1">
                    <span>Blur (Target)</span>
                    <span className="font-mono">{animationSettings.blur}px</span>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="3"
                    step="0.5"
                    value={animationSettings.blur}
                    onChange={(e) => setAnimationSettings({ ...animationSettings, blur: parseFloat(e.target.value) })}
                    className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-600"
                  />
                </div>

                {/* Blur (Start/End) */}
                <div>
                  <label className="text-xs text-slate-600 dark:text-slate-400 flex justify-between mb-1">
                    <span>Blur (Start/End)</span>
                    <span className="font-mono">{animationSettings.blurStart}px</span>
                  </label>
                  <input
                    type="range"
                    min="3"
                    max="15"
                    step="1"
                    value={animationSettings.blurStart}
                    onChange={(e) => setAnimationSettings({ ...animationSettings, blurStart: parseInt(e.target.value) })}
                    className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-600"
                  />
                </div>

                {/* Duration */}
                <div>
                  <label className="text-xs text-slate-600 dark:text-slate-400 flex justify-between mb-1">
                    <span>Duration</span>
                    <span className="font-mono">{animationSettings.duration}s</span>
                  </label>
                  <input
                    type="range"
                    min="2"
                    max="8"
                    step="0.5"
                    value={animationSettings.duration}
                    onChange={(e) => setAnimationSettings({ ...animationSettings, duration: parseFloat(e.target.value) })}
                    className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-600"
                  />
                </div>

                {/* Font Size Min */}
                <div>
                  <label className="text-xs text-slate-600 dark:text-slate-400 flex justify-between mb-1">
                    <span>Font Size Min</span>
                    <span className="font-mono">{animationSettings.fontSize.min}rem</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="4"
                    step="0.5"
                    value={animationSettings.fontSize.min}
                    onChange={(e) => setAnimationSettings({
                      ...animationSettings,
                      fontSize: { ...animationSettings.fontSize, min: parseFloat(e.target.value) }
                    })}
                    className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-600"
                  />
                </div>

                {/* Font Size Max */}
                <div>
                  <label className="text-xs text-slate-600 dark:text-slate-400 flex justify-between mb-1">
                    <span>Font Size Max</span>
                    <span className="font-mono">{animationSettings.fontSize.max}rem</span>
                  </label>
                  <input
                    type="range"
                    min="3"
                    max="8"
                    step="0.5"
                    value={animationSettings.fontSize.max}
                    onChange={(e) => setAnimationSettings({
                      ...animationSettings,
                      fontSize: { ...animationSettings.fontSize, max: parseFloat(e.target.value) }
                    })}
                    className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-600"
                  />
                </div>

                {/* Max Movement Distance */}
                <div>
                  <label className="text-xs text-slate-600 dark:text-slate-400 flex justify-between mb-1">
                    <span>Movement Distance</span>
                    <span className="font-mono">{animationSettings.maxMovementDistance}px</span>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="200"
                    step="10"
                    value={animationSettings.maxMovementDistance}
                    onChange={(e) => setAnimationSettings({ ...animationSettings, maxMovementDistance: parseInt(e.target.value) })}
                    className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-600"
                  />
                </div>

                {/* Concurrent Sprites */}
                <div>
                  <label className="text-xs text-slate-600 dark:text-slate-400 flex justify-between mb-1">
                    <span>Concurrent Sprites</span>
                    <span className="font-mono">{animationSettings.maxConcurrentSprites}</span>
                  </label>
                  <input
                    type="range"
                    min="3"
                    max="20"
                    step="1"
                    value={animationSettings.maxConcurrentSprites}
                    onChange={(e) => setAnimationSettings({ ...animationSettings, maxConcurrentSprites: parseInt(e.target.value) })}
                    className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-600"
                  />
                </div>

                {/* Sprite Delay */}
                <div>
                  <label className="text-xs text-slate-600 dark:text-slate-400 flex justify-between mb-1">
                    <span>Sprite Delay</span>
                    <span className="font-mono">{animationSettings.spriteDelay}ms</span>
                  </label>
                  <input
                    type="range"
                    min="100"
                    max="2000"
                    step="100"
                    value={animationSettings.spriteDelay}
                    onChange={(e) => setAnimationSettings({ ...animationSettings, spriteDelay: parseInt(e.target.value) })}
                    className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-600"
                  />
                </div>

                {/* Debug Mode Toggle */}
                <div className="pt-3 border-t border-slate-200 dark:border-slate-700">
                  <button
                    onClick={() => setAnimationSettings({ ...animationSettings, debugMode: !animationSettings.debugMode })}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors text-sm"
                  >
                    <span>Debug Mode</span>
                    <div className={cn(
                      'w-10 h-5 rounded-full transition-colors',
                      animationSettings.debugMode ? 'bg-red-500' : 'bg-slate-300'
                    )}>
                      <div className={cn(
                        'w-4 h-4 bg-white rounded-full shadow-md transform transition-transform mt-0.5',
                        animationSettings.debugMode ? 'translate-x-5' : 'translate-x-0.5'
                      )} />
                    </div>
                  </button>
                </div>

                {/* Debug Logs Toggle */}
                <div>
                  <button
                    onClick={() => setAnimationSettings({ ...animationSettings, debugLogs: !animationSettings.debugLogs })}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors text-sm"
                  >
                    <span>Debug Logs</span>
                    <div className={cn(
                      'w-10 h-5 rounded-full transition-colors',
                      animationSettings.debugLogs ? 'bg-yellow-500' : 'bg-slate-300'
                    )}>
                      <div className={cn(
                        'w-4 h-4 bg-white rounded-full shadow-md transform transition-transform mt-0.5',
                        animationSettings.debugLogs ? 'translate-x-5' : 'translate-x-0.5'
                      )} />
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Info */}
          <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              💡 Changes are saved automatically and persist across page reloads.
            </p>
          </div>
        </div>

        {/* Tab (Always Visible) */}
        <div className="bg-purple-600 hover:bg-purple-700 text-white px-2 py-4 rounded-r-lg shadow-lg cursor-pointer">
          <Palette className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
};
