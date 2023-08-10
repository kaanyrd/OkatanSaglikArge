import React, { useEffect } from "react";
import classes from "./Contact.module.css";
import { barActions } from "../store/side-slice";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

function Contact() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(barActions.closeBar());
  }, [dispatch]);

  return (
    <div className={classes.content}>
      <motion.h1
        initial={({ opacity: 0 }, { x: "-5%" })}
        animate={({ opacity: 1 }, { x: "0%" })}
      >
        Bizimle İletişime Geçin
      </motion.h1>
      <motion.div
        initial={({ opacity: 0 }, { y: "1%" })}
        animate={({ opacity: 1 }, { y: "0%" })}
        className={classes.contactContent}
      >
        <form className={classes.form}>
          <div className={classes.formControl}>
            <label>İsim</label>
            <input />
          </div>
          <div className={classes.formControl}>
            <label>Soyisim</label>
            <input />
          </div>
          <div className={classes.formControl}>
            <label>E-mail *</label>
            <input />
          </div>
          <div className={classes.formControl}>
            <label>Telefon</label>
            <input />
          </div>
          <div className={classes.formControl}>
            <label>Meslek</label>
            <input />
          </div>
          <div className={classes.formControl}>
            <label>Konu</label>
            <input />
          </div>
          <div className={classes.formControl}>
            <label>Mesajınızı buraya yazınız...</label>
            <textarea maxLength="300" className={classes.textArea} />
          </div>
          <button className={classes.submitBtn} type="submit">
            Gönder
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default Contact;
