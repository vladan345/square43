import React from "react";
import Image from "next/image";
import styles from "../../styles/section-css/Print.module.css";

function Print() {
  return (
    <div className={styles.Print}>
      <div className={`${styles.wrapper} wrapper`}>
        <div>
          <h2>Print Design</h2>
          <div className={styles.paragraphs}>
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
        </div>
        <Image
          src="/images/northprim/print-sticker.webp"
          alt="Northprim Code or die sticker print"
          width={562}
          height={550}
        />
      </div>
    </div>
  );
}

export default Print;
