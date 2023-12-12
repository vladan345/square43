"use client";
import styles from "./styles/Mobile.module.css";
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
              A mobile-first website design was a priority among all other
              requests!
            </p>
            <p className={styles.description}>
              At the age when most websites are accessed via smartphones, it is
              essential for your website to be fully adapted for this format too
              - ideally without sacrificing anything from the original design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
