import React from "react";
import styles from "../../styles/section-css/imunoshop/Posts.module.css";
import Image from "next/image";

function Posts() {
  return (
    <div>
      <div className="wrapper">
        <div className={styles.row}>
          <Image
            src="/images/imunoshop/post1.webp"
            alt="Social media Imunoshop post 1"
            width={755}
            height={373}
          />
          <div className={styles.paragraphs}>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet non
              sollicitudin arcu integer. Nulla cras pellentesque habitant tortor
              donec bibendum volutpat.
            </p>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet non
              sollicitudin arcu integer. Nulla cras pellentesque habitant tortor
              donec bibendum volutpat.
            </p>
          </div>
        </div>
        <div className={styles.row}>
          <Image
            src="/images/imunoshop/post2.webp"
            alt="Social media Imunoshop post 2"
            width={755}
            height={373}
          />
          <div className={styles.paragraphs}>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet non
              sollicitudin arcu integer. Nulla cras pellentesque habitant tortor
              donec bibendum volutpat.
            </p>
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

export default Posts;
