"use client";
import React, { useRef } from "react";
import styles from "./styles/Hero.module.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const container = useRef();

  useGSAP(
    () => {
      gsap.to("#heroText", {
        opacity: 0,
        scrollTrigger: {
          trigger: "#heroImg",
          start: "top top",
          end: "top bottom",
          scrub: true,
          stagger: 1,
        },
      });
    },
    { scope: container.current }
  );

  return (
    <div ref={container}>
      <div className={styles.heroDescription} id="heroText">
        <h2 className={styles.tagline}>
          We are not an award-winning agency...{" "}
          <span className={styles.gradientText}>Yet!</span>
        </h2>
      </div>

      <div className={styles.heroImageContainer} id="heroImg">
        <div className={styles.heroGridContainer}>
          <div className={styles.heroGrid}>
            <div className={styles.heroGridItem}></div>
            <div className={styles.heroGridItem}></div>
            <div className={styles.heroGridItem}></div>
            <div className={styles.heroGridItem}></div>
            <div className={styles.heroGridItem}></div>
            <div className={styles.heroGridItem}></div>
            <div className={styles.heroGridItem}></div>
            <div className={styles.heroGridItem}></div>
            <div className={styles.heroGridItem}></div>
            <div className={styles.heroGridItem}></div>
            <div className={styles.heroGridItem}></div>
            <div className={styles.heroGridItem}></div>
            <div className={styles.heroGridItem}></div>
            <div className={styles.heroGridItem}></div>
            <div className={styles.heroGridItem}></div>
          </div>
        </div>

        <Image
          className={styles.heroImage}
          alt="hero image"
          src={"/images/hero.png"}
          width={"400"}
          height={"100"}
        ></Image>
      </div>
    </div>
  );
}
