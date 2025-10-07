'use client';

import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, User } from 'lucide-react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TeamMemberProps } from './types';
import { cn } from '@/lib/utils';

export const TeamMember: FC<TeamMemberProps> = ({
  className,
  name,
  role,
  expertise,
  bio,
  image,
  email,
  linkedin,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <Card className={cn('overflow-hidden border-2 hover:border-primary/50 hover:shadow-premium transition-all duration-300', className)}>
        <CardHeader className="text-center pb-0">
          {/* Profile Image Placeholder */}
          <div className="relative w-32 h-32 mx-auto mb-4">
            <div className="absolute inset-0 gradient-primary rounded-full blur-xl opacity-50" />
            <div className="relative w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border-4 border-background flex items-center justify-center overflow-hidden">
              {image ? (
                <img src={image} alt={name} className="w-full h-full object-cover" />
              ) : (
                <User className="h-16 w-16 text-muted-foreground" />
              )}
            </div>
          </div>

          {/* Name and Role */}
          <h3 className="text-2xl font-bold mb-1">{name}</h3>
          <p className="text-sm text-gradient-primary font-semibold">{role}</p>
        </CardHeader>

        <CardContent className="pt-6">
          {/* Bio */}
          <p className="text-sm text-muted-foreground mb-4 text-center">
            {bio}
          </p>

          {/* Expertise */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Uzmanlık Alanları
            </h4>
            <div className="flex flex-wrap gap-2">
              {expertise.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex justify-center gap-2 pt-4 border-t">
          {email && (
            <Button
              variant="outline"
              size="icon"
              asChild
              className="hover:bg-primary/5"
            >
              <a href={`mailto:${email}`} aria-label={`Email ${name}`}>
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          )}
          {linkedin && (
            <Button
              variant="outline"
              size="icon"
              asChild
              className="hover:bg-primary/5"
            >
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} LinkedIn profili`}
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};
