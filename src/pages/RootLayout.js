import React from "react";
import ReactDOM from "react-dom";
import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import classes from "./RootLayout.module.css";
import SideBar from "../components/SideBar";
import { useSelector } from "react-redux";
import ScrollToTop from "../UI/ScrollToTop";
import { motion, AnimatePresence } from "framer-motion";

function RootLayout() {
  const sideBar = useSelector((state) => state.sideBar.bar);
  console.log(`Root içerisi: ${sideBar}`);

  return (
    <>
      <AnimatePresence>
        {sideBar && (
          <div>
            {ReactDOM.createPortal(
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <SideBar />
              </motion.div>,
              document.getElementById("sidebar")
            )}
          </div>
        )}
      </AnimatePresence>
      <main>
        <MainNavigation />
        <main className={classes.main}>
          <ScrollToTop />
          <Outlet />
        </main>
        <Footer />
      </main>
    </>
  );
}

export default RootLayout;
