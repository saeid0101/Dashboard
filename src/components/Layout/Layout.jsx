import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import styles from "./layout.module.scss";
import Footer from "../footer/Footer";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

import { useState } from "react";
function Layout() {
  const [showSidePanel, setShowSidePanel] = useState(true);

  const handleClick = () => {
    setShowSidePanel(!showSidePanel);
  };
  const handleMenuClick = () => {
    if (window.innerWidth <= 500) {
      setShowSidePanel(false);
    }
  };
  return (
    <div className={styles.main}>
      <div
        className={`${styles.menuContainer} ${
          showSidePanel ? "" : styles.menuClose
        }`}
        onClick={handleMenuClick}
      >
        <Sidebar />
      </div>
      <div className={styles.menuBtn} onClick={handleClick}>
        <MdOutlineKeyboardDoubleArrowLeft />
      </div>

      <div
        className={`${styles.contentSection} ${
          showSidePanel ? "" : styles.menuClose
        }`}
      >
        <div className={styles.Navbar}>
          <Navbar />
        </div>
        <div className={styles.content}>
          <Outlet />
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;
