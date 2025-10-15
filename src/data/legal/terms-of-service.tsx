import React from 'react';
import { LegalSection } from '@/components/LegalPage';
import { contactData } from '@/data/contact';

export const termsOfServiceData = {
  title: 'Kullanım Şartları',
  description: 'Atlas Lisan tercüme hizmetlerinden yararlanırken uyulması gereken kurallar, hak ve sorumluluklar bu sayfada detaylandırılmıştır.',
  lastUpdated: '15 Ekim 2025',
  sections: [
    {
      id: 'hizmet-kapsami',
      title: '1. Hizmet Kapsamı',
      content: (
        <>
          <p>
            Atlas Lisan, profesyonel tercüme ve yerelleştirme hizmetleri sunmaktadır.
            Hizmetlerimiz aşağıdaki kategorileri kapsamaktadır:
          </p>
          <ul>
            <li><strong>Yeminli Tercüme:</strong> Noter onaylı, resmi belgelerin tercümesi</li>
            <li><strong>Teknik Tercüme:</strong> Teknik dokümantasyon, kullanım kılavuzları</li>
            <li><strong>Hukuki Tercüme:</strong> Sözleşmeler, mahkeme evrakları</li>
            <li><strong>Tıbbi Tercüme:</strong> Tıbbi raporlar, klinik belgeler</li>
            <li><strong>Kurumsal Tercüme:</strong> İş belgeleri, sunumlar, raporlar</li>
            <li><strong>Web Sitesi Yerelleştirme:</strong> Dijital içerik çevirisi</li>
            <li><strong>Acil Tercüme:</strong> Hızlandırılmış tercüme hizmetleri</li>
          </ul>
          <p>
            Bu web sitesini veya hizmetlerimizi kullanarak, bu kullanım şartlarını kabul etmiş sayılırsınız.
            Şartları kabul etmiyorsanız, lütfen hizmetlerimizi kullanmayınız.
          </p>
        </>
      ),
    },
    {
      id: 'kullanici-yukumluluk',
      title: '2. Kullanıcı Yükümlülükleri',
      content: (
        <>
          <p>
            Hizmetlerimizden yararlanan kullanıcılar olarak aşağıdaki kurallara uymayı
            kabul edersiniz:
          </p>
          <ul>
            <li>Tercüme edilecek belgelerin yasal ve meşru amaçlar için kullanılacağını beyan edersiniz</li>
            <li>Sahte, yanıltıcı veya yasa dışı belgeler göndermeyeceksiniz</li>
            <li>Gönderilen belgelerin telif haklarına veya üçüncü taraf haklarına aykırı olmadığını taahhüt edersiniz</li>
            <li>Doğru ve güncel iletişim bilgileri sağlayacaksınız</li>
            <li>Tercüme teslim sürelerine ilişkin anlaşma şartlarına uyacaksınız</li>
            <li>Hizmet bedelini zamanında ve eksiksiz ödeyeceksiniz</li>
            <li>Tercüme edilen belgelerin kullanımından sorumlu olduğunuzu kabul edersiniz</li>
            <li>Web sitesine zarar verebilecek virüs, zararlı yazılım veya kod yüklemeyeceksiniz</li>
          </ul>
          <p>
            Bu yükümlülüklere uyulmaması halinde, hizmet sunumunu durdurma veya iptal etme
            hakkımız saklıdır.
          </p>
        </>
      ),
    },
    {
      id: 'fikri-mulkiyet',
      title: '3. Fikri Mülkiyet Hakları',
      content: (
        <>
          <p>
            Bu web sitesinde yer alan tüm içerik, tasarım, logo, metin, grafik ve diğer materyaller
            Atlas Lisan'a ait olup, telif hakları ve fikri mülkiyet yasaları ile korunmaktadır.
          </p>
          <p>
            <strong>Kaynak Belgeler:</strong> Tercüme için gönderilen orijinal belgelerin fikri mülkiyet
            hakları müşteriye aittir. Atlas Lisan, bu belgeleri yalnızca tercüme hizmeti sunmak
            amacıyla kullanır.
          </p>
          <p>
            <strong>Tercüme Çıktıları:</strong> Tamamlanan tercüme çalışmalarının fikri mülkiyet hakları,
            ödeme tamamlandıktan sonra müşteriye devredilir. Ancak Atlas Lisan, kalite kontrol ve
            portföy amaçlı olarak çalışmaların kopyalarını saklama hakkına sahiptir.
          </p>
          <p>
            İzinsiz kopyalama, çoğaltma, dağıtma veya türev çalışmalar oluşturma yasaktır.
          </p>
        </>
      ),
    },
    {
      id: 'hizmet-kullanim',
      title: '4. Hizmet Kullanımı ve Kısıtlamalar',
      content: (
        <>
          <p>
            Web sitemizi ve hizmetlerimizi kullanırken aşağıdaki faaliyetler yasaktır:
          </p>
          <ul>
            <li>Yasadışı, zararlı veya yanıltıcı içerik göndermek</li>
            <li>Başkalarının haklarını ihlal eden belgeler paylaşmak</li>
            <li>Sisteme yetkisiz erişim sağlamaya çalışmak</li>
            <li>Hizmetimizi engelleyecek veya bozacak eylemler gerçekleştirmek</li>
            <li>Spam veya istenmeyen içerik göndermek</li>
            <li>Diğer kullanıcıları taciz etmek veya rahatsız etmek</li>
            <li>Otomatik sistemler veya botlar kullanarak hizmetimize erişmek</li>
            <li>Rekabetçi amaçlarla bilgi toplamak</li>
          </ul>
          <p>
            Bu kurallara uyulmaması halinde, yasal işlem başlatma hakkımız saklıdır.
          </p>
        </>
      ),
    },
    {
      id: 'sorumluluk-reddi',
      title: '5. Sorumluluk Reddi',
      content: (
        <>
          <p>
            Atlas Lisan, profesyonel tercüme hizmetleri sunmak için azami özeni göstermektedir.
            Ancak aşağıdaki konularda sorumluluk kabul etmemekteyiz:
          </p>
          <ul>
            <li>
              <strong>Kaynak Belge Hataları:</strong> Orijinal belgelerdeki hata, eksiklik veya
              belirsizliklerden kaynaklanan sorunlar
            </li>
            <li>
              <strong>Üçüncü Taraf Kullanımı:</strong> Tercüme edilen belgelerin müşteri tarafından
              nasıl kullanıldığından kaynaklanan sonuçlar
            </li>
            <li>
              <strong>Teknik Sorunlar:</strong> İnternet bağlantı problemleri, sunucu arızaları gibi
              kontrolümüz dışındaki teknik aksaklıklar
            </li>
            <li>
              <strong>Üçüncü Taraf Hizmetleri:</strong> Kargo, noter gibi iş ortaklarımızın
              hizmetlerinden kaynaklanan gecikmeler veya sorunlar
            </li>
            <li>
              <strong>Dil Farklılıkları:</strong> Diller arası kültürel veya dilbilimsel farklılıklardan
              kaynaklanan anlam nüansları
            </li>
          </ul>
          <p>
            Web sitemiz ve hizmetlerimiz "olduğu gibi" sunulmaktadır. Kesintisiz, hatasız veya
            güvenli olacağına dair garanti vermemekteyiz.
          </p>
          <p>
            <strong>Sorumluluk Sınırı:</strong> Herhangi bir durumda, sorumluluğumuz ödenen hizmet
            bedeli ile sınırlıdır. Dolaylı, arızi veya özel zararlardan sorumlu değiliz.
          </p>
        </>
      ),
    },
    {
      id: 'garanti-iade',
      title: '6. Garanti ve İade Koşulları',
      content: (
        <>
          <p>
            <strong>Kalite Garantisi:</strong> Tüm tercüme hizmetlerimiz, deneyimli çevirmenler ve
            kalite kontrol süreçleri ile sunulmaktadır. Çalışmalarımızda kalite standartlarımızı
            korumayı taahhüt ederiz.
          </p>
          <p>
            <strong>Revizyon Hakkı:</strong> Teslim edilen tercümede hata tespit edilmesi durumunda,
            teslim tarihinden itibaren 7 gün içinde ücretsiz revizyon hakkına sahipsiniz. Revizyon
            talepleri aşağıdaki koşullarda geçerlidir:
          </p>
          <ul>
            <li>Tercüme hatası veya eksikliği olması</li>
            <li>Kaynak belgeye uyumsuzluk</li>
            <li>Format veya düzen sorunları</li>
            <li>Terminoloji tutarsızlıkları</li>
          </ul>
          <p>
            <strong>İade Koşulları:</strong> Aşağıdaki durumlarda para iadesi talep edebilirsiniz:
          </p>
          <ul>
            <li>Hizmetin hiç sunulmaması</li>
            <li>Belirlenen teslim süresinin önemli ölçüde aşılması (acil tercüme hariç)</li>
            <li>Kalite standartlarının ciddi şekilde karşılanmaması ve revizyon ile düzeltilememe</li>
          </ul>
          <p>
            İade talepleri, durum değerlendirmesi sonrası 14 iş günü içinde sonuçlandırılır.
            Müşteri kaynaklı sorunlar (yanlış belge gönderme, iletişim eksikliği vb.) iade
            kapsamında değildir.
          </p>
          <p>
            <strong>Revizyon Sınırlamaları:</strong> Kaynak belgede sonradan yapılan değişiklikler,
            müşterinin tercih değişiklikleri veya kapsam dışı talepler ücretli revizyon kapsamındadır.
          </p>
        </>
      ),
    },
    {
      id: 'fiyat-odeme',
      title: '7. Fiyatlandırma ve Ödeme',
      content: (
        <>
          <p>
            <strong>Fiyatlandırma:</strong> Hizmet bedelleri, kaynak belgenin uzunluğu, dil çifti,
            teknik zorluk, aciliyet ve hizmet türüne göre belirlenir. Kesin fiyat teklifi,
            belge incelemesi sonrası tarafınıza iletilir.
          </p>
          <p>
            <strong>Ödeme Yöntemleri:</strong>
          </p>
          <ul>
            <li>Banka havalesi / EFT</li>
            <li>Kredi kartı (online ödeme)</li>
            <li>Kurumsal fatura (anlaşmalı müşteriler için)</li>
          </ul>
          <p>
            <strong>Ödeme Koşulları:</strong>
          </p>
          <ul>
            <li>Bireysel müşteriler için hizmet öncesi %100 ödeme</li>
            <li>Kurumsal müşteriler için %50 avans, %50 teslim sonrası (anlaşmaya bağlı)</li>
            <li>Yeminli tercüme hizmetlerinde noter ücretleri ayrıca tahsil edilir</li>
            <li>Acil tercüme hizmetlerinde ek ücret uygulanır (%30-50 arası)</li>
          </ul>
          <p>
            <strong>Fatura:</strong> Tüm ödemeler için yasal fatura düzenlenir. Kurumsal müşterilerimiz
            için e-fatura sistemi mevcuttur.
          </p>
          <p>
            Web sitesinde belirtilen fiyatlar bilgilendirme amaçlıdır ve önceden haber verilmeksizin
            değiştirilebilir. Geçerli fiyat, sipariş onay aşamasında belirtilen fiyattır.
          </p>
        </>
      ),
    },
    {
      id: 'sozlesme-degisiklik',
      title: '8. Sözleşme Değişiklikleri',
      content: (
        <>
          <p>
            Atlas Lisan, bu kullanım şartlarını herhangi bir zamanda değiştirme hakkını saklı tutar.
            Değişiklikler, web sitesinde yayınlandığı andan itibaren geçerli olacaktır.
          </p>
          <p>
            Önemli değişiklikler olması durumunda, kayıtlı kullanıcılar e-posta yoluyla
            bilgilendirilecektir. Değişiklikler sonrası hizmetleri kullanmaya devam etmeniz,
            yeni şartları kabul ettiğiniz anlamına gelir.
          </p>
          <p>
            Kullanıcıların, bu sayfayı düzenli olarak kontrol etmeleri önerilir. Son güncellenme
            tarihi sayfa başında belirtilmiştir.
          </p>
        </>
      ),
    },
    {
      id: 'uyusmazlik',
      title: '9. Uyuşmazlık Çözümü',
      content: (
        <>
          <p>
            Bu kullanım şartlarından doğabilecek uyuşmazlıkların çözümünde Türkiye Cumhuriyeti
            yasaları uygulanır. İstanbul (Çağlayan) Mahkemeleri ve İcra Daireleri yetkilidir.
          </p>
          <p>
            <strong>Uyuşmazlık Çözüm Süreci:</strong>
          </p>
          <ol>
            <li>
              <strong>Müşteri Hizmetleri:</strong> Her türlü sorun veya şikayet için öncelikle
              müşteri hizmetlerimizle iletişime geçilmelidir.
            </li>
            <li>
              <strong>Yazılı Başvuru:</strong> Çözülemeyen sorunlar için yazılı başvuru yapılır ve
              10 iş günü içinde değerlendirilir.
            </li>
            <li>
              <strong>Arabuluculuk:</strong> Taraflar ihtilafı dostane çözmek için arabuluculuk
              sisteminden faydalanabilir.
            </li>
            <li>
              <strong>Yasal Süreç:</strong> Diğer yolların tükenmesi durumunda yasal yollara
              başvurulabilir.
            </li>
          </ol>
          <p>
            <strong>Tüketici Hakları:</strong> 6502 sayılı Tüketicinin Korunması Hakkında Kanun
            kapsamındaki haklarınız saklıdır. Tüketici şikayetleri için Tüketici Hakem Heyetleri
            ve Tüketici Mahkemelerine başvuruda bulunabilirsiniz.
          </p>
        </>
      ),
    },
    {
      id: 'iletisim-info',
      title: '10. İletişim',
      content: (
        <>
          <p>
            Kullanım şartları hakkında sorularınız veya tercüme hizmetlerimizle ilgili talepleriniz
            için bizimle iletişime geçebilirsiniz:
          </p>
          <p>
            <strong>Atlas Lisan Tercüme ve Danışmanlık</strong><br />
            E-posta: {contactData.email}<br />
            Telefon: {contactData.phone}<br />
            Adres: {contactData.address}
          </p>
          <p>
            Çalışma Saatleri: {contactData.workingHours}<br />
            Acil tercüme talepleriniz için 7/24 online destek mevcuttur.
          </p>
          <p>
            <em>
              Bu kullanım şartları, 15 Ekim 2025 tarihinde güncellenmiş olup, bu tarihten
              sonraki tüm hizmet kullanımları için geçerlidir.
            </em>
          </p>
        </>
      ),
    },
  ] as LegalSection[],
};
