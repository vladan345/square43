import React from "react";
import Image from "next/image";
import Link from "next/link";
import Square from "../../components/Square";
import styles from "../../styles/section-css/home/Project.module.css";

function Project() {
  return (
    <div className={styles.Project}>
      <div className={styles.wrapper}>
        <div className={styles.linkWrapMobile}>
          <Link href="/projects" className="readMore">
            Our work
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
        {/* <Square image="/images/square4.webp" height={560} /> */}
        <div className={styles.projectWrap}>
          <p className={styles.tag}>Projects</p>
          <h2 className={styles.title}>Northprim</h2>
          <p className={styles.subheading}>
            How to create a shining brand image for a company within the highly
            competitive IT industry.
          </p>
          <div className={styles.linkWrap}>
            <Link href="/projects" className="readMore">
              Our work
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

export default Project;
