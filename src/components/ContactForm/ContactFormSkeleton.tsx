import React, { FC } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ContactFormSkeletonProps {
  className?: string;
}

export const ContactFormSkeleton: FC<ContactFormSkeletonProps> = ({ className }) => {
  return (
    <Card className={cn('border-2', className)}>
      <CardHeader>
        <CardTitle className="text-2xl">İletişim Formu</CardTitle>
        <CardDescription>
          Formu doldurun, en kısa sürede size geri dönelim.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Name Field Skeleton */}
          <div className="space-y-2">
            <div className="h-4 w-24 bg-muted rounded animate-pulse" />
            <div className="h-10 w-full bg-muted rounded animate-pulse" />
          </div>

          {/* Email Field Skeleton */}
          <div className="space-y-2">
            <div className="h-4 w-16 bg-muted rounded animate-pulse" />
            <div className="h-10 w-full bg-muted rounded animate-pulse" />
          </div>

          {/* Phone Field Skeleton */}
          <div className="space-y-2">
            <div className="h-4 w-32 bg-muted rounded animate-pulse" />
            <div className="h-10 w-full bg-muted rounded animate-pulse" />
          </div>

          {/* Subject Field Skeleton */}
          <div className="space-y-2">
            <div className="h-4 w-20 bg-muted rounded animate-pulse" />
            <div className="h-10 w-full bg-muted rounded animate-pulse" />
          </div>

          {/* Message Field Skeleton */}
          <div className="space-y-2">
            <div className="h-4 w-28 bg-muted rounded animate-pulse" />
            <div className="h-32 w-full bg-muted rounded animate-pulse" />
          </div>

          {/* Submit Button Skeleton */}
          <div className="h-10 w-full bg-gradient-to-r from-muted to-muted/50 rounded animate-pulse" />
        </div>
      </CardContent>
    </Card>
  );
};
