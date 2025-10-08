import React from 'react';
import type { Metadata } from 'next';
import { TeamMember } from '@/components/TeamMember';
import { teamData } from '@/data/team';
import { pageMetadata } from '@/data/metadata';
import { Target, Award, Users, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: pageMetadata.about.title,
  description: pageMetadata.about.description,
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient-primary">Atlas Lisan</span> Hakkında
            </h1>
            <p className="text-lg text-muted-foreground">
              15 yıldır profesyonel tercüme hizmetleri sunuyoruz
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Hikayemiz
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Atlas Lisan, 2010 yılında İstanbul&apos;da kurulmuş, profesyonel tercüme hizmetleri alanında
                uzmanlaşmış bir tercüme bürosudur. Kuruluşumuzdan bu yana, binlerce müşteriye hizmet
                vererek güvenilir ve kaliteli çeviri çözümleri sunmaktayız.
              </p>
              <p>
                Yeminli tercümanlık, teknik tercüme, medikal tercüme ve daha birçok alanda uzman
                kadromuzla, müşterilerimizin global iletişim ihtiyaçlarını karşılıyoruz. Her proje bizim
                için özeldir ve en yüksek kalite standartlarında hizmet sunmayı ilke edindik.
              </p>
              <p>
                15 yıllık deneyimimiz, profesyonel yaklaşımımız ve müşteri memnuniyeti odaklı çalışma
                prensiplerimizle sektörde öncü bir konumdayız.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Değerlerimiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Value 1 */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-xl gradient-primary flex items-center justify-center shadow-glow">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Misyonumuz</h3>
              <p className="text-muted-foreground text-sm">
                Dil bariyerlerini ortadan kaldırarak, müşterilerimizin global başarısına katkı sağlamak
              </p>
            </div>

            {/* Value 2 */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-xl gradient-primary flex items-center justify-center shadow-glow">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Kalite</h3>
              <p className="text-muted-foreground text-sm">
                ISO 17100 standartlarında, uzman tercümanlar ve editör kontrolü ile kusursuz çeviri
              </p>
            </div>

            {/* Value 3 */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-xl gradient-primary flex items-center justify-center shadow-glow">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Müşteri Odaklılık</h3>
              <p className="text-muted-foreground text-sm">
                Her projede müşteri memnuniyetini ön planda tutarak, özel ihtiyaçlara özel çözümler
              </p>
            </div>

            {/* Value 4 */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-xl gradient-primary flex items-center justify-center shadow-glow">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Sürekli Gelişim</h3>
              <p className="text-muted-foreground text-sm">
                Sektördeki yenilikleri takip ederek, teknoloji ve yöntemlerimizi sürekli geliştiriyoruz
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="ekip" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ekibimiz
            </h2>
            <p className="text-lg text-muted-foreground">
              Alanında uzman, deneyimli tercümanlarımızla tanışın
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamData.map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Yıl Deneyim</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient-primary mb-2">1000+</div>
              <div className="text-sm text-muted-foreground">Mutlu Müşteri</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient-primary mb-2">13</div>
              <div className="text-sm text-muted-foreground">Farklı Hizmet</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Dil Çifti</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
