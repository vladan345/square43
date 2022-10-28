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
                style={{ marginBottom: 200 }}
              />
              <h3 className={styles.category}>Components</h3>
              <Image
                src="/images/imunoshop/components.svg"
                alt="Imunoshop components from website"
                width={337}
                height={287}
                style={{ marginBottom: 200 }}
              />
            </div>
            <div className={styles.col}>
              <h3 className={styles.category}>Typography</h3>
              <Image
                src="/images/imunoshop/fonts2.svg"
                alt="Imunoshop fonts from website"
                width={345}
                height={378}
                style={{ marginBottom: 140 }}
              />
              <p className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                non sollicitudin arcu integer. Nulla cras pellentesque habitant
                tortor donec bibendum volutpat.
              </p>
              <p className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                non sollicitudin arcu integer. Nulla cras pellentesque habitant
                tortor donec bibendum volutpat.
              </p>
            </div>
          </div>
        </div>
        <video autoPlay muted className={styles.video}>
          <source src="/images/imunoshop/imuno-phones.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default DesignDev;
