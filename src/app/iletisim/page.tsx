import React from 'react';
import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { contactData } from '@/data/contact';
import { pageMetadata } from '@/data/metadata';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: pageMetadata.contact.title,
  description: pageMetadata.contact.description,
};

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient-primary">İletişime</span> Geçin
            </h1>
            <p className="text-lg text-muted-foreground">
              Tercüme ihtiyaçlarınız için bizimle iletişime geçin. Size en kısa sürede dönüş yapalım.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Info Cards */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold mb-6">İletişim Bilgileri</h2>

                {/* Email */}
                <div className="flex items-start space-x-4 p-4 rounded-lg border-2 hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href={`mailto:${contactData.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {contactData.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4 p-4 rounded-lg border-2 hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Telefon</h3>
                    <a
                      href={`tel:${contactData.phone}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {contactData.phone}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4 p-4 rounded-lg border-2 hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Adres</h3>
                    <p className="text-muted-foreground">{contactData.address}</p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start space-x-4 p-4 rounded-lg border-2 hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Çalışma Saatleri</h3>
                    <p className="text-muted-foreground">{contactData.workingHours}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Acil tercüme için 7/24 hizmet
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="p-6 rounded-lg bg-green-500/10 border-2 border-green-500/20">
                <h3 className="text-xl font-semibold mb-2">Hızlı İletişim</h3>
                <p className="text-muted-foreground mb-4">
                  Anında yanıt almak için WhatsApp üzerinden bize ulaşabilirsiniz
                </p>
                <WhatsAppButton
                  variant="inline"
                  className="w-full"
                />
              </div>

              {/* FAQ */}
              <div className="p-6 rounded-lg bg-muted/50 border-2">
                <h3 className="text-xl font-semibold mb-4">Sıkça Sorulan Sorular</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-foreground">Ne kadar sürede cevap alırım?</p>
                    <p className="text-muted-foreground">
                      Mesajlarınıza çalışma saatleri içinde 2 saat içinde yanıt veriyoruz.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Fiyat teklifi ücretsiz mi?</p>
                    <p className="text-muted-foreground">
                      Evet, tüm fiyat teklifleri ücretsizdir ve yükümlülük gerektirmez.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Acil işler için ne yapmalıyım?</p>
                    <p className="text-muted-foreground">
                      Acil işler için WhatsApp üzerinden ulaşmanız en hızlı yöntemdir.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Konumumuz</h2>
            <div className="aspect-video rounded-lg overflow-hidden border-2">
              {/* Placeholder for map - can be replaced with actual Google Maps embed */}
              <div className="w-full h-full bg-muted/50 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="h-12 w-12 mx-auto mb-4" />
                  <p className="font-semibold">{contactData.address}</p>
                  <p className="text-sm mt-2">Harita yakında eklenecek</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
