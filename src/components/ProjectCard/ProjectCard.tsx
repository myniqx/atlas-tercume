'use client';

import React, { FC } from 'react';
import { Building2, FileText, Languages, Clock, TrendingUp } from 'lucide-react';
import { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { BaseCard } from '@/components/BaseCard';
import { ProjectCardProps } from './types';

export const ProjectCard: FC<ProjectCardProps> = ({
  className,
  title,
  client,
  industry,
  serviceType,
  description,
  stats,
  logo,
}) => {
  return (
    <BaseCard hoverEffect="lift" animated className={className}>
        <CardHeader>
          <div className="flex items-start justify-between mb-4">
            {/* Logo placeholder */}
            <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
              {logo ? (
                <img src={logo} alt={client} className="w-12 h-12 object-contain" />
              ) : (
                <Building2 className="h-8 w-8 text-primary" />
              )}
            </div>

            {/* Industry badge */}
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-muted text-muted-foreground">
              {industry}
            </span>
          </div>

          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription className="text-base">
            <span className="font-semibold text-foreground">{client}</span> • {serviceType}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            {description}
          </p>

          {/* Stats */}
          {stats && (
            <div className="grid grid-cols-2 gap-3">
              {stats.wordCount && (
                <div className="flex items-center space-x-2 text-sm">
                  <FileText className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">
                    {stats.wordCount.toLocaleString()} kelime
                  </span>
                </div>
              )}
              {stats.pagesTranslated && (
                <div className="flex items-center space-x-2 text-sm">
                  <FileText className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">
                    {stats.pagesTranslated} sayfa
                  </span>
                </div>
              )}
              {stats.languages && (
                <div className="flex items-center space-x-2 text-sm">
                  <Languages className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">
                    {stats.languages} dil
                  </span>
                </div>
              )}
              {stats.completionTime && (
                <div className="flex items-center space-x-2 text-sm">
                  <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">
                    {stats.completionTime}
                  </span>
                </div>
              )}
            </div>
          )}
        </CardContent>

        <CardFooter className="border-t pt-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <TrendingUp className="h-4 w-4 text-green-500" />
            <span>Başarıyla tamamlandı</span>
          </div>
        </CardFooter>
    </BaseCard>
  );
};
