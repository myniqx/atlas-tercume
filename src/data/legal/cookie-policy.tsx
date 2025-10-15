import React from 'react';
import { LegalSection } from '@/components/LegalPage';
import { contactData } from '@/data/contact';

export const cookiePolicyData = {
  title: 'Çerez Politikası',
  description: 'Web sitemizde kullanılan çerezler, amaçları ve yönetim seçenekleri hakkında detaylı bilgi.',
  lastUpdated: '15 Ekim 2025',
  sections: [
    {
      id: 'cerez-nedir',
      title: '1. Çerez Nedir?',
      content: (
        <>
          <p>
            Çerezler (cookies), bir web sitesini ziyaret ettiğinizde cihazınıza (bilgisayar,
            tablet, akıllı telefon) kaydedilen küçük metin dosyalarıdır. Çerezler, web sitesinin
            daha verimli çalışmasını sağlamak ve kullanıcı deneyimini geliştirmek amacıyla yaygın
            olarak kullanılmaktadır.
          </p>
          <p>
            <strong>Çerezler Nasıl Çalışır?</strong>
          </p>
          <p>
            Bir web sitesini ziyaret ettiğinizde, site sunucusu tarayıcınıza çerezler gönderir.
            Tarayıcınız bu çerezleri cihazınızda depolar. Siteyi tekrar ziyaret ettiğinizde,
            tarayıcınız bu çerezleri web sitesine geri gönderir. Bu sayede site sizi tanır ve
            tercihlerinizi hatırlar.
          </p>
          <p>
            <strong>Çerez Türleri:</strong>
          </p>
          <ul>
            <li>
              <strong>Oturum Çerezleri (Session Cookies):</strong> Tarayıcınızı kapattığınızda
              otomatik olarak silinen geçici çerezlerdir.
            </li>
            <li>
              <strong>Kalıcı Çerezler (Persistent Cookies):</strong> Belirlenen bir süre boyunca
              veya siz manuel olarak silinceye kadar cihazınızda kalan çerezlerdir.
            </li>
            <li>
              <strong>Birinci Taraf Çerezleri:</strong> Ziyaret ettiğiniz web sitesi tarafından
              oluşturulan çerezlerdir.
            </li>
            <li>
              <strong>Üçüncü Taraf Çerezleri:</strong> Web sitesinde yer alan diğer web siteleri
              (reklamlar, analitik araçlar vb.) tarafından oluşturulan çerezlerdir.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'kullanilan-cerezler',
      title: '2. Kullandığımız Çerez Türleri',
      content: (
        <>
          <p>
            Atlas Lisan web sitesinde aşağıdaki kategorilerdeki çerezler kullanılmaktadır:
          </p>
          <p>
            <strong>A) Zorunlu Çerezler</strong>
          </p>
          <p>
            Bu çerezler, web sitesinin temel işlevlerini yerine getirmesi için gereklidir ve
            devre dışı bırakılamazlar:
          </p>
          <ul>
            <li><strong>Güvenlik çerezleri:</strong> Siber saldırıları önlemek ve güvenli bağlantı sağlamak için</li>
            <li><strong>Oturum yönetimi çerezleri:</strong> Sayfalar arası gezinme sırasında oturum bilgilerinizi korumak için</li>
            <li><strong>Yük dengeleme çerezleri:</strong> Web sitesinin performansını optimize etmek için</li>
            <li><strong>Tercih çerezleri:</strong> Dil, tema (açık/koyu mod) gibi tercihlerinizi hatırlamak için</li>
          </ul>
          <p>
            <em>Yasal Dayanak: Meşru menfaat - Web sitesinin çalışması için zorunlu</em>
          </p>
        </>
      ),
    },
    {
      id: 'zorunlu-cerezler',
      title: '3. Zorunlu Çerezler',
      content: (
        <>
          <p>
            Web sitemizin düzgün çalışması için mutlaka gerekli olan çerezler:
          </p>
          <table className="w-full text-sm border-collapse border border-border">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-2 text-left">Çerez Adı</th>
                <th className="border border-border p-2 text-left">Amaç</th>
                <th className="border border-border p-2 text-left">Süre</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-2">session_id</td>
                <td className="border border-border p-2">Oturum yönetimi</td>
                <td className="border border-border p-2">Oturum süresi</td>
              </tr>
              <tr>
                <td className="border border-border p-2">csrf_token</td>
                <td className="border border-border p-2">Güvenlik (CSRF koruması)</td>
                <td className="border border-border p-2">Oturum süresi</td>
              </tr>
              <tr>
                <td className="border border-border p-2">language</td>
                <td className="border border-border p-2">Dil tercihi</td>
                <td className="border border-border p-2">1 yıl</td>
              </tr>
              <tr>
                <td className="border border-border p-2">theme</td>
                <td className="border border-border p-2">Tema tercihi (açık/koyu)</td>
                <td className="border border-border p-2">1 yıl</td>
              </tr>
              <tr>
                <td className="border border-border p-2">cookie_consent</td>
                <td className="border border-border p-2">Çerez onayı durumu</td>
                <td className="border border-border p-2">1 yıl</td>
              </tr>
            </tbody>
          </table>
        </>
      ),
    },
    {
      id: 'analitik-cerezler',
      title: '4. Analitik Çerezler',
      content: (
        <>
          <p>
            Bu çerezler, web sitesinin nasıl kullanıldığını anlamamıza ve kullanıcı deneyimini
            iyileştirmemize yardımcı olur. Toplanan veriler anonim hale getirilir:
          </p>
          <ul>
            <li>Ziyaretçi sayısı ve sayfa görüntülemeleri</li>
            <li>Hangi sayfaların en çok ziyaret edildiği</li>
            <li>Kullanıcıların sitede ne kadar süre kaldığı</li>
            <li>Hangi sayfalardan gelip, nereye gittikleri</li>
            <li>Tıklama ve gezinme davranışları</li>
            <li>Cihaz ve tarayıcı bilgileri</li>
          </ul>
          <p>
            <strong>Kullanılan Araçlar:</strong>
          </p>
          <ul>
            <li>
              <strong>Google Analytics:</strong> Web sitesi trafiği ve kullanıcı davranışı analizi
              <br />
              <em>Çerezler: _ga, _gid, _gat</em>
              <br />
              <em>Süre: 2 yıl (kalıcı çerezler)</em>
              <br />
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Google Gizlilik Politikası
              </a>
            </li>
          </ul>
          <p>
            <em>
              Yasal Dayanak: Onay - Bu çerezler yalnızca onayınız dahilinde kullanılır
            </em>
          </p>
        </>
      ),
    },
    {
      id: 'islevsellik-cerezler',
      title: '5. İşlevsellik Çerezleri',
      content: (
        <>
          <p>
            Bu çerezler, web sitesinin gelişmiş özelliklerini ve kişiselleştirmelerini
            sağlamak için kullanılır:
          </p>
          <ul>
            <li>Dil tercihinizi hatırlama</li>
            <li>Form verilerinizi geçici olarak saklama</li>
            <li>Favorilediğiniz hizmetleri hatırlama</li>
            <li>Önceki arama sorgularınızı kaydetme</li>
            <li>Video oynatıcı ayarları</li>
            <li>Sosyal medya paylaşım özellikleri</li>
          </ul>
          <p>
            <strong>Üçüncü Taraf Hizmetler:</strong>
          </p>
          <ul>
            <li>
              <strong>YouTube:</strong> Video içerik gösterimi için
              <br />
              <em>Çerezler: VISITOR_INFO1_LIVE, YSC</em>
            </li>
            <li>
              <strong>Google Maps:</strong> Konum ve harita gösterimi için
              <br />
              <em>Çerezler: NID, PREF</em>
            </li>
          </ul>
          <p>
            <em>
              Yasal Dayanak: Onay - Bu çerezler yalnızca onayınız dahilinde kullanılır
            </em>
          </p>
        </>
      ),
    },
    {
      id: 'cerez-yonetimi',
      title: '6. Çerez Yönetimi',
      content: (
        <>
          <p>
            Çerezleri yönetmek ve kontrol etmek için birçok seçeneğiniz bulunmaktadır:
          </p>
          <p>
            <strong>A) Tarayıcı Ayarları</strong>
          </p>
          <p>
            Çoğu tarayıcı varsayılan olarak çerezleri kabul eder, ancak tarayıcı ayarlarınızdan
            çerezleri reddedebilir, silebilir veya belirli çerezleri engelleyebilirsiniz:
          </p>
          <ul>
            <li>
              <strong>Chrome:</strong> Ayarlar → Gizlilik ve güvenlik → Çerezler ve diğer site verileri
              <br />
              <a
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline text-sm"
              >
                Detaylı Bilgi
              </a>
            </li>
            <li>
              <strong>Firefox:</strong> Ayarlar → Gizlilik ve Güvenlik → Çerezler ve Site Verileri
              <br />
              <a
                href="https://support.mozilla.org/tr/kb/cerezleri-etkinlestirme-ve-devre-disi-birakma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline text-sm"
              >
                Detaylı Bilgi
              </a>
            </li>
            <li>
              <strong>Safari:</strong> Tercihler → Gizlilik → Çerezler ve web sitesi verileri
              <br />
              <a
                href="https://support.apple.com/tr-tr/guide/safari/sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline text-sm"
              >
                Detaylı Bilgi
              </a>
            </li>
            <li>
              <strong>Edge:</strong> Ayarlar → Çerezler ve site izinleri
              <br />
              <a
                href="https://support.microsoft.com/tr-tr/microsoft-edge/cerezleri-microsoft-edge-da-silme-63947406-40ac-c3b8-57b9-2a946a29ae09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline text-sm"
              >
                Detaylı Bilgi
              </a>
            </li>
          </ul>
          <p>
            <strong>B) Çerez Tercih Merkezi</strong>
          </p>
          <p>
            Web sitemizde yer alan çerez tercih merkezinden, zorunlu olmayan çerezleri
            kategori bazında yönetebilirsiniz.
          </p>
          <p>
            <strong>C) Üçüncü Taraf Çerezlerini Devre Dışı Bırakma</strong>
          </p>
          <ul>
            <li>
              <strong>Google Analytics Devre Dışı Bırakma:</strong>{' '}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Google Analytics Opt-out
              </a>
            </li>
          </ul>
          <p>
            <strong>⚠️ Önemli Not:</strong> Zorunlu çerezleri devre dışı bırakmanız halinde,
            web sitesinin bazı özellikleri düzgün çalışmayabilir. Örneğin:
          </p>
          <ul>
            <li>Oturum açma işlemi gerçekleşmeyebilir</li>
            <li>Form gönderimi çalışmayabilir</li>
            <li>Tercihleriniz kaydedilmeyebilir</li>
            <li>Sayfalar arası gezinme sorun yaşayabilir</li>
          </ul>
        </>
      ),
    },
    {
      id: 'veri-guvenligi',
      title: '7. Veri Güvenliği ve Kişisel Veriler',
      content: (
        <>
          <p>
            Çerezler aracılığıyla toplanan veriler, KVKK (Kişisel Verilerin Korunması Kanunu)
            ve ilgili mevzuat kapsamında korunmaktadır.
          </p>
          <p>
            <strong>Çerezler ve Kişisel Veriler:</strong>
          </p>
          <ul>
            <li>
              <strong>Anonim Veriler:</strong> Analitik çerezler genellikle anonim veri toplar
              ve sizi doğrudan tanımlamaz
            </li>
            <li>
              <strong>IP Adresi:</strong> IP adresiniz kişisel veri olarak kabul edilir ve
              güvenli şekilde işlenir
            </li>
            <li>
              <strong>Şifreleme:</strong> Çerezler SSL/TLS şifrelemesi ile korunur
            </li>
            <li>
              <strong>Üçüncü Taraf Güvenlik:</strong> Üçüncü taraf çerez sağlayıcıları,
              gizlilik politikalarına uygun hareket etmekle yükümlüdür
            </li>
          </ul>
          <p>
            Çerezler aracılığıyla toplanan kişisel verilerinizle ilgili haklarınızı kullanmak için{' '}
            <a href="/kvkk" className="text-primary hover:underline">
              KVKK Aydınlatma Metni
            </a>
            'ni inceleyebilirsiniz.
          </p>
        </>
      ),
    },
    {
      id: 'guncellemeler',
      title: '8. Politika Güncellemeleri',
      content: (
        <>
          <p>
            Bu çerez politikası, teknolojik gelişmeler, yasal düzenlemeler veya iş süreçlerindeki
            değişiklikler doğrultusunda güncellenebilir.
          </p>
          <p>
            Önemli değişiklikler yapıldığında:
          </p>
          <ul>
            <li>Web sitesinde güncelleme bildirimi gösterilir</li>
            <li>Son güncellenme tarihi sayfa başında belirtilir</li>
            <li>Kayıtlı kullanıcılara e-posta ile bildirim gönderilir</li>
            <li>Yeni çerez onayı talep edilebilir</li>
          </ul>
          <p>
            Kullanıcıların bu sayfayı düzenli olarak kontrol etmeleri önerilir.
          </p>
        </>
      ),
    },
    {
      id: 'iletisim-cerez',
      title: '9. İletişim',
      content: (
        <>
          <p>
            Çerez politikamız hakkında sorularınız veya çerez kullanımıyla ilgili talepleriniz
            için bizimle iletişime geçebilirsiniz:
          </p>
          <p>
            <strong>Atlas Lisan Tercüme ve Danışmanlık</strong><br />
            E-posta: {contactData.email}<br />
            Telefon: {contactData.phone}<br />
            Adres: {contactData.address}
          </p>
          <p>
            <strong>İlgili Kaynaklar:</strong>
          </p>
          <ul>
            <li>
              <a href="/gizlilik-politikasi" className="text-primary hover:underline">
                Gizlilik Politikası
              </a>
            </li>
            <li>
              <a href="/kvkk" className="text-primary hover:underline">
                KVKK Aydınlatma Metni
              </a>
            </li>
            <li>
              <a href="/kullanim-sartlari" className="text-primary hover:underline">
                Kullanım Şartları
              </a>
            </li>
          </ul>
          <p>
            <em>
              Bu çerez politikası 15 Ekim 2025 tarihinde güncellenmiştir ve bu tarihten sonraki
              tüm web sitesi kullanımları için geçerlidir.
            </em>
          </p>
        </>
      ),
    },
  ] as LegalSection[],
};
