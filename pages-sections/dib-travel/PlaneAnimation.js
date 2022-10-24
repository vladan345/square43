import React from "react";
import styles from "../../styles/section-css/dib-travel/PlaneAnimation.module.css";
import Image from "next/image";

function PlaneAnimation() {
  return (
    <div>
      <div className={styles.background}>
        <Image
          src="/images/dib-travel/airportBg.svg"
          alt="Airport Background"
          width={1920}
          height={1080}
        />
      </div>
      <div className={styles.background}>
        <Image
          src="/images/dib-travel/plane.svg"
          alt="Airport Background"
          width={1920}
          height={1080}
        />
      </div>
      <Image
        src="/images/dib-travel/airportFg.svg"
        alt="Airport Background"
        width={1920}
        height={1080}
      />
      <Image
        src="/images/dib-travel/suitcases.svg"
        alt="Airport Background"
        width={1920}
        height={1080}
      />
    </div>
  );
}

export default PlaneAnimation;
