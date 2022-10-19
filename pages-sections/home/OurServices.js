import React from "react";
import styles from "../../styles/section-css/home/OurServices.module.css";
import Square from "../../components/Square";
import Link from "next/link";
import Image from "next/image";

function OurServices() {
  return (
    <div className={styles.OurServices}>
      <div className={styles.bgImage}>
        <Image
          src="/images/ripple.webp"
          alt="Ripple background image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="wrapper">
        <Square image="/images/square2.webp" height={480} />
        <div className={styles.ourServicesWrap}>
          <h2 className={styles.statement}>
            We think outside the Square, so should you!
          </h2>
          <Link href="/services">
            <a className="readMore">
              Our services
              <div className="icon">
                <Image
                  src="/images/arrow.svg"
                  alt="Arrow icon"
                  width={40}
                  height={40}
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
