# Atlas Lisan - Web Sitesi Kod Standartları

## Proje Hakkında
Atlas Lisan profesyonel tercüme hizmetleri sunan bir şirketin kurumsal web sitesidir.

## Teknoloji Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Form Management**: React Hook Form + Zod
- **Email**: Resend + React Email
- **Package Manager**: pnpm

## Component Yapısı Standardı

### Klasör Organizasyonu
Her component kendi klasöründe bulunmalı ve aşağıdaki yapıya uymalıdır:

```
src/components/ComponentName/
├── ComponentName.tsx    # Ana component dosyası
├── index.ts            # Export barrel (export * from './ComponentName')
├── types.ts            # Interface ve type tanımları (gerekirse)
├── data.ts             # Component-specific data (gerekirse)
└── ChildComponent.tsx  # Alt componentler (gerekirse)
```

### Component Syntax Standardı

```typescript
'use client'; // Eğer hook veya interactivity varsa

import React, { FC } from 'react';
import { ComponentNameProps } from './types';

export const ComponentName: FC<ComponentNameProps> = ({ prop1, prop2 }) => {
  return (
    <div>
      {/* Component içeriği */}
    </div>
  );
};
```

### Önemli Kurallar
1. **Client Components**: Hook, event handler veya browser API kullanılan tüm componentlerde `'use client'` direktifi eklenmelidir
2. **Import Statement**: Her component dosyasında `import React, { FC } from 'react';` olmalıdır
3. **Export Pattern**: `export const ComponentName: FC<Props> = ({ props }) => { }`
4. **Framer Motion**: Animasyon kullanılan tüm componentler `'use client'` olmalıdır

## Component Prensibi

### Reusable ve Compact
- Tüm componentler yeniden kullanılabilir olmalı
- Props ile çoklu özellik sunulmalı
- Conditional rendering prop'larla kontrol edilmeli

### Örnek: Flexible Component
```typescript
interface ContactUsProps {
  email?: string;
  phone?: string;
  showSocial?: boolean;
  variant?: 'default' | 'compact' | 'inline';
}

export const ContactUs: FC<ContactUsProps> = ({
  email,
  phone,
  showSocial = true,
  variant = 'default'
}) => {
  return (
    <div>
      {email && <EmailSection email={email} />}
      {phone && <PhoneSection phone={phone} />}
      {showSocial && <SocialSection />}
    </div>
  );
};
```

## Data Yönetimi

### Data Klasör Yapısı
```
src/data/
├── contact.ts      # İletişim bilgileri (email, phone, address, social)
├── services.ts     # Hizmetler listesi
├── team.ts         # Ekip üyeleri
├── metadata.ts     # SEO meta data
└── navigation.ts   # Menü items
```

### Data Formatı
```typescript
// Component-specific data → src/components/ComponentName/data.ts
export const componentData: Record<string, string> = {
  key1: 'value1',
  key2: 'value2',
};

// Global data → src/data/contact.ts
export const contactData = {
  email: 'info@atlaslisan.com',
  phone: '+905xxxxxxxxx',
  whatsapp: '+905xxxxxxxxx',
  address: 'İstanbul, Türkiye',
} as const;
```

### Data-Driven Rendering
```typescript
// Loop ile render
import { servicesData } from '@/data/services';

export const ServicesSection = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {Object.values(servicesData).map(service => (
        <ServiceCard key={service.slug} {...service} />
      ))}
    </div>
  );
};
```

## Styling Yaklaşımı

### Tailwind First
- Tüm styling Tailwind CSS ile yapılmalı
- Custom theme tanımları `tailwind.config.ts`'de
- Inline styles sadece dynamic değerler için kullanılmalı

### Theme Configuration
```typescript
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      primary: { /* gradient colors */ },
      secondary: { /* ... */ },
      accent: { /* gold/premium tones */ },
    },
    animation: { /* custom animations */ },
  }
}
```

### shadcn/ui Components
- UI componentleri için shadcn/ui tercih edilmeli
- Gerekirse shadcn/ui componentleri extend edilebilir

## TypeScript Kuralları

### Strict Mode
- TypeScript strict mode aktif
- `any` kullanımından kaçınılmalı
- Her component'in type tanımı olmalı

### Type Organization
```typescript
// Global types → src/types/global.ts
export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}

// Component types → src/components/ComponentName/types.ts
export interface ComponentNameProps extends BaseProps {
  // Component-specific props
}
```

## Dosya İsimlendirme
- Components: PascalCase (`ServiceCard.tsx`)
- Data files: camelCase (`services.ts`)
- Utility files: camelCase (`formatDate.ts`)
- Types: camelCase (`global.ts`)

## Import Alias
- `@/` alias kullanılmalı (src klasörüne işaret eder)
- Örnek: `import { Button } from '@/components/ui/button'`

## Git Workflow
- Meaningful commit messages
- Feature branches kullanımı önerilir
- Main branch production-ready olmalı

## Environment Variables
```bash
# .env.local
RESEND_API_KEY=your_key_here
NEXT_PUBLIC_SITE_URL=https://atlaslisan.com
NEXT_PUBLIC_WHATSAPP_NUMBER=+905xxxxxxxxx
```

## Deployment
- **Platform**: Vercel
- **Domain**: atlaslisan.com
- **Environment**: Production, Preview

## Notlar
- Bu proje mock data ile başlatılmıştır
- İçerik güncellemeleri `src/data/*.ts` dosyalarından yapılmalıdır
- Component'ler flexible ve reusable olacak şekilde tasarlanmıştır
- Modern, lüks ve premium görünüm hedeflenmiştir
