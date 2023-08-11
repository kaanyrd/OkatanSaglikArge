import React from "react";
import { Link, NavLink } from "react-router-dom";
import icon from "../Assets/OkatanArgeIcon.png";
import classes from "./MainNavigation.module.css";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { useDispatch } from "react-redux";
import { barActions } from "../store/side-slice";

function MainNavigation() {
  const dispatch = useDispatch();

  const onBarOpenHandler = () => {
    dispatch(barActions.openBar());
  };
  return (
    <div className={classes.navbar}>
      <div className={classes.navbarContent}>
        <Link to="/" className={classes.icon}>
          <img className={classes.iconSelf} src={icon} alt="icon" />
        </Link>
        <ul className={classes.links}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              OKATAN ARGE
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Hizmetlerimiz
            </NavLink>
          </li>
          <li>
            <NavLink
              to="aboutus"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Hakkımızda
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contact"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              İletişim
            </NavLink>
          </li>
        </ul>
        <div onClick={onBarOpenHandler} className={classes.barButton}>
          <DehazeIcon className={classes.barButtonSelf} />
        </div>
      </div>
    </div>
  );
}

export default MainNavigation;
