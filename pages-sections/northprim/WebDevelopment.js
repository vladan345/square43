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
              Keeping things simple and intuitive in terms of web structure is
              how we roll. We made sure to set up all key sections an IT
              company&apos;s website should have.
            </p>
            <p className={styles.description}>
              This was crucial so that both new job applicants and potential
              clients could see everything they needed in one place.
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
