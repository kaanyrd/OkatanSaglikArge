import React from "react";
import classes from "./SideBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { barActions } from "../store/side-slice";
import { NavLink } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

function SideBar() {
  const dispatch = useDispatch();
  const sideBarHandler = useSelector((state) => state.sideBar.bar);
  console.log(sideBarHandler);

  const onBarCloseHandler = () => {
    dispatch(barActions.closeBar());
  };

  return (
    <div className={classes.sideBar}>
      <div className={classes.sideBarContent}>
        <div onClick={onBarCloseHandler} className={classes.closeIcon}>
          <CloseIcon />
        </div>
        <ul className={classes.links}>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : "undefined"
              }
              to="/"
            >
              Ana Sayfa
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : "undefined"
              }
              to="/services"
            >
              Hizmetlerimiz
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : "undefined"
              }
              to="/aboutus"
            >
              Hakkımızda
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : "undefined"
              }
              to="/contact"
            >
              İletişim
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
