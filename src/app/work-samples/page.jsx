"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "./_page.module.scss";
import AOS from "aos";
import "../base/card.css";
import { WorkContext } from "../context/WorkSamplesContext";
import Image from "next/image";
import Footer from "../layout/Footer";

function WorkSamples() {

  const data = useContext(WorkContext);
  return (
    <>
      <main className={styles.container}>
        <h1 className={styles.title}>نمونه کار ها</h1>
        <section>
          <h1>کابینت ام دی اف</h1>
          <div class="cardContainer">
            {data[0][0].cabinetMDF.map((d) => {
              return (
                <div class="container" style={{ height: "350px" }} key={d.id}>
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
                      <Image
                        src={d.imageSrc}
                        width={1000}
                        height={230}
                        class="img"
                      />
                      <h1>{d.title}</h1>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section>
          <h1>کمد دیواری</h1>
          <div class="cardContainer">
            {data[0][1].closet.map((d) => {
              return (
                <div class="container" style={{ height: "350px" }} key={d.id}>
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
                      <Image
                        src={d.imageSrc}
                        width={1000}
                        height={230}
                        class="img"
                      />
                      <h1>{d.title}</h1>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section>
          <h1>کابینت ممبران آشپزخانه</h1>
          <div class="cardContainer">
            {data[0][2].cabinetMemberan.map((d) => {
              return (
                <div class="container" style={{ height: "350px" }} key={d.id}>
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
                      <Image
                        src={d.imageSrc}
                        width={1000}
                        height={230}
                        class="img"
                      />
                      <h1>{d.title}</h1>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section>
          <h1>ساخت انواع درب ساختمان</h1>
          <div class="cardContainer">
            {data[0][3].door.map((d) => {
              return (
                <div class="container" style={{ height: "350px" }} key={d.id}>
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
                      <Image
                        src={d.imageSrc}
                        width={1000}
                        height={230}
                        class="img"
                      />
                      <h1>{d.title}</h1>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section>
          <h1>ساخت انواع آینه کنسول</h1>
          <div class="cardContainer">
            {data[0][4].mirror.map((d) => {
              return (
                <div class="container" style={{ height: "350px" }} key={d.id}>
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
                      <Image
                        src={d.imageSrc}
                        width={1000}
                        height={230}
                        class="img"
                      />
                      <h1>{d.title}</h1>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section className={styles.stair}>
          <h1>طراحی انواع پله</h1>
          <div class="cardContainer">
            {data[0][5].stair.map((d) => {
              return (
                <div class="container" style={{ height: "350px" }} key={d.id}>
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
                      <Image
                        src={d.imageSrc}
                        width={1000}
                        height={230}
                        class="img"
                      />
                      <h1>{d.title}</h1>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default WorkSamples;
