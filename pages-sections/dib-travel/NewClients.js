import React from "react";
import styles from "../../styles/section-css/dib-travel/NewClients.module.css";
import Image from "next/image";

function NewClients() {
  return (
    <div className={styles.NewClients}>
      <div className="wrapper">
        <h2 className={styles.title}>Welcoming new clients</h2>
        <div className={styles.videoWrap}>
          <video
            style={{ width: "100%", margin: "0 auto" }}
            autoPlay
            muted
            loop
          >
            <source src="/images/dib-travel/welcome.mp4" type="video/mp4" />
          </video>
          {/* <Image
          src="/images/northprim/taglines.svg"
          alt="Tagline placeholder"
          width={1360}
          height={720}
        /> */}
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
        <div className={styles.mobiles}>
          <Image
            className={styles.mobileImage}
            src="/images/dib-travel/mobile1.webp"
            alt="mobile mockup DIB Travel"
            width={539}
            height={820}
          />
          <Image
            className={styles.mobileImage}
            src="/images/dib-travel/mobile2.webp"
            alt="mobile mockup DIB Travel"
            width={539}
            height={820}
          />
          <Image
            className={styles.mobileImage}
            src="/images/dib-travel/mobile3.webp"
            alt="mobile mockup DIB Travel"
            width={539}
            height={820}
          />
        </div>
      </div>
      <div className={styles.mobileDescription}>
        <div className="wrapper">
          <div className={styles.mobileWrap}>
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
              donec bibendum volutpat. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Amet non sollicitudin arcu integer. Nulla cras
              pellentesque habitant tortor donec bibendum volutpat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewClients;
