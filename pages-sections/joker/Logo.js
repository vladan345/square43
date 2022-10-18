import React from "react";
import Image from "next/image";
import styles from "../../styles/section-css/joker/Logo.module.css";

function Logo() {
  return (
    <div>
      <div className="wrapper">
        <div className={styles.logoWrap}>
          <div className={styles.logo}>
            <Image
              src="/images/joker/joker-logo.svg"
              alt="Guarana Joker logo"
              width={920}
              height={390}
            />
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>print layout</h2>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet non
              sollicitudin arcu integer. Nulla cras pellentesque habitant tortor
              donec bibendum volutpat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logo;
