import React, { useEffect } from "react";
import classes from "./ServicesPage.module.css";
import { useDispatch } from "react-redux";
import { barActions } from "../store/side-slice";

function ServicesPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(barActions.closeBar());
  }, [dispatch]);

  return (
    <div className={classes.services}>
      <h1>Hizmetlerimiz</h1>
      <div className={classes.servicesContent}>
        <div className={classes.service}>
          <h1>Bilimsel Proje Danışmanlığı</h1>
          <p>
            {" "}
            <span className={classes.firstLetter}>Ülkemizde</span> KOSGEB,
            Türkiye Teknoloji Geliştirme Vakfı (TTGV), TÜBİTAK – TEYDEB, Bilim,
            Sanayi ve Teknoloji Bakanlığı, Enerji ve Tabi Kaynaklar Bakanlığı,
            Kalkınma Bakanlığı gibi başlıca kurumlar bilimsel niteliği olan ve
            katma değer yaratacak projelere destek vermektedir.
          </p>
          <br />
          <p>
            <span className={classes.firstLetter}>Destek</span> veren ilgili
            kurumlardan destek alabilmek için bilimsel projelerin kabulü
            gereklidir. Projelerin kabul edilmesi için belli noktalara dikkat
            edilmesi ve bilimsel bir yapıyla hazırlanması gerekir. OKATAN SAĞLIK
            ARGE akademik ve uygulamalı pek çok projeyi hazırlamış ve yönetmiş
            deneyimli bir kadroyla bilimsel proje hazırlamanıza danışmanlık
            yapmaktadır.
          </p>
        </div>
        <div className={classes.service}>
          <h1>Akreditasyon</h1>
          <p>
            <p className={classes.acreditationTitle}>
              - ABET (Accreditation Board for Engineering and Technology) Nedir?
            </p>
            <span className={classes.firstLetter}>ABET,</span>
            Uygulamalı bilimler, doğa bilimleri, bilgi işlem, mühendislik ve
            mühendislik teknolojisi programlarını akredite eden, kar amacı
            gütmeyen bir sivil toplum kuruluşudur. ABET akreditasyonu, bir kolej
            veya üniversite programının, o programın mezunlarını hazırladığı
            mesleğin kalite standartlarını karşıladığının güvencesini sağlar.
            Kurumları değil programları akredite eder.
          </p>
          <br />
          <p>
            <span className={classes.firstLetter}>Dünya</span> çapında ulusal
            veya bölgesel kurumsal akreditasyon ajansları veya ulusal eğitim
            yetkilileri tarafından halihazırda tanınan derece veren kurumlarda
            lise sonrası programlar için özel akreditasyon sağlar. Akreditasyonu
            gönüllüdür ve bugüne kadar 41 ülkedeki 850 kolej ve üniversitede
            4.361 program ABET akreditasyonu almıştır. Her yıl 175.000'den fazla
            öğrenci ABET tarafından akredite edilmiş programlardan mezun
            olmaktadır ve milyonlarca mezun, 1932'den beri ABET tarafından
            akredite edilmiş programlardan dereceler almıştır. ​
          </p>
          <br />
          <div>
            <p>Neden Önemli?</p>
            <br />
            <p>
              ABET akreditasyon inceleme süreci yoğun bir ekip çalışmasıdır.
              Süreç veri ve içgörü sağladığı için; öğrencilerinize en iyi eğitim
              deneyimini sunmak için kullanılabilir.
            </p>
          </div>
          <br />
          <div>
            <h4 className={classes.abetTitle}>
              <em>
                ABET akreditasyonu, programınız hakkında şunları belirtir:
              </em>
            </h4>
            <br />
            <ul className={classes.list}>
              <li>Programınız 'uluslararası tanınırlığını' kazanmıştır.</li>
              <li>
                Öğrencilerinizin eğitim deneyiminin, mesleklerindeki teknik
                eğitim için küresel standardı karşıladığını doğrular.
              </li>
              <li>
                Öğrencilerinizin İstihdam fırsatlarını artırır çok uluslu
                şirketlerde çalışmak genelde akredite bir programdan mezun
                olmayı gerektirir.
              </li>
              <li>
                Öğrencilerinizin lisans, kayıt ve sertifikasyon yoluyla teknik
                bir mesleğe girişini destekler- bunların tümü genellikle asgari
                yeterlilik olarak ABET tarafından akredite edilmiş bir
                programdan mezun olmayı gerektirir.{" "}
              </li>
              <li>
                Öğrencilerinizin birçok federal öğrenci kredisi, hibesi ve/veya
                bursu için uygunluğunu belirler.{" "}
              </li>
              <li>
                ABET akreditasyonu uluslararası anlaşmalarla dünya çapında kabul
                edildiğinden ve diğer birçok ülkenin ulusal akreditasyon
                sistemleri ABET modeline dayandığından, küresel olarak
                çalışmanızın yolunu açar.{" "}
              </li>
              <li> Eğitimde “en iyi uygulamaları” teşvik eder.</li>
              <li>
                Fakülte ve personeli doğrudan öz değerlendirme ve sürekli kalite
                iyileştirme süreçlerine dahil eder.
              </li>
              <li>“Öğretme girdileri” yerine “öğrenme çıktılarına” dayanır.</li>
              <li>
                {" "}
                Transfer kredilerinin kabul edilebilirliğini daha kolay
                belirleyebilir.{" "}
              </li>
              <li>
                Mezunlarınızın mesleğe girmek için gerekli eğitim şartlarını
                yerine getirmelerini sağlar.
              </li>
              <li>
                Endüstrinin eğitim sürecini mevcut ve gelecekteki ihtiyaçları
                yansıtacak şekilde yönlendirmesi için fırsatlar sağlar.
              </li>
              <li>Profesyonellerin hareketliliğini artırır.</li>
            </ul>
            <p>
              <span className={classes.okatansaglikarge}>
                OKATAN SAĞLIK ARGE
              </span>{" "}
              daha önce ABET Akreditasyonu çalışmalarında yönetim göstermiş ve
              bu akreditasyonu kazandırmış deneyimli bir kadroya sahiptir ve bu
              alanda danışmanlık vermektedir.
            </p>
          </div>
        </div>
        <div className={classes.service}>
          <p className={classes.okatansaglikargeP}>
            <span className={classes.okatansaglikarge}>
              - OKATAN SAĞLIK ARGE
            </span>{" "}
            sağlık teknolojisine yepyeni bir bakış açısı getirmeye yönelik
            çalışmalarına devam etmektedir. Çalışmalar yazılım ve donanım
            ürünlerini içermektedir.
          </p>
          <p className={classes.okatansaglikargeP}>
            <span className={classes.okatansaglikarge}>
              - OKATAN SAĞLIK ARGE
            </span>{" "}
            sadece sağlık sektöründe değil tüm sektörlerin otomasyon çözümleri
            üzerine çalışmalarına devam etmektedir.
          </p>
          <p className={classes.okatansaglikargeP}>
            <span className={classes.okatansaglikarge}>
              - OKATAN SAĞLIK ARGE
            </span>{" "}
            sektörlerin gereksinimlerine özel cihaz tasarlayıp üretebilmektedir.
            ​
          </p>
          <p>
            {" "}
            <span className={classes.firstLetter}>Medikal</span> X-ray Dijital
            Görüntüleme Sistemlerine yeni bakış açısı ile hizmetinizdeyiz.
            OKATAN SAĞLIK ARGE tıp sektöründe görüntüleme cihazları üzerine
            yepyeni bir bakış açısı getirmeye yönelik çalışmalarına devam
            etmektedir.
          </p>
        </div>
        <div className={classes.service}>
          <h1>Bilgi Teknolojileri Danışmanlığı</h1>
          <p className={classes.okatansaglikargeP}>
            {" "}
            <span className={classes.firstLetter}>OKATAN</span> SAĞLIK ARGE
            Bilgi Teknolojileri alanında uluslararası büyük bir projeleri
            yönetmiş deneyimli bir kadroya sahiptir. Bu kadro hem akademik hem
            de uygulamalı projelerin yönetimi ve danışmanlığını yürütmüştür.
            Deneyimli kadrosuyla yazılım, dijital dönüşüm ve donanım
            projelerinde danışmanlık vermektedir.
          </p>
          <div>
            <p className={classes.okatansaglikargeP}>
              <span className={classes.firstLetter}>OKATAN</span> SAĞLIK
              ARGE’nin bilgi teknolojileri alanındaki çalışmaları aynı zamanda
              uçtan uca bilgi teknolojileri çözümlerini de içermektedir:
            </p>
            <ul className={classes.list}>
              <li>Kurumların gereksinimlerinin analiz edilmesi,</li>
              <li>Çözümün mimarisinin hazırlanması,</li>
              <li>Projelendirilip proje planının hazırlanması,</li>
              <li>Yazılım ve test süreçlerinin tamamlanması,</li>
              <li>Projenin yönetilmesi.</li>
            </ul>
            <p>Tüm bu süreçler OKATAN SAĞLIK ARGE tarafından tamamlanır.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
