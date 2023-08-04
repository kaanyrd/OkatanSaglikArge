import React from "react";
import classes from "./Contact.module.css";

function Contact() {
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
            <textarea />
          </div>
          <button type="submit">Gönder</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
