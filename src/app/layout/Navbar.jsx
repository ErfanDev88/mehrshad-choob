"use client";
import React, { useEffect } from "react";
import styles from "./_Navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/logo.png";
import AOS from "aos";
import '../base/hamburgerMenu.css'

function Navbar() {
  useEffect(function () {
    AOS.init({ duration: 900 });
  }, []);
  return (
    <>
      <div className={styles.responsiveNav}>
        <div className={styles.title} data-aos="fade-left">
          <Image src={logo} width={60} />
          <div>
            <h1>صنایع چوب مهرشاد</h1>
          </div>
        </div>
        <label class="hamburger">
          <input type="checkbox" />
          <svg viewBox="0 0 32 32">
            <path
              class="line line-top-bottom"
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            ></path>
            <path class="line" d="M7 16 27 16"></path>
          </svg>
        </label>
      </div>
      <nav className={styles.navbar}>
        <div className={styles.title} data-aos="fade-left">
          <Image src={logo} width={80} />
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
    </>
  );
}

export default Navbar;
