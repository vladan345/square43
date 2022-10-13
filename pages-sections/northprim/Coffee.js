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
              From comfy hoodies to neonlicious mugs -Northprim&apos;s brand new
              merch line has it all! And thanks to the signature colors and
              style, there&apos;s no mistaking them for any other IT company.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coffee;
