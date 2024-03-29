import React from "react";
import styles from "./_Navbar.module.scss";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.title} data-aos="fade-left">
        <h1>صنایع چوب مهرشاد</h1>
        <span>ساخت کابینت در تهران و کرج</span>
      </div>
      <ul className={styles.navigation} data-aos="fade-right">
        <li>صفحه اصلی</li>
        <li>خدمات</li>
        <li>درباره ما</li>
        <li>ارتباط با ما</li>
      </ul>
    </nav>
  );
}

export default Navbar;
