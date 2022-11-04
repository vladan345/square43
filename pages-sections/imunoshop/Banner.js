import React from "react";
import styles from "../../styles/section-css/imunoshop/Banner.module.css";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

function Banner() {
  return (
    <div className={styles.Banner}>
      <div className={styles.stripe}></div>
      <Image
        src="/images/imunoshop/splash.svg"
        alt="Decorative splash Imunoshop"
        width={666}
        height={660}
        className={styles.splash}
      />

      <Image
        className={styles.bannerImage}
        src="/images/imunoshop/banner.png"
        alt="Imunoshop Banner female"
        width={981}
        height={927}
      />

      <div className={styles.wrapper}>
        <Image
          src="/images/imunoshop/bannerText.svg"
          alt="Decorative banner text Imunoshop"
          width={645}
          height={202}
          className={styles.text}
        />
      </div>
    </div>
  );
}

export default Banner;
