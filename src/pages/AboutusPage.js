import React, { useEffect } from "react";
import classes from "./AboutPage.module.css";
import { useDispatch } from "react-redux";
import { barActions } from "../store/side-slice";

function AboutusPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(barActions.closeBar());
  }, [dispatch]);

  return (
    <div className={classes.about}>
      <div className={classes.aboutContent}>
        <div className={classes.about1}>
          <h1 className={classes.aboutUsTitle}>Hakkımızda</h1>
          <div className={classes.pSide}>
            <div className={classes.pContent}>
              <h2 className={classes.p}>
                <span className={classes.firstLetter}>Türkiye’de</span> bilimsel
                araştırma ve geliştirme alanında katma değer üreten bir kurum
                olmak amacıyla Şubat 2020 tarihinde İstanbul Üniversitesi
                Cerrahpaşa Avcılar Yerleşkesi Teknokent Binasında çalışmalarına
                başlamıştır.
              </h2>{" "}
              ​ <br />
              ​ <br />
              <h2 className={classes.p}>
                <span className={classes.firstLetter}>Sağlık</span> başta olmak
                üzere bilgisayar bilimleri (yazılım ve donanım) ve elektronik
                üzerine proje üretip araştırma ve geliştirme çalışmalarını
                sürdürmektedir. Araştırma ve geliştirmenin yanı sıra endüstriye
                bilimsel akreditasyon ve proje yönetimi ve oluşturulması
                konusunda da danışmanlık yapmaktadır.
              </h2>
            </div>
            <div className={classes.imgSide}>
              <img
                className={classes.imgSelf}
                src="https://static.wixstatic.com/media/c837a6_bb5b3c8a1cd442e1b35892348cae6a69~mv2.jpg/v1/fill/w_658,h_636,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/shutterstock_1672982068%20copy.jpg"
                alt="img"
              />
            </div>
          </div>
        </div>
        <div className={classes.about2}>
          <div className={classes.VisMis}>
            <div className={classes.vision}>
              <h1>Misyonumuz:</h1>
              <p>
                En güzel teknolojileri iş ortaklarımızın hizmetine sunmak ve
                sürekli olarak yeni teknoloji geliştirmeye yatırım yapmaktadır.
              </p>
            </div>
            <div className={classes.mision}>
              <h1>Vizyonumuz:</h1>
              <p>
                Tüm insanlık için olumlu katma değer sağlayan ürünleri ve
                hizmetleri geliştiren, dünya biliminde fark yaratan, yenilikçi
                teknoloji araştırma ve geliştirme kurumu olmaktır.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutusPage;
