import React from "react";
import ReactDOM from "react-dom";
import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import classes from "./RootLayout.module.css";
import SideBar from "../components/SideBar";
import { useSelector } from "react-redux";

function RootLayout() {
  const sideBar = useSelector((state) => state.sideBar.bar);
  console.log(sideBar);

  return (
    <>
      {sideBar && (
        <div>
          {ReactDOM.createPortal(
            <div>
              <SideBar />
            </div>,
            document.getElementById("sidebar")
          )}
        </div>
      )}
      <MainNavigation />
      <main>
        <main className={classes.main}>
          <Outlet />
        </main>
        <Footer />
      </main>
    </>
  );
}

export default RootLayout;
