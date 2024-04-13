"use client";
import React, { useEffect, useState } from "react";
import styles from "./_Navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/logo.png";
import AOS from "aos";
import "../base/hamburgerMenu.css";
import OverlayMenu from "./OverlayMenu";

function Navbar() {
  const [isOverlayMenuOpened, setIsOverlayMenuOpened] = useState(false);
  const handleMenuClick = (e) => {
    e.target.classList.toggle("opened");
    e.target.setAttribute(
      "aria-expanded",
      e.target.classList.contains("opened")
    );
    setIsOverlayMenuOpened(!isOverlayMenuOpened);
  };

  useEffect(function () {
    AOS.init({ duration: 900 });
  }, []);
  return (
    <>
      <div className={styles.responsiveNav}>
        <div className={styles.title} data-aos="fade-left">
          <Image alt="صنایع چوب مهرشاد" src={logo} width={60} />
          <div>
            <h1>صنایع چوب مهرشاد</h1>
          </div>
        </div>
        <button class="menu" onClick={handleMenuClick} aria-label="Main Menu">
          <svg width="50" height="50" viewBox="0 0 100 100">
            <path
              class={"line line1"}
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path class={"line line2"} d="M 20,50 H 80" />
            <path
              class={"line line3"}
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
        </button>
      </div>
      <nav className={styles.navbar}>
        <div className={styles.title} data-aos="fade-left">
          <Image alt="صنایع چوب مهرشاد" src={logo} width={80} />
          <div>
            <h1>صنایع چوب مهرشاد</h1>
            <span>ساخت کابینت در تهران و کرج</span>
          </div>
        </div>
        <ul className={styles.navigation} data-aos="fade-right">
          <Link className={styles.link} href={"/"}>
            صفحه اصلی
          </Link>
          <Link className={styles.link} href={"/work-samples"}>
            نمونه کار ها
          </Link>
          <Link className={styles.link} href={"/#services"}>
            خدمات
          </Link>
          <Link className={styles.link} href={"/contact-us"}>
            ارتباط با ما
          </Link>
        </ul>
      </nav>
      {isOverlayMenuOpened ? <OverlayMenu setState={setIsOverlayMenuOpened} state={isOverlayMenuOpened} /> : ""}
    </>
  );
}

export default Navbar;
