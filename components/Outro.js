import React from "react";
import Link from "next/link";
import styles from "../styles/component-css/Outro.module.css";
import Image from "next/image";

function Outro() {
  return (
    <div className={styles.Outro}>
      <div className={`${styles.wrapper} wrapper`}>
        <video className={styles.video} autoPlay muted loop>
          <source src="/images/northprim/Northprim-hero.mp4" type="video/mp4" />
        </video>
        <div className={styles.content}>
          <p className={styles.next}>Next project</p>
          <h2 className={styles.name}>Project name</h2>
          <p className={styles.slogan}>
            Nascetur orci aliquam at enim et. Egestas tortor ut scelerisque
            enim. Auctor vitae sagittis.
          </p>
          <div className={styles.arrow}>
            <Image
              src="/images/arrow-down-solid.svg"
              alt="arrow icon"
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Outro;
