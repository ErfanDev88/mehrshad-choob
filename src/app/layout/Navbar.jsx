import React from "react";
import styles from "./_Navbar.module.scss";
import Image from "next/image";
import logo from "../../../public/assets/logo.png";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.title} data-aos="fade-left">
        <Image src={logo} width={80} />
        <div>
          <h1>صنایع چوب مهرشاد</h1>
          <span>ساخت کابینت در تهران و کرج</span>
        </div>
      </div>
      <ul className={styles.navigation} data-aos="fade-right">
        <li>صفحه اصلی</li>
        <li>نمونه کار ها</li>
        <li>درباره ما</li>
        <li>ارتباط با ما</li>
      </ul>
    </nav>
  );
}

export default Navbar;
