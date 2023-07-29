import React from "react";
import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <Outlet />
      <Footer />
    </>
  );
}

export default RootLayout;
