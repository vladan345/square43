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
            <div className={styles.mobile}>
              <video
                style={{ width: "95%", margin: "0 auto" }}
                autoPlay
                muted
                loop
                playsInline
              >
                <source
                  src="/images/gogaudi/mobileShowcase.mp4"
                  type="video/mp4"
                />
              </video>
              <Image
                src="/images/gogaudi/mobileMask.svg"
                alt="Video placeholder"
                width={404}
                height={869}
              />
            </div>
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
