'use client';

import React, { FC, useState } from 'react';
import { Share2, Copy, Check } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { SharePopupProps } from './types';
import { cn } from '@/lib/utils';

export const SharePopup: FC<SharePopupProps> = ({ title, description, url }) => {
  const [copied, setCopied] = useState(false);

  const shareText = `${title}\n\n${description}`;
  const encodedText = encodeURIComponent(shareText);
  const encodedUrl = encodeURIComponent(url);

  const shareLinks = [
    {
      name: 'WhatsApp',
      icon: LucideIcons.MessageCircle,
      url: `https://wa.me/?text=${encodedText}%0A%0A${encodedUrl}`,
      color: 'hover:bg-green-500/10 hover:text-green-600 dark:hover:text-green-400',
    },
    {
      name: 'X',
      icon: LucideIcons.X,
      url: `https://x.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodedUrl}`,
      color: 'hover:bg-gray-900/10 hover:text-gray-900 dark:hover:text-gray-100',
    },
    {
      name: 'LinkedIn',
      icon: LucideIcons.Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: 'hover:bg-blue-700/10 hover:text-blue-700 dark:hover:text-blue-300',
    },
    {
      name: 'Facebook',
      icon: LucideIcons.Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: 'hover:bg-blue-600/10 hover:text-blue-600 dark:hover:text-blue-400',
    },
    {
      name: 'Email',
      icon: LucideIcons.Mail,
      url: `mailto:?subject=${encodeURIComponent(title)}&body=${encodedText}%0A%0A${encodedUrl}`,
      color: 'hover:bg-gray-500/10 hover:text-gray-600 dark:hover:text-gray-400',
    },
  ];

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy link:', error);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon">
          <Share2 className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-3" align="end">
        <div className="space-y-2">
          <h4 className="font-semibold text-sm mb-2">Share this service</h4>

          {/* Social Share Buttons + Copy Link */}
          <div className="flex items-center gap-1">
            {shareLinks.map((platform) => {
              const Icon = platform.icon;
              return (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={platform.name}
                  className={cn(
                    'flex items-center justify-center p-2 rounded-md border transition-all',
                    platform.color
                  )}
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}

            <LucideIcons.SeparatorVertical className="h-4 w-4 px-1" />
            {/* Copy Link Button */}
            <button
              onClick={handleCopyLink}
              title="Copy link"
              className={cn(
                'flex items-center justify-center p-2 rounded-md border transition-all',
                copied
                  ? 'bg-green-500/10 text-green-600 border-green-500/20'
                  : 'hover:bg-gray-500/10 hover:text-gray-600 dark:hover:text-gray-400'
              )}
            >
              {copied ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
