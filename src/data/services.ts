import { Service, ServiceCategory } from '@/types/global';

// Main services for homepage (4 featured services)
export const mainServices: Record<string, Service> = {
  yaziliTercume: {
    title: 'Yazılı Tercüme',
    slug: 'yazili-tercume',
    description: 'Her türlü belge ve doküman için profesyonel yazılı tercüme hizmetleri. Deneyimli tercümanlarımız ile yüksek kaliteli ve hızlı çeviri garantisi sunuyoruz.',
    icon: 'FileText',
    badge: 'Popüler',
    features: [
      'Tüm dil çiftleri için hizmet',
      'Hızlı teslimat seçenekleri',
      'Profesyonel editörleme',
      'Sınırsız revizyon',
    ],
    turnaroundTime: '2-3 iş günü',
    price: {
      min: 1.50,
      unit: 'kelime',
    },
  },
  yeminliTercume: {
    title: 'Yeminli Tercüme',
    slug: 'yeminli-tercume',
    description: 'Resmi kurumlarda geçerli, noter tasdikli yeminli tercüme hizmetleri. Tüm hukuki ve resmi belgeleriniz için güvenilir çözümler sunuyoruz.',
    icon: 'BadgeCheck',
    badge: 'Resmi',
    features: [
      'Resmi kurumlarca kabul edilir',
      'Noter onaylı teslimat',
      'Apostil hizmeti',
      'Aynı gün teslimat seçeneği',
    ],
    turnaroundTime: '1-2 iş günü',
    price: {
      min: 550,
      unit: 'sayfa',
    },
  },
  acilTercume: {
    title: 'Acil Tercüme',
    slug: 'acil-tercume',
    description: '24 saat içinde teslimat garantisi ile acil tercüme hizmetleri. Zamanın önemli olduğu projeleriniz için hızlı ve kaliteli çözüm.',
    icon: 'Clock',
    badge: '24 Saat',
    features: [
      '24 saat içinde teslimat',
      '7/24 destek',
      'Öncelikli işleme',
      'Kalite garantisi',
    ],
    turnaroundTime: '4-24 saat',
    price: {
      min: 1.99,
      unit: 'kelime',
    },
  },
  teknikTercume: {
    title: 'Teknik Tercüme',
    slug: 'teknik-tercume',
    description: 'Mühendislik, bilişim, üretim ve teknik dokümantasyon için uzman tercüme hizmetleri. Alanında uzman tercümanlarımız ile terminoloji garantisi.',
    icon: 'Cog',
    features: [
      'Alanında uzman tercümanlar',
      'Terminoloji yönetimi',
      'CAT tools kullanımı',
      'Teknik editör desteği',
    ],
    turnaroundTime: '3-5 iş günü',
    price: {
      min: 1.99,
      unit: 'kelime',
    },
  },
};

// All services organized by category
export const allServices: Record<string, ServiceCategory> = {
  resmiVeYasal: {
    category: 'Resmi & Yasal Tercüme',
    description: 'Hukuki geçerliliği olan resmi belge çevirileriniz için profesyonel hizmetler',
    services: {
      yeminliTercume: {
        title: 'Yeminli Tercüme',
        slug: 'yeminli-tercume',
        description: 'Resmi kurumlarda geçerli, noter tasdikli yeminli tercüme hizmetleri. Tüm hukuki ve resmi belgeleriniz için güvenilir çözümler sunuyoruz.',
        icon: 'BadgeCheck',
        badge: 'Resmi',
        features: [
          'Resmi kurumlarca kabul edilir',
          'Noter onaylı teslimat',
          'Apostil hizmeti mevcut',
          'Aynı gün teslimat seçeneği',
          'Diploma, nüfus cüzdanı, nikah cüzdanı vb.',
        ],
        turnaroundTime: '1-2 iş günü',
        price: {
          min: 600,
          unit: 'sayfa',
        },
      },
      noterOnayliTercume: {
        title: 'Noter Onaylı Tercüme',
        slug: 'noter-onayli-tercume',
        description: 'Noter tasdikli tercüme hizmetleri. Yurtdışı başvuruları, resmi işlemler ve yasal süreçler için noter onaylı belgeler hazırlıyoruz.',
        icon: 'Stamp',
        features: [
          'Noter tasdik hizmeti',
          'Apostil işlemleri',
          'Konsolosluk onayı',
          'Express işlem seçeneği',
        ],
        turnaroundTime: '1-2 iş günü',
        price: {
          min: 599,
          unit: 'sayfa',
        },
      },
      hukukiTercume: {
        title: 'Hukuki Tercüme',
        slug: 'hukuki-tercume',
        description: 'Sözleşmeler, mahkeme belgeleri, hukuki metinler için uzman hukuk tercümanları ile profesyonel çeviri hizmetleri.',
        icon: 'Scale',
        features: [
          'Hukuk alanında uzman tercümanlar',
          'Gizlilik anlaşması (NDA)',
          'Hukuki terminoloji garantisi',
          'Sözleşme, dava dosyası, ticari belgeler',
          'Hukuk danışmanı kontrolü',
        ],
        turnaroundTime: '3-5 iş günü',
        price: {
          min: 2.30,
          unit: 'kelime',
        },
      },
    },
  },

  kurumsal: {
    category: 'Kurumsal Tercüme',
    description: 'Şirketler ve kurumlar için özel sektör bazlı profesyonel tercüme hizmetleri',
    services: {
      teknikTercume: {
        title: 'Teknik Tercüme',
        slug: 'teknik-tercume',
        description: 'Mühendislik, bilişim, üretim ve teknik dokümantasyon için uzman tercüme hizmetleri. Alanında uzman tercümanlarımız ile terminoloji garantisi.',
        icon: 'Cog',
        features: [
          'Mühendislik ve teknik dokümantasyon',
          'Kullanım kılavuzları ve teknik şartnameler',
          'CAT tools ve terminoloji yönetimi',
          'ISO 17100 standartlarında çeviri',
          'Alanında 10+ yıl deneyimli tercümanlar',
        ],
        turnaroundTime: '3-5 iş günü',
        price: {
          min: 2.00,
          unit: 'kelime',
        },
      },
      medikalTercume: {
        title: 'Medikal Tercüme',
        slug: 'medikal-tercume',
        description: 'Tıbbi raporlar, klinik araştırmalar, ilaç prospektüsleri için medikal terminoloji uzmanı tercümanlar ile güvenilir çeviri.',
        icon: 'HeartPulse',
        features: [
          'Tıp doktoru ve eczacı tercümanlar',
          'Hasta raporları ve epikrizler',
          'Klinik çalışma dokümanları',
          'İlaç prospektüsleri',
          'HIPAA uyumlu gizlilik',
        ],
        turnaroundTime: '3-5 iş günü',
        price: {
          min: 2.49,
          unit: 'kelime',
        },
      },
      finansalTercume: {
        title: 'Finansal Tercüme',
        slug: 'finansal-tercume',
        description: 'Mali raporlar, denetim belgeleri, finansal analizler için finans ve ekonomi uzmanı tercümanlar ile profesyonel çeviri.',
        icon: 'TrendingUp',
        features: [
          'Finansal raporlama ve analiz',
          'Bütçe ve tahmin belgeleri',
          'Denetim ve uyum dokümanları',
          'Yatırım ve bankacılık belgeleri',
          'CPA kontrolü opsiyonu',
        ],
        turnaroundTime: '2-4 iş günü',
        price: {
          min: 2.45,
          unit: 'kelime',
        },
      },
      akademikTercume: {
        title: 'Akademik Tercüme',
        slug: 'akademik-tercume',
        description: 'Tezler, makaleler, akademik yayınlar için yüksek lisans ve doktora dereceli tercümanlar ile kaliteli çeviri hizmeti.',
        icon: 'GraduationCap',
        features: [
          'PhD ve yüksek lisans tercümanlar',
          'Bilimsel makale ve tez çevirisi',
          'Akademik yayın standartları',
          'APA, MLA, Chicago format uyumu',
          'Peer review desteği',
        ],
        turnaroundTime: '5-7 iş günü',
        price: {
          min: 1.91,
          unit: 'kelime',
        },
      },
    },
  },

  dijitalVemedya: {
    category: 'Dijital & Medya',
    description: 'Web, mobil ve dijital içerik için modern ve yaratıcı tercüme çözümleri',
    services: {
      webSitesiTercume: {
        title: 'Web Sitesi & Yazılım Çevirisi',
        slug: 'web-sitesi-tercume',
        description: 'Web sitesi, mobil uygulama, yazılım arayüzü lokalizasyonu. SEO uyumlu, kullanıcı dostu çeviriler ile global pazara açılın.',
        icon: 'Globe',
        features: [
          'SEO uyumlu web içeriği çevirisi',
          'Yazılım ve uygulama lokalizasyonu',
          'JSON, XML, YAML format desteği',
          'CMS entegrasyonları (WordPress, Shopify vb.)',
          'A/B testing için varyant çevirileri',
        ],
        turnaroundTime: '3-7 iş günü',
        price: {
          min: 2.18,
          unit: 'kelime',
        },
      },
      reklamTercume: {
        title: 'Reklam & Tanıtım Tercümesi',
        slug: 'reklam-tercume',
        description: 'Pazarlama materyalleri, reklam metinleri, sosyal medya içerikleri için yaratıcı ve etkili transcreation hizmetleri.',
        icon: 'Megaphone',
        features: [
          'Transcreation (yaratıcı adaptasyon)',
          'Marka sesi ve ton tutarlılığı',
          'Kültürel uyarlama',
          'Slogan ve motto çevirisi',
          'Copywriter desteği',
        ],
        turnaroundTime: '2-4 iş günü',
        price: {
          min: 1.90,
          unit: 'kelime',
        },
      },
    },
  },

  hizliHizmet: {
    category: 'Hızlı Hizmet',
    description: 'Acil durumlar için express teslimat seçenekleri',
    services: {
      acilTercume: {
        title: 'Acil Tercüme',
        slug: 'acil-tercume',
        description: '24 saat içinde teslimat garantisi ile acil tercüme hizmetleri. Zamanın önemli olduğu projeleriniz için hızlı ve kaliteli çözüm.',
        icon: 'Zap',
        badge: '24 Saat',
        features: [
          '4-24 saat içinde teslimat',
          '7/24 müşteri desteği',
          'Öncelikli işleme',
          'Tüm belge türleri',
          'Kalite garantisi',
        ],
        turnaroundTime: '4-24 saat',
        price: {
          min: 2.25,
          unit: 'kelime',
        },
      },
      ayniGunYeminli: {
        title: 'Aynı Gün Yeminli Tercüme',
        slug: 'ayni-gun-yeminli',
        description: 'Aynı gün içinde noter onaylı yeminli tercüme hizmeti. Acil resmi işlemleriniz için express çözüm.',
        icon: 'Clock',
        badge: 'Express',
        features: [
          'Aynı gün teslimat (saat 12:00\'a kadar verilen siparişler)',
          'Noter tasdik dahil',
          'Motorize kurye hizmeti',
          'Öncelikli işlem',
          'Tüm resmi belgeler',
        ],
        turnaroundTime: '4-8 saat',
        price: {
          min: 900,
          unit: 'sayfa',
        },
      },
    },
  },
};

// Helper function to get all services as flat array
export const getAllServicesFlat = (): Service[] => {
  return Object.values(allServices).flatMap(category =>
    Object.values(category.services)
  );
};

// Helper function to get service by slug
export const getServiceBySlug = (slug: string): Service | undefined => {
  return getAllServicesFlat().find(service => service.slug === slug);
};
