import React from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import styles from "../../styles/section-css/northprim/Slider.module.css";

function Slider() {
  return (
    <div className={styles.Slider}>
      <div className={styles.stripe}></div>
      <Splide
        aria-label="Northprim Merch Slider"
        options={{
          fixedWidth: "35%",
          rewind: true,
          speed: 2000,
          gap: 100,
          perPage: 3,
          type: "undefined",
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
        }}
      >
        <SplideSlide>
          <Image
            width={650}
            height={800}
            src="/images/northprim/1.png"
            alt="Shirt 1"
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            width={650}
            height={800}
            src="/images/northprim/2.png"
            alt="Shirt 2"
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            width={650}
            height={800}
            src="/images/northprim/3.png"
            alt="Shirt 3"
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            width={650}
            height={800}
            src="/images/northprim/4.png"
            alt="Shirt 4"
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            width={650}
            height={800}
            src="/images/northprim/5.png"
            alt="Shirt 2"
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            width={650}
            height={800}
            src="/images/northprim/6.png"
            alt="Shirt 2"
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            width={650}
            height={800}
            src="/images/northprim/7.png"
            alt="Shirt 2"
          />
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Slider;
