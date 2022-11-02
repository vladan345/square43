import React from "react";
import styles from "../../styles/section-css/imunoshop/Laptop.module.css";
import Image from "next/image";

function Laptop() {
  return (
    <div className={styles.Laptop}>
      <div className={styles.stripe}></div>
      <div className={styles.videoWrap}>
        <video autoPlay muted loop className={styles.video}>
          <source src="/images/imunoshop/imunoLaptop.mp4" type="video/mp4" />
        </video>
        <Image
          src="/images/imunoshop/laptop-mockup.webp"
          alt="Laptop frame with video in it"
          fill
        />
      </div>
    </div>
  );
}

export default Laptop;
