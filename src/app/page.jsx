"use client";
import styles from "./page.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Btn from "./components/Btn";

export default function Home() {
  useEffect(function () {
    AOS.init({ duration: 900 });
  }, []);
  return (
    <main className={styles.container}>
      <section className={styles.hero} data-aos="zoom-in">
        <h1 data-text="صنایع چوب مهرشاد">صنایع چوب مهرشاد</h1>
        <p>
          ساخت و نصب انواع کابینت, درب و دکوراسیون داخلی و سیستم آشپزخانه با
          بهترین کیفیت
        </p>
        <p>برای مشاوره و سفارش همین حالا با ما تماس بگیرید!</p>
        <Btn
          title={"تماس با ما"}
          href={""}
          textColor={"#fff"}
          textShadow={"1px 1px 3px #000"}
          border={"1px solid #fff"}
        />
        <canvas id="stars" width="300" height="300"></canvas>
      </section>
      cdscds
    </main>
  );
}
