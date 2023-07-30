import React from "react";
import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import classes from "./RootLayout.module.css";

function RootLayout() {
  return (
    <>
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
