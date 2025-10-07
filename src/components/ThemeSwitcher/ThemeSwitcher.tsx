'use client';

import React, { FC, useState, useEffect } from 'react';
import { Palette, Sun, Moon } from 'lucide-react';
import { ThemeSwitcherProps, ColorTheme, AppearanceMode } from './types';
import { themeConfigs } from './data';
import { cn } from '@/lib/utils';

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<ColorTheme>('option1');
  const [appearanceMode, setAppearanceMode] = useState<AppearanceMode>('light');

  // Load saved preferences from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('color-theme') as ColorTheme;
    const savedMode = localStorage.getItem('appearance-mode') as AppearanceMode;

    if (savedTheme) {
      setCurrentTheme(savedTheme);
      applyTheme(savedTheme);
    }

    if (savedMode) {
      setAppearanceMode(savedMode);
      applyAppearanceMode(savedMode);
    }
  }, []);

  const applyTheme = (themeId: ColorTheme) => {
    const root = document.documentElement;

    // Remove all theme classes
    root.classList.remove('theme-option1', 'theme-option2', 'theme-option3', 'theme-option4', 'theme-option5');

    // Add new theme class
    root.classList.add(`theme-${themeId}`);
  };

  const applyAppearanceMode = (mode: AppearanceMode) => {
    const root = document.documentElement;

    if (mode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  };

  const handleThemeChange = (themeId: ColorTheme) => {
    setCurrentTheme(themeId);
    applyTheme(themeId);
    localStorage.setItem('color-theme', themeId);
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
        isOpen ? 'translate-x-0' : '-translate-x-[280px]',
        className
      )}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Main Panel */}
      <div className="flex items-center">
        {/* Content */}
        <div className="w-[280px] bg-white dark:bg-slate-800 border-r border-y border-slate-200 dark:border-slate-700 shadow-2xl backdrop-blur-lg bg-white/95 dark:bg-slate-800/95 rounded-r-2xl p-5">
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
                <button
                  key={theme.id}
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
                    <div
                      className="w-6 h-6 rounded border border-slate-300 dark:border-slate-600"
                      style={{ backgroundColor: theme.primary }}
                      title="Primary Color"
                    />
                    <div
                      className="w-6 h-6 rounded border border-slate-300 dark:border-slate-600"
                      style={{ backgroundColor: theme.cta }}
                      title="CTA Color"
                    />
                  </div>
                </button>
              ))}
            </div>
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
