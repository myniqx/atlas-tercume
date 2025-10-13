'use client';

import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSearchParams } from 'next/navigation';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { ContactFormProps, contactFormSchema, ContactFormData } from './types';
import { cn } from '@/lib/utils';

export const ContactForm: FC<ContactFormProps> = ({ className }) => {
  const searchParams = useSearchParams();
  const subject = searchParams.get('subject');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      subject: subject || '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Form gönderimi başarısız oldu');
      }

      setSubmitStatus('success');
      reset({
        subject: subject || '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Bir hata oluştu');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className={cn('border-2', className)}>
      <CardHeader>
        <CardTitle className="text-2xl">İletişim Formu</CardTitle>
        <CardDescription>
          Formu doldurun, en kısa sürede size geri dönelim.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name">
              İsim Soyisim <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              placeholder="Adınız ve soyadınız"
              {...register('name')}
              className={errors.name ? 'border-destructive' : ''}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">
              Email <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="ornek@email.com"
              {...register('email')}
              className={errors.email ? 'border-destructive' : ''}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone">Telefon (Opsiyonel)</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+90 555 123 4567"
              {...register('phone')}
              className={errors.phone ? 'border-destructive' : ''}
            />
            {errors.phone && (
              <p className="text-sm text-destructive">{errors.phone.message}</p>
            )}
          </div>

          {/* Subject */}
          <div className="space-y-2">
            <Label htmlFor="subject">
              Konu <span className="text-destructive">*</span>
            </Label>
            <Input
              id="subject"
              placeholder="Yeminli tercüme talebi"
              {...register('subject')}
              className={errors.subject ? 'border-destructive' : ''}
            />
            {errors.subject && (
              <p className="text-sm text-destructive">{errors.subject.message}</p>
            )}
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message">
              Mesajınız <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="message"
              placeholder="Detaylı bilgi veriniz..."
              rows={5}
              {...register('message')}
              className={errors.message ? 'border-destructive' : ''}
            />
            {errors.message && (
              <p className="text-sm text-destructive">{errors.message.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full gradient-primary text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Gönderiliyor...
              </>
            ) : (
              'Gönder'
            )}
          </Button>
        </form>
      </CardContent>

      {/* Status Messages */}
      {submitStatus !== 'idle' && (
        <CardFooter>
          {submitStatus === 'success' && (
            <div className="w-full flex items-center space-x-2 p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-green-700 dark:text-green-400">
              <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
              <p className="text-sm">
                Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
              </p>
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="w-full flex items-center space-x-2 p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive">
              <AlertCircle className="h-5 w-5 flex-shrink-0" />
              <p className="text-sm">
                {errorMessage || 'Bir hata oluştu. Lütfen tekrar deneyin.'}
              </p>
            </div>
          )}
        </CardFooter>
      )}
    </Card>
  );
};
