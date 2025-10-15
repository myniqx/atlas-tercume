import React from 'react';
import { LegalSection } from '@/components/LegalPage';
import { contactData } from '@/data/contact';

export const kvkkData = {
  title: 'KVKK Aydınlatma Metni',
  description: '6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında, kişisel verilerinizin işlenmesine ilişkin aydınlatma metni.',
  lastUpdated: '15 Ekim 2025',
  sections: [
    {
      id: 'veri-sorumlusu',
      title: '1. Veri Sorumlusu',
      content: (
        <>
          <p>
            6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, kişisel verileriniz;
            veri sorumlusu olarak Atlas Lisan Tercüme ve Danışmanlık tarafından aşağıda açıklanan
            kapsamda işlenebilecektir.
          </p>
          <p>
            <strong>Veri Sorumlusu Bilgileri:</strong>
          </p>
          <ul>
            <li><strong>Ticaret Unvanı:</strong> Atlas Lisan Tercüme ve Danışmanlık Ltd. Şti.</li>
            <li><strong>Adres:</strong> {contactData.address}</li>
            <li><strong>E-posta:</strong> {contactData.email}</li>
            <li><strong>Telefon:</strong> {contactData.phone}</li>
            <li><strong>KEP Adresi:</strong> atlaslisan@hs03.kep.tr</li>
          </ul>
        </>
      ),
    },
    {
      id: 'tanimlar',
      title: '2. Tanımlar',
      content: (
        <>
          <p>
            Bu aydınlatma metninde geçen terimler aşağıdaki anlamlara gelir:
          </p>
          <ul>
            <li>
              <strong>Kişisel Veri:</strong> Kimliği belirli veya belirlenebilir gerçek kişiye
              ilişkin her türlü bilgiyi,
            </li>
            <li>
              <strong>Özel Nitelikli Kişisel Veri:</strong> Kişilerin ırkı, etnik kökeni, siyasi
              düşüncesi, felsefi inancı, dini, mezhebi veya diğer inançları, kılık ve kıyafeti,
              dernek, vakıf ya da sendika üyeliği, sağlığı, cinsel hayatı, ceza mahkûmiyeti ve
              güvenlik tedbirleriyle ilgili verileri ile biyometrik ve genetik verilerini,
            </li>
            <li>
              <strong>İlgili Kişi:</strong> Kişisel verisi işlenen gerçek kişiyi,
            </li>
            <li>
              <strong>Açık Rıza:</strong> Belirli bir konuya ilişkin, bilgilendirilmeye dayanan ve
              özgür iradeyle açıklanan rızayı ifade eder.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'islenen-veriler',
      title: '3. İşlenen Kişisel Veriler',
      content: (
        <>
          <p>
            Hizmetlerimizi sunabilmek için aşağıdaki kategorilerdeki kişisel verileriniz işlenmektedir:
          </p>
          <p>
            <strong>A) Kimlik Bilgileri:</strong>
          </p>
          <ul>
            <li>Ad, soyad</li>
            <li>T.C. kimlik numarası (yeminli tercüme için)</li>
            <li>Doğum tarihi ve yeri (gerektiğinde)</li>
            <li>Pasaport/kimlik belgesi bilgileri</li>
          </ul>
          <p>
            <strong>B) İletişim Bilgileri:</strong>
          </p>
          <ul>
            <li>E-posta adresi</li>
            <li>Telefon numarası</li>
            <li>Posta adresi</li>
            <li>Fatura adresi</li>
          </ul>
          <p>
            <strong>C) Kurumsal Müşteri Bilgileri:</strong>
          </p>
          <ul>
            <li>Şirket ünvanı</li>
            <li>Vergi numarası / Vergi dairesi</li>
            <li>Mersis numarası</li>
            <li>Yetkili kişi bilgileri</li>
          </ul>
          <p>
            <strong>D) İşlem Güvenliği Bilgileri:</strong>
          </p>
          <ul>
            <li>IP adresi</li>
            <li>Tarayıcı bilgileri</li>
            <li>Çerez kayıtları</li>
            <li>Giriş/çıkış logları</li>
          </ul>
          <p>
            <strong>E) Finansal Bilgiler:</strong>
          </p>
          <ul>
            <li>Banka hesap bilgileri</li>
            <li>Ödeme işlem geçmişi</li>
            <li>Fatura bilgileri</li>
          </ul>
          <p>
            <strong>F) Özel Nitelikli Kişisel Veriler:</strong>
          </p>
          <ul>
            <li>Sağlık verileri (tıbbi belge tercümelerinde)</li>
            <li>Ceza mahkûmiyeti bilgileri (adli belge tercümelerinde)</li>
            <li>Diğer özel nitelikli veriler (belgelerin içeriğine bağlı)</li>
          </ul>
          <p>
            <em>
              Not: Özel nitelikli kişisel veriler, yalnızca açık rızanız dahilinde ve yasal
              gerekliliklere uygun olarak işlenmektedir.
            </em>
          </p>
        </>
      ),
    },
    {
      id: 'isleme-amaci',
      title: '4. Kişisel Verilerin İşlenme Amacı',
      content: (
        <>
          <p>
            Kişisel verileriniz, KVKK'nın 5. ve 6. maddelerinde belirtilen kişisel veri işleme
            şartları dahilinde aşağıdaki amaçlarla işlenebilmektedir:
          </p>
          <ul>
            <li>Tercüme hizmetlerinin sunulması ve yönetimi</li>
            <li>Sözleşme süreçlerinin yürütülmesi</li>
            <li>Müşteri ilişkileri yönetimi ve iletişim</li>
            <li>Teklif hazırlama ve sipariş takibi</li>
            <li>Faturalandırma ve tahsilat işlemleri</li>
            <li>Hizmet kalitesinin geliştirilmesi</li>
            <li>Müşteri memnuniyeti ölçümleme</li>
            <li>Yasal yükümlülüklerin yerine getirilmesi</li>
            <li>Resmi makamlardan gelen bilgi taleplerinin yanıtlanması</li>
            <li>İstatistiksel analiz ve raporlama</li>
            <li>Bilgi güvenliği süreçlerinin yürütülmesi</li>
            <li>Veri sahiplerinin haklarını kullanabilmesi</li>
            <li>Pazarlama faaliyetleri (onayınız dahilinde)</li>
            <li>Arşivleme ve kayıt saklama yükümlülüklerinin yerine getirilmesi</li>
          </ul>
        </>
      ),
    },
    {
      id: 'toplama-yontemi',
      title: '5. Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebepleri',
      content: (
        <>
          <p>
            <strong>Toplama Yöntemleri:</strong>
          </p>
          <p>
            Kişisel verileriniz, otomatik veya otomatik olmayan yöntemlerle, aşağıdaki kanallar
            aracılığıyla toplanmaktadır:
          </p>
          <ul>
            <li>Web sitesi iletişim formları</li>
            <li>E-posta yoluyla iletişim</li>
            <li>Telefon görüşmeleri</li>
            <li>Fiziksel başvurular (noter, ofis ziyareti)</li>
            <li>Tercüme için gönderilen belgeler</li>
            <li>Sosyal medya kanalları</li>
            <li>Çevrimiçi ödeme sistemleri</li>
            <li>Web sitesi çerezleri ve analitik araçlar</li>
          </ul>
          <p>
            <strong>Hukuki Sebepler:</strong>
          </p>
          <p>
            Kişisel verileriniz, KVKK'nın 5. ve 6. maddelerinde belirtilen aşağıdaki hukuki
            sebeplere dayanılarak işlenmektedir:
          </p>
          <ul>
            <li>Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması</li>
            <li>Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi için zorunlu olması</li>
            <li>İlgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla, veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması</li>
            <li>Açık rızanızın bulunması</li>
          </ul>
          <p>
            Özel nitelikli kişisel verileriniz ise yalnızca açık rızanız dahilinde veya
            kanunlarda öngörülen hallerde işlenmektedir.
          </p>
        </>
      ),
    },
    {
      id: 'veri-aktarimi',
      title: '6. Kişisel Verilerin Aktarılması',
      content: (
        <>
          <p>
            Kişisel verileriniz, KVKK'nın 8. ve 9. maddelerinde belirtilen şartlar dahilinde
            aşağıdaki kişi ve kuruluşlara aktarılabilmektedir:
          </p>
          <p>
            <strong>Yurt İçi Aktarımlar:</strong>
          </p>
          <ul>
            <li><strong>Çevirmenler:</strong> Tercüme hizmetlerinin sunulması amacıyla serbest çalışan profesyonel çevirmenlerle</li>
            <li><strong>Noterler:</strong> Yeminli tercüme belgelerinin onaylanması için</li>
            <li><strong>Kargo Şirketleri:</strong> Belgelerin teslimi için</li>
            <li><strong>Bankalar ve Ödeme Kuruluşları:</strong> Ödeme işlemlerinin gerçekleştirilmesi için</li>
            <li><strong>Hukuk Büroları:</strong> Hukuki süreçlerin yürütülmesi için</li>
            <li><strong>Denetim Firmaları:</strong> Mali ve hukuki denetim süreçlerinde</li>
            <li><strong>Bilgi Teknolojileri Hizmet Sağlayıcıları:</strong> Hosting, cloud hizmetleri, e-posta servisleri için</li>
            <li><strong>Resmi Kurumlar:</strong> Yasal yükümlülükler kapsamında (mahkemeler, icra daireleri, vergi daireleri vb.)</li>
          </ul>
          <p>
            <strong>Yurt Dışı Aktarımlar:</strong>
          </p>
          <p>
            Kişisel verileriniz, yeterli korumanın bulunduğu veya yeterli koruma olmasa dahi
            Türkiye'deki ve ilgili yabancı ülkedeki veri sorumlularının yeterli bir korumayı
            yazılı olarak taahhüt ettiği ve Kurul'un izninin bulunduğu yabancı ülkelere
            aktarılabilir. Bu kapsamda:
          </p>
          <ul>
            <li>Bulut hizmet sağlayıcılarının yurt dışı sunucularına</li>
            <li>Uluslararası ödeme sistemlerine</li>
            <li>Veri yedekleme ve güvenlik hizmetlerine</li>
          </ul>
          <p>
            Yurt dışı aktarımlar, KVKK'da öngörülen güvenlik şartlarına ve yöntemlere uygun
            olarak gerçekleştirilmektedir.
          </p>
          <p>
            <em>
              Tüm veri aktarımlarında, alıcı tarafların kişisel verileri koruma yükümlülüğü
              sözleşmelerle güvence altına alınmıştır.
            </em>
          </p>
        </>
      ),
    },
    {
      id: 'veri-saklama',
      title: '7. Kişisel Verilerin Saklanma Süresi',
      content: (
        <>
          <p>
            Kişisel verileriniz, işleme amaçlarının gerektirdiği süre boyunca ve ilgili
            mevzuatta öngörülen süreler boyunca saklanmaktadır:
          </p>
          <ul>
            <li>
              <strong>Sözleşme ve İşlem Kayıtları:</strong> Türk Ticaret Kanunu uyarınca 10 yıl
            </li>
            <li>
              <strong>Muhasebe ve Vergi Belgeleri:</strong> Vergi Usul Kanunu uyarınca 5-10 yıl
            </li>
            <li>
              <strong>İletişim Kayıtları:</strong> Hizmet ilişkisi süresince ve sonrasında 3 yıl
            </li>
            <li>
              <strong>Tercüme Projeleri:</strong> Kalite kontrol ve müşteri taleplerine cevap için 3 yıl
            </li>
            <li>
              <strong>Web Sitesi Logları:</strong> Bilgi güvenliği amaçlı 2 yıl
            </li>
            <li>
              <strong>Pazarlama İzinleri:</strong> İzin geri alınana veya işleme amacı ortadan kalkana kadar
            </li>
          </ul>
          <p>
            Saklama süreleri sona erdiğinde, kişisel verileriniz KVKK'nın 7. maddesinde
            öngörülen yöntemlerle silinir, yok edilir veya anonim hale getirilir.
          </p>
          <p>
            Yasal sürelerin dolmasından sonra bile, dava zamanaşımı veya kanıtlama
            gereklilikleri nedeniyle verilerinizin saklanması gerekebilir.
          </p>
        </>
      ),
    },
    {
      id: 'ilgili-kisi-haklari',
      title: '8. KVKK Kapsamındaki Haklarınız',
      content: (
        <>
          <p>
            KVKK'nın 11. maddesi uyarınca, ilgili kişi olarak aşağıdaki haklara sahipsiniz:
          </p>
          <ul>
            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
            <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme,</li>
            <li>Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
            <li>Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme,</li>
            <li>Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme,</li>
            <li>KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerinizin silinmesini veya yok edilmesini isteme,</li>
            <li>Düzeltme, silme veya yok etme işlemlerinin, kişisel verilerinizin aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
            <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme,</li>
            <li>Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme.</li>
          </ul>
        </>
      ),
    },
    {
      id: 'basvuru-yontemi',
      title: '9. Başvuru Yöntemi',
      content: (
        <>
          <p>
            KVKK'nın 13. maddesi uyarınca, yukarıda belirtilen haklarınızı kullanmak için
            talebinizi aşağıdaki yöntemlerle Şirketimize iletebilirsiniz:
          </p>
          <p>
            <strong>A) Yazılı Başvuru:</strong>
          </p>
          <p>
            İmzalı başvuru formunu veya dilekçenizi aşağıdaki adrese elden teslim edebilir
            veya noter aracılığıyla gönderebilirsiniz:
          </p>
          <p>
            Atlas Lisan Tercüme ve Danışmanlık Ltd. Şti.<br />
            KVKK Başvuruları<br />
            İstanbul, Türkiye
          </p>
          <p>
            <strong>B) Güvenli Elektronik İmza ile E-posta:</strong>
          </p>
          <p>
            Kayıtlı elektronik posta (KEP) adresinizden Şirketimizin KEP adresine başvurabilirsiniz:
          </p>
          <p>
            KEP Adresi: atlaslisan@hs03.kep.tr
          </p>
          <p>
            <strong>C) Web Sitesi Üzerinden:</strong>
          </p>
          <p>
            Web sitemizdeki başvuru formunu doldurarak başvurunuzu iletebilirsiniz.
            (Kimlik doğrulama gereklidir)
          </p>
          <p>
            <strong>Başvuru Gereksinimleri:</strong>
          </p>
          <ul>
            <li>Ad, soyad ve başvuru yazılı ise imza</li>
            <li>T.C. kimlik numarası (yabancılar için pasaport numarası)</li>
            <li>Tebligata esas yerleşim yeri veya iş yeri adresi</li>
            <li>Varsa e-posta adresi, telefon ve faks numarası</li>
            <li>Talep konusu</li>
            <li>Kimlik tespitine yarar belge fotokopisi</li>
          </ul>
          <p>
            <strong>Cevaplama Süresi:</strong>
          </p>
          <p>
            Başvurularınız, talebin niteliğine göre en kısa sürede ve en geç 30 (otuz) gün
            içinde ücretsiz olarak sonuçlandırılacaktır. Ancak, işlemin ayrıca bir maliyeti
            gerektirmesi hâlinde, Kişisel Verileri Koruma Kurulu tarafından belirlenen tarifedeki
            ücret alınabilir.
          </p>
          <p>
            Başvurunuzun olumsuz sonuçlanması, yanıtın yetersiz bulunması veya süresinde
            cevap verilmemesi hallerinde; yanıtın tebliğini izleyen 30 (otuz) gün içinde veya
            cevap verilmemişse başvuru tarihini izleyen 60 (altmış) gün içinde Kişisel Verileri
            Koruma Kurulu'na şikâyette bulunabilirsiniz.
          </p>
        </>
      ),
    },
    {
      id: 'iletisim-bilgileri',
      title: '10. İletişim Bilgileri',
      content: (
        <>
          <p>
            KVKK kapsamındaki haklarınızı kullanmak veya kişisel verilerinizle ilgili
            sorularınız için aşağıdaki iletişim bilgilerini kullanabilirsiniz:
          </p>
          <p>
            <strong>Atlas Lisan Tercüme ve Danışmanlık Ltd. Şti.</strong>
          </p>
          <ul>
            <li><strong>Adres:</strong> {contactData.address}</li>
            <li><strong>E-posta:</strong> {contactData.email}</li>
            <li><strong>Telefon:</strong> {contactData.phone}</li>
            <li><strong>KEP Adresi:</strong> atlaslisan@hs03.kep.tr</li>
            <li><strong>Web Sitesi:</strong> www.atlaslisan.com</li>
          </ul>
          <p>
            <strong>Kişisel Verileri Koruma Kurumu İletişim Bilgileri:</strong>
          </p>
          <ul>
            <li><strong>Web Sitesi:</strong> www.kvkk.gov.tr</li>
            <li><strong>E-posta:</strong> kvkk@kvkk.gov.tr</li>
            <li><strong>Telefon:</strong> 0 (312) 216 50 50</li>
          </ul>
          <p>
            <em>
              Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu ve
              ilgili mevzuat kapsamında 15 Ekim 2025 tarihinde hazırlanmış olup, yasal
              düzenlemeler veya iş süreçlerindeki değişiklikler doğrultusunda güncellenebilir.
            </em>
          </p>
        </>
      ),
    },
  ] as LegalSection[],
};
