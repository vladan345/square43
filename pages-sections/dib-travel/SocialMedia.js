import React from "react";
import styles from "../../styles/section-css/dib-travel/SocialMedia.module.css";
import Image from "next/image";

function SocialMedia() {
  return (
    <div>
      <div className="wrapper">
        <h2 className={styles.title}>Social media</h2>
        <div className={styles.row}>
          <Image
            className={styles.iamge}
            src="/images/dib-travel/social1.webp"
            alt="Social media post DIB Travel"
            width={434}
            height={434}
          />
          <Image
            className={styles.iamge}
            src="/images/dib-travel/social2.webp"
            alt="Social media post DIB Travel"
            width={434}
            height={434}
          />
          <Image
            className={styles.iamge}
            src="/images/dib-travel/social3.webp"
            alt="Social media post DIB Travel"
            width={434}
            height={434}
          />
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
