"use client";
import React, { useEffect, useState } from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import styles from "@/styles/section-css/northprim/Slider.module.css";

function Slider() {
  const [options, setOptions] = useState({});
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth <= 900) {
        console.log("yes");
        setOptions({
          fixedWidth: "100%",
          speed: 2000,
          gap: 100,
          perPage: 1,
          type: "loop",
          perMove: 1,
          focus: "center",
          arrows: false,
          autoplay: true,
          interval: 4000,
          pauseOnHover: false,
          easing: "ease-in-out",
          pagination: false,
          omitEnd: true,
          trimSpace: "move",
        });
      } else {
        setOptions({
          fixedWidth: "35%",
          speed: 2000,
          gap: 100,
          perPage: 3,
          type: "loop",
          perMove: 1,
          focus: "center",
          arrows: false,
          autoplay: true,
          interval: 4000,
          pauseOnHover: false,
          easing: "ease-in-out",
          pagination: false,
          omitEnd: true,
          trimSpace: "move",
        });
      }
    }
  }, []);

  return (
    <div className={styles.Slider}>
      <div className={styles.stripe}></div>
      <Splide aria-label="Northprim Merch Slider" options={options}>
        <SplideSlide>
          <Image
            width={650}
            height={800}
            src="/images/northprim/1.png"
            alt="Shirt 1"
            className={styles.shirt}
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            width={650}
            height={800}
            src="/images/northprim/2.png"
            alt="Shirt 2"
            className={styles.shirt}
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            width={650}
            height={800}
            src="/images/northprim/3.png"
            alt="Shirt 3"
            className={styles.shirt}
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            width={650}
            height={800}
            src="/images/northprim/4.png"
            alt="Shirt 4"
            className={styles.shirt}
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            width={650}
            height={800}
            src="/images/northprim/5.png"
            alt="Shirt 5"
            className={styles.shirt}
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            width={650}
            height={800}
            src="/images/northprim/6.png"
            alt="Shirt 6"
            className={styles.shirt}
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            width={650}
            height={800}
            src="/images/northprim/7.png"
            alt="Shirt 7"
            className={styles.shirt}
          />
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Slider;
