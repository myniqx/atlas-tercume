# Atlas Lisan - Profesyonel Tercüme Hizmetleri

Modern, lüks ve profesyonel bir tercüme bürosu web sitesi. Next.js 15, TypeScript, Tailwind CSS 4 ve Framer Motion ile geliştirilmiştir.

## 🚀 Özellikler

- ✨ Modern ve premium tasarım
- 🎨 Gradient'ler ve glassmorphism efektleri
- 📱 Tam responsive tasarım
- ⚡ Next.js 15 App Router
- 🎭 Framer Motion animasyonları
- 📧 Resend ile email entegrasyonu
- 💬 WhatsApp entegrasyonu
- 🎯 SEO optimizasyonu
- 📊 13 farklı tercüme hizmeti
- 🔒 Type-safe (TypeScript)

## 🛠️ Teknoloji Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **UI:** shadcn/ui
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod
- **Email:** Resend
- **Package Manager:** pnpm

## 📦 Kurulum

### 1. Dependencies'leri kur

```bash
pnpm install
```

### 2. Environment variables

`.env.example` dosyasını `.env.local` olarak kopyalayın:

```bash
cp .env.example .env.local
```

Gerekli değerleri doldurun:

```env
RESEND_API_KEY=your_key
CONTACT_EMAIL=info@atlaslisan.com
NEXT_PUBLIC_WHATSAPP_NUMBER=+905551234567
```

### 3. Development server

```bash
pnpm dev
```

Site `http://localhost:3000` adresinde çalışacaktır.

## 📝 İçerik Güncelleme

Tüm içerikler `src/data/` klasöründe MOCK data ile doldurulmuştur:

- **İletişim:** `src/data/contact.ts`
- **Hizmetler:** `src/data/services.ts`
- **Ekip:** `src/data/team.ts`
- **SEO:** `src/data/metadata.ts`

## 🚀 Deploy

```bash
pnpm build
pnpm start
```

Vercel'e otomatik deploy için GitHub'a push yapın.

## 📄 Daha Fazla Bilgi

Kod standartları için `CLAUDE.md` dosyasını inceleyin.

---

**Atlas Lisan** 🌐
