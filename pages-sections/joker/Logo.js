import React from "react";
import Image from "next/image";
import styles from "../../styles/section-css/joker/Logo.module.css";
import { gsap } from "gsap";
import { InView } from "react-intersection-observer";
function Logo() {
  return (
    <div>
      <div className={`${styles.wrapper} wrapper`}>
        <div className={styles.logoWrap}>
          <InView
            as="div"
            className={`${styles.logo} logoImage`}
            onChange={(inView) => {
              if (inView) {
                gsap.to(".logoImage", {
                  duration: 1,
                  y: 0,
                  opacity: 1,
                  ease: "power4",
                });
              }
            }}
          >
            <Image
              src="/images/joker/joker-logo.svg"
              alt="Guarana Joker logo"
              width={920}
              height={535}
            />
          </InView>
          <div className={styles.content}>
            <h2 className={styles.title}>Our vision</h2>
            <p className={styles.description}>
              every can purchased becomes your own piece of signed merch! This
              is why we simply had to include the Joker's original signature and
              create a bond between the product and the buyer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logo;
