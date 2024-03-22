import React from "react";
import styles from "./styles/FloatingCard.module.css";
import Image from "next/image";
import Link from "next/link";

export default function FloatingCard({ service }) {
  return (
    <div className={styles.main}>
      <div className={styles.gradient}></div>

      <div className={styles.textbox}>
        <h2
          dangerouslySetInnerHTML={{ __html: service.name }}
          className={styles.title}
        />
        <div className={styles.contentWrapper}>
          <ul className={styles.list}>
            {service.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <Link
            href={"/services" + service.slug.current}
            className={styles.projectsArrowWrapper}
          >
            <div className={styles.viewProjects}>VIEW PROJECTS</div>
            <div className={styles.button}>
              <Image
                src="/images/arrow-white-r.svg"
                alt="button-box"
                height={40}
                width={40}
              />
            </div>
          </Link>
          <div className={styles.buttonBox}>
            <Image
              src="/images/expandsquare6.svg"
              alt="button-box"
              height={24}
              width={24}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
