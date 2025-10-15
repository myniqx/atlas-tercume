'use client';

import React, { FC } from 'react';
import Link from 'next/link';
import { ChevronRight, Mail, Calendar } from 'lucide-react';
import { LegalPageProps } from './types';
import { contactData } from '@/data/contact';
import { cn } from '@/lib/utils';

export const LegalPage: FC<LegalPageProps> = ({
  title,
  description,
  lastUpdated,
  sections,
}) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              Ana Sayfa
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{title}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-primary">
              {title}
            </h1>
            <p className="text-lg text-muted-foreground mb-4">{description}</p>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 mr-2" />
              <span>Son Güncellenme: {lastUpdated}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Table of Contents - Desktop Sidebar */}
            <aside className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24">
                <h2 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted-foreground">
                  İçindekiler
                </h2>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors text-left w-full"
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <main className="lg:col-span-3">
              {/* Table of Contents - Mobile */}
              <div className="lg:hidden mb-8 p-6 rounded-lg border bg-muted/30">
                <h2 className="font-semibold mb-4 text-sm uppercase tracking-wide">
                  İçindekiler
                </h2>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors text-left w-full"
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Sections */}
              <article className="prose prose-slate dark:prose-invert max-w-none">
                {sections.map((section, index) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className={cn('scroll-mt-24', index !== 0 && 'mt-12')}
                  >
                    <h2 className="text-2xl font-bold mb-4 text-foreground">
                      {section.title}
                    </h2>
                    <div className="text-muted-foreground leading-relaxed">
                      {section.content}
                    </div>
                  </section>
                ))}
              </article>

              {/* Contact Section */}
              <div className="mt-12 p-6 rounded-lg border bg-muted/30">
                <h3 className="font-semibold mb-2 flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-primary" />
                  Sorularınız mı var?
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Bu sayfa hakkında sorularınız için bizimle iletişime geçebilirsiniz.
                </p>
                <a
                  href={`mailto:${contactData.email}`}
                  className="text-sm text-primary hover:underline font-medium"
                >
                  {contactData.email}
                </a>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};
