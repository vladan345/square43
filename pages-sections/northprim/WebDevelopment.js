import React from "react";
import Image from "next/image";

import styles from "../../styles/section-css/northprim/WebDevelopment.module.css";

function WebDevelopment() {
  return (
    <div className={styles.WebDevelopment}>
      <div className="wrapper">
        <div className={styles.webDevWrap}>
          <div className={styles.col}>
            <h2 className={styles.title}>Web Development</h2>
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
          <div className={`${styles.col} ${styles.right}`}>
            <Image
              src="/images/northprim/webdev-roadmap.svg"
              alt="nodes and web development roadmap Northprim"
              width={600}
              height={544}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebDevelopment;
