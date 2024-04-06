import React from "react";
import styles from "./_Navbar.module.scss";
import Image from "next/image";
import Link from 'next/link'
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
        <Link className={styles.link} href={''}>صفحه اصلی</Link>
        <Link className={styles.link} href={''}>نمونه کار ها</Link>
        <Link className={styles.link} href={'#services'}>خدمات</Link>
        <Link className={styles.link} href={''}>ارتباط با ما</Link>
      </ul>
    </nav>
  );
}

export default Navbar;
