import React from "react";
import styles from "../../styles/section-css/northprim/ScrollSequence.module.css";

function ScrollSequence() {
  return (
    <div className={styles.ScrollSequence}>
      <video className={styles.video} autoPlay muted loop>
        <source src="/images/northprim/webLaptop.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default ScrollSequence;
