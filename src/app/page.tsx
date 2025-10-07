import React from 'react';
import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { ServiceCard } from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { mainServices } from '@/data/services';
import { ArrowRight, Shield, Clock, Award, Users } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Profesyonel Tercüme Hizmetleri ile Global İletişim"
        subtitle="15 Yıllık Deneyim | 1000+ Mutlu Müşteri"
        description="Yeminli tercüme, teknik tercüme, medikal tercüme ve daha fazlası. Uzman kadromuz ile hızlı, güvenilir ve kaliteli çeviri hizmeti."
        primaryCta={{
          label: 'Hizmetlerimizi Keşfedin',
          href: '/hizmetlerimiz',
        }}
        secondaryCta={{
          label: 'Teklif Alın',
          href: '/iletisim',
        }}
      />

      {/* Featured Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Öne Çıkan <span className="text-gradient-primary">Hizmetlerimiz</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              İhtiyacınıza özel profesyonel tercüme çözümleri sunuyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.values(mainServices).map((service) => (
              <ServiceCard key={service.slug} {...service} variant="compact" />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/hizmetlerimiz">
                Tüm Hizmetleri Görüntüle
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Neden <span className="text-gradient-primary">Atlas Lisan</span>?
            </h2>
            <p className="text-lg text-muted-foreground">
              Müşterilerimizin tercihi olmamızın nedenleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-xl gradient-primary flex items-center justify-center shadow-glow">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Güvenilir</h3>
              <p className="text-muted-foreground">
                15 yıllık deneyim ve binlerce başarılı proje
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-xl gradient-primary flex items-center justify-center shadow-glow">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Hızlı Teslimat</h3>
              <p className="text-muted-foreground">
                Acil tercüme seçenekleri ile 24 saat içinde teslimat
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-xl gradient-primary flex items-center justify-center shadow-glow">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Kalite Garantisi</h3>
              <p className="text-muted-foreground">
                Alanında uzman tercümanlar ve editör kontrolü
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-xl gradient-primary flex items-center justify-center shadow-glow">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Profesyonel Ekip</h3>
              <p className="text-muted-foreground">
                Yeminli tercümanlar ve sektör uzmanları
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">
              Tercüme İhtiyacınız İçin
              <br />
              <span className="text-gradient-primary">Hemen Teklif Alın</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Projeniz hakkında bize bilgi verin, size özel fiyat teklifi hazırlayalım.
              Ücretsiz danışmanlık için iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="gradient-primary text-white shadow-glow">
                <Link href="/iletisim">
                  Ücretsiz Teklif Al
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/hakkimizda">Hakkımızda</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
