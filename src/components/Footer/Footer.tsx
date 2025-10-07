import React, { FC } from 'react';
import Link from 'next/link';
import { Globe, Mail, Phone, MapPin, Linkedin, Instagram, Twitter, Facebook } from 'lucide-react';
import { FooterProps } from './types';
import { footerNavigation } from '@/data/navigation';
import { contactData } from '@/data/contact';
import { cn } from '@/lib/utils';

export const Footer: FC<FooterProps> = ({ className }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cn('bg-muted/50 border-t', className)}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 group mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg gradient-primary group-hover:shadow-glow transition-all duration-300">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient-primary">
                Atlas Lisan
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4 max-w-sm">
              Profesyonel tercüme hizmetleri ile global iletişiminizi güçlendiriyoruz.
              15 yıllık deneyim, uzman kadro, kalite garantisi.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href={`mailto:${contactData.email}`} className="hover:text-primary transition-colors">
                  {contactData.email}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a href={`tel:${contactData.phone}`} className="hover:text-primary transition-colors">
                  {contactData.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>{contactData.address}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3 mt-4">
              {contactData.social.linkedin && (
                <a
                  href={contactData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              )}
              {contactData.social.instagram && (
                <a
                  href={contactData.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              )}
              {contactData.social.twitter && (
                <a
                  href={contactData.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
              )}
              {contactData.social.facebook && (
                <a
                  href={contactData.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold mb-4">{footerNavigation.services.title}</h3>
            <ul className="space-y-2">
              {footerNavigation.services.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">{footerNavigation.company.title}</h3>
            <ul className="space-y-2">
              {footerNavigation.company.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4">{footerNavigation.legal.title}</h3>
            <ul className="space-y-2">
              {footerNavigation.legal.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {currentYear} Atlas Lisan. Tüm hakları saklıdır.</p>
          <p className="mt-2 md:mt-0">
            Profesyonel tercüme hizmetleri ile güvenilir çözüm ortağınız.
          </p>
        </div>
      </div>
    </footer>
  );
};
