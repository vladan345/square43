import styles from "./styles/OurServices.module.css";
import Link from "next/link";
import Image from "next/image";

function OurServices() {
  return (
    <div className={styles.OurServices}>
      <div className={styles.bgImage}>
        <Image
          src="/images/starry-night.png"
          alt="Ripple background image"
          fill
        />
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.linkWrapMobile}>
          <Link href="/services" className="readMore">
            Our services
            <div className="icon">
              <Image
                src="/images/arrow.svg"
                alt="Arrow icon"
                width={40}
                height={40}
              />
            </div>
          </Link>
        </div>
        {/* <Square image="/images/square2.webp" height={560} /> */}
        <div className={styles.ourServicesWrap}>
          <h2 className={styles.statement}>
            We think outside the square. With us - you will too.
          </h2>
          <div className={styles.linkWrap}>
            <Link href="/services" className="readMore">
              Our services
              <div className="icon">
                <Image
                  src="/images/arrow.svg"
                  alt="Arrow icon"
                  width={40}
                  height={40}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
