"use client";
import React, { useEffect } from "react";
import styles from "./_Navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/logo.png";
import AOS from "aos";

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
        menu
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
          <Link className={styles.link} href={"#services"}>
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
