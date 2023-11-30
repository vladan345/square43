"use client";
import React, { useEffect } from "react";
import styles from "../styles/404.module.css";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";

export default function NotFound() {
  useEffect(() => {
    gsap.to(".left", {
      delay: 0.7,
      x: window.innerWidth < 900 ? -120 : -180,
      duration: 0.7,
      ease: "power4",
    });
    gsap.to(".right", {
      delay: 0.7,
      x: window.innerWidth < 900 ? 120 : 180,
      duration: 0.7,
      ease: "power4",
    });
    gsap.to(".page", {
      delay: 1.4,
      duration: 0.7,
      opacity: 1,
      ease: "power4",
    });
    gsap.to(".lost", {
      delay: 1.4,
      duration: 0.7,
      opacity: 1,
      ease: "power4",
    });
  });

  return (
    <div className={styles.NotFound}>
      <div className={`wrapper ${styles.wrapper}`}>
        <div className={styles.titleWrap}>
          <span className={`${styles.four} ${styles.left} left`}>4</span>
          <Image
            src="/images/square404.svg"
            alt="404 square"
            width={185}
            height={185}
            className={styles.square}
          />
          <span className={`${styles.four} ${styles.right} right`}>4</span>
        </div>
        <h2 className={`${styles.subheading} page`}>Page not found.</h2>
        <h2 className={`${styles.lost} lost`}>We all get lost sometimes...</h2>
        <div className={styles.linkWrap}>
          <Link href="/" className={`readMore ${styles.notFoundButton}`}>
            Get me out of here
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
  );
}
