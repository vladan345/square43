import React from "react";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";

import styles from "../../styles/section-css/northprim/CoreThemes.module.css";

function CoreThemes() {
  return (
    <div className={styles.CoreThemes}>
      <div className="wrapper">
        <div>
          <h2 className={styles.heading}>Core Themes</h2>
          <div className={styles.row}>
            <div className={styles.list}>
              <div className={styles.listItem}>
                <div className={styles.listItemImage}>
                  <Image
                    src="/images/northprim/spray-icon.svg"
                    alt="Northprim icon spray"
                    width={160}
                    height={160}
                  />
                </div>
                <div>
                  <h3 className={styles.title}>Cheeky approach</h3>
                  <p className={styles.description}>
                    Why so serious? Even the largest of companies are made out
                    of real people, plus there is no reason to keep work and fun
                    apart!
                  </p>
                </div>
              </div>
              <div className={styles.listItem}>
                <div className={styles.listItemImage}>
                  <Image
                    src="/images/northprim/bug-icon.svg"
                    alt="Northprim icon bug"
                    width={160}
                    height={160}
                  />
                </div>
                <div>
                  <h3 className={styles.title}>Expect the unexpected</h3>
                  <p className={styles.description}>
                    Stereotypes exist and, yes, you would expect and IT company
                    to keep things to the point and very technical. We offered
                    quite a twist
                  </p>
                </div>
              </div>
              <div className={styles.listItem}>
                <div className={styles.listItemImage}>
                  <Image
                    src="/images/northprim/arm-icon.svg"
                    alt="Northprim icon arm"
                    width={160}
                    height={160}
                  />
                </div>
                <div>
                  <h3 className={styles.title}>Undisputed skill</h3>
                  <p className={styles.description}>
                    Adding a fun, casual twist to a company full of exceptional
                    talent without underestimating their skill is a fine art.
                    Luckily, we&apos;re all artists here in Square43.
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
                  width="560"
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
