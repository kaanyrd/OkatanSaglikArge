import React, { useEffect } from "react";
import classes from "./Contact.module.css";
import { barActions } from "../store/side-slice";
import { useDispatch } from "react-redux";

function Contact() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(barActions.closeBar());
  }, [dispatch]);

  return (
    <div className={classes.content}>
      <h1>Bizimle İletişime Geçin</h1>
      <div className={classes.contactContent}>
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
      </div>
    </div>
  );
}

export default Contact;
