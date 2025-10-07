'use client';

import React, { FC } from 'react';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';
import { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BaseCard } from '@/components/BaseCard';
import { ServiceCardProps } from './types';
import { cn } from '@/lib/utils';

export const ServiceCard: FC<ServiceCardProps> = ({
  className,
  title,
  slug,
  description,
  icon,
  badge,
  features,
  turnaroundTime,
  price,
  variant = 'compact',
}) => {
  // Dynamically get Lucide icon
  const IconComponent = (LucideIcons as any)[icon] || LucideIcons.HelpCircle;

  if (variant === 'compact') {
    return (
      <BaseCard hoverEffect="scale" animated className={cn('group', className)}>
        <CardHeader>
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
              <IconComponent className="h-6 w-6 text-white" />
            </div>
            {badge && (
              <span className="px-2 py-1 text-xs font-semibold rounded-full gradient-gold text-white">
                {badge}
              </span>
            )}
          </div>
          <CardTitle className="text-xl mb-2 group-hover:text-gradient-primary transition-all">
            {title}
          </CardTitle>
          <CardDescription className="line-clamp-2">
            {description}
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Link href={`/hizmetlerimiz#${slug}`} className="w-full">
            <Button variant="ghost" className="w-full group-hover:bg-primary/5">
              Detayları Gör
              <LucideIcons.ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </CardFooter>
      </BaseCard>
    );
  }

  // Detailed variant
  return (
    <div id={slug}>
      <BaseCard hoverEffect="none" animated className={className}>
        <CardHeader>
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center shadow-glow">
                <IconComponent className="h-8 w-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-2xl mb-2">{title}</CardTitle>
                {turnaroundTime && (
                  <div className="flex items-center text-sm text-muted-foreground">
                    <LucideIcons.Clock className="h-4 w-4 mr-1" />
                    {turnaroundTime}
                  </div>
                )}
              </div>
            </div>
            {badge && (
              <span className="px-3 py-1 text-sm font-semibold rounded-full gradient-gold text-white">
                {badge}
              </span>
            )}
          </div>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          {features.length > 0 && (
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                Özellikler
              </h4>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <LucideIcons.CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {price && (
            <div className="mt-6 pt-6 border-t">
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-bold text-gradient-primary">
                  {price.min} ₺
                </span>
                <span className="text-sm text-muted-foreground">/ {price.unit}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Başlangıç fiyatıdır. Proje bazlı değişkenlik gösterebilir.
              </p>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex gap-3">
          <Link href="/iletisim" className="flex-1">
            <Button className="w-full gradient-primary text-white">
              Teklif Al
            </Button>
          </Link>
          <Button variant="outline" size="icon">
            <LucideIcons.Share2 className="h-4 w-4" />
          </Button>
        </CardFooter>
      </BaseCard>
    </div>
  );
};
