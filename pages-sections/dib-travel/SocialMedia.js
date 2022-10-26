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
        <div className={styles.textWrap}>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet non
            sollicitudin arcu integer. Nulla cras pellentesque habitant tortor
            donec bibendum volutpat. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Amet non sollicitudin arcu integer. Nulla cras
            pellentesque habitant tortor donec bibendum volutpat.
          </p>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet non
            sollicitudin arcu integer. Nulla cras pellentesque habitant tortor
            donec bibendum volutpat.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
