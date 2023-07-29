import React from "react";
import { NavLink } from "react-router-dom";
import icon from "../Assets/OkatanArgeIcon.png";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <div className={classes.navbar}>
      <div className={classes.navbarContent}>
        <div className={classes.icon}>
          <img className={classes.iconSelf} src={icon} alt="icon" />
        </div>
        <ul className={classes.links}>
          <li>
            <NavLink to="/" end>
              OKATAN ARGE
            </NavLink>
          </li>
          <li>
            <NavLink to="/services">Hizmetlerimiz</NavLink>
          </li>
          <li>
            <NavLink to="aboutus">Hakkımızda</NavLink>
          </li>
          <li>
            <NavLink to="contact">İletişim</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainNavigation;
