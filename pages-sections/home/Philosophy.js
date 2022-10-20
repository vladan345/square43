import React from "react";
import styles from "../../styles/section-css/home/Philosophy.module.css";
import Square from "../../components/Square";
import Link from "next/link";
import Image from "next/image";

function Philosophy() {
  return (
    <div className={styles.Philosophy}>
      <div className={styles.wrapper}>
        <div className={styles.philosophyWrap}>
          <p className={styles.tag}>Philosophy</p>
          <h2 className={styles.statement}>
            Square43 is a group of insanely talented individuals that share the
            same approach to their work.
          </h2>
          <p className={styles.subheading}>
            We put ourselves in your shoes - and then we upgrade them.
          </p>
          <div className={styles.linkWrap}>
            <Link href="/">
              <a className="readMore">
                Read more
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
        <Square image="/images/square1.webp" height={560} />
        <div className={styles.linkWrapMobile}>
          <Link href="/">
            <a className="readMore">
              Read more
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

export default Philosophy;
