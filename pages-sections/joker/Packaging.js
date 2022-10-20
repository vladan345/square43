import React from "react";
import Image from "next/image";
import styles from "../../styles/section-css/joker/Packaging.module.css";
import { Parallax } from "react-scroll-parallax";
function Packaging() {
  return (
    <div className={styles.Packaging}>
      <div className={styles.wrapper}>
        <Parallax className={styles.jokic} speed={15}>
          <Image
            src="/images/joker/nikola-jokic.png"
            alt="Nikola Jokic Guarana Joker"
            width={560}
            height={781}
          />
        </Parallax>
        <div className={styles.contentWrap}>
          <div className={styles.col}>
            <h2>Packaging Design</h2>
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
          <div className={styles.col}>
            <div className={styles.canWrap}>
              <Parallax
                className={`${styles.can} ${styles.left}`}
                translateX={["0px", "100px"]}
              >
                <Image
                  src="/images/joker/leva.webp"
                  alt="Guarana Joker can"
                  width={311}
                  height={648}
                />
              </Parallax>
              <Parallax
                className={`${styles.can} ${styles.right}`}
                translateX={["0px", "-100px"]}
              >
                <Image
                  src="/images/joker/desna.webp"
                  alt="Guarana Joker can"
                  width={412}
                  height={679}
                />
              </Parallax>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Packaging;
