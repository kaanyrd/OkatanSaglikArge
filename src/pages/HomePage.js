import React from "react";
import classes from "./HomePage.module.css";
import { Link } from "react-router-dom";
import InterpreterModeIcon from "@mui/icons-material/InterpreterMode";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsIcon from "@mui/icons-material/Settings";
import AdUnitsIcon from "@mui/icons-material/AdUnits";

function HomePage() {
  return (
    <div className={classes.content}>
      <div className={classes.banner}></div>
      <div className={classes.secondBanner}>
        <h2>Biz Kimiz ?</h2>
        <div>
          <p>
            Türkiye’de bilimsel araştırma ve geliştirme alanında katma değer
            üreten bir kurum olmak amacıyla Şubat 2020 tarihinde İstanbul
            Üniversitesi Cerrahpaşa Avcılar Yerleşkesi Teknokent Binasında
            çalışmalarına başlamıştır.
          </p>
          <p>
            Sağlık başta olmak üzere bilgisayar bilimleri(yazılım ve donanım) ve
            elektronik üzerine proje üretip araştırma ve geliştirme
            çalışmalarını sürdürmektedir. Araştırma ve geliştirmenin yanı sıra
            endüstriye bilimsel akreditasyon ve proje yönetimi ve oluşturulması
            konusunda da danışmanlık yapmaktadır.
          </p>
        </div>
      </div>
      <div className={classes.thirdBanner}>
        <div>
          <span>
            <span>
              <InterpreterModeIcon />
            </span>
            <h2>Bilimsel Proje Danışmanlığı</h2>
          </span>
          <span>
            <span>
              <PsychologyIcon />
            </span>
            <h2>Bilimsel Proje Danışmanlığı</h2>
          </span>
          <span>
            <span>
              <SettingsIcon />
            </span>
            <h2>Bilimsel Proje Danışmanlığı</h2>
          </span>
          <span>
            <span>
              <AdUnitsIcon />
            </span>
            <h2>Bilimsel Proje Danışmanlığı</h2>
          </span>
        </div>
        <Link to="/services">Hizmetlerimiz</Link>
      </div>
      <div className={classes.isBirliklerimiz}>
        <div className={classes.isBirliklerimizContent}>
          <h1>İş Birliklerimiz</h1>
          <div className={classes.icons}>
            <div>
              <img
                className={classes.icon}
                src="https://static.wixstatic.com/media/05e9b5_a8b59bfdf381466aaf2ef8642528765c~mv2.png/v1/fill/w_224,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Ortadogu%2B.png"
                alt="icon"
              />
            </div>
            <div>
              <img
                className={classes.icon}
                src="https://static.wixstatic.com/media/05e9b5_28c70a1d522547f1905954b2a00c6110~mv2.png/v1/fill/w_231,h_90,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/akademillogo300dp%2B.png"
                alt="icon"
              />
            </div>
            <div>
              <img
                className={classes.icon}
                src="https://static.wixstatic.com/media/05e9b5_2d050ae9bc9b4360b4d8093df17d4bd3~mv2.png/v1/fill/w_146,h_110,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/denizler-logo%2B.png"
                alt="icon"
              />
            </div>
            <div>
              <img
                className={classes.icon}
                src="https://static.wixstatic.com/media/05e9b5_cdeeb6d9c87c420a89568d316b581e94~mv2.png/v1/crop/x_0,y_0,w_131,h_85/fill/w_183,h_119,al_c,lg_1,q_85,enc_auto/Safa%2B.png"
                alt="icon"
              />
            </div>
            <div>
              <img
                className={classes.icon}
                src="https://static.wixstatic.com/media/05e9b5_c170b928769643dca81d5df19f04c323~mv2.png/v1/fill/w_224,h_63,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/%C3%9Cmit%2B.png"
                alt="icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
