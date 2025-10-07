import React from 'react';
import { Service } from '@/types/global';

export interface ServiceCardProps extends Service {
  className?: string;
  variant?: 'compact' | 'detailed';
}
