import React from "react";
import classes from "./SideBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { barActions } from "../store/side-slice";

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
        <h1>Here is the sidebar</h1>
        <button onClick={onBarCloseHandler}>X</button>
      </div>
    </div>
  );
}

export default SideBar;
