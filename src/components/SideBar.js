import React from "react";
import classes from "./SideBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { barActions } from "../store/side-slice";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

function SideBar() {
  const dispatch = useDispatch();
  const sideBar = useSelector((state) => state.sideBar.bar);
  console.log(sideBar);

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
            <Link to="/">Ana Sayfa</Link>
          </li>
          <li>
            <Link to="/services">Hizmetlerimiz</Link>
          </li>
          <li>
            <Link to="/aboutus">Hakkımızda</Link>
          </li>
          <li>
            <Link to="/contact">İletişim</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
