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
              User experience was imperative. We had already established the
              brand palette and had enough visual elements to work with - now
              was the time to structure the website in such a way that visitors
              (old and new!) had no issues with navigating the page and finding
              the perfect deal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
