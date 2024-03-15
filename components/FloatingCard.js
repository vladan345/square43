import React from "react";
import styles from "./styles/FloatingCard.module.css";
import Image from "next/image";
import Link from "next/link";

export default function FloatingCard(props) {
  return (
    <div>
      <div
        className={styles.main}
        style={{
          top: props.service.top,
          left: props.service.left,
        }}
      >
        <div className={styles.gradient}></div>

        <div className={styles.textbox}>
          <h2
            dangerouslySetInnerHTML={{ __html: props.service.title }}
            className={styles.title}
          />
          <div className={styles.contentWrapper}>
            <ul className={styles.list}>
              {props.service.subservices.map((subservice) => (
                <li key={subservice}>{subservice}</li>
              ))}
            </ul>
            <Link
              href={"/services" + props.service.link}
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
    </div>
  );
}
