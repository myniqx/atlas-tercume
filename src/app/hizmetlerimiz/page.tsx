import React from 'react';
import type { Metadata } from 'next';
import { ServiceCard } from '@/components/ServiceCard';
import { allServices } from '@/data/services';
import { pageMetadata } from '@/data/metadata';

export const metadata: Metadata = {
  title: pageMetadata.services.title,
  description: pageMetadata.services.description,
};

export default function ServicesPage() {
  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tercüme <span className="text-gradient-primary">Hizmetlerimiz</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              13 farklı alanda profesyonel tercüme çözümleri. İhtiyacınıza en uygun hizmeti seçin.
            </p>
          </div>
        </div>
      </section>

      {/* Services by Category */}
      {Object.entries(allServices).map(([categoryKey, category]) => (
        <section key={categoryKey} className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{category.category}</h2>
              {category.description && (
                <p className="text-lg text-muted-foreground">{category.description}</p>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {Object.values(category.services).map((service) => (
                <ServiceCard key={service.slug} {...service} variant="detailed" />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">
              Aradığınız Hizmeti Bulamadınız mı?
            </h2>
            <p className="text-lg text-muted-foreground">
              Özel projeleriniz için bizimle iletişime geçin. Size özel çözümler sunalım.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/iletisim"
                className="inline-flex items-center justify-center rounded-lg px-6 py-3 gradient-primary text-white font-medium shadow-glow hover:shadow-premium transition-all"
              >
                İletişime Geçin
              </a>
              <a
                href={`https://wa.me/905551234567?text=${encodeURIComponent('Merhaba, özel bir tercüme projesi hakkında bilgi almak istiyorum.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium transition-colors"
              >
                WhatsApp ile Yazın
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
