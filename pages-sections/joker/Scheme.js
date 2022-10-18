import React from "react";
import Image from "next/image";
import styles from "../../styles/section-css/joker/Scheme.module.css";

function Scheme() {
  return (
    <div>
      <div className="wrapper">
        <div className={styles.schemeWrap}>
          <div className={styles.scheme}>
            <video className={styles.video} autoPlay muted>
              <source
                src="/images/joker/blueprint.mp4"
                type="video/mp4"
              ></source>
            </video>
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

export default Scheme;
