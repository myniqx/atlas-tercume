'use client';

import React, { FC, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HeaderProps } from './types';
import { mainNavigation } from '@/data/navigation';
import { cn } from '@/lib/utils';

export const Header: FC<HeaderProps> = ({ className }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActivePath = (href: string) => {
    return pathname === href;
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-lg',
        className
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg gradient-primary group-hover:shadow-glow transition-all duration-300">
              <Globe className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gradient-primary">
              Atlas Lisan
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {mainNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-colors relative',
                  isActivePath(item.href)
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                )}
              >
                {item.label}
                {item.badge && (
                  <span className="ml-2 px-2 py-0.5 text-xs font-semibold rounded-full gradient-gold text-white">
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t animate-fade-in">
            <div className="flex flex-col space-y-2">
              {mainNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                    isActivePath(item.href)
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="px-2 py-0.5 text-xs font-semibold rounded-full gradient-gold text-white">
                        {item.badge}
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
