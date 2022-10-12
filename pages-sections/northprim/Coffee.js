import React from "react";
import styles from "../../styles/section-css/Coffee.module.css";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

function Coffee() {
  return (
    <div className={styles.Coffee}>
      <div className="wrapper">
        <div className={styles.row}>
          <div className={styles.merchImages}>
            <div className={styles.image}>
              <Image
                width={904}
                height={720}
                src="/images/northprim/back.png"
                alt="Northprim merchendise"
              />
            </div>
            <Parallax speed={20} className={`${styles.spill} ${styles.image}`}>
              <Image
                width={904}
                height={720}
                src="/images/northprim/spill.png"
                alt="Northprim merch coffee spill"
              />
            </Parallax>
            <div className={styles.image}>
              <Image
                width={904}
                height={720}
                src="/images/northprim/front.png"
                alt="Northprim merchendise"
              />
            </div>
          </div>
          <div className={styles.coffeeContent}>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet non
              sollicitudin arcu integer. Nulla cras pellentesque habitant tortor
              donec bibendum volutpat.
            </p>
            <p className={styles.description}>
              Tincidunt leo sit interdum maecenas leo. Dolor amet convallis
              senectus aliquet turpis amet ultrices sagittis, tincidunt. Sed
              dignissim nulla nisl purus congue.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coffee;
