import React from "react";
import styles from "../../styles/section-css/imunoshop/Brand.module.css";
import Image from "next/image";

function Brand() {
  return (
    <div className={styles.Brand}>
      <div className="wrapper">
        <h2 className={styles.title}>Brand Elements</h2>
        <div className={styles.row}>
          <div className={styles.col}>
            <h3 className={styles.category}>Logo guidelines</h3>
            <Image
              src="/images/imunoshop/scheme.svg"
              alt="Imunoshop logo scheme"
              width={593}
              height={231}
              style={{ marginBottom: 140 }}
            />
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
          <div className={styles.col}>
            <h3 className={styles.category}>Brand colors</h3>
            <Image
              src="/images/imunoshop/colors.svg"
              alt="Imunoshop color scheme"
              width={480}
              height={281}
              style={{ marginBottom: 80 }}
            />
            <h3 className={styles.category}>Brand Typefaces</h3>
            <Image
              src="/images/imunoshop/fonts.svg"
              alt="Imunoshop fonts"
              width={600}
              height={236}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brand;
