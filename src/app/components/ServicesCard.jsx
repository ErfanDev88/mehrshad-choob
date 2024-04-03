"use client";
import React, { useState } from "react";
import "../base/card.css";
import Image from "next/image";
import firstServiceImage from "../../../public/assets/firstServiceImage.jpg";
import secondServiceImage from "../../../public/assets/secondServiceImage.jpg";
import thirdServiceImage from "../../../public/assets/thirdServiceImage.jpg";
import forthServiceImage from "../../../public/assets/forthServiceImage.jpg";
import fifthServiceImage from "../../../public/assets/fifthServiceImage.jpg";
import sixthServiceImage from "../../../public/assets/sixthServiceImage.jpg";

function ServicesCard() {
  const [data, setData] = useState([
    {
      imageSrc: firstServiceImage,
      title: "ساخت انواع کمد دیواری",
      description:
        "  طراحی و ساخت کمد دیواری | قیمت کمد دیواری در تهران و کرج ",
    },
    {
      imageSrc: secondServiceImage,
      title: "کابینت ممبران",
      description:
        "کابینت آشپزخانه ممبران یکی از لوکس ترین و جذاب ترین انواع کابینت آشپزخانه به حساب",
    },
    {
      imageSrc: thirdServiceImage,
      title: "طراحی و ساخت انواع درب",
      description: "  طراحی و ساخت درب | قیمت درب در تهران و کرج",
    },
    {
      imageSrc: forthServiceImage,
      title: "ساخت آینه کنسول",
      description: "طراحی و ساخت انواع آینه کنسول با بهترین کیفیت",
    },
    {
      imageSrc: fifthServiceImage,
      title: "ساخت و تولید انواع پله",
      description: "طراحی و تولید انواع پله شیک",
    },
    {
      imageSrc: sixthServiceImage,
      title: "کابینت ام دی اف",
      description: "از جمله خدمات صنایع چوب مهرشاد در تهران و کرج ساخت انواع کابینت mdf است.از جمله موارد مهم",
    },
  ]);

  return (
    <div class="cardContainer">
      {data.map((d) => {
        return (
          <div class="container">
            <div class="canvas">
              <div class="tracker tr-1"></div>
              <div class="tracker tr-2"></div>
              <div class="tracker tr-3"></div>
              <div class="tracker tr-4"></div>
              <div class="tracker tr-5"></div>
              <div class="tracker tr-6"></div>
              <div class="tracker tr-7"></div>
              <div class="tracker tr-8"></div>
              <div class="tracker tr-9"></div>
              <div class="tracker tr-10"></div>
              <div class="tracker tr-11"></div>
              <div class="tracker tr-12"></div>
              <div class="tracker tr-13"></div>
              <div class="tracker tr-14"></div>
              <div class="tracker tr-15"></div>
              <div class="tracker tr-16"></div>
              <div class="tracker tr-17"></div>
              <div class="tracker tr-18"></div>
              <div class="tracker tr-19"></div>
              <div class="tracker tr-20"></div>
              <div class="tracker tr-21"></div>
              <div class="tracker tr-22"></div>
              <div class="tracker tr-23"></div>
              <div class="tracker tr-24"></div>
              <div class="tracker tr-25"></div>
              <div id="card">
                <Image key={d.key} src={d.imageSrc} width={1000} height={230} class="img" />
                <h1 key={d.key}>{d.title}</h1>
                <p key={d.key}>{d.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ServicesCard;
