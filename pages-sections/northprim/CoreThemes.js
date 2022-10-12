import React from "react";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";

import styles from "../../styles/section-css/CoreThemes.module.css";

function CoreThemes() {
  return (
    <div className={styles.CoreThemes}>
      <div className="wrapper">
        <div>
          <h2>Core Themes</h2>
          <div className={styles.row}>
            <div className={styles.list}>
              <div className={styles.listItem}>
                <div className={styles.listItemImage}>
                  <Image
                    src="/images/northprim/spray-icon.svg"
                    alt="Northprim icon spray"
                    width="300"
                    height="300"
                    className={styles.listItemImage}
                  />
                </div>
                <div>
                  <h3 className={styles.title}>Cheeky approach</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Amet non sollicitudin arcu integer. Nulla cras pellentesque
                    habitant tortor donec bibendum volutpat.{" "}
                  </p>
                </div>
              </div>
              <div className={styles.listItem}>
                <div className={styles.listItemImage}>
                  <Image
                    src="/images/northprim/bug-icon.svg"
                    alt="Northprim icon bug"
                    width="300"
                    height="300"
                  />
                </div>
                <div>
                  <h3 className={styles.title}>Expect the unexpected</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Amet non sollicitudin arcu integer. Nulla cras pellentesque
                    habitant tortor donec bibendum volutpat.{" "}
                  </p>
                </div>
              </div>
              <div className={styles.listItem}>
                <div className={styles.listItemImage}>
                  <Image
                    className={styles.listItemImage}
                    src="/images/northprim/arm-icon.svg"
                    alt="Northprim icon arm"
                    width="300"
                    height="300"
                  />
                </div>
                <div>
                  <h3 className={styles.title}>Undisputed skill</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Amet non sollicitudin arcu integer. Nulla cras pellentesque
                    habitant tortor donec bibendum volutpat.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.imageWrap}>
              <Parallax speed={10} className={styles.keyboard}>
                <Image
                  src="/images/northprim/S43_NP_Keyboard.png"
                  alt="Northprim woman with a keyboard"
                  width="560"
                  height="728"
                />
              </Parallax>
              <div className={styles.frame}>
                <Image
                  src="/images/northprim/picture_frame.png"
                  alt="frame Northprim"
                  width="550"
                  height="685"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoreThemes;
