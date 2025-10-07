'use client';

import React, { FC } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WhatsAppButtonProps } from './types';
import { contactData } from '@/data/contact';
import { cn } from '@/lib/utils';

export const WhatsAppButton: FC<WhatsAppButtonProps> = ({
  className,
  phone = contactData.whatsapp,
  message = 'Merhaba, tercüme hizmetleriniz hakkında bilgi almak istiyorum.',
  variant = 'fixed',
}) => {
  const handleClick = () => {
    const formattedPhone = phone.replace(/\D/g, '');
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  if (variant === 'fixed') {
    return (
      <Button
        onClick={handleClick}
        size="lg"
        className={cn(
          'fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-glow',
          'bg-green-500 hover:bg-green-600 transition-all duration-300',
          'hover:scale-110',
          className
        )}
        aria-label="WhatsApp ile iletişime geç"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <Button
      onClick={handleClick}
      size="lg"
      className={cn(
        'bg-green-500 hover:bg-green-600 transition-colors',
        className
      )}
    >
      <MessageCircle className="h-5 w-5 mr-2" />
      WhatsApp ile İletişime Geç
    </Button>
  );
};
