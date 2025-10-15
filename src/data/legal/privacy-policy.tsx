import React from 'react';
import { LegalSection } from '@/components/LegalPage';
import { contactData } from '@/data/contact';

export const privacyPolicyData = {
  title: 'Gizlilik Politikası',
  description: 'Atlas Lisan olarak kişisel verilerinizin gizliliğini korumak en önemli önceliğimizdir. Bu politika, hangi verilerin toplandığını, nasıl kullanıldığını ve haklarınızı açıklar.',
  lastUpdated: '15 Ekim 2025',
  sections: [
    {
      id: 'veri-toplama',
      title: '1. Kişisel Verilerin Toplanması',
      content: (
        <>
          <p>
            Atlas Lisan olarak, size daha iyi hizmet verebilmek amacıyla bazı kişisel verilerinizi toplamaktayız.
            Verileriniz yalnızca yasal çerçevede ve belirlenen amaçlar doğrultusunda işlenmektedir.
          </p>
          <p>
            Kişisel verileriniz, web sitemizi ziyaret ettiğinizde, iletişim formlarını doldurduğunuzda,
            e-posta gönderdiğinizde veya hizmetlerimizden yararlandığınızda toplanabilir.
          </p>
        </>
      ),
    },
    {
      id: 'toplanan-veriler',
      title: '2. Toplanan Veriler',
      content: (
        <>
          <p>Aşağıdaki kişisel veriler toplanabilir:</p>
          <ul>
            <li><strong>Kimlik Bilgileri:</strong> Ad, soyad</li>
            <li><strong>İletişim Bilgileri:</strong> E-posta adresi, telefon numarası</li>
            <li><strong>Kurumsal Bilgiler:</strong> Şirket adı, vergi numarası (kurumsal müşteriler için)</li>
            <li><strong>Teknik Veriler:</strong> IP adresi, tarayıcı türü, cihaz bilgileri</li>
            <li><strong>Kullanım Verileri:</strong> Web sitesi kullanım istatistikleri, tercihler</li>
            <li><strong>İşlem Verileri:</strong> Tercüme talepleri, proje detayları, belge içerikleri</li>
          </ul>
        </>
      ),
    },
    {
      id: 'kullanim-amaci',
      title: '3. Verilerin Kullanım Amaçları',
      content: (
        <>
          <p>Toplanan kişisel verileriniz aşağıdaki amaçlarla kullanılmaktadır:</p>
          <ul>
            <li>Tercüme hizmetlerinin sunulması ve yönetimi</li>
            <li>Müşteri ilişkileri yönetimi ve iletişim</li>
            <li>Teklif hazırlama ve faturalandırma işlemleri</li>
            <li>Hizmet kalitesinin geliştirilmesi</li>
            <li>Yasal yükümlülüklerin yerine getirilmesi</li>
            <li>Web sitesi performansının analiz edilmesi</li>
            <li>Müşteri memnuniyetinin ölçülmesi</li>
            <li>Pazarlama ve bilgilendirme faaliyetleri (onayınız dahilinde)</li>
          </ul>
        </>
      ),
    },
    {
      id: 'veri-guvenlik',
      title: '4. Verilerin Saklanması ve Güvenliği',
      content: (
        <>
          <p>
            Kişisel verileriniz, güvenli sunucularda saklanmakta ve endüstri standartlarında güvenlik
            önlemleri ile korunmaktadır. Verilerinize yetkisiz erişimi önlemek için teknik ve idari
            tedbirler alınmıştır.
          </p>
          <p>
            Kişisel verileriniz, işleme amacının gerektirdiği süre boyunca veya ilgili mevzuatta
            öngörülen süreler boyunca saklanacaktır. Yasal saklama süreleri sona erdiğinde verileriniz
            güvenli bir şekilde silinir, yok edilir veya anonim hale getirilir.
          </p>
          <p>
            <strong>Güvenlik Önlemlerimiz:</strong>
          </p>
          <ul>
            <li>SSL/TLS şifreleme ile güvenli veri iletimi</li>
            <li>Düzenli güvenlik denetimleri</li>
            <li>Yetkilendirme ve erişim kontrol sistemleri</li>
            <li>Güvenlik duvarı ve anti-virüs koruması</li>
            <li>Düzenli yedekleme prosedürleri</li>
          </ul>
        </>
      ),
    },
    {
      id: 'veri-paylasim',
      title: '5. Üçüncü Taraflarla Paylaşım',
      content: (
        <>
          <p>
            Kişisel verileriniz, izniniz olmadan üçüncü taraflarla paylaşılmaz, satılmaz veya
            kiralanmaz. Ancak aşağıdaki durumlarda verileriniz paylaşılabilir:
          </p>
          <ul>
            <li><strong>Hizmet Sağlayıcılar:</strong> Tercüme hizmetlerinin sunulması için uzman çevirmenler ve iş ortaklarımızla</li>
            <li><strong>Yasal Yükümlülükler:</strong> Mahkeme kararı veya yasal düzenlemeler gereği yetkili kurumlarla</li>
            <li><strong>İş Ortakları:</strong> Noter, kargo şirketleri gibi hizmet tamamlayıcı taraflarla</li>
            <li><strong>Teknik Hizmetler:</strong> Hosting, e-posta, analitik hizmet sağlayıcılarla</li>
          </ul>
          <p>
            Tüm üçüncü taraflar, verilerinizi korumak için sözleşmesel yükümlülükler altındadır
            ve verilerinizi yalnızca belirlenen amaçlar için kullanabilirler.
          </p>
        </>
      ),
    },
    {
      id: 'cerezler',
      title: '6. Çerezler',
      content: (
        <>
          <p>
            Web sitemiz, kullanıcı deneyimini iyileştirmek ve site performansını analiz etmek için
            çerezler kullanmaktadır. Çerezler hakkında detaylı bilgi için{' '}
            <a href="/cerez-politikasi" className="text-primary hover:underline">
              Çerez Politikamızı
            </a>{' '}
            inceleyebilirsiniz.
          </p>
          <p>
            Tarayıcı ayarlarınızdan çerezleri yönetebilir, kabul veya reddetme tercihlerinizi
            belirleyebilirsiniz. Ancak bazı çerezlerin devre dışı bırakılması, web sitesinin
            bazı özelliklerinin düzgün çalışmamasına neden olabilir.
          </p>
        </>
      ),
    },
    {
      id: 'kullanici-haklari',
      title: '7. Kullanıcı Hakları',
      content: (
        <>
          <p>
            6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında aşağıdaki haklara sahipsiniz:
          </p>
          <ul>
            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
            <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
            <li>Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
            <li>Kişisel verilerinizin yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
            <li>Kişisel verilerinizin eksik veya yanlış işlenmiş olması halinde bunların düzeltilmesini isteme</li>
            <li>İşlenmesini gerektiren sebeplerin ortadan kalkması halinde kişisel verilerinizin silinmesini veya yok edilmesini isteme</li>
            <li>Düzeltme, silme veya yok edilme işlemlerinin, kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme</li>
            <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
            <li>Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız halinde zararın giderilmesini talep etme</li>
          </ul>
          <p>
            Bu haklarınızı kullanmak için aşağıdaki İletişim bölümünde belirtilen kanallar üzerinden
            bizimle iletişime geçebilirsiniz.
          </p>
        </>
      ),
    },
    {
      id: 'iletisim',
      title: '8. İletişim',
      content: (
        <>
          <p>
            Gizlilik politikamız hakkında sorularınız veya kişisel verilerinizle ilgili talepleriniz için
            bizimle iletişime geçebilirsiniz:
          </p>
          <p>
            <strong>Atlas Lisan Tercüme ve Danışmanlık</strong><br />
            E-posta: {contactData.email}<br />
            Telefon: {contactData.phone}<br />
            Adres: {contactData.address}
          </p>
          <p>
            Talebiniz en kısa sürede ve en geç 30 gün içerisinde değerlendirilecek ve
            size geri dönüş yapılacaktır.
          </p>
          <p>
            <em>
              Bu gizlilik politikası, yasal düzenlemeler ve iş süreçlerimiz doğrultusunda
              güncellenebilir. Önemli değişiklikler olması durumunda sizi bilgilendireceğiz.
            </em>
          </p>
        </>
      ),
    },
  ] as LegalSection[],
};
