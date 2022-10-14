import React from "react";
import styles from "../../styles/section-css/ownnew/Mobile.module.css";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";

function Mobile() {
  return (
    <div className={styles.Mobile}>
      <div className="wrapper">
        <div className={styles.phoneWrap}>
          <div className={styles.phones}>
            <Parallax speed={5} className={styles.phone1}>
              <Image
                src="/images/ownnew/phone1.webp"
                alt="Ownnew phone mockup"
                width={290}
                height={687}
              />
            </Parallax>
            <Parallax speed={-5} className={styles.phone1}>
              <Image
                src="/images/ownnew/phone2.webp"
                alt="Ownnew phone mockup"
                width={290}
                height={687}
              />
            </Parallax>
          </div>
          <div className={styles.textWrap}>
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

export default Mobile;
