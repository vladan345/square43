import React from "react";
import styles from "../../styles/section-css/dib-travel/Scooter.module.css";
import Image from "next/image";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function Scooter() {
  return (
    <div>
      <div className="wrapper">
        <div className={styles.scooterWrap}>
          <div className={styles.col}>
            <h2 className={styles.title}>Brand communication</h2>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet non
              sollicitudin arcu integer. Nulla cras pellentesque habitant tortor
              donec bibendum volutpat.
              <br />
              <br />
              Tincidunt leo sit interdum maecenas leo. Dolor amet convallis
              senectus aliquet turpis amet ultrices sagittis, tincidunt. Sed
              dignissim nulla nisl purus congue.
            </p>
          </div>
          <div className={styles.col}></div>
        </div>
        <div className={styles.slideWrap}>
          <Splide
            aria-label="Scooter location Slider"
            options={{
              fixedWidth: "1360",
              speed: 4000,
              type: "loop",
              direction: "rtl",
              autoplay: true,
              interval: 4000,
              drag: false,
              updateOnMove: true,
              pagination: false,
              arrows: false,
            }}
            className={styles.splide}
          >
            <SplideSlide>
              <Image
                width={1920}
                height={640}
                src="/images/dib-travel/1.png"
                alt="Location 1"
              />
            </SplideSlide>
            <SplideSlide>
              <Image
                width={1920}
                height={640}
                src="/images/dib-travel/2.png"
                alt="Location 1"
              />
            </SplideSlide>
            <SplideSlide>
              <Image
                width={1920}
                height={640}
                src="/images/dib-travel/3.png"
                alt="Location 1"
              />
            </SplideSlide>
            <SplideSlide>
              <Image
                width={1920}
                height={640}
                src="/images/dib-travel/4.png"
                alt="Location 1"
              />
            </SplideSlide>
          </Splide>
          <div className={styles.scooterImage}>
            <Image
              src="/images/dib-travel/RocketWoman.png"
              alt="Scooter rocket"
              width={640}
              height={640}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scooter;
