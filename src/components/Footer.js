import React from "react";
import classes from "./Footer.module.css";
import { useNavigate } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  const navigate = useNavigate();
  const contactNavigateHandler = () => {
    navigate("/contact");
    window.scrollTo(0, 0);
  };

  return (
    <div className={classes.footer}>
      <div className={classes.footerContent}>
        <div className={classes.topSide}>
          <div className={classes.topLeftSide}>
            <h2>Bizi Takip Edin</h2>
            <div className={classes.socials}>
              <a target="blank" href="https://www.facebook.com/okatanarge">
                Facebook
              </a>
              <a
                target="blank"
                href="https://www.linkedin.com/company/okatanarge/"
              >
                Linkedin
              </a>
              <a target="blank" href="https://www.instagram.com/okatanarge/">
                Instagram
              </a>
              <a
                className={classes.mailToBtn}
                href="mailto:info@okatanarge.com?subject=Selamlar Ali Okatan%20!"
              >
                Mail Gönder
              </a>
            </div>
          </div>
          <div className={classes.topRightSide}>
            <div className={classes.adress}>
              <h2>Adres</h2>
              <h3>
                İstanbul Aydın Üniversitesi Tekmer Beşyol Mah. İnönü Cd. No: 38
                D Blok 34295 Küçükçekmece / İSTANBUL
              </h3>
              <div className={classes.contactSide}>
                <div className={classes.contactBtn}>
                  <button onClick={contactNavigateHandler}>İletişim</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.divider}></div>
        <div className={classes.bottomSide}>
          <p>
            &copy; {currentYear} by OKATAN ARGE. Proudly created by{" "}
            <p className={classes.developer}>
              <b>KAAN YARDIMCI</b>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
