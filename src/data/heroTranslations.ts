export const heroTranslations: Record<string, string[]> = {
  // Navigation items (matching href values from navigation.ts)
  // 10 languages: 8 Latin (TR, EN, ES, DE, FR, IT, PT, NL), 2 Non-Latin (AR, JA)
  '/': [
    'Ana Sayfa',      // Turkish
    'Homepage',       // English
    'Página Principal', // Spanish
    'Startseite',     // German
    'Page d\'accueil', // French
    'Pagina Principale', // Italian
    'Página Inicial', // Portuguese
    'Startpagina',    // Dutch
    'الصفحة الرئيسية', // Arabic
    'ホームページ',    // Japanese
  ],
  '/hizmetlerimiz': [
    'Hizmetlerimiz',  // Turkish
    'Our Services',   // English
    'Nuestros Servicios', // Spanish
    'Unsere Dienstleistungen', // German
    'Nos Services',   // French
    'I Nostri Servizi', // Italian
    'Nossos Serviços', // Portuguese
    'Onze Diensten',  // Dutch
    'خدماتنا',        // Arabic
    'サービス',        // Japanese
  ],
  '/hakkimizda': [
    'Hakkımızda',     // Turkish
    'About Us',       // English
    'Sobre Nosotros', // Spanish
    'Über Uns',       // German
    'À Propos',       // French
    'Chi Siamo',      // Italian
    'Sobre Nós',      // Portuguese
    'Over Ons',       // Dutch
    'من نحن',         // Arabic
    '私たちについて',   // Japanese
  ],
  '/referanslar': [
    'Referanslarımız', // Turkish
    'Our References', // English
    'Nuestras Referencias', // Spanish
    'Unsere Referenzen', // German
    'Nos Références', // French
    'Le Nostre Referenze', // Italian
    'Nossas Referências', // Portuguese
    'Onze Referenties', // Dutch
    'مراجعنا',        // Arabic
    '参考実績',        // Japanese
  ],
  '/iletisim': [
    'İletişim',       // Turkish
    'Contact Us',     // English
    'Contáctenos',    // Spanish
    'Kontakt',        // German
    'Contactez-Nous', // French
    'Contattaci',     // Italian
    'Contacte-Nos',   // Portuguese
    'Neem Contact Op', // Dutch
    'اتصل بنا',       // Arabic
    'お問い合わせ',    // Japanese
  ],

  // General translation-related words (default/fallback)
  // 20 different words × 10 languages = 200 entries
  general: [
    // 1. Translation
    'Tercüme', 'Translation', 'Traducción', 'Übersetzung', 'Traduction', 'Traduzione', 'Tradução', 'Vertaling', 'ترجمة', '翻訳',
    // 2. Language
    'Dil', 'Language', 'Idioma', 'Sprache', 'Langue', 'Lingua', 'Idioma', 'Taal', 'لغة', '言語',
    // 3. Professional
    'Profesyonel', 'Professional', 'Profesional', 'Professionell', 'Professionnel', 'Professionale', 'Profissional', 'Professioneel', 'محترف', 'プロフェッショナル',
    // 4. Quality
    'Kalite', 'Quality', 'Calidad', 'Qualität', 'Qualité', 'Qualità', 'Qualidade', 'Kwaliteit', 'جودة', '品質',
    // 5. Fast
    'Hızlı', 'Fast', 'Rápido', 'Schnell', 'Rapide', 'Veloce', 'Rápido', 'Snel', 'سريع', '速い',
    // 6. Reliable
    'Güvenilir', 'Reliable', 'Confiable', 'Zuverlässig', 'Fiable', 'Affidabile', 'Confiável', 'Betrouwbaar', 'موثوق', '信頼できる',
    // 7. Expert
    'Uzman', 'Expert', 'Experto', 'Experte', 'Expert', 'Esperto', 'Especialista', 'Expert', 'خبير', '専門家',
    // 8. Global
    'Küresel', 'Global', 'Global', 'Global', 'Mondial', 'Globale', 'Global', 'Wereldwijd', 'عالمي', 'グローバル',
    // 9. Communication
    'İletişim', 'Communication', 'Comunicación', 'Kommunikation', 'Communication', 'Comunicazione', 'Comunicação', 'Communicatie', 'تواصل', 'コミュニケーション',
    // 10. Document
    'Belge', 'Document', 'Documento', 'Dokument', 'Document', 'Documento', 'Documento', 'Document', 'وثيقة', '文書',
    // 11. Certified
    'Onaylı', 'Certified', 'Certificado', 'Zertifiziert', 'Certifié', 'Certificato', 'Certificado', 'Gecertificeerd', 'معتمد', '認定',
    // 12. Accurate
    'Doğru', 'Accurate', 'Preciso', 'Genau', 'Précis', 'Accurato', 'Preciso', 'Nauwkeurig', 'دقيق', '正確',
    // 13. Native
    'Anadil', 'Native', 'Nativo', 'Muttersprachler', 'Natif', 'Madrelingua', 'Nativo', 'Moedertaal', 'أصلي', 'ネイティブ',
    // 14. Culture
    'Kültür', 'Culture', 'Cultura', 'Kultur', 'Culture', 'Cultura', 'Cultura', 'Cultuur', 'ثقافة', '文化',
    // 15. Business
    'İş', 'Business', 'Negocios', 'Geschäft', 'Affaires', 'Affari', 'Negócios', 'Bedrijf', 'عمل', 'ビジネス',
    // 16. Legal
    'Hukuki', 'Legal', 'Legal', 'Rechtlich', 'Juridique', 'Legale', 'Jurídico', 'Juridisch', 'قانوني', '法的',
    // 17. Medical
    'Tıbbi', 'Medical', 'Médico', 'Medizinisch', 'Médical', 'Medico', 'Médico', 'Medisch', 'طبي', '医療',
    // 18. Technical
    'Teknik', 'Technical', 'Técnico', 'Technisch', 'Technique', 'Tecnico', 'Técnico', 'Technisch', 'تقني', '技術的',
    // 19. Localization
    'Yerelleştirme', 'Localization', 'Localización', 'Lokalisierung', 'Localisation', 'Localizzazione', 'Localização', 'Lokalisatie', 'توطين', 'ローカライゼーション',
    // 20. Interpretation
    'Tercümanlık', 'Interpretation', 'Interpretación', 'Dolmetschen', 'Interprétation', 'Interpretazione', 'Interpretação', 'Tolken', 'ترجمة فورية', '通訳',
  ],
};
