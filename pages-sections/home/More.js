import React from "react";
import Image from "next/image";
import Link from "next/link";
import Square from "../../components/Square";
import styles from "../../styles/section-css/home/More.module.css";

function More() {
  return (
    <div className={styles.More}>
      <div className={styles.wrapper}>
        <Square image="/images/square3.webp" height={560} />
        <div className={styles.moreWrap}>
          <p className={styles.tag}>Behind our Drive</p>
          <h2 className={styles.title}>More than a team</h2>
          <p className={styles.subheading}>
            Though we are few, we are a movement. Feel free to join!
          </p>
          <h2 className={styles.title}>Less stress</h2>
          <p className={styles.subheading}>
            We operate on a a five-day-working-week basis and plan accordingly.
            You respect our time and we respect yours.
          </p>
        </div>
      </div>
    </div>
  );
}

export default More;
