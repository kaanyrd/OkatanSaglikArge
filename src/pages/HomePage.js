import React, { useEffect } from "react";
import classes from "./HomePage.module.css";
import { useNavigate } from "react-router-dom";
import InterpreterModeIcon from "@mui/icons-material/InterpreterMode";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsIcon from "@mui/icons-material/Settings";
import AdUnitsIcon from "@mui/icons-material/AdUnits";
import { useDispatch } from "react-redux";
import { barActions } from "../store/side-slice";
import { motion } from "framer-motion";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

function HomePage() {
  const navigation = useNavigate();

  const onTranslateHandler = () => {
    navigation("/services");
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(barActions.closeBar());
  }, [dispatch]);

  return (
    <div className={classes.content}>
      <div className={classes.banner}>
        <div className={classes.bannerContent}>
          <div className={classes.bannerTopContent}>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={classes.bannerText}
            >
              <h1>OKATAN SAĞLIK</h1>
            </motion.h1>
            <motion.h1
              className={classes.andItem}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              &
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={classes.bannerText}
            >
              <h1>ARGE</h1>
            </motion.h1>
          </div>
          <div className={classes.bannerBottomContent}>
            <h2>Daha fazlası için kaydır...</h2>
            <h1 className={classes.bottomArrow}>
              <KeyboardDoubleArrowDownIcon sx={{ fontSize: 50 }} />
            </h1>
          </div>
        </div>
      </div>
      <div className={classes.secondBanner}>
        <div className={classes.secondBannerContent}>
          <h1 className={classes.bannerTitle}>Biz Kimiz ?</h1>
          <div>
            <h2>
              <span className={classes.headSpace}>Türkiye’de</span> bilimsel
              araştırma ve geliştirme alanında katma değer üreten bir kurum
              olmak amacıyla Şubat 2020 tarihinde İstanbul Üniversitesi
              Cerrahpaşa Avcılar Yerleşkesi Teknokent Binasında çalışmalarına
              başlamıştır.
            </h2>
            <br />
            <br />
            <h2>
              <span className={classes.headSpace}>Sağlık </span>
              başta olmak üzere bilgisayar bilimleri(yazılım ve donanım) ve
              elektronik üzerine proje üretip araştırma ve geliştirme
              çalışmalarını sürdürmektedir. Araştırma ve geliştirmenin yanı sıra
              endüstriye bilimsel akreditasyon ve proje yönetimi ve
              oluşturulması konusunda da danışmanlık yapmaktadır.
            </h2>
          </div>
        </div>
      </div>
      <div className={classes.thirdBanner}>
        <div className={classes.thirdBannerContent}>
          <h1 className={classes.bannerTitle}>Hizmetlerimiz</h1>
          <div className={classes.services}>
            <div>
              <span>
                <InterpreterModeIcon className={classes.serviceIcon} />
              </span>
              <h2>Bilimsel Proje Danışmanlığı</h2>
            </div>
            <div>
              <span>
                <PsychologyIcon className={classes.serviceIcon} />
              </span>
              <h2>Akademik Akreditasyon Danışmanlığı</h2>
            </div>
            <div>
              <span>
                <SettingsIcon className={classes.serviceIcon} />
              </span>
              <h2>Araştırma Geliştirme Projeleri</h2>
            </div>
            <div>
              <span>
                <AdUnitsIcon className={classes.serviceIcon} />
              </span>
              <h2>Bilgi Teknolojileri Danışmanlığı</h2>
            </div>
          </div>
          <div className={classes.serviceLinkBtn}>
            <button onClick={onTranslateHandler}>Diğer Hizmetlerimiz</button>
          </div>
        </div>
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
