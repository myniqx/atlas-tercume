import React from 'react';
import type { Metadata } from 'next';
import { TestimonialCard } from '@/components/TestimonialCard';
import { ProjectCard } from '@/components/ProjectCard';
import { testimonials, projectReferences, industries, referenceStats } from '@/data/references';
import { pageMetadata } from '@/data/metadata';
import * as LucideIcons from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: pageMetadata.references.title,
  description: pageMetadata.references.description,
};

export default function ReferencesPage() {
  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient-primary">Referanslarımız</span> & Müşteri Yorumları
            </h1>
            <p className="text-lg text-muted-foreground">
              Yüzlerce mutlu müşterimizin hikayelerini keşfedin. Başarılı projelerimiz ve aldığımız
              geri bildirimler, kalitemizin en büyük göstergesidir.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">
                {referenceStats.totalProjects}+
              </div>
              <div className="text-sm text-muted-foreground">Tamamlanan Proje</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">
                {referenceStats.happyClients}+
              </div>
              <div className="text-sm text-muted-foreground">Mutlu Müşteri</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">
                {referenceStats.languages}+
              </div>
              <div className="text-sm text-muted-foreground">Dil Çifti</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">
                {referenceStats.yearsOfExperience}
              </div>
              <div className="text-sm text-muted-foreground">Yıllık Deneyim</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">
                %{referenceStats.satisfactionRate}
              </div>
              <div className="text-sm text-muted-foreground">Memnuniyet Oranı</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">
                %{referenceStats.repeatCustomerRate}
              </div>
              <div className="text-sm text-muted-foreground">Tekrar Eden Müşteri</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Müşteri <span className="text-gradient-primary">Yorumları</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Müşterilerimizin deneyimlerinden bazıları
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Çalıştığımız <span className="text-gradient-primary">Sektörler</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Farklı sektörlerden yüzlerce müşteriye hizmet veriyoruz
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {industries.map((industry, index) => {
              const IconComponent = (LucideIcons as any)[industry.icon] || LucideIcons.Building2;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-6 rounded-lg border-2 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-3">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-center mb-1">{industry.name}</h3>
                  <p className="text-sm text-muted-foreground">{industry.count}+ proje</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project References Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tamamlanan <span className="text-gradient-primary">Projeler</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Başarıyla tamamladığımız projelerden örnekler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectReferences.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Siz de Başarı Hikayemizin
              <br />
              <span className="text-gradient-primary">Bir Parçası Olun</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Projeniz için hemen teklif alın ve profesyonel tercüme hizmetimizi deneyimleyin
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="gradient-primary text-white shadow-glow">
                <Link href="/iletisim">
                  Ücretsiz Teklif Al
                  <LucideIcons.ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/hizmetlerimiz">Hizmetlerimizi Görüntüle</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-lg border-2">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center">
                  <LucideIcons.Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">ISO 17100 Sertifikalı</h3>
                <p className="text-sm text-muted-foreground">
                  Uluslararası kalite standartlarında hizmet
                </p>
              </div>

              <div className="text-center p-6 rounded-lg border-2">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center">
                  <LucideIcons.Lock className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Gizlilik Garantisi</h3>
                <p className="text-sm text-muted-foreground">
                  NDA anlaşmaları ve veri güvenliği
                </p>
              </div>

              <div className="text-center p-6 rounded-lg border-2">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center">
                  <LucideIcons.Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Kalite Garantisi</h3>
                <p className="text-sm text-muted-foreground">
                  Editör kontrolü ve revizyon hakkı
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
