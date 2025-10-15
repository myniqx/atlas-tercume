import { z } from 'zod';

export interface ContactFormProps {
  className?: string;
}

export const contactFormSchema = z.object({
  name: z.string().min(2, 'İsim en az 2 karakter olmalıdır'),
  email: z.string().email('Geçerli bir email adresi giriniz'),
  phone: z.string().min(10, 'Geçerli bir telefon numarası giriniz').or(z.literal('')),
  subject: z.string().min(3, 'Konu en az 3 karakter olmalıdır'),
  message: z.string().min(10, 'Mesaj en az 10 karakter olmalıdır'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
