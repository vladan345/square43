"use client";
import { useRef, useEffect } from "react";
import styles from "./styles/Web.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Web() {
  return (
    <section className={styles.Web}>
      <div className="wrapper">
        <div className={styles.row}>
          <div className={styles.col}>
            <h2>
              Web Design
              <br /> & Development
            </h2>
          </div>
          <div className={styles.col}>
            <Image
              src="/images/gogaudi/mobile-video.png"
              alt="Video placeholder"
              width={397}
              height={855}
            />
          </div>
          <div className={styles.col}>
            <p>
              Mi cras cras dictum nunc tincidunt gravida molestie dolor. Nunc
              augue bibendum elementum euismod platea at adipiscing.
            </p>
            <p>
              Orci felis suspendisse lectus felis. Nisi aliquam massa cras
              adipiscing urna at cursus a diam. Suspendisse platea malesuada
              odio a viverra blandit commodo eleifend interdum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
