import React from "react";
import styles from "../../styles/section-css/imunoshop/DesignDev.module.css";
import Image from "next/image";

function DesignDev() {
  return (
    <div className={styles.DesignDev}>
      <div className="wrapper">
        <div className={styles.wrapper}>
          <h2 style={styles.title}>Web Design & Development</h2>
          <div className={styles.row}>
            <div className={styles.col}>
              <h3 className={styles.category}>Website colors</h3>
              <Image
                src="/images/imunoshop/colors2.svg"
                alt="Imunoshop color scheme"
                width={500}
                height={170}
                className={styles.color}
              />
              <Image
                src="/images/imunoshop/colorMobile2.svg"
                alt="Imunoshop color scheme"
                width={280}
                height={390}
                className={styles.colorMobile}
              />
              <h3 className={styles.category}>Components</h3>
              <Image
                src="/images/imunoshop/components.svg"
                alt="Imunoshop components from website"
                width={337}
                height={287}
                className={styles.components}
              />
            </div>
            <div className={styles.col}>
              <h3 className={styles.category}>Typography</h3>
              <Image
                src="/images/imunoshop/fonts2.svg"
                alt="Imunoshop fonts from website"
                width={360}
                height={233}
                className={styles.fonts}
              />
              <p className={styles.description}>
                Large sections without any congested paragraphs, only short,
                to-the-point copy and optimized UX layout - that's how we
                approached web design for Imuno Shop.
              </p>
              <p className={styles.description}>
                We made sure to keep the website informative without an
                overwhleming amount of information, keeping in mind that it is
                also an online shop! E-commerce is our forté, so there were no
                doubts about the optimal way of setting it up: all products were
                neatly arranged, filters included, all wrapped with an intuitive
                shopping process that keeps the customer on track until
                checkout.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.videoWrapper} wrapper`}>
        <video autoPlay muted loop className={styles.video}>
          <source src="/images/imunoshop/imuno-phones.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default DesignDev;
