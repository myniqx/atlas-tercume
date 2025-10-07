'use client';

import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, User } from 'lucide-react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { TestimonialCardProps } from './types';
import { cn } from '@/lib/utils';

export const TestimonialCard: FC<TestimonialCardProps> = ({
  className,
  name,
  role,
  company,
  content,
  rating,
  image,
  serviceUsed,
  date,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className={cn('h-full border-2 hover:border-primary/50 hover:shadow-premium transition-all duration-300', className)}>
        <CardHeader>
          {/* Rating Stars */}
          <div className="flex items-center space-x-1 mb-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className={cn(
                  'h-5 w-5',
                  index < rating ? 'fill-yellow-500 text-yellow-500' : 'text-gray-300'
                )}
              />
            ))}
          </div>

          {/* Quote Icon */}
          <div className="relative">
            <Quote className="h-10 w-10 text-primary/20 absolute -top-2 -left-2" />
            <p className="text-muted-foreground relative z-10 pl-6">
              "{content}"
            </p>
          </div>
        </CardHeader>

        <CardContent>
          {/* Service Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            {serviceUsed}
          </div>
        </CardContent>

        <CardFooter className="border-t pt-4">
          <div className="flex items-center space-x-3 w-full">
            {/* Profile Image */}
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden flex-shrink-0">
              {image ? (
                <img src={image} alt={name} className="w-full h-full object-cover" />
              ) : (
                <User className="h-6 w-6 text-muted-foreground" />
              )}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <p className="font-semibold truncate">{name}</p>
              <p className="text-sm text-muted-foreground truncate">
                {role} • {company}
              </p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
