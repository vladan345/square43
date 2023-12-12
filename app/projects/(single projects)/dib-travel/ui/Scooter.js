"use client";
import styles from "./styles/Scooter.module.css";
import Image from "next/image";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

function Scooter() {
  return (
    <div className={styles.Scooter}>
      <div className="wrapper">
        <div className={styles.scooterWrap}>
          <div className={styles.col}>
            <h2 className={styles.title}>Brand communication</h2>
            <p className={styles.description}>
              Approaching corporate travel with a clichéd formal tone can hardly
              set you apart. More importantly, business professionals are real
              people who know how to have fun!
              <br />
              <br />
              This is why we opted for a more approachable image, witty copy and
              out-of-the box visuals.
            </p>
          </div>
          <div className={styles.col}></div>
        </div>
        <div className={styles.sliderWrap}>
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
                priority
              />
            </SplideSlide>
            <SplideSlide>
              <Image
                width={1920}
                height={640}
                src="/images/dib-travel/2.png"
                alt="Location 2"
                priority
              />
            </SplideSlide>
            <SplideSlide>
              <Image
                width={1920}
                height={640}
                src="/images/dib-travel/3.png"
                alt="Location 3"
                priority
              />
            </SplideSlide>
            <SplideSlide>
              <Image
                width={1920}
                height={640}
                src="/images/dib-travel/4.png"
                alt="Location 4"
                priority
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
