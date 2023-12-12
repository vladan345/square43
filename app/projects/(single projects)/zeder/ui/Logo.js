import Image from "next/image";
import styles from "./styles/Logo.module.css";

function Logo() {
  return (
    <section className={styles.Logo}>
      <div className="wrapper">
        <h2>Logo</h2>
        <p>
          The existing logo needed to be simplified both in terms of imagery and
          copywriting, minimizing the amount of text for a more compelling
          message. Compare the before and after below to see the next step of
          Zeder's brand evolution.
        </p>
        <div className={styles.compare}>
          <div className={styles.col}>
            <div className={styles.imageBackground}>
              <Image
                width={350}
                height={96}
                alt="old logo"
                src="/images/zeder/zeder_old.webp"
              />
            </div>
            <span className={styles.caption}>OLD</span>
          </div>
          <div className={styles.col}>
            <div className={styles.imageBackground}>
              <Image
                width={402}
                height={78}
                alt="old logo"
                src="/images/zeder/zeder-logo.svg"
              />
            </div>
            <span className={styles.caption}>NEW</span>
          </div>
        </div>
        <div className={styles.process}>
          <Image
            width={212}
            height={212}
            alt="stop sign"
            src="/images/zeder/stop.svg"
          />
          <Image
            className={styles.desktopArrow}
            width={180}
            height={20}
            alt="arrow"
            src="/images/zeder/arrow.svg"
          />
          <Image
            className={styles.mobileArrow}
            width={20}
            height={93}
            alt="arrow"
            src="/images/zeder/arrow-down.svg"
          />
          <Image
            width={212}
            height={212}
            alt="deny sign"
            src="/images/zeder/deny.svg"
          />
          <Image
            className={styles.desktopArrow}
            width={180}
            height={20}
            alt="arrow"
            src="/images/zeder/arrow.svg"
          />
          <Image
            className={styles.mobileArrow}
            width={20}
            height={93}
            alt="arrow"
            src="/images/zeder/arrow-down.svg"
          />
          <Image
            width={212}
            height={212}
            alt="symbol"
            src="/images/zeder/symbol.svg"
          />
        </div>
        <p>
          Never forget your roots. We used Zeder's old logo and its traffic sign
          imagery as the basis of the new logo. Reliability, urgency and
          impenetrable safety are first communicated through the color palette
          selection: red, yellow and black take center stage.
        </p>
      </div>
      <div className={styles.cars}>
        <Image
          width={814}
          height={314}
          alt="Pickup Zeder"
          src="/images/zeder/car1.webp"
        />
        <Image
          width={772}
          height={240}
          alt="Pickup Zeder"
          src="/images/zeder/car2.webp"
        />
      </div>
    </section>
  );
}

export default Logo;
